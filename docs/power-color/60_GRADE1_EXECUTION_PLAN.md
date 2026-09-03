# Power Color — Grade 1 Execution Plan

## Authority
Use current `main`, `STATUS.json`, `90_HANDOFF.md`, `20_EXECUTION_PLAN.md`, this file, `61_GRADE1_SOURCE_INVENTORY.md`, and `62_GRADE1_SPEC.md` as the Grade 1 canonical working set. Grade 2 and Grade 3 remain incomplete; do not relax their source/display gates.

Grade 1 is active by explicit user override. The stale Grade-2-complete wording still present in `20_EXECUTION_PLAN.md` does not mark Grade 2/3 complete and does not supersede the explicit Grade 1 canonical state.

## Order
Follow the current AFT official Grade 1 textbook table of contents in order. Culture p.006→p.021, color-harmony p.024→p.030, light/color p.032→p.041, color-representation p.046→p.059, color-names p.060→p.062, measurement p.066→p.069, psychology p.072→p.087, and business p.090→p.093 have now been processed in order. The next official frontier is p.095 `コンシューマプロダクツのビジネスプロセスと色彩 — 企業アイデンティティ戦略における色彩`.

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

Confirmed current blockers:
- p.035 `色の分類`: `SOURCE_BLOCKED`; exact AFT taxonomy/labels/counts are not publicly auditable.
- p.062 `JISの光源色の色名`: `SOURCE_BLOCKED`; current public JSA metadata does not expose exact normative naming content.
- p.062 `光源色の系統色名`: `SOURCE_BLOCKED`; exact current construction/inventory/modifier rules are unavailable from accepted primary authority.
- p.083 `色知覚の複雑性 — 色の見えの変化`: `SOURCE_BLOCKED`; public AFT authority exposes heading/order only, while generic external color-appearance literature cannot establish the unpublished AFT phenomenon set.
- p.090 `色彩効果のビジネス活用`: `SOURCE_BLOCKED`; public AFT authority exposes the heading/general business scope only, not a deterministic p.090 fact set; generic business/marketing substitution is rejected.

## Completed Grade 1 checkpoints
- [x] p.006→p.021 culture: six official topics audited/authored; 8 verified text-only records each.
- [x] p.024→p.030 harmony: Judd 4/4; Chevreul 3/3; Rood 3/3; Ostwald 4/4; Itten 4/4; Moon & Spencer 4/4 verified within recorded source boundaries.
- [x] p.032 `色の様相`: 3/3 verified.
- [x] p.035 `色の分類`: `SOURCE_BLOCKED`; no authoring.
- [x] p.036/p.039/p.041 lighting/mixing: 4/4 verified each within recorded nonvisual source boundaries.
- [x] p.046 XYZ and p.050 CIELAB/color difference: 4/4 verified each.
- [x] p.053→p.055 Ostwald system: 4/4, 4/4, 4/4, 3/3 verified across the recorded subtopics.
- [x] p.056→p.059 NCS: six recorded subtopics, 4/4 verified each.
- [x] p.060 color-name classification: 4/4 verified.
- [x] p.061 ISCC-NBS: 4/4 verified.
- [x] p.062 two JIS light-source-name topics: `SOURCE_BLOCKED`; no authoring.
- [x] p.066/p.067/p.069 measurement: 4/4 verified each.
- [x] p.072/p.073/p.080 psychology methods: 4/4 verified each.
- [x] p.082 `記憶色と色記憶`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33789935372`; PR #689 merged as `1fbe2f72eb790bbc15898320837fbd23cd4e6b94`.
- [x] p.083 `色の見えの変化`: `SOURCE_BLOCKED`; no authoring; rejected generic-source route recorded.
- [x] p.087 `ものの見えの安定性`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33790197091`; PR #690 merged as `9f0b6740632c77a982f102ab6bcef35a6a829574`.
- [x] p.090 `色彩効果のビジネス活用`: `SOURCE_BLOCKED`; no authoring; generic business/marketing substitution rejected.
- [x] p.093 `カラーコミュニケーションツールの役割`: `SECONDARY_CORROBORATION_REQUIRED`; 4/4 verified; CI `33792338939`; PR #693 merged as `a28fd5ac83ddedadb9e1cd36e6f46fad89fe9bc2`.

No Grade 1 runtime promotion has occurred yet.

## Exact next start point
Source-audit p.095 `コンシューマプロダクツのビジネスプロセスと色彩 — 企業アイデンティティ戦略における色彩` before any authoring. Because this remains inside the known AFT-specific business-risk frontier, generic corporate-branding/process material may corroborate only an explicitly scoped fact and must not be used to invent the AFT-specific process or sequence.
