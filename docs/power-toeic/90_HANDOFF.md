# Power TOEIC — handoff

## Current state

**APP TRACK Phase 10 / Tasks 10.3 and 10.4 are complete. The exact next APP TRACK task is Phase 10 / Task 10.5 — build the SwiftUI Home / Workout / Quiz / Result / Weakness screens.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored or validated in this checkpoint.

## Phase 10.3 completed — native QuizSession and WorkoutBuilder

Added:

- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Core/QuizSession.swift`
- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Core/WorkoutBuilder.swift`
- `subjects/english/power-toeic-ios/Tests/PowerTOEICTests/QuizSessionWorkoutBuilderTests.swift`

The native session engine now preserves the frozen Web behavior:

- immutable started-session question ordering;
- one answer per current question;
- advancing before answering is invalid;
- zero-based answer indexes;
- injected clock for deterministic response timing;
- exact `Attempt` fields, ISO-8601 timestamps and per-skill result aggregation;
- all modes continue to feed the same session engine.

The native workout builder now preserves:

- recipe validation;
- explicit counts and deterministic weighted allocations;
- unseen-first selection;
- least-recently-seen fallback;
- Web-compatible 32-bit FNV-style seeded tie breaking using UTF-16 code units;
- no duplicate question IDs in a finite selected list;
- `review_due` restriction to supplied due-review IDs;
- QUICK / TRAINING / POWER / TEST / REVIEW presets and weakness recipes.

The Swift tests consume the canonical Web fixture directly and match its exact expected selected IDs, attempts and results. No Swift-specific translated fixture was created.

## Phase 10.4 completed — mastery, weakness and review

Added:

- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Core/MasteryEngine.swift`
- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Core/WeaknessRanker.swift`
- `subjects/english/power-toeic-ios/Sources/PowerTOEIC/Core/ReviewScheduler.swift`
- `subjects/english/power-toeic-ios/Tests/PowerTOEICTests/MasteryReviewTests.swift`

`MasteryEngine` matches the frozen Web V1 gates:

- minimum attempts 4;
- recent window 8;
- weak threshold 0.60;
- mixed evidence 3 attempts at 0.80;
- review evidence 2 attempts at 0.80;
- states `unknown / training / weak / mixed_pass / reviewing / mastered`;
- training-only evidence can never directly produce `mastered`.

`WeaknessRanker` mirrors the Web recent/overall error weighting (`0.7 / 0.3`) plus the `weak` state bonus (`0.15`) and deterministic tie ordering.

`ReviewScheduler` mirrors the Web intervals `[1, 3, 7, 14]`, resets non-successful/non-review paths to the first interval, advances successful review attempts by one interval, caps at the final interval, and orders due entries by due time then question ID.

## Tests / CI

The Swift package was built with Apple Swift 6.3.3 on the macOS runner. The full native suite executed **10 tests with 0 failures**, including exact cross-platform fixture conformance for:

- deterministic question selection;
- QuizSession attempts/results;
- mastery snapshots;
- review scheduling;
- Codable platform models;
- structure smoke coverage.

PR: `#94 feat: port Power TOEIC Swift domain core`.

## Exact next work

### Phase 10 / Task 10.5 — SwiftUI screens

Build the native SwiftUI presentation layer under the existing `Views/` boundaries:

1. `Home` — routes into quick, training, power, weakness, custom, test and review flows using recipes rather than separate engines;
2. `Workout` — edits counts/allocations, not fixed question IDs;
3. `Quiz` — renders the current cloze sentence plus four tappable options and forwards answer intent to `QuizSession`;
4. `Result` — derives displayed totals/accuracy/skill breakdown from session results;
5. `Weakness` — presents `MasteryEngine` / `WeaknessRanker` output and can launch an editable weakness recipe.

Use only synthetic/test repository data for native UI wiring until the production content adapter is ready. Do not author production TOEIC questions in this track.

Important boundaries for 10.5:

- Views must not calculate correctness, mastery transitions, review dates or question selection;
- TEST presentation must hide the underlying micro-skill label;
- the four answer choices must remain the primary one-thumb interaction;
- character composition/progression belongs to 10.6, so do not mix character business logic into 10.5;
- persistence belongs to 10.7;
- no third-party UI framework is required.

After 10.5, proceed to 10.6 character UX/progression, then 10.7 native persistence, then 10.8 full JavaScript/Swift conformance.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- JavaScript code is not embedded or mechanically translated line-by-line into Swift;
- shared contracts/fixtures determine cross-platform behavior;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic asset IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
