# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed canonical knowledge-item extraction for `takken-concept-reserved-portion` from Civil Code Article 1042.

Created four verified atomic knowledge items:

- brothers and sisters are excluded from reserved-portion entitlement; the other heirs may have a reserved portion;
- when only lineal ascendants are heirs, the aggregate reserved-portion ratio is one third;
- in the other Article 1042 cases, the aggregate ratio is one half;
- when multiple reserved-portion heirs exist, each heir's ratio is the aggregate ratio multiplied by that heir's statutory inheritance share.

The canonical source unit `will-reserved-portion` directly contains only `u58-f2`, the eligible-heirs rule. The additional Article 1042 ratio/allocation items are preserved as atomic statutory knowledge because they belong to the same exam concept, but they currently have no Phase 2/3 question evidence and therefore remain explicit Phase 4.3 deficits.

`takken-q-58-002` is independently verified and directly tests only the eligible-heirs rule. Its mapping is deliberately deferred to the next reconciliation checkpoint rather than treating extraction itself as completed question evidence.

No Phase 2/3 question content or validation status changed. No Phase 4.3 generation, print generation, or app linkage was started.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 76/113 completed concepts; 77 concepts now have canonical knowledge items
- Canonical knowledge items: 388
- Existing verified questions mapped: 85
- Explicit unmapped knowledge gaps: 269
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Reconcile `takken-q-58-002` only to `takken-k-reserved-portion-heirs-excluding-siblings`, because that is the only extracted knowledge item it directly measures. Leave the one-third, one-half, and multiple-heir allocation items as explicit Phase 4.3 deficits. Then mark `takken-concept-reserved-portion` complete and advance to the next concept in `power-concepts.js`. Keep Phase 4.3 blocked.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
