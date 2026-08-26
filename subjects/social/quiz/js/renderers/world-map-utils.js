const WIDTH = 1000;
const HEIGHT = 650;

function adjustedLon(lon, region) {
  return region.wrapLongitude && lon < 0 ? lon + 360 : lon;
}

export function projectCoordinate([lon, lat], region) {
  const [minLon, maxLon, minLat, maxLat] = region.bounds;
  const x = ((adjustedLon(lon, region) - minLon) / (maxLon - minLon)) * WIDTH;
  const y = ((maxLat - lat) / (maxLat - minLat)) * HEIGHT;
  return [x, y];
}

function ringPath(ring, region) {
  if (!ring?.length) return "";
  return ring.map((coord, index) => {
    const [x, y] = projectCoordinate(coord, region);
    return `${index === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ") + " Z";
}

export function geometryPath(geometry, region) {
  if (!geometry) return "";
  if (geometry.type === "Polygon") return geometry.coordinates.map((ring) => ringPath(ring, region)).join(" ");
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flatMap((polygon) => polygon.map((ring) => ringPath(ring, region))).join(" ");
  return "";
}

function coordinatesOf(geometry) {
  if (!geometry) return [];
  if (geometry.type === "Polygon") return geometry.coordinates.flat();
  if (geometry.type === "MultiPolygon") return geometry.coordinates.flat(2);
  return [];
}

export function featureMarkerPoint(feature, region) {
  const [minLon, maxLon, minLat, maxLat] = region.bounds;
  const points = coordinatesOf(feature.geometry).filter(([lon, lat]) => {
    const adjusted = adjustedLon(lon, region);
    return adjusted >= minLon && adjusted <= maxLon && lat >= minLat && lat <= maxLat;
  });
  const usable = points.length ? points : coordinatesOf(feature.geometry);
  if (!usable.length) return [WIDTH / 2, HEIGHT / 2];
  const sums = usable.reduce((acc, coord) => {
    const [x, y] = projectCoordinate(coord, region);
    return [acc[0] + x, acc[1] + y];
  }, [0, 0]);
  return [sums[0] / usable.length, sums[1] / usable.length];
}

export function buildWorldMapSvg({ countries, region, interactive = false }) {
  const markerSet = new Set(region.markerCodes ?? []);
  const groups = countries.map((country) => {
    const path = geometryPath(country.feature.geometry, region);
    const marker = markerSet.has(country.id)
      ? (() => { const [cx, cy] = featureMarkerPoint(country.feature, region); return `<circle class="world-country-marker" cx="${cx.toFixed(2)}" cy="${cy.toFixed(2)}" r="11"></circle>`; })()
      : "";
    const tab = interactive ? ' role="button" tabindex="0"' : "";
    return `<g class="world-country" data-country-code="${country.id}" data-name="${country.nameJa}"${tab}><path d="${path}"></path>${marker}</g>`;
  }).join("");
  return `<svg class="world-region-map" viewBox="0 0 ${WIDTH} ${HEIGHT}" aria-label="${region.name}の地図" preserveAspectRatio="xMidYMid meet">${groups}</svg>`;
}
