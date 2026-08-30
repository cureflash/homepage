# Power TOEIC QA handoff

## Current QA state

- Checked: 3,650
- Verified: 3,562
- Needs revision: 88
- Rejected: 0
- Unchecked `pending_validation`: 750
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict backlog order.

- `p5.det.much_vs_many` 0051-0100: 50 checked / 50 verified / 0 needs_revision / 0 rejected.
- `p5.det.few_vs_little` 0001-0050: 50 checked / 48 verified / 2 needs_revision / 0 rejected.

`p5_det_few_vs_little_0034` and `p5_det_few_vs_little_0050` are `needs_revision`: the displayed constructions use unnatural TOEIC-style English (`Only few customers/applicants ...`) where idiomatic English requires `Only a few customers/applicants ...`. They were not approved.

Each item was reviewed individually for unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, explanation consistency, and answer-position/template pattern.

## Next QA

Continue at `p5_det_few_vs_little_0051`.
