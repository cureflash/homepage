# Power TOEIC QA handoff

## Current QA state

- Checked: 3,000
- Verified: 2,915
- Needs revision: 85
- Rejected: 0
- Unchecked `pending_validation`: 925
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict order.

- `p5.rel.who_vs_which` 0001-0100: 100 checked / 100 verified / 0 needs_revision / 0 rejected.

Each item was reviewed for antecedent type, relative-clause syntax, unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, and explanation consistency. All 100 have one defensible `who` or `which` answer. The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee a hidden-key first pass. Full-bank semantic near-duplicate clearance remains outstanding.

## Next QA

Continue at `p5_rel_whose_0001`.
