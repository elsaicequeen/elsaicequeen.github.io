import {
  ENDPOINTS, tokensFromText, cctpFinding,
  normaliseShare, normaliseChains, normalisePrices,
  shareFinding, chainFinding, flowFinding, pegFinding,
} from "./model.js";

const Plot = window.Plot;
const $ = (sel, root = document) => root.querySelector(sel);
const forceSnapshot = new URLSearchParams(location.search).get("source") === "snapshot";

// ---------- formatting ----------
const MINUS = "−";
const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
const fmtDate = (iso) => dateFmt.format(new Date(iso.length === 10 ? iso + "T00:00:00Z" : iso));
const toDate = (iso) => new Date(iso + "T00:00:00Z");
function usd(n, digits) {
  const a = Math.abs(n);
  const sign = n < 0 ? MINUS : "";
  if (a >= 1e9) return `${sign}$${(a / 1e9).toFixed(digits ?? (a >= 1e11 ? 0 : a >= 1e10 ? 1 : 2))}B`;
  if (a >= 1e6) return `${sign}$${(a / 1e6).toFixed(digits ?? 0)}M`;
  if (a >= 1e3) return `${sign}$${(a / 1e3).toFixed(0)}K`;
  return `${sign}$${a.toFixed(0)}`;
}
const signedUsd = (n) => (n > 0 ? "+" : "") + usd(n);
const pct = (x, d = 1) => `${(x * 100).toFixed(d)}%`;
const signedPct = (x, d = 1) => (x > 0 ? "+" : x < 0 ? MINUS : "") + `${Math.abs(x * 100).toFixed(d)}%`;
const bps = (x) => `${x < 0 ? MINUS : x > 0 ? "+" : ""}${Math.abs(x).toFixed(1)} bps`;
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

// ---------- data loading: live first, snapshot per group on failure ----------
async function getText(url, ms) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctl.signal });
    if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
    return await res.text();
  } finally { clearTimeout(t); }
}
const getJson = async (url, ms = 15000) => JSON.parse(await getText(url, ms));

let snapshotPromise = null;
function snapshot() {
  snapshotPromise ??= (async () => {
    const latest = await getJson("data/latest.json");
    const [llama, cctp] = await Promise.all([
      getJson(`data/${latest.defillama}`),
      latest.cctp ? getJson(`data/${latest.cctp}`).catch(() => null) : null,
    ]);
    return { latest, llama, cctp };
  })();
  return snapshotPromise;
}

async function load(name, live) {
  if (!forceSnapshot) {
    try { return { data: await live(), source: "live" }; }
    catch (err) { console.warn(`[usdc] live ${name} failed, using snapshot:`, err.message); }
  }
  const snap = await snapshot();
  return { data: snap.llama[name], source: "snapshot", bakedAt: snap.llama.bakedAt };
}

// ---------- chart helpers ----------
const FONT = { fontFamily: '"Instrument Sans", system-ui, sans-serif', fontSize: "12px", background: "transparent", color: "var(--ink)", overflow: "visible" };
const widthOf = (el) => Math.max(300, Math.floor(el.getBoundingClientRect().width));
const narrow = (w) => w < 520;

function sourceLine(meta, throughIso, extra = "") {
  const src = meta.source === "live"
    ? `DefiLlama, fetched live; data through ${fmtDate(throughIso)}.`
    : `DefiLlama snapshot baked ${fmtDate(meta.bakedAt)}; data through ${fmtDate(throughIso)}.`;
  return `${extra}${extra ? " " : ""}Source: ${src}`;
}

function table(headers, rows) {
  const th = headers.map((h) => `<th class="${h.r ? "r" : ""}" scope="col">${esc(h.t)}</th>`).join("");
  const tr = rows.map((r) => `<tr>${r.map((c, i) => `<td class="${headers[i].r ? "r" : ""}">${esc(c)}</td>`).join("")}</tr>`).join("");
  return `<table><thead><tr>${th}</tr></thead><tbody>${tr}</tbody></table>`;
}

function done(section) { section.classList.remove("pending"); }

// ---------- finding 1: share ----------
function renderShare(group, meta) {
  const sec = $("#f-share");
  const f = shareFinding(group);
  const { now, then } = f;
  const diff = now.usdcShare - then.usdcShare;
  const move = Math.abs(diff) < 0.0005
    ? `about the same as the <span class="num">${pct(then.usdcShare)}</span> it held a year earlier`
    : `${diff > 0 ? "up" : "down"} from <span class="num">${pct(then.usdcShare)}</span> a year earlier`;
  $("h2", sec).innerHTML = `USDC is <span class="num">${pct(now.usdcShare)}</span> of all USD stablecoin supply, ${move}.`;
  const verb = (g) => (g >= 0 ? "grew" : "shrank");
  $(".detail", sec).innerHTML =
    `In those 12 months USDC supply ${verb(f.usdcGrowth)} <span class="num">${pct(Math.abs(f.usdcGrowth))}</span> to <span class="num">${usd(now.usdc)}</span>, ` +
    `while all USD stablecoins together ${verb(f.totalGrowth)} <span class="num">${pct(Math.abs(f.totalGrowth))}</span> to <span class="num">${usd(now.total)}</span>. ` +
    `USDT went from <span class="num">${pct(then.usdtShare)}</span> to <span class="num">${pct(now.usdtShare)}</span> of the market. ` +
    `On ${fmtDate(f.rows[0].date)}, the start of the chart, USDC's share was <span class="num">${pct(f.rows[0].usdcShare)}</span>.`;
  $("figcaption", sec).textContent = sourceLine(meta, now.date,
    `Share of total USD-pegged stablecoin supply, daily. Dots mark ${fmtDate(then.date)} and ${fmtDate(now.date)}.`);

  const months = new Map();
  for (const r of f.rows) months.set(r.date.slice(0, 7), r);
  const monthEnds = [...months.values()].slice(-13).reverse();
  $("[data-table]", sec).innerHTML = table(
    [{ t: "Date" }, { t: "USDC share", r: 1 }, { t: "USDT share", r: 1 }, { t: "USDC supply", r: 1 }, { t: "All USD supply", r: 1 }],
    monthEnds.map((r) => [fmtDate(r.date), pct(r.usdcShare), pct(r.usdtShare), usd(r.usdc), usd(r.total)]),
  );

  const draw = () => {
    const el = $("[data-chart]", sec);
    const w = widthOf(el);
    const data = f.rows.map((r) => ({ ...r, d: toDate(r.date) }));
    const ends = [then, now].map((r) => ({ ...r, d: toDate(r.date) }));
    const last = ends[1];
    const ymax = Math.min(1, Math.ceil(Math.max(...f.rows.map((r) => Math.max(r.usdcShare, r.usdtShare))) * 10 + 0.5) / 10);
    const tip = (r) => `${fmtDate(r.date)}\nUSDC  ${pct(r.usdcShare)}  (${usd(r.usdc)})\nUSDT  ${pct(r.usdtShare)}  (${usd(r.usdt)})\nAll USD stablecoins  ${usd(r.total)}`;
    el.replaceChildren(Plot.plot({
      width: w, height: narrow(w) ? 260 : 320,
      marginLeft: 40, marginRight: narrow(w) ? 84 : 92, marginTop: 12, marginBottom: 28,
      style: FONT,
      x: { type: "utc", ticks: narrow(w) ? 4 : 7, label: null },
      y: { domain: [0, ymax], tickFormat: (v) => `${Math.round(v * 100)}%`, ticks: 5, grid: true, label: null },
      marks: [
        Plot.gridY({ stroke: "var(--grid)", strokeOpacity: 1, ticks: 5 }),
        Plot.ruleY([0], { stroke: "var(--line)" }),
        Plot.lineY(data, { x: "d", y: "usdtShare", stroke: "var(--usdt)", strokeWidth: 2 }),
        Plot.lineY(data, { x: "d", y: "usdcShare", stroke: "var(--usdc)", strokeWidth: 2 }),
        Plot.dot(ends, { x: "d", y: "usdcShare", r: 4.5, fill: "var(--usdc)", stroke: "var(--paper)", strokeWidth: 2 }),
        Plot.dot(ends, { x: "d", y: "usdtShare", r: 4.5, fill: "var(--usdt)", stroke: "var(--paper)", strokeWidth: 2 }),
        Plot.text([last], { x: "d", y: "usdcShare", text: (r) => `USDC ${pct(r.usdcShare)}`, dx: 9, textAnchor: "start", fill: "var(--ink)", fontWeight: 500 }),
        Plot.text([last], { x: "d", y: "usdtShare", text: (r) => `USDT ${pct(r.usdtShare)}`, dx: 9, textAnchor: "start", fill: "var(--ink)", fontWeight: 500 }),
        Plot.ruleX(data, Plot.pointerX({ x: "d", stroke: "var(--muted)", strokeOpacity: 0.6 })),
        Plot.dot(data, Plot.pointerX({ x: "d", y: "usdcShare", r: 4, fill: "var(--usdc)", stroke: "var(--paper)", strokeWidth: 2 })),
        Plot.dot(data, Plot.pointerX({ x: "d", y: "usdtShare", r: 4, fill: "var(--usdt)", stroke: "var(--paper)", strokeWidth: 2 })),
        Plot.tip(data, Plot.pointerX({ x: "d", y: (r) => (r.usdcShare + r.usdtShare) / 2, title: tip, fontSize: 12, lineHeight: 1.3 })),
      ],
    }));
  };
  done(sec);
  return draw;
}

// ---------- finding 2: concentration ----------
function renderChains(group, meta) {
  const sec = $("#f-chains");
  const f = chainFinding(group);
  $("h2", sec).innerHTML = `${esc(f.leader.chain)} holds <span class="num">${pct(f.leader.share, 0)}</span> of all USDC, and the top three chains hold <span class="num">${pct(f.top3, 0)}</span>.`;
  $(".detail", sec).innerHTML =
    `DefiLlama tracks USDC on <span class="num">${f.chainCount}</span> chains. Measured by the inverse Herfindahl index, the supply is about as concentrated as ` +
    `<span class="num">${f.effective.toFixed(1)}</span> chains of equal size; the top two alone carry <span class="num">${pct(f.top2, 0)}</span> of the float.`;
  $("figcaption", sec).textContent = sourceLine(meta, group.asOf, `Share of USDC's ${usd(f.total)} supply by chain.`);
  $("[data-table]", sec).innerHTML = table(
    [{ t: "Chain" }, { t: "USDC supply", r: 1 }, { t: "Share", r: 1 }],
    f.bars.map((b) => [b.chain, usd(b.now), pct(b.share)]),
  );

  const draw = () => {
    const el = $("[data-chart]", sec);
    const w = widthOf(el);
    const order = f.bars.map((b) => b.chain);
    const tip = (b) => `${b.chain}\n${usd(b.now)} · ${pct(b.share)} of USDC`;
    el.replaceChildren(Plot.plot({
      width: w, height: order.length * 34 + 30,
      marginLeft: narrow(w) ? 112 : 132, marginRight: 56, marginTop: 4, marginBottom: 26,
      style: FONT,
      x: { domain: [0, Math.ceil(f.bars[0].share * 10) / 10], tickFormat: (v) => `${Math.round(v * 100)}%`, ticks: narrow(w) ? 3 : 6, grid: true, label: null },
      y: { domain: order, label: null, tickSize: 0, padding: 0.3 },
      marks: [
        Plot.gridX({ stroke: "var(--grid)", strokeOpacity: 1, ticks: narrow(w) ? 3 : 6 }),
        Plot.barX(f.bars, { x: "share", y: "chain", fill: (b) => (b.other ? "var(--other)" : "var(--usdc)"), rx2y1: 4, rx2y2: 4 }),
        Plot.ruleX([0], { stroke: "var(--line)" }),
        Plot.text(f.bars, { x: "share", y: "chain", text: (b) => pct(b.share), dx: 6, textAnchor: "start", fill: "var(--ink)" }),
        Plot.tip(f.bars, Plot.pointerY({ x: "share", y: "chain", title: tip, anchor: "left", fontSize: 12 })),
      ],
    }));
  };
  done(sec);
  return draw;
}

// ---------- finding 3: 30-day moves ----------
function renderFlows(group, meta) {
  const sec = $("#f-flows");
  const f = flowFinding(group);
  const b = f.biggest;
  let h = `Over the last 30 days the largest move in USDC supply was on ${esc(b.chain)}, ${b.delta < 0 ? "down" : "up"} <span class="num">${usd(Math.abs(b.delta))}</span>.`;
  if (b.delta < 0 && f.topGain) h += ` The largest gain was on ${esc(f.topGain.chain)}, up <span class="num">${usd(f.topGain.delta)}</span>.`;
  if (b.delta > 0 && f.topLoss) h += ` The largest drop was on ${esc(f.topLoss.chain)}, down <span class="num">${usd(Math.abs(f.topLoss.delta))}</span>.`;
  $("h2", sec).innerHTML = h;
  $(".detail", sec).innerHTML =
    `Across every chain with a reading 30 days ago, USDC supply changed by <span class="num">${signedUsd(f.net)}</span> (<span class="num">${signedPct(f.netPct)}</span>): ` +
    `<span class="num">${f.gainCount}</span> chains gained and <span class="num">${f.lossCount}</span> lost. ` +
    `These are net figures, and a mint, a burn and a bridge transfer all look alike in them, so the chart shows where USDC ended up rather than the route it took.`;
  const excl = f.excluded ? ` ${f.excluded} chain${f.excluded === 1 ? "" : "s"} with no reading 30 days ago ${f.excluded === 1 ? "is" : "are"} left out.` : "";
  $("figcaption", sec).textContent = sourceLine(meta, group.asOf, `Change in USDC supply over 30 days, the ${f.bars.length} chains with the largest moves.${excl}`);
  $("[data-table]", sec).innerHTML = table(
    [{ t: "Chain" }, { t: "30 days ago", r: 1 }, { t: "Now", r: 1 }, { t: "Change", r: 1 }],
    f.bars.map((m) => [m.chain, usd(m.prev), usd(m.now), signedUsd(m.delta)]),
  );

  const draw = () => {
    const el = $("[data-chart]", sec);
    const w = widthOf(el);
    const lo = Math.min(0, ...f.bars.map((m) => m.delta));
    const hi = Math.max(0, ...f.bars.map((m) => m.delta));
    // leave room for the value labels at the bar ends, in pixels not percent
    const ml = narrow(w) ? 104 : 132, mr = 12, labelPx = 64;
    const sides = (lo < 0 ? 1 : 0) + (hi > 0 ? 1 : 0);
    const pad = (labelPx * (hi - lo)) / Math.max(80, w - ml - mr - sides * labelPx);
    const order = f.bars.map((m) => m.chain);
    const pos = f.bars.filter((m) => m.delta >= 0);
    const neg = f.bars.filter((m) => m.delta < 0);
    const tip = (m) => `${m.chain}\n${usd(m.prev)} → ${usd(m.now)}\n${signedUsd(m.delta)} in 30 days`;
    el.replaceChildren(Plot.plot({
      width: w, height: order.length * 32 + 30,
      marginLeft: ml, marginRight: mr, marginTop: 4, marginBottom: 26,
      style: FONT,
      x: { domain: [lo - (lo < 0 ? pad : 0), hi + (hi > 0 ? pad : 0)], tickFormat: (v) => (v === 0 ? "0" : usd(v, Math.abs(v) >= 1e9 ? 1 : 0)), ticks: narrow(w) ? 3 : 6, grid: true, label: null },
      y: { domain: order, label: null, tickSize: 0, padding: 0.3 },
      marks: [
        Plot.gridX({ stroke: "var(--grid)", strokeOpacity: 1, ticks: narrow(w) ? 3 : 6 }),
        Plot.barX(pos, { x: "delta", y: "chain", fill: "var(--usdc)", rx2y1: 4, rx2y2: 4 }),
        Plot.barX(neg, { x1: "delta", x2: 0, y: "chain", fill: "var(--loss)", rx1y1: 4, rx1y2: 4 }),
        Plot.ruleX([0], { stroke: "var(--muted)" }),
        Plot.text(pos, { x: "delta", y: "chain", text: (m) => signedUsd(m.delta), dx: 6, textAnchor: "start", fill: "var(--ink)" }),
        Plot.text(neg, { x: "delta", y: "chain", text: (m) => signedUsd(m.delta), dx: -6, textAnchor: "end", fill: "var(--ink)" }),
        Plot.tip(f.bars, Plot.pointerY({ x: "delta", y: "chain", title: tip, fontSize: 12 })),
      ],
    }));
  };
  done(sec);
  return draw;
}

// ---------- finding 4: peg ----------
function renderPeg(group, meta) {
  const sec = $("#f-peg");
  const f = pegFinding(group);
  const side = (x) => (x < 0 ? "below" : "above");
  $("h2", sec).innerHTML = `USDC's daily price stayed within ${f.band} bps of $1 on <span class="num">${f.usdc.inBand}</span> of <span class="num">${f.usdc.n}</span> readings over the past year.`;
  $(".detail", sec).innerHTML =
    `Its widest miss was <span class="num">${Math.abs(f.usdc.worst.bps).toFixed(1)}</span> bps ${side(f.usdc.worst.bps)} par, on ${fmtDate(f.usdc.worst.date)}. ` +
    `USDT, for comparison, was inside the band on <span class="num">${f.usdt.inBand}</span> of <span class="num">${f.usdt.n}</span> readings, widest miss <span class="num">${Math.abs(f.usdt.worst.bps).toFixed(1)}</span> bps ${side(f.usdt.worst.bps)} on ${fmtDate(f.usdt.worst.date)}. ` +
    `These are once-a-day prices, so a break that recovered within the day would not show up here.`;
  $("figcaption", sec).textContent = sourceLine(meta, f.to, `Daily price minus $1, in basis points, ${fmtDate(f.from)} to ${fmtDate(f.to)}. Shaded band: ±${f.band} bps.`);
  $("[data-table]", sec).innerHTML = table(
    [{ t: "Coin" }, { t: "Readings", r: 1 }, { t: `Within ±${f.band} bps`, r: 1 }, { t: "Widest miss", r: 1 }, { t: "On" }],
    [["USDC", f.usdc], ["USDT", f.usdt]].map(([n, s]) => [n, String(s.n), `${s.inBand} (${pct(s.inBand / s.n)})`, bps(s.worst.bps), fmtDate(s.worst.date)]),
  );

  const draw = () => {
    const el = $("[data-chart]", sec);
    const w = widthOf(el);
    const data = f.rows.map((r) => ({ ...r, d: toDate(r.date) }));
    const maxAbs = Math.max(f.band * 1.5, ...data.flatMap((r) => [Math.abs(r.usdc ?? 0), Math.abs(r.usdt ?? 0)]));
    const lim = Math.ceil(maxAbs / 5) * 5;
    const x0 = data[0].d, x1 = data[data.length - 1].d;
    const panel = (key, name, color) => {
      const s = f[key];
      const worst = data.find((r) => r.date === s.worst.date);
      const late = worst && (worst.d - x0) / (x1 - x0) > 0.65;
      const wrap = document.createElement("div");
      const label = document.createElement("p");
      label.className = "label";
      label.innerHTML = `<span style="display:inline-block;width:16px;height:2px;background:${color};vertical-align:middle;margin-right:7px;border-radius:1px"></span>${name}`;
      wrap.append(label, Plot.plot({
        width: w, height: narrow(w) ? 150 : 170,
        marginLeft: 40, marginRight: 12, marginTop: 10, marginBottom: 26,
        style: FONT,
        x: { type: "utc", domain: [x0, x1], ticks: narrow(w) ? 4 : 7, label: null },
        y: { domain: [-lim, lim], ticks: 5, label: null, tickFormat: (v) => (v > 0 ? `+${v}` : v < 0 ? `${MINUS}${-v}` : "0") },
        marks: [
          Plot.rectY([0], { x1: x0, x2: x1, y1: -f.band, y2: f.band, fill: "var(--band)" }),
          Plot.gridY({ stroke: "var(--grid)", strokeOpacity: 1, ticks: 5 }),
          Plot.ruleY([0], { stroke: "var(--line)" }),
          Plot.lineY(data.filter((r) => r[key] != null), { x: "d", y: key, stroke: color, strokeWidth: 1.5 }),
          worst ? Plot.dot([worst], { x: "d", y: key, r: 4.5, fill: color, stroke: "var(--paper)", strokeWidth: 2 }) : null,
          worst ? Plot.text([worst], { x: "d", y: key, text: () => `${bps(s.worst.bps)}, ${fmtDate(s.worst.date)}`, dx: late ? -9 : 9, textAnchor: late ? "end" : "start", fill: "var(--ink)", stroke: "var(--paper)", strokeWidth: 4, paintOrder: "stroke" }) : null,
          Plot.ruleX(data, Plot.pointerX({ x: "d", stroke: "var(--muted)", strokeOpacity: 0.6 })),
          Plot.tip(data.filter((r) => r[key] != null), Plot.pointerX({ x: "d", y: key, title: (r) => `${fmtDate(r.date)}\n${name} ${bps(r[key])}`, fontSize: 12 })),
        ],
      }));
      return wrap;
    };
    el.replaceChildren(panel("usdc", "USDC", "var(--usdc)"), panel("usdt", "USDT", "var(--usdt)"));
  };
  done(sec);
  return draw;
}

// ---------- status + methods ----------
const results = {};
function updateStatus() {
  const vals = Object.values(results);
  const st = $("#status");
  const live = vals.filter((v) => v.source === "live").length;
  const snap = vals.filter((v) => v.source === "snapshot");
  const failed = vals.filter((v) => v.source === "error").length;
  const pending = 3 - vals.length;
  if (failed) {
    st.className = "status fallback";
    st.textContent = "Neither DefiLlama nor the saved snapshot could be loaded, so some findings are missing. Try reloading.";
    return;
  }
  if (snap.length) {
    st.className = "status fallback";
    const which = forceSnapshot ? "Showing the saved snapshot (requested in the URL)" : "DefiLlama didn't respond, so this is the saved snapshot";
    st.textContent = `${which}, baked ${fmtDate(snap[0].bakedAt)}. ${live ? "Other figures are live." : ""}${pending ? " Still loading…" : ""}`.trim();
    return;
  }
  st.className = "status";
  const today = new Date().toISOString();
  st.textContent = pending ? `Live from DefiLlama, ${live} of 3 datasets loaded…` : `Live from DefiLlama, fetched ${fmtDate(today)} ${today.slice(11, 16)} UTC.`;
}

async function methods() {
  const snapNote = $("#snapshot-note");
  try {
    const snap = await snapshot();
    snapNote.innerHTML = `If DefiLlama doesn't answer, the page uses a snapshot baked ${fmtDate(snap.llama.bakedAt)} by <a href="bake/bake.mjs"><code>bake/bake.mjs</code></a> (<a href="data/${esc(snap.latest.defillama)}">${esc(snap.latest.defillama)}</a>) and says so at the top.`;
  } catch { /* the default text stays */ }
}

// ---------- finding 5: CCTP corridors (baked from chain logs) ----------
function renderCctp(c, file) {
  const sec = $("#f-cctp");
  const f = cctpFinding(c);
  const range = `${fmtDate(c.window.from)} to ${fmtDate(c.window.to)}`;
  const covered = c.sourcesCovered;
  const list = (a) => (a.length < 2 ? a.join("") : `${a.slice(0, -1).join(", ")} and ${a[a.length - 1]}`);
  $("h2", sec).innerHTML =
    `${esc(f.top.src)} to ${esc(f.top.dst)} was the largest CCTP route by value, carrying <span class="num">${pct(f.top.share, 0)}</span> of the ` +
    `<span class="num">${usd(f.total)}</span> in USDC burned for transfers from ${covered.length} chains over ${c.window.days} days.`;
  const b = f.busiest;
  const byCount = b.label === f.top.label
    ? `It was also the busiest by count, with <span class="num">${b.count.toLocaleString("en-US")}</span> transfers. `
    : `By count the busiest route was ${esc(b.src)} to ${esc(b.dst)}: <span class="num">${b.count.toLocaleString("en-US")}</span> transfers averaging <span class="num">${usd(b.volume / b.count)}</span>, against <span class="num">${usd(f.top.volume / f.top.count)}</span> on the top route by value. `;
  $(".detail", sec).innerHTML =
    `The window holds <span class="num">${f.count.toLocaleString("en-US")}</span> transfers over <span class="num">${f.routes}</span> source-to-destination routes. ` + byCount +
    `Fast transfers, which settle before the source chain reaches hard finality, were <span class="num">${pct(f.fast.countShare, 0)}</span> of transfers ` +
    `but <span class="num">${pct(f.fast.volumeShare, 0)}</span> of the value.`;
  const dropped = c.chains.filter((x) => !x.ok).map((x) => x.name);
  $("figcaption", sec).textContent =
    `Share of CCTP burn volume by route, ${range} (whole UTC days). Covers transfers that start on ${list(covered)} only; ` +
    `transfers out of Solana and other chains are not counted.${dropped.length ? ` ${list(dropped)} could not be read and ${dropped.length === 1 ? "is" : "are"} left out.` : ""} ` +
    `Source: DepositForBurn events read from public RPC nodes, baked ${fmtDate(c.bakedAt)} (${file}).`;
  const days = [...new Set(c.daily.map((d) => d.day))].sort();
  $("[data-table]", sec).innerHTML =
    table([{ t: "Route" }, { t: "Volume", r: 1 }, { t: "Share", r: 1 }, { t: "Transfers", r: 1 }],
      c.corridors.slice(0, 25).map((k) => [`${k.src} → ${k.dst}`, usd(k.volume), pct(k.volume / f.total), k.count.toLocaleString("en-US")])) +
    table([{ t: "Day (UTC)" }, ...covered.map((n) => ({ t: n, r: 1 }))],
      days.map((d) => [fmtDate(d), ...covered.map((n) => { const r = c.daily.find((x) => x.day === d && x.src === n); return r ? usd(r.volume) : "$0"; })]));

  const draw = () => {
    const el = $("[data-chart]", sec);
    const w = widthOf(el);
    const n = narrow(w);
    const order = f.bars.map((b) => b.label);
    const tip = (b) => `${b.label}\n${usd(b.volume)} · ${pct(b.share)} of volume\n${b.count.toLocaleString("en-US")} transfers`;
    el.replaceChildren(Plot.plot({
      width: w, height: order.length * 34 + 30,
      marginLeft: n ? 150 : 190, marginRight: 52, marginTop: 4, marginBottom: 26,
      style: FONT,
      x: { domain: [0, Math.max(0.1, Math.ceil(f.bars.reduce((m, b) => Math.max(m, b.share), 0) * 10) / 10)], tickFormat: (v) => `${Math.round(v * 100)}%`, ticks: n ? 3 : 6, grid: true, label: null },
      y: { domain: order, label: null, tickSize: 0, padding: 0.3 },
      marks: [
        Plot.gridX({ stroke: "var(--grid)", strokeOpacity: 1, ticks: n ? 3 : 6 }),
        Plot.barX(f.bars, { x: "share", y: "label", fill: (b) => (b.other ? "var(--other)" : "var(--usdc)"), rx2y1: 4, rx2y2: 4 }),
        Plot.ruleX([0], { stroke: "var(--line)" }),
        Plot.text(f.bars, { x: "share", y: "label", text: (b) => pct(b.share), dx: 6, textAnchor: "start", fill: "var(--ink)" }),
        Plot.tip(f.bars, Plot.pointerY({ x: "share", y: "label", title: tip, anchor: "left", fontSize: 12 })),
      ],
    }));
  };
  done(sec);
  return draw;
}

// ---------- boot ----------
const draws = [];
let lastWidth = 0;
function redraw() {
  const w = $("main").getBoundingClientRect().width;
  if (Math.abs(w - lastWidth) < 2) return;
  lastWidth = w;
  for (const d of draws) d();
}
let rt;
new ResizeObserver(() => { clearTimeout(rt); rt = setTimeout(redraw, 120); }).observe($("main"));

function run(name, live, render, sectionId) {
  return load(name, live).then(
    (res) => {
      results[name] = res;
      const draw = render(res.data, res);
      draws.push(draw);
      draw();
      updateStatus();
    },
    (err) => {
      console.error(`[usdc] ${name}:`, err);
      results[name] = { source: "error" };
      $(`#${sectionId} h2`).textContent = "This finding couldn't be computed: neither the live API nor the snapshot loaded.";
      updateStatus();
    },
  );
}

if (!Plot) {
  $("#status").className = "status fallback";
  $("#status").textContent = "The chart library didn't load, so the charts can't be drawn. The figures are in data/.";
} else {
  run("share", async () => {
    const [all, usdc, usdt] = await Promise.all([
      getJson(ENDPOINTS.allCharts),
      getText(ENDPOINTS.usdcHistory, 30000).then(tokensFromText),
      getText(ENDPOINTS.usdtHistory, 30000).then(tokensFromText),
    ]);
    return normaliseShare(all, usdc, usdt);
  }, renderShare, "f-share");
  const chains = load("chains", async () => normaliseChains(await getJson(ENDPOINTS.assets), new Date().toISOString()));
  for (const [render, id] of [[renderChains, "f-chains"], [renderFlows, "f-flows"]]) {
    chains.then((res) => { const d = render(res.data, res); draws.push(d); d(); }, () => {
      $(`#${id} h2`).textContent = "This finding couldn't be computed: neither the live API nor the snapshot loaded.";
    });
  }
  chains.then((res) => { results.chains = res; updateStatus(); }, () => { results.chains = { source: "error" }; updateStatus(); });
  run("peg", async () => normalisePrices(await getJson(ENDPOINTS.prices, 25000)), renderPeg, "f-peg");
  snapshot().then((snap) => {
    if (!snap.cctp) throw new Error("no CCTP file");
    const d = renderCctp(snap.cctp, snap.latest.cctp); draws.push(d); d();
  }).catch((err) => {
    console.error("[usdc] cctp:", err);
    $("#f-cctp h2").textContent = "The baked CCTP file couldn't be loaded, so this finding is missing.";
  });
  methods();
}
