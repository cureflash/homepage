export const NATURAL_EARTH_WORLD = {
  repository: "https://github.com/nvkelso/natural-earth-vector",
  commit: "ca96624a56bd078437bca8184e78163e5039ad19",
  countryDataset: "ne_50m_admin_0_countries.geojson",
  capitalDataset: "ne_50m_populated_places.geojson",
  license: "Public Domain",
  countriesUrl: "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/ca96624a56bd078437bca8184e78163e5039ad19/geojson/ne_50m_admin_0_countries.geojson",
  capitalsUrl: "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/ca96624a56bd078437bca8184e78163e5039ad19/geojson/ne_50m_populated_places.geojson"
};

export const WORLD_FLAG_SOURCE = {
  repository: "https://github.com/lipis/flag-icons",
  version: "7.5.0",
  license: "MIT",
  url(code) {
    return `https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.5.0/flags/4x3/${String(code).toLowerCase()}.svg`;
  }
};
