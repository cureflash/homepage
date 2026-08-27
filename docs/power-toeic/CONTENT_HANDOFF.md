# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

**Audit evidence:** `30_QUESTION_AND_QA_SPEC.md` requires a duplicate/similarity scan before approval and places semantic duplicate detection before the approved bank. Current CONTENT/QA state explicitly records that full-bank semantic near-duplicate scanning across all candidates is not complete, while QA records use `verified` for items that passed independent answer/ambiguity/naturalness review. Verified IDs are only eligible for a **future** production-bank build, so that future build still needs an explicit hard gate rather than treating `verified` alone as release-ready.

**Required follow-up:** continue the current generation and oldest-first QA queues, but before any production-bank build or runtime ingestion, run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates. Record duplicate clusters/quarantines and make the bank-builder reject a build when the global scan has not been completed for the input revision.

**Do not:** do not downgrade this to ID-only or exact-stem-only comparison; do not treat `verified` as synonymous with production-approved until the global duplicate gate has passed; do not stop ordinary pending generation/QA solely because this final-bank gate is outstanding.

**Acceptance criteria:** production-bank build has an explicit revision-bound global duplicate clearance; near-duplicate clusters are either resolved/quarantined or documented; the approved/runtime bank cannot include a candidate lacking that gate; QA fixtures include a cross-skill near-duplicate case.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Completed generated micro-skills: **19 / 44**
- Current micro-skill: `p5.conn.because_vs_because_of` **75/100 persisted**
- Generated questions: **1,975**
- QA checked: **975**
- Verified: **939**
- Needs revision: **36**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Generated `p5.conn.because_vs_because_of` IDs **0051-0075** under:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/because-vs-because-of/pending/batch-20260827-021-part3.json`

The 25 items continue the noun-phrase vs full-clause distinction: noun phrases require `because of`, while complete clauses require `because`. Business contexts are distributed across events, accounting, manufacturing, support, maintenance, legal, hospitality, transport, procurement, insurance, laboratory work, property management and research.

Checkpoint properties:
- IDs 0051-0075 are sequential and unique within the checkpoint
- one cloze per item
- four distinct choices per item
- proposed answer positions A/B/C/D = **7/6/6/6**
- all 25 remain `pending_validation`

Full semantic cross-bank near-duplicate scanning across all 1,975 candidates is still **not completed**. Do not claim global duplicate clearance from this checkpoint alone.

## This checkpoint — QA

Independently reviewed the oldest unchecked `p5.verb.present_vs_past` IDs **0051-0075**, solving each from stem + choices before consulting the stored proposed answer/explanation.

Result:
- Checked: **25**
- Verified: **22**
- Needs revision: **3**
- Rejected: **0**

Needs revision:
- `p5_verb_present_vs_past_0057`: `for Tuesday's board meeting` does not unambiguously place Tuesday in the past. Add `last Tuesday` or another completed-past marker.
- `p5_verb_present_vs_past_0062`: `after Monday's hiring event` is not sufficiently anchored. Use `last Monday` or another explicit past marker.
- `p5_verb_present_vs_past_0074`: `during Sunday's system upgrade` does not establish that Sunday is past. Use `last Sunday's system upgrade`.

The other 22 items contain explicit completed-past cues and their stored answer keys/explanations matched the independent solutions.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-021-part3-present-vs-past.qa.json`

## Next generation

`p5.conn.because_vs_because_of`

Start ID:

`p5_conn_because_vs_because_of_0076`

## Next QA

`p5.verb.present_vs_past`

Start ID:

`p5_verb_present_vs_past_0076`
