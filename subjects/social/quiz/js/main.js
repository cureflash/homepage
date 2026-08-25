import { QuizEngine } from "./core/quiz-engine.js";
import { SvgRegionRenderer } from "./renderers/svg-region-renderer.js";
import { ChoiceRenderer } from "./renderers/choice-renderer.js";
import { prefectureGame } from "./games/prefectures.js";

const ui = {
  title: document.querySelector("#game-title"),
  description: document.querySelector("#game-description"),
  progress: document.querySelector("#progress"),
  score: document.querySelector("#score"),
  accuracy: document.querySelector("#accuracy"),
  questionLabel: document.querySelector("#question-label"),
  questionText: document.querySelector("#question-text"),
  feedback: document.querySelector("#feedback"),
  answerPanel: document.querySelector(".answer-panel"),
  answerRoot: document.querySelector("#answer-root"),
  resultPanel: document.querySelector("#result-panel"),
  resultScore: document.querySelector("#result-score"),
  restartButton: document.querySelector("#restart-button")
};

function createRenderer(config) {
  if (config.type === "svg-region") {
    return new SvgRegionRenderer({ root: ui.answerRoot, ...config });
  }
  if (config.type === "choice") {
    return new ChoiceRenderer({ root: ui.answerRoot });
  }
  throw new Error(`Unknown renderer type: ${config.type}`);
}

const game = prefectureGame;
const renderer = createRenderer(game.renderer);
const engine = new QuizEngine({ game, renderer, ui });

ui.restartButton.addEventListener("click", () => engine.start());
engine.start();
