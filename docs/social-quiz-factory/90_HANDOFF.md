# Social Quiz Factory — handoff

Current status: Phase 0.1 through 0.6 and Phase 1.1 through 1.3 are complete. Canonical implementation is `subjects/social/quiz/`; old `social-quiz/` remains unused.

Architecture status:

- `QuizEngine` remains unchanged and owns scoring, progress and state transitions only.
- UI/CSS was not redesigned.
- Japan geography reference data is now under `subjects/social/quiz/js/data/` and is independent of presentation.
- The prefecture map asset is pinned to lalamalink/japan-map-svg commit `b6008cd22e6993a62860f5afafcc810ef4f9c69f` (CC0 1.0, version 2026.06.30), rather than following upstream `main`.
- The 47 map region code/name pairs are stored separately from the question bank and checked by an offline regression test.
- Root `index.html` exposes both 「都道府県当て」 and 「県庁所在地当て」 under 「学習ゲーム」; existing other game entries remain present.

Completed this run:

- Phase 1.2: added a pinned Japan-map manifest containing all 47 `data-code` / prefecture-name pairs and tests that the prefecture game exactly matches them.
- Refactored the existing prefecture game to consume shared Japan prefecture data without changing its UI or scoring behavior.
- Phase 1.3: added all 47 prefectural-capital -> prefecture map questions as game ID `japan-prefectural-capitals`.
- Added curriculum metadata from MEXT. The current social-studies guidance explicitly requires prefectural capital names to be covered alongside prefecture names and locations.
- Added factual source metadata from the Geospatial Information Authority of Japan 「都道府県と都道府県庁所在地」. For the educational label used there, Tokyo is stored as `東京`.
- Registered the new game through the existing registry; no `QuizEngine` fork was added.
- Added a root-public-entry regression test so both Japan map drills must remain discoverable from the top-page 「学習ゲーム」 section.
- Targeted Node tests for the new data/registry/mapping logic passed locally before commit preparation.

Next start point:

1. Read latest `main`.
2. Read all Markdown under `docs/social-quiz-factory/` in lexical order.
3. Start Phase 1.4: add reverse curated 5-choice drill, prefecture -> prefectural capital.
4. The correct capital plus four distractors must be stored/curated as question data; do not blindly sample distractors at runtime.
5. Reuse `ChoiceRenderer`; do not change `QuizEngine` or redesign the UI.
6. When the new reverse game is playable, register it and add a separate root `index.html` 「学習ゲーム」 entry in the same run.
7. Then proceed to Phase 1.5 validation of one-to-one prefecture/capital coverage.

Important constraints:

- Preserve question data independently from UI/CSS.
- One prompt -> one intended correct answer.
- Use curated 5-choice questions when associations can overlap.
- Use colored selectable regions for oceans/continents/broad regions.
- Record sources and source years for changing facts/statistics.
- Do not recreate or use old `social-quiz/`.
- At the end of every run, update `20_EXECUTION_PLAN.md` and fully rewrite this file with the exact next task.
