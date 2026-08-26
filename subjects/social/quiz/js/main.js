import { QuizEngine, DEFAULT_TIME_LIMIT_SECONDS } from "./core/quiz-engine.js";
import { QuizEffects } from "./core/quiz-effects.js";
import { SvgRegionRenderer } from "./renderers/svg-region-renderer.js";
import { ChoiceRenderer } from "./renderers/choice-renderer.js";
import { WorldRegionRenderer } from "./renderers/world-region-renderer.js";
import { WorldMapChoiceRenderer } from "./renderers/world-map-choice-renderer.js";
import { defaultGameId, requireGame } from "./games/registry.js";
import {
  WORLD_GAME_MODES,
  WORLD_REGIONS,
  defaultWorldModeId,
  defaultWorldRegionId
} from "./games/world-countries.js";

const ui = {
  title: document.querySelector("#game-title"),
  description: document.querySelector("#game-description"),
  progress: document.querySelector("#progress"),
  score: document.querySelector("#score"),
  accuracy: document.querySelector("#accuracy"),
  time: document.querySelector("#time-remaining"),
  worldControls: document.querySelector("#world-controls"),
  worldRegionSelect: document.querySelector("#world-region-select"),
  worldModeSelect: document.querySelector("#world-mode-select"),
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
  restartButton: document.querySelector("#restart-button"),
  mapCredit: document.querySelector("#map-credit")
};

function createRenderer(config) {
  if (config.type === "svg-region") {
    return new SvgRegionRenderer({ root: ui.answerRoot, ...config });
  }
  if (config.type === "choice") {
    return new ChoiceRenderer({ root: ui.answerRoot });
  }
  if (config.type === "world-region") {
    return new WorldRegionRenderer({ root: ui.answerRoot, ...config });
  }
  if (config.type === "world-map-choice") {
    return new WorldMapChoiceRenderer({ root: ui.answerRoot, ...config });
  }
  throw new Error(`Unknown renderer type: ${config.type}`);
}

function fillSelect(select, entries, selectedId) {
  select.replaceChildren();
  for (const entry of entries) {
    const option = document.createElement("option");
    option.value = entry.id;
    option.textContent = entry.label;
    option.selected = entry.id === selectedId;
    select.append(option);
  }
}

function setupWorldControls(params, game) {
  if (game.id !== "world-countries") return;
  ui.worldControls.hidden = false;
  const regionId = game.worldConfig?.regionId ?? defaultWorldRegionId;
  const modeId = game.worldConfig?.modeId ?? defaultWorldModeId;
  fillSelect(ui.worldRegionSelect, WORLD_REGIONS, regionId);
  fillSelect(ui.worldModeSelect, WORLD_GAME_MODES, modeId);

  const reloadWithSelection = () => {
    const next = new URLSearchParams(params);
    next.set("game", "world-countries");
    next.set("region", ui.worldRegionSelect.value);
    next.set("mode", ui.worldModeSelect.value);
    window.location.search = next.toString();
  };
  ui.worldRegionSelect.addEventListener("change", reloadWithSelection);
  ui.worldModeSelect.addEventListener("change", reloadWithSelection);
  ui.mapCredit.textContent = "世界地図: svg-world-maps 1.0.1 / SimpleMaps SVG Map Library（ライセンス条件に基づき利用）";
}

const params = new URLSearchParams(window.location.search);
const requestedGameId = params.get("game") || defaultGameId;
const game = requireGame(requestedGameId, {
  regionId: params.get("region") || defaultWorldRegionId,
  modeId: params.get("mode") || defaultWorldModeId
});
const renderer = createRenderer(game.renderer);
const effects = new QuizEffects({
  start: "assets/audio/quiz-start.mp3",
  correct: "assets/audio/quiz-correct.mp3",
  wrong: "assets/audio/quiz-wrong.mp3"
});
const engine = new QuizEngine({ game, renderer, ui, effects });

setupWorldControls(params, game);
document.title = `社会クイズ｜${game.title}`;
ui.title.textContent = game.title;
ui.description.textContent = game.description ?? "";
ui.progress.textContent = `0 / ${game.questions.length}`;
ui.time.textContent = `${Number.isFinite(game.timeLimitSeconds) ? game.timeLimitSeconds : DEFAULT_TIME_LIMIT_SECONDS}秒`;
ui.answerPanel.hidden = true;
ui.questionPanel.hidden = true;
ui.resultPanel.hidden = true;

ui.startButton.addEventListener("click", () => engine.start());
ui.restartButton.addEventListener("click", () => engine.start());
