# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 575
- QA checked: 575
- Verified: 575
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_form` with IDs 0101-0125, bringing this micro-skill to 125/300.

New IDs:
`kobun_verb_conjugation_form_0101` through `kobun_verb_conjugation_form_0125`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-form/pending/batch-20260828-019.json`

Coverage spans 未然・連用・終止・連体・已然・命令 across 四段・上一段・上二段・下二段・カ変・サ変・ナ変・ラ変. `尋ぬ`・`濡る`・`降る（おる）` were externally cross-checked before verification. Explicit syntactic cues (`む` / `たり` / `て` / `ば` / `ども`), sentence-final use, noun modification, and imperative contexts keep the requested form unique.

Answer positions in this batch: A/B/C/D = 7/6/6/6.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-019-conjugation-form.qa.json`

Exact stems are unique within this batch. Maximum within-batch SequenceMatcher similarity is 0.829, below the 0.94 high-similarity review threshold. Full-bank semantic near-duplicate clearance remains pending.

## Next generation
Continue:
`kobun.verb.conjugation_form`

Resume at:
`kobun_verb_conjugation_form_0126`

Taxonomy target is 300 questions. Continue balancing the six conjugation forms and conjugation classes while keeping each stem explicit enough to rule out form ambiguity.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
