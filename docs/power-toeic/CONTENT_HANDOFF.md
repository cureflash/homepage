# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 31 / 44
- Generated questions persisted: 3,125
- QA checked: 2,125
- Verified: 2,050
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Started `p5.rel.where_vs_when` with IDs 0001-0025:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/where-vs-when/pending/batch-20260829-050-part1.json`

All 25 remain `pending_validation`. Answer positions are A/B/C/D = 7/6/6/6. The checkpoint alternates location antecedents requiring `where` and time antecedents requiring `when`, across offices, finance, logistics, retail, laboratories, hospitality, manufacturing, HR, health care, and governance contexts. No generated item was promoted to verified.

`p5.rel.where_vs_when` is now 25/100. Next generation is `p5_rel_where_vs_when_0026`.

## This run — QA

Reviewed oldest unchecked `p5.conn.during_vs_while` IDs 0001-0025.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Every blank is followed by a noun phrase, so `during` is uniquely valid in the intended contrast; `while` requires a finite clause. Each sentence and all four choices were reviewed for unique-answer validity, naturalness, target-skill fit, distractor plausibility, and explanation consistency.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-050-during-vs-while-part1.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.rel.where_vs_when` at `p5_rel_where_vs_when_0026`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_during_vs_while_0026`.

Existing `needs_revision` items from earlier skills remain unresolved.
