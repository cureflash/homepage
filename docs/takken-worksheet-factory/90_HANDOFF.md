# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-unowned-property-sale` using source unit `unowned-property-restriction` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-unowned-property-sale.js` with five verified atomic knowledge items:

1. Scope: 宅建業者が自ら売主となり、買主が宅建業者ではない、自己所有に属しない宅地・建物の売買に33条の2が適用される。宅建業者相互間では78条2項により33条の2は適用されない。
2. 原則: 自己所有に属しない宅地・建物について自ら売主となる売買契約は原則締結できず、予約も含まれる。
3. 例外1: 売主業者が対象物件を取得する契約・予約を締結済みなら例外となり得るが、効力発生が条件に係る取得契約・予約は除かれる。
4. 例外2: 対象物件を取得できることが明らかで、国土交通省令・内閣府令で定める場合も例外となる。
5. 例外3: 41条1項に規定する売買で、同項1号または2号の手付金等保全措置が講じられている場合も例外となる。

Primary authority is the current 宅地建物取引業法 Articles 33-2 and 78(2), at the 2026-04-01 cutoff. Canonical source facts `u30-f1` and `u30-f2` are preserved as source-unit anchors.

Existing verified `takken-q-30-001` and `takken-q-30-002` were not mapped. Both stems state only that the seller is a宅建業者自ら売主 and omit the buyer-is-not-a宅建業者 condition necessary to establish Article 33-2 applicability. Their Phase 2/3 verified state and contents were not changed. All five canonical knowledge items therefore remain explicit Phase 4.3 deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 37/113 concepts modeled
- Canonical knowledge items: 197
- Existing verified questions mapped: 35
- Explicit unmapped knowledge gaps: 150
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-installment-cancellation` using source unit `installment-sales-ownership`.

Preserve all 197 knowledge items, thirty-five valid mappings, and all one hundred fifty explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

The new knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, statute sourcing, and the expected five-item count. `power-question-knowledge-map.js` was deliberately left unchanged because neither existing unit-30 question fully establishes the statutory applicability condition. No Phase 2/3 question data was modified in this checkpoint.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
