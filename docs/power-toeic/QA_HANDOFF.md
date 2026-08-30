# Power TOEIC QA handoff

## Current QA state

- Checked: 3,850
- Verified: 3,759
- Needs revision: 91
- Rejected: 0
- Unchecked `pending_validation`: 550
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict backlog order.

- `p5.det.another_other_others` 0051-0100: 50 checked / 50 verified / 0 needs_revision / 0 rejected.
- `p5.vocab.verb_noun_collocation` 0001-0050: 50 checked / 49 verified / 1 needs_revision / 0 rejected.

`p5_vocab_verb_noun_collocation_0020` is `needs_revision`: both `refuse coverage` and keyed `deny coverage` are natural insurance collocations in the supplied sentence, so it does not have a unique answer. It was not approved.

Each item was reviewed individually for unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, explanation consistency, and answer-position/template pattern. The persisted source co-locates keys with stems, so strict technical answer-blinding cannot be guaranteed in connector-only access; no item was approved without individual review.

## Next QA

Continue at `p5_vocab_verb_noun_collocation_0051`.
