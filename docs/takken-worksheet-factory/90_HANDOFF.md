# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed `takken-concept-civil-nonconformity` from source unit `contract-nonconformity-civil` without modifying Phase 2/3 question content or validation state.

Civil Code Articles 562 and 563 were normalized into nine verified atomic knowledge items:

1. 種類・品質・数量について契約不適合があるときの修補・代替物引渡し・不足分引渡しによる追完請求。
2. 買主に不相当な負担を課さない場合の、売主による異なる方法での追完。
3. 不適合が買主の責めに帰すべき事由による場合の追完請求不可。
4. 相当期間を定めた追完催告後、期間内に追完がない場合の不適合の程度に応じた代金減額請求。
5. 追完不能時の無催告代金減額。
6. 売主が追完拒絶意思を明確に表示した場合の無催告代金減額。
7. 契約目的達成に不可欠な時期を追完なく経過した場合の無催告代金減額。
8. 催告しても追完を受ける見込みがないことが明らかな場合の無催告代金減額。
9. 不適合が買主の責めに帰すべき事由による場合の代金減額請求不可。

Canonical `takken-q-49-001` directly tests the first item only, so it maps to `takken-k-civil-nonconformity-cure-right`. Canonical `takken-q-49-002` directly tests the demand-first price-reduction rule only, so it maps to `takken-k-civil-nonconformity-price-reduction-demand-principle`.

The remaining seven civil-nonconformity knowledge items have no direct existing verified-question evidence and remain explicit Phase 4.3 coverage deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 63/113 concepts modeled
- Canonical knowledge items: 334
- Existing verified questions mapped: 69
- Explicit unmapped knowledge gaps: 247
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-lease-general` using source unit `lease-general`.

Preserve all 334 knowledge items, sixty-nine current mappings, and all two hundred forty-seven explicit deficits. Existing verified `takken-q-50-001` and `takken-q-50-002` may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical unit 49 facts `u49-f1` and `u49-f2` directly support the basic cure right and demand-first price-reduction rule. The full Civil Code Article 562 additionally supplies the seller's alternative-cure rule and the buyer-attributable exclusion. Article 563 supplies four no-demand price-reduction cases and the buyer-attributable exclusion.

Existing `takken-q-49-001` expressly asks what the buyer may claim when the delivered object is nonconforming as to type, quality, or quantity and states the three cure forms in the correct choice. It does not directly test the seller's alternative-cure rule or buyer-attributable exclusion. Existing `takken-q-49-002` expressly asks the statutory principle for price reduction and states the reasonable-period demand plus failure-to-cure requirement; it does not directly test any no-demand exception or buyer-attributable exclusion.

The civil-nonconformity knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, Civil Code statute sourcing, valid `u49-f1`/`u49-f2` provenance, and the expected nine-item count. The question-knowledge map now contains 69 verified source-question mappings through `takken-q-49-002`.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
