(() => {
  "use strict";

  const units = window.SOCIAL_WORKSHEET_UNITS?.length
    ? window.SOCIAL_WORKSHEET_UNITS
    : [window.SOCIAL_WORKSHEET_DATA].filter(Boolean);
  let data = units[0];

  const sheet = document.getElementById("sheet");
  const unitSelect = document.getElementById("unit");
  const modeSelect = document.getElementById("mode");
  const blankRateSelect = document.getElementById("blankRate");
  const seedInput = document.getElementById("seed");

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function random() {
      a |= 0;
      a = (a + 0x6D2B79F5) | 0;
      let t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function collectTargets() {
    const targets = [];
    for (const section of data.sections) {
      for (const sentence of section.sentences) {
        for (const term of sentence.terms) {
          targets.push(`${sentence.id}:${term}`);
        }
      }
    }
    return targets;
  }

  function chooseBlanks(seed, rate) {
    const random = mulberry32(seed);
    const targets = collectTargets();
    for (let i = targets.length - 1; i > 0; i -= 1) {
      const j = Math.floor(random() * (i + 1));
      [targets[i], targets[j]] = [targets[j], targets[i]];
    }
    const count = Math.max(1, Math.min(targets.length, Math.round(targets.length * rate)));
    return new Set(targets.slice(0, count));
  }

  function renderTemplate(sentence, mode, blankSet) {
    const parts = sentence.template.split(/(\{\{[^{}]+\}\})/g);
    return parts.map((part) => {
      const match = part.match(/^\{\{(.+)\}\}$/);
      if (!match) return escapeHtml(part);

      const term = match[1];
      const key = `${sentence.id}:${term}`;
      if (mode === "study") {
        return `<span class="core-term">${escapeHtml(term)}</span>`;
      }
      if (blankSet.has(key)) {
        if (mode === "answer") {
          return `<span class="answer-term">${escapeHtml(term)}</span>`;
        }
        const width = Math.max(5, Math.min(12, term.length * 1.8));
        return `<span class="blank" style="--blank-ch:${width}ch" aria-label="穴埋め"></span>`;
      }
      return escapeHtml(term);
    }).join("");
  }

  function renderTimeline() {
    return `
      <section class="timeline" aria-label="時代の流れ">
        ${data.timeline.map((item, index) => `
          <div class="timeline__item">
            <strong>${escapeHtml(item.label)}</strong>
            <span>${escapeHtml(item.note)}</span>
          </div>
          ${index < data.timeline.length - 1 ? '<div class="timeline__arrow" aria-hidden="true">→</div>' : ''}
        `).join("")}
      </section>`;
  }

  function renderImages(sectionId) {
    const images = data.images.filter((image) => image.section === sectionId);
    if (!images.length) return "";
    return `
      <div class="image-grid image-grid--${images.length}">
        ${images.map((image) => `
          <figure class="source-image">
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.label)}" loading="eager">
            <figcaption>
              <span class="image-label">${escapeHtml(image.label)}</span>
              <span>${escapeHtml(image.note)}</span>
              <a href="${escapeHtml(image.sourcePage)}">${escapeHtml(image.credit)} / ${escapeHtml(image.license)}</a>
            </figcaption>
          </figure>
        `).join("")}
      </div>`;
  }

  function renderSection(section, mode, blankSet) {
    return `
      <section class="period period--${escapeHtml(section.id)}">
        <div class="period__text">
          <h2>${escapeHtml(section.heading)}</h2>
          <p class="lead">${escapeHtml(section.lead)}</p>
          <ul>
            ${section.sentences.map((sentence) => `
              <li>${renderTemplate(sentence, mode, blankSet)}</li>
            `).join("")}
          </ul>
        </div>
        ${renderImages(section.id)}
      </section>`;
  }

  function renderSources() {
    return `
      <footer class="sources">
        <span>内容確認資料：</span>
        ${data.sources.map((source, index) => `
          <a href="${escapeHtml(source.url)}">${escapeHtml(source.label)}</a>${index < data.sources.length - 1 ? " ／ " : ""}
        `).join("")}
      </footer>`;
  }

  function render() {
    const mode = modeSelect.value;
    const rate = Number(blankRateSelect.value);
    const seed = Math.max(1, Number(seedInput.value) || 1);
    const blankSet = chooseBlanks(seed, rate);
    const modeLabel = mode === "study" ? "解説" : mode === "worksheet" ? "穴埋め" : "解答";

    sheet.innerHTML = `
      <div class="sheet__heading">
        <div>
          <p class="eyebrow">中学社会・歴史　${escapeHtml(modeLabel)}プリント</p>
          <h1>${escapeHtml(data.title)}</h1>
          <p class="subtitle">${escapeHtml(data.subtitle)}</p>
        </div>
        <div class="name-box">名前：</div>
      </div>
      ${renderTimeline()}
      <div class="periods">
        ${data.sections.map((section) => renderSection(section, mode, blankSet)).join("")}
      </div>
      <aside class="key-point">
        <strong>ここだけ先に：</strong>
        ${escapeHtml(data.keyPoint || "縄文時代は自然の恵みを利用した定住生活、弥生時代は水田稲作の広がりが大きな転換点。")}
      </aside>
      ${renderSources()}
    `;
  }

  for (const unit of units) {
    const option = document.createElement("option");
    option.value = unit.id;
    option.textContent = unit.title;
    unitSelect.appendChild(option);
  }

  document.getElementById("regenerate").addEventListener("click", () => {
    seedInput.value = String((Number(seedInput.value) || 1) + 1);
    render();
  });
  document.getElementById("print").addEventListener("click", () => window.print());
  unitSelect.addEventListener("change", () => {
    data = units.find((unit) => unit.id === unitSelect.value) || units[0];
    render();
  });
  modeSelect.addEventListener("change", render);
  blankRateSelect.addEventListener("change", render);
  seedInput.addEventListener("change", render);

  render();
})();
