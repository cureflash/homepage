# Power TOEIC — master instructions

Purpose: build a maintainable TOEIC training app around one product principle: **細分化して、選択と集中し、物量で苦手を突破する**.

The product name is **Power TOEIC**.

## Ownership split

The scheduled task named **Power TOEIC 開発** owns only the **application/program/UI track**.

It must implement and maintain:

- mobile-first UI;
- common quiz/session engine;
- four-choice cloze renderer;
- results UI;
- local persistence;
- mastery/weakness logic;
- workout recipes and workout editor;
- QUICK / TRAINING / POWER / WEAKNESS / CUSTOM / TEST / REVIEW behavior;
- review scheduling;
- Drill Sergeant / Trainee character UI and progression;
- bad-question reporting UI/storage integration;
- navigation, responsive layout, tests, performance and deployment integration.

It must **not** spend scheduled runs creating or scaling the production question database. The following belong to another scheduled/content track:

- Part 5 taxonomy authoring and detailed educational definitions;
- bulk question writing/generation;
- Gold-bank content production beyond minimal program fixtures;
- offline AI candidate generation;
- question-bank QA at scale;
- bulk question database expansion.

The app track may define the **consumer-facing data interface/schema required by program code**, and may keep a tiny synthetic/test fixture bank solely so UI and program tests can run. Fixture questions are not production content and must be clearly marked as such.

Missing production question data must not block application implementation when a stable adapter/fixture can be used.

## Product identity

Power TOEIC is not a lecture-heavy comprehensive English course. It is a high-volume drill system.

The basic interaction is intentionally narrow:

1. Show one TOEIC-style sentence with one blank.
2. Show exactly four choices.
3. User selects one answer.
4. Give immediate correctness feedback and a concise explanation.
5. Continue with the next unseen or review question.

The main competitive idea is not simply "many questions". The runtime must be able to target fine-grained micro-skills and concentrate a large number of eligible questions on weak skills once the external content track supplies them.

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

Character presentation is a UI/presentation concern only. It must never own answer logic, question selection, mastery rules, or persisted educational data.

Temporary visual/audio sources are defined by `50_ASSET_POLICY.md`. The app must reference character/audio resources through semantic asset IDs so temporary Irasutoya/Google Drive assets can later be replaced without touching domain logic.

## Maintainability policy

Prefer boring, proven technology and reuse over novelty.

Phase 0 established the canonical implementation path as `subjects/english/power-toeic/` using static mobile-first HTML/CSS/ES modules. Reuse the proven `core / renderers / data / presentation / tests` separation from `subjects/social/quiz/`, but do not cross-import or rewrite the timed social `QuizEngine`.

Required principles:

1. Keep question data separate from quiz UI.
2. Keep workout/mastery logic separate from rendering.
3. Keep character UI separate from educational logic.
4. Keep question-generation/QA tooling offline from learner runtime.
5. Prefer deterministic code covered by Node tests.
6. Do not introduce React/Django/another framework until a concrete unmet requirement exists.
7. Use dependency injection/adapters at the question-bank boundary so production content can arrive independently.
8. Keep the web implementation portable for a later mobile wrapper.
9. Use a presentation-layer `AssetCatalog`/adapter instead of scattering source filenames or URLs throughout UI code.

## Canonical project documents

At the start of every scheduled app-development run, read latest `main`, then:

- `docs/power-toeic/00_MASTER_INSTRUCTIONS.md`
- `docs/power-toeic/10_PRODUCT_AND_ARCHITECTURE.md`
- `docs/power-toeic/20_EXECUTION_PLAN.md`
- `docs/power-toeic/40_UI_AND_CHARACTER_SPEC.md`
- `docs/power-toeic/50_ASSET_POLICY.md`
- `docs/power-toeic/STATUS.json`
- `docs/power-toeic/90_HANDOFF.md`

`30_QUESTION_AND_QA_SPEC.md` is an interface/reference document, but app-development runs must not drift into bulk content production because it exists.

## Scheduled-run workflow

1. Start from latest `main` and reconcile concurrent changes.
2. Read the canonical Power TOEIC documents.
3. Resume from the first unfinished **APP TRACK** task in `20_EXECUTION_PLAN.md`; skip tasks marked external content/data track.
4. Perform real program/UI/test work rather than only planning.
5. Use fixture question data when production DB work is not yet available.
6. Complete as many consecutive safe checkpoints as possible without leaving `main` broken.
7. Run affected tests/validation.
8. Re-check latest `main` before merge and reconcile parallel work.
9. Update `STATUS.json`, `20_EXECUTION_PLAN.md`, and `90_HANDOFF.md` to the exact app-track state.
10. Do not do unrelated cleanup or content-bank scaling.

## Core workout rule

The same workout/session engine must support quick drills, one-skill concentrated drills, weakness-generated workouts, user-customized workouts, mixed/general tests, review sessions, and long 50/100-question or endless-style drilling.

Do not implement each mode as a separate quiz engine. Modes are workout recipes / selection policies feeding one session engine.

System-generated weakness workouts remain user-editable before start.

## Definition of success for V1 app track

The application track is successful when a user can open Power TOEIC on mobile web, choose or receive a workout, answer continuous four-choice cloze questions, receive immediate feedback, persist attempts, see mechanically inferred weaknesses, edit a recommended workout, run 10/30/50/100-question sessions, use mixed/review modes, see the Trainee grow, and report bad questions — all without runtime LLM dependency and without the app implementation owning production question generation.