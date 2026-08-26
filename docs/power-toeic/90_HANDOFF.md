# Power TOEIC — handoff

## Current state

**APP TRACK Phase 8.1–8.3 is complete. The exact next APP TRACK task is Phase 8 / Task 8.4 — publish the Web beta entry point.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored in this checkpoint.

## Phase 8 integration completed

### 8.1 mobile-first home/navigation

The Web app now boots to a real learner home instead of the fixture workout editor. QUICK / WEAKNESS / TRAINING / POWER / REVIEW / TEST / CUSTOM all feed the established WorkoutRecipe -> common QuizSession path. TRAINING/POWER expose a skill picker, while home reflects progression and due-review state.

### 8.2 end-to-end regression

Added `tests/e2e-web-flow.test.js`, which fixes the core Web-domain flow as one deterministic regression:

`WorkoutRecipe -> QuestionBankRepository selection -> QuizSession -> attempts -> review scheduling -> progression -> versioned persistence -> results`

Added `.github/workflows/power-toeic-tests.yml` so Power TOEIC changes run the complete Node 22 suite on PRs and main pushes.

The first complete CI run was valuable: the new tests themselves passed, but the full suite exposed a pre-existing Phase 6 progression regression. `deriveProgressionStage` accepted an optional threshold array; passing it directly to `Array.map` caused the map index to be interpreted as that second argument. The implementation now falls back to canonical thresholds unless the second argument is actually an array, preserving its explicit customization contract while making ordinary callback use safe.

### 8.3 synthetic large-bank check

Added `tests/large-bank.test.js`. It creates a synthetic-only 20,000-question in-memory bank and selects a deterministic 100-question workout with no duplicate IDs. On GitHub Actions the test completed in roughly 57 ms, well below its conservative 2-second regression ceiling. This is performance test data only and is not production TOEIC content.

## Verification

Power TOEIC GitHub Actions run `33001533361` completed successfully after the progression fix. The complete Node suite is now the merge gate for this track.

## Exact next work

### Phase 8 / Task 8.4 — publish Web beta entry point

Expose `subjects/english/power-toeic/` from the appropriate learner-facing site navigation without changing the application architecture or production question DB. Keep the beta clearly scoped while the external content track is still scaling/validating real questions. Do not turn synthetic fixtures into learner-facing production content merely to make the link look populated.

Before publishing, inspect the existing English/subject navigation and choose the smallest consistent entry-point change. Preserve current site routing conventions and run the Power TOEIC suite after the change.

After 8.4, Phase 9 begins:

1. freeze platform-neutral models;
2. create deterministic cross-platform conformance fixtures;
3. document Web V1 behavior as the Swift port reference.

Only after that freeze should Phase 10 create the native Swift/SwiftUI implementation.

## Fixed decisions

- Web = HTML/CSS/Vanilla JS/ES Modules until V1 freeze;
- Swift + SwiftUI starts only after Phase 9 conformance freeze;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
