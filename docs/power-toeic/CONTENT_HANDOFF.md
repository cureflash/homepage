# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 28 / 44
- Generated questions persisted: 2,875
- QA checked: 1,875
- Verified: 1,800
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Continued `p5.pron.reflexive` with IDs 0051-0075:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/reflexive/pending/batch-20260828-040-part3.json`

All 25 remain `pending_validation`. The checkpoint mixes reflexive-object, emphatic, fixed-pattern, and `find oneself` uses across compliance, logistics, training, engineering, software, finance, legal, and customer-service contexts. IDs are sequential and unique, every stem has one blank and four distinct choices, and answer positions are A/B/C/D = 7/6/6/6. Exact duplicate stems: 0. SequenceMatcher >= 0.94: 0; maximum similarity against reflexive 0001-0075 is about 0.593.

`p5.pron.reflexive` is now 75/100.

## This run — QA

Reviewed oldest unchecked `p5.conn.preposition_vs_conjunction` IDs 0051-0075.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Items 0051-0060 require `while` before full clauses, 0061-0070 require `in spite of` before noun phrases, and 0071-0075 require `even though` before full clauses. Each item was individually re-solved against all four choices; no alternate defensible answer or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-040-preposition-vs-conjunction-part3.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.pron.reflexive` from `p5_pron_reflexive_0076`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_preposition_vs_conjunction_0076`.

Existing `needs_revision` items from earlier skills remain unresolved.
