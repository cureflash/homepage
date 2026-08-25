import assert from "node:assert/strict";
import test from "node:test";

import { JAPAN_PREFECTURES } from "../js/data/japan-prefectures.js";
import { prefecturalCapitalGame } from "../js/games/prefectural-capitals.js";

test("prefectural-capital map drill contains all 47 one-to-one questions", () => {
  assert.equal(JAPAN_PREFECTURES.length, 47);
  assert.equal(prefecturalCapitalGame.questions.length, 47);

  const prompts = prefecturalCapitalGame.questions.map((question) => question.prompt);
  const answers = prefecturalCapitalGame.questions.map((question) => question.answer);
  assert.equal(new Set(prompts).size, 47);
  assert.equal(new Set(answers).size, 47);
  assert.deepEqual(answers, JAPAN_PREFECTURES.map(({ code }) => code));
});

test("prefectural-capital questions preserve the authoritative prefecture mapping", () => {
  const actual = prefecturalCapitalGame.questions.map(({ prompt, answer, answerLabel }) => ({
    prompt,
    answer,
    answerLabel
  }));
  const expected = JAPAN_PREFECTURES.map(({ code, name, capital }) => ({
    prompt: capital,
    answer: code,
    answerLabel: name
  }));
  assert.deepEqual(actual, expected);
});
