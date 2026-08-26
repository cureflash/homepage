import assert from "node:assert/strict";
import test from "node:test";

import { assertValidGameDefinition } from "../js/core/game-validator.js";
import { isCapitalQuizEligible } from "../js/data/world-capital-policy.js";
import {
  COUNTRIES_BY_CODE,
  WORLD_COUNTRIES,
  WORLD_MAP_SOURCE,
  countriesForRegion,
  flagEmoji
} from "../js/data/world-countries.js";
import {
  WORLD_GAME_MODES,
  WORLD_REGIONS,
  geoBoundsToViewBox,
  projectRobinsonSvg
} from "../js/data/world-regions.js";
import { createWorldCountryGame } from "../js/games/world-countries.js";

test("world country data has stable unique ISO-style keys and all regions are playable", () => {
  assert.ok(WORLD_COUNTRIES.length >= 190);
  const codes = WORLD_COUNTRIES.map((country) => country.code);
  assert.equal(new Set(codes).size, WORLD_COUNTRIES.length);
  assert.ok(codes.every((code) => /^[A-Z]{2}$/.test(code)));
  assert.equal(COUNTRIES_BY_CODE.size, WORLD_COUNTRIES.length);
  assert.equal(WORLD_REGIONS.length, 15);

  for (const region of WORLD_REGIONS) {
    const members = countriesForRegion(region.id);
    const capitalMembers = members.filter(isCapitalQuizEligible);
    assert.ok(members.length >= 5, `${region.id} needs at least five countries`);
    assert.ok(capitalMembers.length >= 5, `${region.id} needs at least five capital-eligible countries`);
  }
});

test("world map source is pinned and records the SimpleMaps map-data license exception", () => {
  assert.equal(WORLD_MAP_SOURCE.package, "svg-world-maps");
  assert.equal(WORLD_MAP_SOURCE.version, "1.0.1");
  assert.equal(WORLD_MAP_SOURCE.sourceCommit, "06c2de4a159326e527e38e8506e3b9f2705bdf42");
  assert.equal(WORLD_MAP_SOURCE.softwareLicense, "MIT");
  assert.match(WORLD_MAP_SOURCE.mapDataLicense, /SimpleMaps/);
});

test("Robinson projection matches the svg-world-maps coordinate frame and wrapped Pacific view", () => {
  assert.deepEqual(projectRobinsonSvg(0, 0), [1000, 500]);
  assert.deepEqual(projectRobinsonSvg(-180, 0), [0, 500]);
  assert.deepEqual(projectRobinsonSvg(180, 0), [2000, 500]);

  const [fijiX, fijiY] = projectRobinsonSvg(178.065, -17.7134);
  assert.ok(fijiX > 1950 && fijiX < 2000);
  assert.ok(fijiY > 590 && fijiY < 640);

  const pacific = WORLD_REGIONS.find((region) => region.id === "pacific-islands");
  const [samoaX, samoaY] = projectRobinsonSvg(-171.7514, -13.8507, pacific);
  const [viewX, viewY, viewWidth, viewHeight] = geoBoundsToViewBox(pacific).split(" ").map(Number);
  assert.ok(samoaX > 2000, "wrapped Samoa marker should move past the right map edge");
  assert.ok(samoaX >= viewX && samoaX <= viewX + viewWidth);
  assert.ok(samoaY >= viewY && samoaY <= viewY + viewHeight);
});

test("every region supports all seven requested world quiz modes", () => {
  assert.deepEqual(WORLD_GAME_MODES.map((mode) => mode.id), [
    "easy",
    "name",
    "capital",
    "flag",
    "reverse-name",
    "reverse-capital",
    "reverse-flag"
  ]);

  for (const region of WORLD_REGIONS) {
    for (const mode of WORLD_GAME_MODES) {
      const game = createWorldCountryGame({ regionId: region.id, modeId: mode.id });
      assert.doesNotThrow(() => assertValidGameDefinition(game), `${region.id}/${mode.id}`);
      assert.ok(game.questions.length >= 5, `${region.id}/${mode.id} has too few questions`);
      assert.equal(game.worldConfig.regionId, region.id);
      assert.equal(game.worldConfig.modeId, mode.id);
    }
  }
});

test("reverse modes use exactly five distinct options from the same region", () => {
  for (const region of WORLD_REGIONS) {
    for (const modeId of ["reverse-name", "reverse-capital", "reverse-flag"]) {
      const game = createWorldCountryGame({ regionId: region.id, modeId });
      for (const question of game.questions) {
        assert.equal(question.options.length, 5);
        assert.equal(new Set(question.options.map((option) => option.key)).size, 5);
        assert.ok(question.options.some((option) => option.key === question.answer));
        for (const option of question.options) {
          assert.equal(COUNTRIES_BY_CODE.get(option.key)?.region, region.id);
        }
      }
    }
  }
});

test("easy mode includes flag, country name and capital while capital-ambiguous entries are excluded", () => {
  for (const region of WORLD_REGIONS) {
    const game = createWorldCountryGame({ regionId: region.id, modeId: "easy" });
    for (const question of game.questions) {
      const country = COUNTRIES_BY_CODE.get(question.answer);
      assert.equal(isCapitalQuizEligible(country), true);
      assert.match(question.prompt, new RegExp(country.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
      assert.match(question.prompt, new RegExp(country.capital.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
      assert.ok(question.prompt.includes(flagEmoji(country.code)));
    }
  }
});

test("Bolivia stays in country/flag drills but is excluded from unqualified capital drills", () => {
  const names = createWorldCountryGame({ regionId: "south-america", modeId: "name" });
  const capitals = createWorldCountryGame({ regionId: "south-america", modeId: "capital" });
  const reverseCapitals = createWorldCountryGame({ regionId: "south-america", modeId: "reverse-capital" });
  assert.ok(names.questions.some((question) => question.answer === "BO"));
  assert.ok(!capitals.questions.some((question) => question.answer === "BO"));
  assert.ok(!reverseCapitals.questions.some((question) => question.answer === "BO"));
});
