# Power TOEIC QA handoff

## Current QA state

- Checked: **1,125**
- Verified: **1,063**
- Needs revision: **62**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest QA checkpoint

Micro-skill: `p5.verb.active_vs_passive`
Range completed: `0001-0025`

Independent result:
- 25 checked
- 23 verified
- 2 needs_revision
- 0 rejected

Each item was solved from stem + choices before consulting the stored proposed answer/explanation.

Needs revision:

- `p5_verb_active_vs_passive_0013`: `course materials` is plural, so the passive must be `were prepared`. The current intended option `was prepared` is ungrammatical and the option set contains no valid plural passive answer.
- `p5_verb_active_vs_passive_0016`: `survey results` is plural, so the passive must be `were analyzed`. The current intended option `was analyzed` is ungrammatical and the option set contains no valid plural passive answer.

Recommended repair: replace the singular passive choices with the correct plural forms, update explanations, then independently re-solve before changing either item to verified.

The other 23 items have a unique defensible answer and acceptable TOEIC-style business English in this checkpoint. Verified answer-position distribution is A/B/C/D = **6/6/6/5**.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-023-active-vs-passive-part1.qa.json`

Full-bank semantic near-duplicate clearance is still not claimed. `verified` does not mean production-approved until the revision-bound cross-bank duplicate gate passes.

## Next QA

Continue the same oldest unchecked micro-skill:

`p5.verb.active_vs_passive`

Start ID:

`p5_verb_active_vs_passive_0026`

Continue independent re-solving in 25-question safe checkpoints before reading stored proposed answers or explanations.
