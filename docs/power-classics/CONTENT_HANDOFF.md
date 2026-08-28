# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 450
- QA checked: 450
- Verified: 450
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Completed `kobun.verb.conjugation_type.irregular` with IDs 0076-0100, bringing this micro-skill to 100/100.

New IDs:
`kobun_verb_conjugation_type_irregular_0076` through `kobun_verb_conjugation_type_irregular_0100`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-irregular/pending/batch-20260828-014.json`

Coverage keeps the four classical irregular conjugations explicit: カ変 `来`, サ変 `す・おはす`, ナ変 `死ぬ・往ぬ`, and ラ変 `あり・をり・侍り`. Forms span 未然・連用・終止・連体・已然・命令. No invented historical forms were added.

Answer positions in this batch: A/B/C/D = 6/6/6/7. Across irregular IDs 0001-0100 the distribution is 25/25/25/25.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-014-irregular.qa.json`

Exact stems are unique within this batch. Full-bank semantic near-duplicate clearance remains pending.

## Next generation
Advance to:
`kobun.verb.conjugation_form`

Resume at:
`kobun_verb_conjugation_form_0001`

Taxonomy target is 300 questions. Keep each item focused on identifying 未然・連用・終止・連体・已然・命令 from an explicit classical form/context, and continue independent QA in 25-question checkpoints.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.