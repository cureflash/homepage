# Power TOEIC QA handoff

## Current QA state

- Checked: **1,750**
- Verified: **1,675**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.participle_clause` 0026-0050

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 items use a passive reduced participle clause. In every item, the main-clause subject receives the action expressed by the opening phrase, making the past participle uniquely defensible against the present-participle, base-form, and infinitive distractors. Each item was re-solved against all four choices; no dangling-subject conflict, alternate natural answer, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-035-participle-clause-part2.qa.json`

### QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless independently re-solved against all four choices before approval.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next QA

Continue the oldest unchecked backlog at:

`p5_verb_participle_clause_0051`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
