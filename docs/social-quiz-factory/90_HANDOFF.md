# Social Quiz Factory — handoff

Current status: Phase 0, Phase 1 and Phase 2 are complete. Phase 3 tasks 3.1–3.3 are complete; the next unfinished planned item remains Phase 3.4 authoritative current-capital validation. Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` remains unused.

## Latest map-performance change

The world-country game was changed from the original runtime `svg-world-maps`/SimpleMaps Robinson implementation to **pre-generated local Web Mercator region SVGs**.

Reason: the old page dynamically imported a remote map package, generated the complete world SVG in the browser, then removed countries outside the selected region. This caused unnecessary network, module-evaluation and DOM work. The user also explicitly requested a Mercator map.

Current world map pipeline:

- authoritative geometry source: Natural Earth `Admin 0 – Countries`, 1:50m, version 5.1.1;
- license: Public Domain;
- source archive used by generator: `https://naturalearth.s3.amazonaws.com/5.1.1/50m_cultural/ne_50m_admin_0_countries.zip`;
- downloaded ZIP SHA-256 is recorded in `subjects/social/quiz/assets/maps/world/manifest.json`;
- generator: `scripts/build_social_world_maps.py` (`pyshp` 2.3.1 compatible);
- projection: Web Mercator at build time;
- output: 15 SVGs plus manifest under `subjects/social/quiz/assets/maps/world/`;
- small-country marker coordinates from `world-countries.js` are embedded into generated SVGs with the same `data-code` as the country polygon;
- Pacific islands are dateline-wrapped during generation;
- browser loader: `js/renderers/world-map-source.js` fetches only `${regionId}.svg` with `cache: "force-cache"`;
- there is no jsDelivr/esm.sh map dependency and no runtime whole-world generation/deletion path.

Generated regional asset sizes are approximately 10 KB–233 KB uncompressed. Tests enforce `<250 KB` for every individual region and `<1.3 MB` total across all 15 files. Only one selected region is requested at runtime.

## World game behavior preserved

The map delivery/projection change did not alter the educational data or game loop. The family still exposes 15 regional views and seven modes:

1. Easy: flag + country name + capital -> click country.
2. Hard: country name only -> click country.
3. Hard: capital only -> click country.
4. Hard: flag only -> click country.
5. Reverse: highlighted country -> country-name 5-choice.
6. Reverse: highlighted country -> capital 5-choice.
7. Reverse: highlighted country -> flag 5-choice.

Shared gameplay remains 180 seconds, -20 seconds per wrong answer, start/correct/wrong SE, game over at zero and clear after the final answer before zero. `QuizEngine` was not modified for the map conversion.

## Architecture status

- `QuizEngine`: scoring/order/progress/timer only.
- `QuizEffects`: optional SE only.
- `world-region`: injects one local pre-split regional SVG and binds the expected country codes.
- `world-map-choice`: display-only highlighted map + existing choice renderer.
- `world-map-source`: local regional asset loading/cache only.
- `world-regions.js`: region and mode definitions only; obsolete Robinson projection math was removed.
- `world-map-metadata.js`: Natural Earth version/license/projection/delivery metadata used by the game definition.
- `assets/maps/world/manifest.json`: reproducible generated-asset metadata and hashes.

The original `WORLD_MAP_SOURCE` constant in the large `world-countries.js` data file is legacy metadata and is no longer used by the game or renderer; new code must use `WORLD_MERCATOR_MAP_SOURCE`. Remove the legacy constant in a future cleanup only when it can be done without disturbing country data.

## Validation

World tests now verify:

- stable unique two-letter country keys;
- 15 regions and all seven game modes;
- same-region five-choice invariants;
- current capital eligibility policy;
- Natural Earth 5.1.1 / Public Domain / Web Mercator metadata;
- all 15 local SVG files are represented by the manifest;
- every quiz country appears as `data-code` in its regional SVG;
- regional size ceilings;
- runtime world loader contains no jsDelivr, esm.sh or `svg-world-maps` dependency.

Before merging this map conversion, run the canonical Node 22 social-quiz CI and confirm all tests pass.

## Exact next start point after this conversion is merged

1. Read latest `main`.
2. Recursively read every Markdown under `docs/social-quiz-factory/` in lexical order.
3. Start Phase 3.4.
4. Enumerate every country currently eligible for `easy`, `capital`, and `reverse-capital` modes.
5. Validate each intended capital against current authoritative sources, preferring Ministry of Foreign Affairs / national or international official sources.
6. Explicitly review constitutional capital vs government seat, multiple capitals, transitions, conflict-related temporary seats and status-sensitive cases.
7. If a bare capital prompt is not clearly one-to-one, exclude it from capital modes rather than guessing; preserve country-name/flag modes when appropriate.
8. Add regression tests for newly identified special cases.
9. After Phase 3.4, proceed to Phase 4.1 colored selectable broad-region support for continents/oceans without modifying `QuizEngine`.

## Important constraints

- Preserve data / core / renderer / effects / presentation separation.
- Do not redesign UI unless requested.
- One prompt -> one intended answer.
- Keep regional maps large enough for reliable clicking.
- Never restore runtime full-world map generation solely for convenience; generated local regional assets are now the performance contract.
- Do not recreate old `social-quiz/`.
- Update `20_EXECUTION_PLAN.md` and fully rewrite this file after normal factory work.
