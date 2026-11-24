// CCTP burns from raw on-chain logs, through free public RPC endpoints (no keys).
//
// Every cross-chain USDC transfer over CCTP starts with a DepositForBurn event on the
// source chain's TokenMessenger. This module pulls those events for a window of whole
// UTC days, decodes amount and destination, and aggregates by day, source and corridor.
//
// Sources (checked 2026-11-24):
//   event layouts  github.com/circlefin/evm-cctp-contracts  src/TokenMessenger.sol (V1),
//                  src/v2/TokenMessengerV2.sol (V2)
//   addresses      developers.circle.com/cctp/evm-smart-contracts (V2),
//                  developers.circle.com/cctp/v1/evm-smart-contracts (V1)
//   domain ids     developers.circle.com/cctp/cctp-supported-blockchains
//   USDC tokens    developers.circle.com/stablecoins/usdc-contract-addresses

import { keccak256 } from "./keccak.mjs";

export const SIG_V1 = "DepositForBurn(uint64,address,uint256,address,bytes32,uint32,bytes32,bytes32)";
export const SIG_V2 = "DepositForBurn(address,uint256,address,bytes32,uint32,bytes32,bytes32,uint256,uint32,bytes)";
const TOPIC_V1 = keccak256(SIG_V1);
const TOPIC_V2 = keccak256(SIG_V2);
const USDC_TRANSFER = keccak256("Transfer(address,address,uint256)");

const TOKEN_MESSENGER_V2 = "0x28b5a0e9C621a5BadaA536219b3a228C8168cf5d";

export const DOMAINS = {
  0: "Ethereum", 1: "Avalanche", 2: "OP Mainnet", 3: "Arbitrum", 4: "Noble", 5: "Solana", 6: "Base",
  7: "Polygon PoS", 8: "Sui", 9: "Aptos", 10: "Unichain", 11: "Linea", 12: "Codex", 13: "Sonic",
  14: "World Chain", 15: "Monad", 16: "Sei", 17: "BNB Smart Chain", 18: "XDC", 19: "HyperEVM",
  21: "Ink", 22: "Plume", 25: "Starknet", 26: "Arc", 27: "Stellar", 28: "EDGE", 29: "Injective",
  30: "Morph", 31: "Pharos", 32: "Cronos", 33: "Plasma", 37: "X Layer",
};

// Source chains baked. Each RPC was picked because it serves eth_getLogs at least
// 30 days back without a key; maxRange is that provider's block-range cap.
export const CHAINS = [
  { name: "Ethereum", domain: 0, rpc: "https://rpc.mevblocker.io", maxRange: 10000,
    v1: "0xBd3fa81B58Ba92a82136038B25aDec7066af3155", usdc: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48" },
  { name: "Base", domain: 6, rpc: "https://base-rpc.publicnode.com", maxRange: 50000,
    v1: "0x1682Ae6375C4E4A97e4B583BC394c861A46D8962", usdc: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" },
  { name: "Arbitrum", domain: 3, rpc: "https://arb1.arbitrum.io/rpc", maxRange: 100000,
    v1: "0x19330d10D9Cc8751218eaf51E8885D058642E08A", usdc: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831" },
  { name: "OP Mainnet", domain: 2, rpc: "https://mainnet.optimism.io", maxRange: 10000,
    v1: "0x2B4069517957735bE00ceE0fadAE88a26365528f", usdc: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85" },
  { name: "Avalanche", domain: 1, rpc: "https://avalanche-c-chain-rpc.publicnode.com", maxRange: 50000,
    receiptRpc: "https://api.avax.network/ext/bc/C/rpc",
    v1: "0x6B25532e1060CE10cc3B0A99e5683b91BFDe6982", usdc: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E" },
  { name: "Polygon PoS", domain: 7, rpc: "https://polygon-bor-rpc.publicnode.com", maxRange: 10000,
    v1: "0x9daF8c91AEFAE50b9c0E69629D3F6Ca40cA3B3FE", usdc: "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359" },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const hex = (n) => "0x" + n.toString(16);
const lc = (s) => s.toLowerCase();
const word = (data, i) => data.slice(2 + i * 64, 2 + (i + 1) * 64);
const isoDay = (unix) => new Date(unix * 1000).toISOString().slice(0, 10);

class RangeError_ extends Error {}

async function rpc(url, method, params, { attempts = 6, pause = 150 } = {}) {
  let wait = 1000;
  for (let a = 1; ; a++) {
    await sleep(pause);
    let msg;
    try {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 45000);
      const res = await fetch(url, {
        method: "POST", signal: ctl.signal,
        headers: { "content-type": "application/json", "user-agent": "usdc-cctp-bake/1.0" },
        body: JSON.stringify({ jsonrpc: "2.0", id: 1, method, params }),
      });
      clearTimeout(t);
      const text = await res.text();
      let body = null;
      try { body = JSON.parse(text); } catch { /* not json */ }
      if (body && "result" in body && !body.error) return body.result;
      msg = body?.error?.message ?? `HTTP ${res.status}`;
      if (/range|block range|spans|too many|limit of|exceed maximum|10,000|more than/i.test(msg) && !/rate/i.test(msg)) throw new RangeError_(msg);
    } catch (e) {
      if (e instanceof RangeError_) throw e;
      msg = msg ?? e.name;
    }
    if (a >= attempts) throw new Error(`${method} failed after ${a} attempts: ${msg}`);
    await sleep(wait);
    wait = Math.min(wait * 2, 15000);
  }
}

const blockTs = async (url, n) => parseInt((await rpc(url, "eth_getBlockByNumber", [hex(n), false])).timestamp, 16);

// First block with timestamp >= ts, by interpolation then bisection.
async function blockAtOrAfter(url, ts, lo, hi, cache) {
  const get = async (n) => { if (!cache.has(n)) cache.set(n, await blockTs(url, n)); return cache.get(n); };
  let tlo = await get(lo), thi = await get(hi);
  if (ts <= tlo) return lo;
  if (ts > thi) return hi + 1;
  while (hi - lo > 1) {
    let mid = hi - lo > 64 ? Math.round(lo + ((ts - tlo) / (thi - tlo)) * (hi - lo)) : Math.floor((lo + hi) / 2);
    mid = Math.min(hi - 1, Math.max(lo + 1, mid));
    const tm = await get(mid);
    if (tm < ts) { lo = mid; tlo = tm; } else { hi = mid; thi = tm; }
  }
  return hi;
}

async function getLogsChunked(chain, from, to, log) {
  const out = [];
  let size = chain.maxRange;
  let start = from;
  let calls = 0;
  while (start <= to) {
    const end = Math.min(to, start + size - 1);
    try {
      const logs = await rpc(chain.rpc, "eth_getLogs", [{
        fromBlock: hex(start), toBlock: hex(end),
        address: [TOKEN_MESSENGER_V2, chain.v1],
        topics: [[TOPIC_V1, TOPIC_V2]],
      }]);
      calls++;
      out.push(...logs);
      start = end + 1;
      if (calls % 20 === 0) log(`  ${chain.name}: ${Math.round(((start - from) / (to - from + 1)) * 100)}%, ${out.length} logs`);
    } catch (e) {
      if (e instanceof RangeError_ && size > 500) { size = Math.floor(size / 2); continue; }
      throw e;
    }
  }
  return { logs: out, calls };
}

function decode(chain, l) {
  const t0 = lc(l.topics[0]);
  const v1 = t0 === TOPIC_V1;
  const v2 = t0 === TOPIC_V2;
  if (!v1 && !v2) return null;
  const addr = lc(l.address);
  if (v1 && addr !== lc(chain.v1)) return null;
  if (v2 && addr !== lc(TOKEN_MESSENGER_V2)) return null;
  // V1 topics: [sig, nonce, burnToken, depositor]; V2 topics: [sig, burnToken, depositor, minFinalityThreshold]
  const burnToken = "0x" + (v1 ? l.topics[2] : l.topics[1]).slice(26);
  const amountRaw = BigInt("0x" + word(l.data, 0));
  const destDomain = Number(BigInt("0x" + word(l.data, 2)));
  const minFinality = v2 ? Number(BigInt(l.topics[3])) : null;
  return {
    block: parseInt(l.blockNumber, 16), tx: l.transactionHash, logIndex: parseInt(l.logIndex, 16),
    burnToken: lc(burnToken), amountRaw, destDomain,
    version: v1 ? "v1" : "v2",
    speed: v1 ? "standard" : minFinality <= 1000 ? "fast" : "standard",
  };
}

// Independent check: the same transaction must burn the same amount of USDC,
// i.e. emit a USDC Transfer(…, to = 0x0) for that amount.
async function receiptCheck(chain, t) {
  let r;
  try { r = await rpc(chain.receiptRpc ?? chain.rpc, "eth_getTransactionReceipt", [t.tx]); } catch { r = null; }
  if (!r || !Array.isArray(r.logs)) return null;               // node can't serve the receipt: unverified
  const burns = r.logs.filter((l) => lc(l.address) === lc(chain.usdc) && lc(l.topics[0]) === USDC_TRANSFER && /^0x0{64}$/.test(l.topics[2]))
    .map((l) => BigInt(l.data));
  return burns.some((b) => b === t.amountRaw);
}

export async function bakeCctp({ days = 7, log = console.log } = {}) {
  const now = Math.floor(Date.now() / 1000);
  const endTs = now - (now % 86400);              // today 00:00 UTC, exclusive
  const startTs = endTs - days * 86400;
  const dayStarts = Array.from({ length: days + 1 }, (_, i) => startTs + i * 86400);

  const chainsOut = [];
  const transfers = [];
  const samples = [];

  await Promise.all(CHAINS.map(async (chain) => {
    const info = { name: chain.name, domain: chain.domain, rpc: new URL(chain.rpc).host, ok: false };
    chainsOut.push(info);
    try {
      const head = parseInt(await rpc(chain.rpc, "eth_blockNumber", []), 16);
      const headTs = await blockTs(chain.rpc, head);
      const cache = new Map([[head, headTs]]);
      // rough lower bound well before the window, refined by search
      const guessBt = (headTs - (await blockTs(chain.rpc, head - 10000))) / 10000;
      const lo = Math.max(1, head - Math.ceil(((headTs - startTs) / guessBt) * 1.2) - 1000);
      const bounds = [];
      for (const ts of dayStarts) bounds.push(await blockAtOrAfter(chain.rpc, ts, lo, head, cache));
      const from = bounds[0], to = bounds[bounds.length - 1] - 1;
      log(`${chain.name}: blocks ${from}..${to}`);
      const { logs, calls } = await getLogsChunked(chain, from, to, log);
      const seen = new Set();
      const tokens = {};
      let kept = 0;
      for (const l of logs) {
        const key = `${l.transactionHash}:${l.logIndex}`;
        if (seen.has(key) || l.removed) continue;
        seen.add(key);
        const d = decode(chain, l);
        if (!d) continue;
        tokens[d.burnToken] = (tokens[d.burnToken] ?? 0) + 1;
        if (d.burnToken !== lc(chain.usdc)) continue;      // USDC only
        const dayIdx = bounds.findIndex((b, i) => i < days && d.block >= b && d.block < bounds[i + 1]);
        if (dayIdx < 0) continue;
        transfers.push({ ...d, src: chain.name, day: isoDay(dayStarts[dayIdx]) });
        kept++;
      }
      Object.assign(info, { ok: true, fromBlock: from, toBlock: to, rpcCalls: calls, logs: seen.size, usdcTransfers: kept, burnTokens: tokens });
      // receipt cross-check on up to 3 transfers per chain: largest, median, smallest
      const mine = transfers.filter((t) => t.src === chain.name).sort((a, b) => (a.amountRaw < b.amountRaw ? 1 : -1));
      for (const t of [mine[0], mine[Math.floor(mine.length / 2)], mine[mine.length - 1]].filter(Boolean)) {
        samples.push({ chain: chain.name, tx: t.tx, block: t.block, amountUSDC: Number(t.amountRaw) / 1e6, to: DOMAINS[t.destDomain] ?? `domain ${t.destDomain}`, version: t.version, receiptBurnMatches: await receiptCheck(chain, t) });
      }
      log(`${chain.name}: ${kept} USDC burns from ${seen.size} logs in ${calls} getLogs calls`);
    } catch (e) {
      info.error = String(e.message).slice(0, 200);
      log(`${chain.name}: DROPPED (${info.error})`);
    }
  }));

  // ---- aggregate ----
  const usd = (raw) => Number(raw) / 1e6;
  const okChains = CHAINS.filter((c) => chainsOut.find((i) => i.name === c.name)?.ok).map((c) => c.name);
  const daily = {};
  const corridors = {};
  const modes = {};
  for (const t of transfers) {
    const dst = DOMAINS[t.destDomain] ?? `Domain ${t.destDomain}`;
    const v = usd(t.amountRaw);
    const dk = `${t.day}|${t.src}`;
    daily[dk] ??= { day: t.day, src: t.src, volume: 0, count: 0 };
    daily[dk].volume += v; daily[dk].count++;
    const ck = `${t.src}|${dst}`;
    corridors[ck] ??= { src: t.src, dst, volume: 0, count: 0 };
    corridors[ck].volume += v; corridors[ck].count++;
    const mk = t.version === "v1" ? "v1" : `v2-${t.speed}`;
    modes[mk] ??= { volume: 0, count: 0 };
    modes[mk].volume += v; modes[mk].count++;
  }
  const round = (o) => ({ ...o, volume: Math.round(o.volume * 100) / 100 });
  return {
    source: "DepositForBurn events (CCTP V1 TokenMessenger and V2 TokenMessengerV2), read with eth_getLogs from free public RPC endpoints",
    bakedAt: new Date().toISOString(),
    window: { from: isoDay(startTs), to: isoDay(endTs - 86400), days, note: "whole UTC days; block boundaries found per chain by timestamp" },
    eventTopics: { [SIG_V1]: TOPIC_V1, [SIG_V2]: TOPIC_V2 },
    chains: chainsOut.sort((a, b) => CHAINS.findIndex((c) => c.name === a.name) - CHAINS.findIndex((c) => c.name === b.name)),
    sourcesCovered: okChains,
    totals: { volume: Math.round(transfers.reduce((s, t) => s + usd(t.amountRaw), 0) * 100) / 100, count: transfers.length },
    modes: Object.fromEntries(Object.entries(modes).map(([k, v]) => [k, round(v)])),
    daily: Object.values(daily).map(round).sort((a, b) => (a.day + a.src < b.day + b.src ? -1 : 1)),
    corridors: Object.values(corridors).map(round).sort((a, b) => b.volume - a.volume),
    receiptSamples: samples,
  };
}
