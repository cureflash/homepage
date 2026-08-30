# Power TOEIC QA handoff

## Current QA state

- Checked: 4,250
- Verified: 4,152
- Needs revision: 98
- Rejected: 0
- Unchecked `pending_validation`: 150
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict backlog order.

- `p5.vocab.phrasal_verb` 0051-0100: 50 checked / 45 verified / 5 needs_revision / 0 rejected.
- `p5.vocab.business_context` 0001-0050: 50 checked / 50 verified / 0 needs_revision / 0 rejected.

Needs-revision items:

- `p5_vocab_phrasal_verb_0051`: `set out` and `run over` are both defensible.
- `p5_vocab_phrasal_verb_0079`: `call off several reservations` is not natural target usage.
- `p5_vocab_phrasal_verb_0081`: keyed `match up ... against` complementation is awkward.
- `p5_vocab_phrasal_verb_0091`: `lay out` and `run through` are both defensible.
- `p5_vocab_phrasal_verb_0099`: `replace` and `track down` are both defensible.

Each item was reviewed individually for unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, explanation consistency, and answer-position/template pattern. No exact duplicate was identified within these four reviewed 25-item batches. The persisted source co-locates keys with stems, so strict technical answer-blinding cannot be guaranteed in connector-only access; no item was approved without individual review.

## Next QA

Continue at `p5_vocab_business_context_0051`.
