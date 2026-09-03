# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

The user explicitly made Grade 1 active while Grade 2/3 remain incomplete. The stale Phase 5 sentence in `20_EXECUTION_PLAN.md` is a known mechanical inconsistency; this explicit override plus STATUS/HANDOFF/this Grade 1 plan controls Grade 1 work only and does not mark Grade 2/3 complete.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Culture p.006→p.021 and color-harmony p.024→p.030 are audited/authored within accepted narrow source boundaries. p.032 `色の様相` is audited/authored within three corroborated nonvisual fact families. p.035 `色の分類` is source-blocked. p.036 `照明の性質を表すもの`, p.039 `測色の照明`, p.041 `グラスマンの法則`, p.046 `XYZ表色系`, p.050 `均等色空間とL*a*b*色空間 — 色差の表示`, p.053 `オストワルト表色系 — 色相環`, p.054 `色の表示方法`, p.054 `等色相面`, p.055 `色立体`, and p.056 NCS `へリングの6主要色` are audited/authored within narrow auditable nonvisual fact families. Next official frontier is p.056 NCS `色相環と色相の表し方` source audit, followed by p.058 `等色相面での色の表示`, p.059 `色の表示方法`, and p.059 `色立体と色票集`.

## Per-topic workflow
1. Reconcile latest main, open Power Color PRs, and in-progress Grade 1 branches.
2. Source audit first and classify `SOURCE_RESOLVED`, `SECONDARY_CORROBORATION_REQUIRED`, or `SOURCE_BLOCKED`.
3. Prefer current AFT official scope/sample authority; use auditable museum, government, university, academic-society, standards-body, original-source, or system-owner material only to resolve individual public facts. Do not reconstruct unpublished AFT content.
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
Treat these as explicit blocked candidates until individually resolved: JIS light-source color-name exact content; AFT-specific business/color-marketing/CMF processes; fashion practical procedures; `資料・CMF® 素材と工法`; Grade 1 second-stage printed-color/display authority.

## Completed Grade 1 checkpoints
- [x] p.006→p.021 culture: six official topics audited/authored; 8 verified text-only records each.
- [x] p.024 ジャッド: 4/4 verified.
- [x] p.025 シュヴルール: narrow `SOURCE_RESOLVED` AFT sample slice + 3/3 verified.
- [x] p.027 ルード: `SECONDARY_CORROBORATION_REQUIRED` + 3/3 verified.
- [x] p.028 オストワルト: `SECONDARY_CORROBORATION_REQUIRED` + 4/4 verified.
- [x] p.029 イッテン: `SECONDARY_CORROBORATION_REQUIRED` + 4/4 verified.
- [x] p.030 ムーンとスペンサー: `SECONDARY_CORROBORATION_REQUIRED` + 4/4 verified.
- [x] p.032 `色の様相`: `SECONDARY_CORROBORATION_REQUIRED`; 3/3 verified; PR #647 merged.
- [x] p.035 `色の分類`: `SOURCE_BLOCKED`; exact AFT taxonomy/labels/counts are not publicly auditable; no authoring.
- [x] p.036 `照明の性質を表すもの`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified.
- [x] p.039 `測色の照明`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33766411922`, PR #651.
- [x] p.041 `グラスマンの法則（加法混色の法則性）`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33768284181`, PR #654.
- [x] p.046 `XYZ表色系`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33768527950`, PR #655.
- [x] p.050 `均等色空間とL*a*b*色空間 — 色差の表示`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33770191717`, PR #657.
- [x] p.053 `オストワルト表色系 — 色相環`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33772390636`, PR #659.
- [x] p.054 `オストワルト表色系 — 色の表示方法`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33772632526`, PR #660.
- [x] p.054 `オストワルト表色系 — 等色相面`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33774043678`, PR #663.
- [x] p.055 `オストワルト表色系 — 色立体`: `SECONDARY_CORROBORATION_REQUIRED`; three peer-reviewed corroborated structural fact families authored pending-first and independently QA'd 3/3 verified, pending 0, A/B/C/D=1/1/1/0; exact AFT geometry/display details remain blocked; CI `33776217684`, PR #665 merged as `b4755356e76b457b3f230e24276c8b997b7cf101`.
- [x] p.056 `NCS — へリングの6主要色`: `SECONDARY_CORROBORATION_REQUIRED`; four current NCS first-party nonvisual fact families authored pending-first and independently QA'd 4/4 verified, pending 0, A/B/C/D=1/1/1/1; CI `33776482393`, PR #666 merged as `54a23d9043ac2995e5052aa02e56e621995bcc9b`.

No Grade 1 runtime promotion has occurred yet.

## Exact next start point
Source-audit p.056 `NCS — 色相環と色相の表し方` before any authoring. Preserve all Grade 2/3 incomplete states and gates; use current NCS first-party authority only where explicit and do not infer unpublished AFT figure geometry or display values.
