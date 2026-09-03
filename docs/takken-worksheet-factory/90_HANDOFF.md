# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Added and source-checked 4 canonical knowledge items for `takken-concept-real-estate-transfer-income` without changing existing Phase 2/3 questions or beginning Phase 4.3.

- `takken-k-real-estate-transfer-income-separate-taxation`: land/building transfer income is calculated separately from salary and other income under separate taxation.
- `takken-k-real-estate-transfer-income-classification-reference-date`: long-term/short-term classification uses the ownership period as of January 1 of the year of transfer.
- `takken-k-real-estate-transfer-income-long-term-over-five-years`: ownership exceeding five years at that reference date is long-term transfer income.
- `takken-k-real-estate-transfer-income-short-term-five-years-or-less`: ownership of five years or less at that reference date is short-term transfer income.
- Scope was intentionally limited to the two canonical unit-83 core facts. Special deductions, residential-property exceptions, and other transfer-income rules were not added.
- Primary evidence is the National Tax Agency's current `土地や建物を売ったとき` guidance, which expressly uses the 2026 sale-year example and states the separate-taxation and January-1/five-year rules.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 106/113 concepts with canonical knowledge extraction complete; 105/113 fully reconciled through existing-question mapping
- Concepts with canonical knowledge items: 106
- Canonical knowledge items: 592
- Existing verified questions mapped: 134
- Explicit unmapped knowledge gaps: 396
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile the existing verified unit-83 questions against the 4 `takken-concept-real-estate-transfer-income` knowledge items. Map only knowledge that each question directly measures. Keep Phase 4.3 unstarted.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
