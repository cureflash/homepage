# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

**Audit evidence:** `30_QUESTION_AND_QA_SPEC.md` requires a duplicate/similarity scan before approval and places semantic duplicate detection before the approved bank. Current CONTENT/QA state explicitly records that full-bank semantic near-duplicate scanning across all candidates is not complete, while QA records use `verified` for items that passed independent answer/ambiguity/naturalness review. Verified IDs are only eligible for a **future** production-bank build, so that future build still needs an explicit hard gate rather than treating `verified` alone as release-ready.

**Required follow-up:** continue the current generation and oldest-first QA queues, but before any production-bank build or runtime ingestion, run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates. Record duplicate clusters/quarantines and make the bank-builder reject a build when the global scan has not been completed for the input revision.

**Do not:** do not downgrade this to ID-only or exact-stem-only comparison; do not treat `verified` as synonymous with production-approved until the global duplicate gate has passed; do not stop ordinary pending generation/QA solely because this final-bank gate is outstanding.

**Acceptance criteria:** production-bank build has an explicit revision-bound global duplicate clearance; near-duplicate clusters are either resolved/quarantined or documented; the approved/runtime bank cannot include a candidate lacking that gate; QA fixtures include a cross-skill near-duplicate case.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Completed generated micro-skills: **21 / 44**
- Generated questions: **2,100**
- QA checked: **1,100**
- Verified: **1,040**
- Needs revision: **60**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Completed `p5.conn.despite_vs_although` by generating IDs **0001-0100** under four 25-question checkpoints:

- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/despite-vs-although/pending/batch-20260827-022-part1.json`
- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/despite-vs-although/pending/batch-20260827-022-part2.json`
- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/despite-vs-although/pending/batch-20260827-022-part3.json`
- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/despite-vs-although/pending/batch-20260827-022-part4.json`

The 100 items distinguish `despite` before noun/gerund phrases from `although` before complete clauses. Business contexts span finance, hospitality, logistics, manufacturing, recruiting, healthcare, publishing, banking, software, facilities, research, events, procurement, retail, and professional services.

Generation checks for the 100-question skill:
- IDs 0001-0100 are sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions A/B/C/D = **25/25/25/25**
- exact duplicate stems = **0**
- SequenceMatcher pairs >= 0.94 = **0**
- maximum within-skill stem similarity approximately **0.627**
- all 100 remain `pending_validation`

Full semantic cross-bank near-duplicate scanning across all 2,100 candidates is still **not completed**. Do not claim global duplicate clearance from this checkpoint alone.

## This checkpoint — QA

Independently reviewed the oldest unchecked `p5.verb.present_perfect_vs_past` IDs **0001-0100**, solving each from stem + choices before consulting the stored proposed answer/explanation.

Result:
- Checked: **100**
- Verified: **80**
- Needs revision: **20**
- Rejected: **0**

The 50 simple-past-target items use explicit completed-past anchors such as `yesterday`, `last month`, `last Friday`, `two weeks ago`, `in 2024`, `during last year's audit`, and `in March 2025`, and passed the independent check. Present-perfect items using strong continuing-to-present cues such as `so far this week`, `since ...`, `up to now`, and `over the past three months` also passed.

The 20 needs-revision items repeat four cue families that do not uniquely force present perfect over simple past in standard business English:

- `already`: IDs 0001, 0011, 0021, 0031, 0041
- `during the current quarter`: IDs 0002, 0012, 0022, 0032, 0042
- `this year`: IDs 0003, 0013, 0023, 0033, 0043
- `recently`: IDs 0005, 0015, 0025, 0035, 0045

Use stronger cues such as `so far this quarter`, `so far this year`, `as of today`, `up to now`, or `so far this week`, then independently re-solve before changing any item to verified.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-022-present-perfect-vs-past.qa.json`

## Next generation

`p5.conn.during_vs_while`

Start ID:

`p5_conn_during_vs_while_0001`

## Next QA

`p5.verb.active_vs_passive`

Start ID:

`p5_verb_active_vs_passive_0001`
