# 宅建 Worksheet Factory — HANDOFF

## Current state

Phase 1 unit generation, Phase 2 core-fact four-choice question generation, and Phase 3 solve-all independent validation are complete. All 163/163 current questions are independently checked and verified; pending is zero and `validation_complete: true`.

Phase 4.1 Concept inventory is complete at 113 concepts. Phase 4.2 Canonical knowledge items is active. Do not start 50-question expansion, print generation, or app linkage until the canonical knowledge model and existing verified-question evidence are reconciled concept by concept.

## Completed in this run

Re-read latest `main`; Phase 4 gate remains satisfied and no Phase 2/3 question was modified. Completed `takken-concept-brokerage-fees` using source unit `brokerage-fees` at the 2026-04-01 law cutoff.

Added `qualifications/takken/data/power-knowledge-items-brokerage-fees.js` with fifteen verified atomic knowledge items. They cover:

1. 宅建業法46条により代理・媒介の報酬額を国土交通大臣が定めること。
2. 大臣が定める額を超える報酬の受領禁止。
3. 報酬額の事務所掲示義務。
4. 売買・交換媒介の200万円以下5.5%、200万円超400万円以下4.4%、400万円超3.3%の区分計算。
5. 交換では価額が異なるとき高い方を基礎とすること。
6. 売買・交換代理の原則2倍上限と双方合計上限。
7. 貸借媒介の双方合計1.1か月上限。
8. 居住用建物の貸借媒介で一方当事者から原則0.55か月、依頼時承諾による例外があること。
9. 貸借代理の原則1.1か月上限。
10. 非居住用貸借の返還されない権利金を売買代金とみなす特例。
11. 800万円以下の低廉な空家等の売買・交換媒介特例。
12. 低廉な空家等の売買・交換代理特例。
13. 長期の空家等の貸借媒介特例。
14. 長期の空家等の貸借代理特例。
15. 依頼者の依頼による広告料金相当額の別途受領。

Primary authority is the current 宅地建物取引業法 Article 46 and the current MLIT remuneration notice (昭和45年建設省告示第1552号、最終改正令和6年国土交通省告示第949号). Canonical source facts `u32-f1` and `u32-f2` are preserved as source-unit anchors.

Existing verified `takken-q-32-001` was mapped only to the minister-setting rule. Existing verified `takken-q-32-002` was mapped only to the excess-receipt prohibition. Neither question directly tests the calculation rates, lease limits, vacant-home special rules, display duty, or advertising-cost exception, so those thirteen items remain explicit Phase 4.3 deficits. Phase 2/3 question contents and verified states were not changed.

No Phase 4.3 questions, prints, or app linkage were created.

## Status after this run

- Phase 1: complete
- Phase 2: complete — 163 questions
- Phase 3: complete — checked 163 / verified 163 / revision 0 / rejected 0 / pending 0
- `validation_complete`: true
- Phase 4.1: complete — 113 concepts
- Phase 4.2: active — 40/113 concepts modeled
- Canonical knowledge items: 228
- Existing verified questions mapped: 37
- Explicit unmapped knowledge gaps: 179
- Phase 4.3: not started
- Prints/app integration: not started

## Exact next start

Continue Phase 4.2 at `takken-concept-supervision-dispositions` using source unit `supervision-penalties`.

Preserve all 228 knowledge items, thirty-seven valid mappings, and all one hundred seventy-nine explicit deficits. Existing verified questions may be mapped only to knowledge they directly test. Do not start Phase 4.3 yet.

## Validation note

The new knowledge file enforces unique IDs, 2026/2026-04-01 metadata, verified status, statute sourcing, and the expected fifteen-item count. `power-question-knowledge-map.js` now adds only the two existing verified unit-32 questions to the two canonical knowledge items they directly test. No Phase 2/3 question data was modified in this checkpoint.

## Publication invariant

Only independently verified material may enter a public or production pool. A verified knowledge item without verified question evidence remains an explicit Phase 4.3 deficit and cannot satisfy bidirectional publication coverage.