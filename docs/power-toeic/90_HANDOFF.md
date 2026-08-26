# Power TOEIC — handoff

## Current state

**Phase 0 is complete. Phase 1 / Task 1.1 is the exact next starting point.**

Power TOEIC remains a Part 5-style four-choice cloze drill product built around fine-grained weakness detection, concentration, and high-volume repetition.

Canonical product decisions remain unchanged:

- no target-score feature;
- no skill-to-body-part mapping;
- no runtime LLM question generation;
- question generation/QA stays offline;
- Drill Sergeant presents/commands questions in the UI;
- skinny Trainee represents the learner and becomes progressively more muscular;
- character presentation remains separate from answer, workout, mastery, and content logic.

## Phase 0 completed work

### Existing quiz audit

The existing `subjects/social/quiz/` implementation was inspected at the relevant boundaries:

- `js/core/quiz-engine.js`;
- `js/renderers/choice-renderer.js` and renderer directory;
- `js/main.js`;
- tests, especially `quiz-engine.test.js`;
- package test script;
- existing architecture documentation.

The full file-level decision is recorded in `docs/power-toeic/PHASE0_REUSE_AUDIT.md`.

### Architecture decision

Canonical Power TOEIC implementation path is now:

`subjects/english/power-toeic/`

Offline generation/QA path is:

`scripts/power-toeic/`

Do **not** make Power TOEIC import the social quiz at runtime.

The social `QuizEngine` remains social-specific because it intentionally owns a timed-game contract: 180-second default countdown, wrong-answer time penalty, timeout/game-over semantics, and finite-game result output. Those constraints are inappropriate for Power TOEIC study sessions, long drills, review/mastery hooks, and workout recipes.

Reuse the proven architecture rather than the social engine implementation:

```text
core / renderers / data / presentation / tests
```

The existing `ChoiceRenderer` contract is the main reusable UI pattern:

- `setAnswerHandler(handler)`;
- `render(question)`;
- `showResult(result)`.

For initial Power TOEIC work, implement a small Power TOEIC renderer with that contract rather than cross-importing `subjects/social/quiz/...`. Extract a true shared package only later if real duplicated evolution justifies it.

No concrete Phase 0 requirement justified React, Django, GraphQL, Redis, a game engine, microservices, or another framework. Continue with static mobile-first HTML/CSS/ES modules until a real requirement proves otherwise.

### Regression protection

Added:

`subjects/social/quiz/tests/choice-renderer.test.js`

It characterizes two reusable contracts:

1. four options render and a click forwards the stable option key through the answer handler;
2. result display disables all choices and marks the correct option plus the selected wrong option.

The focused Node test was executed against the exact current `ChoiceRenderer` implementation and new test source: **2 tests passed, 0 failed**.

No existing social quiz production source was modified during Phase 0.

## Exact next task

Start **Phase 1 / Task 1.1 — Define Part 5 taxonomy V1**.

Required deliverables:

1. create a machine-readable taxonomy under the Power TOEIC implementation/data area or a canonical source that can later be imported there;
2. define approximately 44 stable micro-skill IDs;
3. group them into a small learner-facing hierarchy;
4. for every micro-skill define:
   - stable ID;
   - learner-facing label;
   - parent group;
   - intended decision rule;
   - representative confusion/error type;
   - initial priority/notes where useful;
5. add validation tests for duplicate IDs, missing groups, and duplicate/overlapping definitions where mechanically detectable;
6. add/update a human-readable taxonomy document;
7. update STATUS, execution-plan checkbox, and this handoff.

Do not start bulk question generation during Task 1.1. Taxonomy must be stable before question schema/Gold-bank scaling.

## After Task 1.1

Proceed to Task 1.2: Power TOEIC question schema and validators, then Task 1.3 Gold questions. The first visible quiz page remains a later milestone after content contracts are testable.
