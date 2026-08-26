import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

import { assertValidGameDefinition } from "../js/core/game-validator.js";
import { isCapitalQuizEligible } from "../js/data/world-capital-policy.js";
import { WORLD_MERCATOR_MAP_SOURCE } from "../js/data/world-map-metadata.js";
import {
  COUNTRIES_BY_CODE,
  WORLD_COUNTRIES,
  flagEmoji
} from "../js/data/world-countries.js";
import {
  WORLD_GAME_MODES,
  WORLD_REGIONS,
  countryBelongsToWorldRegion,
  normalizeWorldRegionId
} from "../js/data/world-regions.js";
import {
  WORLD_QUESTIONS_PER_PLAY,
  countriesForWorldRegion,
  createWorldCountryGame
} from "../js/games/world-countries.js";

const mapRoot = new URL("../assets/maps/world/", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("manifest.json", mapRoot), "utf8"));

const EXPECTED_REGION_IDS = ["asia", "europe", "africa", "north-america", "south-america", "oceania"];

test("world country data has stable unique ISO-style keys and six major regions are playable", () => {
  assert.ok(WORLD_COUNTRIES.length >= 190);
  const codes = WORLD_COUNTRIES.map((country) => country.code);
  assert.equal(new Set(codes).size, WORLD_COUNTRIES.length);
  assert.ok(codes.every((code) => /^[A-Z]{2}$/.test(code)));
  assert.equal(COUNTRIES_BY_CODE.size, WORLD_COUNTRIES.length);
  assert.deepEqual(WORLD_REGIONS.map((region) => region.id), EXPECTED_REGION_IDS);

  for (const region of WORLD_REGIONS) {
    const members = countriesForWorldRegion(region.id);
    const capitalMembers = members.filter(isCapitalQuizEligible);
    assert.ok(members.length >= 5, `${region.id} needs at least five countries`);
    assert.ok(capitalMembers.length >= 5, `${region.id} needs at least five capital-eligible countries`);
    assert.ok(members.every((country) => countryBelongsToWorldRegion(country, region.id)));
  }
});

test("legacy fine-grained region URLs resolve to their major region", () => {
  assert.equal(normalizeWorldRegionId("east-asia"), "asia");
  assert.equal(normalizeWorldRegionId("caribbean"), "north-america");
  assert.equal(normalizeWorldRegionId("pacific-islands"), "oceania");

  const legacy = createWorldCountryGame({ regionId: "east-asia", modeId: "name" });
  assert.equal(legacy.worldConfig.regionId, "asia");
  assert.match(legacy.title, /アジア/);
});

test("world map source is Natural Earth 1:50m Public Domain and local Web Mercator", () => {
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.version, "5.1.1");
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.license, "Public Domain");
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.projection, "Web Mercator");
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.runtimeExternalDependency, false);
  assert.equal(manifest.sourceVersion, "5.1.1");
  assert.equal(manifest.license, "Public Domain");
  assert.equal(manifest.projection, "Web Mercator");
  assert.equal(manifest.regionModel, "six-major-regions");
  assert.deepEqual(Object.keys(manifest.regions), EXPECTED_REGION_IDS);
});

test("every local major-region SVG contains every quiz country and stays within the runtime size budget", () => {
  let totalBytes = 0;
  for (const region of WORLD_REGIONS) {
    const meta = manifest.regions[region.id];
    assert.ok(meta, `manifest missing ${region.id}`);
    const url = new URL(meta.file, mapRoot);
    const svg = readFileSync(url, "utf8");
    const bytes = statSync(url).size;
    totalBytes += bytes;
    assert.equal(bytes, meta.bytes);
    assert.ok(bytes < 350_000, `${region.id} is too large for one major-region map request: ${bytes}`);
    assert.match(svg, /data-projection="Web Mercator"/);
    for (const country of countriesForWorldRegion(region.id)) {
      assert.ok(svg.includes(`data-code="${country.code}"`), `${region.id} missing ${country.code}`);
    }
  }
  assert.ok(totalBytes < 1_300_000, `major-region map asset total is unexpectedly large: ${totalBytes}`);
});

test("world map runtime loader has no external CDN dependency", () => {
  const loader = readFileSync(new URL("../js/renderers/world-map-source.js", import.meta.url), "utf8");
  assert.doesNotMatch(loader, /jsdelivr|esm\.sh|svg-world-maps/);
  assert.match(loader, /assets\/maps\/world/);
  assert.match(loader, /force-cache/);
});

test("every major region supports all seven requested world quiz modes", () => {
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
      assert.ok(game.questions.length <= WORLD_QUESTIONS_PER_PLAY, `${region.id}/${mode.id} exceeds play cap`);
      assert.equal(game.worldConfig.regionId, region.id);
      assert.equal(game.worldConfig.modeId, mode.id);
    }
  }
});

test("large regions sample at most 20 questions while small regions use all eligible countries", () => {
  const asia = createWorldCountryGame({ regionId: "asia", modeId: "name" });
  const southAmerica = createWorldCountryGame({ regionId: "south-america", modeId: "name" });
  const oceania = createWorldCountryGame({ regionId: "oceania", modeId: "name" });

  assert.equal(asia.questions.length, WORLD_QUESTIONS_PER_PLAY);
  assert.equal(southAmerica.questions.length, countriesForWorldRegion("south-america").length);
  assert.equal(oceania.questions.length, countriesForWorldRegion("oceania").length);
});

test("reverse modes use exactly five distinct options from the same major region", () => {
  for (const region of WORLD_REGIONS) {
    for (const modeId of ["reverse-name", "reverse-capital", "reverse-flag"]) {
      const game = createWorldCountryGame({ regionId: region.id, modeId });
      for (const question of game.questions) {
        assert.equal(question.options.length, 5);
        assert.equal(new Set(question.options.map((option) => option.key)).size, 5);
        assert.ok(question.options.some((option) => option.key === question.answer));
        for (const option of question.options) {
          const country = COUNTRIES_BY_CODE.get(option.key);
          assert.ok(countryBelongsToWorldRegion(country, region.id), `${option.key} should belong to ${region.id}`);
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
