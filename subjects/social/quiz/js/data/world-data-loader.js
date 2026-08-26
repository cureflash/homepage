import { WORLD_COUNTRY_CODES, WORLD_REGIONS_BY_ID } from "./world-regions.js";
import { NATURAL_EARTH_WORLD, WORLD_FLAG_SOURCE } from "./world-sources.js";

const A3_ALIASES = { KOS: "XK", XKO: "XK" };
let datasetPromise = null;

function countryCode(properties = {}) {
  const iso = String(properties.ISO_A2 ?? "").toUpperCase();
  if (/^[A-Z]{2}$/.test(iso)) return iso;
  return A3_ALIASES[String(properties.ADM0_A3 ?? properties.SOV_A3 ?? "").toUpperCase()] ?? null;
}

function capitalScore(feature) {
  const p = feature.properties ?? {};
  let score = 0;
  if (p.ADM0CAP === 1) score += 100;
  if (p.FEATURECLA === "Admin-0 capital") score += 40;
  if (Number(p.CAPALT ?? 0) === 0) score += 20;
  score -= Number(p.LABELRANK ?? 10);
  return score;
}

async function fetchJson(url) {
  const response = await fetch(url, { mode: "cors" });
  if (!response.ok) throw new Error(`World data fetch failed: HTTP ${response.status}`);
  return response.json();
}

export async function loadWorldDataset() {
  if (datasetPromise) return datasetPromise;
  datasetPromise = Promise.all([
    fetchJson(NATURAL_EARTH_WORLD.countriesUrl),
    fetchJson(NATURAL_EARTH_WORLD.capitalsUrl)
  ]).then(([countriesGeoJson, capitalsGeoJson]) => {
    const allowed = new Set(WORLD_COUNTRY_CODES);
    const featuresByCode = new Map();
    for (const feature of countriesGeoJson.features ?? []) {
      const code = countryCode(feature.properties);
      if (!code || !allowed.has(code) || featuresByCode.has(code)) continue;
      featuresByCode.set(code, feature);
    }

    const capitalsByCode = new Map();
    for (const feature of capitalsGeoJson.features ?? []) {
      const code = countryCode(feature.properties);
      if (!code || !allowed.has(code)) continue;
      const p = feature.properties ?? {};
      if (!(p.ADM0CAP === 1 || String(p.FEATURECLA ?? "").startsWith("Admin-0 capital"))) continue;
      const current = capitalsByCode.get(code);
      if (!current || capitalScore(feature) > capitalScore(current)) capitalsByCode.set(code, feature);
    }

    const countriesByCode = new Map();
    for (const code of WORLD_COUNTRY_CODES) {
      const feature = featuresByCode.get(code);
      const capital = capitalsByCode.get(code);
      if (!feature) throw new Error(`Natural Earth country geometry missing: ${code}`);
      if (!capital) throw new Error(`Natural Earth capital missing: ${code}`);
      const p = feature.properties ?? {};
      const cp = capital.properties ?? {};
      countriesByCode.set(code, {
        id: code,
        nameJa: p.NAME_JA || p.NAME || p.ADMIN || code,
        capitalJa: cp.NAME_JA || cp.NAME || code,
        flagCode: code.toLowerCase(),
        flagUrl: WORLD_FLAG_SOURCE.url(code),
        feature
      });
    }
    return { countriesByCode, source: NATURAL_EARTH_WORLD };
  }).catch((error) => {
    datasetPromise = null;
    throw error;
  });
  return datasetPromise;
}

export async function loadWorldRegion(regionId) {
  const region = WORLD_REGIONS_BY_ID.get(regionId);
  if (!region) throw new Error(`Unknown world region: ${regionId}`);
  const dataset = await loadWorldDataset();
  return {
    region,
    countries: region.codes.map((code) => dataset.countriesByCode.get(code)),
    source: dataset.source
  };
}
