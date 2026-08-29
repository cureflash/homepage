# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Fully completed generated micro-skills: 33 / 44
- Generated questions persisted: 3,375
- QA checked: 2,375
- Verified: 2,299
- Needs revision: 76
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Generated 100 questions in four safe checkpoints.

- `p5.pron.indefinite_agreement` 0076-0100: 25 questions; skill completed at 100/100.
- `p5.det.article_choice` 0001-0025: 25 questions.
- `p5.det.article_choice` 0026-0050: 25 questions.
- `p5.det.article_choice` 0051-0075: 25 questions.

All new items remain `pending_validation`. Across the new 100 stems: exact duplicates = 0, SequenceMatcher >= 0.94 = 0, maximum pairwise similarity = 0.628. Article-choice answer positions for 0001-0075 are A/B/C/D = 19/19/19/18.

Next generation: `p5_det_article_choice_0076`.

## This run — QA

Reviewed the oldest 100 unchecked questions in strict order.

- `p5.conn.by_vs_until` 0076-0100: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- `p5.conn.for_vs_since` 0001-0025: 25 / 25 / 0 / 0.
- `p5.conn.for_vs_since` 0026-0050: 25 / 24 / 1 / 0.
- `p5.conn.for_vs_since` 0051-0075: 25 / 25 / 0 / 0.

`p5_conn_for_vs_since_0038` remains `needs_revision`: the time expression is not natural enough for a production Part 5 item and was not promoted.

## QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_for_vs_since_0076`.
