# Power Color — EXECUTION PLAN

## Phase 1 — Grade 3 conventional colors
- [x] Confirm official Grade 3 scope and official sample-question patterns.
- [x] Ingest 64 Grade 3 慣用色名 into `grade3-colors.json`.
- [x] Preserve the source warning that public RGB/hex values are reference display values.
- [x] Create initial two micro-skills:
  - `pc3.conventional.color_to_name`
  - `pc3.conventional.name_to_color`
- [x] Put a small individually checked 16-question beta bank on the shared Power TOEIC engine.
- [ ] Generate the remaining conventional-color questions.
  - [x] `color_to_name` checkpoint 0017-0024: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0025-0032: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0033-0040: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0041-0048: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0049-0056: 8 generated and individually verified; 0 pending.
  - [x] `color_to_name` checkpoint 0057-0064: 8 generated and individually verified; 0 pending. Targets c3-048..051 and c3-053..056.
  - [x] `color_to_name` checkpoint 0065-0071: 7 generated and individually verified; 0 pending. Targets c3-057..062 and c3-064.
  - [x] `color_to_name` useful monitor-discriminable state space: 63/64 master refs covered with no target reuse.
  - [x] `c3-conventional-052` (スカイブルー) formally deferred for `color_to_name`: the current association reference value `#8ED1E0` is identical to `c3-conventional-017` 空色, so monitor-only identification is ambiguous and is not required for the useful-state-space gate.
  - [x] `name_to_color` checkpoint 0017-0024: 8 generated as pending first and independently verified; 0 pending. Targets c3-002, 003, 005, 006, 007, 009, 010, 011.
  - [x] `name_to_color` checkpoint 0025-0032: 8 generated as pending first and independently verified; 0 pending. Targets c3-012, 013, 014, 015, 017, 019, 020, 021.
  - [ ] Continue `name_to_color` authoring at question 0033 with c3-conventional-022 群青色.
- [ ] Independent QA for all conventional-color questions.
- [ ] Promote verified authoring checkpoints into `grade3-runtime.json` only after consistency tests pass.
- [ ] Conventional-color coverage gate: both directions cover the useful authoritative master state space, pending=0, duplicates/schema/references pass; do not force a monitor-indistinguishable item merely to claim 64/64.

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
