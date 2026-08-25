# Social Quiz Factory — handoff

Current status: Phase 0.1 through 0.6 complete. A game registry now exists at `subjects/social/quiz/js/games/registry.js`. Registered games are validated through `assertValidGameDefinition`, duplicate registered game IDs are rejected, and `main.js` resolves the requested game from the registry rather than importing the prefecture game directly. `QuizEngine` remains unchanged.

Architecture status:

- Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` was not used or recreated.
- `QuizEngine` still owns only scoring, progress and state transitions.
- Renderer selection remains outside the engine.
- Question banks remain independent of CSS/layout.
- No UI redesign was made.
- Root `index.html` still exposes `subjects/social/quiz/` as 「都道府県当て」 under 「学習ゲーム」 and existing other game entries remain present.

Completed this run:

- Added `js/games/registry.js` with `listGames`, `getGame`, `requireGame`, and a default game ID.
- Updated `js/main.js` to resolve `?game=<id>` through the registry, defaulting to the prefecture game.
- Added `tests/game-registry.test.js` for default lookup, explicit lookup, unknown IDs, and registry-list isolation.
- Performed a Node syntax check on the new registry module successfully.
- A full local clone/test run could not be performed in the execution container because outbound DNS to github.com is unavailable there; this is an environment limitation, not a repository failure. Existing repository tests were not modified.

Next start point:

1. Read latest `main`.
2. Read all Markdown under `docs/social-quiz-factory/` in lexical order.
3. Inspect the current canonical prefecture game, SVG renderer, tests, root `index.html`, and the upstream Japan map asset.
4. Start with Phase 1.2: validate all 47 prefecture IDs against the map asset. Add an automated, offline validation fixture/test if practical so future asset or data changes cannot silently break mappings.
5. Then continue to Phase 1.3: prefectural capital -> click corresponding prefecture, all 47, with authoritative source metadata.
6. Do not redesign the UI.

Important constraints:

- Preserve question data independently from UI/CSS.
- One prompt -> one intended correct answer.
- Use curated 5-choice questions when associations can overlap.
- Use colored selectable regions for oceans/continents/broad regions.
- Record sources and source years for changing facts/statistics.
- When a new playable game is added or its URL changes, update the root `index.html` 「学習ゲーム」 entry in the same run without removing existing games.
- At the end of every run, update the execution-plan checkboxes and rewrite this file with the exact next task.
