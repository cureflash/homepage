# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 28 / 44
- Generated questions persisted: 2,850
- QA checked: 1,850
- Verified: 1,775
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Continued `p5.pron.reflexive` with IDs 0026-0050:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/reflexive/pending/batch-20260828-039-part2.json`

All 25 remain `pending_validation`. The checkpoint mixes reflexive-object, emphatic, `by oneself`, and fixed-pattern uses across customer support, orientation, warehousing, finance, software, negotiation, project management, retail, and research contexts. IDs are sequential and unique, every stem has one blank and four distinct choices, and answer positions are A/B/C/D = 6/7/6/6. Exact duplicate stems: 0. SequenceMatcher >= 0.94: 0; maximum similarity against reflexive 0001-0050 is about 0.670.

`p5.pron.reflexive` is now 50/100.

## This run — QA

Reviewed oldest unchecked `p5.conn.preposition_vs_conjunction` IDs 0026-0050.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Items 0026-0030 require `despite` before noun phrases, 0031-0040 require `although` before full clauses, and 0041-0050 require `during` before time noun phrases. Each item was individually re-solved against all four choices; no alternate defensible answer or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-039-preposition-vs-conjunction-part2.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.pron.reflexive` from `p5_pron_reflexive_0051`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_preposition_vs_conjunction_0051`.

Existing `needs_revision` items from earlier skills remain unresolved.
