# Power TOEIC QA handoff

## Current QA state

- Checked: **1,500**
- Verified: **1,425**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.gerund_pattern` 0076-0100

- Checked: **25**
- Verified: **19**
- Needs revision: **6**
- Rejected: **0**

The 19 approved items uniquely require gerund complements among the four displayed choices and are sufficiently natural for TOEIC-style use.

The following were not approved even though the intended gerund form is structurally clear, because whole-sentence naturalness/temporal consistency fails the QA gate:

- `0081`: present `mentions` with explicit past-time `during yesterday's project briefing`.
- `0086`: present `quits` with `after ... was approved`.
- `0087`: present `quits` with `when ... became available`.
- `0088`: one-time `quits ... after moving ...` is unnatural in simple present business prose.
- `0089`: present `quits` with `once ... was introduced`.
- `0090`: present `quits` with `when ... went live`.

These are minimal-revision candidates: adjust the matrix verb tense/aspect and then independently revalidate; do not silently promote them.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-gerund-part4.qa.json`

### QA-method limitation

The candidate JSON format stores stem, choices, proposed answer and explanation together. With connector-only file access, strict hiding of answer fields before reading the stem is not technically enforceable. Each displayed sentence was nevertheless re-solved against all four choices individually before accepting it. Do not interpret this as equivalent to a technically blinded second-solver pass.

Full-bank semantic near-duplicate clearance is still not claimed. `verified` does not mean production-approved until the revision-bound cross-bank duplicate gate passes.

### Test limitation

Repo-local full schema/Node tests were not executed in this connector-only run. The source batch and QA record were inspected through the GitHub connector.

## Next QA

The gerund-pattern 100-question pass is complete. Continue the oldest unchecked backlog at:

`p5_verb_causative_have_make_let_0001`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
