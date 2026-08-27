# Power TOEIC QA handoff

## Current counts

- Checked: **500**
- Verified: **470**
- Needs revision: **30**
- Rejected: **0**
- Unchecked `pending_validation`: **1,100**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA batch

Skill: `p5.pos.adjective_after_linking_verb`
Source batch: `batch-20260826-001`
Checked: **100**
Verified: **96**
Needs revision: **4**
Rejected: **0**

Record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-015-adjective-after-linking-verb.qa.json`

Approved-ID gate:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adjective-after-linking-verb/verified/batch-20260826-001-approved-ids.json`

The excluded IDs are `0037`, `0038`, `0039`, and `0040`. Each contains both `secure` and `secured` as defensible complements in the displayed context, so the item fails the unique-answer gate and remains `needs_revision`.

No proposed-key mismatches were found among the 96 approved items. Exact duplicate stems were not observed within this reviewed batch. A full cross-bank semantic duplicate scan was not completed in this checkpoint.

## Next QA start

Skill: `p5.pos.adverb_modifies_adjective`
Question: `p5_pos_adverb_modifies_adjective_0001`

Independently solve stem + choices first. Only then inspect stored proposed answer/explanation. Keep checked and verified counts separate; stop at a 25-question checkpoint rather than batch-approving uncertain material.
