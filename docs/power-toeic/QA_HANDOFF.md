# Power TOEIC QA handoff

## Current QA state

- Checked: 2,275
- Verified: 2,200
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict order.

### `p5.conn.during_vs_while` 0076-0100

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Every blank is followed by a finite clause, so `while` is uniquely valid in the targeted contrast; `during` requires a noun phrase.

### `p5.conn.by_vs_until` 0001-0075

- Checked: 75
- Verified: 75
- Needs revision: 0
- Rejected: 0

Each item was reviewed individually. Completion/deadline contexts uniquely require `by`; continuing actions or states ending at a specified point uniquely require `until`. Naturalness, target-skill fit, distractor plausibility, and explanation consistency were checked. No alternate defensible answer or explanation mismatch was found.

QA records:

- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-during-vs-while-part4.qa.json`
- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-by-vs-until-part1.qa.json`
- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-by-vs-until-part2.qa.json`
- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-by-vs-until-part3.qa.json`

### QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless independently re-solved against all four choices before approval.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next QA

Continue the oldest unchecked backlog at:

`p5_conn_by_vs_until_0076`

Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
