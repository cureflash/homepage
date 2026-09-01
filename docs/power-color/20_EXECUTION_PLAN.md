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
  - [x] Color Certification Association official Grade 3 scope/sample confirms PCCS is in scope.
  - [x] Current Japan Color Enterprise / JCRI material confirms the 24-hue system and current tone structure.
  - [x] Structural PCCS truth and monitor display references are separate authorities.
  - [x] Unsourced RGB/HEX, screenshot sampling, Munsell reconstruction, and hand tuning are prohibited.
  - [x] Add `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`: when current first-party material confirms scope but does not expose a needed structural rule, permit explicit peer-reviewed / university / specialist-industry evidence under a non-conflict and auditability gate. This does not relax the monitor RGB/HEX gate.
- [ ] Complete hue/tone/notation master without guessing display values.
  - [x] Create `grade3-pccs-structure.json` with 24/24 source-confirmed hue positions and current notations.
  - [x] Confirm 12/12 chromatic tone codes/names, including `lt+`/`p+` new-card notation and the `s` omission.
  - [x] Preserve hue 20 as `V` while the current JCRI manual says `PB` is only a future rename.
  - [x] Confirm all 24 Japanese PCCS hue-name mappings.
    - [x] Identify current Japan Color Enterprise `基本色彩掛図〈中級用〉` as a first-party source proving an official 24-hue-name chart exists.
    - [x] Use DIC Color Design's current PCCS reference, accepted under the reliable-secondary amendment, to enumerate and cross-check all 24 Japanese names against the already confirmed positions/notations.
    - [x] Preserve intentional duplicate names: 14/15 = 青緑 and 17/18 = 青.
    - [ ] Acquire an explicit source for reading fields; keep all `reading` values null until then.
  - [ ] Acquire authoritative current per-state display references for monitor swatches.
    - [x] Current JCRI PCCS Color Calc documentation confirms PCCS hue-tone representative values can be output as sRGB under D65 / 2-degree conditions.
    - [x] Current JCRI FAQ permits customer-created Color Calc figures for private/commercial use; direct numeric output from a current licensed installation is approved when audit evidence is retained.
    - [x] Current JCRI `デジタル色彩マニュアル` product documentation confirms a PCCS chart of 288 chromatic + 17 achromatic colors and states that every chart carries RGB hexadecimal and CMYK values. Exact values have not been acquired, and freshness/equivalence to current Color Calc representative values is unverified, so it remains a secondary authority lead only.
    - [ ] Obtain current representative per-state numeric sRGB from current licensed Color Calc or a current official table/export with exact auditable values.
  - [x] `pccs-structure-master.test.js` gates positions, notations, 24 Japanese names, hue-20 V, tone codes and the no-display-value invariant.
- [ ] Add monitor-facing color/hue, color/tone, color/notation and reverse-lookup drills after approved display references exist.
- [ ] Complete PCCS master QA and coverage gate.

## Phase 3 — Grade 3 relations / schemes
Non-visual relationship work may proceed only where deterministic derivation is possible from accepted source facts. It must not bypass Phase 2 display gates for visual questions.

- [x] Complementary hue.
  - [x] Define `pc3.pccs.complementary_hue_number` from the source-confirmed 24-position hue circle.
  - [x] Generate and independently verify 12 pending-first questions covering all 12 unique opposite hue pairs.
  - [x] Promote record-identically; runtime reached 139 verified / pending 0.
- [x] Same tone.
  - [x] Define `pc3.relation.same_tone` from the official PCCS notation rule and Grade 3 sample alignment.
  - [x] Generate and independently verify 12 pending-first questions covering all 12 source-confirmed chromatic tones.
  - [x] Promote record-identically; runtime reached 151 verified / pending 0.
- [x] Same hue.
  - [x] Confirm the official Grade 3 sample includes 同一色相配色 and the current PCCS notation rule makes the hue number a deterministic non-visual identity.
  - [x] Define `pc3.relation.same_hue`: same hue number, different tone abbreviation.
  - [x] Generate 12 pending-first text-only questions; independently re-derive every answer; 12 checked / 12 verified / pending 0; A/B/C/D = 3/3/3/3.
  - [x] Promote record-identically with shared Power TOEIC regression; runtime reached 163 verified / pending 0.
- [ ] Hue difference / named hue classification.
  - [x] Define numeric `pc3.relation.hue_difference` as shorter circular distance on the 24-hue circle.
  - [x] Generate and independently verify 12 numeric questions covering differences 1–12 exactly once.
  - [x] Promote the numeric records record-identically; runtime reached 175 verified / pending 0. Workflow run `33387836920` succeeded.
  - [x] Current first-party Grade 3 material confirms named hue relations remain in scope but does not publish all numeric boundaries publicly.
  - [x] Under `42_RELIABLE_SECONDARY_SOURCE_AMENDMENT.md`, cross-check peer-reviewed evidence and fix the named classes as: 0 同一, 1 隣接, 2–3 類似, 4–7 中差, 8–10 対照, 11–12 補色.
  - [x] Add separate micro-skill `pc3.relation.hue_classification` so numeric distance and named classification remain independently drillable.
  - [x] Generate and independently verify 12 text-only named-class questions covering differences 1–12 exactly once; A/B/C/D = 3/3/3/3. Workflow run `33463982640` succeeded. PR #459 merged as `4935f8a469408a89a71407cfd685b5f432b1f364`.
  - [ ] Promote the 12 verified `pc3.relation.hue_classification` records record-identically to runtime 211 with exact-equality and shared-engine gates.
- [ ] Tone difference.
  - [x] Recheck current JCRI authority: conventional PCCS does not define a general numeric tone-distance algorithm; do not invent one from display geometry.
  - [x] Current official Grade 3 sample explicitly tests `対照トーン配色`.
  - [x] Peer-reviewed 2019 `工学教育` evidence, explicitly grounded in color-certification teaching material, defines `類似トーン` as vertically/horizontally/diagonally adjacent tone regions and supplies a coordinate judgment.
  - [x] Peer-reviewed 2026 J-STAGE evidence defines `対照トーン` as large contrast in lightness, saturation, or both and explicitly confirms `b` / `dk` as a contrast pair.
  - [ ] Complete and independently cross-check the conventional Grade 3 contrast-tone pair-membership matrix before full `pc3.relation.tone_difference` generation; do not infer unlisted pairs solely from tone-map appearance.
- [ ] 配色判定.
  - [x] Same-tone and same-hue deterministic sub-relations are independently testable from canonical notation.
  - [x] Define a deterministic `pc3.scheme.identification` subset using only same tone, same hue, complementary hue, and value gradient.
  - [x] Generate and independently verify 12 pending-first text-only identification questions: 3 per confirmed rule; A/B/C/D = 3/3/3/3. Workflow run `33388489462` succeeded.
  - [x] Run full-fingerprint duplicate gate before promotion; detect one collision (`0012` vs `0003`), revise only the distractor order, independently re-derive the answer, and retain A/B/C/D = 3/3/3/3 with zero remaining duplicates.
  - [x] Promote the 12 verified `pc3.scheme.identification` records record-identically; runtime reached 199 verified / pending 0. Workflow run `33400487901` succeeded with exact-equality, duplicate, and shared-engine gates.
  - [ ] Extend identification to named hue classes after their dedicated 12-record slice is promoted; keep contrast-tone expansion blocked until its pair matrix is complete.
- [x] 明度グラデーション — deterministic text-only prerequisite slice.
  - [x] Confirm the current official Grade 3 sample explicitly describes the correct characteristic as changing lightness stepwise.
  - [x] Generate and independently verify 12 pending-first sequence questions; 12 checked / 12 verified / pending 0; A/B/C/D = 3/3/3/3.
  - [x] Promote record-identically with shared-engine regression; runtime reached 187 verified / pending 0. Workflow runs `33387985332` and `33388149661` succeeded.
- [ ] Official-sample alignment for remaining named schemes.
- [ ] Full Grade 3 pending=0 gate.

## Phase 4 — Grade 2
Start only after Grade 3 is completely finished.

## Phase 5 — Grade 1
Start only after Grade 2 is completely finished.

## Phase B — Explanation video series
Start only after `color_database_complete: true`. Build the video-series plan/spec/status/handoff first, then produce one safe theme at a time through the existing `cureflash/makemovie` CSV/PowerPoint→YMM4→MP4 pipeline. Do not fork a new video engine.
