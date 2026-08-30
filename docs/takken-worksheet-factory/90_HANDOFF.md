# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed `takken-concept-lease-general` from source unit `lease-general` without modifying Phase 2/3 question content or validation state.

Civil Code Articles 601 and 604 were normalized into five verified atomic knowledge items:

1. 賃貸人が賃借人に目的物の使用・収益をさせること。
2. 賃借人が賃料を支払うこと。
3. 契約終了時に賃借人が賃借物を返還すること。
4. 民法上の賃貸借の存続期間は50年を超えられず、50年を超える期間を定めても50年となること。
5. 賃貸借を更新した場合も、更新後の存続期間は更新時から50年を超えられないこと。

Canonical `takken-q-50-001` directly tests the first three Article 601 items and maps to all three. Canonical `takken-q-50-002` directly tests the original-term 50-year cap and maps only to that item.

The renewal-period cap is not directly tested by either existing verified question and remains an explicit Phase 4.3 coverage deficit.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 64/113 concepts modeled
- Canonical knowledge items: 339
- Existing verified questions mapped: 71
- Explicit unmapped knowledge gaps: 248
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-lease-deposit-opposability` using source unit `lease-deposit-opposability`.

Preserve all 339 knowledge items, seventy-one current mappings, and all two hundred forty-eight explicit deficits. Existing verified `takken-q-51-001` and `takken-q-51-002` may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical unit 50 fact `u50-f1` directly supports the Article 601 contract structure: use/profit by the lessee, rent payment, and return at termination. Existing `takken-q-50-001` expressly places all three elements in its sole correct choice, so all three mappings are direct rather than inferred.

Canonical unit 50 fact `u50-f2` directly supports the 50-year duration cap. Existing `takken-q-50-002` asks only for the statutory maximum duration and therefore maps to the original-term cap. Civil Code Article 604 also provides that a renewed lease may not exceed 50 years from the time of renewal; because the existing question does not test renewal, that item remains unmapped.

The lease-general knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, Civil Code statute sourcing, valid `u50-f1`/`u50-f2` provenance, and the expected five-item count. The question-knowledge map now contains 71 verified source-question mappings through `takken-q-50-002`.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
