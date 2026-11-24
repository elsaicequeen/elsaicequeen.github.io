// Data layer shared by the page and the bake script (bake/bake.mjs).
// Raw DefiLlama responses go in, a small normalised model comes out, and every
// finding on the page is computed from that model. Nothing here is hard-coded.

export const API = "https://stablecoins.llama.fi";
export const ENDPOINTS = {
  allCharts: `${API}/stablecoincharts/all`,
  // Per-coin history. The lighter /stablecoincharts/all?stablecoin=N endpoint sends a
  // duplicated Access-Control-Allow-Origin header, which browsers reject, so the page
  // reads the "tokens" array from the full asset endpoint instead (same numbers).
  usdcHistory: `${API}/stablecoin/2`,
  usdtHistory: `${API}/stablecoin/1`,
  assets: `${API}/stablecoins?includePrices=true`,
  prices: `${API}/stablecoinprices`,
};

const DAY = 86400;
const SHARE_YEARS = 3;     // history kept for the share chart
const PRICE_DAYS = 365;    // window for the peg check
export const PEG_BAND_BPS = 10;

const isoDay = (unix) => new Date(unix * 1000).toISOString().slice(0, 10);
const usd = (o) => (o && typeof o.peggedUSD === "number" ? o.peggedUSD : null);

function need(cond, msg) { if (!cond) throw new Error(`Unexpected DefiLlama shape: ${msg}`); }

// --- normalisers (raw API -> model groups) ---------------------------------

// The asset endpoints are ~20 MB of JSON, almost all of it per-chain history this page
// doesn't use. "tokens" is the last key, so parse just that slice when possible.
export function tokensFromText(text) {
  const i = text.lastIndexOf('"tokens":[');
  if (i !== -1) {
    try { return JSON.parse(text.slice(i + 9, text.lastIndexOf("]") + 1)); } catch { /* fall through */ }
  }
  return JSON.parse(text).tokens;
}

// all: /stablecoincharts/all rows; usdc, usdt: "tokens" arrays from /stablecoin/{id}
export function normaliseShare(all, usdc, usdt) {
  need(Array.isArray(all) && all.length && Array.isArray(usdc) && Array.isArray(usdt), "chart arrays");
  const byDate = (arr) => new Map(arr.map((r) => [+r.date, usd(r.totalCirculating ?? r.circulating)]));
  const u = byDate(usdc), t = byDate(usdt);
  const last = Math.max(...all.map((r) => +r.date));
  const from = last - SHARE_YEARS * 365 * DAY - 7 * DAY;
  const rows = [];
  for (const r of all) {
    const d = +r.date;
    if (d < from) continue;
    const total = usd(r.totalCirculating);
    if (!total || u.get(d) == null || t.get(d) == null) continue;
    rows.push([isoDay(d), Math.round(total), Math.round(u.get(d)), Math.round(t.get(d))]);
  }
  rows.sort((a, b) => (a[0] < b[0] ? -1 : 1));
  need(rows.length > 400, "too few joined share rows");
  return { asOf: rows[rows.length - 1][0], cols: ["date", "total", "usdc", "usdt"], rows };
}

export function normaliseChains(assets, fetchedAt) {
  const list = assets && assets.peggedAssets;
  need(Array.isArray(list), "peggedAssets");
  const usdc = list.find((a) => String(a.id) === "2");
  need(usdc && usdc.chainCirculating, "USDC asset");
  const rows = Object.entries(usdc.chainCirculating)
    .map(([name, v]) => [name, usd(v.current) ?? 0, usd(v.circulatingPrevMonth)])
    .filter((r) => r[1] > 0 || r[2])
    .map((r) => [r[0], Math.round(r[1]), r[2] == null ? null : Math.round(r[2])])
    .sort((a, b) => b[1] - a[1]);
  need(rows.length > 5, "chain rows");
  return { asOf: fetchedAt.slice(0, 10), fetchedAt, price: usdc.price ?? null, cols: ["chain", "now", "prev30d"], rows };
}

export function normalisePrices(prices) {
  need(Array.isArray(prices) && prices.length, "prices array");
  const last = Math.max(...prices.map((r) => +r.date));
  const from = last - PRICE_DAYS * DAY;
  const rows = prices
    .filter((r) => +r.date > from && r.prices)
    .map((r) => [isoDay(+r.date), r.prices["usd-coin"] ?? null, r.prices["tether"] ?? null])
    .filter((r) => r[1] != null || r[2] != null)
    .sort((a, b) => (a[0] < b[0] ? -1 : 1));
  need(rows.length > 200, "too few price rows");
  return { asOf: rows[rows.length - 1][0], cols: ["date", "usdc", "usdt"], rows };
}

// --- findings (model -> numbers the page states) ---------------------------

const toObjects = (g) => g.rows.map((r) => Object.fromEntries(g.cols.map((c, i) => [c, r[i]])));

function nearestOnOrBefore(rows, iso) {
  let best = null;
  for (const r of rows) if (r.date <= iso) best = r;
  return best;
}

export function shareFinding(g) {
  const rows = toObjects(g).map((r) => ({ ...r, usdcShare: r.usdc / r.total, usdtShare: r.usdt / r.total }));
  const now = rows[rows.length - 1];
  const d = new Date(now.date + "T00:00:00Z");
  d.setUTCFullYear(d.getUTCFullYear() - 1);
  const then = nearestOnOrBefore(rows, d.toISOString().slice(0, 10)) || rows[0];
  return {
    rows, now, then,
    usdcGrowth: now.usdc / then.usdc - 1,
    totalGrowth: now.total / then.total - 1,
    usdtGrowth: now.usdt / then.usdt - 1,
  };
}

export function chainFinding(g, topN = 7) {
  const rows = toObjects(g);
  const total = rows.reduce((s, r) => s + r.now, 0);
  const shares = rows.map((r) => ({ ...r, share: r.now / total }));
  const hhi = shares.reduce((s, r) => s + r.share * r.share, 0);
  const top = shares.slice(0, topN);
  const rest = shares.slice(topN);
  const other = { chain: `${rest.length} other chains`, now: rest.reduce((s, r) => s + r.now, 0), other: true };
  other.share = other.now / total;
  return {
    total, chainCount: rows.length, hhi, effective: 1 / hhi,
    top3: shares.slice(0, 3).reduce((s, r) => s + r.share, 0),
    top2: shares.slice(0, 2).reduce((s, r) => s + r.share, 0),
    leader: shares[0], bars: [...top, other],
  };
}

export function flowFinding(g, topN = 10) {
  const rows = toObjects(g);
  const comparable = rows.filter((r) => r.prev30d != null);
  const moves = comparable.map((r) => ({ chain: r.chain, now: r.now, prev: r.prev30d, delta: r.now - r.prev30d }));
  const netNow = comparable.reduce((s, r) => s + r.now, 0);
  const netPrev = comparable.reduce((s, r) => s + r.prev30d, 0);
  const byAbs = [...moves].sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));
  const gains = moves.filter((m) => m.delta > 0).sort((a, b) => b.delta - a.delta);
  const losses = moves.filter((m) => m.delta < 0).sort((a, b) => a.delta - b.delta);
  return {
    biggest: byAbs[0], topGain: gains[0] || null, topLoss: losses[0] || null,
    gainCount: gains.length, lossCount: losses.length,
    excluded: rows.length - comparable.length,
    net: netNow - netPrev, netPct: netNow / netPrev - 1,
    bars: byAbs.slice(0, topN).sort((a, b) => b.delta - a.delta),
  };
}

export function pegFinding(g, band = PEG_BAND_BPS) {
  const rows = toObjects(g).map((r) => ({
    date: r.date,
    usdc: r.usdc == null ? null : (r.usdc - 1) * 1e4,
    usdt: r.usdt == null ? null : (r.usdt - 1) * 1e4,
  }));
  const stat = (key) => {
    const v = rows.filter((r) => r[key] != null);
    const inBand = v.filter((r) => Math.abs(r[key]) <= band).length;
    const worst = v.reduce((w, r) => (Math.abs(r[key]) > Math.abs(w[key]) ? r : w), v[0]);
    return { n: v.length, inBand, worst: { date: worst.date, bps: worst[key] } };
  };
  return { rows, band, usdc: stat("usdc"), usdt: stat("usdt"), from: rows[0].date, to: rows[rows.length - 1].date };
}

// CCTP burns baked from on-chain DepositForBurn events (see bake/cctp.mjs).
export function cctpFinding(c, topN = 8) {
  const total = c.totals.volume;
  const corr = c.corridors.map((k) => ({ ...k, label: `${k.src} → ${k.dst}`, share: k.volume / total }));
  const top = corr.slice(0, topN);
  const rest = corr.slice(topN);
  const bars = [...top];
  if (rest.length) {
    const v = rest.reduce((s, k) => s + k.volume, 0);
    bars.push({ label: `${rest.length} other routes`, volume: v, count: rest.reduce((s, k) => s + k.count, 0), share: v / total, other: true });
  }
  const bySource = {};
  for (const d of c.daily) {
    bySource[d.src] ??= { src: d.src, volume: 0, count: 0 };
    bySource[d.src].volume += d.volume; bySource[d.src].count += d.count;
  }
  const sources = Object.values(bySource).sort((a, b) => b.volume - a.volume).map((s) => ({ ...s, share: s.volume / total }));
  const byDest = {};
  for (const k of c.corridors) { byDest[k.dst] = (byDest[k.dst] ?? 0) + k.volume; }
  const dests = Object.entries(byDest).map(([dst, volume]) => ({ dst, volume, share: volume / total })).sort((a, b) => b.volume - a.volume);
  const fast = c.modes["v2-fast"] ?? { volume: 0, count: 0 };
  return {
    total, count: c.totals.count, top: corr[0], routes: corr.length, bars, sources, dests,
    busiest: [...corr].sort((a, b) => b.count - a.count)[0],
    fast: { countShare: fast.count / c.totals.count, volumeShare: fast.volume / total, avg: fast.count ? fast.volume / fast.count : 0 },
    avg: total / c.totals.count,
  };
}
