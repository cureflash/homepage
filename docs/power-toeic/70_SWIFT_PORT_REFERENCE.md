# Power TOEIC — Web V1 behavior reference for Swift port

This document freezes the Web V1 APP TRACK behavior that the native Swift/SwiftUI implementation must reproduce. JavaScript is the current reference implementation; Swift should mirror responsibilities and externally observable behavior, not DOM code.

The canonical cross-platform fixture is:

`subjects/english/power-toeic/tests/fixtures/cross-platform-conformance-v1.json`

It is synthetic test data only. Both JavaScript and Swift tests must consume the same JSON fixture and produce the same expected outputs.

## 1. Question repository boundary

Web: `js/data/question-bank-adapter.js`

Swift target: `QuestionBankRepository` protocol.

Required behavior:

- retrieve a question by stable ID;
- list questions, optionally filtered by skill/category;
- list learner-facing skills;
- preserve question `version` so attempts/reports identify the exact content revision;
- runtime logic does not know whether content comes from fixtures, static JSON, or a future service.

Production question generation and QA are outside APP TRACK.

## 2. WorkoutRecipe

Web: `js/core/workout-builder.js`

Frozen modes:

`QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW`

Frozen fields:

- `mode`;
- `totalCount` positive integer;
- `skillAllocations`, each with exactly one of positive `count` or positive `weight`;
- `selectionPolicy`: `standard` or `review_due`;
- `labelPolicy`: `show_skill` or `hide_skill`;
- non-negative integer `seed`;
- boolean `endless`.

`TEST` requires `hide_skill`. `REVIEW` requires `review_due`.

All modes feed the same session engine. Swift must not create mode-specific quiz engines.

## 3. Deterministic question selection

Web: `selectQuestionIds()` in `js/core/workout-builder.js`.

Selection semantics:

1. validate the recipe;
2. resolve explicit counts and weighted allocations deterministically;
3. within each eligible pool, prefer unseen questions;
4. among seen questions, prefer least recently seen;
5. break remaining ties using the deterministic FNV-style `hashSeed(seed, questionId)` ordering used by the Web implementation;
6. never duplicate a question ID inside one finite selected list;
7. after requested skill allocations, fill remaining capacity from the general eligible bank;
8. `review_due` selects only IDs supplied as due-review IDs.

The exact seeded result is pinned by the shared conformance fixture. Swift must reproduce the fixture output exactly; use a compatible 32-bit unsigned integer implementation for the hash ordering.

## 4. QuizSession

Web: `js/core/session.js`.

Constructor inputs:

- non-empty immutable ordered `questionIds`;
- `QuestionBankRepository`;
- clock dependency;
- context: `training`, `mixed`, or `review`.

Per answer, emit one immutable Attempt with:

- `questionId`;
- `questionVersion`;
- `skillId`;
- zero-based `selectedIndex`;
- zero-based `correctIndex`;
- `correct`;
- non-negative `responseMs`;
- ISO-8601 `answeredAt`;
- session `context`.

A question may be answered once. Advancing before answering is invalid. Session results are derived only from recorded attempts and contain answered count, correct count, numeric accuracy, and per-skill answered/correct totals.

## 5. Mastery

Web: `js/core/mastery.js`.

Frozen states:

`unknown / training / weak / mixed_pass / reviewing / mastered`

V1 defaults:

- minimum attempts: 4;
- recent window: 8;
- weak recent-accuracy threshold: 0.60;
- mixed minimum attempts: 3;
- mixed accuracy threshold: 0.80;
- review minimum attempts: 2;
- review accuracy threshold: 0.80.

Transition interpretation:

- zero evidence -> `unknown`;
- below minimum attempts -> `training`;
- enough attempts but recent accuracy below weak threshold -> `weak`;
- otherwise insufficient/failed mixed evidence -> `training`;
- mixed evidence passes and no review evidence exists -> `mixed_pass`;
- review evidence exists but is insufficient/failing -> `reviewing`;
- mixed and review gates both pass -> `mastered`.

Single-skill training alone never produces `mastered`.

## 6. Review scheduling

Web: `js/core/review.js`.

Default intervals in days:

`[1, 3, 7, 14]`

A normal attempt or failed/non-review path schedules interval index 0. A correct attempt in `review` context advances one interval from the previous entry, capped at the final interval. Due entries are scheduled entries whose `dueAt <= now`, ordered by due time then question ID.

Swift must use the same absolute-time semantics for the fixture; fixture dates are UTC ISO-8601 values.

## 7. Trainee progression

Web: `js/core/progression.js`.

Stage thresholds:

`[0, 20, 60, 140, 280, 500]` -> stages `0...5`.

Default points:

- first correct answer: +2;
- correct mixed answer bonus: +2;
- correct review answer bonus: +3;
- newly mastered skill: +10;
- completed session with at least 10 questions: +5.

A single attempt can combine first-correct with mixed/review bonus. Wrong answers earn zero. Progression is presentation motivation only and never alters correctness, question selection, or mastery.

## 8. Question reports

Web: `js/core/question-reports.js`.

Frozen reasons:

`ambiguous / unnatural_english / wrong_answer / wrong_explanation / other`

A report contains stable report ID, question ID, positive integer question version, reason, trimmed detail, and ISO-8601 creation time. Report storage failure must not block the quiz.

## 9. Semantic assets

Web: presentation-layer AssetCatalog.

Swift target: `AssetCatalog.swift` or equivalent presentation-only mapping.

Domain code refers to semantic IDs such as:

- `sergeant.neutral`;
- `sergeant.correct`;
- `trainee.stage_0.neutral` ... `trainee.stage_5.neutral`;
- `audio.correct`;
- `audio.wrong`;
- `audio.inspiration`.

Temporary Irasutoya/OtoLogic filenames and licensing metadata stay outside domain logic. Missing image/audio must degrade gracefully and never block answering.

## 10. Persistence boundary

Web persists a versioned root with attempts, review entries, and progression. Swift should implement native persistence behind an equivalent store/repository boundary. Corrupt or unsupported persisted state must fail safely rather than making the app unusable.

Exact storage technology is platform-specific and is not part of the cross-platform domain contract.

## 11. View responsibilities

SwiftUI views should mirror Web responsibility boundaries:

- Home: choose/recommend a workout route;
- Workout editor: edit recipe allocations/counts, not fixed question IDs;
- Quiz: render current question and forward answer intent;
- Result: derive display from session attempts/results;
- Weakness: present deterministic weakness/mastery output;
- Character: render Sergeant/Trainee state from presentation events/progression;
- AssetCatalog: resolve semantic IDs to bundled resources.

Views must not calculate answer truth, mastery transitions, review dates, or question selection.

## 12. Conformance rule

When JavaScript and Swift differ:

1. consult the frozen platform-neutral contracts;
2. run the shared `cross-platform-conformance-v1.json` cases;
3. treat the fixture expected output as authoritative for V1 unless the canonical docs are deliberately revised;
4. update both implementations and the fixture together only through an explicit behavior-change checkpoint.

Phase 10 may begin only after this document and the conformance fixture are merged with the full Power TOEIC test suite passing.
