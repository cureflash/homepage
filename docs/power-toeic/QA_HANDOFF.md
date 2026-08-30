# Power TOEIC QA handoff

## Current QA state

- Checked: 4,050
- Verified: 3,958
- Needs revision: 92
- Rejected: 0
- Unchecked `pending_validation`: 350
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict backlog order.

- `p5.vocab.adjective_noun_collocation` 0051-0100: 50 checked / 49 verified / 1 needs_revision / 0 rejected.
- `p5.vocab.preposition_collocation` 0001-0050: 50 checked / 50 verified / 0 needs_revision / 0 rejected.

`p5_vocab_adjective_noun_collocation_0081` is `needs_revision`: `severe warning` is not sufficiently idiomatic for the intended TOEIC-style adjective-noun collocation item and should be rewritten before approval.

Each item was reviewed individually for unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, explanation consistency, and answer-position/template pattern. The persisted source co-locates keys with stems, so strict technical answer-blinding cannot be guaranteed in connector-only access; no item was approved without individual review.

## Next QA

Continue at `p5_vocab_preposition_collocation_0051`.
