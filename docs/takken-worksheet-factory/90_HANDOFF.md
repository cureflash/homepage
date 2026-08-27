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

## Completed in this run

Advanced Phase 2 question generation across two safe checkpoints, strictly in unit order:

- units 8-20: 14 facts / 14 questions in `qualifications/takken/data/pending-questions-08-20.js`
- units 21-27: 14 facts / 14 questions in `qualifications/takken/data/pending-questions-21-27.js`

Together with the pre-existing units 1-7 checkpoint, cumulative coverage is now:

- 27/90 units covered
- 37 core facts covered
- 37 generated four-choice questions
- 37 `pending_validation`
- 0 verified

The units 21-27 checkpoint covers:

1. `article35-basics` — 2 facts / 2 questions
2. `article35-items` — 2 facts / 2 questions
3. `article37-basics` — 2 facts / 2 questions
4. `article35-vs-37` — 2 facts / 2 questions
5. `eight-restrictions-overview` — 2 facts / 2 questions
6. `cooling-off` — 2 facts / 2 questions
7. `earnest-money-and-safeguards` — 2 facts / 2 questions

Every new question has a stable ID, exactly four distinct choices, one proposed answer, explanation, canonical fact/source references, `examYear: 2026`, `lawAsOf: "2026-04-01"`, and `validationStatus: "pending_validation"`.

The new question files perform generation-time structural guards for duplicate IDs, normalized duplicate stems within the checkpoint, choice count, duplicate choices, answer-index range, exam metadata, and pending-validation status.

Answer-position distribution:

- units 8-20: A=3, B=4, C=4, D=3
- units 21-27: A=4, B=4, C=4, D=2

No independent solve-all validation was performed because Phase 2 is incomplete. No question was promoted to verified.

For unit 27, the current official MLIT hand-money protection page was rechecked during generation. It states that representative exemption thresholds are 5% or less and 10 million yen or less before construction completion, and 10% or less and 10 million yen or less after completion. This matches the canonical unit fact.

## Validation notes

The generated questions were checked against the canonical fact claims and source IDs in the unit data before storage. Direct local Node checkout/tests could not be run because this automation environment cannot resolve `github.com`; therefore no local Node test success is claimed. GitHub PRs in this run exposed no configured commit status checks.

## Status after this run

- Unit generation: 90/90 complete
- Question-covered units: 27/90
- Covered core facts: 37
- Generated four-choice questions: 37
- Pending validation questions: 37
- Verified questions: 0
- `question_generation_complete`: false
- `generation_complete`: false
- `validation_complete`: false

## Exact next start

Continue Phase 2 at unit 28:

`damages-penalty`

Read its complete `facts[]` from `qualifications/takken/data/pending-units-21-40.js`, generate at least one direct four-choice measurement for every uncovered core fact, then continue strictly in unit order.

Do not start solve-all validation until all 90 units have 100% core-fact question coverage and every generated question is stored as `pending_validation`.

## Publication invariant

All 90 units and all generated questions remain unpublished until independently verified. Never bulk-promote pending content to verified.
