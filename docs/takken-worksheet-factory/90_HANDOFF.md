# 宅建 Worksheet Factory — HANDOFF

## Current state

The ordered 90-unit curriculum generation is complete. Four-choice question generation is in progress. All unit data and all generated questions remain unverified and unpublished.

Canonical docs:

- `00_MASTER_INSTRUCTIONS.md`
- `20_EXECUTION_PLAN.md`
- `30_QUESTION_AND_QA_SPEC.md`
- `STATUS.json`
- `90_HANDOFF.md`

Canonical implementation:

- `qualifications/takken/`

## Completed in this checkpoint

Continued Phase 2 four-choice question generation in strict unit order from unit 8 through unit 20.

Added `qualifications/takken/data/pending-questions-08-20.js` with 14 stable-ID questions covering every core fact in units 8-20:

1. `takken-shi-registration` — 1 fact / 1 question
2. `takken-shi-card` — 1 fact / 1 question
3. `takken-shi-exclusive` — 1 fact / 1 question
4. `takken-shi-exclusive-duties` — 1 fact / 1 question
5. `business-guarantee-deposit` — 1 fact / 1 question
6. `business-guarantee-refund` — 1 fact / 1 question
7. `guarantee-association` — 1 fact / 1 question
8. `brokerage-contract-basics` — 1 fact / 1 question
9. `brokerage-contract-types` — 1 fact / 1 question
10. `brokerage-reins-reporting` — 2 facts / 2 questions
11. `advertising-start-time` — 1 fact / 1 question
12. `contract-start-time` — 1 fact / 1 question
13. `false-advertising-prohibited-conduct` — 1 fact / 1 question

New checkpoint total: 14 covered facts / 14 generated questions.
Cumulative total: 23 covered facts / 23 generated questions across units 1-20.

Every new question has:

- stable `takken-q-<unitOrder>-<serial>` ID
- exact four distinct choices
- one `proposedAnswerIndex`
- explanation
- existing unit/fact/source references
- `examYear: 2026`
- `lawAsOf: "2026-04-01"`
- `validationStatus: "pending_validation"`
- empty validation metadata

The new question file performs generation-time structural guards for duplicate IDs, normalized duplicate stems within the checkpoint, choice count, duplicate choices, answer-index range, exam metadata, and pending-validation status.

Answer-position distribution in the new checkpoint is A=3, B=4, C=4, D=3. IDs are disjoint from the existing units 1-7 file by stable unit-order prefix. Each of the 14 canonical facts in units 8-20 is covered exactly once.

No independent solve-all validation was performed because Phase 2 is not complete. No question was promoted to verified.

## Validation notes

The generated questions were checked against the canonical fact claims and source IDs in the unit data before storage. The repository files include executable structural guards, but this automation environment could not run a local Node checkout because direct DNS access to `github.com` is unavailable. Therefore no local Node test success is claimed for this checkpoint. GitHub-side CI should be used if configured on the PR.

## Status after this checkpoint

- Unit generation: 90/90 complete
- Question-covered units: 20/90
- Covered core facts: 23
- Generated four-choice questions: 23
- Pending validation questions: 23
- Verified questions: 0
- `question_generation_complete`: false
- `generation_complete`: false
- `validation_complete`: false

## Exact next start

Continue Phase 2 at unit 21:

`article35-basics`

Read its complete `facts[]` from `qualifications/takken/data/pending-units-21-40.js`, then generate at least one direct four-choice measurement for every uncovered core fact before advancing to unit 22. Continue strictly in unit order and preserve the same schema.

Do not start solve-all validation until all 90 units have 100% core-fact question coverage and all generated questions are stored as `pending_validation`.

## Publication invariant

All 90 units and all generated questions remain unpublished until independently verified. Never bulk-promote pending content to verified.
