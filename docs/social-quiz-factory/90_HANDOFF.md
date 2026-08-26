# Social Quiz Factory — handoff

Current status: Phase 0 and Phase 1 are complete. Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` remains unused. The Japan-map visual asset has been migrated from the deformed lalamalink map to PA4KEV/japan-vector-map v1.0 without changing question answers or `QuizEngine` scoring behavior.

Architecture status:

- `QuizEngine` remains unchanged and owns only scoring, progress and state transitions.
- The page layout/UI was not redesigned; only the Japan map asset integration and map-path styling were changed.
- Japan geography facts remain under `subjects/social/quiz/js/data/`, independent of presentation.
- `JAPAN_PREFECTURE_MAP` now pins `PA4KEV/japan-vector-map` commit `6be9e705045777b7c433c429b0313f19b49d1ed4`, release v1.0, `japan-prefectures.svg`, MIT License, Copyright (c) 2023 Kevin Matsubara.
- Existing canonical answer keys remain string codes `1` through `47`.
- PA4KEV source layer names such as `hokkaido`, `tokyo`, `osaka`, and `okinawa` are mapped onto those stable answer keys through renderer configuration. The upstream spelling `nigata` is intentionally preserved only as a source-layer key for 新潟県.
- `SvgRegionRenderer` now supports optional `sourceKeyAttribute` + `regionKeyMap`, so an SVG's own layer names can be adapted without contaminating game/question data.
- When source-layer mapping is active, mapped layers are forced visible and non-answer SVG shapes do not intercept pointer input. This is required because the PA4KEV source contains some hidden prefecture layers and separate island-outline layers.
- Root `index.html` URLs did not change; all three Japan drills remain under 「学習ゲーム」.

Completed this map-migration run:

- Replaced the deformed lalamalink Japan map source with PA4KEV `japan-prefectures.svg` v1.0, pinned to an immutable commit.
- Kept all 47 prefecture/capital question answers unchanged.
- Updated both map games (`japan-prefectures` and `japan-prefectural-capitals`) to supply source-layer mapping to the existing SVG renderer.
- Extended `SvgRegionRenderer` with a generic source-layer-to-answer-key adapter rather than adding PA4KEV-specific logic to `QuizEngine` or question banks.
- Updated map CSS so nested PA4KEV path geometry receives fill/hover/correct/wrong styles while retaining the existing game presentation.
- Added regression coverage for all 47 PA4KEV source-layer mappings and for the renderer mapping helper, including namespaced `inkscape:label` fallback and hidden-layer activation.
- Updated `subjects/social/quiz/README.md` with the new map source, pinned commit and MIT attribution.

Next start point:

1. Read latest `main`.
2. Read every Markdown under `docs/social-quiz-factory/` in lexical order.
3. Start Phase 2.1: select and document a reusable world political-boundary dataset with a license suitable for redistribution/use in the quiz.
4. Prefer a stable open dataset whose country polygons can be converted to regional SVG views and whose identifiers can be mapped to stable country IDs.
5. Record source URL, version/date, license, attribution requirements and any known boundary caveats before importing assets.
6. Then begin Phase 2.2: define stable country IDs and Japanese display names separately from UI/layout.
7. Do not begin regional country games until the dataset/ID foundation is validated.

Important constraints:

- Preserve data / core / renderer / presentation separation.
- Do not redesign the UI unless explicitly requested.
- One prompt -> one intended answer.
- Regional world maps must be large enough for reliable clicking; do not default to one tiny world map.
- Do not recreate or use old `social-quiz/`.
- When a new playable game is published, add its top-page 「学習ゲーム」 entry in the same run without removing existing entries.
- At the end of every normal factory run, update `20_EXECUTION_PLAN.md` and fully rewrite this file with the exact next task.
