# Power TOEIC — execution plan

Work strictly from the first unchecked executable item. Check an item only when its acceptance criteria are satisfied and relevant tests pass.

## Phase 0 — reuse audit and architecture freeze

- [x] **0.1 Audit existing quiz foundation**
  - Read `subjects/social/quiz/README.md`, `js/core/`, `js/renderers/`, `js/main.js`, tests, and package scripts.
  - Identify exactly which primitives can be reused for four-choice cloze sessions without importing social-studies-specific assumptions.
  - Identify whether the existing `choice` renderer can be reused directly or generalized safely.
  - Document coupling risks and chosen reuse strategy in `90_HANDOFF.md`.
  - Acceptance: concrete file-level reuse plan exists; no speculative framework migration.

- [x] **0.2 Freeze Power TOEIC implementation location and shared-code boundary**
  - Prefer `subjects/english/power-toeic/` unless the reuse audit proves another repository-local path materially safer.
  - Decide whether to extract shared quiz primitives or preserve duplicated structure with explicit compatibility tests.
  - Acceptance: canonical paths are recorded in all relevant Power TOEIC docs/STATUS.

- [x] **0.3 Add baseline regression coverage for reusable quiz contracts**
  - Characterize any existing social-quiz core behavior that Power TOEIC will depend on before refactoring/extraction.
  - Acceptance: tests fail on an intentional break and pass on current behavior.

## Phase 1 — taxonomy and content contract

- [ ] **1.1 Define Part 5 taxonomy V1**
  - Create stable IDs for approximately 44 micro-skills.
  - Group them into a small learner-facing hierarchy.
  - For each micro-skill define intended decision rule and representative confusion/error pattern.
  - Acceptance: unique IDs, no duplicate meanings, machine-readable source plus human-readable documentation.

- [ ] **1.2 Define question schema and validators**
  - Implement the schema from `30_QUESTION_AND_QA_SPEC.md`.
  - Validate exactly four distinct choices, one answer, required tags, explanation, and QA state.
  - Acceptance: positive and negative schema tests.

- [ ] **1.3 Create initial Gold set**
  - Hand-curate/review a small representative set across the initial micro-skills.
  - Use it to regression-test renderers, selectors, validators, and later generation QA.
  - Target: enough coverage for each implemented question family before scale; do not chase volume before validation.

## Phase 2 — common quiz session MVP

- [ ] **2.1 Implement/reuse four-choice session core**
  - One common session engine for all Power TOEIC modes.
  - Immutable started-session question list.
  - Attempt events emitted per answer.
  - Acceptance: deterministic session tests.

- [ ] **2.2 Implement cloze-choice renderer**
  - Sentence with one blank plus exactly four tappable options.
  - Mobile-first layout.
  - Immediate correct/wrong state and concise explanation.
  - Acceptance: keyboard/tap interaction and answer uniqueness tests where applicable.

- [ ] **2.3 Implement basic results**
  - Show question count, correctness, and skill breakdown without target-score prediction.
  - Acceptance: results derive only from stored session attempts.

## Phase 3 — persistence and mastery

- [ ] **3.1 Implement minimal anonymous persistence**
  - Persist attempts and progression with the smallest suitable browser storage layer.
  - Include schema/version migration strategy.
  - Acceptance: reload preserves history; corrupted/old data fails safely.

- [ ] **3.2 Implement deterministic micro-skill mastery**
  - Track recent correctness, enough sample count, mixed performance, and review state.
  - Keep rules explainable and configurable.
  - Acceptance: table-driven transition tests.

- [ ] **3.3 Implement weakness ranking**
  - Produce ranked weak micro-skills mechanically from mastery/attempt data.
  - Acceptance: deterministic fixtures produce expected ranking.

## Phase 4 — workout system

- [ ] **4.1 Implement workout recipe model**
  - Skill IDs + desired counts/weights + total count + selection policy.
  - Same model for machine-generated and manual workouts.
  - Acceptance: recipe validation and serialization tests.

- [ ] **4.2 Implement question selector**
  - Prefer unseen eligible questions, then least-recently-seen questions.
  - Avoid duplicate question IDs within a finite session.
  - Acceptance: deterministic seeded selection tests.

- [ ] **4.3 Implement standard presets through recipes**
  - QUICK, TRAINING, POWER, TEST, REVIEW.
  - No separate quiz engine per mode.
  - Acceptance: each preset resolves to one common session format.

- [ ] **4.4 Implement weakness-generated workouts**
  - Generate a recipe from ranked weak skills.
  - Acceptance: generated recipe contains only eligible skills and respects requested count.

- [ ] **4.5 Implement user workout editor**
  - User can add/remove skills and adjust counts before session start.
  - Acceptance: edited system recommendation becomes an ordinary valid recipe and starts through the same engine.

- [ ] **4.6 Implement long-session behavior**
  - 10/30/50/100 question sizes plus an endless-style continuation mode.
  - Endless mode must still operate in bounded chunks internally and avoid loading an unbounded question list.
  - Acceptance: stable operation over repeated continuation chunks.

## Phase 5 — review and transfer

- [ ] **5.1 Implement mixed/unlabeled test mode**
  - Hide micro-skill labels that would reveal strategy.
  - Acceptance: same underlying questions can run in training and mixed presentation without data duplication.

- [ ] **5.2 Implement review scheduler**
  - Start with deterministic intervals such as next-day / later follow-ups; exact intervals remain configurable.
  - Acceptance: due review fixtures and date-boundary tests.

- [ ] **5.3 Gate mastery on transfer/review**
  - Single-skill drill success alone must not finalize mastery.
  - Acceptance: mastery fixtures demonstrate concentration -> mixed -> review progression.

## Phase 6 — character UX

- [ ] **6.1 Define character asset contract**
  - Drill Sergeant and Trainee asset IDs/states; no educational logic in assets.
  - Trainee has a small set of progression stages from skinny to increasingly muscular.
  - Acceptance: missing asset degrades gracefully without blocking quiz.

- [ ] **6.2 Implement Sergeant/Trainee quiz composition**
  - Sergeant visually presents/commands the current problem.
  - Trainee visually represents the answering learner.
  - Correct/wrong reactions are presentation effects driven by session events.
  - Acceptance: removing character layer leaves quiz fully playable.

- [ ] **6.3 Implement trainee progression**
  - Award progression from meaningful training/mastery events, not body-part skill mapping.
  - Prevent trivial tap-spam from being the optimal progression method.
  - Acceptance: progression is deterministic from recorded events and covered by tests.

## Phase 7 — question factory and QA

- [ ] **7.1 Implement candidate-generation specification per micro-skill**
  - Template IDs, intended rule, lexical family/constraints, distractor strategy.
  - Generation tooling remains offline.

- [ ] **7.2 Implement automatic QA pipeline**
  - Schema validation, answer consistency, all-choice substitution checks where practical, duplicate checks, independent solver/judge hooks, explanation consistency.
  - Acceptance: seeded bad-question fixtures are rejected.

- [ ] **7.3 Build first meaningful bank**
  - Scale only after the QA gates are proven.
  - Prioritize high-value Part 5 micro-skills and breadth of unseen surface forms.
  - Track generated/approved/rejected counts.

- [ ] **7.4 Add bad-question reporting**
  - User can report ambiguity, unnatural English, wrong explanation, wrong answer, or other issue.
  - Acceptance: reports persist locally or through the chosen persistence layer and identify exact question/version.

## Phase 8 — integrated V1

- [ ] **8.1 Mobile-first home and navigation**
  - Entry points for recommended weakness workout, manual category training, custom workout, review, and mixed test.
  - No target-score UI.

- [ ] **8.2 End-to-end regression suite**
  - Taxonomy -> question bank -> workout recipe -> selection -> session -> attempts -> mastery -> progression.

- [ ] **8.3 Performance and large-bank check**
  - Verify startup and question transitions remain responsive with the intended bank size.
  - Avoid loading all future content unnecessarily if bank size makes that inefficient.

- [ ] **8.4 Publish beta entry point**
  - Add site navigation only when V1 is sufficiently playable and question quality is acceptable.

## Phase 9 — post-MVP only

Do not start these until V1 is stable unless the user explicitly reprioritizes:

- accounts and cross-device sync;
- server-side persistence/analytics;
- payments;
- PWA/mobile wrapper;
- Part 2/6/7/listening expansion;
- App Store packaging;
- advanced item statistics;
- more character animation/skins.
