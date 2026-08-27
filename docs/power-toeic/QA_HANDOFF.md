# Power TOEIC QA handoff

## Current counts

- Checked: **600**
- Verified: **570**
- Needs revision: **30**
- Rejected: **0**
- Unchecked `pending_validation`: **1,100**
- `generation_complete`: `false`
- `validation_complete`: `false`

## Latest completed QA batch

Skill: `p5.pos.participle_adjective_ed_ing`
Source batch: `batch-20260826-003`
Checked: **100**
Verified: **100**
Needs revision: **0**
Rejected: **0**

Record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-016-participle-adjective-ed-ing.qa.json`

Approved-ID gate:
`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/participle-adjective-ed-ing/verified/batch-20260826-003-approved-ids.json`

All 100 were independently re-solved from stem + choices before comparing the stored proposed answer and explanation. Each item retained one clear answer, natural business context, the intended `-ed / -ing` participial-adjective distinction, and an explanation consistent with the independently selected answer. No exact duplicate stems were observed within this reviewed batch. Answer positions were A/B/C/D = 25/25/25/25. A full semantic duplicate scan against the entire question bank was not completed in this checkpoint.

## Reconciliation note

The previous QA pointer to `p5.pos.adverb_modifies_adjective` was stale. That skill had already been independently validated in an earlier checkpoint at **87 verified / 13 needs_revision**. Its stricter existing QA record and approved-ID gate were preserved. A duplicate QA artifact created before detecting the stale pointer was removed; no established result was overwritten.

## Next QA start

Skill: `p5.pos.word_form_subject_position`
Question: `p5_pos_word_form_subject_position_0001`

Independently solve stem + choices first. Only then inspect stored proposed answer/explanation. Keep checked and verified counts separate; stop at a 25-question checkpoint rather than batch-approving uncertain material.
