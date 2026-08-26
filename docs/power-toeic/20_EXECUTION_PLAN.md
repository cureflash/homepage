# Power TOEIC — execution plan

The `Power TOEIC 開発` scheduled task owns **APP TRACK only**. Content/database tasks are explicitly external and must not block app implementation.

Work from the first unchecked APP TRACK task. Check an item only when acceptance criteria are satisfied and relevant tests pass.

## Phase 0 — reuse audit and architecture freeze — APP TRACK
- [x] **0.1 Audit existing quiz foundation**
- [x] **0.2 Freeze implementation path and shared-code boundary**
- [x] **0.3 Add baseline regression coverage for reusable quiz contracts**
Canonical Web path: `subjects/english/power-toeic/`.

## Phase 1 — production taxonomy/question database — EXTERNAL CONTENT TRACK
- [ ] **1.1 Define Part 5 taxonomy V1 — EXTERNAL**
- [ ] **1.2 Define/produce production question schema/content validation — EXTERNAL**
- [ ] **1.3 Create and scale Gold/production question bank — EXTERNAL**
The app track may define only the consumer-facing adapter contract and tiny synthetic fixtures required to test program behavior.

## Phase 2 — Web common quiz-session MVP — APP TRACK
- [x] **2.0 Create Web app skeleton and question-bank adapter**
- [x] **2.1 Implement common four-choice study session core**
- [x] **2.2 Implement cloze-choice renderer and quiz screen**
- [x] **2.3 Implement basic result screen**
Phase 2 verification: 9 Node tests passed across adapter/session/renderer contracts.

## Phase 3 — Web persistence, mastery and weakness — APP TRACK
- [x] **3.1 Implement versioned browser persistence**
- [x] **3.2 Implement deterministic mastery engine**
- [x] **3.3 Implement weakness ranking**

## Phase 4 — Web workout system — APP TRACK
- [x] **4.1 Implement platform-neutral workout recipe model**
- [x] **4.2 Implement deterministic question selector through QuestionBankRepository**
- [x] **4.3 Implement QUICK / TRAINING / POWER / TEST / REVIEW presets through recipes**
- [x] **4.4 Implement weakness-generated workout recipes**
- [x] **4.5 Implement user-editable workout editor**
- [x] **4.6 Implement 10 / 30 / 50 / 100 and bounded-chunk endless sessions**

## Phase 5 — Web review and transfer — APP TRACK
- [x] **5.1 Implement mixed/unlabeled test presentation**
- [x] **5.2 Implement deterministic review scheduler**
- [x] **5.3 Gate mastery on mixed/review evidence**

## Phase 6 — Web character UX — APP TRACK
- [x] **6.1 Define stable Drill Sergeant / Trainee asset contract**
- [x] **6.2 Implement Sergeant-presents / Trainee-answers quiz composition**
- [x] **6.3 Implement deterministic Trainee progression from skinny to muscular**

## Phase 7 — production question factory/database — EXTERNAL CONTENT TRACK
- [ ] **7.1 Candidate-generation specifications — EXTERNAL**
- [ ] **7.2 Automatic production QA pipeline — EXTERNAL**
- [ ] **7.3 Scale production bank — EXTERNAL**
- [x] **7.4 Implement bad-question reporting UI and report storage contract — APP TRACK**

## Phase 8 — Web V1 integration — APP TRACK
- [x] **8.1 Mobile-first home/navigation**
- [x] **8.2 End-to-end Web regression suite**
- [x] **8.3 Performance/large-bank adapter check**
- [x] **8.4 Publish Web beta entry point**

## Phase 9 — freeze cross-platform behavior — APP TRACK
- [x] **9.1 Freeze platform-neutral models**
  - Documented JSON-compatible Skill, Question, WorkoutRecipe, Attempt, MasterySnapshot, ReviewEntry, ProgressionState, QuestionReport and semantic Asset ID contracts.
  - Added runtime shape validators and positive/negative contract tests without importing production question-authoring concerns.
- [x] **9.2 Create deterministic cross-platform conformance fixtures**
  - Added `tests/fixtures/cross-platform-conformance-v1.json`, containing synthetic deterministic inputs and exact expected outputs for seeded selection, QuizSession, mastery, review, progression and question reports.
  - Added JavaScript conformance tests that consume the JSON unchanged; the same file is the Swift conformance input.
- [x] **9.3 Document Web V1 behavior as Swift port reference**
  - Added `docs/power-toeic/70_SWIFT_PORT_REFERENCE.md` freezing responsibility boundaries, algorithms, thresholds, enum semantics and the rule that shared conformance fixtures decide cross-platform behavior.

## Phase 10 — native iOS Swift/SwiftUI port — APP TRACK
- [ ] **10.1 Create native Swift/SwiftUI project structure**
- [ ] **10.2 Implement Codable platform-neutral models and QuestionBankRepository protocol**
- [ ] **10.3 Port QuizSession and WorkoutBuilder behavior**
- [ ] **10.4 Port mastery, weakness and review engines**
- [ ] **10.5 Build SwiftUI home/workout/quiz/result/weakness screens**
- [ ] **10.6 Port Drill Sergeant / Trainee character UX and progression**
- [ ] **10.7 Implement native persistence**
- [ ] **10.8 Run JavaScript/Swift conformance suite**

## Phase 11 — iOS release preparation — APP TRACK
- [ ] **11.1 App lifecycle, offline behavior and accessibility pass**
- [ ] **11.2 App Store assets/metadata/privacy requirements**
- [ ] **11.3 TestFlight build and release regression**
- [ ] **11.4 App Store submission readiness checkpoint**

## Deferred / only when required
account login and cross-device sync; server-side analytics/persistence; payments; Part 2/6/7/listening expansion; advanced item-response statistics; third-party UI/game frameworks; more character skins/animation.
