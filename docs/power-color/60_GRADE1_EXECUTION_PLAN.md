# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

The user has explicitly overridden the former top-level sequencing condition and made Grade 1 active while Grade 2/3 remain incomplete. Until the stale sentence in `20_EXECUTION_PLAN.md` Phase 5 is mechanically reconciled, this explicit user override plus STATUS/HANDOFF/this Grade 1 plan controls Grade 1 work only. It does not mark Grade 2/3 complete or relax any lower-grade gate.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Culture p.006→p.021 is audited/authored; continue color-harmony theory p.024→p.030 in official order.

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
- [x] Grade 1 canonical execution plan / source inventory / spec established while preserving Grade 2/3 incomplete states and gates.
- [x] p.006 `古代ヨーロッパの色彩`: audit + 8/8 verified; CI `33744000544`; PR #618 merged.
- [x] p.007 `中・近世のヨーロッパの色彩`: audit + 8/8 verified; CI `33745825195`; PR #621 merged.
- [x] p.010 `近代ヨーロッパと色彩学`: audit + 8/8 verified; CI `33747834603`; PR #623 merged.
- [x] p.014 `日本の古代の色`: audit + 8/8 verified; CI `33749706830`; PR #625 merged.
- [x] p.017 `古代から中近世の日本の色彩`: audit + 8/8 verified; PR #628 merged.
- [x] p.021 `近代の日本の色彩`: audit + 8/8 verified; CI `33755336513`; PR #630 merged.
- [x] p.024 `色彩調和論とは / ジャッドの色彩調和、四つの原理`: audit + 4/4 verified; CI `33756393481`; PR #632 merged.
- [x] p.025 `シュヴルールの色彩調和論`: `SOURCE_RESOLVED` narrow AFT sample slice + 3/3 verified; CI `33757328587`; PR #636 merged as `0b577fa0263b5f451b4941e1a9f04fe8f8b7f036`.
- [x] p.027 `ルードの色彩調和論`: `SECONDARY_CORROBORATION_REQUIRED`; 3/3 finite corroborated text-only records verified; CI `33758149486`; PR #638 merged as `b89da78340133b5a4abf24408ef4c3930610b917`.
- [x] p.028 `オストワルトの色彩調和論`: source audit classified `SECONDARY_CORROBORATION_REQUIRED`; narrow accepted boundary is 1916 `The Colour Primer`, harmony by colour order, white→grey→black achromatic scale, and three-dimensional double-cone representation, corroborated by Cooper Hewitt/Smithsonian and Science History Institute.
- [x] Author p.028 `pc1.harmony.ostwald_p028` pending-first and independently QA the finite four-record text-only batch: 4/4 verified, pending 0, A/B/C/D=1/1/1/1. Dedicated source/nonvisual/full-fingerprint/shared-renderer gate added against all nine earlier Grade 1 batches.

No Grade 1 runtime promotion has occurred yet.

## Exact next start point
Pass current-head p.028 dedicated/Power Color CI and merge if green/current. Then continue in official order to p.029 `イッテンの色彩調和論` and source-audit it before any authoring. Preserve all Grade 2/3 incomplete states and gates.
