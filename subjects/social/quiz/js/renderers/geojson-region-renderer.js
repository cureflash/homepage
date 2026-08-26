import { buildWorldMapSvg } from "./world-map-utils.js";

export class GeoJsonRegionRenderer {
  constructor({ root, countries, region }) {
    this.root = root;
    this.countries = countries;
    this.region = region;
    this.onAnswer = () => {};
    this.currentQuestion = null;
    this.renderMap();
  }

  setAnswerHandler(handler) { this.onAnswer = handler; }

  renderMap() {
    this.root.innerHTML = `<div class="world-map-stage">${buildWorldMapSvg({ countries: this.countries, region: this.region, interactive: true })}</div>`;
    this.regions = [...this.root.querySelectorAll("[data-country-code]")];
    this.regions.forEach((node) => {
      node.setAttribute("aria-label", node.getAttribute("data-name") || "国");
      node.addEventListener("click", () => this.choose(node));
      node.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          this.choose(node);
        }
      });
    });
  }

  choose(node) {
    if (!this.currentQuestion) return;
    this.onAnswer(node.getAttribute("data-country-code"));
  }

  render(question) {
    this.currentQuestion = question;
    this.regions.forEach((node) => node.classList.remove("is-correct", "is-wrong", "is-target"));
  }

  showResult({ selected, correct, isCorrect }) {
    const selectedNode = this.regions.find((node) => node.dataset.countryCode === String(selected));
    const correctNode = this.regions.find((node) => node.dataset.countryCode === String(correct));
    if (selectedNode) selectedNode.classList.add(isCorrect ? "is-correct" : "is-wrong");
    if (!isCorrect && correctNode) correctNode.classList.add("is-correct");
  }
}
