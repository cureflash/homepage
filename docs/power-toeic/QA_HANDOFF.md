# Power TOEIC QA handoff

## Current QA state

- Checked: **1,000**
- Verified: **960**
- Needs revision: **40**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA work

Micro-skill: `p5.verb.present_vs_past`
Range completed: `0076-0100`

Independent result:
- 25 checked
- 21 verified
- 4 needs_revision
- 0 rejected

Each item was solved from stem + choices before consulting the stored proposed answer/explanation.

The 21 verified items contain explicit completed-past cues such as `last Monday`, `yesterday evening`, `last week's review`, `yesterday`, `last night`, `last Thursday`, `last month`, or `last Friday`, so the simple past is uniquely supported in the displayed sentence.

Four items remain `needs_revision` because the intended past-time interpretation is not uniquely forced:

- `p5_verb_present_vs_past_0080` — `after the stock check on Tuesday`; use `last Tuesday` or another explicit completed-past marker.
- `p5_verb_present_vs_past_0083` — `immediately after Monday's complaint`; use `last Monday` or another explicit completed-past marker.
- `p5_verb_present_vs_past_0085` — `early Monday morning`; use `early last Monday morning` or another explicit completed-past marker.
- `p5_verb_present_vs_past_0094` — `before Friday's dinner service`; use `before last Friday's dinner service` or another explicit completed-past marker.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-021-part4-present-vs-past.qa.json`

Full-bank semantic near-duplicate clearance is not claimed. `verified` still does not mean production-approved until the final revision-bound cross-bank duplicate gate passes.

## Next QA

Continue with the oldest unchecked pending micro-skill:

`p5.verb.present_perfect_vs_past`

Start ID:

`p5_verb_present_perfect_vs_past_0001`

Continue independent re-solving from stem + choices before reading stored proposed answers or explanations. Work in 25-question safe checkpoints.
