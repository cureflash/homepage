export const WORLD_REGIONS = Object.freeze([
  { id: "east-asia", label: "東アジア", west: 72, east: 151, north: 56, south: 17 },
  { id: "southeast-asia", label: "東南アジア", west: 88, east: 142, north: 31, south: -13 },
  { id: "south-asia", label: "南アジア", west: 59, east: 97, north: 38, south: -2 },
  { id: "west-central-asia", label: "西・中央アジア", west: 23, east: 91, north: 58, south: 9 },
  { id: "north-west-europe", label: "北・西ヨーロッパ", west: -26, east: 31, north: 73, south: 40 },
  { id: "central-south-europe", label: "中・南ヨーロッパ", west: -12, east: 41, north: 56, south: 33 },
  { id: "east-europe", label: "東ヨーロッパ・ロシア", west: 17, east: 66, north: 73, south: 39 },
  { id: "north-africa", label: "北アフリカ", west: -20, east: 41, north: 39, south: 13 },
  { id: "west-central-africa", label: "西・中部アフリカ", west: -21, east: 33, north: 26, south: -18 },
  { id: "east-south-africa", label: "東・南部アフリカ", west: 17, east: 61, north: 19, south: -39 },
  { id: "north-central-america", label: "北・中央アメリカ", west: -171, east: -50, north: 82, south: 4 },
  { id: "caribbean", label: "カリブ海地域", west: -91, east: -57, north: 31, south: 7 },
  { id: "south-america", label: "南アメリカ", west: -91, east: -28, north: 16, south: -59 },
  { id: "oceania-west", label: "オセアニア西部", west: 108, east: 185, north: 16, south: -51 },
  { id: "pacific-islands", label: "太平洋島しょ部", west: 125, east: 195, north: 30, south: -32, wrapDateline: true }
]);

export const REGIONS_BY_ID = new Map(WORLD_REGIONS.map((region) => [region.id, region]));

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
