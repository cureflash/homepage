import { isCapitalQuizEligible } from "../data/world-capital-policy.js";
import { WORLD_CURRICULUM_SOURCE } from "../data/world-curriculum.js";
import { WORLD_MERCATOR_MAP_SOURCE } from "../data/world-map-metadata.js";
import {
  WORLD_COUNTRIES,
  WORLD_FACT_SOURCE,
  WORLD_NAME_SOURCE,
  flagEmoji
} from "../data/world-countries.js";
import {
  MODES_BY_ID,
  REGIONS_BY_ID,
  WORLD_GAME_MODES,
  WORLD_REGIONS,
  countryBelongsToWorldRegion,
  normalizeWorldRegionId
} from "../data/world-regions.js";

export const defaultWorldRegionId = "asia";
export const defaultWorldModeId = "easy";
export const WORLD_QUESTIONS_PER_PLAY = 20;
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

function mapQuestion(country, mode, regionId) {
  return {
    id: `world-${regionId}-${mode.id}-${country.code.toLowerCase()}`,
    prompt: promptFor(country, mode.promptKind),
    answer: country.code,
    answerLabel: country.name,
    wrongText: "不正解！"
  };
}

function reverseQuestion(country, mode, candidates, regionId) {
  const answerLabel = answerLabelFor(country, mode.answerKind);
  const instruction = mode.answerKind === "capital"
    ? "光っている国の首都は？"
    : mode.answerKind === "flag"
      ? "光っている国の国旗は？"
      : "光っている国はどこ？";
  return {
    id: `world-${regionId}-${mode.id}-${country.code.toLowerCase()}`,
    prompt: instruction,
    instruction,
    highlightKey: country.code,
    answer: country.code,
    answerLabel,
    options: buildSameRegionOptions(country, candidates, mode.answerKind),
    wrongText: "不正解！"
  };
}

export function countriesForWorldRegion(regionId) {
  const normalized = normalizeWorldRegionId(regionId);
  if (!normalized) return [];
  return WORLD_COUNTRIES.filter((country) => countryBelongsToWorldRegion(country, normalized));
}

export function createWorldCountryGame({
  regionId = defaultWorldRegionId,
  modeId = defaultWorldModeId
} = {}) {
  const normalizedRegionId = normalizeWorldRegionId(regionId) ?? defaultWorldRegionId;
  const region = REGIONS_BY_ID.get(normalizedRegionId) ?? REGIONS_BY_ID.get(defaultWorldRegionId);
  const mode = MODES_BY_ID.get(modeId) ?? MODES_BY_ID.get(defaultWorldModeId);
  const regionCountries = countriesForWorldRegion(region.id);
  const eligibleCountries = mode.requiresCapital
    ? regionCountries.filter(isCapitalQuizEligible)
    : regionCountries;

  if (mode.direction === "choice" && eligibleCountries.length < 5) {
    throw new Error(`${region.label} needs at least five eligible countries for reverse-choice mode`);
  }

  const playCountries = shuffle(eligibleCountries).slice(0, WORLD_QUESTIONS_PER_PLAY);
  const questions = mode.direction === "map"
    ? playCountries.map((country) => mapQuestion(country, mode, region.id))
    : playCountries.map((country) => reverseQuestion(country, mode, eligibleCountries, region.id));

  return {
    id: "world-countries",
    title: `世界の国当て｜${region.label}`,
    description: `${mode.label}（1プレイ最大${WORLD_QUESTIONS_PER_PLAY}問）`,
    instruction: mode.direction === "map" ? "地図から国を選んでください" : "光っている国を5択で答えてください",
    shuffle: true,
    advanceDelay: 800,
    source: WORLD_FACT_SOURCE,
    sources: [WORLD_CURRICULUM_SOURCE, WORLD_FACT_SOURCE, WORLD_NAME_SOURCE, WORLD_MERCATOR_MAP_SOURCE],
    curriculum: {
      stage: "junior-high",
      subject: "geography",
      topic: "世界の地域構成",
      source: WORLD_CURRICULUM_SOURCE
    },
    worldConfig: { regionId: region.id, modeId: mode.id },
    renderer: mode.direction === "map"
      ? { type: "world-region", region, countries: regionCountries }
      : { type: "world-map-choice", region, countries: regionCountries },
    questions
  };
}

export const defaultWorldCountryGame = createWorldCountryGame();
