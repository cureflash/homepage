# Power TOEIC CONTENT handoff

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Generated micro-skills: **16 / 44**
- Generated questions: **1,600**
- QA checked: **500**
- Verified: **470**
- Needs revision: **30**
- Rejected: **0**
- Unchecked `pending_validation`: **1,100**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint

Generated `p5.verb.causative_have_make_let` **100/100** as four 25-question pending checkpoints under:

`subjects/english/power-toeic/js/data/questions/part5/verbs/causative-have-make-let/pending/`

Files: `batch-20260827-015-part1.json` through `part4.json`.

Coverage is intentionally split across four causative forms: `have + person + base verb`, `make + person + base verb`, `let + person + base verb`, and `have + object + past participle`.

Generation checks for the 100:
- IDs `0001`–`0100` sequential and unique
- exactly one blank per stem
- four distinct choices per item
- valid answer indexes
- proposed answer position A/B/C/D = **25/25/25/25**
- exact duplicate stems = **0**
- SequenceMatcher similarity >= 0.94 within this skill = **0 pairs**
- maximum observed within-skill similarity ≈ **0.722**
- full semantic cross-bank scan across all 1,600 questions is **not completed**, so do not claim global near-duplicate clearance

All new 100 remain `pending_validation`.

## QA in the same checkpoint

Independently checked the oldest 100 pending questions: `p5.pos.adjective_after_linking_verb`.

Result: **96 verified / 4 needs_revision / 0 rejected**.

Needs revision:
- `p5_pos_adjective_after_linking_verb_0037`
- `p5_pos_adjective_after_linking_verb_0038`
- `p5_pos_adjective_after_linking_verb_0039`
- `p5_pos_adjective_after_linking_verb_0040`

All four fail the unique-answer gate because `secure` and participial adjective `secured` are both defensible in the stored contexts. They remain excluded from the approved-ID gate.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-015-adjective-after-linking-verb.qa.json`

Approved-ID gate:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adjective-after-linking-verb/verified/batch-20260826-001-approved-ids.json`

## Next generation

`p5.verb.conditional_form`

Resume ID:
`p5_verb_conditional_form_0001`

Generate 100 if quality permits. Keep all new candidates `pending_validation`.

## Next QA

Oldest unchecked skill:
`p5.pos.adverb_modifies_adjective`

Start:
`p5_pos_adverb_modifies_adjective_0001`

Continue independent re-solving before reading stored proposed answers/explanations.