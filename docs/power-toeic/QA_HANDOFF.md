# Power TOEIC QA handoff

## Current QA state

- Checked: **1,775**
- Verified: **1,700**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.participle_clause` 0051-0075

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 items use an active reduced participle clause whose understood subject is the main-clause subject. Each item was re-solved against all four choices; the present participle is uniquely defensible, with no dangling-subject conflict, alternate natural answer, or explanation mismatch found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-036-participle-clause-part3.qa.json`

### QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless independently re-solved against all four choices before approval.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next QA

Continue the oldest unchecked backlog at:

`p5_verb_participle_clause_0076`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
