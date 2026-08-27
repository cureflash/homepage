# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 175
- QA checked: 175
- Verified: 175
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Started `kobun.verb.conjugation_type.kami_nidan` and persisted the first 25/100 Phase A questions.

New IDs:
`kobun_verb_conjugation_type_kami_nidan_0001` through `kobun_verb_conjugation_type_kami_nidan_0025`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-kami-nidan/pending/batch-20260827-004.json`

The checkpoint uses attested classical 上二段 verbs instead of invented lexical variety. Core lexemes include 起く・過ぐ・尽く・落つ・恥づ・恋ふ・生ふ・滅ぶ・老ゆ・吹き閉づ. The core paradigm is i・i・u・uる・uれ・iよ, and this checkpoint covers direct identification, 未然形＋ず, and the beginning of 連用形＋て contexts.

Answer positions: A/B/C/D = 7/6/6/6.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting their stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-27-scheduled-004-kami-nidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.kami_nidan` is at 25/100 for Phase A.

Resume at:
`kobun_verb_conjugation_type_kami_nidan_0026`

Continue legitimate 上二段 inventory across distinct 連用・終止・連体・已然・命令/paradigm contexts. Do not invent verbs to force lexical diversity. Quarantine any item where homography or modern-language analogy makes the historical conjugation ambiguous without sufficient context.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
