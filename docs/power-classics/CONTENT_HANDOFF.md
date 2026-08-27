# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 325
- QA checked: 325
- Verified: 325
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_type.shimo_nidan` and persisted IDs 0051-0075, bringing this micro-skill to 75/100.

New IDs:
`kobun_verb_conjugation_type_shimo_nidan_0051` through `kobun_verb_conjugation_type_shimo_nidan_0075`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-shimo-nidan/pending/batch-20260828-009.json`

This checkpoint deliberately emphasizes 命令形, the least-covered form in the previous 50 items. It uses attested lower-bigrade verbs including ワ行 `植う・飢う・据う`, plus regular 下二段 verbs such as `受く・出づ・求む・捨つ・越ゆ・答ふ・与ふ`. No invented verbs were introduced solely for diversity.

Answer positions: A/B/C/D = 6/6/7/6. Exact stem duplicates within the new batch: 0.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-009-shimo-nidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.shimo_nidan` is now 75/100.

Resume at:
`kobun_verb_conjugation_type_shimo_nidan_0076`

Use the final 25 to complete 100/100 while restoring broader balance across 未然・連用・終止・連体・已然・命令 forms. Continue avoiding homographs or semantic uses whose historical conjugation type is not uniquely recoverable from the stem.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
