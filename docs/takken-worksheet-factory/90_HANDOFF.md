# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Reconciled the two existing verified source questions for `takken-concept-real-estate-acquisition-tax` against its 10 canonical knowledge items.

- `takken-q-79-001` maps only to `takken-k-real-estate-acquisition-tax-prefectural-taxpayer`, `takken-k-real-estate-acquisition-tax-acquisition-regardless-registration-payment`, and `takken-k-real-estate-acquisition-tax-inheritance-nontaxable`, because its stem and choices directly test the prefectural acquisition levy, registration-independent acquisition, and inheritance non-taxation.
- `takken-q-79-002` maps only to `takken-k-real-estate-acquisition-tax-base-registered-value`, `takken-k-real-estate-acquisition-tax-land-half-tax-base`, `takken-k-real-estate-acquisition-tax-rates-20260401`, and `takken-k-real-estate-acquisition-tax-exemption-thresholds-20260401`, because its four choices directly test those tax-base/rate/exemption rules.
- New-house deduction, long-life-quality-house deduction, and residential-land reduction remain explicit Phase 4.3 deficits; neither source question directly measures them.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 102/113 concepts with canonical knowledge extraction complete; 102/113 fully reconciled through question mapping
- Concepts with canonical knowledge items: 102
- Canonical knowledge items: 561
- Existing verified questions mapped: 128
- Explicit unmapped knowledge gaps: 372
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Extract canonical atomic knowledge items for `takken-concept-fixed-asset-tax` from 2026-04-01 primary sources and existing verified source material. Keep existing source-question mapping as a separate later checkpoint. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
