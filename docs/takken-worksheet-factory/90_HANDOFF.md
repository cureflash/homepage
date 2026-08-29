# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-installment-ownership-retention` using source unit `installment-sales-ownership` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-installment-ownership-retention.js` with ten verified atomic knowledge items:

1. Scope: 宅建業法43条は、宅建業者が自ら売主となる所定の割賦販売等に適用され、買主が宅建業者の場合は78条2項により適用されない。
2. Basic timing: 自ら売主の割賦販売では、原則として引渡しまでに登記その他の引渡し以外の売主義務を履行する。
3. 30% extension: 引渡しまでに代金額の30%を超える支払を受けていなければ、その30%超支払時点まで義務履行期限が延びる。
4. Exact threshold: 法文は30%以上ではなく30%を「超える」額を基準とするため、ちょうど30%では閾値を超えない。
5. Security exception: 所有権登記後の残代金債務について、買主が抵当権・不動産売買の先取特権の登記申請または保証人提供をする見込みがない場合は43条1項本文の制限に例外がある。
6. Security retransfer: 引渡し後かつ代金30%超支払後は、売主業者は担保目的で物件を買主から譲り受けてはならない。
7. Guaranteed-loan scope: 代金に充てる買主借入債務を売主業者が保証し、引渡し後1年以上かつ2回以上の分割返済である売買も43条3項・4項の対象となる。
8. Guaranteed-loan threshold: 受領代金から保証債務の未弁済額を控除した額が代金30%を超えるかで義務履行時期を判定する。
9. Guaranteed-loan security exception: 求償権と残代金債権について買主が所定の担保提供等をする見込みがない場合は43条3項本文の例外となる。
10. Guaranteed-loan retransfer: 引渡し後かつ上記控除後額が代金30%を超えた後は、担保目的の譲受けが禁止される。

Primary authority is the current 宅地建物取引業法 Articles 43 and 78(2), at the 2026-04-01 cutoff. Canonical source fact `u31-f2` is preserved as the source-unit anchor.

Existing verified `takken-q-31-002` was not mapped. Its stem states only that the seller is a宅建業者自ら売主 and asks for the important percentage, but omits the buyer-is-not-a宅建業者 condition required for Article 43 applicability. Its Phase 2/3 verified state and contents were not changed. All ten canonical knowledge items therefore remain explicit Phase 4.3 deficits.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 39/113 concepts modeled
- Canonical knowledge items: 213
- Existing verified questions mapped: 35
- Explicit unmapped knowledge gaps: 166
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-brokerage-fees` using source unit `brokerage-fees`.

Preserve all 213 knowledge items, thirty-five valid mappings, and all one hundred sixty-six explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

The new knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, statute sourcing, and the expected ten-item count. `power-question-knowledge-map.js` was deliberately left unchanged because existing `takken-q-31-002` does not establish the statutory buyer-side applicability condition. No Phase 2/3 question data was modified in this checkpoint.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.