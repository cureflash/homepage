# Social Quiz Factory — handoff

Current status: Phase 0.1 complete. `subjects/social/quiz/tests/quiz-engine.test.js` now characterizes the current `QuizEngine` behavior for start state, scoring/accuracy/progress, answer locking, result screen, restart, and shuffle preserving the complete question set without mutating source order. `subjects/social/quiz/package.json` provides the local Node test command. Five tests pass under Node.

Next start point:

1. Read latest `main`.
2. Read all files under `docs/social-quiz-factory/`.
3. Inspect current `subjects/social/quiz/js/core/quiz-engine.js`, renderers, game data, tests, page wiring, and root `index.html` game links.
4. Start with Phase 0.2 in `20_EXECUTION_PLAN.md`: add schema validation for game definitions and questions.
5. Continue to Phase 0.3 only after validation behavior has tests. Do not redesign the UI.
6. Keep `subjects/social/quiz/` as the only canonical implementation path; do not recreate or use `social-quiz/`.

Validation completed this run:

- `npm test` in `subjects/social/quiz/`: 5 passed, 0 failed.
- Root `index.html` already exposes `subjects/social/quiz/` as 「都道府県当て」 under 「学習ゲーム」; no top-page edit was needed because no new playable game was added and the canonical link is correct.

Important constraints:

- Preserve question data independently from UI/CSS.
- One prompt -> one intended correct answer.
- Use curated 5-choice questions when associations can overlap.
- Use colored selectable regions for oceans/continents/broad regions.
- Record sources and source years for changing facts/statistics.
- When a new playable game is added or its URL changes, update the root `index.html` 「学習ゲーム」 entry in the same run without removing existing games.
- At the end of every run, update the execution-plan checkboxes and rewrite this file with the exact next task.
