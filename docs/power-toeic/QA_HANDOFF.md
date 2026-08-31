# Power TOEIC QA handoff

## Current QA state

- Checked: 4,400
- Verified: 4,324
- Needs revision: 76
- Rejected: 0
- Unchecked `pending_validation`: 0
- `generation_complete`: `true`
- `validation_complete`: `false`

## This run — source-grounded revision

Compared the complete historical `p5.verb.present_vs_past` quarantine set with the actual stored stems and choices. All nine flags were real tense-anchor ambiguities.

Repairs:

- `0017`: strengthened the recurring cue to `throughout each workday`.
- `0022`: added `routinely`.
- `0057`, `0062`, `0074`, `0080`, `0083`, `0085`, `0094`: added explicit `last ...` completed-past anchors.

Each revised item was then re-solved from stem + choices before checking the stored answer/explanation. All nine now have a unique intended answer and were reclassified verified. Revision record: `2026-08-31-revision-003-present-vs-past.qa.json`.

Result: 9 checked / 9 verified / 0 needs_revision / 0 rejected. Cumulative: 4,324 verified / 76 needs_revision / 0 rejected / pending 0.

This run stopped below 100 because the entire `present_vs_past` revision set was exhausted. The next unresolved block is a distinct 20-item `present_perfect_vs_past` ambiguity pattern that must be repaired and independently revalidated as its own source-grounded set.

## Next QA

Resume exactly at `p5_verb_present_perfect_vs_past_0001`, then continue the 20 historical flags in IDs 0001-0045. Keep `validation_complete: false` until all remaining 76 revision items are resolved.
