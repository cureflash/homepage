# Power TOEIC native source layout

This Swift package is the native iOS implementation boundary for Power TOEIC.

Keep these responsibilities separated as development proceeds:

- `App/` — SwiftUI app composition/dependency injection only.
- `Core/` — QuizSession, WorkoutBuilder, MasteryEngine, ReviewScheduler, ProgressionEngine.
- `Models/` — Codable platform-neutral value models.
- `Data/` — QuestionBankRepository protocol and data adapters.
- `Persistence/` — native persisted-state adapter.
- `Views/Home/` — home/navigation presentation.
- `Views/Quiz/` — cloze question and answer presentation.
- `Views/Workout/` — workout selection/editor presentation.
- `Views/Result/` — session results presentation.
- `Views/Weakness/` — weakness/mastery presentation.
- `Views/Character/` — Drill Sergeant/Trainee presentation only.
- `Resources/` — bundled native assets and required attribution metadata.

The Web implementation remains the V1 behavioral reference. Native domain behavior must conform to `docs/power-toeic/70_SWIFT_PORT_REFERENCE.md` and the shared JSON conformance fixture.

Do not place production question generation/QA in this package.
