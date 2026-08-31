# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Started `takken-concept-statutory-inheritance-shares` from source unit `inheritance-heirs-shares` and added five canonical knowledge items from Civil Code Article 900:

- spouse + children: spouse 1/2, children collectively 1/2
- spouse + lineal ascendants: spouse 2/3, lineal ascendants collectively 1/3
- spouse + siblings: spouse 3/4, siblings collectively 1/4
- multiple same-rank children, lineal ascendants or siblings: equal shares as the principle
- half-blood sibling: one-half of a full-blood sibling's share

All five use the 2026-04-01 e-Gov Civil Code as the primary statutory source and are stored as verified canonical knowledge. Only the spouse/child item has `u56-f2` as a direct source fact; the four Article 900 rules not stated in the old core-fact unit intentionally have no `sourceFactIds` rather than falsely attributing them to `u56-f2`.

Existing question mappings were intentionally unchanged. `takken-q-56-002` is already uniquely mapped under completed `takken-concept-heirs-order`; this checkpoint does not duplicate or reassign that question and does not change any Phase 2/3 question content.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 72/113 completed concepts
- Canonical knowledge items: 374
- Existing verified questions mapped: 82
- Explicit unmapped knowledge gaps: 258
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile existing verified-question evidence for `takken-concept-statutory-inheritance-shares`. Do not duplicate or reassign `takken-q-56-002`. Map only another existing verified question if it directly tests one or more of the five canonical share items. If no such question exists, retain all five as explicit Phase 4.3 deficits, mark the concept reconciliation complete, and advance to `takken-concept-inheritance-deliberation`. Keep Phase 4.3 blocked.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
