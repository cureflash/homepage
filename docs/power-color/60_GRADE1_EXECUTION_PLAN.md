# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

Grade 1 is active by explicit user override. The stale Grade-2-complete wording still present in `20_EXECUTION_PLAN.md` does not mark Grade 2/3 complete and does not supersede the explicit Grade 1 canonical state.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Culture p.006→p.021, color-harmony p.024→p.030, light/color p.032→p.041, color-representation p.046→p.059, color-names p.060→p.062, measurement p.066→p.069, psychology p.072→p.087, business-process p.090→p.102, color-marketing p.104→p.114, CMF® p.119→p.122, fashion p.124→p.137, and landscape p.140→p.146 have now been processed in order. The next official frontier is p.148 `遠景・中景・近景とは`.

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
- Do not universalize local-government example thresholds, exception sets or ratios beyond the cited jurisdiction.
- No monkeypatches.

## Known source-risk frontier
Explicit blocked/risk candidates: JIS light-source color-name exact current content; AFT-specific business/color-marketing/CMF processes; fashion practical procedures; `資料・CMF® 素材と工法`; Grade 1 second-stage printed-color/display authority; p.134 `繊維の長さと発色性` exact relation; p.136 AFT-specific VMD initiative set; p.137 AFT-specific product-display color-coordination rules.

Confirmed current blockers include p.035 `色の分類`; p.062 JIS light-source color-name topics; p.083 `色の見えの変化`; p.090 `色彩効果のビジネス活用`; p.096/p.100/p.102 business-process topics; p.114 `カラー戦略`; p.120-p.122 CMF® process topics; p.132 `カラー情報の整理と分析` / `シーズンテーマカラーの決定`; p.134 `繊維の長さと発色性`; p.136 `ビジュアルマーチャンダイジング（VMD）の取り組み`; and p.137 `商品陳列のカラーコーディネーション`. Generic substitutes remain rejected.

## Completed Grade 1 checkpoints
- [x] p.006→p.021 culture: six official topics audited/authored; 8 verified text-only records each.
- [x] p.024→p.030 harmony: Judd 4/4; Chevreul 3/3; Rood 3/3; Ostwald 4/4; Itten 4/4; Moon & Spencer 4/4 verified within recorded source boundaries.
- [x] p.032→p.087 light/color, representation, names, measurement and psychology processed in official order, with recorded source-blocked exceptions p.035, p.062 and p.083.
- [x] p.090→p.114 business/color-marketing processed in official order; source-resolved authoring only where recorded, with p.090, p.096, p.100, p.102 and p.114 source-blocked.
- [x] p.119→p.122 CMF® processed in official order; only p.119 source-resolved and authored 4/4 verified; p.120-p.122 source-blocked.
- [x] p.124 `ファッションカラーの変遷`: `SECONDARY_CORROBORATION_REQUIRED`; 8/8 verified.
- [x] p.129 `カラー情報の収集・調査`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified.
- [x] p.132 `カラー情報の整理と分析` / `シーズンテーマカラーの決定`: `SOURCE_BLOCKED`; no authoring.
- [x] p.133 `VMD`: `SECONDARY_CORROBORATION_REQUIRED`; narrow JAVMA/Sugino basic concept; 4/4 verified; CI `33803997114`; PR #708 merged as `b347fffe5b78189e75ba563d048ba163648a8732`.
- [x] p.134 `繊維の長さと発色性`: `SOURCE_BLOCKED`; filament/staple terminology does not resolve the AFT-specific color-development rule; no authoring.
- [x] p.135 `織物と編物`: `SECONDARY_CORROBORATION_REQUIRED`; narrow QTEC structural boundary; 4/4 verified; PR #709 merged as `eed268f2ddcd4aae057e306c6b81e1cee1c9cc0d`.
- [x] p.136 `ビジュアルマーチャンダイジング（VMD）の取り組み`: `SOURCE_BLOCKED`; no AFT-specific initiative/process set; no authoring.
- [x] p.137 `商品陳列のカラーコーディネーション`: `SOURCE_BLOCKED`; no deterministic AFT-specific product-display color rule set; no authoring.
- [x] p.140 `景観法の概要` / `景観法の特徴` / `景観計画について`: `SOURCE_RESOLVED`; current MLIT/e-Gov narrow nonvisual boundary; 4/4 verified; CI `33805829029`; PR #711 merged as `e3639e2e439ff04a0d471acf052e6f5b479794d2`.
- [x] p.141 `景観計画に基づく届出と手続き`: `SOURCE_RESOLVED`; current MLIT/government narrow Article 16 procedure boundary; 4/4 verified, A/B/C/D=1/1/1/1; CI `33807770514`; PR #713 merged as `dc5ff999fa98ed36d5de880d9f572f33de7bbe61`.
- [x] p.142 `景観計画における色彩基準 — 色彩基準の役割`: `SOURCE_RESOLVED`; current MLIT/Tokyo/Osaka government narrow nonvisual standards-role boundary; 4/4 verified, A/B/C/D=1/1/1/1; CI `33808114823`; PR #715 merged as `05f5e7aaeeef2db87ccbe6d932fe671a7412271e`.
- [x] p.143 `色彩基準の運用`: `SOURCE_RESOLVED`; Tokyo government operation guidance; 4/4 verified, A/B/C/D=1/1/1/1.
- [x] p.143 `色彩基準における面積比の考え方`: `SOURCE_RESOLVED` only to Tokyo's explicit example; 4/4 verified, A/B/C/D=1/1/1/1. Combined CI `33809583893`; PR #718 merged as `ab5b3fb3dd169fcb44b02691688625b9b64ed6e0`.
- [x] p.144 `色彩基準の示し方`: `SOURCE_RESOLVED`; narrow government-explicit Munsell/standards-table structure; 4/4 verified, A/B/C/D=1/1/1/1; CI `33811380255`; PR #720 merged as `59076f90302e282c4255d89c71c49f81d0e21c17`.
- [x] p.145 `色彩基準の適用除外`: `SOURCE_RESOLVED` only to explicit Tokyo-government exception examples; 4/4 verified, A/B/C/D=1/1/1/1.
- [x] p.145 `屋外広告物の色彩基準`: `SOURCE_RESOLVED` only to MLIT/current-local-government governance and area-specific standards structure; 4/4 verified, A/B/C/D=1/1/1/1. Combined CI `33811733728`; PR #721 merged as `e4fc8dbf6d19b75f6a1856ea93d756a2f2d8e806`.
- [x] p.146 `色相、明度、彩度と景観形成とのかかわり`: `SOURCE_RESOLVED`; narrow MLIT-explicit nonvisual three-attribute relation; 4/4 verified, A/B/C/D=1/1/1/1; CI `33812789294`; PR #723 merged as `5cb01bbe550ded78503469eb9d86ab9f2eb32da2`.

No Grade 1 runtime promotion has occurred yet.

## Exact next start point
Source-audit p.148 `遠景・中景・近景とは` before any authoring.
