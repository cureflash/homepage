import { isCapitalQuizEligible } from "../data/world-capital-policy.js";
import { WORLD_CURRICULUM_SOURCE } from "../data/world-curriculum.js";
import {
  WORLD_FACT_SOURCE,
  WORLD_MAP_SOURCE,
  WORLD_NAME_SOURCE,
  countriesForRegion,
  flagEmoji
} from "../data/world-countries.js";
import {
  MODES_BY_ID,
  REGIONS_BY_ID,
  WORLD_GAME_MODES,
  WORLD_REGIONS
} from "../data/world-regions.js";

export const defaultWorldRegionId = "east-asia";
export const defaultWorldModeId = "easy";
export { WORLD_GAME_MODES, WORLD_REGIONS };

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function promptFor(country, kind) {
  if (kind === "easy") return `${flagEmoji(country.code)}\n${country.name}\n首都：${country.capital}`;
  if (kind === "name") return country.name;
  if (kind === "capital") return country.capital;
  if (kind === "flag") return flagEmoji(country.code);
  throw new Error(`Unknown world prompt kind: ${kind}`);
}

function answerLabelFor(country, kind) {
  if (kind === "name") return country.name;
  if (kind === "capital") return country.capital;
  if (kind === "flag") return flagEmoji(country.code);
  throw new Error(`Unknown world answer kind: ${kind}`);
}

function buildSameRegionOptions(country, candidates, kind) {
  const others = shuffle(candidates.filter((candidate) => candidate.code !== country.code)).slice(0, 4);
  const selected = shuffle([country, ...others]);
  return selected.map((candidate) => ({
    key: candidate.code,
    label: answerLabelFor(candidate, kind),
    kind: kind === "flag" ? "flag" : "text"
  }));
}

function mapQuestion(country, mode) {
  return {
    id: `world-${country.region}-${mode.id}-${country.code.toLowerCase()}`,
    prompt: promptFor(country, mode.promptKind),
    answer: country.code,
    answerLabel: country.name,
    wrongText: "不正解！"
  };
}

function reverseQuestion(country, mode, candidates) {
  const answerLabel = answerLabelFor(country, mode.answerKind);
  const instruction = mode.answerKind === "capital"
    ? "光っている国の首都は？"
    : mode.answerKind === "flag"
      ? "光っている国の国旗は？"
      : "光っている国はどこ？";
  return {
    id: `world-${country.region}-${mode.id}-${country.code.toLowerCase()}`,
    prompt: instruction,
    instruction,
    highlightKey: country.code,
    answer: country.code,
    answerLabel,
    options: buildSameRegionOptions(country, candidates, mode.answerKind),
    wrongText: "不正解！"
  };
}

export function createWorldCountryGame({
  regionId = defaultWorldRegionId,
  modeId = defaultWorldModeId
} = {}) {
  const region = REGIONS_BY_ID.get(regionId) ?? REGIONS_BY_ID.get(defaultWorldRegionId);
  const mode = MODES_BY_ID.get(modeId) ?? MODES_BY_ID.get(defaultWorldModeId);
  const regionCountries = countriesForRegion(region.id);
  const countries = mode.requiresCapital
    ? regionCountries.filter(isCapitalQuizEligible)
    : regionCountries;

  if (mode.direction === "choice" && countries.length < 5) {
    throw new Error(`${region.label} needs at least five eligible countries for reverse-choice mode`);
  }

  const questions = mode.direction === "map"
    ? countries.map((country) => mapQuestion(country, mode))
    : countries.map((country) => reverseQuestion(country, mode, countries));

  return {
    id: "world-countries",
    title: `世界の国当て｜${region.label}`,
    description: mode.label,
    instruction: mode.direction === "map" ? "地図から国を選んでください" : "光っている国を5択で答えてください",
    shuffle: true,
    advanceDelay: 800,
    source: WORLD_FACT_SOURCE,
    sources: [WORLD_CURRICULUM_SOURCE, WORLD_FACT_SOURCE, WORLD_NAME_SOURCE, WORLD_MAP_SOURCE],
    curriculum: {
      stage: "junior-high",
      subject: "geography",
      topic: "世界の地域構成",
      source: WORLD_CURRICULUM_SOURCE
    },
    worldConfig: { regionId: region.id, modeId: mode.id },
    renderer: mode.direction === "map"
      ? { type: "world-region", region, countries }
      : { type: "world-map-choice", region, countries },
    questions
  };
}

export const defaultWorldCountryGame = createWorldCountryGame();
