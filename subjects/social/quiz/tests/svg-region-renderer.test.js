import test from "node:test";
import assert from "node:assert/strict";

import { applyRegionKeyMap, markDecorativeSourceLayers } from "../js/renderers/svg-region-renderer.js";

function fakeRegion({ directLabel = null, namespacedLabel = null } = {}) {
  const attributes = new Map();
  const classes = new Set();
  if (directLabel !== null) attributes.set("inkscape:label", directLabel);
  return {
    style: { display: "none" },
    classList: {
      add(name) {
        classes.add(name);
      },
      contains(name) {
        return classes.has(name);
      }
    },
    getAttribute(name) {
      return attributes.has(name) ? attributes.get(name) : null;
    },
    getAttributeNS(_namespace, name) {
      return name === "label" ? namespacedLabel : null;
    },
    setAttribute(name, value) {
      attributes.set(name, value);
    },
    attributes
  };
}

test("source layer labels can be mapped onto stable answer keys", () => {
  const tokyo = fakeRegion({ directLabel: "tokyo" });
  const hokkaido = fakeRegion({ namespacedLabel: "hokkaido" });
  const unrelated = fakeRegion({ directLabel: "chubu" });
  const mapped = applyRegionKeyMap([tokyo, hokkaido, unrelated], {
    sourceKeyAttribute: "inkscape:label",
    keyAttribute: "data-code",
    regionKeyMap: {
      tokyo: { key: "13", name: "東京都" },
      hokkaido: { key: "1", name: "北海道" }
    }
  });

  assert.deepEqual(mapped, [tokyo, hokkaido]);
  assert.equal(tokyo.attributes.get("data-code"), "13");
  assert.equal(tokyo.attributes.get("data-name"), "東京都");
  assert.equal(hokkaido.attributes.get("data-code"), "1");
  assert.equal(hokkaido.style.display, "inline");
  assert.equal(unrelated.attributes.has("data-code"), false);
});

test("renderer mapping helper preserves legacy pre-keyed candidates when no map is configured", () => {
  const candidates = [fakeRegion({ directLabel: "tokyo" })];
  assert.equal(applyRegionKeyMap(candidates, { keyAttribute: "data-code" }), candidates);
});

test("decorative source layers are made visible without becoming answer regions", () => {
  const etorofu = fakeRegion({ directLabel: "etorofutou" });
  const kunashiri = fakeRegion({ directLabel: "kunashiritou" });
  const tokyo = fakeRegion({ directLabel: "tokyo" });

  const marked = markDecorativeSourceLayers([etorofu, kunashiri, tokyo], {
    sourceKeyAttribute: "inkscape:label",
    decorativeSourceKeys: ["etorofutou", "kunashiritou"]
  });

  assert.deepEqual(marked, [etorofu, kunashiri]);
  assert.equal(etorofu.style.display, "inline");
  assert.equal(etorofu.classList.contains("map-decorative-land"), true);
  assert.equal(kunashiri.classList.contains("map-decorative-land"), true);
  assert.equal(tokyo.classList.contains("map-decorative-land"), false);
  assert.equal(etorofu.attributes.has("data-code"), false);
});
