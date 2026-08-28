# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 30 / 44
- Generated questions persisted: 3,025
- QA checked: 2,025
- Verified: 1,950
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Started `p5.rel.whose` with IDs 0001-0025:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/whose/pending/batch-20260829-046-part1.json`

All 25 remain `pending_validation`. Contexts span consulting, manufacturing, HR, facilities, architecture, software, hospitality, logistics, finance, healthcare, retail, engineering, and contracting. Answer positions are A/B/C/D = 7/6/6/6. Each item tests possessive relative-pronoun use before a noun. Exact IDs and template IDs are unique within the batch. Full revision-bound cross-bank semantic duplicate clearance remains incomplete.

`p5.rel.whose` is now 25/100. Next generation is `p5_rel_whose_0026`.

## This run — QA

Reviewed oldest unchecked `p5.conn.despite_vs_although` IDs 0001-0025.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Each sentence was reviewed against all four choices. Every blank is followed by a noun phrase, so `despite` is uniquely valid; `although` would require a finite clause. No alternate defensible answer, naturalness defect, target-skill mismatch, distractor defect, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-046-despite-vs-although-part1.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Continue `p5.rel.whose` at `p5_rel_whose_0026`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_despite_vs_although_0026`.

Existing `needs_revision` items from earlier skills remain unresolved.
