# Social Quiz Factory — handoff

Current status: Phase 0 and Phase 1 are complete. Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` remains unused.

Architecture status:

- `QuizEngine` remains unchanged and owns only scoring, progress and state transitions.
- UI/CSS was not redesigned.
- Japan geography facts remain under `subjects/social/quiz/js/data/`, independent of presentation.
- The pinned lalamalink Japan-map asset and existing map games remain unchanged.
- The existing `ChoiceRenderer` is reused for the reverse prefecture/capital drill.
- Root `index.html` exposes all three canonical Japan drills under 「学習ゲーム」 while preserving existing unrelated games.

Completed this run:

- Phase 1.4: added game ID `japan-prefecture-capital-choice` for prefecture -> prefectural capital.
- Added all 47 prefectures. Every question has exactly five choices: one correct capital and four fixed, reviewed distractors.
- Distractors are stored in `js/data/prefecture-capital-options.js`; there is no runtime sampling from the full dataset.
- Registered the game through the existing registry without changing `QuizEngine` or `ChoiceRenderer`.
- Added top-page entry `subjects/social/quiz/?game=japan-prefecture-capital-choice` as 「県庁所在地5択」.
- Phase 1.5: added validation that the canonical prefecture codes, prefecture names and prefectural-capital labels are each unique across all 47 records.
- Added tests verifying all 47 reverse questions, exactly five unique option keys per question, the presence of the correct option, fixed option-set identity, and preservation of the authoritative prefecture/capital mapping.
- Updated registry and root-entry regression tests for the third Japan game.
- Targeted local Node tests for the new game and canonical validator passed: 4 tests, 0 failures.

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
- Do not redesign the UI.
- One prompt -> one intended answer.
- Regional world maps must be large enough for reliable clicking; do not default to one tiny world map.
- Do not recreate or use old `social-quiz/`.
- When a new playable game is published, add its top-page 「学習ゲーム」 entry in the same run without removing existing entries.
- At the end of every run, update `20_EXECUTION_PLAN.md` and fully rewrite this file with the exact next task.
