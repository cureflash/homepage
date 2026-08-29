# Power TOEIC QA handoff

## Current QA state

- Checked: 2,375
- Verified: 2,299
- Needs revision: 76
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict order.

- `p5.conn.by_vs_until` 0076-0100: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- `p5.conn.for_vs_since` 0001-0025: 25 / 25 / 0 / 0.
- `p5.conn.for_vs_since` 0026-0050: 25 / 24 / 1 / 0.
- `p5.conn.for_vs_since` 0051-0075: 25 / 25 / 0 / 0.

`p5_conn_for_vs_since_0038` remains `needs_revision` because its time expression is not natural enough for production use. It was not silently promoted.

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless re-solved individually before comparison.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next QA

Continue at `p5_conn_for_vs_since_0076`.
