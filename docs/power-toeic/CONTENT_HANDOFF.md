# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 29 / 44
- Generated questions persisted: 2,950
- QA checked: 1,950
- Verified: 1,875
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Continued `p5.rel.who_vs_which` with IDs 0026-0050:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/who-vs-which/pending/batch-20260829-043-part2.json`

All 25 remain `pending_validation`. The checkpoint uses unambiguously human antecedents for `who` and inanimate antecedents for `which` across finance, software, procurement, maintenance, engineering, training, legal, compliance, recruiting, logistics, and operations contexts. One initially ambiguous `Vendors` antecedent was corrected to `Supplier representatives` before persistence. Answer positions are A/B/C/D = 6/7/6/6. Exact duplicate stems: 0. SequenceMatcher similarity >=0.94 across the first 50 `who_vs_which` items: 0; maximum about 0.655. Full revision-bound cross-bank semantic similarity clearance remains outstanding.

`p5.rel.who_vs_which` is now 50/100.

## This run — QA

Reviewed oldest unchecked `p5.conn.because_vs_because_of` IDs 0026-0050.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Each item was independently re-solved against all four choices. Noun-phrase complements require `because of`; full finite clauses require `because`. No alternate defensible answer, naturalness defect, target-skill mismatch, distractor defect, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-043-because-vs-because-of-part2.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.rel.who_vs_which` from `p5_rel_who_vs_which_0051`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_because_vs_because_of_0051`.

Existing `needs_revision` items from earlier skills remain unresolved.
