# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Added canonical knowledge items for `takken-concept-building-coverage-ratio` without changing any Phase 2/3 question content or validation status.

- Added 9 verified atomic knowledge items against the 2026-04-01 Building Standards Act Article 53 baseline.
- Covered the definition (`building area / site area`) and designated limit structure.
- Separated the fire/semi-fire 10% relaxation, corner-lot 10% relaxation, and combined 20% relaxation.
- Added the statutory permit-relaxation categories and Article 53(6) application exclusions instead of compressing them into the broad existing `u69-f2` wording.
- Used only the existing verified unit 69 facts as source evidence anchors; no Phase 2/3 question was edited or newly verified.
- `takken-q-69-001` / `takken-q-69-002` are intentionally not mapped yet; mapping is the next checkpoint so broad wording is not over-claimed.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 88/113 fully reconciled concepts
- Concepts with canonical knowledge items: 89
- Canonical knowledge items: 462
- Existing verified questions mapped: 106
- Explicit unmapped knowledge gaps: 307
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Map `takken-q-69-001` and `takken-q-69-002` only to the `takken-concept-building-coverage-ratio` knowledge items they directly measure. Do not map the entire Article 53 exception set merely because `takken-q-69-002` broadly mentions that relaxation or application exclusion can occur. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.