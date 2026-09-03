# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

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
- [x] Audit p.006 `古代ヨーロッパの色彩` as `SECONDARY_CORROBORATION_REQUIRED`; resolve only a narrow nonvisual ancient-Egypt material / Greek conservation-evidence boundary.
- [x] Author p.006 `pc1.culture.ancient_europe_materials` pending-first and independently QA all 8 records: 8/8 verified, pending 0, A/B/C/D=2/2/2/2.
- [x] Pass dedicated Grade 1 p.006 schema/full-fingerprint/nonvisual/shared-renderer gate and normal Power Color regression in CI `33744000544`; PR #618 merged as `fff4022fdf0c4809b135b29c4277ec83def919c2`.
- [x] Audit p.007 `中・近世のヨーロッパの色彩` as `SECONDARY_CORROBORATION_REQUIRED`; resolve only a narrow Getty/Met/National Gallery manuscript-pigment-material boundary.

## Exact next start point
Author a small pending-first p.007 text-only batch using only the resolved manuscript/pigment/material relations in `docs/power-color/audits/2026-09-03-grade1-p007-medieval-early-modern-europe-source-audit.md`, then independently QA every record. Stop before template repetition or unsupported symbolism/value/display claims.