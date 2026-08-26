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
  assert.deepEqual(first.map((game) => game.id), [
    "japan-prefectures",
    "japan-prefectural-capitals",
    "japan-prefecture-capital-choice",
    "world-countries"
  ]);
});

test("registry supports explicit lookup and rejects unknown ids", () => {
  assert.equal(getGame("japan-prefectures")?.title, "都道府県当て");
  assert.equal(getGame("japan-prefectural-capitals")?.title, "県庁所在地当て");
  assert.equal(getGame("japan-prefecture-capital-choice")?.title, "県庁所在地5択");
  assert.match(getGame("world-countries")?.title, /東アジア/);
  assert.match(getGame("world-countries", { regionId: "south-america", modeId: "flag" })?.title, /南アメリカ/);
  assert.equal(getGame("missing"), null);
  assert.throws(() => requireGame("missing"), /Unknown game id/);
});
