# Power TOEIC CONTENT handoff

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Generated micro-skills: **15 / 44**
- Generated questions: **1,500**
- QA checked: **400**
- Verified: **374**
- Needs revision: **26**
- Rejected: **0**
- Unchecked `pending_validation`: **1,100**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint

Generated `p5.verb.gerund_pattern` **100/100** as four 25-question pending checkpoints:

- `subjects/english/power-toeic/js/data/questions/part5/verbs/gerund-pattern/pending/batch-20260827-014-part1.json`
- `...part2.json`
- `...part3.json`
- `...part4.json`

Generation checks for these 100:
- IDs `0001`–`0100` sequential and unique
- exactly one blank per stem
- four distinct choices per item
- valid answer indexes
- proposed answer position A/B/C/D = **25/25/25/25**
- exact duplicate stems = **0**
- SequenceMatcher similarity >= 0.94 within this skill = **0 pairs**
- maximum observed within-skill similarity ≈ **0.800**
- business contexts were rewritten after an initial self-check to remove repeated generic tail templates and improve structural/contextual diversity
- one pre-persistence issue in 0097 (`cut` base/past surface-form collision) was corrected by replacing the duplicate distractor with a distinct finite form
- full semantic cross-bank scan across all 1,500 questions is **not completed**, so do not claim global near-duplicate clearance

All new 100 remain `pending_validation`.

## QA in the same checkpoint

Independently checked the oldest 100 pending questions: `p5.pos.noun_in_noun_slot`.

Result: **96 verified / 4 needs_revision / 0 rejected**.

Needs revision:
- `p5_pos_noun_in_noun_slot_0012` — singular `efficiency` and plural `efficiencies` are both defensible.
- `p5_pos_noun_in_noun_slot_0052` — `frequency` / `frequencies` can both work depending on meeting-series interpretation.
- `p5_pos_noun_in_noun_slot_0057` — `availability` / `availabilities` can both be defensible in booking context.
- `p5_pos_noun_in_noun_slot_0098` — `energy economy` is too marked/awkward for a general TOEIC item.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-manual-001-noun-in-noun-slot.qa.json`

Only the 96 approved IDs are eligible for a future production-bank build.

## Next generation

`p5.verb.causative_have_make_let`

Resume ID:
`p5_verb_causative_have_make_let_0001`

Generate 100 if quality permits. Keep all new candidates `pending_validation`.

## Next QA

Oldest unchecked skill:
`p5.pos.adjective_after_linking_verb`

Start:
`p5_pos_adjective_after_linking_verb_0001`

Source batch:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adjective-after-linking-verb/pending/batch-20260826-001.json`

Do not use proposed answer/explanation before independently solving each item.
