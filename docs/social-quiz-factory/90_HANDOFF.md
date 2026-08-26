# Social Quiz Factory — handoff

Current status: Phase 0 and Phase 1 are complete. Canonical implementation remains `subjects/social/quiz/`; old `social-quiz/` remains unused. The Japan map uses PA4KEV/japan-vector-map v1.0, and the shared quiz loop now includes the requested SE and time-limit rules without moving educational content into the UI layer.

Architecture status:

- `QuizEngine` owns question order, scoring, progress, shared countdown/penalty state, and clear/game-over transitions. It still has no dependency on colors, dimensions, typography, or specific question content.
- `QuizEffects` at `subjects/social/quiz/js/core/quiz-effects.js` owns optional audio playback. Audio failure/browser blocking does not alter scoring or timing.
- Renderers remain answer-mode adapters only (`svg-region`, `choice`); timer and SE logic was not duplicated into renderers or question banks.
- Default shared gameplay is 180 seconds total and -20 seconds for each wrong answer. Reaching 0 before completing all questions is game over. Answering the final question while time remains locks in a clear before the feedback-delay timer finishes.
- An explicit 「ゲーム開始」 control starts both the countdown and the start SE, avoiding browser autoplay restrictions.
- Shared SE assets are `assets/audio/quiz-start.mp3`, `quiz-correct.mp3`, and `quiz-wrong.mp3`, derived from the user-supplied クイズ出題2 / クイズ正解1 / クイズ不正解1 files.
- Japan geography facts remain under `subjects/social/quiz/js/data/`, independent of presentation.
- `JAPAN_PREFECTURE_MAP` pins `PA4KEV/japan-vector-map` commit `6be9e705045777b7c433c429b0313f19b49d1ed4`, release v1.0, `japan-prefectures.svg`, MIT License, Copyright (c) 2023 Kevin Matsubara.
- Existing canonical answer keys remain string codes `1` through `47`.
- Root `index.html` game URLs are unchanged; all three Japan drills remain discoverable under 「学習ゲーム」.

Completed this gameplay run:

- Added a start screen so the timer and start SE begin only after an explicit user action.
- Added a fourth status item for remaining time; desktop uses four columns and mobile uses a 2x2 status layout.
- Added default `timeLimitSeconds = 180` and `wrongPenaltySeconds = 20` in the shared engine, with per-game override support for future use.
- Correct answer: increments score and plays `quiz-correct.mp3`.
- Wrong answer: plays `quiz-wrong.mp3`, subtracts 20 seconds immediately, and triggers game over immediately if the remaining time reaches 0.
- Natural countdown to 0 triggers 「ゲームオーバー」 and prevents further answers.
- Final answer submitted while time remains stops the countdown immediately; the normal feedback delay may finish before the result panel appears, but the player cannot lose after completing the final answer in time.
- Result screen distinguishes 「クリア！」 from 「ゲームオーバー」 and includes remaining time or time-out status.
- Updated `quiz-engine.test.js` to cover start SE, correct/wrong SE calls, 180-second initialization, -20 penalty, natural timeout, penalty-caused timeout, final-answer boundary, answer locking, restart, and shuffle behavior.
- Targeted local Node regression checks for the timing/SE state machine passed: 5 tests, 0 failures.
- Updated README, master instructions, architecture rules, and execution plan; Phase 0.7 is recorded complete.

Next start point:

1. Read latest `main`.
2. Read every Markdown under `docs/social-quiz-factory/` in lexical order.
3. Start Phase 2.1: select and document a reusable world political-boundary dataset with a license suitable for redistribution/use in the quiz.
4. Prefer a stable open dataset whose country polygons can be converted to regional SVG views and whose identifiers can be mapped to stable country IDs.
5. Record source URL, version/date, license, attribution requirements and any known boundary caveats before importing assets.
6. Then begin Phase 2.2: define stable country IDs and Japanese display names separately from UI/layout.
7. All new playable games should inherit the shared 180-second / -20-second / SE loop unless the user explicitly requests different gameplay settings.
8. Do not begin regional country games until the dataset/ID foundation is validated.

Important constraints:

- Preserve data / core / renderer / effects / presentation separation.
- Do not redesign the UI unless explicitly requested.
- One prompt -> one intended answer.
- Regional world maps must be large enough for reliable clicking; do not default to one tiny world map.
- Do not recreate or use old `social-quiz/`.
- When a new playable game is published, add its top-page 「学習ゲーム」 entry in the same run without removing existing entries.
- At the end of every normal factory run, update `20_EXECUTION_PLAN.md` and fully rewrite this file with the exact next task.
