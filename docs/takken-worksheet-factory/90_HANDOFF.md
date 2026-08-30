# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed `takken-concept-sale-earnest` from source unit `sale-earnest` without modifying Phase 2/3 question content or validation state.

The sale-earnest knowledge model contains three verified atomic knowledge items based on Civil Code Article 557(1):

1. 買主は、買主から売主へ手付が交付されている場合、相手方である売主が履行に着手する前なら、手付を放棄して解除できる。
2. 売主は、買主から手付を受領している場合、相手方である買主が履行に着手する前なら、手付の倍額を現実に提供して解除できる。
3. 解約手付による解除は、解除しようとする当事者の相手方が契約の履行に着手する前に限られる。

Canonical `takken-q-48-001` directly tests the buyer's abandonment method and the counterparty-performance cutoff, so it maps to `takken-k-sale-earnest-buyer-abandon` and `takken-k-sale-earnest-before-counterparty-performance`. Canonical `takken-q-48-002` asks only for the seller's cancellation method, so it maps only to `takken-k-sale-earnest-seller-double-actual-tender`.

All three sale-earnest knowledge items have direct existing verified-question evidence. This checkpoint therefore adds no new Phase 4.3 coverage deficit.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 62/113 concepts modeled
- Canonical knowledge items: 325
- Existing verified questions mapped: 67
- Explicit unmapped knowledge gaps: 240
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-civil-nonconformity` using source unit `contract-nonconformity-civil`.

Preserve all 325 knowledge items, sixty-seven current mappings, and all two hundred forty explicit deficits. Existing verified `takken-q-49-001` and `takken-q-49-002` may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical unit 48 facts `u48-f1` and `u48-f2` directly support the buyer and seller cancellation methods. Civil Code Article 557(1) also supplies the common condition that cancellation under the earnest-money rule is cut off once the counterparty has begun contractual performance.

Existing `takken-q-48-001` expressly asks when the buyer may cancel and states both the hand-money abandonment method and the pre-performance cutoff in its correct choice. Existing `takken-q-48-002` asks only how the seller cancels and states the double actual tender method; it does not directly test the timing condition, so no timing knowledge is mapped from that question.

The sale-earnest knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, Civil Code statute sourcing, valid `u48-f1`/`u48-f2` provenance, and the expected three-item count. The question-knowledge map now contains 67 verified source-question mappings through `takken-q-48-002`.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
