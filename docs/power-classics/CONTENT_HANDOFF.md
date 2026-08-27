# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 100
- QA checked: 100
- Verified: 100
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Completed `kobun.verb.conjugation_type.yodan` to its Phase A target.

New IDs:
`kobun_verb_conjugation_type_yodan_0031` through `kobun_verb_conjugation_type_yodan_0100`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-yodan/pending/batch-20260827-002.json`

70 new direct-identification questions were added. New answer positions are A/B/C/D = 17/17/18/18. Combined with IDs 0001-0030, the 100-question yodan bank is exactly A/B/C/D = 25/25/25/25.

During cross-batch exact-stem checking, `隠す` was detected as already used in ID 0030. The new ID 0050 was changed to `渡す` before the checkpoint was finalized.

## This checkpoint — QA
Independently re-solved all 70 new questions from stem + choices before consulting their stored answer/explanation.

- checked: 70
- verified: 70
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-27-scheduled-002-yodan.qa.json`

## Next generation
`kobun.verb.conjugation_type.yodan` is complete at 100/100 for Phase A.

Advance taxonomy order to:
`kobun.verb.conjugation_type.kami_ichidan`

Resume at:
`kobun_verb_conjugation_type_kami_ichidan_0001`

Phase A target for 上一段活用判定: 50.

Because classical 上一段 has a small finite lexical inventory, do not create fake lexical variety merely to reach 50. Use legitimate finite items plus genuinely distinct inflected/context forms, and quarantine any item whose conjugation classification is uncertain.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
