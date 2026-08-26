import { loadWorldRegionSvg } from "./world-map-source.js";

export class WorldRegionRenderer {
  constructor({ root, region, countries, interactive = true }) {
    this.root = root;
    this.region = region;
    this.countries = countries;
    this.interactive = interactive;
    this.onAnswer = () => {};
    this.currentQuestion = null;
    this.elementsByCode = new Map();
    this.ready = false;
    this.root.innerHTML = '<div class="map-loading">世界地図を読み込んでいます…</div>';
    this.loadPromise = this.load();
  }

  setAnswerHandler(handler) {
    this.onAnswer = handler;
  }

  async load() {
    try {
      const svgText = await loadWorldRegionSvg(this.region.id);
      this.root.innerHTML = `<div class="svg-region-stage world-region-stage">${svgText}</div>`;
      this.svg = this.root.querySelector("svg");
      if (!this.svg) throw new Error("World region SVG not found");

      this.svg.removeAttribute("width");
      this.svg.removeAttribute("height");

      const allowedCodes = new Set(this.countries.map((country) => country.code));
      this.svg.querySelectorAll("[data-code]").forEach((element) => {
        const code = element.getAttribute("data-code");
        if (!allowedCodes.has(code)) {
          element.remove();
          return;
        }
        element.classList.add("world-country");
      });

      for (const country of this.countries) {
        const elements = [...this.svg.querySelectorAll(`[data-code="${country.code}"]`)];
        if (elements.length === 0) {
          throw new Error(`World region ${this.region.id} has no map element for ${country.code}`);
        }
        elements.forEach((element) => {
          element.setAttribute("data-name", country.name);
          element.setAttribute("aria-label", country.name);
        });
        this.elementsByCode.set(country.code, elements);

        if (!this.interactive) continue;
        elements.forEach((element) => {
          element.setAttribute("role", "button");
          element.setAttribute("tabindex", "0");
          element.addEventListener("click", () => this.choose(country.code));
          element.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              this.choose(country.code);
            }
          });
        });
      }

      this.ready = true;
      this.resetStyles();
      if (this.currentQuestion) this.applyQuestionHighlight(this.currentQuestion);
    } catch (error) {
      console.error(error);
      this.root.innerHTML = '<div class="map-error">世界地図を読み込めませんでした。ページを再読み込みしてください。</div>';
    }
  }

  choose(code) {
    if (!this.ready || !this.currentQuestion || !this.interactive) return;
    this.onAnswer(code);
  }

  async render(question) {
    this.currentQuestion = question;
    await this.loadPromise;
    this.resetStyles();
    this.applyQuestionHighlight(question);
  }

  applyQuestionHighlight(question) {
    if (!question?.highlightKey) return;
    this.elementsFor(question.highlightKey).forEach((element) => element.classList.add("is-target"));
  }

  resetStyles() {
    for (const elements of this.elementsByCode.values()) {
      elements.forEach((element) => element.classList.remove("is-correct", "is-wrong", "is-target"));
    }
  }

  showResult({ selected, correct, isCorrect }) {
    if (!this.interactive) return;
    this.elementsFor(selected).forEach((element) => element.classList.add(isCorrect ? "is-correct" : "is-wrong"));
    if (!isCorrect) this.elementsFor(correct).forEach((element) => element.classList.add("is-correct"));
  }

  elementsFor(code) {
    return this.elementsByCode.get(String(code)) ?? [];
  }
}
