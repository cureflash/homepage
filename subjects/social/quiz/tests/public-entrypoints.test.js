import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const rootIndex = readFileSync(new URL("../../../../index.html", import.meta.url), "utf8");
const quizIndex = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("root learning-game section links to Japan drills and the world country game family", () => {
  assert.match(rootIndex, /href="subjects\/social\/quiz\/"/);
  assert.match(rootIndex, /href="subjects\/social\/quiz\/\?game=japan-prefectural-capitals"/);
  assert.match(rootIndex, /href="subjects\/social\/quiz\/\?game=japan-prefecture-capital-choice"/);
  assert.match(rootIndex, /href="subjects\/social\/quiz\/\?game=world-countries"/);
});

test("canonical social quiz page loads shared main module and world selectors", () => {
  assert.match(quizIndex, /src="js\/main\.js"/);
  assert.match(quizIndex, /id="world-region-select"/);
  assert.match(quizIndex, /id="world-mode-select"/);
});
