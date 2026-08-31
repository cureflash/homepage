# Power Color — EXECUTION PLAN

## Phase 1 — Grade 3 conventional colors
- [x] Confirm official Grade 3 scope and official sample-question patterns.
- [x] Ingest 64 Grade 3 慣用色名 into `grade3-colors.json`.
- [x] Preserve the source warning that public RGB/hex values are reference display values.
- [x] Implement `pc3.conventional.color_to_name` and `pc3.conventional.name_to_color` on the shared Power TOEIC Drill Engine.
- [x] Generate, independently QA, duplicate/schema/coverage-check, and promote the useful authoritative state space.
- [x] Runtime now contains 127 verified conventional-color questions: color→name 63 monitor-discriminable states + name→color 64 authoritative states; pending=0.
- [x] Keep `c3-conventional-052` スカイブルー out of color→name because its authoritative display reference equals 空色 and would be monitor-ambiguous.

## Phase 2 — Grade 3 PCCS master
- [x] Confirm authoritative PCCS Grade 3 source boundary and fix `40_PCCS_SOURCE_CONTRACT.md`.
  - [x] Color Certification Association official Grade 3 scope/sample confirms PCCS is in scope.
  - [x] Current Japan Color Enterprise / JCRI material confirms the 24-hue system and current tone structure.
  - [x] Structural PCCS truth and monitor display references are separate authorities.
  - [x] Unsourced RGB/HEX, screenshot sampling, third-party tables, Munsell reconstruction, and hand tuning are prohibited.
- [ ] Complete hue/tone/notation master without guessing display values.
  - [x] Create `grade3-pccs-structure.json` with 24/24 source-confirmed hue positions and current notations.
  - [x] Confirm 12/12 chromatic tone codes/names, including `lt+`/`p+` new-card notation and the `s` omission.
  - [x] Preserve hue 20 as `V` while the current JCRI manual says `PB` is only a future rename.
  - [ ] Confirm all 24 Japanese PCCS hue names/readings from current authoritative material.
    - [x] Identify current Japan Color Enterprise `基本色彩掛図〈中級用〉` as a first-party 24-hue-name source.
    - [ ] Acquire the complete 24 mappings/readings; public product material does not expose the full table.
  - [ ] Acquire authoritative current per-state display references for monitor swatches.
    - [x] Current JCRI PCCS Color Calc documentation confirms PCCS hue-tone representative values can be output as sRGB under D65 / 2-degree conditions.
    - [x] Current JCRI FAQ permits customer-created Color Calc figures for private/commercial use; direct numeric output from a current licensed installation is approved when audit evidence is retained.
    - [x] Current JCRI `デジタル色彩マニュアル` product documentation confirms a PCCS chart of 288 chromatic + 17 achromatic colors and states that every chart carries RGB hexadecimal and CMYK values. Exact values have not been acquired, and freshness/equivalence to current Color Calc representative values is unverified, so it is a secondary authority lead only and does not populate `displayReference`.
    - [ ] Obtain current representative per-state numeric sRGB from current licensed Color Calc or a current official table/export with exact auditable values.
  - [x] `pccs-structure-master.test.js` gates the structural slice and prohibits accidental display-value invention.
- [ ] Add monitor-facing color/hue, color/tone, color/notation and reverse-lookup drills after approved display references exist.
- [ ] Complete PCCS master QA and coverage gate.

## Phase 3 — Grade 3 relations / schemes
Non-visual relationship work may proceed only where the source contract permits deterministic derivation from already source-confirmed master facts. It must not bypass Phase 2 display gates for visual questions.

- [ ] Complementary hue.
  - [x] Define `pc3.pccs.complementary_hue_number` as a single-skill text-only slice using the source-confirmed 24-position hue circle.
  - [x] Generate 12 pending-first questions covering all 12 unique opposite hue pairs.
  - [x] Independently recompute all 12 answers from the master; 12 checked / 12 verified / 0 revision / 0 rejected / pending 0.
  - [x] Balance correct positions A/B/C/D = 3/3/3/3 and verify no monitor-color dependency.
  - [x] Add `pccs-complementary-hue-authoring.test.js` for pair coverage, derivation, source refs, choice uniqueness, answer correctness, pending-first audit metadata, and answer-position balance.
  - [x] Run CI/shared-engine regressions: `Power Color tests` run `33361968699` completed successfully on the authoring commit.
  - [ ] Promote the 12 verified records to `grade3-runtime.json`, then rerun promotion and shared-engine regression gates.
- [ ] Same hue / same tone.
- [ ] Hue-difference / tone-difference.
- [ ] 配色判定.
- [ ] 明度グラデーション.
- [ ] Official-sample alignment.
- [ ] Full Grade 3 pending=0 gate.

## Phase 4 — Grade 2
Start only after Grade 3 is completely finished.

## Phase 5 — Grade 1
Start only after Grade 2 is completely finished.

## Phase B — Explanation video series
Start only after `color_database_complete: true`. Build the video-series plan/spec/status/handoff first, then produce one safe theme at a time through the existing `cureflash/makemovie` CSV/PowerPoint→YMM4→MP4 pipeline. Do not fork a new video engine.
