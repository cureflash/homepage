import test from "node:test";
import assert from "node:assert/strict";

import { QuizEngine } from "../js/core/quiz-engine.js";

function textNode() {
  return { textContent: "", className: "", hidden: false };
}

function createUi() {
  return {
    title: textNode(),
    description: textNode(),
    progress: textNode(),
    score: textNode(),
    accuracy: textNode(),
    time: textNode(),
    startPanel: textNode(),
    questionPanel: textNode(),
    feedback: textNode(),
    questionLabel: textNode(),
    questionText: textNode(),
    answerPanel: textNode(),
    resultPanel: textNode(),
    resultTitle: textNode(),
    resultScore: textNode()
  };
}

function createRenderer() {
  let answerHandler = null;
  return {
    rendered: [],
    results: [],
    setAnswerHandler(handler) {
      answerHandler = handler;
    },
    render(question) {
      this.rendered.push(question.id);
    },
    showResult(result) {
      this.results.push(result);
    },
    answer(key) {
      answerHandler(key);
    }
  };
}

function createEffects() {
  return {
    calls: [],
    play(name) {
      this.calls.push(name);
    }
  };
}

function installFakeWindow() {
  const timeouts = new Map();
  const intervals = new Map();
  let nextId = 1;

  globalThis.window = {
    setTimeout(callback) {
      const id = nextId;
      nextId += 1;
      timeouts.set(id, callback);
      return id;
    },
    clearTimeout(id) {
      timeouts.delete(id);
    },
    setInterval(callback) {
      const id = nextId;
      nextId += 1;
      intervals.set(id, callback);
      return id;
    },
    clearInterval(id) {
      intervals.delete(id);
    }
  };

  return {
    runNextTimeout() {
      const entry = timeouts.entries().next();
      if (entry.done) return false;
      const [id, callback] = entry.value;
      timeouts.delete(id);
      callback();
      return true;
    },
    tickIntervals(times = 1) {
      for (let i = 0; i < times; i += 1) {
        [...intervals.values()].forEach((callback) => callback());
      }
    },
    timeoutCount() {
      return timeouts.size;
    },
    intervalCount() {
      return intervals.size;
    },
    cleanup() {
      delete globalThis.window;
    }
  };
}

function makeGame(overrides = {}) {
  return {
    title: "テストゲーム",
    description: "現行挙動の固定用",
    instruction: "選んでください",
    shuffle: false,
    advanceDelay: 0,
    questions: [
      { id: "q1", prompt: "Q1", answer: "a", answerLabel: "A" },
      { id: "q2", prompt: "Q2", answer: "b", answerLabel: "B" }
    ],
    ...overrides
  };
}

test("start initializes 180-second timer, first question, panels, and start SE", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const effects = createEffects();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui, effects });

    engine.start();

    assert.equal(ui.title.textContent, "テストゲーム");
    assert.equal(ui.description.textContent, "現行挙動の固定用");
    assert.equal(ui.progress.textContent, "1 / 2");
    assert.equal(ui.score.textContent, "0");
    assert.equal(ui.accuracy.textContent, "0%");
    assert.equal(ui.time.textContent, "180秒");
    assert.equal(ui.questionText.textContent, "Q1");
    assert.equal(ui.startPanel.hidden, true);
    assert.equal(ui.questionPanel.hidden, false);
    assert.equal(ui.answerPanel.hidden, false);
    assert.equal(ui.resultPanel.hidden, true);
    assert.deepEqual(renderer.rendered, ["q1"]);
    assert.deepEqual(effects.calls, ["start"]);
    assert.equal(clock.intervalCount(), 1);
  } finally {
    clock.cleanup();
  }
});

test("correct answer plays correct SE and wrong answer subtracts 20 seconds and plays wrong SE", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const effects = createEffects();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui, effects });

    engine.start();
    renderer.answer("a");
    assert.equal(ui.score.textContent, "1");
    assert.equal(ui.accuracy.textContent, "100%");
    assert.equal(ui.time.textContent, "180秒");
    assert.equal(ui.feedback.textContent, "正解！");
    assert.deepEqual(effects.calls, ["start", "correct"]);

    assert.equal(clock.runNextTimeout(), true);
    assert.equal(ui.progress.textContent, "2 / 2");
    assert.equal(ui.questionText.textContent, "Q2");

    renderer.answer("x");
    assert.equal(ui.score.textContent, "1");
    assert.equal(ui.accuracy.textContent, "50%");
    assert.equal(ui.time.textContent, "160秒");
    assert.equal(ui.feedback.textContent, "正解は「B」");
    assert.deepEqual(effects.calls, ["start", "correct", "wrong"]);
    assert.equal(clock.intervalCount(), 0, "countdown stops as soon as the final question is answered");

    assert.equal(clock.runNextTimeout(), true);
    assert.equal(ui.answerPanel.hidden, true);
    assert.equal(ui.resultPanel.hidden, false);
    assert.equal(ui.resultTitle.textContent, "クリア！");
    assert.equal(ui.resultScore.textContent, "1 / 2 問正解（50%）　残り160秒");
  } finally {
    clock.cleanup();
  }
});

test("countdown decreases once per second and reaches game over at zero", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({ game: makeGame({ timeLimitSeconds: 2 }), renderer, ui });

    engine.start();
    clock.tickIntervals();
    assert.equal(ui.time.textContent, "1秒");
    assert.equal(ui.resultPanel.hidden, true);

    clock.tickIntervals();
    assert.equal(ui.time.textContent, "0秒");
    assert.equal(ui.resultPanel.hidden, false);
    assert.equal(ui.answerPanel.hidden, true);
    assert.equal(ui.resultTitle.textContent, "ゲームオーバー");
    assert.match(ui.resultScore.textContent, /時間切れ/);
    assert.equal(clock.intervalCount(), 0);
  } finally {
    clock.cleanup();
  }
});

test("wrong-answer penalty can immediately cause game over", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const effects = createEffects();
    const engine = new QuizEngine({
      game: makeGame({ timeLimitSeconds: 10, wrongPenaltySeconds: 20 }),
      renderer,
      ui,
      effects
    });

    engine.start();
    renderer.answer("x");

    assert.equal(ui.time.textContent, "0秒");
    assert.equal(ui.resultTitle.textContent, "ゲームオーバー");
    assert.equal(ui.resultPanel.hidden, false);
    assert.equal(clock.timeoutCount(), 0);
    assert.equal(clock.intervalCount(), 0);
    assert.deepEqual(effects.calls, ["start", "wrong"]);
  } finally {
    clock.cleanup();
  }
});

test("answering the final question before zero locks in a clear before feedback delay", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({
      game: makeGame({
        questions: [{ id: "only", prompt: "ONLY", answer: "a", answerLabel: "A" }]
      }),
      renderer,
      ui
    });

    engine.start();
    clock.tickIntervals(179);
    assert.equal(ui.time.textContent, "1秒");

    renderer.answer("a");
    assert.equal(clock.intervalCount(), 0);
    clock.tickIntervals(5);
    assert.equal(ui.time.textContent, "1秒");

    assert.equal(clock.runNextTimeout(), true);
    assert.equal(ui.resultTitle.textContent, "クリア！");
    assert.equal(ui.resultScore.textContent, "1 / 1 問正解（100%）　残り1秒");
  } finally {
    clock.cleanup();
  }
});

test("an answered question is locked until the next question", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui });

    engine.start();
    renderer.answer("a");
    renderer.answer("a");

    assert.equal(engine.answered, 1);
    assert.equal(engine.score, 1);
    assert.equal(renderer.results.length, 1);
    assert.equal(clock.timeoutCount(), 1);
    assert.equal(clock.intervalCount(), 1);
  } finally {
    clock.cleanup();
  }
});

test("restart clears pending advancement and resets countdown state", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui });

    engine.start();
    clock.tickIntervals(5);
    renderer.answer("a");
    assert.equal(ui.time.textContent, "175秒");
    assert.equal(clock.timeoutCount(), 1);
    assert.equal(clock.intervalCount(), 1);

    engine.start();

    assert.equal(clock.timeoutCount(), 0);
    assert.equal(clock.intervalCount(), 1);
    assert.equal(engine.index, 0);
    assert.equal(engine.score, 0);
    assert.equal(engine.answered, 0);
    assert.equal(ui.progress.textContent, "1 / 2");
    assert.equal(ui.score.textContent, "0");
    assert.equal(ui.accuracy.textContent, "0%");
    assert.equal(ui.time.textContent, "180秒");
    assert.equal(ui.questionText.textContent, "Q1");
  } finally {
    clock.cleanup();
  }
});

test("shuffle mode preserves every question without mutating source order", () => {
  const clock = installFakeWindow();
  try {
    const questions = [
      { id: "q1", prompt: "Q1", answer: "a" },
      { id: "q2", prompt: "Q2", answer: "b" },
      { id: "q3", prompt: "Q3", answer: "c" }
    ];
    const sourceOrder = questions.map((question) => question.id);
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({
      game: makeGame({ shuffle: true, questions }),
      renderer,
      ui
    });

    engine.start();

    assert.notEqual(engine.queue, questions);
    assert.deepEqual(questions.map((question) => question.id), sourceOrder);
    assert.deepEqual(
      [...engine.queue.map((question) => question.id)].sort(),
      [...sourceOrder].sort()
    );
  } finally {
    clock.cleanup();
  }
});
