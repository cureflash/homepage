export const WORLD_REGIONS = Object.freeze([
  { id: "asia", label: "アジア" },
  { id: "europe", label: "ヨーロッパ" },
  { id: "africa", label: "アフリカ" },
  { id: "north-america", label: "北アメリカ" },
  { id: "south-america", label: "南アメリカ" },
  { id: "oceania", label: "オセアニア" }
]);

export const SUBREGIONS_BY_WORLD_REGION = Object.freeze({
  asia: Object.freeze(["east-asia", "southeast-asia", "south-asia", "west-central-asia"]),
  europe: Object.freeze(["north-west-europe", "central-south-europe", "east-europe"]),
  africa: Object.freeze(["north-africa", "west-central-africa", "east-south-africa"]),
  "north-america": Object.freeze(["north-central-america", "caribbean"]),
  "south-america": Object.freeze(["south-america"]),
  oceania: Object.freeze(["oceania-west", "pacific-islands"])
});

export const REGIONS_BY_ID = new Map(WORLD_REGIONS.map((region) => [region.id, region]));
export const WORLD_REGION_BY_SUBREGION = new Map(
  Object.entries(SUBREGIONS_BY_WORLD_REGION)
    .flatMap(([regionId, subregions]) => subregions.map((subregionId) => [subregionId, regionId]))
);

export function normalizeWorldRegionId(regionId) {
  const value = String(regionId ?? "");
  if (REGIONS_BY_ID.has(value)) return value;
  return WORLD_REGION_BY_SUBREGION.get(value) ?? null;
}

export function countryBelongsToWorldRegion(country, regionId) {
  const normalized = normalizeWorldRegionId(regionId);
  if (!normalized) return false;
  return WORLD_REGION_BY_SUBREGION.get(country.region) === normalized;
}

export const WORLD_GAME_MODES = Object.freeze([
  { id: "easy", label: "イージー：国名＋首都＋国旗", direction: "map", promptKind: "easy", requiresCapital: true },
  { id: "name", label: "ハード：国名だけ", direction: "map", promptKind: "name" },
  { id: "capital", label: "ハード：首都だけ", direction: "map", promptKind: "capital", requiresCapital: true },
  { id: "flag", label: "ハード：国旗だけ", direction: "map", promptKind: "flag" },
  { id: "reverse-name", label: "逆引き：光った国→国名5択", direction: "choice", answerKind: "name" },
  { id: "reverse-capital", label: "逆引き：光った国→首都5択", direction: "choice", answerKind: "capital", requiresCapital: true },
  { id: "reverse-flag", label: "逆引き：光った国→国旗5択", direction: "choice", answerKind: "flag" }
]);

export const MODES_BY_ID = new Map(WORLD_GAME_MODES.map((mode) => [mode.id, mode]));
