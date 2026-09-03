# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

Grade 1 is active by explicit user override. The stale Grade-2-complete wording still present in `20_EXECUTION_PLAN.md` does not mark Grade 2/3 complete and does not supersede the explicit Grade 1 canonical state.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Culture p.006→p.021, color-harmony p.024→p.030, light/color p.032→p.041, color-representation p.046→p.059, color-names p.060→p.062, measurement p.066→p.069, psychology p.072→p.087, business-process p.090→p.102, color-marketing p.104→p.114, CMF® p.119→p.122, and fashion p.124→p.132 have now been processed in order. The next official frontier is p.133 `VMD`.

## Per-topic workflow
1. Reconcile latest main, open Power Color PRs, and in-progress Grade 1 branches.
2. Source audit first and classify `SOURCE_RESOLVED`, `SECONDARY_CORROBORATION_REQUIRED`, or `SOURCE_BLOCKED`.
3. Prefer current AFT official scope/sample authority; use auditable museum, government, standards-body, university, academic-society, original-source, or system-owner material only to resolve individual public facts. Do not reconstruct unpublished AFT content.
4. Author only source-resolved deterministic facts, pending-first.
5. Independently re-solve each question before assigning `verified`, `needs_revision`, or `rejected`.
6. Check schema, full-fingerprint duplicates, coverage, answer-position distribution, and shared Power TOEIC engine regression.
7. Promote only verified records, record-identically, into Grade 1 runtime when the canonical Grade 1 runtime promotion path exists.
8. Merge only green/current-head work and synchronize STATUS/HANDOFF/PLAN/source inventory.

## Global gates
- No invented RGB/HEX/display values.
- No answers from image appearance or unstated geometry.
- No monitor-facing questions without authoritative display values.
- No Grade 1-specific engine fork; use the shared Power TOEIC question-bank/workout/session engine.
- Lower-grade source-confirmed structure may be reused, but cannot substitute for Grade 1-specific authority.
- Do not repeat a rejected source route without new evidence.
- No monkeypatches.

## Known source-risk frontier
Explicit blocked/risk candidates: JIS light-source color-name exact current content; AFT-specific business/color-marketing/CMF processes; fashion practical procedures; `資料・CMF® 素材と工法`; Grade 1 second-stage printed-color/display authority.

Confirmed current blockers include p.035 `色の分類`; p.062 JIS light-source color-name topics; p.083 `色の見えの変化`; p.090 `色彩効果のビジネス活用`; p.096/p.100/p.102 business-process topics; p.114 `カラー戦略`; p.120-p.122 CMF® process topics; and p.132 `カラー情報の整理と分析` / `シーズンテーマカラーの決定`. For each, public AFT authority establishes topic membership/order but not a sufficiently explicit deterministic AFT-specific rule/process set. Generic substitutes remain rejected.

## Completed Grade 1 checkpoints
- [x] p.006→p.021 culture: six official topics audited/authored; 8 verified text-only records each.
- [x] p.024→p.030 harmony: Judd 4/4; Chevreul 3/3; Rood 3/3; Ostwald 4/4; Itten 4/4; Moon & Spencer 4/4 verified within recorded source boundaries.
- [x] p.032→p.087 light/color, representation, names, measurement and psychology processed in official order, with recorded source-blocked exceptions p.035, p.062 and p.083.
- [x] p.090→p.114 business/color-marketing processed in official order; source-resolved authoring only where recorded, with p.090, p.096, p.100, p.102 and p.114 source-blocked.
- [x] p.119 `CMF® — 概念から実体へ（コトからモノへ）`: `SOURCE_RESOLVED` directly from current AFT official sample; 4/4 verified; CI `33798741809`; PR #702 merged as `6000009e188a53d48dfecda237a1aa9bf76b873e`.
- [x] p.120 `商品企画におけるCMF®`: `SOURCE_BLOCKED`; no public deterministic AFT-specific product-planning rule/process set; no authoring.
- [x] p.121 `CMF®でのカラーバリエーションの検討`: `SOURCE_BLOCKED`; no public deterministic AFT-specific variation-planning rule set; no authoring.
- [x] p.122 `制作におけるCMF®（コトからモノの制作）`: `SOURCE_BLOCKED`; no public deterministic AFT-specific production/material/finish process set; no authoring.
- [x] p.124 `ファッションカラーの変遷`: `SECONDARY_CORROBORATION_REQUIRED`; eight audited JAFCA/BNN stage↔keyword relations authored pending-first and independently QAed 8/8 verified, A/B/C/D=2/2/2/2; CI `33802026799`; PR #705 merged as `e91f2be5fb78bba2ea47dfc2d0fd8a276747268b`.
- [x] p.129 `カラー情報の収集・調査`: `SECONDARY_CORROBORATION_REQUIRED`; narrow JAFCA/Intercolor information-source slice authored pending-first and independently QAed 4/4 verified, A/B/C/D=1/1/1/1; same CI/PR.
- [x] p.132 `カラー情報の整理と分析` and `シーズンテーマカラーの決定`: `SOURCE_BLOCKED`; public authority does not expose sufficiently explicit AFT-specific analysis/decision procedures; no authoring.

No Grade 1 runtime promotion has occurred yet.

## Exact next start point
Source-audit p.133 `VMD` before any authoring.