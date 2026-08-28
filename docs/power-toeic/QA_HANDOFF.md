# Power TOEIC QA handoff

## Current QA state

- Checked: **1,675**
- Verified: **1,600**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.conditional_form` 0051-0075

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 items are unreal past conditionals. Their result clauses use `would/could/might have + past participle`, so the if-clause requires past perfect; each four-choice set has one defensible past-perfect answer. Sentence naturalness, temporal consistency, distractor plausibility, target-skill fit, and explanation consistency were checked item by item.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-032-conditional-part3.qa.json`

### QA-method limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only file access therefore cannot technically guarantee a hidden-key first pass. Each item was nevertheless independently re-solved against all four choices before approval.

Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status. Repo-local full schema/Node tests were not executed in this connector-only run.

## Next QA

Continue the oldest unchecked backlog at:

`p5_verb_conditional_form_0076`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
