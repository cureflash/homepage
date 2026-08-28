# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 29 / 44
- Generated questions persisted: 2,925
- QA checked: 1,925
- Verified: 1,850
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Started `p5.rel.who_vs_which` with IDs 0001-0025:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/who-vs-which/pending/batch-20260829-042-part1.json`

All 25 remain `pending_validation`. The checkpoint uses human antecedents for `who` and object/device/document/place antecedents for `which` across consulting, software, logistics, finance, recruiting, engineering, legal, sales, and operations contexts. Each blank is the subject of the relative clause. Answer positions are A/B/C/D = 7/6/6/6. Exact duplicate stems: 0. Checkpoint SequenceMatcher similarity >=0.94: 0; maximum about 0.550. Full revision-bound cross-bank semantic similarity clearance remains outstanding.

`p5.rel.who_vs_which` is now 25/100.

## This run — QA

Reviewed oldest unchecked `p5.conn.because_vs_because_of` IDs 0001-0025.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Each item was independently re-solved against all four choices. Noun-phrase complements require `because of`; full finite clauses require `because`. No alternate defensible answer, naturalness defect, target-skill mismatch, distractor defect, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-042-because-vs-because-of-part1.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.rel.who_vs_which` from `p5_rel_who_vs_which_0026`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_because_vs_because_of_0026`.

Existing `needs_revision` items from earlier skills remain unresolved.
