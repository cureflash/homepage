# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Reconciled `takken-concept-floor-area-ratio` by mapping the existing verified Phase 2/3 questions only to the knowledge items they directly measure.

- `takken-q-70-001` maps only to `takken-k-floor-area-ratio-definition`.
- `takken-q-70-002` maps only to `takken-k-floor-area-ratio-front-road-under-twelve`.
- The designated-limit, residential-road-factor, nonresidential-road-factor, lower-of-two, and weighted-average knowledge items remain explicit Phase 4.3 deficits.
- Existing Phase 2/3 question text, choices, answers, explanations, source references and validation statuses were not changed.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 90/113 fully reconciled concepts
- Concepts with canonical knowledge items: 90
- Canonical knowledge items: 469
- Existing verified questions mapped: 110
- Explicit unmapped knowledge gaps: 309
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Extract canonical knowledge items for `takken-concept-setback-height-restrictions` from the 2026-04-01 Building Standards Act Article 56 framework. Keep question mapping limited to directly measured knowledge and do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
