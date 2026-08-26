# Social Quiz Factory — handoff

Current status: Phase 0, Phase 1, and Phase 2 are complete. Phase 3 tasks 3.1–3.3 are complete; the next unfinished planned item remains Phase 3.4 authoritative current-capital validation. Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` remains unused.

## Latest world-region simplification

The world-country family has been consolidated from 15 fine-grained selectable views to **six major regions**, per user request:

1. アジア
2. ヨーロッパ
3. アフリカ
4. 北アメリカ
5. 南アメリカ
6. オセアニア

The old fine-grained labels still exist inside `world-countries.js` as internal subregion metadata so the large country dataset did not need to be rewritten. `world-regions.js` owns the mapping from those internal subregions to the six public major regions.

Old query URLs remain compatible: for example `region=east-asia` resolves to `asia`, `region=caribbean` resolves to `north-america`, and `region=pacific-islands` resolves to `oceania`.

## Per-play question count

World-country sessions now contain **at most 20 questions**.

- Large regions/modes: randomly sample 20 eligible countries per page load/play definition.
- If fewer than 20 countries are eligible, use all eligible countries. This applies naturally to South America, Oceania, and some capital-filtered cases.
- Reverse 5-choice distractors are still sampled from the **full eligible country pool for the selected major region**, not only from the 20 countries chosen as questions.
- Existing one-to-one capital eligibility policy still applies before question sampling.

## World map asset pipeline

The performance contract from the previous checkpoint remains in place:

- source: Natural Earth `Admin 0 – Countries`, 1:50m, version 5.1.1;
- license: Public Domain;
- projection: Web Mercator at build time;
- generator: `scripts/build_social_world_maps.py`;
- output: six SVG files plus `manifest.json` under `subjects/social/quiz/assets/maps/world/`;
- runtime: only the selected local region SVG is fetched, with `cache: "force-cache"`;
- no jsDelivr/esm.sh map dependency;
- no runtime full-world SVG construction/deletion.

Current generated files:

- `asia.svg`: ~311 KB / 49 countries
- `europe.svg`: ~281 KB / 45 countries
- `africa.svg`: ~172 KB / 54 countries
- `north-america.svg`: ~247 KB / 23 countries
- `south-america.svg`: ~108 KB / 12 countries
- `oceania.svg`: ~70 KB / 14 countries

The manifest records `regionModel: "six-major-regions"`. Tests enforce <350 KB per major-region SVG and <1.3 MB total.

Oceania uses dateline wrapping during generation so Samoa/Tonga and the western Pacific can remain in one coherent map. Small-country marker hit targets keep the same stable country code as their polygon answer key.

## World game modes preserved

All six regions keep the requested seven modes:

1. Easy: flag + country name + capital -> click country.
2. Hard: country name only -> click country.
3. Hard: capital only -> click country.
4. Hard: flag only -> click country.
5. Reverse: highlighted country -> country-name 5-choice.
6. Reverse: highlighted country -> capital 5-choice.
7. Reverse: highlighted country -> flag 5-choice.

Shared gameplay remains 180 seconds, -20 seconds per wrong answer, start/correct/wrong SE, game over at zero, and clear after answering the last question before zero. `QuizEngine` was not changed by the region consolidation.

## Architecture status

- `QuizEngine`: scoring/order/progress/timer only.
- `QuizEffects`: optional SE only.
- `world-regions.js`: six public regions, legacy-subregion mapping, seven mode definitions.
- `world-countries.js`: country facts plus internal fine-grained subregion tags.
- `world-countries.js` game factory: major-region resolution, capital eligibility, max-20 question sampling, reverse-choice construction.
- `world-region`: injects one local major-region SVG and binds every country in that major region.
- `world-map-choice`: display-only highlighted map + existing choice renderer.
- `world-map-source`: local asset loading/cache only.
- `world-map-metadata.js`: Natural Earth/Web Mercator/six-file delivery metadata.
- `assets/maps/world/manifest.json`: reproducible six-file generated asset metadata and hashes.

## Validation added/updated

World regression tests now cover:

- exactly six public region IDs;
- all six region groups contain enough countries and capital-eligible countries;
- legacy region URL normalization;
- Natural Earth 5.1.1 / Public Domain / Web Mercator metadata;
- manifest region model is `six-major-regions`;
- all six local SVGs contain every country belonging to the corresponding major region;
- <350 KB per region and <1.3 MB total asset budget;
- all six × seven game variants validate;
- no play exceeds 20 questions;
- small regions use all eligible countries;
- reverse questions contain five distinct choices from the same major region;
- capital ambiguity policy remains intact, including Bolivia exclusion from bare-capital modes;
- runtime map loader remains CDN-free.

## Exact next start point

1. Read latest `main`.
2. Recursively read every Markdown under `docs/social-quiz-factory/` in lexical order.
3. Start Phase 3.4.
4. Enumerate every country currently eligible for `easy`, `capital`, and `reverse-capital` modes across the six major regions.
5. Validate each intended capital against current authoritative sources, preferring Ministry of Foreign Affairs / national or international official sources.
6. Explicitly review constitutional capital vs government seat, multiple capitals, transitions, conflict-related temporary seats, and status-sensitive cases.
7. If a bare capital prompt is not clearly one-to-one, exclude it from capital modes rather than guessing; preserve country-name/flag modes when appropriate.
8. Add regression tests for newly identified special cases.
9. After Phase 3.4, proceed to Phase 4.1 colored selectable broad-region support for continents/oceans without modifying `QuizEngine`.

## Important constraints

- Preserve data / core / renderer / effects / presentation separation.
- Do not redesign UI unless requested.
- One prompt -> one intended answer.
- Public world-region selector stays at six major regions unless the user explicitly changes that requirement.
- World sessions stay capped at 20 questions unless the user explicitly changes that requirement.
- Keep local pre-generated Web Mercator assets; do not restore runtime full-world/CDN map generation.
- Do not recreate old `social-quiz/`.
- Update `20_EXECUTION_PLAN.md` and fully rewrite this file after normal factory work.
