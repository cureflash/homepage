# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 400
- QA checked: 400
- Verified: 400
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_type.irregular` with IDs 0026-0050, bringing this micro-skill to 50/100.

New IDs:
`kobun_verb_conjugation_type_irregular_0026` through `kobun_verb_conjugation_type_irregular_0050`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-irregular/pending/batch-20260828-012.json`

Coverage keeps the four classical irregular conjugations explicit: カ変 `来`, サ変 `す・おはす`, ナ変 `死ぬ・往ぬ`, and ラ変 `あり・をり・侍り`. Forms span 未然・連用・終止・連体・已然・命令. No invented historical forms were added.

Answer positions in this batch: A/B/C/D = 7/6/6/6. Across irregular IDs 0001-0050 the distribution is 13/13/12/12.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-012-irregular.qa.json`

External grammar spot-checks reconfirmed the standard lexical membership and paradigms for カ変・サ変・ナ変・ラ変. Exact stems are unique within this batch. Full-bank semantic near-duplicate clearance remains pending.

## Next generation
Continue:
`kobun.verb.conjugation_type.irregular`

Resume at:
`kobun_verb_conjugation_type_irregular_0051`

Target remains 100 questions. Continue balancing the four irregular classes and conjugation forms; avoid invented forms and visually ambiguous strings. Aim for eventual A/B/C/D balance across the 100-question bank.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
