# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Completed `takken-concept-co-ownership` from source unit `co-ownership` without modifying Phase 2/3 question content or validation state.

The new knowledge file contains seven verified atomic knowledge items based on Civil Code Articles 249 through 252:

1. 各共有者は共有物の全部について、その持分に応じて使用できる。
2. 共有物を使用する共有者は、別段の合意がない限り、自己の持分を超える使用の対価を他の共有者へ償還する。
3. 共有者は善良な管理者の注意をもって共有物を使用する。
4. 持分割合が明らかでない場合、各共有者の持分は相等しいものと推定される。
5. 形状または効用の著しい変更を伴う共有物の変更は、原則として他の共有者の同意を要する。
6. 共有物の管理事項は原則として持分価格の過半数で決する。
7. 保存行為は各共有者が単独で行える。

Canonical `takken-q-43-001` directly tests the equal-share presumption, and `takken-q-43-002` directly tests whole-property use according to share. These two knowledge items are mapped one-to-one. The remaining five knowledge items are preserved as explicit Phase 4.3 coverage deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 56/113 concepts modeled
- Canonical knowledge items: 303
- Existing verified questions mapped: 57
- Explicit unmapped knowledge gaps: 229
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-mortgage` using source unit `mortgage`.

Preserve all 303 knowledge items, fifty-seven current mappings, and all two hundred twenty-nine explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

Canonical unit 43 facts `u43-f1` and `u43-f2` directly support the equal-share presumption and whole-property-use rules. Existing `takken-q-43-001` and `takken-q-43-002` directly ask those respective rules, so both have verified existing-question evidence.

The additional Article 249(2)/(3), 251 and 252 rules are sourced directly from the Civil Code rather than assigned invented core-fact IDs. They therefore remain five explicit coverage gaps for Phase 4.3. The current law includes the 2023-effective shared-property amendments: use exceeding one's share can require compensation, use carries a duty of care, substantial changes are distinguished from minor changes, management is decided by majority in value, and preservation acts remain individually available.

The co-ownership knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, Civil Code statute sourcing, valid optional `u43-f1` / `u43-f2` provenance, and the expected seven-item count. The question-knowledge map retains one mapping per existing Phase 2/3 question and adds only `takken-q-43-001` and `takken-q-43-002` for this concept.

## publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.