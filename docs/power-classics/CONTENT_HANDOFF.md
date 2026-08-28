# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 675
- QA checked: 675
- Verified: 675
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_form` with IDs 0201-0225, bringing this micro-skill to 225/300.

New IDs:
`kobun_verb_conjugation_form_0201` through `kobun_verb_conjugation_form_0225`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-form/pending/batch-20260828-023.json`

Final coverage spans 四段・上一段・下二段・カ変・サ変・ナ変・ラ変 and all six conjugation forms. Each item uses an explicit syntactic cue, sentence-final use, noun modification, or direct imperative context so the requested form is unique. During QA, a draft at 0218 incorrectly treated `記す` as サ変; it was corrected before final approval to the unambiguous サ変 verb `記録す`.

Answer positions in this batch: A/B/C/D = 7/6/6/6.

## This checkpoint — QA
Re-solved all 25 new questions item by item from stem + choices before final key/explanation approval.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-023-conjugation-form.qa.json`

Exact stems are unique within this batch. Maximum within-batch SequenceMatcher similarity is 0.795, below the 0.94 high-similarity review threshold. Full-bank semantic near-duplicate clearance remains pending.

## Next generation
Continue:
`kobun.verb.conjugation_form`

Resume at:
`kobun_verb_conjugation_form_0226`

Taxonomy target is 300 questions.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
