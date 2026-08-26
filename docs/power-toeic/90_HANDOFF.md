# Power TOEIC — handoff

## Current state

**APP TRACK Phase 8 is complete and Phase 9.1 is complete. The exact next APP TRACK task is Phase 9 / Task 9.2 — create deterministic cross-platform conformance fixtures.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored in this checkpoint.

## Phase 9.1 completed — platform-neutral model freeze

The actual Web V1 runtime shapes were inventoried from `QuizSession`, `workout-builder`, mastery/review/progression, question-report storage and the QuestionBankRepository fixture boundary.

Added:

- `docs/power-toeic/60_PLATFORM_NEUTRAL_CONTRACTS.md`;
- `subjects/english/power-toeic/js/data/platform-contracts.js`;
- `subjects/english/power-toeic/tests/platform-contracts.test.js`.

The frozen V1 JSON-compatible contracts cover:

- Skill;
- Question;
- WorkoutRecipe;
- Attempt;
- MasterySnapshot;
- ReviewEntry;
- ProgressionState and its deterministic event inputs;
- QuestionReport;
- semantic character/audio Asset IDs.

Important frozen semantics include zero-based answer indexes `0...3`, ISO date-time strings, exact enum strings for workout modes/attempt contexts/mastery states/report reasons, progression stages `0...5`, and semantic asset namespaces rather than source filenames.

The validator intentionally checks only consumer/runtime contracts. Production generation/QA metadata remains owned by the external content track and is not pulled into APP TRACK.

## Web V1 status

The reference Web application has:

- mobile-first home/navigation and a learner-facing beta entry;
- common QuizSession;
- four-choice cloze renderer and immediate feedback;
- results;
- versioned browser persistence;
- deterministic mastery and weakness ranking;
- common WorkoutRecipe/selector for QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW;
- editable workout recipes and bounded long/endless-style sessions;
- deterministic review scheduling and mixed/review mastery gates;
- Drill Sergeant / Trainee presentation and deterministic progression;
- bad-question reporting;
- end-to-end regression coverage and a synthetic 20,000-question performance regression.

## Exact next work

### Phase 9 / Task 9.2 — deterministic cross-platform conformance fixtures

Create a small JSON fixture set that Swift can consume unchanged. It must be synthetic test data only and should encode deterministic inputs plus expected outputs for at least:

1. seeded WorkoutRecipe question selection;
2. QuizSession answer attempts/results with fixed timestamps;
3. mastery state transitions from controlled attempt histories;
4. review scheduling/due selection at fixed dates;
5. progression points/stages from fixed events;
6. question report serialization where useful.

Add JavaScript tests that load the JSON fixtures and prove the current Web reference implementation produces exactly the recorded expected outputs. Do not hand-author a production TOEIC bank to populate the fixtures.

After 9.2, document Web V1 behavior as the Swift port reference in 9.3. Only after those gates pass should Phase 10 create the Swift/SwiftUI implementation.

## Verification policy

Power TOEIC tests run through `.github/workflows/power-toeic-tests.yml` on Node 22. Phase 9 contract work must pass the complete suite before merge.

## Fixed decisions

- Web = HTML/CSS/Vanilla JS/ES Modules as the behavioral reference implementation;
- Swift + SwiftUI starts only after Phase 9 conformance freeze;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
