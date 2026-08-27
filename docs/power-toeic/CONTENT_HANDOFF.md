# Power TOEIC CONTENT handoff

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Completed generated micro-skills: **17 / 44**
- Current micro-skill: `p5.verb.participle_clause` **25/100 persisted**
- Generated questions: **1,725**
- QA checked: **700**
- Verified: **669**
- Needs revision: **31**
- Rejected: **0**
- Unchecked `pending_validation`: **1,025**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Persisted `p5.verb.participle_clause` IDs **0001-0025** under:

`subjects/english/power-toeic/js/data/questions/part5/verbs/participle-clause/pending/batch-20260827-017-part1.json`

This checkpoint focuses on active reduced participle clauses where the main-clause subject also performs the reduced-clause action.

Checks:
- sequential unique IDs 0001-0025
- exactly one blank per stem
- four distinct visible choices
- valid proposed-answer indexes
- answer positions A/B/C/D = **7/6/6/6**
- exact duplicate stems = **0**
- SequenceMatcher similarity >= 0.94 = **0 pairs**
- maximum observed similarity ≈ **0.599**

A broader 100-question draft covering active/passive and conjunction-reduced clauses was prepared, but only this validated 25-question safe checkpoint was persisted. Continue from `p5_verb_participle_clause_0026`; do not count unpersisted draft items.

Full semantic cross-bank near-duplicate scanning across all 1,725 candidates is still **not completed**.

## This checkpoint — QA

Independently reviewed `p5.pos.word_form_subject_position` **100/100**, solving from stem + choices before consulting the stored proposed answer/explanation.

Result:
- Checked: **100**
- Verified: **99**
- Needs revision: **1**
- Rejected: **0**

`p5_pos_word_form_subject_position_0038` is `needs_revision`: both `security of confidential documents` and the gerundial nominalization `securing of confidential documents` can be defended, so the displayed sentence does not force one unique answer strongly enough.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-017-word-form-subject-position.qa.json`

Approved-ID gate:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/word-form-subject-position/verified/batch-20260827-017-approved-ids.json`

## Next generation

Continue `p5.verb.participle_clause` from:

`p5_verb_participle_clause_0026`

Complete the remaining 75 questions in safe 25-question checkpoints if quality permits.

## Next QA

Oldest unchecked micro-skill:

`p5.pos.word_form_object_position`

Start:
`p5_pos_word_form_object_position_0001`
