# Power TOEIC QA handoff

## Current QA state

- Checked: **975**
- Verified: **939**
- Needs revision: **36**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA work

Micro-skill: `p5.verb.present_vs_past`
Range completed: `0051-0075`

Independent result:
- 25 checked
- 22 verified
- 3 needs_revision
- 0 rejected

Each item was solved from stem + choices before consulting the stored proposed answer/explanation.

The 22 verified items contain explicit completed-past cues such as `yesterday`, `last Friday`, `two days ago`, `last week`, `last night`, `last Thursday`, `last Wednesday`, `last Saturday`, or `last year`, so the simple past is uniquely supported in the displayed sentence.

Three items remain `needs_revision` because the intended past-time interpretation is not uniquely forced:

- `p5_verb_present_vs_past_0057` — `for Tuesday's board meeting`; add `last Tuesday` or another explicit past marker.
- `p5_verb_present_vs_past_0062` — `after Monday's hiring event`; use `last Monday` or another explicit past marker.
- `p5_verb_present_vs_past_0074` — `during Sunday's system upgrade`; use `last Sunday's system upgrade`.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-021-part3-present-vs-past.qa.json`

Full-bank semantic near-duplicate clearance is not claimed. `verified` still does not mean production-approved until the final revision-bound cross-bank duplicate gate passes.

## Next QA

Continue the same oldest pending micro-skill:

`p5.verb.present_vs_past`

Start ID:

`p5_verb_present_vs_past_0076`

Continue independent re-solving from stem + choices before reading stored proposed answers or explanations. Work in 25-question safe checkpoints.
