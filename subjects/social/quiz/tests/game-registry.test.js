import assert from "node:assert/strict";
import test from "node:test";

import { defaultGameId, getGame, listGames, requireGame } from "../js/games/registry.js";

test("registry exposes the prefecture game as the default", () => {
  assert.equal(defaultGameId, "japan-prefectures");
  assert.equal(requireGame().id, "japan-prefectures");
});

test("registry returns registered games without exposing mutable registry state", () => {
  const first = listGames();
  const second = listGames();
  assert.notEqual(first, second);
  assert.equal(first.length, 1);
  assert.equal(first[0].id, "japan-prefectures");
});

test("registry supports explicit lookup and rejects unknown ids", () => {
  assert.equal(getGame("japan-prefectures")?.title, "都道府県当て");
  assert.equal(getGame("missing"), null);
  assert.throws(() => requireGame("missing"), /Unknown game id/);
});
