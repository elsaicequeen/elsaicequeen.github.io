// Bakes the fallback snapshot the page uses when DefiLlama is unreachable,
// and records whether the Dune CCTP queries have stored results.
//
//   node bake/bake.mjs                      DefiLlama only
//   DUNE_API_KEY=... node bake/bake.mjs     also checks Dune (key read from env, never written)
//
// Output: data/defillama-YYYY-MM-DD.json, data/dune-YYYY-MM-DD.json, data/latest.json

import { writeFile, readFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { ENDPOINTS, DUNE_QUERIES, tokensFromText, normaliseShare, normaliseChains, normalisePrices } from "../js/model.js";

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, "..", "data");
const now = new Date().toISOString();
const day = now.slice(0, 10);

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers });
  const body = await res.text();
  let json = null;
  try { json = JSON.parse(body); } catch { /* keep null */ }
  return { ok: res.ok, status: res.status, json, text: body.slice(0, 300) };
}

async function bakeLlama() {
  const [all, assets, prices] = await Promise.all(
    [ENDPOINTS.allCharts, ENDPOINTS.assets, ENDPOINTS.prices].map(async (u) => {
      const r = await getJson(u);
      if (!r.ok || !r.json) throw new Error(`${u} -> HTTP ${r.status}`);
      return r.json;
    }),
  );
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

async function checkDune() {
  const key = process.env.DUNE_API_KEY;
  if (!key) return null;
  const queries = [];
  for (const [name, id] of Object.entries(DUNE_QUERIES)) {
    const r = await getJson(`https://api.dune.com/api/v1/query/${id}/results?limit=1000`, { "X-Dune-API-Key": key });
    const rows = r.json?.result?.rows ?? [];
    queries.push({
      name, id, httpStatus: r.status,
      ok: r.ok && rows.length > 0,
      error: r.ok ? null : (r.json?.error ?? r.text),
      executionEndedAt: r.json?.execution_ended_at ?? null,
      rowCount: rows.length,
      columns: r.json?.result?.metadata?.column_names ?? [],
      rows,
    });
  }
  return { source: "Dune API, stored query results", checkedAt: now, queries };
}

await mkdir(out, { recursive: true });
// keep the previous Dune pointer if this run has no key
const latest = {};
try { const prev = JSON.parse(await readFile(join(out, "latest.json"), "utf8")); if (prev.dune) latest.dune = prev.dune; } catch { /* first run */ }

const llama = await bakeLlama();
latest.defillama = `defillama-${day}.json`;
await writeFile(join(out, latest.defillama), JSON.stringify(llama));
console.log(`defillama: share to ${llama.share.asOf}, ${llama.chains.rows.length} chains, peg to ${llama.peg.asOf}`);

const dune = await checkDune();
if (dune) {
  latest.dune = `dune-${day}.json`;
  await writeFile(join(out, latest.dune), JSON.stringify(dune));
  for (const q of dune.queries) console.log(`dune ${q.id}: HTTP ${q.httpStatus}, ${q.rowCount} rows${q.error ? `, ${q.error}` : ""}`);
} else {
  console.log("dune: skipped (no DUNE_API_KEY in env)");
}

await writeFile(join(out, "latest.json"), JSON.stringify({ ...latest, bakedAt: now }, null, 2) + "\n");
