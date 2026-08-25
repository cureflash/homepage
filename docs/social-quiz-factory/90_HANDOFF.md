# Social Quiz Factory — handoff

Current status: planning structure created. Existing first game is the prefecture-name -> Japan-map click quiz under `subjects/social/quiz/`.

Next start point:

1. Read latest `main`.
2. Read all files under `docs/social-quiz-factory/`.
3. Inspect current `subjects/social/quiz/js/core/quiz-engine.js`, renderers, game data, and page wiring.
4. Start with Phase 0.1 in `20_EXECUTION_PLAN.md`: add characterization/regression tests for current engine behavior before expanding content.
5. Continue Phase 0 in order. Do not redesign the UI.
6. After Phase 0 is stable, proceed to Phase 1.2 and then 1.3 (47 prefectural-capital -> prefecture questions).

Important constraints:

- Preserve question data independently from UI/CSS.
- One prompt -> one intended correct answer.
- Use curated 5-choice questions when associations can overlap.
- Use colored selectable regions for oceans/continents/broad regions.
- Record sources and source years for changing facts/statistics.
- At the end of every run, update the execution-plan checkboxes and rewrite this file with the exact next task.
