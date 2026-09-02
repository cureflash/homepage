# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Added canonical atomic knowledge for `takken-concept-setback-height-restrictions` without changing any Phase 2/3 question content, validation status, or existing question mappings.

- Added 9 verified knowledge items sourced to the 2026-04-01 Building Standards Act Article 56 framework and official MLIT slope guidance.
- Separated the three slope types, road-slope principle, road setback relaxation, adjacent-lot low-rise exclusion, residential/nonresidential adjacent-lot baselines, north-side applicable zones, and low-rise/mid-rise north-side baselines.
- `takken-q-71-001` remains unmapped in this checkpoint so it can be mapped only to the summary item its choices directly measure.
- `takken-q-71-002` was not included because shadow restrictions are a separate exam concept.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 90/113 fully reconciled concepts
- Concepts with canonical knowledge items: 91
- Canonical knowledge items: 478
- Existing verified questions mapped: 110
- Explicit unmapped knowledge gaps: 318
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Map `takken-q-71-001` only to `takken-k-setback-height-three-slope-types`. Keep the other eight setback-height-restrictions knowledge items as explicit Phase 4.3 deficits. Do not map `takken-q-71-002` here because it belongs to the separate `takken-concept-shadow-restrictions` concept. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
