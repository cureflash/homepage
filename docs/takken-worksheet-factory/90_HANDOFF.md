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

Advanced Phase 2 question generation for the maximum normal batch of 20 consecutive units:

- units 28-47
- 40 core facts covered
- 40 new four-choice questions
- new file: `qualifications/takken/data/pending-questions-28-47.js`

Cumulative coverage is now:

- 47/90 units covered
- 77 core facts covered
- 77 generated four-choice questions
- 77 `pending_validation`
- 0 verified

The new checkpoint covers:

1. `damages-penalty`
2. `contract-nonconformity-special-rule`
3. `unowned-property-restriction`
4. `installment-sales-ownership`
5. `brokerage-fees`
6. `supervision-penalties`
7. `civil-intent-general`
8. `civil-mistake`
9. `civil-fraud-duress`
10. `civil-fictitious-declaration`
11. `civil-limited-capacity`
12. `civil-agency`
13. `civil-unauthorized-agency`
14. `civil-prescription`
15. `property-rights-opposability`
16. `co-ownership`
17. `mortgage`
18. `default-damages`
19. `contract-cancellation`
20. `risk-simultaneous-performance`

Every new question has a stable ID, exactly four distinct choices, one proposed answer, explanation, canonical fact/source references, `examYear: 2026`, `lawAsOf: "2026-04-01"`, and `validationStatus: "pending_validation"`.

The new question file includes generation-time guards for duplicate IDs, normalized duplicate stems, choice count, duplicate choices, answer-index range, exam metadata, and pending-validation status.

Answer-position distribution for units 28-47 is exactly balanced:

- A=10
- B=10
- C=10
- D=10

No independent solve-all validation was performed because Phase 2 is incomplete. No question was promoted to verified.

## Validation notes

The questions were derived directly from the canonical `facts[]` for units 28-47. Source references remain the canonical 2026-04-01 e-Gov Takken Law or Civil Code IDs already attached to those facts. Generation did not substitute secondary summaries for canonical claims.

Local structural checks confirmed 40 unique IDs, 40 unique stems, four choices per question, no duplicate choices, valid answer indexes, and A/B/C/D=10/10/10/10. `node --check` passed for `pending-questions-28-47.js` before GitHub upload.

## Status after this run

- Unit generation: 90/90 complete
- Question-covered units: 47/90
- Covered core facts: 77
- Generated four-choice questions: 77
- Pending validation questions: 77
- Verified questions: 0
- `question_generation_complete`: false
- `generation_complete`: false
- `validation_complete`: false

## Exact next start

Continue Phase 2 at unit 48:

`sale-earnest`

Read its complete `facts[]` from `qualifications/takken/data/pending-units-41-60.js`, generate at least one direct four-choice measurement for every uncovered core fact, then continue strictly in unit order.

Do not start solve-all validation until all 90 units have 100% core-fact question coverage and every generated question is stored as `pending_validation`.

## Publication invariant

All 90 units and all generated questions remain unpublished until independently verified. Never bulk-promote pending content to verified.
