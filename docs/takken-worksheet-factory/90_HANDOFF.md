# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed existing-question reconciliation for `takken-concept-reserved-portion`.

`takken-q-58-002` is independently verified and directly tests only `takken-k-reserved-portion-heirs-excluding-siblings`, so it is now mapped to that single knowledge item.

The other three verified Article 1042 knowledge items remain explicit Phase 4.3 deficits because the existing Phase 2/3 question bank does not directly test them:

- the one-third aggregate reserved-portion ratio when only lineal ascendants are heirs;
- the general one-half aggregate ratio;
- allocation among multiple reserved-portion heirs by statutory inheritance share.

No Phase 2/3 question content or validation status changed. No Phase 4.3 generation, print generation, or app linkage was started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 77/113 completed concepts
- Concepts with canonical knowledge items: 77
- Canonical knowledge items: 388
- Existing verified questions mapped: 86
- Explicit unmapped knowledge gaps: 268
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Begin canonical knowledge-item extraction for `takken-concept-condominium-ownership` from source unit `condominium-law`. Reconcile only existing verified questions that directly measure each extracted item. Keep Phase 4.3 blocked.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
