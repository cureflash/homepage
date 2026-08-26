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

// svg-world-maps uses the SimpleMaps Robinson-projection world SVG with
// viewBox 0 0 2000 857. The source drawing is scaled so longitude ±180 at
// the equator maps to x=0/2000, and latitude 0 maps to y=500.
const ROBINSON_X = Object.freeze([
  1.0000, 0.9986, 0.9954, 0.9900, 0.9822, 0.9730, 0.9600, 0.9427, 0.9216,
  0.8962, 0.8679, 0.8350, 0.7986, 0.7597, 0.7186, 0.6732, 0.6213, 0.5722, 0.5322
]);
const ROBINSON_Y = Object.freeze([
  0.0000, 0.0620, 0.1240, 0.1860, 0.2480, 0.3100, 0.3720, 0.4340, 0.4958,
  0.5571, 0.6176, 0.6769, 0.7346, 0.7903, 0.8435, 0.8936, 0.9394, 0.9761, 1.0000
]);

function interpolateRobinson(table, latitude) {
  const absoluteLatitude = Math.min(90, Math.abs(latitude));
  const lowerIndex = Math.min(17, Math.floor(absoluteLatitude / 5));
  if (absoluteLatitude === 90) return table[18];
  const fraction = (absoluteLatitude - lowerIndex * 5) / 5;
  return table[lowerIndex] + (table[lowerIndex + 1] - table[lowerIndex]) * fraction;
}

export function projectRobinsonSvg(longitude, latitude, { wrapDateline = false } = {}) {
  let longitudeForMap = Number(longitude);
  const latitudeForMap = Math.max(-90, Math.min(90, Number(latitude)));
  if (wrapDateline && longitudeForMap < 0) longitudeForMap += 360;

  const xFactor = interpolateRobinson(ROBINSON_X, latitudeForMap);
  const yFactor = interpolateRobinson(ROBINSON_Y, latitudeForMap);
  const x = 1000 + (longitudeForMap / 180) * 1000 * xFactor;
  const y = 500 - Math.sign(latitudeForMap) * 500 * yFactor;
  return [x, y];
}

function closestLatitudeToEquator(north, south) {
  if (south <= 0 && north >= 0) return 0;
  return Math.abs(south) < Math.abs(north) ? south : north;
}

export function geoBoundsToViewBox(region) {
  const latitudeForWidth = closestLatitudeToEquator(region.north, region.south);
  const [left] = projectRobinsonSvg(region.west, latitudeForWidth, region);
  const [right] = projectRobinsonSvg(region.east, latitudeForWidth, region);
  const [, top] = projectRobinsonSvg(0, region.north);
  const [, bottom] = projectRobinsonSvg(0, region.south);

  const rawWidth = Math.max(1, right - left);
  const rawHeight = Math.max(1, bottom - top);
  const paddingX = Math.max(12, rawWidth * 0.035);
  const paddingY = Math.max(12, rawHeight * 0.05);

  const values = [
    left - paddingX,
    top - paddingY,
    rawWidth + paddingX * 2,
    rawHeight + paddingY * 2
  ];
  return values.map((value) => Math.round(value * 10) / 10).join(" ");
}
