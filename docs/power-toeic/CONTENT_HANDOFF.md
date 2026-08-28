# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 29 / 44
- Generated questions persisted: 2,900
- QA checked: 1,900
- Verified: 1,825
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.pron.reflexive` with IDs 0076-0100:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/reflexive/pending/batch-20260829-041-part4.json`

All 25 remain `pending_validation`. The checkpoint mixes direct reflexive objects, emphatic reflexives, and fixed patterns such as `familiarize yourself with`, `help themselves to`, `find oneself`, `distinguish oneself from`, `make oneself available`, and `keep ... to themselves` across legal, finance, logistics, engineering, software, training, retail, and customer-service contexts. IDs are sequential and unique, every stem has one blank and four distinct choices, and answer positions are A/B/C/D = 7/6/6/6. Exact duplicate stems within the checkpoint: 0. Full revision-bound cross-bank semantic similarity clearance remains outstanding.

`p5.pron.reflexive` is now 100/100 and generation moves to `p5.rel.who_vs_which`.

## This run — QA

Reviewed oldest unchecked `p5.conn.preposition_vs_conjunction` IDs 0076-0100.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Items 0076-0080 require `even though` before full clauses, 0081-0090 require `without` before noun phrases or gerund phrases, and 0091-0100 require `unless` before full clauses expressing necessary conditions. Each item was individually re-solved against all four choices; no alternate defensible answer, naturalness defect, target-skill mismatch, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-041-preposition-vs-conjunction-part4.qa.json`

This completes independent QA of the 100-item `p5.conn.preposition_vs_conjunction` skill.

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Start `p5.rel.who_vs_which` from `p5_rel_who_vs_which_0001`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_because_vs_because_of_0001`.

Existing `needs_revision` items from earlier skills remain unresolved.
