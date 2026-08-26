# Content and architecture rules

## Supported answer modes

### 1. Exact map region
Use when the answer has a unique polygon/region.

Initial uses:
- prefecture name -> prefecture
- prefectural capital -> prefecture
- country name -> country
- capital -> country
- flag -> country
- mountain range / river / plain / industrial region where a suitable selectable region or line representation exists

World-country exact-map questions use regional views rather than one full-world answer map. Tiny island states may receive an explicit marker hit target mapped to the same stable ISO-style country key.

### 2. Colored region selection
Use when the target is broad geography rather than a political polygon.

Initial uses:
- continents
- oceans
- Japanese geographic regions if added
- world regions
- climate zones when represented spatially

Each target region must be visibly distinguishable before answering. Do not rely on tiny unlabeled hit areas.

### 3. 5-choice
Use when answering by buttons rather than directly on a map.

For ambiguous real-world associations, the correct answer plus four distractors are curated as question data and are not sampled blindly. Initial uses include specialties, agricultural/industrial facts, historical person -> country, cultural items, and climographs.

For the world-country reverse drills explicitly requested by the user, a controlled sampling rule is allowed because the tested association is one-to-one:
- highlighted country -> country name;
- highlighted country -> flag;
- highlighted country -> capital only when that country is eligible for bare-capital questions.

The correct answer plus four distinct wrong answers may be sampled only from other eligible countries in the same displayed region. Automated validation must confirm all five keys are distinct, all options belong to the current region, and the correct key is present. This exception must not be generalized to ambiguous content.

## World-country data model

Stable country keys use two-letter ISO-style codes. Display labels, capital strings, status notes, region membership, and optional small-country marker coordinates remain separate from renderer geometry.

Countries/regions with multiple capitals, an unsettled capital transition, no official capital, or a diplomatic/political issue that prevents one simple intended answer are excluded from capital-based modes. They may remain available for country-name and flag modes.

## World map asset pipeline

The browser must not build the world map from a remote library at runtime.

Canonical pipeline:

1. Source geometry: Natural Earth 1:50m `Admin 0 – Countries`, version 5.1.1, Public Domain.
2. `scripts/build_social_world_maps.py` maps Natural Earth records to the quiz two-letter country keys.
3. Geographic coordinates are projected to **Web Mercator** at build time.
4. The generator splits geometry into the 15 quiz regions and embeds small-country marker hit targets where configured.
5. Generated SVGs and `manifest.json` are stored at `subjects/social/quiz/assets/maps/world/`.
6. At runtime `world-map-source.js` fetches only the selected region SVG with browser caching. There is no jsDelivr/esm.sh dependency, no full-world SVG construction, and no browser-side deletion of unrelated countries.

The manifest records source version/URL/hash, Public Domain terms, projection, per-region file size, country count and SHA-256. Keep each regional request reasonably small; automated tests currently enforce a 250 KB uncompressed ceiling per region and a 1.3 MB ceiling for all 15 generated SVGs combined.

## Renderer ownership

- `svg-region`: generic SVG region clicking, currently Japan.
- `choice`: ordinary button choices.
- `world-region`: loads one already-split local world-region SVG and owns country-map input.
- `world-map-choice`: display-only highlighted regional map plus a `choice` renderer for reverse questions.

`QuizEngine` does not know about projection, map source, country codes, flags, file paths, or world-region selectors.

## Question schema direction

Every question should be representable with stable content data including a unique id, prompt, stable answer key, display label, optional fixed choices, factual source metadata and curriculum metadata. UI must not be responsible for educational metadata.

## Shared gameplay layer

The first-generation social quiz catalog shares a lightweight game loop independent of individual question banks:

- default time limit: 180 seconds;
- wrong answer penalty: 20 seconds;
- timer reaching 0 before all questions are answered: game over;
- answering the final question while time remains: clear;
- start/correct/wrong SE are invoked through a separate effects adapter.

A game may override timing values without changing its questions. Audio failure must not alter scoring, timing, or answer availability.

## UI isolation

The current HTML/CSS is not a permanent design contract.

Required rule:
- game data must not contain CSS selectors or layout assumptions;
- `QuizEngine` must not depend on colors, dimensions, typography, decorative UI, projection or map files;
- renderers may depend on semantic answer containers but not on a specific site-wide visual design;
- replacing outer HTML/CSS later must not require rewriting question banks;
- asset identity belongs to renderer/game configuration or source metadata, not core scoring logic;
- sound playback belongs to the effects adapter;
- region/mode selectors select a game variant; they do not mutate answers or scoring behavior.

## Map-data licensing

A software repository license and bundled geographic-data license may differ, so record the actual geometry source.

Current world geometry is **Natural Earth 1:50m**, Public Domain. Generated regional SVGs are derivative projections/selections of that Public Domain geometry. The source page, version, terms URL and downloaded ZIP SHA-256 are retained in `assets/maps/world/manifest.json` and `js/data/world-map-metadata.js`.

## Ambiguity policy

A question is rejected if a reasonable learner could select more than one presented answer and be factually correct.

Examples:
- `みかんで有名な県は？` with 愛媛・和歌山・静岡 in the same options: reject.
- `日本一のみかん生産量` requires an explicit source year and current authoritative statistics.
- a country with several conventionally described capitals must not be forced into a single-capital question; mark it ineligible instead.

## Data-source priority

1. MEXT curriculum guidance for scope/placement.
2. Statistics Bureau, MAFF, METI, MLIT, JMA and other relevant Japanese government bodies for facts/statistics.
3. Ministry of Foreign Affairs and other relevant government/international bodies for current country/region names, flags, capitals, and diplomatic-status-sensitive wording.
4. UN and other official international organizations for international data.
5. National or official geographic/statistical authorities for country-specific facts.
6. Stable scholarly/reference sources only when an official source is unsuitable.

Question wording must be newly written. Do not copy textbook prose.
