# Power TOEIC QA handoff

## Current QA state

- Checked: **1,375**
- Verified: **1,307**
- Needs revision: **68**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order.

### `p5.verb.to_infinitive_pattern` 0051-0075

- Checked: **25**
- Verified: **22**
- Needs revision: **3**
- Rejected: **0**

The intended infinitive construction is structurally valid throughout the source batch, but three displayed sentences are not natural/temporally coherent enough to approve:

- `p5_verb_to_infinitive_pattern_0055`: `managed ... during the next quarter` pairs a completed past achievement with a future-time phrase.
- `p5_verb_to_infinitive_pattern_0056`: `attempted ... during the next quarter` has the same past/future conflict.
- `p5_verb_to_infinitive_pattern_0057`: `failed ... during the next quarter, despite two reminders` is especially inconsistent because both the past failure and reminders imply a completed episode while the time phrase points forward.

These remain `needs_revision`; they were not silently promoted merely because the infinitive answer itself is obvious.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-to-infinitive-part3.qa.json`

### QA-method limitation

The candidate JSON format stores the stem, choices, proposed answer and explanation together. With connector-only file access, strict hiding of answer fields before reading the stem is not technically enforceable. This run therefore re-solved each displayed sentence against all four choices and then checked answer/explanation consistency, while explicitly refusing incoherent items. Do not interpret this as equivalent to a truly blinded second-solver pass.

Full-bank semantic near-duplicate clearance is still not claimed. `verified` does not mean production-approved until the revision-bound cross-bank duplicate gate passes.

## Next QA

Continue the same oldest unchecked micro-skill:

`p5.verb.to_infinitive_pattern`

Start ID:

`p5_verb_to_infinitive_pattern_0076`

Continue in 25-question safe checkpoints. Existing `needs_revision` items from this and earlier skills remain unresolved and must not be silently promoted.
