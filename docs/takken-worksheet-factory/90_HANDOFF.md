# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Reconciled the existing verified source questions for `takken-concept-fixed-asset-tax` against its 9 canonical knowledge items without changing Phase 2/3 questions or beginning Phase 4.3.

- `takken-q-80-001` maps only to `takken-k-fixed-asset-tax-municipal-owner-tax`, because the stem and choices directly test the owner taxpayer principle.
- `takken-q-80-002` maps only to `takken-k-fixed-asset-tax-assessment-date-january1`, because the stem and choices directly test the January 1 assessment date.
- The registered/ledger owner rule, 1.4% standard rate, exemption thresholds, three-year revaluation, small residential land one-sixth, general residential land one-third, and new-house reduction remain explicit Phase 4.3 deficits because the existing questions do not directly measure them.
- Existing Phase 2/3 question text, choices, answers, explanations, source references, and validation statuses remain unchanged.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 103/113 concepts with canonical knowledge extraction complete; 103/113 fully reconciled through question mapping
- Concepts with canonical knowledge items: 103
- Canonical knowledge items: 570
- Existing verified questions mapped: 130
- Explicit unmapped knowledge gaps: 379
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Extract and source-check canonical atomic knowledge items for `takken-concept-registration-license-tax`, the next concept in canonical order. Defer its existing source-question mapping to the following checkpoint. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
