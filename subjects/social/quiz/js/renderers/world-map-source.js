const REGION_ID_RE = /^[a-z0-9-]+$/;
const regionSvgPromises = new Map();

export function regionMapUrl(regionId) {
  if (!REGION_ID_RE.test(String(regionId))) {
    throw new Error(`Invalid world region id: ${regionId}`);
  }
  return new URL(`../../assets/maps/world/${regionId}.svg`, import.meta.url);
}

export async function loadWorldRegionSvg(regionId) {
  const key = String(regionId);
  if (!regionSvgPromises.has(key)) {
    regionSvgPromises.set(key, (async () => {
      const response = await fetch(regionMapUrl(key), { cache: "force-cache" });
      if (!response.ok) {
        throw new Error(`World region SVG failed to load: ${key} (${response.status})`);
      }
      const svgText = await response.text();
      if (!/^\s*(?:<\?xml[^>]*>\s*)?<svg\b/i.test(svgText)) {
        throw new Error(`World region asset is not SVG: ${key}`);
      }
      return svgText;
    })());
  }
  return regionSvgPromises.get(key);
}
