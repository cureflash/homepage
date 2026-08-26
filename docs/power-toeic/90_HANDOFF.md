# Power TOEIC — handoff

## Current state

**APP TRACK Phase 10 has started. Tasks 10.1 and 10.2 are complete. The exact next APP TRACK task is Phase 10 / Task 10.3 — port QuizSession and WorkoutBuilder behavior.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored in this checkpoint.

## Phase 9 cross-platform freeze

Phase 9 is complete. Canonical references are:

- `docs/power-toeic/60_PLATFORM_NEUTRAL_CONTRACTS.md`;
- `docs/power-toeic/70_SWIFT_PORT_REFERENCE.md`;
- `subjects/english/power-toeic/tests/fixtures/cross-platform-conformance-v1.json`.

The shared fixture pins seeded selection, QuizSession attempts/results, mastery, review scheduling, progression and question-report behavior.

## Phase 10.1 completed — native Swift/SwiftUI structure

Created:

`subjects/english/power-toeic-ios/`

as a Swift Package with iOS 17 / macOS 14 platform declarations. The source tree has explicit boundaries for:

- App composition;
- Core domain engines;
- Models;
- Data/QuestionBankRepository;
- Persistence;
- Home/Quiz/Workout/Result/Weakness/Character SwiftUI views;
- Resources.

A minimal `PowerTOEICAppRoot` proves SwiftUI compilation without prematurely implementing UI behavior.

Added dedicated CI:

`.github/workflows/power-toeic-swift-tests.yml`

The initial macOS Swift 6.3.3 run built the package and passed the structure smoke test. SwiftPM documentation-file warnings were then removed by explicitly excluding the architecture README files from the target.

## Phase 10.2 completed — Codable models and repository protocol

Added `Models/PlatformModels.swift` with Swift `Codable + Equatable + Sendable` forms for the frozen platform-neutral records/enums:

- Skill;
- Question;
- WorkoutRecipe / SkillAllocation;
- Attempt;
- MasterySnapshot / EvidenceSummary;
- ReviewEntry;
- ProgressionState;
- QuestionReport;
- SemanticAssetID;
- PersistenceEnvelope.

Enum raw values preserve the exact JSON spellings, including `TEST`, `review_due`, `hide_skill`, `mixed_pass`, and `wrong_explanation`.

Added `Data/QuestionBankRepository.swift` as the native content-consumer protocol.

`PlatformModelsTests.swift` locates the canonical Web fixture in the adjacent `power-toeic/tests/fixtures/` tree and decodes it directly. There is no copied/translated Swift-specific fixture.

## Exact next work

### Phase 10 / Task 10.3 — QuizSession and WorkoutBuilder

Port the Web reference behavior, not syntax. Required conformance includes:

1. immutable started-session question ordering;
2. one answer per current question;
3. zero-based answer indexes;
4. deterministic response timing/ISO timestamp emission via injected clock;
5. exact per-attempt and result semantics;
6. WorkoutRecipe validation;
7. unseen-first then least-recently-seen selection;
8. exact seeded tie-break ordering compatible with Web's 32-bit FNV-style hash;
9. no duplicate question IDs in finite sessions;
10. review_due selection constrained to due IDs.

Extend Swift tests to consume the existing selection/session cases from `cross-platform-conformance-v1.json` and require exact equality with expected outputs.

After 10.3, proceed to mastery/weakness/review engines in 10.4.

## Fixed decisions

- Web remains the behavioral reference implementation;
- native uses Swift + SwiftUI + standard Apple frameworks first;
- JavaScript code is not embedded or line-by-line translated into Swift;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved.
