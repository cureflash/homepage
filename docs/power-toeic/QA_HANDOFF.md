# Power TOEIC QA handoff

## Current QA state

- Checked: **1,425**
- Verified: **1,356**
- Needs revision: **69**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.gerund_pattern` 0001-0025

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

The displayed items use `avoid`, `consider`, `finish`, `postpone`, and `recommend`. Each sentence uniquely requires a gerund complement among the four choices, is natural enough for TOEIC-style business English, and has an explanation consistent with the keyed answer.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-gerund-part1.qa.json`

### QA-method limitation

The candidate JSON format stores the stem, choices, proposed answer and explanation together. With connector-only file access, strict hiding of answer fields before reading the stem is not technically enforceable. This run therefore re-solved each displayed sentence against all four choices and then checked answer/explanation consistency. Do not interpret this as equivalent to a truly blinded second-solver pass.

Full-bank semantic near-duplicate clearance is still not claimed. `verified` does not mean production-approved until the revision-bound cross-bank duplicate gate passes.

## Next QA

Continue the same micro-skill from:

`p5_verb_gerund_pattern_0026`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved and must not be silently promoted.
