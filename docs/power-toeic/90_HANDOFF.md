# Power TOEIC — handoff

## Current state

**Phase 6 is complete, APP TRACK 7.4 bad-question reporting is implemented, and the exact next APP TRACK task is Phase 8 / Task 8.1 — mobile-first home/navigation.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored.

## Reconciled concurrent Phase 6 work

PRs #77–#79 were already merged into `main` before this run and were reconciled rather than duplicated.

### 6.1 semantic character asset contract — PR #77

`js/ui/asset-catalog.js` now owns stable semantic Sergeant reaction IDs and Trainee stage 0–5 IDs. Sparse temporary Irasutoya reaction art may alias neutral assets. Missing reaction/stage assets fall back safely and never block quiz operation.

### 6.2 Sergeant/Trainee quiz composition — PR #78

`js/ui/character-presenter.js` renders Sergeant and Trainee as removable presentation. Image failures fall back to text. Correct/wrong/complete reactions are driven by session/UI events and own no answer, mastery, workout, or persistence logic.

### 6.3 deterministic progression — PR #79

`js/core/progression.js` defines deterministic POWER points and stage thresholds. First correct answers, mixed/review success, mastery milestones, and substantial session completion can earn points; wrong answers and repeated ordinary labeled answers do not become the optimal progression path. Persisted progression only drives character presentation.

## 7.4 bad-question reporting

Added:

- `js/core/question-reports.js` — platform-neutral local report model/storage contract;
- `js/ui/question-report.js` — learner report panel;
- quiz-level `問題を報告` action;
- focused Node tests for exact question ID/version capture, reason validation, append behavior, and corrupted-storage fail-safe.

Supported reasons:

- `ambiguous`;
- `unnatural_english`;
- `wrong_answer`;
- `wrong_explanation`;
- `other`.

Each report stores exact `questionId`, `questionVersion`, reason, optional detail, and timestamp. Report storage uses a separate `power-toeic.question-reports.v1` browser key so adding reporting does not mutate or migrate the established learning-state root. Storage failure is intentionally non-fatal to quiz progression.

## Existing Web foundation

The reference Web implementation now includes:

- QuestionBankRepository adapter and synthetic fixture bank;
- common QuizSession;
- mobile cloze UI/results;
- versioned learning persistence;
- mastery/weakness;
- WorkoutRecipe/selector/presets/editor;
- bounded endless planning;
- mixed presentation and review scheduling;
- transfer/review mastery gate;
- semantic character assets and Sergeant/Trainee composition;
- deterministic Trainee POWER progression;
- bad-question reporting.

## Exact next work

### Phase 8 / Task 8.1 — mobile-first home/navigation

Build a real learner entry screen rather than booting directly into the fixture workout editor.

Required entry points:

1. recommended weakness workout;
2. quick drill;
3. choose category/training;
4. custom workout;
5. due review;
6. mixed/general test.

The current Trainee stage may be shown as a motivation element. Do not add target-score input. Keep internal micro-skills behind broader learner-facing navigation and feed every path into the existing WorkoutRecipe/session engine rather than adding alternate quiz engines.

After 8.1, continue to end-to-end Web regression, synthetic large-bank adapter performance, and beta entry-point publishing.

## Fixed decisions

- Web = HTML/CSS/Vanilla JS/ES Modules until V1 freeze;
- Swift + SwiftUI starts only after Phase 9 conformance freeze;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
