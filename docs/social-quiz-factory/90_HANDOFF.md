# Social Quiz Factory — handoff

Current status: Phase 0.1 through 0.5 complete. `subjects/social/quiz/js/core/game-validator.js` now validates game IDs/titles, renderer configuration, non-empty question arrays, unique question IDs, prompts, answers, and choice-option integrity. `subjects/social/quiz/js/main.js` asserts the selected game definition before creating the renderer or starting `QuizEngine`. Choice validation rejects duplicate option keys/labels and answers that are not present among the options. The current prefecture game satisfies the schema.

Architecture review completed this run:

- `QuizEngine` contains scoring, progress, state transitions and semantic UI updates only; it has no dependency on colors, dimensions, typography, map assets, or CSS layout values.
- `SvgRegionRenderer` and `ChoiceRenderer` remain separate answer mechanisms selected outside `QuizEngine`; question banks do not contain CSS selectors or presentation layout assumptions.
- No UI redesign was made.
- Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` was not used or recreated.

Next start point:

1. Read latest `main`.
2. Read all Markdown under `docs/social-quiz-factory/` in lexical order.
3. Inspect current canonical engine, validator, renderers, game data, tests, page wiring, and root `index.html` game links.
4. Start with Phase 0.6 in `20_EXECUTION_PLAN.md`: add a game registry/catalog so adding games does not require modifying core scoring logic.
5. After registry validation, continue to Phase 1.2: validate all 47 prefecture IDs against the Japan map asset.
6. Do not redesign the UI.

Validation completed this run:

- Added `tests/game-validator.test.js` covering the current prefecture definition, missing game fields, unsupported renderer types, `svg-region` requirements, duplicate question IDs, empty prompts, missing answers, duplicate option keys/labels, and choice answers absent from options.
- New validator logic was executed in Node with representative positive/negative cases: 5 passed, 0 failed; `node --check` passed for the validator module.
- Existing `QuizEngine` implementation was unchanged; its five characterization tests from Phase 0.1 remain the regression baseline.
- Root `index.html` still exposes `subjects/social/quiz/` as 「都道府県当て」 under 「学習ゲーム」 with the correct canonical relative path; existing other game entries remain present.

Important constraints:

- Preserve question data independently from UI/CSS.
- One prompt -> one intended correct answer.
- Use curated 5-choice questions when associations can overlap.
- Use colored selectable regions for oceans/continents/broad regions.
- Record sources and source years for changing facts/statistics.
- When a new playable game is added or its URL changes, update the root `index.html` 「学習ゲーム」 entry in the same run without removing existing games.
- At the end of every run, update the execution-plan checkboxes and rewrite this file with the exact next task.
