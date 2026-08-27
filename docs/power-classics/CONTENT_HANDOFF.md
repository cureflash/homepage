# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 250
- QA checked: 250
- Verified: 250
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Completed `kobun.verb.conjugation_type.kami_nidan` from 75/100 to 100/100 and persisted 25 new Phase A questions.

New IDs:
`kobun_verb_conjugation_type_kami_nidan_0076` through `kobun_verb_conjugation_type_kami_nidan_0100`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-kami-nidan/pending/batch-20260828-006.json`

The checkpoint reuses attested 上二段 lexemes and emphasizes 已然形・命令形 evidence. No invented verbs were introduced solely to force lexical diversity.

Answer positions: A/B/C/D = 5/6/7/7 for the 25 new items; cumulative kami-nidan 0001-0100 = 25/25/25/25.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting their stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-006-kami-nidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.kami_nidan` has reached its Phase A target of 100/100.

Resume at:
`kobun_verb_conjugation_type_shimo_nidan_0001`

Next micro-skill: `kobun.verb.conjugation_type.shimo_nidan` (下二段活用の判定), target 100. Start with attested 下二段 verbs and diversify evidence across 未然・連用・終止・連体・已然・命令 forms. Do not invent verbs to force lexical diversity; quarantine homographs where the historical conjugation is not uniquely recoverable from context.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
