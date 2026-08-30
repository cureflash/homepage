# Power Color — EXECUTION PLAN

## Phase 1 — Grade 3 conventional colors
- [x] Confirm official Grade 3 scope and official sample-question patterns.
- [x] Ingest 64 Grade 3 慣用色名 into `grade3-colors.json`.
- [x] Preserve the source warning that public RGB/hex values are reference display values.
- [x] Create initial two micro-skills:
  - `pc3.conventional.color_to_name`
  - `pc3.conventional.name_to_color`
- [x] Put a small individually checked 16-question beta bank on the shared Power TOEIC engine.
- [x] Generate the remaining conventional-color questions.
  - [x] `color_to_name` checkpoint 0017-0024: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0025-0032: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0033-0040: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0041-0048: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0049-0056: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0057-0064: 8 generated and individually verified; 0 pending. Targets c3-048..051 and c3-053..056.
  - [x] `color_to_name` checkpoint 0065-0071: 7 generated and individually verified; 0 pending. Targets c3-057..062 and c3-064.
  - [x] `color_to_name` useful monitor-discriminable state space: 63/64 master refs covered with no target reuse.
  - [x] `c3-conventional-052` (スカイブルー) deferred for `color_to_name` because its reference display value is identical to 空色.
  - [x] `name_to_color` checkpoint 0017-0024: 8 generated pending-first and independently verified; 0 pending.
  - [x] `name_to_color` checkpoint 0025-0032: 8 generated pending-first and independently verified; 0 pending.
  - [x] `name_to_color` checkpoint 0033-0040: 8 generated pending-first and independently verified; 0 pending; c3-025 was already covered by runtime and was not reused.
  - [x] `name_to_color` checkpoint 0041-0048: 8 generated pending-first and independently verified; 0 pending. Targets c3-031 through c3-038.
  - [x] `name_to_color` checkpoint 0049-0056: 8 generated pending-first and independently verified; 0 pending. Targets c3-039, 040, 041, 043, 044, 045, 046, 047; c3-042 was already covered by runtime and was removed after the cross-bank gate detected it.
  - [x] `name_to_color` checkpoint 0057-0064: 8 generated pending-first and independently verified; 0 pending. Targets c3-048 through c3-055; the c3-052 item excludes c3-017 from its choices because both share the same reference display value.
  - [x] `name_to_color` checkpoint 0065-0072: 8 generated pending-first and independently verified; 0 pending. Targets c3-056 through c3-062 and c3-064; c3-063 remains covered only by the existing runtime bank and is not reused.
  - [x] `name_to_color` authoritative master state space: 64/64 master refs covered with no target reuse.
- [x] Independent QA for all conventional-color questions.
  - [x] Corpus gate covers runtime 16 + authoring 111 = 127 verified questions, pending=0.
  - [x] Canonical target resolution, schema/source refs, exact fingerprints, cross-bank target uniqueness, monitor-discriminable choice sets and answer-position balance pass.
  - [x] Official association 3級慣用色 reference rechecked 2026-08-31; its public RGB/hex values remain reference values, and 空色/スカイブルー both remain `8ED1E0`.
- [ ] Promote verified authoring checkpoints into `grade3-runtime.json` only after consistency tests pass.
- [x] Conventional-color coverage gate: both directions cover the useful authoritative master state space, pending=0, duplicates/schema/references pass; do not force a monitor-indistinguishable item merely to claim 64/64.

## Phase 2 — Grade 3 PCCS master
- [ ] Confirm authoritative PCCS Grade 3 data/source.
- [ ] Build hue/tone/notation master without guessing display values.
- [ ] Add color/hue, color/tone, color/notation and reverse-lookup drills.
- [ ] QA and coverage gate.

## Phase 3 — Grade 3 relations / schemes
- [ ] Complementary hue.
- [ ] Same hue / same tone.
- [ ] Hue-difference / tone-difference.
- [ ] 配色判定.
- [ ] 明度グラデーション.
- [ ] Official-sample alignment.
- [ ] Full Grade 3 pending=0 gate.

## Phase 4
Only after Grade 3 complete: Grade 2.
