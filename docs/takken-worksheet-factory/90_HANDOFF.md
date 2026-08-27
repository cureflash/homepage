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

- units 48-67
- 40 core facts covered
- 40 new four-choice questions
- new file: `qualifications/takken/data/pending-questions-48-67.js`

Cumulative coverage is now:

- 67/90 units covered
- 117 core facts covered
- 117 generated four-choice questions
- 117 `pending_validation`
- 0 verified

The checkpoint covers:

1. `sale-earnest`
2. `contract-nonconformity-civil`
3. `lease-general`
4. `lease-deposit-opposability`
5. `land-lease-right`
6. `fixed-term-land-lease`
7. `building-lease-right`
8. `fixed-term-building-lease`
9. `inheritance-heirs-shares`
10. `inheritance-acceptance-renunciation`
11. `will-reserved-portion`
12. `condominium-law`
13. `real-estate-registration`
14. `city-planning-area`
15. `area-division`
16. `use-districts`
17. `city-planning-decisions`
18. `development-permission-required`
19. `development-permission-procedure`
20. `building-confirmation`

Every new question has a stable ID, exactly four distinct choices, one proposed answer, explanation, canonical fact/source references, `examYear: 2026`, `lawAsOf: "2026-04-01"`, and `validationStatus: "pending_validation"`.

The new question file includes generation-time guards for duplicate IDs, normalized duplicate stems, choice count, duplicate choices, answer-index range, exam metadata, and pending-validation status.

Answer-position distribution for units 48-67 is exactly balanced:

- A=10
- B=10
- C=10
- D=10

No independent solve-all validation was performed because Phase 2 is incomplete. No question was promoted to verified.

## Source / validation notes

Questions were derived directly from the canonical `facts[]` for units 48-67 and retained the canonical primary-source IDs. Relevant e-Gov sources include the Civil Code, Land and Building Lease Act, City Planning Act, Building Standards Act, Condominium Act and Real Estate Registration Act. Current e-Gov pages were reopened during this run for the Land and Building Lease Act and City Planning Act to confirm the source family remained current for the 2026 generation path.

Local structural validation of the generated file passed before upload:

- 40 question IDs
- 40 unique IDs
- 40 unique stems
- exactly 4 choices per question
- no duplicate choices within a question
- proposed answer indexes in range
- all questions `pending_validation`
- answer-position distribution A/B/C/D = 10/10/10/10
- `node --check` passed

## Status after this run

- Unit generation: 90/90 complete
- Question-covered units: 67/90
- Covered core facts: 117
- Generated four-choice questions: 117
- Pending validation questions: 117
- Verified questions: 0
- `question_generation_complete`: false
- `generation_complete`: false
- `validation_complete`: false

## Exact next start

Continue Phase 2 at unit 68:

`roads-frontage`

Read its complete `facts[]` from `qualifications/takken/data/pending-units-61-80.js`, generate at least one direct four-choice measurement for every uncovered core fact, then continue strictly in unit order. The next normal batch may cover units 68-87 if all facts can be generated safely; do not pad counts.

Do not start solve-all validation until all 90 units have 100% core-fact question coverage and every generated question is stored as `pending_validation`.

## Publication invariant

All 90 units and all generated questions remain unpublished until independently verified. Never bulk-promote pending content to verified.
