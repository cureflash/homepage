# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed `takken-concept-guarantee-association` using source unit `guarantee-association` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-guarantee-association.js` with eleven verified atomic knowledge items:

1. `takken-k-guarantee-association-statutory-system` — 宅建業法上の保証協会・弁済業務保証金制度。
2. `takken-k-guarantee-association-contribution-amount` — 弁済業務保証金分担金は主たる事務所60万円・その他の事務所ごと30万円。
3. `takken-k-guarantee-association-joining-contribution-deadline` — 新規加入時は加入しようとする日までに分担金を納付。
4. `takken-k-guarantee-association-new-office-contribution-two-weeks` — 社員が新事務所を設置した場合はその日から2週間以内に追加分担金を納付。
5. `takken-k-guarantee-association-association-deposit-one-week` — 保証協会は分担金納付を受けた日から1週間以内に同額の弁済業務保証金を供託。
6. `takken-k-guarantee-association-refund-right-and-limit` — 非宅建業者の取引債権について、加入前取引も含み、通常の営業保証金相当額の範囲内で弁済を受ける権利。
7. `takken-k-guarantee-association-refund-certification-required` — 権利実行前に保証協会の認証が必要。
8. `takken-k-guarantee-association-association-replenishment-two-weeks` — 還付後、保証協会は規則所定の通知書受領日から2週間以内に還付相当額を供託。
9. `takken-k-guarantee-association-refund-charge-two-weeks` — 還付に係る社員・元社員は通知受領日から2週間以内に還付充当金を保証協会へ納付。
10. `takken-k-guarantee-association-refund-charge-nonpayment-loss` — 社員が法定期間内に還付充当金を納付しないと社員地位を失う。
11. `takken-k-guarantee-association-member-deposit-exemption-and-loss` — 弁済業務開始日以後の社員は営業保証金供託不要だが、社員地位喪失時は1週間以内に営業保証金を供託。

Primary authority is the current 宅地建物取引業法 Articles 64-7 through 64-15, the current 宅地建物取引業法施行令 Article 7, and the current 宅地建物取引業保証協会弁済業務保証金規則. The law text currently effective from 2026-04-01 retains the non-broker claimant exclusion and the one-/two-week deadlines used here.

Existing verified-question evidence was reconciled conservatively. `takken-q-14-001` asks only whether the statutory guarantee-association / repayment-security-deposit system exists, so it maps only to `takken-k-guarantee-association-statutory-system`. It does not directly test amounts, deadlines, refund scope/certification, replenishment, refund charge, or loss-of-membership consequences. Those ten detailed items remain explicit Phase 4.3 deficits. The prior forty-six deficits are preserved unchanged.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 16/113 concepts modeled
- Canonical knowledge items: 78
- Existing verified questions mapped: 15
- Explicit unmapped knowledge gaps: 56
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-brokerage-contract-document` using source unit `brokerage-contract-basics`.

Preserve all 78 knowledge items, fifteen valid mappings, and all fifty-six explicit deficits. Model 媒介契約書面 from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
