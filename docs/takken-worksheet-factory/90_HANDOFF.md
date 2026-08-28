# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. The work branch was created from the then-current `main` commit after unrelated parallel changes had already landed.

Completed `takken-concept-brokerage-contract-document` using source unit `brokerage-contract-basics` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-brokerage-contract-document.js` with thirteen verified atomic knowledge items:

1. `takken-k-brokerage-contract-document-delivery-duty` — 売買・交換の媒介契約締結時、遅滞なく法定事項を記載した書面を作成・記名押印し依頼者へ交付する義務。貸借媒介は34条の2第1項の対象外。
2. `takken-k-brokerage-contract-document-property-identification` — 対象宅地・建物を特定する表示。
3. `takken-k-brokerage-contract-document-price-or-valuation` — 売買価額または交換評価額。
4. `takken-k-brokerage-contract-document-multiple-broker-permission` — 他業者への重ねての媒介・代理依頼の可否と、許す場合の他業者明示義務の有無。
5. `takken-k-brokerage-contract-document-inspection-arrangement` — 既存建物について建物状況調査実施者のあっせんに関する事項。
6. `takken-k-brokerage-contract-document-validity-termination` — 媒介契約の有効期間・解除。
7. `takken-k-brokerage-contract-document-reins-entry` — 指定流通機構への登録に関する事項。
8. `takken-k-brokerage-contract-document-remuneration-entry` — 報酬に関する事項。
9. `takken-k-brokerage-contract-document-exclusive-breach-measure` — 専任媒介で他業者経由により成約した場合の措置。
10. `takken-k-brokerage-contract-document-sole-agency-breach-measure` — 専属専任媒介で宅建業者が探索した相手方以外と成約した場合の措置。
11. `takken-k-brokerage-contract-document-open-undisclosed-broker-measure` — 他業者明示義務付き一般媒介で未明示業者経由により成約した場合の措置。
12. `takken-k-brokerage-contract-document-standard-terms-basis` — 国土交通大臣の標準媒介契約約款に基づく契約か否か。
13. `takken-k-brokerage-contract-document-electronic-provision` — 依頼者の承諾と法定方式を満たす電磁的方法による提供。

Primary authority is the current 宅地建物取引業法 Article 34-2 and current 宅地建物取引業法施行規則 Article 15-9 and the electronic-provision provisions. MLIT's official electronic-document guidance is retained as supplementary official guidance. The combined REINS/remuneration and regulation-additional buckets were deliberately split before merge so each knowledge item remains atomic enough for later question/print coverage tracking.

Existing verified-question evidence was reconciled conservatively. `takken-q-15-001` directly tests only the general rule that a broker concluding a sale/exchange brokerage contract must deliver the prescribed document without delay, so it maps only to `takken-k-brokerage-contract-document-delivery-duty`. It does not directly test the individual statutory entries or electronic provision. Those twelve detailed items remain explicit Phase 4.3 deficits. The prior fifty-seven deficits are preserved unchanged.

No Phase 2/3 question content or validation state was changed. No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 17/113 concepts modeled
- Canonical knowledge items: 92
- Existing verified questions mapped: 16
- Explicit unmapped knowledge gaps: 69
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-brokerage-price-opinion` using source unit `brokerage-contract-basics`.

Preserve all 92 knowledge items, sixteen valid mappings, and all sixty-nine explicit deficits. Model the rule requiring a宅建業者 who states an opinion on sale price or exchange valuation to explain the basis for that opinion, using 2026-04-01 primary/official authority. Map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
