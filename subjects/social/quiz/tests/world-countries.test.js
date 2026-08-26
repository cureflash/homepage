import assert from "node:assert/strict";
import { readFileSync, statSync } from "node:fs";
import test from "node:test";

import { assertValidGameDefinition } from "../js/core/game-validator.js";
import { isCapitalQuizEligible } from "../js/data/world-capital-policy.js";
import { WORLD_MERCATOR_MAP_SOURCE } from "../js/data/world-map-metadata.js";
import {
  COUNTRIES_BY_CODE,
  WORLD_COUNTRIES,
  countriesForRegion,
  flagEmoji
} from "../js/data/world-countries.js";
import { WORLD_GAME_MODES, WORLD_REGIONS } from "../js/data/world-regions.js";
import { createWorldCountryGame } from "../js/games/world-countries.js";

const mapRoot = new URL("../assets/maps/world/", import.meta.url);
const manifest = JSON.parse(readFileSync(new URL("manifest.json", mapRoot), "utf8"));

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

test("world map source is Natural Earth 1:50m Public Domain and local Web Mercator", () => {
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.version, "5.1.1");
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.license, "Public Domain");
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.projection, "Web Mercator");
  assert.equal(WORLD_MERCATOR_MAP_SOURCE.runtimeExternalDependency, false);
  assert.equal(manifest.sourceVersion, "5.1.1");
  assert.equal(manifest.license, "Public Domain");
  assert.equal(manifest.projection, "Web Mercator");
  assert.equal(Object.keys(manifest.regions).length, 15);
});

test("every local region SVG contains every quiz country and stays below the runtime size budget", () => {
  let totalBytes = 0;
  for (const region of WORLD_REGIONS) {
    const meta = manifest.regions[region.id];
    assert.ok(meta, `manifest missing ${region.id}`);
    const url = new URL(meta.file, mapRoot);
    const svg = readFileSync(url, "utf8");
    const bytes = statSync(url).size;
    totalBytes += bytes;
    assert.equal(bytes, meta.bytes);
    assert.ok(bytes < 250_000, `${region.id} is too large for one regional map request: ${bytes}`);
    assert.match(svg, /data-projection="Web Mercator"/);
    for (const country of countriesForRegion(region.id)) {
      assert.ok(svg.includes(`data-code="${country.code}"`), `${region.id} missing ${country.code}`);
    }
  }
  assert.ok(totalBytes < 1_300_000, `regional map asset total is unexpectedly large: ${totalBytes}`);
});

test("world map runtime loader has no external CDN dependency", () => {
  const loader = readFileSync(new URL("../js/renderers/world-map-source.js", import.meta.url), "utf8");
  assert.doesNotMatch(loader, /jsdelivr|esm\.sh|svg-world-maps/);
  assert.match(loader, /assets\/maps\/world/);
  assert.match(loader, /force-cache/);
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
