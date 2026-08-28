# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All **163/163** current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at **113 concepts**. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

Canonical docs: `00_MASTER_INSTRUCTIONS.md`, `20_EXECUTION_PLAN.md`, `30_QUESTION_AND_QA_SPEC.md`, `40_POWER_KNOWLEDGE_PRINT_APP_SPEC.md`, `STATUS.json`, `90_HANDOFF.md`.
Canonical implementation: `qualifications/takken/`.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified.

Completed **`takken-concept-business-guarantee-deposit`** using source unit `business-guarantee-deposit` and the 2026-04-01 law cutoff. Added `qualifications/takken/data/power-knowledge-items-business-guarantee-deposit.js` with eight verified atomic knowledge items:

1. `takken-k-business-guarantee-deposit-statutory-system` — 宅建業法上の営業保証金供託制度と営業開始前の位置付け。
2. `takken-k-business-guarantee-deposit-place` — 主たる事務所の最寄りの供託所に供託する。
3. `takken-k-business-guarantee-deposit-amount` — 主たる事務所1,000万円、その他の事務所1か所ごと500万円。
4. `takken-k-business-guarantee-deposit-cash-or-securities` — 金銭または法令で認められた有価証券による供託。
5. `takken-k-business-guarantee-deposit-security-valuation` — 国債100%、地方債・政府保証債90%、その他の法定債券80%を原則とする評価。
6. `takken-k-business-guarantee-deposit-notice-after-deposit` — 供託後に供託書の写しを添えて免許権者へ届け出る。
7. `takken-k-business-guarantee-deposit-business-start-gate` — その届出後でなければ事業を開始できない。
8. `takken-k-business-guarantee-deposit-new-office-additional-deposit` — 営業保証金制度利用中に新設した事務所分の追加供託・届出と営業開始制限。

Primary authority is the current 宅地建物取引業法 Article 25/26, current 宅地建物取引業法施行令 Article 2-4, and current 宅地建物取引業法施行規則 Articles 15 and 15-2. Current MLIT Kinki Regional Development Bureau guidance independently confirms the practical opening requirement and the 10,000,000 / 5,000,000 yen amounts.

Existing verified-question evidence was reconciled conservatively. **`takken-q-12-001` directly tests only that the statutory営業保証金供託制度 exists**, so it maps only to `takken-k-business-guarantee-deposit-statutory-system`. It does not test the deposit place, amounts, securities, notice/start gate or new-office procedure. Those seven detailed knowledge items remain explicit Phase 4.3 deficits. The prior thirty-four deficits are preserved unchanged.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — **14/113 concepts modeled**
- Canonical knowledge items: **61**
- Existing verified questions mapped: **13**
- Explicit unmapped knowledge gaps: **41**
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at **`takken-concept-business-guarantee-refund`** using source unit `business-guarantee-refund`.

Preserve all 61 knowledge items, thirteen valid mappings, and all forty-one explicit deficits. Model 営業保証金の還付・不足額補充 from 2026-04-01 primary/official sources and map existing verified questions only where they actually test the resulting knowledge. Do not start Phase 4.3 yet.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.
