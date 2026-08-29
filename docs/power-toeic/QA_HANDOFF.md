# Power TOEIC QA handoff

## Current QA state

- Checked: 2,650
- Verified: 2,567
- Needs revision: 83
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 25 unchecked questions in strict order.

- `p5.pron.subject_vs_object` 0026-0050: 25 checked / 24 verified / 1 needs_revision / 0 rejected.
- Needs revision: `p5_pron_subject_vs_object_0031`.

Item 0031 has a subject-verb agreement defect: `Neither Mr. Park nor they has access ...` requires `have` with the intended nearest subject `they`, so it is not verified. The other 24 items have one defensible pronoun-case answer, natural TOEIC-style English, intended-skill alignment, and consistent explanations.

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only access therefore cannot technically guarantee a hidden-key first pass. Full-bank semantic near-duplicate clearance also remains outstanding.

## Next QA

Continue at `p5_pron_subject_vs_object_0051`.
