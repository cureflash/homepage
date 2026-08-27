# Power TOEIC QA handoff

## Current QA state

- Checked: **1,100**
- Verified: **1,040**
- Needs revision: **60**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA work

Micro-skill: `p5.verb.present_perfect_vs_past`
Range completed: `0001-0100`

Independent result:
- 100 checked
- 80 verified
- 20 needs_revision
- 0 rejected

Each item was solved from stem + choices before consulting the stored proposed answer/explanation.

The 50 simple-past-target questions use explicit completed-past anchors and all passed. Present-perfect items using strong continuing-to-present markers such as `so far this week`, `since ...`, `up to now`, and `over the past three months` also passed.

Twenty items remain `needs_revision` because their stored explanations treat a time cue as uniquely requiring present perfect when standard business English still permits simple past:

- `already`: 0001, 0011, 0021, 0031, 0041
- `during the current quarter`: 0002, 0012, 0022, 0032, 0042
- `this year`: 0003, 0013, 0023, 0033, 0043
- `recently`: 0005, 0015, 0025, 0035, 0045

Recommended repair patterns:
- `already` -> add `as of today` / `so far`
- `during the current quarter` -> `so far this quarter`
- `this year` -> `so far this year` / `as of today`
- `recently` -> `so far this week` / `up to now`

After repair, each item must be independently re-solved before it can become verified.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-022-present-perfect-vs-past.qa.json`

Full-bank semantic near-duplicate clearance is not claimed. `verified` still does not mean production-approved until the revision-bound cross-bank duplicate gate passes.

## Next QA

Continue with the oldest unchecked pending micro-skill:

`p5.verb.active_vs_passive`

Start ID:

`p5_verb_active_vs_passive_0001`

Continue independent re-solving from stem + choices before reading stored proposed answers or explanations. Work in 25-question safe checkpoints.
