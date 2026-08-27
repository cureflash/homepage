# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 150
- QA checked: 150
- Verified: 150
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Completed `kobun.verb.conjugation_type.kami_ichidan` to its Phase A target.

New IDs:
`kobun_verb_conjugation_type_kami_ichidan_0001` through `kobun_verb_conjugation_type_kami_ichidan_0050`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-kami-ichidan/pending/batch-20260827-003.json`

Because classical 上一段 has a small legitimate lexical inventory, the 50 questions intentionally reuse valid verbs across genuinely distinct direct/未然/連用/連体/已然/命令 contexts instead of inventing fake lexical variety. Core drill lexemes are 見る・着る・似る・煮る・干る・居る・射る・率る・鋳る.

Answer positions: A/B/C/D = 13/13/12/12.

## This checkpoint — QA
Independently re-solved all 50 new questions from stem + choices before consulting their stored answer/explanation.

- checked: 50
- verified: 50
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-27-scheduled-003-kami-ichidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.kami_ichidan` is complete at 50/50 for Phase A.

Advance taxonomy order to:
`kobun.verb.conjugation_type.kami_nidan`

Resume at:
`kobun_verb_conjugation_type_kami_nidan_0001`

Phase A target for 上二段活用判定: 100.

Use legitimate classical 上二段 verbs, and quarantine items where modern-language analogy could hide a historical conjugation mismatch.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
