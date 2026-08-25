import assert from "node:assert/strict";
import test from "node:test";

import { JAPAN_PREFECTURES } from "../js/data/japan-prefectures.js";
import { PREFECTURE_CAPITAL_OPTION_CODES } from "../js/data/prefecture-capital-options.js";
import { prefectureCapitalChoiceGame } from "../js/games/prefecture-capital-choice.js";

test("reverse capital drill contains all 47 prefectures with exactly five fixed choices", () => {
  assert.equal(prefectureCapitalChoiceGame.questions.length, 47);

  for (const question of prefectureCapitalChoiceGame.questions) {
    assert.equal(question.options.length, 5);
    assert.equal(new Set(question.options.map((option) => option.key)).size, 5);
    assert.ok(question.options.some((option) => option.key === question.answer));
    assert.deepEqual(
      question.options.map((option) => option.key),
      PREFECTURE_CAPITAL_OPTION_CODES[question.answer]
    );
  }
});

test("every prefecture and capital appears exactly once in canonical data", () => {
  assert.equal(JAPAN_PREFECTURES.length, 47);
  for (const field of ["code", "name", "capital"]) {
    assert.equal(new Set(JAPAN_PREFECTURES.map((item) => item[field])).size, 47);
  }
});

test("reverse drill preserves the canonical one-to-one prefecture-capital mapping", () => {
  const expected = JAPAN_PREFECTURES.map(({ code, name, capital }) => ({
    prompt: name,
    answer: code,
    answerLabel: capital
  }));
  const actual = prefectureCapitalChoiceGame.questions.map(({ prompt, answer, answerLabel }) => ({
    prompt,
    answer,
    answerLabel
  }));
  assert.deepEqual(actual, expected);
});
