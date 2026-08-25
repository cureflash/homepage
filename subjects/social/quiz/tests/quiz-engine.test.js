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
    feedback: textNode(),
    questionLabel: textNode(),
    questionText: textNode(),
    answerPanel: textNode(),
    resultPanel: textNode(),
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

function installFakeWindow() {
  const timers = new Map();
  let nextId = 1;
  globalThis.window = {
    setTimeout(callback) {
      const id = nextId;
      nextId += 1;
      timers.set(id, callback);
      return id;
    },
    clearTimeout(id) {
      timers.delete(id);
    }
  };
  return {
    runNext() {
      const entry = timers.entries().next();
      if (entry.done) return false;
      const [id, callback] = entry.value;
      timers.delete(id);
      callback();
      return true;
    },
    count() {
      return timers.size;
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

test("start initializes progress, score, first question, and panels", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui });

    engine.start();

    assert.equal(ui.title.textContent, "テストゲーム");
    assert.equal(ui.description.textContent, "現行挙動の固定用");
    assert.equal(ui.progress.textContent, "1 / 2");
    assert.equal(ui.score.textContent, "0");
    assert.equal(ui.accuracy.textContent, "0%");
    assert.equal(ui.questionText.textContent, "Q1");
    assert.equal(ui.answerPanel.hidden, false);
    assert.equal(ui.resultPanel.hidden, true);
    assert.deepEqual(renderer.rendered, ["q1"]);
  } finally {
    clock.cleanup();
  }
});

test("correct and wrong answers update scoring and progress", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui });

    engine.start();
    renderer.answer("a");
    assert.equal(ui.score.textContent, "1");
    assert.equal(ui.accuracy.textContent, "100%");
    assert.equal(ui.feedback.textContent, "正解！");

    assert.equal(clock.runNext(), true);
    assert.equal(ui.progress.textContent, "2 / 2");
    assert.equal(ui.questionText.textContent, "Q2");

    renderer.answer("x");
    assert.equal(ui.score.textContent, "1");
    assert.equal(ui.accuracy.textContent, "50%");
    assert.equal(ui.feedback.textContent, "正解は「B」");

    assert.equal(clock.runNext(), true);
    assert.equal(ui.answerPanel.hidden, true);
    assert.equal(ui.resultPanel.hidden, false);
    assert.equal(ui.resultScore.textContent, "1 / 2 問正解（50%）");
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
    assert.equal(clock.count(), 1);
  } finally {
    clock.cleanup();
  }
});

test("restart clears pending advancement and resets state", () => {
  const clock = installFakeWindow();
  try {
    const ui = createUi();
    const renderer = createRenderer();
    const engine = new QuizEngine({ game: makeGame(), renderer, ui });

    engine.start();
    renderer.answer("a");
    assert.equal(clock.count(), 1);

    engine.start();

    assert.equal(clock.count(), 0);
    assert.equal(engine.index, 0);
    assert.equal(engine.score, 0);
    assert.equal(engine.answered, 0);
    assert.equal(ui.progress.textContent, "1 / 2");
    assert.equal(ui.score.textContent, "0");
    assert.equal(ui.accuracy.textContent, "0%");
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
