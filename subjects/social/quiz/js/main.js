import { QuizEngine, DEFAULT_TIME_LIMIT_SECONDS } from "./core/quiz-engine.js";
import { QuizEffects } from "./core/quiz-effects.js";
import { SvgRegionRenderer } from "./renderers/svg-region-renderer.js";
import { ChoiceRenderer } from "./renderers/choice-renderer.js";
import { defaultGameId, requireGame } from "./games/registry.js";

const ui = {
  title: document.querySelector("#game-title"),
  description: document.querySelector("#game-description"),
  progress: document.querySelector("#progress"),
  score: document.querySelector("#score"),
  accuracy: document.querySelector("#accuracy"),
  time: document.querySelector("#time-remaining"),
  startPanel: document.querySelector("#start-panel"),
  startButton: document.querySelector("#start-button"),
  questionPanel: document.querySelector("#question-panel"),
  questionLabel: document.querySelector("#question-label"),
  questionText: document.querySelector("#question-text"),
  feedback: document.querySelector("#feedback"),
  answerPanel: document.querySelector(".answer-panel"),
  answerRoot: document.querySelector("#answer-root"),
  resultPanel: document.querySelector("#result-panel"),
  resultTitle: document.querySelector("#result-title"),
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

const requestedGameId = new URLSearchParams(window.location.search).get("game") || defaultGameId;
const game = requireGame(requestedGameId);
const renderer = createRenderer(game.renderer);
const effects = new QuizEffects({
  start: "assets/audio/quiz-start.mp3",
  correct: "assets/audio/quiz-correct.mp3",
  wrong: "assets/audio/quiz-wrong.mp3"
});
const engine = new QuizEngine({ game, renderer, ui, effects });

ui.title.textContent = game.title;
ui.description.textContent = game.description ?? "";
ui.progress.textContent = `0 / ${game.questions.length}`;
ui.time.textContent = `${Number.isFinite(game.timeLimitSeconds) ? game.timeLimitSeconds : DEFAULT_TIME_LIMIT_SECONDS}秒`;
ui.answerPanel.hidden = true;
ui.questionPanel.hidden = true;
ui.resultPanel.hidden = true;

ui.startButton.addEventListener("click", () => engine.start());
ui.restartButton.addEventListener("click", () => engine.start());
