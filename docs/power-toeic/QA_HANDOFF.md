# Power TOEIC QA handoff

## Current counts

- Checked: **400**
- Verified: **374**
- Needs revision: **26**
- Rejected: **0**
- Unchecked `pending_validation`: **1,100**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA batch

Skill: `p5.pos.noun_in_noun_slot`
Source batch: `2026-08-26-manual-001`
Checked: **100**
Verified: **96**
Needs revision: **4**
Rejected: **0**

Record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-manual-001-noun-in-noun-slot.qa.json`

Approved-ID gate:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/noun-in-noun-slot/verified/batch-20260826-001-approved-ids.json`

The four excluded IDs are `0012`, `0052`, `0057`, and `0098`. The first three fail the unique-answer gate because singular/plural noun alternatives are defensible; `0098` fails the TOEIC-naturalness/collocation gate (`energy economy`).

A full cross-bank semantic duplicate scan was not completed in this checkpoint.

## Next QA start

Skill: `p5.pos.adjective_after_linking_verb`
Question: `p5_pos_adjective_after_linking_verb_0001`
Source:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adjective-after-linking-verb/pending/batch-20260826-001.json`

Independently solve stem + choices first. Only then inspect stored proposed answer/explanation. Keep checked and verified counts separate; stop at a 25-question checkpoint rather than batch-approving uncertain material.
