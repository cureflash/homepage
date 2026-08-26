# Social Quiz Factory — execution plan

Work strictly from top to bottom. Check off an item only after implementation and validation are complete.

## Phase 0 — stabilize the reusable engine

- [x] 0.1 Characterize current behavior with tests: shuffle, scoring, progress, lock-after-answer, result screen, restart.
- [x] 0.2 Add schema validation for game definitions and questions.
- [x] 0.3 Validate unique question IDs, non-empty prompts, answer presence, renderer requirements, and option uniqueness.
- [x] 0.4 Confirm `QuizEngine` has no visual-design assumptions; move any presentation-specific dependency outward if found.
- [x] 0.5 Confirm renderers are replaceable and current UI can later be redesigned without changing question banks.
- [x] 0.6 Add a game registry/catalog so new games can be registered without modifying core scoring logic.
- [x] 0.7 Add shared gameplay timing/effects: explicit start, 180-second countdown, 20-second wrong-answer penalty, timeout game over, start/correct/wrong SE, and regression tests.

## Phase 1 — Japan: prefectures and capitals

- [x] 1.1 Prefecture name -> click prefecture on Japan map.
- [x] 1.2 Validate all 47 prefecture IDs against the map asset.
- [x] 1.3 Add prefectural capital -> click corresponding prefecture, all 47.
- [x] 1.4 Add reverse 5-choice drill: prefecture -> prefectural capital.
- [x] 1.5 Add validation that every prefecture/capital pair appears exactly once and no duplicate mapping exists.

## Phase 2 — world countries by region

Do not use one tiny full-world answer map. Keep regional views large enough for reliable selection.

Implementation note: Phase 2 now uses **Natural Earth 1:50m Admin 0 Countries v5.1.1 (Public Domain)**. `scripts/build_social_world_maps.py` projects it to Web Mercator and stores 15 pre-split local SVGs in `subjects/social/quiz/assets/maps/world/`. Runtime loads only the selected regional file; the earlier `svg-world-maps` CDN/Robinson full-world generation path is retired.

- [x] 2.1 Select and document a reusable world boundary dataset with acceptable license.
- [x] 2.2 Define stable country IDs and Japanese display names.
- [x] 2.3 Create East Asia country map quiz.
- [x] 2.4 Create Southeast Asia country map quiz.
- [x] 2.5 Create South Asia country map quiz.
- [x] 2.6 Create West/Central Asia country map quiz as curriculum-appropriate groupings.
- [x] 2.7 Create Europe country map quizzes split into usable regional views.
- [x] 2.8 Create Africa country map quizzes split into usable regional views.
- [x] 2.9 Create North America country map quiz.
- [x] 2.10 Create Central America/Caribbean map quiz.
- [x] 2.11 Create South America country map quiz.
- [x] 2.12 Create Oceania country map quiz.
- [x] 2.13 Validate country names, IDs, boundaries, and region membership.
- [x] 2.14 Replace runtime full-world/CDN rendering with local Web Mercator regional SVGs; validate source manifest, country coverage, no CDN dependency, and regional file-size budgets.

## Phase 3 — world capitals

- [x] 3.1 Build country-capital data with authoritative source metadata and explicit capital-mode eligibility policy.
- [x] 3.2 Capital -> country map selection, using the same regional views from Phase 2.
- [x] 3.3 Country/highlighted-country -> capital 5-choice using the validated same-region world-country exception documented in the architecture rules.
- [ ] 3.4 Exhaustively validate one current intended capital per capital-mode question against authoritative current sources; explicitly handle countries with special/multiple capital arrangements, transition cases, conflict-related government-seat issues, or diplomatic-status complications rather than guessing.

## Phase 4 — continents, oceans, and broad regions

Use a colored-region renderer or equivalent region-selection configuration. The user should select a visibly separated area, not guess a precise coordinate.

- [ ] 4.1 Implement/extend renderer support for colored selectable broad regions without changing core scoring.
- [ ] 4.2 Continents: continent name -> colored continent region.
- [ ] 4.3 Oceans: Pacific, Atlantic, Indian, Arctic, Southern -> colored ocean region.
- [ ] 4.4 Validate that selectable regions do not overlap in a way that creates multiple correct clicks.
- [ ] 4.5 Add Japanese regional divisions only if they match curriculum needs and can be defined unambiguously.

## Phase 5 — Japanese geography: landforms and named regions

- [ ] 5.1 Major mountain ranges/mountain systems -> select location/region.
- [ ] 5.2 Major plains and basins -> select location/region.
- [ ] 5.3 Major rivers -> select corresponding line/region with adequate hit area.
- [ ] 5.4 Major industrial zones/regions -> select colored region.
- [ ] 5.5 Major ocean currents around Japan -> select labeled/colored current path or region.
- [ ] 5.6 Validate every feature against authoritative geography sources and curriculum relevance.

## Phase 6 — specialties, agriculture, industry: curated 5-choice

- [ ] 6.1 Define question-bank schema for `fact + correct target + four curated distractors + source year/source`.
- [ ] 6.2 Major agricultural products and prefectures.
- [ ] 6.3 Major fisheries/products and regions where curriculum-relevant.
- [ ] 6.4 Major industrial products/industries and prefectures/regions.
- [ ] 6.5 Add ambiguity review: reject questions where another displayed option could reasonably satisfy the wording.
- [ ] 6.6 Add freshness metadata and a process for statistics-dependent questions.

## Phase 7 — climate and climographs

- [ ] 7.1 Add a climate/climograph data format independent of UI styling.
- [ ] 7.2 Add a renderer capable of displaying a climograph while answering through curated 5-choice buttons.
- [ ] 7.3 Japanese climate-region climographs -> choose climate/region from five.
- [ ] 7.4 World climate-type climographs -> choose climate type from five.
- [ ] 7.5 Representative city climographs -> choose city from five only where the curated set is unambiguous.
- [ ] 7.6 Validate monthly temperature/precipitation source data and units.

## Phase 8 — historical people and countries

- [ ] 8.1 Historical person -> country/region, curated 5-choice.
- [ ] 8.2 Limit early questions to figures with a clear curriculum-relevant country association.
- [ ] 8.3 For people whose nationality/state identity is historically complex, write explicit historically accurate labels or exclude them from the first-generation bank.
- [ ] 8.4 Validate every person-country association against reliable historical sources.

## Phase 9 — additional one-to-one social-studies drills

- [ ] 9.1 Flags -> country, curated 5-choice.
- [ ] 9.2 Country -> flag, curated 5-choice.
- [ ] 9.3 Major world religions/cultural regions only where wording and region definitions are unambiguous.
- [ ] 9.4 Major international organizations -> headquarters/country, curated 5-choice where curriculum-relevant.
- [ ] 9.5 Basic civics institution matching (Diet/Cabinet/Courts etc.) using one-to-one choice questions.
- [ ] 9.6 Historical event -> period/era, curated choice.
- [ ] 9.7 Era/person/event one-to-one matching after source review.

## Phase 10 — catalog, quality, and maintenance

- [ ] 10.1 Add a game catalog grouped by elementary/junior-high/high-school and geography/history/civics.
- [ ] 10.2 Store curriculum and source metadata separately from presentation.
- [ ] 10.3 Add automated content validation across every registered game.
- [ ] 10.4 Add regression tests ensuring a visual redesign cannot alter question answers or scoring data.
- [ ] 10.5 Document how to add a new game by data only, by data + renderer, and by new renderer.
- [ ] 10.6 Audit accessibility for keyboard/touch answer selection without changing the educational data model.

## Definition of done for each game

A game is complete only when its curriculum placement and authoritative factual source are recorded, every question has one intended answer, ambiguity is controlled, assets have documented usable rights, automated validation passes, existing scoring regression tests remain green, the page can be completed end-to-end, and UI changes do not require rewriting the question bank.
