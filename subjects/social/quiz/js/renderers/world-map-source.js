import { WORLD_MAP_SOURCE } from "../data/world-countries.js";

const MODULE_URLS = [
  `https://cdn.jsdelivr.net/npm/${WORLD_MAP_SOURCE.package}@${WORLD_MAP_SOURCE.version}/dist/index.js`,
  `https://esm.sh/${WORLD_MAP_SOURCE.package}@${WORLD_MAP_SOURCE.version}`
];

let worldSvgPromise = null;

export async function loadWorldSvg() {
  if (!worldSvgPromise) {
    worldSvgPromise = (async () => {
      let lastError = null;
      for (const url of MODULE_URLS) {
        try {
          const module = await import(url);
          const createMap = module.createMap ?? module.default;
          if (typeof createMap !== "function") throw new Error("createMap export missing");
          return createMap("world", {
            background: "#eef1f4",
            borders: "#66717d",
            showTooltip: false,
            showLabels: false,
            size: "lg"
          });
        } catch (error) {
          lastError = error;
        }
      }
      throw lastError ?? new Error("svg-world-maps could not be loaded");
    })();
  }
  return worldSvgPromise;
}
