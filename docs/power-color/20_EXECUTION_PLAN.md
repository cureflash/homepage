# Power Color — EXECUTION PLAN

## Phase 1 — Grade 3 conventional colors
- [x] Confirm official Grade 3 scope and official sample-question patterns.
- [x] Ingest 64 Grade 3 慣用色名 into `grade3-colors.json`.
- [x] Preserve the source warning that public RGB/hex values are reference display values.
- [x] Implement `pc3.conventional.color_to_name` and `pc3.conventional.name_to_color` on the shared Power TOEIC Drill Engine.
- [x] Generate, independently QA, duplicate/schema/coverage-check, and promote the useful authoritative state space.
- [x] Runtime contains 127 verified conventional-color questions: color→name 63 monitor-discriminable states + name→color 64 authoritative states; pending=0.
- [x] Keep `c3-conventional-052` スカイブルー out of color→name because its authoritative display reference equals 空色 and would be monitor-ambiguous.

## Phase 2 — Grade 3 PCCS master
- [x] Confirm authoritative PCCS Grade 3 source boundary and fix `40_PCCS_SOURCE_CONTRACT.md`.
- [ ] Complete hue/tone/notation master without guessing display values.
  - [x] 24 hue positions and current notations fixed.
  - [x] 12 chromatic tone codes/names fixed.
  - [x] All 24 Japanese PCCS hue-name mappings fixed.
  - [ ] Acquire explicit readings for the 24 Japanese PCCS hue names.
  - [ ] Acquire authoritative current per-state display references for monitor swatches.
- [ ] Add monitor-facing drills only after approved display references exist.
- [ ] Complete PCCS master QA and coverage gate.

## Phase 3 — Grade 3 relations / schemes
- [x] Complementary hue.
- [x] Same tone.
- [x] Same hue.
- [x] Hue difference / named hue classification.
- [ ] Tone difference: keep contrast-tone expansion blocked until an auditable conventional pair matrix is complete.
- [ ] 配色判定: deterministic resolved subsets are promoted; contrast-tone expansion remains blocked.
- [x] 明度グラデーション deterministic text-only slice.
- [ ] Official-sample alignment for remaining named schemes.
- [ ] Full Grade 3 completion gate.

## Phase 4 — Grade 2
Grade 2 is active by explicit user override while the unresolved Grade 3 blockers above are preserved. Current detailed execution authority is `50_GRADE2_EXECUTION_PLAN.md`; runtime frontier is 228 verified / pending 0 across nineteen promoted skills. This override does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

- [x] Promote Interior p.105 `pc2.interior.color_planning_principles` record-identically; runtime 192 → 204.
- [x] Promote Interior p.105 `pc2.interior.zoning_classification` record-identically; runtime 204 → 216.
- [x] Keep Interior p.107 source-blocked.
- [x] Author and independently QA `pc2.interior.element_color_roles` from the fixed p.110 narrow source boundary: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Promote `pc2.interior.element_color_roles` record-identically; runtime 216 → 228.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine gates to all nineteen promoted skills.
- [x] Audit p.111 `インテリアエレメントの配色の考え方と技法`; keep source-blocked because no deterministic nonvisual rule set is publicly auditable.
- [x] Audit p.112 `インテリアスタイル`; source-resolve only the corroborated six-label inventory, excluding all style-property/image/color inference.
- [x] Create `pc2.interior.style_name_inventory` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [ ] Run the dedicated p.112 authoring/full-fingerprint/nonvisual/shared-renderer gate and normal shared-engine regression on the current branch.
- [ ] Promote only the 12 verified p.112 records record-identically after all gates pass; extend runtime to 240 and twenty promoted skills.

## Phase 5 — Grade 1
Start only after Grade 2 is completely finished.

## Phase B — Explanation video series
Start only after `color_database_complete: true`. Build the video-series plan/spec/status/handoff first, then produce one safe theme at a time through the existing `cureflash/makemovie` CSV/PowerPoint→YMM4→MP4 pipeline. Do not fork a new video engine.
