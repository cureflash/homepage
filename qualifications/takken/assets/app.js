(() => {
  "use strict";
  const cfg = window.TAKKEN_CONFIG;
  const units = (window.TAKKEN_PUBLIC_UNITS || []).filter((u) => u.factcheckStatus === "verified");
  const unitSelect = document.getElementById("unit");
  const modeSelect = document.getElementById("mode");
  const seedInput = document.getElementById("seed");
  const sheet = document.getElementById("sheet");
  const empty = document.getElementById("empty");
  document.getElementById("siteName").textContent = cfg.siteName;

  function esc(v) { return String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;"); }
  function rng(seed) { let a = seed >>> 0; return () => { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
  function targets(unit) { return unit.sections.flatMap(s => s.sentences.flatMap(x => x.terms.map(t => `${x.id}:${t}`))); }
  function blanks(unit, seed) { const xs = targets(unit); const r = rng(seed); for (let i = xs.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [xs[i], xs[j]] = [xs[j], xs[i]]; } return new Set(xs.slice(0, Math.max(1, Math.round(xs.length * .55)))); }
  function renderSentence(s, mode, chosen) { return s.template.split(/(\{\{[^{}]+\}\})/g).map(p => { const m = p.match(/^\{\{(.+)\}\}$/); if (!m) return esc(p); const term = m[1], key = `${s.id}:${term}`; if (mode === "study") return `<strong class="term">${esc(term)}</strong>`; if (chosen.has(key)) return mode === "answer" ? `<strong class="answer">${esc(term)}</strong>` : `<span class="blank" style="--w:${Math.max(5, term.length * 1.7)}ch"></span>`; return esc(term); }).join(""); }
  function render() {
    if (!units.length) { empty.hidden = false; sheet.innerHTML = ""; unitSelect.disabled = true; return; }
    const unit = units.find(u => u.id === unitSelect.value) || units[0]; const mode = modeSelect.value; const chosen = blanks(unit, Math.max(1, Number(seedInput.value) || 1));
    sheet.innerHTML = `<header class="sheet-head"><div><p class="eyebrow">${esc(cfg.examYear)}年度 宅建・${esc(mode === "study" ? "解説" : mode === "worksheet" ? "穴埋め" : "解答")}</p><h1>${esc(unit.title)}</h1><p>${esc(unit.subtitle)}</p></div><div class="name">名前：</div></header><aside class="key"><strong>ここだけ先に：</strong>${esc(unit.keyPoint)}</aside>${unit.sections.map(sec => `<section><h2>${esc(sec.heading)}</h2><p class="lead">${esc(sec.lead)}</p><ul>${sec.sentences.map(s => `<li>${renderSentence(s, mode, chosen)}</li>`).join("")}</ul></section>`).join("")}<footer class="sources"><strong>基準日：</strong>${esc(unit.lawAsOf)}<br><strong>確認資料：</strong>${unit.sources.map(s => `<a href="${esc(s.url)}">${esc(s.label)}</a>`).join(" ／ ")}</footer>`;
  }
  for (const u of units) { const o = document.createElement("option"); o.value = u.id; o.textContent = u.title; unitSelect.appendChild(o); }
  unitSelect.addEventListener("change", render); modeSelect.addEventListener("change", render); seedInput.addEventListener("change", render);
  document.getElementById("regenerate").addEventListener("click", () => { seedInput.value = String((Number(seedInput.value) || 1) + 1); render(); });
  document.getElementById("print").addEventListener("click", () => window.print());
  render();
})();
