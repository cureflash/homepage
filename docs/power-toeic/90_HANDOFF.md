# Power TOEIC — handoff

## Current state

Power TOEIC has been specified but implementation has not begun.

The current product decisions are canonical:

- product name: Power TOEIC;
- core philosophy: decompose weak points finely, choose/concentrate, and break them through high-volume repetition;
- MVP content: TOEIC Part 5-style sentence cloze questions with exactly four choices;
- system may mechanically generate a weakness-focused workout recipe from attempt/mastery data;
- user can edit the proposed recipe before starting;
- all workout modes must feed one common quiz-session engine;
- user-facing taxonomy is broader than the internal approximately 44 Part 5 micro-skills;
- no target-score feature;
- no body-part-to-skill mapping;
- no runtime LLM question generation;
- question generation and QA are offline tooling;
- characters are a Drill Sergeant and a skinny Trainee;
- Drill Sergeant presents/commands the drill in the UI;
- Trainee represents the answering learner and progressively becomes muscular;
- character presentation must remain separate from answer, workout, mastery, and content logic.

## Repository evidence relevant to Phase 0

`cureflash/homepage` already contains `subjects/social/quiz/`, a lightweight vanilla-JS quiz platform with explicit separation among core quiz logic, renderers, game/data modules, presentation, and tests. The Power TOEIC implementation must audit that code before introducing any new framework.

The intended first comparison targets are:

- `subjects/social/quiz/js/core/`
- `subjects/social/quiz/js/renderers/`
- `subjects/social/quiz/js/main.js`
- `subjects/social/quiz/tests/`
- `subjects/social/quiz/package.json`
- relevant README/design docs

The preferred result is reuse/generalization of proven quiz primitives without breaking social quiz behavior. If direct sharing would create harmful coupling, preserve the same proven architectural boundaries and document why duplication is safer.

## Exact next task

Start **Phase 0 / Task 0.1 — Audit existing quiz foundation**.

Required actions:

1. fetch latest `main` and reconcile any parallel change;
2. read every Power TOEIC canonical document;
3. inspect the social quiz core, ordinary choice renderer, main wiring, tests, and package scripts;
4. write a concrete file-level table of:
   - reusable as-is;
   - reusable after small generic extraction;
   - social-specific / must not reuse;
5. identify the smallest safe Power TOEIC implementation path and shared-code boundary;
6. add characterization/regression tests before any extraction that could alter social quiz behavior;
7. update `STATUS.json`, `20_EXECUTION_PLAN.md`, and this handoff with the exact outcome;
8. proceed directly into Task 0.2/0.3 in the same run if safe.

Do not start building a React/Django/mobile stack during Task 0.1. A new framework requires concrete evidence from the audit that the existing static ES-module approach cannot support the current MVP requirements.

## First implementation milestone

The first visible milestone should be a minimal Power TOEIC page that can run a tiny reviewed Gold question set through the reused/common four-choice quiz session. Do not scale AI-generated question volume before taxonomy/schema validation and negative QA fixtures exist.
