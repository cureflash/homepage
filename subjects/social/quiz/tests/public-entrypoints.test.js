import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

const rootIndex = readFileSync(new URL("../../../../index.html", import.meta.url), "utf8");
const quizIndex = readFileSync(new URL("../index.html", import.meta.url), "utf8");

test("root learning-game section links to all Japan prefecture/capital drills", () => {
  assert.match(rootIndex, /href="subjects\/social\/quiz\/"/);
  assert.match(rootIndex, /href="subjects\/social\/quiz\/\?game=japan-prefectural-capitals"/);
  assert.match(rootIndex, /href="subjects\/social\/quiz\/\?game=japan-prefecture-capital-choice"/);
});

test("canonical social quiz page still loads the shared main module", () => {
  assert.match(quizIndex, /src="js\/main\.js"/);
});
