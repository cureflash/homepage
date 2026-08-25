import assert from "node:assert/strict";
import test from "node:test";

import { JAPAN_PREFECTURE_MAP } from "../js/data/japan-prefecture-map.js";
import { prefectureGame } from "../js/games/prefectures.js";

test("pinned Japan map manifest contains exactly 47 unique prefecture regions", () => {
  assert.equal(JAPAN_PREFECTURE_MAP.regions.length, 47);
  const codes = JAPAN_PREFECTURE_MAP.regions.map(([code]) => code);
  const names = JAPAN_PREFECTURE_MAP.regions.map(([, name]) => name);
  assert.equal(new Set(codes).size, 47);
  assert.equal(new Set(names).size, 47);
  assert.deepEqual(codes, Array.from({ length: 47 }, (_, index) => String(index + 1)));
});

test("prefecture game answers exactly match the pinned map region code/name snapshot", () => {
  const gamePairs = prefectureGame.questions.map((question) => [question.answer, question.answerLabel]);
  assert.deepEqual(gamePairs, JAPAN_PREFECTURE_MAP.regions);
  assert.equal(prefectureGame.renderer.source, JAPAN_PREFECTURE_MAP.rawUrl);
});
