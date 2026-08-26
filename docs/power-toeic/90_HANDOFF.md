# Power TOEIC — handoff

## Current state

**Phase 5 is complete. The exact next APP TRACK task is Phase 6 / Task 6.1 — stable Drill Sergeant / Trainee asset contract.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored.

## Phase 5 completed

### 5.1 mixed/unlabeled presentation — PR #73

Added `js/ui/question-presentation.js`. Presentation now derives the learner-facing context from the existing `WorkoutRecipe.labelPolicy`:

- labeled training may show the learner-facing skill label;
- TEST/mixed mode displays only the mixed-test mode context;
- raw micro-skill IDs are never used as a fallback in hidden-label mode;
- the underlying question/session data is unchanged and not duplicated.

Focused presentation tests cover labeled and hidden-label behavior.

### 5.2 deterministic review scheduling — PR #74

Added `js/core/review.js` with deterministic review intervals `[1, 3, 7, 14]` days.

- ordinary attempts schedule next-day review;
- successful review advances the interval;
- failed review resets to next-day;
- one scheduled entry is kept per question;
- due queries are deterministic at ISO date-time boundaries.

Focused review tests: 4 passed.

### 5.3 mastery transfer/review gate — PR #75

`QuizSession` now emits `answeredAt` and a constrained attempt context: `training`, `mixed`, or `review`. TEST maps to `mixed`, REVIEW maps to `review`, and ordinary drills map to `training`.

Mastery states are now:

`unknown -> training/weak -> mixed_pass -> reviewing -> mastered`

The deterministic gate requires enough successful mixed evidence and later review evidence before `mastered`. Labeled/training-only success cannot produce mastery. Poor recent performance can return a skill to `weak` even if older transfer evidence exists.

Focused smoke checks confirmed training-only, mixed-pass, reviewing, mastered, and regression-to-weak transitions, plus session context/timestamp emission.

## Existing Web foundation

The reference implementation now includes question repository adapters, QuizSession, mobile cloze UI/results, versioned persistence, mastery/weakness, WorkoutRecipe/selector/presets, weakness recommendations, workout editor, 10/30/50/100 and bounded endless planning, mixed presentation, review scheduling, and transfer-gated mastery.

## Exact next work

### Phase 6 / Task 6.1

Inspect the existing semantic `js/ui/asset-catalog.js` against `40_UI_AND_CHARACTER_SPEC.md` and `50_ASSET_POLICY.md`.

Acceptance focus:

1. stable semantic IDs for Sergeant neutral/correct/wrong/complete and Trainee stages 0–5;
2. reaction states may alias neutral assets to stay below the temporary Irasutoya asset limit;
3. missing optional reaction assets fall back to stage neutral / text without blocking quiz;
4. source-specific filenames stay isolated in the asset catalog/manifest;
5. the same semantic contract can later map to Swift `AssetCatalog`.

Then 6.2 composes Sergeant-presenter and Trainee-answerer UI without moving educational logic into character code. 6.3 adds deterministic progression points/stages.

## Fixed decisions

- Web = HTML/CSS/Vanilla JS/ES Modules until V1 freeze;
- Swift + SwiftUI only after Phase 9 conformance freeze;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
