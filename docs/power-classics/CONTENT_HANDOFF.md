# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 200
- QA checked: 200
- Verified: 200
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_type.kami_nidan` from 25/100 to 50/100 and persisted 25 new Phase A questions.

New IDs:
`kobun_verb_conjugation_type_kami_nidan_0026` through `kobun_verb_conjugation_type_kami_nidan_0050`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-kami-nidan/pending/batch-20260828-005a.json`

The checkpoint deliberately reuses attested 上二段 lexemes rather than inventing lexical variety. It extends the evidence to 連用形＋「て」「つつ」「けり」 while preserving the core i・i・u・uる・uれ・iよ paradigm. Exact stem duplicates were avoided against the preceding checkpoint.

Answer positions: A/B/C/D = 6/7/6/6 for the 25 new items; cumulative kami-nidan 0001-0050 = 13/13/12/12.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting their stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-005a-kami-nidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.kami_nidan` is at 50/100 for Phase A.

Resume at:
`kobun_verb_conjugation_type_kami_nidan_0051`

Continue with distinct 終止・連体・已然・命令 contexts using legitimate 上二段 inventory. Do not invent verbs to force lexical diversity. Quarantine any item where homography or modern-language analogy makes the historical conjugation ambiguous without sufficient context.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
