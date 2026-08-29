# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 31 / 44
- Generated questions persisted: 3,100
- QA checked: 2,100
- Verified: 2,025
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.rel.whose` with IDs 0076-0100:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/whose/pending/batch-20260829-049-part4.json`

All 25 remain `pending_validation`. Answer positions are A/B/C/D = 7/6/6/6. Exact duplicate stems within the new checkpoint: 0. SequenceMatcher similarity >= 0.94 within the checkpoint: 0; maximum similarity was about 0.497. Contexts include consulting, hospitality, procurement, laboratories, banking, logistics, publishing, nonprofits, manufacturing, finance, arts, recruiting, and legal services.

`p5.rel.whose` is now 100/100. Next generation is `p5_rel_where_vs_when_0001`.

## This run — QA

Reviewed oldest unchecked `p5.conn.despite_vs_although` IDs 0076-0100.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Every blank is followed by a complete finite clause, so `although` is uniquely valid; `despite` requires a noun phrase or gerund phrase. Each sentence and all four choices were reviewed for unique-answer validity, naturalness, target-skill fit, distractor plausibility, and explanation consistency.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-049-despite-vs-although-part4.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue with `p5.rel.where_vs_when` at `p5_rel_where_vs_when_0001`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_during_vs_while_0001`.

Existing `needs_revision` items from earlier skills remain unresolved.
