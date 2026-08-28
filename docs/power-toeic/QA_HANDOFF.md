# Power TOEIC QA handoff

## Current QA state

- Checked: **1,800**
- Verified: **1,725**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.participle_clause` 0076-0100

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

This final set mixes active and passive reduced clauses. Items requiring active present participles and those requiring passive past participles were each re-solved against all four choices, with subject-control, voice, naturalness, target-skill fit, distractor plausibility, and explanation consistency checked individually. No dangling-subject conflict, alternate defensible answer, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-037-participle-clause-part4.qa.json`

`p5.verb.participle_clause` is now fully checked at **100/100**.

### QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless independently re-solved against all four choices before approval.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next QA

Continue the oldest unchecked backlog at:

`p5_conn_preposition_vs_conjunction_0001`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
