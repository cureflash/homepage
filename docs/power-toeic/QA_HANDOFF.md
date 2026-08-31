# Power TOEIC QA handoff

## Current QA state

- Checked: 4,350
- Verified: 4,249
- Needs revision: 101
- Rejected: 0
- Unchecked `pending_validation`: 50
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict backlog order.

- `p5.vocab.business_context` 0051-0100: 50 checked / 50 verified / 0 needs_revision / 0 rejected.
- `p5.vocab.confusing_words` 0001-0050: 50 checked / 47 verified / 3 needs_revision / 0 rejected.

Needs-revision items:

- `p5_vocab_confusing_words_0014`: `contain` and `comprise` both correctly complete the sentence; `combine` is also arguable depending on intended meaning.
- `p5_vocab_confusing_words_0028`: both `quote` and `quotation` correctly complete `price ____`.
- `p5_vocab_confusing_words_0039`: both `provide` and `supply` are natural with `two professional references`.

Each item was reviewed individually for unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, explanation consistency, and answer-position/template pattern. No exact duplicate was identified within these four reviewed 25-item batches. The persisted source co-locates keys with stems, so strict technical answer-blinding cannot be guaranteed in connector-only access; no item was approved without individual review.

## Next QA

Continue at `p5_vocab_confusing_words_0051`.
