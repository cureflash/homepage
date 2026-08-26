# Power TOEIC — execution plan

The `Power TOEIC 開発` scheduled task owns **APP TRACK only**. Content/database tasks are explicitly external and must not block app implementation.

Work from the first unchecked APP TRACK task. Check an item only when acceptance criteria are satisfied and relevant tests pass.

## Phase 0 — reuse audit and architecture freeze — APP TRACK

- [x] **0.1 Audit existing quiz foundation**
- [x] **0.2 Freeze implementation path and shared-code boundary**
- [x] **0.3 Add baseline regression coverage for reusable quiz contracts**

Canonical Web path: `subjects/english/power-toeic/`.

## Phase 1 — production taxonomy/question database — EXTERNAL CONTENT TRACK

These tasks are not owned by the app-development scheduler:

- [ ] **1.1 Define Part 5 taxonomy V1 — EXTERNAL**
- [ ] **1.2 Define/produce production question schema/content validation — EXTERNAL**
- [ ] **1.3 Create and scale Gold/production question bank — EXTERNAL**

The app track may define only the consumer-facing adapter contract and tiny synthetic fixtures required to test program behavior.

## Phase 2 — Web common quiz-session MVP — APP TRACK

- [ ] **2.0 Create Web app skeleton and question-bank adapter**
  - Create `subjects/english/power-toeic/` with mobile-first static HTML/CSS/ES-module structure.
  - Define the minimum `QuestionBankRepository`/adapter interface consumed by runtime code.
  - Add a tiny clearly synthetic fixture bank for tests/demo only.
  - Do not author production TOEIC database content.
  - Acceptance: app imports fixture questions only through the adapter and basic smoke tests pass.

- [ ] **2.1 Implement common four-choice study session core**
  - Immutable started-session question list.
  - Current index/state.
  - Answer submission and correctness.
  - Attempt events containing question ID/version, skill ID, answer, correctness and response duration where available.
  - No mandatory countdown/game-over semantics.
  - Acceptance: deterministic Node tests.

- [ ] **2.2 Implement cloze-choice renderer and quiz screen**
  - Sentence with one blank plus exactly four tappable options.
  - Immediate correct/wrong visual state and concise explanation.
  - Mobile-first one-thumb interaction.
  - Acceptance: renderer/DOM contract tests and usable static page.

- [ ] **2.3 Implement basic result screen**
  - Questions answered, correct count, accuracy and skill breakdown.
  - No target-score prediction.
  - Acceptance: result data derives only from session attempts.

## Phase 3 — Web persistence, mastery and weakness — APP TRACK

- [ ] **3.1 Implement versioned browser persistence**
  - Attempts, review data and character progression.
  - Fail safely on invalid/old data.

- [ ] **3.2 Implement deterministic mastery engine**
  - Configurable, explainable state transitions.
  - Must support mixed/review evidence later.

- [ ] **3.3 Implement weakness ranking**
  - Mechanically rank weak skill IDs supplied by the content adapter.

## Phase 4 — Web workout system — APP TRACK

- [ ] **4.1 Implement platform-neutral workout recipe model**
- [ ] **4.2 Implement deterministic question selector through QuestionBankRepository**
- [ ] **4.3 Implement QUICK / TRAINING / POWER / TEST / REVIEW presets through recipes**
- [ ] **4.4 Implement weakness-generated workout recipes**
- [ ] **4.5 Implement user-editable workout editor**
- [ ] **4.6 Implement 10 / 30 / 50 / 100 and bounded-chunk endless sessions**

No mode gets a separate quiz engine.

## Phase 5 — Web review and transfer — APP TRACK

- [ ] **5.1 Implement mixed/unlabeled test presentation**
- [ ] **5.2 Implement deterministic review scheduler**
- [ ] **5.3 Gate mastery on mixed/review evidence**

## Phase 6 — Web character UX — APP TRACK

- [ ] **6.1 Define stable Drill Sergeant / Trainee asset contract**
- [ ] **6.2 Implement Sergeant-presents / Trainee-answers quiz composition**
- [ ] **6.3 Implement deterministic Trainee progression from skinny to muscular**

Character code remains removable presentation and never owns educational logic.

## Phase 7 — production question factory/database — EXTERNAL CONTENT TRACK

Not owned by the app-development scheduler:

- [ ] **7.1 Candidate-generation specifications — EXTERNAL**
- [ ] **7.2 Automatic production QA pipeline — EXTERNAL**
- [ ] **7.3 Scale production bank — EXTERNAL**

The following integration item remains APP TRACK:

- [ ] **7.4 Implement bad-question reporting UI and report storage contract — APP TRACK**
  - Identify exact question ID/version.
  - Support reasons such as ambiguity, unnatural English, wrong answer/explanation and other.
  - Production moderation pipeline remains external.

## Phase 8 — Web V1 integration — APP TRACK

- [ ] **8.1 Mobile-first home/navigation**
  - Weakness workout, quick drill, category training, custom workout, review, mixed test.

- [ ] **8.2 End-to-end Web regression suite**
  - fixture bank -> recipe -> selection -> session -> attempts -> mastery -> review -> progression.

- [ ] **8.3 Performance/large-bank adapter check**
  - Test against generated synthetic scale fixtures rather than authoring production questions.

- [ ] **8.4 Publish Web beta entry point**

## Phase 9 — freeze cross-platform behavior — APP TRACK

Complete this before native iOS implementation.

- [ ] **9.1 Freeze platform-neutral models**
  - Question consumer model, WorkoutRecipe, Attempt, MasterySnapshot, ReviewEntry, ProgressionState, QuestionReport.

- [ ] **9.2 Create deterministic cross-platform conformance fixtures**
  - Expected session transitions, selection results for seeded cases, mastery states, review dates and character stages.

- [ ] **9.3 Document Web V1 behavior as Swift port reference**
  - No DOM-specific behavior should be part of the domain contract.

## Phase 10 — native iOS Swift/SwiftUI port — APP TRACK

- [ ] **10.1 Create native Swift/SwiftUI project structure**
  - `App / Core / Models / Data / Persistence / Views / Resources / Tests`.
  - Use standard Apple frameworks first.

- [ ] **10.2 Implement Codable platform-neutral models and QuestionBankRepository protocol**
  - Decode the same production-export format/fixtures as Web where practical.

- [ ] **10.3 Port QuizSession and WorkoutBuilder behavior**
  - Match cross-platform fixtures.

- [ ] **10.4 Port mastery, weakness and review engines**
  - Match Web expected outputs for identical fixtures.

- [ ] **10.5 Build SwiftUI home/workout/quiz/result/weakness screens**
  - Preserve the same product flow, not the exact Web layout pixels.

- [ ] **10.6 Port Drill Sergeant / Trainee character UX and progression**

- [ ] **10.7 Implement native persistence**
  - Hide storage behind an equivalent repository/store boundary.

- [ ] **10.8 Run JavaScript/Swift conformance suite**
  - Equivalent fixtures must produce equivalent domain results.

## Phase 11 — iOS release preparation — APP TRACK

- [ ] **11.1 App lifecycle, offline behavior and accessibility pass**
- [ ] **11.2 App Store assets/metadata/privacy requirements**
- [ ] **11.3 TestFlight build and release regression**
- [ ] **11.4 App Store submission readiness checkpoint**

## Deferred / only when required

- account login and cross-device sync;
- server-side analytics/persistence;
- payments;
- Part 2/6/7/listening expansion;
- advanced item-response statistics;
- third-party UI/game frameworks;
- more character skins/animation.
