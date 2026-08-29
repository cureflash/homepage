# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 700
- QA checked: 700
- Verified: 700
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_form` with IDs 0226-0250, bringing this micro-skill to 250/300.

New IDs:
`kobun_verb_conjugation_form_0226` through `kobun_verb_conjugation_form_0250`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-form/pending/batch-20260830-024.json`

Coverage spans 四段・上一段・上二段・下二段・カ変・サ変・ナ変・ラ変 and all six conjugation forms. Each item uses an explicit syntactic cue, sentence-final use, noun modification, or direct imperative context so the requested form is unique.

Answer positions in this batch: A/B/C/D = 6/7/6/6.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before comparing the stored proposed answer and explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-30-scheduled-024-conjugation-form.qa.json`

All choices are distinct and each item has one correct form. Exact stems are unique within this batch. Maximum within-batch SequenceMatcher similarity is 0.872. Maximum similarity against the immediately preceding IDs 0201-0225 is 0.867. Both are below the 0.94 high-similarity review threshold. Full-bank semantic near-duplicate clearance remains pending.

## Next generation
Continue:
`kobun.verb.conjugation_form`

Resume at:
`kobun_verb_conjugation_form_0251`

Taxonomy target is 300 questions, so 50 remain for this micro-skill.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
