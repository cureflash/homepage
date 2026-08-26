# Power TOEIC — handoff

## Current state

**APP TRACK Phase 9 is complete. The exact next APP TRACK task is Phase 10 / Task 10.1 — create the native Swift/SwiftUI project structure.**

The APP/UI track remains separate from production taxonomy/question generation and QA. No production question data was authored in this checkpoint.

## Phase 9.2 completed — deterministic cross-platform conformance fixture

Added:

- `subjects/english/power-toeic/tests/fixtures/cross-platform-conformance-v1.json`;
- `subjects/english/power-toeic/tests/cross-platform-conformance.test.js`.

The fixture is explicitly synthetic and contains exact deterministic inputs/outputs for:

1. seeded WorkoutRecipe question selection;
2. QuizSession attempts and results using a fixed clock;
3. mastery snapshots including `weak` and `mastered` cases;
4. review scheduling and due-question selection at fixed UTC dates;
5. progression points/stages over a fixed event sequence;
6. question-report normalization/serialization.

The JSON file contains no JavaScript-specific executable data. Swift tests must consume the same file unchanged.

GitHub Actions Power TOEIC Node 22 run `33011796826` completed successfully after the fixture/test addition.

## Phase 9.3 completed — Swift port behavior reference

Added:

`docs/power-toeic/70_SWIFT_PORT_REFERENCE.md`

It freezes the Web V1 behaviors Swift must reproduce, including:

- QuestionBankRepository boundary;
- WorkoutRecipe validation and common-engine rule;
- exact deterministic selection ordering semantics;
- QuizSession attempt/result semantics;
- mastery thresholds and state gates;
- review intervals and interval advancement;
- progression thresholds/point weights;
- question-report reasons and normalization;
- semantic AssetCatalog boundary;
- persistence failure behavior;
- SwiftUI view responsibility boundaries.

When Web and Swift differ, the platform-neutral contracts plus the shared conformance fixture are authoritative unless a deliberate canonical behavior change updates both implementations.

## Web V1 reference status

Web remains complete through Phase 8 and is the behavioral reference implementation. It includes mobile-first navigation, common QuizSession, four-choice cloze feedback, results, versioned browser persistence, mastery/weakness, workout recipes/editor, review, character progression, bad-question reports, performance regression, and beta entry point.

## Exact next work

### Phase 10 / Task 10.1 — native Swift/SwiftUI project structure

Create the native iOS source/test structure without rewriting Web code and without adding production question content. Preserve these responsibility boundaries:

```text
PowerTOEIC/
  App/
  Core/
    QuizSession.swift
    WorkoutBuilder.swift
    MasteryEngine.swift
    ReviewScheduler.swift
    ProgressionEngine.swift
  Models/
  Data/
    QuestionBankRepository.swift
  Persistence/
  Views/
    Home/
    Quiz/
    Workout/
    Result/
    Weakness/
    Character/
  Resources/
  Tests/
```

Task 10.1 acceptance should establish a buildable/testable native project or package structure suitable for later SwiftUI app wiring. Task 10.2 then adds Codable versions of the frozen platform-neutral models and the QuestionBankRepository protocol.

Do not mechanically translate DOM modules. Keep Web and Swift separate implementations connected by contracts/fixtures.

## Fixed decisions

- Web = HTML/CSS/Vanilla JS/ES Modules and remains the behavioral reference;
- native = Swift + SwiftUI + standard Apple frameworks first;
- no target-score feature, skill-to-body-part mapping, runtime LLM, or production question creation in APP TRACK;
- temporary art = Irasutoya via semantic IDs, below 20 unique works;
- audio = existing Google Drive OtoLogic SE with CC BY 4.0 attribution preserved;
- cross-platform fixture = `tests/fixtures/cross-platform-conformance-v1.json`.
