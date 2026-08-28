# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 525
- QA checked: 525
- Verified: 525
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_form` with IDs 0051-0075, bringing this micro-skill to 75/300.

New IDs:
`kobun_verb_conjugation_form_0051` through `kobun_verb_conjugation_form_0075`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-form/pending/batch-20260828-017.json`

Coverage spans 未然・連用・終止・連体・已然・命令 across 四段・上一段・上二段・下二段・ラ変. Explicit syntactic cues (`む` / `ず` / `けり` / `て` / `ども`), sentence-final use, noun modification, and imperative contexts keep the requested form unique.

Answer positions in this batch: A/B/C/D = 6/6/7/6. Across conjugation-form IDs 0001-0075 the distribution is 19/19/19/18.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-017-conjugation-form.qa.json`

A draft stem that exactly overlapped an earlier conjugation-form item was rewritten before persistence. Final exact stems are unique within this batch and against IDs 0001-0050. Full-bank semantic near-duplicate clearance remains pending.

## Next generation
Continue:
`kobun.verb.conjugation_form`

Resume at:
`kobun_verb_conjugation_form_0076`

Taxonomy target is 300 questions. Continue balancing the six conjugation forms and conjugation classes while keeping each stem explicit enough to rule out form ambiguity.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
