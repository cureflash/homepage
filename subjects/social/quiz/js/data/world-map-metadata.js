export const WORLD_MERCATOR_MAP_SOURCE = Object.freeze({
  title: "Natural Earth 1:50m Admin 0 – Countries",
  version: "5.1.1",
  publisher: "Natural Earth",
  sourcePage: "https://www.naturalearthdata.com/downloads/50m-cultural-vectors/50m-admin-0-countries-2/",
  termsUrl: "https://www.naturalearthdata.com/about/terms-of-use/",
  license: "Public Domain",
  projection: "Web Mercator",
  delivery: "15 pre-generated local regional SVG files",
  runtimeExternalDependency: false,
  generator: "scripts/build_social_world_maps.py",
  manifest: "assets/maps/world/manifest.json",
  note: "Natural Earth 1:50m country geometry is projected to Web Mercator and split by quiz region at build time. The browser loads only the selected local region SVG."
});
