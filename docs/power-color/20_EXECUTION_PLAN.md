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
    - [x] Current JCRI `デジタル色彩マニュアル` product documentation confirms a PCCS chart of 288 chromatic + 17 achromatic colors and states that every chart carries RGB hexadecimal and CMYK values. Exact values have not been acquired, and freshness/equivalence to current Color Calc representative values is unverified, so it remains a secondary authority lead only.
    - [ ] Obtain current representative per-state numeric sRGB from current licensed Color Calc or a current official table/export with exact auditable values.
  - [x] `pccs-structure-master.test.js` gates the structural slice and prohibits accidental display-value invention.
- [ ] Add monitor-facing color/hue, color/tone, color/notation and reverse-lookup drills after approved display references exist.
- [ ] Complete PCCS master QA and coverage gate.

## Phase 3 — Grade 3 relations / schemes
Non-visual relationship work may proceed only where deterministic derivation is possible from source-confirmed master facts. It must not bypass Phase 2 display gates for visual questions.

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
- [ ] Hue difference.
  - [x] Define a prerequisite numeric `pc3.relation.hue_difference` slice without guessing named classification boundaries.
  - [x] Generate 12 pending-first text-only questions covering circular hue differences 1 through 12 exactly once.
  - [x] Independently recompute every answer as `min(abs(a-b), 24-abs(a-b))`; 12 checked / 12 verified / pending 0; A/B/C/D = 3/3/3/3.
  - [x] Promote the 12 records record-identically; runtime reached 175 verified / pending 0. Workflow run `33387836920` succeeded.
  - [x] Record JCRI first-party implementation evidence in `41_RELATION_BOUNDARY_AUDIT.md`: official software/report examples confirm named hue-relation classification exists and include adjacent/similar examples, but do not expose the complete boundary table.
  - [x] Recheck the current 2026 Color Certification Association Grade 3 sample/level/official-text pages and current JCRI PCCS pages; `中差色相配色` remains explicitly in current Grade 3 scope, but the public first-party web material still does not expose the complete named hue-boundary table.
  - [ ] Encode named hue-difference classes only after current authoritative complete boundary evidence is acquired; do not extrapolate from official sample images, the three official sample colors, tone-map geometry, or secondary material.
- [ ] Tone difference.
  - [x] Recheck current JCRI authority: conventional PCCS does not define an algorithm for relationships among tones; do not derive distance/adjacency from the tone-map layout.
  - [x] Record JCRI first-party implementation evidence in `41_RELATION_BOUNDARY_AUDIT.md`: official software/report examples confirm same/similar tone classification exists, but do not expose the complete pair-membership/boundary table or contrast-tone rule.
  - [x] Recheck the current 2026 Color Certification Association Grade 3 sample; `対照トーン配色` remains explicitly tested, but its complete current pair-membership rule is not published on the located first-party web pages.
  - [ ] Acquire the exact current Grade 3 tone-difference / contrast-tone classification boundary before encoding this skill. The remaining source route is current official text/manual/card material or auditable current first-party software output, not inference from public examples.
- [ ] 配色判定.
  - [x] Same-tone and same-hue deterministic sub-relations are independently testable from canonical notation.
  - [x] Define a deterministic `pc3.scheme.identification` subset using only same tone, same hue, complementary hue, and value gradient.
  - [x] Generate and independently verify 12 pending-first text-only identification questions: 3 per confirmed rule; A/B/C/D = 3/3/3/3. Workflow run `33388489462` succeeded.
  - [x] Run full-fingerprint duplicate gate before promotion; detect one collision (`0012` vs `0003`), revise only the distractor order, independently re-derive the answer, and retain A/B/C/D = 3/3/3/3 with zero remaining duplicates.
  - [x] Promote the 12 verified `pc3.scheme.identification` records record-identically; runtime reached 199 verified / pending 0. Workflow run `33400487901` succeeded with exact-equality, duplicate, and shared-engine gates.
  - [ ] Extend identification to contrast-tone / named hue-difference classes only after their authoritative boundaries are sourced.
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
