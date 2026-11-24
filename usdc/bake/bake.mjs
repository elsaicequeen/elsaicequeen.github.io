// Bakes the data files the page reads. No API keys are needed or read.
//
//   node bake/bake.mjs              DefiLlama snapshot + CCTP burns (7 whole UTC days)
//   node bake/bake.mjs llama        DefiLlama snapshot only
//   node bake/bake.mjs cctp [days]  CCTP burns only
//
// Output: data/defillama-YYYY-MM-DD.json, data/cctp-YYYY-MM-DD.json, data/latest.json

import { writeFile, readFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { ENDPOINTS, tokensFromText, normaliseShare, normaliseChains, normalisePrices } from "../js/model.js";
import { bakeCctp } from "./cctp.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "data");
const now = new Date().toISOString();
const day = now.slice(0, 10);
const [what = "all", daysArg] = process.argv.slice(2);

async function getJson(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${url} -> HTTP ${res.status}`);
  return res.json();
}

async function bakeLlama() {
  const [all, assets, prices] = await Promise.all([ENDPOINTS.allCharts, ENDPOINTS.assets, ENDPOINTS.prices].map(getJson));
  const [usdc, usdt] = await Promise.all([ENDPOINTS.usdcHistory, ENDPOINTS.usdtHistory].map(async (u) => {
    const res = await fetch(u);
    if (!res.ok) throw new Error(`${u} -> HTTP ${res.status}`);
    return tokensFromText(await res.text());
  }));
  return {
    source: "DefiLlama stablecoins API",
    bakedAt: now,
    share: normaliseShare(all, usdc, usdt),
    chains: normaliseChains(assets, now),
    peg: normalisePrices(prices),
  };
}

await mkdir(out, { recursive: true });
let latest = {};
try { latest = JSON.parse(await readFile(join(out, "latest.json"), "utf8")); } catch { /* first run */ }

if (what === "all" || what === "llama") {
  const llama = await bakeLlama();
  latest.defillama = `defillama-${day}.json`;
  await writeFile(join(out, latest.defillama), JSON.stringify(llama));
  console.log(`defillama: share to ${llama.share.asOf}, ${llama.chains.rows.length} chains, peg to ${llama.peg.asOf}`);
}

if (what === "all" || what === "cctp") {
  const cctp = await bakeCctp({ days: Number(daysArg) || 7 });
  if (!cctp.sourcesCovered.length) throw new Error("cctp: every chain failed, keeping the previous file");
  latest.cctp = `cctp-${day}.json`;
  await writeFile(join(out, latest.cctp), JSON.stringify(cctp, null, 1));
  console.log(`cctp: ${cctp.window.from}..${cctp.window.to}, ${cctp.sourcesCovered.join(", ")}: ${cctp.totals.count} transfers, $${Math.round(cctp.totals.volume).toLocaleString("en-US")}`);
}

latest.bakedAt = now;
await writeFile(join(out, "latest.json"), JSON.stringify(latest, null, 2) + "\n");
