# Power TOEIC QA handoff

## Current QA state

- Checked: **1,225**
- Verified: **1,160**
- Needs revision: **65**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest unchecked backlog in strict order, solving from stem + choices before consulting the stored proposed answer/explanation.

### `p5.verb.active_vs_passive` 0026-0050

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

All 25 have unique plural-subject present-passive answers and acceptable business English.

### `p5.verb.active_vs_passive` 0051-0075

- Checked: 25
- Verified: 23
- Needs revision: 2
- Rejected: 0

Needs revision:
- `p5_verb_active_vs_passive_0060`: intended active-past answer is unique, but `during yesterday's review during the shutdown` is repetitive and below the naturalness gate.
- `p5_verb_active_vs_passive_0070`: intended active-past answer is unique, but `during yesterday's review after the review meeting` is redundant/awkward.

### `p5.verb.active_vs_passive` 0076-0100

- Checked: 25
- Verified: 24
- Needs revision: 1
- Rejected: 0

Needs revision:
- `p5_verb_active_vs_passive_0084`: intended active-present answer is unique, but `before each monthly review before the due date` repeats the timing structure and fails the finished-item naturalness standard.

This completes independent first-pass QA of the remaining `active_vs_passive` backlog. Existing earlier needs-revision IDs 0013 and 0016 remain unresolved; do not silently promote them.

### `p5.verb.modal_base_form` 0001-0025

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

All 25 uniquely require the bare infinitive after a modal verb; stored explanations agree with the independently selected answer.

## Run total

- Checked: **100**
- Verified: **97**
- Needs revision: **3**
- Rejected: **0**

QA records for all four 25-question checkpoints are stored under:

`subjects/english/power-toeic/js/data/questions/part5/qa/`

Full-bank semantic near-duplicate clearance is still not claimed. `verified` does not mean production-approved until the revision-bound cross-bank duplicate gate passes.

## Next QA

Continue the oldest unchecked micro-skill:

`p5.verb.modal_base_form`

Start ID:

`p5_verb_modal_base_form_0026`

Continue independent re-solving in 25-question safe checkpoints before reading stored proposed answers or explanations.
