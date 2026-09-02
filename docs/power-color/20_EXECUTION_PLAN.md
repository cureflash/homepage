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
Grade 2 is active by explicit user override while the unresolved Grade 3 blockers above are preserved. Current detailed execution authority is `50_GRADE2_EXECUTION_PLAN.md`; runtime frontier is 324 verified / pending 0 across twenty-seven promoted skills. This override does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

- [x] Promote Interior p.105 `pc2.interior.color_planning_principles` record-identically; runtime 192 → 204.
- [x] Promote Interior p.105 `pc2.interior.zoning_classification` record-identically; runtime 204 → 216.
- [x] Keep Interior p.107 source-blocked.
- [x] Author and independently QA `pc2.interior.element_color_roles` from the fixed p.110 narrow source boundary: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Promote `pc2.interior.element_color_roles` record-identically; runtime 216 → 228.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine gates to all nineteen promoted skills.
- [x] Audit p.111 `インテリアエレメントの配色の考え方と技法`; keep source-blocked because no deterministic nonvisual rule set is publicly auditable.
- [x] Audit p.112 `インテリアスタイル`; source-resolve only the corroborated six-label inventory, excluding all style-property/image/color inference.
- [x] Create `pc2.interior.style_name_inventory` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Run the dedicated p.112 authoring/full-fingerprint/nonvisual/shared-renderer gate and normal shared-engine regression.
- [x] Promote the 12 verified p.112 records record-identically; runtime 228 → 240 and twenty promoted skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine gates to all twenty promoted skills.
- [x] Continue official text order to Landscape p.116 and source-resolve only the narrow nonvisual `景観の公共性` public-asset/cooperation boundary.
- [x] Create `pc2.landscape.public_nature` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add dedicated schema/full-fingerprint/nonvisual/shared-renderer authoring gate for `pc2.landscape.public_nature`.
- [x] Confirm the dedicated landscape gate and normal Power Color regression are green on the authoring head (workflow run `33641632788`).
- [x] Promote the 12 verified `pc2.landscape.public_nature` records record-identically; runtime 240 → 252 and twenty → twenty-one skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-one promoted skills; promotion CI run `33643082653` succeeded.
- [x] Continue official text order to Landscape p.117 `景観をつくる要素` and source-resolve only the explicit nonvisual element-example/breadth boundary.
- [x] Create `pc2.landscape.element_examples` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add dedicated schema/full-fingerprint/nonvisual/shared-renderer pre-promotion gate for `pc2.landscape.element_examples`.
- [x] Confirm the p.117 dedicated gate and normal Power Color regression are green on authoring head `a3d2be3e0230aefb1e733f07ad08ea0cecfe161b` (workflow run `33644271047`).
- [x] Promote the 12 verified `pc2.landscape.element_examples` records record-identically; runtime 252 → 264 and twenty-one → twenty-two skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-two promoted skills; promotion CI run `33647175533` succeeded and PR #546 merged.
- [x] Source-resolve Landscape p.117 `景観色彩における色彩設計の役割` to a deterministic nonvisual surrounding-harmony/context/numerical-standard boundary.
- [x] Create `pc2.landscape.color_design_harmony_role` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add and pass the dedicated nonvisual/full-fingerprint/shared-renderer authoring gate and normal Power Color regression; workflow run `33648021940`, PR #548 merged.
- [x] Promote the 12 verified `pc2.landscape.color_design_harmony_role` records record-identically; runtime 264 → 276 and twenty-two → twenty-three skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-three promoted skills; Power Color CI run `33653881914` succeeded and PR #551 merged.
- [x] Source-resolve Landscape p.118 `地域には地域の色がある` to a narrow deterministic nonvisual regional-context boundary.
- [x] Create `pc2.landscape.regional_color_context` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add and pass the dedicated ID/full-fingerprint/source/nonvisual/shared-renderer authoring gate and normal Power Color regression; workflow run `33654743141`, PR #553 merged.
- [x] Promote the 12 verified `pc2.landscape.regional_color_context` records record-identically; runtime 276 → 288 and twenty-three → twenty-four skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-four promoted skills; Power Color CI run `33659280553` succeeded and PR #560 merged.
- [x] Audit Landscape p.118 `国内外の景観色彩の事例`; keep source-blocked because current public official material does not expose a closed official-text example set with deterministic nonvisual answer rules. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p118-cases-source-audit.md`.
- [x] Audit Landscape p.120 `人工要素と自然要素の色彩が共存`; keep authoring source-blocked because public evidence confirms only the broad coexistence concept, not a sufficiently rich closed deterministic Grade 2 rule set. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-artificial-natural-source-audit.md`.
- [x] Source-resolve Landscape p.120 `ライフサイクルの長い色彩` to a narrow deterministic nonvisual long-duration/surrounding-harmony/large-area/durability boundary. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-long-lifecycle-source-audit.md`.
- [x] Create `pc2.landscape.long_lifecycle_color` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add and pass the pre-promotion ID/schema/full-fingerprint/nonvisual/shared-renderer gate and normal Power Color regression; workflow run `33661736671`, PR #563 merged as `548b14d26bee4f85570fdb56c865cbbb800ab591`.
- [x] Promote the 12 verified `pc2.landscape.long_lifecycle_color` records record-identically; runtime 288 → 300 and twenty-four → twenty-five skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-five promoted skills; Power Color CI `33665241835` succeeded and PR #567 merged as `0f246cc3056c51503c870f9af9fe24b3ea33c833`.
- [x] Audit Landscape p.120 `大きな面積をもつ色彩`; keep source-blocked because current public authority does not expose a distinct sufficiently rich deterministic nonvisual rule set beyond adjacent/general large-area context. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-large-area-source-audit.md`.
- [x] Audit Landscape p.120 `太陽光に影響される色彩`; keep source-blocked because current public material confirms only broad outdoor-light context, not a closed deterministic Grade 2 rule set. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p120-sunlight-source-audit.md`.
- [x] Audit Landscape p.121 `季節や時間の変化を感じさせる多様な色彩`; keep source-blocked because current public authority confirms only broad season/time variability and does not expose a distinct sufficiently rich deterministic nonvisual Grade 2 rule set. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p121-season-time-source-audit.md`.
- [x] Source-resolve Landscape p.122 `景観色彩設計の配慮事項` to a narrow deterministic nonvisual planning boundary. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p122-considerations-source-audit.md`.
- [x] Create `pc2.landscape.design_considerations` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add and pass the dedicated schema/full-fingerprint/nonvisual/shared-renderer pre-promotion gate and normal Power Color regression; workflow run `33674008109`, PR #572 merged as `165132c83eec5fd949e0023a9dfa9bdd62438e97`.
- [x] Promote the 12 verified `pc2.landscape.design_considerations` records record-identically; runtime 300 → 312 and twenty-five → twenty-six skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-six promoted skills; Power Color CI `33676939840` succeeded and PR #577 merged as `f7661343ba41b9c00cdc9edb2035ce8b86c90f72`.
- [x] Source-resolve Landscape p.123 `住宅の色彩設計プロセス` to a narrow deterministic nonvisual process boundary using current AFT official scope/order and current JPMA detached-house practical-process corroboration. Audit: `docs/power-color/audits/2026-09-03-grade2-landscape-p123-residential-process-source-audit.md`.
- [x] Create `pc2.landscape.residential_color_design_process` pending-first and independently QA every record: 12/12 verified, pending 0, A/B/C/D=3/3/3/3.
- [x] Add and pass the dedicated schema/full-fingerprint/source/nonvisual/shared-renderer pre-promotion gate and normal Power Color regression; workflow run `33677670579`, PR #579 merged as `c3f8c298330209e19e01946ced4d1ea17e40ce3f`.
- [x] Promote the 12 verified `pc2.landscape.residential_color_design_process` records record-identically; runtime 312 → 324 and twenty-six → twenty-seven skills.
- [x] Extend exact-equality/full-fingerprint/shared Power TOEIC engine coverage to twenty-seven promoted skills; Power Color CI `33678211235` succeeded and PR #582 merged as `6d64629b0bd8f5c5f305fce21f1d1d48c3a4234a`.
- [ ] Continue official Grade 2 text order at Landscape p.123 `色を測ることによる周辺環境の把握`; source-resolve a distinct deterministic nonvisual rule set before any authoring, or record source-blocked if public authority is insufficient.

## Phase 5 — Grade 1
Start only after Grade 2 is completely finished.

## Phase B — Explanation video series
Start only after `color_database_complete: true`. Build the video-series plan/spec/status/handoff first, then produce one safe theme at a time through the existing `cureflash/makemovie` CSV/PowerPoint→YMM4→MP4 pipeline. Do not fork a new video engine.
