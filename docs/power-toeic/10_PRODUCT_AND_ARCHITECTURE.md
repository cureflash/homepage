# Power TOEIC — product and architecture

## Product loop

Power TOEIC is built around one loop:

```text
weakness/mastery data
  -> select weak micro-skills
  -> concentrated four-choice cloze drilling
  -> immediate feedback
  -> mixed/unlabeled transfer check
  -> delayed review
  -> mastery or renewed concentration
```

The app track consumes taxonomy/question data supplied by the separate content track. It does not own production question generation.

## Platform strategy

Power TOEIC is implemented in two ordered stages.

### Stage A — Web reference implementation

Use the existing repository's proven static stack:

- HTML;
- CSS;
- Vanilla JavaScript;
- ES Modules;
- Node's built-in test runner.

Canonical Web path:

`subjects/english/power-toeic/`

The Web version is completed first because it is cheap to iterate, directly publishable with the existing site, and suitable for stabilizing all domain contracts before native duplication.

### Stage B — native iOS implementation

After the Web app reaches the V1 acceptance criteria and its domain behavior is covered by tests, implement a native iOS client in **Swift + SwiftUI**.

The Swift version must mirror the same architectural responsibilities rather than mechanically translating DOM code line-by-line.

Target responsibility mapping:

```text
Web JavaScript                       iOS Swift
-------------------------------------------------------------
core/session.js                  ->  Core/QuizSession.swift
core/workout-builder.js          ->  Core/WorkoutBuilder.swift
core/mastery.js                  ->  Core/MasteryEngine.swift
core/review.js                   ->  Core/ReviewScheduler.swift
core/persistence.js              ->  Persistence/AppStore.swift
renderers/cloze-choice.js        ->  Views/Quiz/ClozeChoiceView.swift
ui/home.js                       ->  Views/Home/HomeView.swift
ui/workout-editor.js             ->  Views/Workout/WorkoutEditorView.swift
ui/result.js                     ->  Views/Result/ResultView.swift
ui/weakness.js                   ->  Views/Weakness/WeaknessView.swift
ui/character.js                  ->  Views/Character/CharacterView.swift
main.js composition              ->  PowerTOEICApp / dependency container
```

Do not attempt to share JavaScript runtime code with Swift. Share **contracts, data formats, fixtures and expected behavior**.

## Cross-platform contract

The strongest portability boundary is data + behavior contracts.

Both implementations must consume equivalent platform-neutral representations for:

- question records;
- skill IDs supplied by the content track;
- workout recipes;
- attempt records;
- mastery snapshots;
- review entries;
- character progression state;
- bad-question reports.

Production question content should be exportable as JSON or another simple documented format that both JavaScript and Swift can decode without rewriting educational data.

## Cross-platform conformance fixtures

Before the Swift port begins, freeze a small set of deterministic fixtures containing:

- sample questions;
- workout recipes;
- attempt histories;
- expected selected question IDs for seeded cases;
- expected mastery states;
- expected review dates;
- expected character progression stages.

Run equivalent fixture tests in JavaScript and Swift. This prevents the iOS version from silently developing different learning behavior.

## MVP learner format

The runtime question interface is one sentence with one blank and exactly four choices. The application does not require production taxonomy authoring to proceed; it only requires stable IDs/labels from the external content adapter or fixtures.

## Reuse-first architecture decision

Phase 0 audited `subjects/social/quiz/`. Keep its successful separation pattern:

- core domain/session logic;
- renderers/views;
- data adapters;
- presentation;
- tests.

Do not cross-import or rewrite the existing timed social `QuizEngine`. Power TOEIC needs a study-session model rather than a countdown/game-over model.

## Framework rule

For Web V1, do not introduce React, Django, GraphQL, Redis, microservices, a game engine, or runtime AI unless a concrete requirement cannot reasonably be met by the existing static ES-module deployment.

For iOS, use Apple's standard Swift/SwiftUI stack first. Prefer Foundation, SwiftUI, Codable, XCTest/Swift Testing, and native persistence mechanisms over third-party dependencies unless a concrete need exists.

## Web implementation tree

```text
subjects/english/power-toeic/
  index.html
  styles.css
  assets/
    characters/
  js/
    core/
      session.js
      workout-builder.js
      mastery.js
      review.js
      persistence.js
      progression.js
    data/
      question-bank-adapter.js
      fixtures.js
    renderers/
      cloze-choice.js
    ui/
      home.js
      workout-editor.js
      quiz-screen.js
      result.js
      weakness.js
      character.js
    main.js
  tests/
```

The app track may create only a tiny synthetic fixture bank under this tree. Production question-bank generation is external.

## iOS target tree

The exact Xcode-project location may be frozen when the Swift phase starts, but its internal target architecture must mirror the Web responsibility split:

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
    Question.swift
    WorkoutRecipe.swift
    Attempt.swift
    MasterySnapshot.swift
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
    Characters/
  Tests/
```

## Runtime boundaries

### QuestionBankRepository / adapter

The app sees production content only through a narrow interface. It must support operations such as:

- load question by ID;
- list eligible questions by skill/category;
- list learner-facing categories/skills;
- expose question version metadata for reports.

Web fixture data and later production data implement the same contract. Swift receives an equivalent repository protocol.

### Session engine

Owns ordered question IDs, current index, answer submission, correctness and attempt emission. It does not decide what the learner should study.

### Workout builder

Owns recipes/selection. Machine-generated weakness workouts and user-customized workouts use the same model.

### Mastery engine

Consumes attempts and produces deterministic per-skill state. It does not depend on UI or character assets.

### Review scheduler

Produces due review entries from deterministic rules.

### Character progression

Maps meaningful learning events to a small stage enum from skinny to increasingly muscular. It does not change answer truth, question selection, or mastery rules.

## Workout model

Every mode resolves to the same recipe/session mechanism:

- QUICK;
- TRAINING;
- POWER;
- WEAKNESS;
- CUSTOM;
- TEST;
- REVIEW.

Long sessions use 10/30/50/100 presets and bounded-chunk endless continuation.

## Question selection policy

Prefer eligible unseen questions, then least-recently-seen questions, then deliberate review items. Avoid duplicate IDs inside finite sessions.

The selector operates on IDs/metadata supplied by `QuestionBankRepository`; it does not care whether data came from fixtures, static JSON, or a future backend.

## Mixed test rule

Mixed/general tests hide micro-skill labels that would reveal the solving strategy. Mastery cannot be finalized from labeled drills alone.

## Mobile-first interaction rule

One-thumb selection and fast progression take priority over decorative art. Character presentation must never block answering.

## Persistence

Web starts with a versioned browser persistence adapter. iOS uses a native persistence implementation behind an equivalent repository/store boundary. Persistence records should stay structurally compatible where practical so future sync is possible.

## Portability rule

**Web JavaScript is the behavioral reference implementation; Swift is the native reimplementation of the same contracts.**

Before Swift development, freeze Web V1 conformance fixtures. When behavior differs, the documented contract and fixtures decide which implementation is wrong rather than platform-specific incidental code.