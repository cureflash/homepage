# Power TOEIC QA handoff

## Current QA state

- Checked: 2,100
- Verified: 2,025
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.conn.despite_vs_although` 0076-0100

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Each sentence and all four choices were reviewed individually. Every blank is followed by a complete finite clause, so the concessive conjunction `although` is uniquely valid; `despite` requires a noun phrase or gerund phrase. Structure, semantic relation, naturalness, target-skill fit, distractor plausibility, and explanation consistency were checked. No alternate defensible answer or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-049-despite-vs-although-part4.qa.json`

### QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless independently re-solved against all four choices before approval.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next QA

Continue the oldest unchecked backlog at:

`p5_conn_during_vs_while_0001`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
