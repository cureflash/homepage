# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

Grade 1 is active by explicit user override. `20_EXECUTION_PLAN.md` is synchronized to this override; this does not mark Grade 2/3 complete and does not relax any lower-grade source/display gate.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Culture p.006→p.021, color-harmony p.024→p.030, light/color p.032→p.041, color-representation p.046→p.059, color-names p.060→p.062, measurement p.066→p.069, psychology p.072→p.087, business-process p.090→p.102, color-marketing p.104→p.114, CMF® p.119→p.122, fashion p.124→p.137, landscape p.140→p.148,資料・光と色 p.152/p.157, and 資料・CMF® p.160 have now been processed in official order. The current official TOC content frontier is exhausted through p.160. Runtime promotion must also proceed in official TOC order using only existing verified authoring records.

## Per-topic workflow
1. Reconcile latest main, open Power Color PRs, and in-progress Grade 1 branches.
2. Source audit first and classify `SOURCE_RESOLVED`, `SECONDARY_CORROBORATION_REQUIRED`, or `SOURCE_BLOCKED`.
3. Prefer current AFT official scope/sample authority; use auditable museum, government, standards-body, university, academic-society, original-source, or system-owner material only to resolve individual public facts. Do not reconstruct unpublished AFT content.
4. Author only source-resolved deterministic facts, pending-first.
5. Independently re-solve each question before assigning `verified`, `needs_revision`, or `rejected`.
6. Check schema, full-fingerprint duplicates, coverage, answer-position distribution, and shared Power TOEIC engine regression.
7. Promote only verified records, record-identically, into Grade 1 runtime through the canonical Grade 1 runtime promotion gate.
8. Merge only green/current-head work and synchronize STATUS/HANDOFF/PLAN/source inventory.

## Global gates
- No invented RGB/HEX/display values.
- No answers from image appearance or unstated geometry.
- No monitor-facing questions without authoritative display values.
- No Grade 1-specific engine fork; use the shared Power TOEIC question-bank/workout/session engine.
- Lower-grade source-confirmed structure may be reused, but cannot substitute for Grade 1-specific authority.
- Do not repeat a rejected source route without new evidence.
- Do not universalize local-government example thresholds, exception sets or ratios beyond the cited jurisdiction.
- No monkeypatches.

## Known source-risk frontier
Explicit blocked/risk candidates: JIS light-source color-name exact current content; AFT-specific business/color-marketing/CMF processes; fashion practical procedures; `資料・CMF® 素材と工法`; Grade 1 second-stage printed-color/display authority; p.134 `繊維の長さと発色性` exact relation; p.136 AFT-specific VMD initiative set; p.137 AFT-specific product-display color-coordination rules; p.148 AFT-specific near/mid/far color-planning consideration rules.

Confirmed current blockers include p.035 `色の分類`; p.062 JIS light-source color-name topics; p.083 `色の見えの変化`; p.090 `色彩効果のビジネス活用`; p.096/p.100/p.102 business-process topics; p.114 `カラー戦略`; p.120-p.122 CMF® process topics; p.132 `カラー情報の整理と分析` / `シーズンテーマカラーの決定`; p.134 `繊維の長さと発色性`; p.136 `ビジュアルマーチャンダイジング（VMD）の取り組み`; p.137 `商品陳列のカラーコーディネーション`; p.148 `遠景・中景・近景を踏まえた色彩計画における配慮事項`; and p.160 `資料・CMF® — 素材と工法`. Generic substitutes remain rejected.

## Completed Grade 1 checkpoints
- [x] p.006→p.021 culture: six official topics audited/authored; 8 verified text-only records each.
- [x] p.024→p.030 harmony: Judd 4/4; Chevreul 3/3; Rood 3/3; Ostwald 4/4; Itten 4/4; Moon & Spencer 4/4 verified within recorded source boundaries.
- [x] p.032→p.087 light/color, representation, names, measurement and psychology processed in official order, with recorded source-blocked exceptions p.035, p.062 and p.083.
- [x] p.090→p.114 business/color-marketing processed in official order; source-resolved authoring only where recorded, with p.090, p.096, p.100, p.102 and p.114 source-blocked.
- [x] p.119→p.122 CMF® processed in official order; only p.119 source-resolved and authored 4/4 verified; p.120-p.122 source-blocked.
- [x] p.124→p.137 fashion processed in official order; source-resolved/corroborated slices authored only where recorded; p.132, p.134, p.136 and p.137 remain source-blocked.
- [x] p.140→p.148 landscape processed in official order; source-resolved/corroborated slices authored only where recorded; p.148 distance-aware color-planning considerations remain source-blocked.
- [x] p.152 `資料・光と色（1） — 色の知覚`: `SOURCE_RESOLVED` from current AFT official sample; 4/4 verified, A/B/C/D=1/1/1/1.
- [x] p.157 `資料・光と色（2） — 相関色温度と演色評価数`: `SOURCE_RESOLVED` to narrow CIE/JLMA definitions; 4/4 verified, A/B/C/D=1/1/1/1.
- [x] p.160 `資料・CMF® — 素材と工法`: `SOURCE_BLOCKED`; no public authority exposes the AFT-aligned deterministic material/process set; no authoring.
- [x] p.152+p.157 authoring gates and normal Power Color regression passed workflow `33815760564`; PR #728 merged as `041b51b9a5346d602b5d8fdc7c2d0c6be9751e95`.
- [x] Established `qualifications/color-certification/data/grade1-runtime.json` and `grade1-runtime-promotion.test.js` on the existing shared Power TOEIC engine; promoted p.006 `pc1.culture.ancient_europe_materials` 8/8 verified records record-identically. Deep-equality, full-fingerprint, answer-balance and shared-engine gates passed workflow `33817291831`; PR #730 merged as `273e5f4ebd3204e0f2405c7f72b93eab13d8e1a4`.
- [x] Promoted p.007 `pc1.culture.medieval_early_modern_europe_materials` 8/8 verified records record-identically. Runtime gates cover 16 questions across two skills; Power Color CI `33818785475` succeeded and PR #733 merged as `9f57a5b3e1cf3ec466eabee16a07e099aca4e905`.
- [x] Promoted p.010 `pc1.culture.modern_europe_color_science` 8/8 verified records record-identically. Runtime deep-equality, full-fingerprint, answer-balance and shared-engine gates cover 24 questions across three skills; Power Color CI `33819252791` succeeded and PR #735 merged as `aace9b201ef31c8c7df804c043be61cc359218a0`.
- [x] Promoted p.014 `pc1.culture.ancient_japan_colour` 8/8 verified records record-identically. Runtime deep-equality, full-fingerprint, A/B/C/D=8/8/8/8 and shared-engine gates cover 32 questions across four skills; Power Color CI `33820380559` succeeded and PR #737 merged as `ce44043d07336ae94cda80dadb5c0930adb15f47`.
- [x] Promoted p.017 `pc1.culture.ancient_to_early_modern_japan` 8/8 verified records record-identically. Runtime deep-equality, full-fingerprint, A/B/C/D=10/10/10/10 and shared-engine gates cover 40 questions across five skills; Power Color CI `33821730264` succeeded and PR #739 merged as `bd1104577755b88eb6e22e0832208b996893007f`.
- [x] Promoted p.021 `pc1.culture.modern_japan_colour` 8/8 verified records record-identically. Runtime deep-equality, full-fingerprint, A/B/C/D=12/12/12/12 and shared-engine gates cover 48 questions across six skills; Power Color CI `33823076377` succeeded and PR #742 merged as `cff1af7f0d56c45f5491aa6999a5f027ed5681db`.
- [x] Promoted p.024 `pc1.harmony.judd_p024` 4/4 verified records record-identically. Runtime deep-equality, full-fingerprint, A/B/C/D=13/13/13/13 and shared-engine gates cover 52 questions across seven skills; Power Color CI `33825588357` succeeded and PR #744 merged as `7c8f1a054dbbbfeeff5b1506576f0949531b1dad`.

Grade 1 runtime is 52 verified / pending 0 across seven promoted skills. `productionApproved` remains false.

## Exact next start point
Promote the existing p.025 `pc1.harmony.chevreul_p025` 3/3 verified records record-identically through the canonical Grade 1 runtime gate. Source contract: `docs/power-color/audits/2026-09-03-grade1-p025-chevreul-source-audit.md`. Authoring: `qualifications/color-certification/data/grade1-authoring-harmony-chevreul-p025-0001-0003.json`. Preserve all source/display blockers and do not create a Grade 1-specific engine.
