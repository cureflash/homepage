# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 32 / 44
- Generated questions persisted: 3,275
- QA checked: 2,275
- Verified: 2,200
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Generated 100 questions in four safe checkpoints.

1. Completed `p5.rel.where_vs_when` with IDs 0076-0100:
   `subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/where-vs-when/pending/batch-20260829-053-part4.json`
2. Started `p5.pron.indefinite_agreement` with IDs 0001-0025:
   `subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/indefinite-agreement/pending/batch-20260829-053-part1.json`
3. Continued `p5.pron.indefinite_agreement` with IDs 0026-0050:
   `subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/indefinite-agreement/pending/batch-20260829-053-part2.json`
4. Continued `p5.pron.indefinite_agreement` with IDs 0051-0075:
   `subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/indefinite-agreement/pending/batch-20260829-053-part3.json`

All 100 remain `pending_validation`. `where_vs_when` answer positions are A/B/C/D = 7/6/6/6. `indefinite_agreement` 0001-0075 are A/B/C/D = 20/19/18/18. Exact duplicate count is 0. SequenceMatcher >= 0.94 is 0 in the generated checkpoints. Maximum pairwise similarity was 0.528 for the final `where_vs_when` checkpoint and 0.740 across the 75 `indefinite_agreement` stems.

`p5.rel.where_vs_when` is complete at 100/100. `p5.pron.indefinite_agreement` is now 75/100. Next generation is `p5_pron_indefinite_agreement_0076`.

## This run — QA

Reviewed the oldest 100 unchecked questions in strict order:

- `p5.conn.during_vs_while` 0076-0100: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- `p5.conn.by_vs_until` 0001-0025: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- `p5.conn.by_vs_until` 0026-0050: 25 checked / 25 verified / 0 needs_revision / 0 rejected.
- `p5.conn.by_vs_until` 0051-0075: 25 checked / 25 verified / 0 needs_revision / 0 rejected.

For `during_vs_while`, every reviewed blank is followed by a finite clause, making `while` uniquely valid. For `by_vs_until`, completion/deadline contexts require `by`, while continuing actions/states ending at a point require `until`. No alternate defensible answer, material naturalness defect, target-skill mismatch, distractor defect, or explanation mismatch was found.

QA records:

- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-during-vs-while-part4.qa.json`
- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-by-vs-until-part1.qa.json`
- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-by-vs-until-part2.qa.json`
- `subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-053-by-vs-until-part3.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.pron.indefinite_agreement` at `p5_pron_indefinite_agreement_0076`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_by_vs_until_0076`.

Existing `needs_revision` items from earlier skills remain unresolved.
