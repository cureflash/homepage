# Power TOEIC QA handoff

## Current QA state

- Checked: 3,125
- Verified: 3,040
- Needs revision: 85
- Rejected: 0
- Unchecked `pending_validation`: 925
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 25 unchecked questions in strict order.

- `p5.rel.where_vs_when` 0001-0025: 25 checked / 25 verified / 0 needs_revision / 0 rejected.

Each item was reviewed for relative-adverb syntax, unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, and explanation consistency. All 25 use a place or time antecedent whose clause uniquely requires `where` or `when`; bare `which`, `who`, and the opposite relative adverb are not defensible in the displayed sentence. The persisted source format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee a hidden-key first pass. Full-bank semantic near-duplicate clearance remains outstanding.

## Next QA

Continue at `p5_rel_where_vs_when_0026`.
