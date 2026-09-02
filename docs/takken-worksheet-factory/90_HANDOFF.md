# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. The 50-question expansion, print generation, and app linkage remain later work after concept-by-concept knowledge/evidence reconciliation.

## Completed in this run

Extracted canonical knowledge for `takken-concept-shadow-restrictions` without changing existing Phase 2/3 question content or validation status.

- Added 9 atomic knowledge items based on the 2026-04-01 Building Standards Act Article 56-2 framework and official MLIT shadow-restriction guidance.
- Separated the ordinance-designated scope, purpose, local-ordinance role, excluded use districts, target-building criteria, measurement plane, 5m/10m distance bands, ordinance-selected shadow times, and special-permission framework.
- Kept `takken-q-71-002` unchanged and unmapped in this extraction checkpoint. Its four choices directly measure only `takken-k-shadow-restrictions-ordinance-designated-scope`.
- The other eight new knowledge items remain explicit Phase 4.3 deficits.
- Phase 4.3 question generation, print generation, and app linkage were not started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 91/113 fully reconciled concepts
- Concepts with canonical knowledge items: 92
- Canonical knowledge items: 487
- Existing verified questions mapped: 111
- Explicit unmapped knowledge gaps: 326
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Map verified `takken-q-71-002` only to `takken-k-shadow-restrictions-ordinance-designated-scope`, the single knowledge item directly measured by its choices. Keep the other eight shadow-restrictions knowledge items as explicit Phase 4.3 deficits. Do not begin Phase 4.3.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
