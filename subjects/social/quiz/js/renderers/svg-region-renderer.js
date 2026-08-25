export class SvgRegionRenderer {
  constructor({ root, source, regionSelector = "[data-code]", keyAttribute = "data-code" }) {
    this.root = root;
    this.source = source;
    this.regionSelector = regionSelector;
    this.keyAttribute = keyAttribute;
    this.onAnswer = () => {};
    this.ready = false;
    this.currentQuestion = null;
    this.root.innerHTML = '<div class="map-loading">地図を読み込んでいます…</div>';
    this.loadPromise = this.load();
  }

  setAnswerHandler(handler) {
    this.onAnswer = handler;
  }

  async load() {
    try {
      const response = await fetch(this.source, { mode: "cors" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const svgText = await response.text();
      this.root.innerHTML = `<div class="svg-region-stage">${svgText}</div>`;
      this.svg = this.root.querySelector("svg");
      if (!this.svg) throw new Error("SVG not found");
      this.regions = [...this.root.querySelectorAll(this.regionSelector)];
      if (this.regions.length === 0) throw new Error("No selectable regions found");
      this.regions.forEach((region) => {
        region.setAttribute("role", "button");
        region.setAttribute("tabindex", "0");
        const name = region.getAttribute("data-name");
        if (name) region.setAttribute("aria-label", name);
        region.addEventListener("click", () => this.choose(region));
        region.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.choose(region);
          }
        });
      });
      this.ready = true;
      this.resetStyles();
    } catch (error) {
      console.error(error);
      this.root.innerHTML = '<div class="map-error">地図を読み込めませんでした。ページを再読み込みしてください。</div>';
    }
  }

  choose(region) {
    if (!this.ready || !this.currentQuestion) return;
    const value = region.getAttribute(this.keyAttribute);
    if (value !== null) this.onAnswer(value);
  }

  async render(question) {
    this.currentQuestion = question;
    await this.loadPromise;
    this.resetStyles();
  }

  resetStyles() {
    if (!this.regions) return;
    this.regions.forEach((region) => region.classList.remove("is-correct", "is-wrong"));
  }

  showResult({ selected, correct, isCorrect }) {
    if (!this.regions) return;
    const selectedRegion = this.findRegion(selected);
    const correctRegion = this.findRegion(correct);
    if (selectedRegion) selectedRegion.classList.add(isCorrect ? "is-correct" : "is-wrong");
    if (!isCorrect && correctRegion) correctRegion.classList.add("is-correct");
  }

  findRegion(key) {
    return this.regions.find((region) => String(region.getAttribute(this.keyAttribute)) === String(key));
  }
}
