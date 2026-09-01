# Power TOEIC QA handoff

## Current QA state

- Checked: 4,400.
- Verified: 4,366.
- Needs revision: 0.
- Rejected: 34.
- Unchecked `pending_validation`: 0.
- `generation_complete`: `true`.
- `validation_complete`: `true`.

## Final disposition

The final 34 source-grounded unresolved candidates were closed as `rejected`. They were not bulk-promoted to verified and no guessed candidate rewrite was performed. Existing independent QA had identified concrete ambiguity, TOEIC-naturalness, collocation, or other uniqueness failures; the latest source-grounded reconciliation confirmed that these failures still corresponded to persisted source.

Final QA record: `subjects/english/power-toeic/js/data/questions/part5/qa/2026-09-01-final-revision-disposition.qa.json`.

Final invariant: `4,400 checked = 4,366 verified + 0 needs_revision + 34 rejected`.

No question source changed in this final disposition, so the previous duplicate scan state is unchanged.

## Next QA

None. There is no remaining validation or revision resume ID.
