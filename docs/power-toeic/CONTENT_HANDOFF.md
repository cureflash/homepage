# Power TOEIC CONTENT handoff

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Generated micro-skills: **17 / 44**
- Generated questions: **1,700**
- QA checked: **600**
- Verified: **570**
- Needs revision: **30**
- Rejected: **0**
- Unchecked `pending_validation`: **1,100**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Generated `p5.verb.conditional_form` **100/100** as four 25-question pending checkpoints under:

`subjects/english/power-toeic/js/data/questions/part5/verbs/conditional-form/pending/`

Files: `batch-20260827-016-part1.json` through `part4.json`.

Coverage:
- real future conditions: present simple in the if-clause
- hypothetical present/future conditions: past simple + `would`
- unreal past conditions: past perfect + `would have`
- main-clause forms with `if`, `unless`, `provided that`, and `as long as`

Generation checks for the 100:
- IDs `0001`–`0100` sequential and unique
- exactly one blank per stem
- four distinct choices per item
- valid proposed-answer indexes
- proposed answer position A/B/C/D = **25/25/25/25**
- exact duplicate stems = **0**
- SequenceMatcher similarity >= 0.94 within this skill = **0 pairs**
- maximum observed within-skill similarity ≈ **0.713**
- full semantic cross-bank scan across all 1,700 candidates is **not completed**, so do not claim global near-duplicate clearance

All new 100 remain `pending_validation`.

## This checkpoint — QA and reconciliation

The previous QA status pointer incorrectly still named `p5.pos.adverb_modifies_adjective`. Reconciliation showed that this skill had already been independently validated in the earlier `2026-08-26-scheduled-002` QA checkpoint at **87 verified / 13 needs_revision**. That stricter existing QA result and approved-ID gate were preserved. A duplicate QA artifact created before discovering the stale pointer was deleted; no established QA result was overwritten.

The actual oldest unchecked micro-skill was `p5.pos.participle_adjective_ed_ing`.

Independent QA result for its 100 questions:
- Checked: **100**
- Verified: **100**
- Needs revision: **0**
- Rejected: **0**

All 100 independently resolved to the stored answer, remained uniquely answerable in context, cleanly measured the intended `-ed / -ing` participial-adjective distinction, and had explanations consistent with the independently selected answer.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-016-participle-adjective-ed-ing.qa.json`

Approved-ID gate:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/participle-adjective-ed-ing/verified/batch-20260826-003-approved-ids.json`

## Next generation

`p5.verb.participle_clause`

Resume ID:
`p5_verb_participle_clause_0001`

Generate 100 if quality permits. Keep all new candidates `pending_validation`.

## Next QA

Oldest unchecked skill:
`p5.pos.word_form_subject_position`

Start:
`p5_pos_word_form_subject_position_0001`

Continue independent re-solving from stem + choices before reading stored proposed answers/explanations. Keep checked and verified counts separate.
