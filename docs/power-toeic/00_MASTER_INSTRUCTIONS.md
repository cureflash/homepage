# Power TOEIC — master instructions

Purpose: build a maintainable TOEIC training app around one product principle: **細分化して、選択と集中し、物量で苦手を突破する**.

The product name is **Power TOEIC**.

## Product identity

Power TOEIC is not a lecture-heavy comprehensive English course. It is a high-volume drill system.

The basic interaction is intentionally narrow:

1. Show one TOEIC-style sentence with one blank.
2. Show exactly four choices.
3. User selects one answer.
4. Give immediate correctness feedback and a concise explanation.
5. Continue with the next unseen or review question.

The main competitive idea is not simply "many questions". The system must decompose TOEIC loss causes into fine-grained micro-skills and concentrate a large number of questions on the user's weak micro-skills.

## Explicitly excluded product concepts

Do NOT add these unless the user later explicitly changes the specification:

- target-score input or target-score-driven study plans;
- mapping TOEIC skill categories to body parts;
- lecture-video-first UX;
- chat/AI conversation as the main learning flow;
- runtime LLM question generation during quiz play;
- unnecessary game engines or complex animation frameworks;
- microservices unless scale proves the monolith insufficient.

## Character concept

The learning screen has two recurring characters:

- **鬼軍曹 / Drill Sergeant**: presents the problem, commands training, reacts to results, and drives the session.
- **ガリガリの訓練生 / Trainee**: represents the learner and answers the sergeant's questions. The trainee starts skinny and becomes progressively more muscular through continued correct training and mastery.

The core visual metaphor is training. The sergeant gives drills; the trainee answers; repeated learning produces visible physical growth.

Character presentation is a UI/presentation concern only. It must never own answer logic, question selection, mastery rules, or persisted educational data.

## Maintainability policy

Prefer boring, proven technology and reuse over novelty.

Before introducing a new framework or architecture, audit existing reusable code in `cureflash/homepage`, especially `subjects/social/quiz/` and its separation of core quiz logic, renderers, data, tests, presentation, and optional effects.

The first implementation task is therefore **reuse audit**, not greenfield framework setup.

Required principles:

1. Reuse existing stable quiz code where its contracts fit.
2. Extract shared quiz primitives only when doing so reduces duplication without breaking the social quiz.
3. Keep question data separate from quiz UI.
4. Keep workout construction/mastery selection separate from rendering.
5. Keep character UI separate from educational logic.
6. Keep question-generation/QA tooling offline from learner runtime.
7. Do not introduce React/Django/another framework merely because it is fashionable; first prove existing vanilla-JS architecture cannot meet the current phase.
8. Prefer deterministic code that can be regression tested.
9. Avoid two independent implementations of the same quiz/session logic.
10. Keep the web implementation portable so a later mobile shell can wrap or reuse it.

## Canonical project documents

At the start of every scheduled run, read the latest `main`, then read in lexical order:

- `docs/power-toeic/00_MASTER_INSTRUCTIONS.md`
- `docs/power-toeic/10_PRODUCT_AND_ARCHITECTURE.md`
- `docs/power-toeic/20_EXECUTION_PLAN.md`
- `docs/power-toeic/30_QUESTION_AND_QA_SPEC.md`
- `docs/power-toeic/40_UI_AND_CHARACTER_SPEC.md`
- `docs/power-toeic/STATUS.json`
- `docs/power-toeic/90_HANDOFF.md`

Then inspect the code relevant to the first unfinished execution-plan item.

`STATUS.json` and `90_HANDOFF.md` are authoritative for the current implementation position.

## Scheduled-run workflow

1. Start from latest `main` and reconcile concurrent changes.
2. Read all canonical Power TOEIC documents listed above.
3. Resume at the first unfinished executable task in `20_EXECUTION_PLAN.md`.
4. Perform real implementation/test/content work, not only planning or reporting.
5. Complete as many consecutive safe checkpoints as possible without knowingly leaving `main` broken.
6. Prefer small reusable changes over broad rewrites.
7. Run the required automated tests/validation for every affected layer.
8. Re-check latest `main` immediately before write/merge and reconcile without force-overwriting parallel work.
9. Update `STATUS.json`, `20_EXECUTION_PLAN.md`, and `90_HANDOFF.md` to the exact post-run state.
10. Commit/push or merge through a PR when appropriate.
11. If all current phase acceptance criteria are complete, move to the next phase. Do not do unrelated cleanup.

## Question-content policy

MVP scope is Part 5-style four-choice cloze questions. The internal taxonomy should begin with approximately 44 Part 5 micro-skills, but the user UI must show understandable broader categories rather than dumping all micro-skills on one screen.

Every learner-facing question must have exactly one defensible answer in the displayed context. AI-generated candidate questions are untrusted until they pass the QA gates defined in `30_QUESTION_AND_QA_SPEC.md`.

Never use real-time AI generation as a fallback when the question bank is empty. An empty or underfilled bank is a content-production issue that must be fixed offline.

## Core workout rule

The same workout/session engine must support:

- quick drills;
- one-skill concentrated drills;
- weakness-generated workouts;
- user-customized workouts;
- mixed/general tests;
- review sessions;
- long 50/100-question sessions and effectively endless drilling.

Do not implement each mode as a separate quiz engine. Modes are different **workout recipes / selection policies** feeding one session engine.

System-generated weakness workouts must remain user-editable before start: the system proposes skill weights/counts, then the user may add/remove skills or adjust counts.

## Mastery philosophy

The app may use attempts, recent correctness, response time, repeated error patterns, mixed-test performance, and spaced-review outcomes to infer weakness/mastery. Keep the first implementation deterministic and explainable. Do not require an opaque ML model for MVP.

A micro-skill is not considered mastered merely because the user performed well in a labeled single-skill drill. Mastery must eventually be confirmed in mixed/unlabeled contexts and later review.

## Definition of success for V1

V1 is successful when a user can:

- open Power TOEIC on mobile web;
- select or receive a workout;
- answer continuous four-choice cloze questions quickly;
- receive immediate concise feedback;
- have attempts stored locally or through the chosen minimal persistence layer;
- see weak micro-skills identified mechanically;
- accept and edit a weakness-generated workout;
- run 10/30/50/100-question sessions through one common engine;
- see the trainee character grow through defined progression stages;
- run mixed tests that hide micro-skill labels;
- report a bad question;
- and do all of the above without any runtime LLM dependency.
