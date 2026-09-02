# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Reconciled `takken-concept-setback-height-restrictions` against its existing verified Phase 2/3 question without changing question content or validation status.

- Mapped `takken-q-71-001` only to `takken-k-setback-height-three-slope-types` because its choices directly ask for the Article 56 trio: road slope, adjacent-lot slope, and north-side slope.
- Did not map the other eight setback-height knowledge items; they remain explicit Phase 4.3 deficits.
- Did not map `takken-q-71-002`; it belongs to the separate `takken-concept-shadow-restrictions` concept.
- Updated the mapping validator to 111 mapped existing verified questions through `takken-q-71-001`.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 91/113 fully reconciled concepts
- Concepts with canonical knowledge items: 91
- Canonical knowledge items: 478
- Existing verified questions mapped: 111
- Explicit unmapped knowledge gaps: 317
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Extract canonical atomic knowledge items for `takken-concept-shadow-restrictions` from the 2026-04-01 Building Standards Act Article 56-2 framework and official primary guidance. Then map `takken-q-71-002` only to the knowledge item it directly measures. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
