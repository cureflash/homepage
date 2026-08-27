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
- Current micro-skill: `p5.conn.because_vs_because_of` **50/100 persisted**
- Generated questions: **1,950**
- QA checked: **950**
- Verified: **917**
- Needs revision: **33**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Generated `p5.conn.because_vs_because_of` IDs **0026-0050** under:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/because-vs-because-of/pending/batch-20260827-021-part2.json`

The checkpoint continues to contrast noun-phrase complements requiring `because of` with full clauses requiring `because`, using varied business contexts across installation, retail, seminars, billing, travel, logistics, refunds, staffing, inspection, software, manufacturing, finance, construction and support operations.

Checks on the new 25:
- IDs 0026-0050 unique and sequential
- one cloze per item
- four distinct choices per item
- valid proposed answer index
- answer positions A/B/C/D = **7/6/6/6**
- exact duplicate stems: **0**
- SequenceMatcher >= 0.94: **0 pairs**
- maximum within-checkpoint similarity: about **0.571**
- all 25 remain `pending_validation`

Full semantic cross-bank near-duplicate scanning across all 1,950 candidates is still **not completed**.

## This checkpoint — QA

Independently reviewed the oldest unchecked `p5.verb.present_vs_past` IDs **0026-0050**, solving each from stem + choices before consulting the stored proposed answer/explanation.

Result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 contain explicit habitual or recurring cues such as `every`, `each`, `whenever`, `weekly`, `monthly`, `twice a day`, or `as a standing rule`, so the simple present is uniquely supported over the simple past. Stored keys and explanations matched the independent solutions.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-021-part2-present-vs-past.qa.json`

## Next generation

`p5.conn.because_vs_because_of`

Start ID:

`p5_conn_because_vs_because_of_0051`

## Next QA

`p5.verb.present_vs_past`

Start ID:

`p5_verb_present_vs_past_0051`
