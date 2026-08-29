# Power TOEIC QA handoff

## Current QA state

- Checked: 2,900
- Verified: 2,815
- Needs revision: 85
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — independent QA

Reviewed the oldest 100 unchecked questions in strict order.

- `p5.pron.reflexive` 0001-0100: 100 checked / 99 verified / 1 needs_revision / 0 rejected.

`p5_pron_reflexive_0042` is not clean enough for production approval: `Our project team set ourselves a deadline` relies on notional collective agreement between singular `team` and first-person plural `ourselves`. It remains quarantined. The other 99 items have one defensible reflexive/emphatic-pronoun answer, natural TOEIC-style English, intended-skill alignment, and consistent explanations.

The persisted candidate format co-locates stems, choices, proposed answers and explanations. Connector-only access therefore cannot technically guarantee a hidden-key first pass. Full-bank semantic near-duplicate clearance also remains outstanding.

## Next QA

Continue at `p5_rel_who_vs_which_0001`.
