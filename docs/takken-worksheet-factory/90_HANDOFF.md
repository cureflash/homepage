# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed `takken-concept-business-guarantee-refund` using source unit `business-guarantee-refund` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-business-guarantee-refund.js` with six verified atomic knowledge items:

1. `takken-k-business-guarantee-refund-transaction-claim-right` — 宅建業に関する取引から生じた債権について営業保証金から弁済を受ける権利。
2. `takken-k-business-guarantee-refund-broker-excluded` — 取引時に宅地建物取引業者に該当する者は法27条1項の還付保護対象から除外。
3. `takken-k-business-guarantee-refund-unrelated-claim-excluded` — 宅建業に関係しない一般債権は還付対象外。
4. `takken-k-business-guarantee-refund-shortfall-redeposit-two-weeks` — 還付により法定額へ不足が生じた場合、法令上の通知を受けた日から2週間以内に不足額を供託。
5. `takken-k-business-guarantee-refund-shortfall-notice-two-weeks` — 不足額供託後、供託書写しを添えて2週間以内に免許権者へ届出。
6. `takken-k-business-guarantee-refund-shortfall-securities-allowed` — 法25条3項の準用により、不足額供託にも法令で認められた有価証券を利用可能。

Primary authority is the current 宅地建物取引業法 Articles 27 and 28 and current 宅地建物取引業者営業保証金規則. Current MLIT guidance on the Article 27 confirmation procedure independently confirms that the claimant must have been non-broker at the time of the relevant transaction.

Existing verified-question evidence was reconciled conservatively. `takken-q-13-001` directly tests only the general right to receive payment from the営業保証金 for a qualifying transaction-derived claim, so it maps only to `takken-k-business-guarantee-refund-transaction-claim-right`. It does not directly test broker exclusion, unrelated-claim exclusion, either two-week rule, or securities for replenishment. Those five detailed items remain explicit Phase 4.3 deficits. The prior forty-one deficits are preserved unchanged.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 15/113 concepts modeled
- Canonical knowledge items: 67
- Existing verified questions mapped: 14
- Explicit unmapped knowledge gaps: 46
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-guarantee-association` using source unit `guarantee-association`.

Preserve all 67 knowledge items, fourteen valid mappings, and all forty-six explicit deficits. Model 保証協会・弁済業務保証金 from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
