# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

The user has explicitly overridden the former top-level sequencing condition and made Grade 1 active while Grade 2/3 remain incomplete. Until the stale sentence in `20_EXECUTION_PLAN.md` Phase 5 is mechanically reconciled, this explicit user override plus STATUS/HANDOFF/this Grade 1 plan controls Grade 1 work only. It does not mark Grade 2/3 complete or relax any lower-grade gate.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Begin with `色彩と文化`:
1. p.006 古代ヨーロッパの色彩
2. p.007 中・近世のヨーロッパの色彩
3. p.010 近代ヨーロッパと色彩学
4. p.014 日本の古代の色
5. p.017 古代から中近世の日本の色彩
6. p.021 近代の日本の色彩
Then continue to p.024 色彩調和論 and later official headings in table-of-contents order.

## Per-topic workflow
1. Reconcile latest main, open Power Color PRs, and in-progress Grade 1 branches.
2. Source audit first. Classify the topic `SOURCE_RESOLVED`, `SECONDARY_CORROBORATION_REQUIRED`, or `SOURCE_BLOCKED`.
3. Accept AFT official scope/sample facts first. Where AFT public material does not expose textbook detail, use auditable museum, government, university, academic-society, standards-body, or original-source material to resolve individual facts. Do not infer the exact unpublished AFT textbook fact set.
4. Author only source-resolved deterministic facts, pending-first.
5. Independently re-solve each question before assigning `verified`, `needs_revision`, or `rejected`.
6. Check schema, full-fingerprint duplicates, coverage, answer-position distribution, and shared Power TOEIC engine regression.
7. Promote only verified records, record-identically, into Grade 1 runtime.
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
Treat these as explicit blocked candidates until individually resolved: JIS light-source color-name exact content; AFT-specific business/color-marketing/CMF processes; fashion practical procedures; `資料・CMF® 素材と工法`; Grade 1 second-stage printed-color/display authority.

## Completed Grade 1 checkpoints
- [x] Establish Grade 1 execution plan / source inventory / spec while preserving Grade 2/3 incomplete states and gates.
- [x] Audit p.006 `古代ヨーロッパの色彩` as `SECONDARY_CORROBORATION_REQUIRED` and author/QA 8/8 verified; CI `33744000544`; PR #618 merged.
- [x] Audit p.007 `中・近世のヨーロッパの色彩` as `SECONDARY_CORROBORATION_REQUIRED` and author/QA 8/8 verified; CI `33745825195`; PR #621 merged.
- [x] Audit p.010 `近代ヨーロッパと色彩学` as `SECONDARY_CORROBORATION_REQUIRED` and author/QA 8/8 verified; CI `33747834603`; PR #623 merged.
- [x] Audit p.014 `日本の古代の色` as `SECONDARY_CORROBORATION_REQUIRED`; resolve a narrow Shosoin/Nara textile-culture boundary.
- [x] Author p.014 `pc1.culture.ancient_japan_colour` pending-first and independently QA all 8 records: 8/8 verified, pending 0, A/B/C/D=2/2/2/2.
- [x] Pass synchronized current-head p.014 Power Color CI `33749706830`; PR #625 merged as `7628b36b7fedec248b7c29a1a4dea47881be9619`.
- [x] Audit p.017 `古代から中近世の日本の色彩` as `SECONDARY_CORROBORATION_REQUIRED`; resolve only a narrow Heian `襲色目` structural/seasonal-event boundary plus explicit Agency for Cultural Affairs Edo kosode period/material/technique catalogue facts.
- [x] Author p.017 `pc1.culture.ancient_to_early_modern_japan` pending-first and independently QA all 8 records: 8/8 verified, pending 0, A/B/C/D=2/2/2/2; full-fingerprint checked against all prior Grade 1 culture authoring batches; PR #628 merged as `f5d46017a0266641602cd7adb8f79cd3e2b8ba83`.
- [x] Audit p.021 `近代の日本の色彩` as `SECONDARY_CORROBORATION_REQUIRED`; resolve a narrow text-only boundary covering Meiji chemical-dye/Yuzen development, imported aniline dating evidence, and NDL bibliographic facts for Wada Sanzō's early-Shōwa colour-reference publications.
- [x] Author p.021 `pc1.culture.modern_japan_colour` pending-first and independently QA all 8 records: 8/8 verified, pending 0, A/B/C/D=2/2/2/2; synchronized CI `33755336513`; PR #630 merged as `b69572f7b3e55732e72ac4e0496595bb505d0308`.
- [x] Audit p.024 `色彩調和論とは / ジャッドの色彩調和、四つの原理` as `SECONDARY_CORROBORATION_REQUIRED`; current AFT TOC fixes scope, current AFT Grade 1 sample directly resolves `ナチュラルハーモニー` → Judd `なじみ`, and Waseda academic literature corroborates the four-principle framework.

## Exact next start point
Author only the narrow p.024 text-only state space accepted in `docs/power-color/audits/2026-09-03-grade1-p024-color-harmony-judd-source-audit.md`, pending-first, then independently QA it. Do not translate unstated Japanese AFT principle labels or pull p.025 Chevreul facts into the p.024 batch.
