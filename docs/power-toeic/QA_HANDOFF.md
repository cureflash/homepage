# Power TOEIC QA handoff

## Current QA state

- Checked: **925**
- Verified: **892**
- Needs revision: **33**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA work

Micro-skill: `p5.verb.present_vs_past`
Range completed: `0001-0025`

Independent result:
- 25 checked
- 23 verified
- 2 needs_revision
- 0 rejected

Each item was solved from stem + choices before consulting the stored proposed answer/explanation.

Needs revision:
- `p5_verb_present_vs_past_0017`: `throughout the workday` does not uniquely force a habitual/current reading. Both `tracks` and `tracked` are natural with different unstated time frames. Add an explicit recurring cue, then revalidate independently.
- `p5_verb_present_vs_past_0022`: `for the required retention period` expresses duration/obligation but does not uniquely force present over past. Both `retains` and `retained` are plausible. Add an explicit current-policy/routine cue, then revalidate independently.

The other 23 items have explicit recurring/habitual cues and one defensible present-tense answer. Their stored keys and explanations matched the independent solutions.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-021-part1-present-vs-past.qa.json`

Full-bank semantic near-duplicate clearance is not claimed.

## Next QA

Continue the same oldest pending micro-skill:

`p5.verb.present_vs_past`

Start ID:

`p5_verb_present_vs_past_0026`

Continue independent re-solving from stem + choices before reading stored proposed answers or explanations. Work in 25-question safe checkpoints.
