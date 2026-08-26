import { ChoiceRenderer } from "./choice-renderer.js";
import { WorldRegionRenderer } from "./world-region-renderer.js";

export class WorldMapChoiceRenderer {
  constructor({ root, region, countries }) {
    this.root = root;
    this.onAnswer = () => {};

    this.layout = document.createElement("div");
    this.layout.className = "world-choice-layout";
    this.mapRoot = document.createElement("div");
    this.mapRoot.className = "world-choice-map";
    this.choiceRoot = document.createElement("div");
    this.choiceRoot.className = "world-choice-options";
    this.layout.append(this.mapRoot, this.choiceRoot);
    this.root.replaceChildren(this.layout);

    this.mapRenderer = new WorldRegionRenderer({
      root: this.mapRoot,
      region,
      countries,
      interactive: false
    });
    this.choiceRenderer = new ChoiceRenderer({ root: this.choiceRoot });
    this.choiceRenderer.setAnswerHandler((answer) => this.onAnswer(answer));
  }

  setAnswerHandler(handler) {
    this.onAnswer = handler;
  }

  async render(question) {
    await this.mapRenderer.render(question);
    this.choiceRenderer.render(question);
  }

  showResult(result) {
    this.choiceRenderer.showResult(result);
  }
}
