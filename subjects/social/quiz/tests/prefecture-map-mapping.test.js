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

test("PA4KEV v1.0 source layers map one-to-one onto the canonical 47 regions", () => {
  assert.equal(JAPAN_PREFECTURE_MAP.sourceRepository, "https://github.com/PA4KEV/japan-vector-map");
  assert.equal(JAPAN_PREFECTURE_MAP.sourceCommit, "6be9e705045777b7c433c429b0313f19b49d1ed4");
  assert.equal(JAPAN_PREFECTURE_MAP.version, "v1.0");
  assert.equal(JAPAN_PREFECTURE_MAP.license, "MIT");
  assert.equal(JAPAN_PREFECTURE_MAP.sourceKeyAttribute, "inkscape:label");

  const sourceKeys = Object.keys(JAPAN_PREFECTURE_MAP.regionKeyMap);
  const mappedPairs = Object.values(JAPAN_PREFECTURE_MAP.regionKeyMap)
    .map(({ key, name }) => [key, name])
    .sort((a, b) => Number(a[0]) - Number(b[0]));

  assert.equal(sourceKeys.length, 47);
  assert.equal(new Set(sourceKeys).size, 47);
  assert.deepEqual(mappedPairs, JAPAN_PREFECTURE_MAP.regions);
  assert.deepEqual(JAPAN_PREFECTURE_MAP.regionKeyMap.nigata, { key: "15", name: "新潟県" });
});

test("prefecture game answers exactly match the pinned map region code/name snapshot", () => {
  const gamePairs = prefectureGame.questions.map((question) => [question.answer, question.answerLabel]);
  assert.deepEqual(gamePairs, JAPAN_PREFECTURE_MAP.regions);
  assert.equal(prefectureGame.renderer.source, JAPAN_PREFECTURE_MAP.rawUrl);
  assert.equal(prefectureGame.renderer.sourceKeyAttribute, JAPAN_PREFECTURE_MAP.sourceKeyAttribute);
  assert.equal(prefectureGame.renderer.regionKeyMap, JAPAN_PREFECTURE_MAP.regionKeyMap);
});
