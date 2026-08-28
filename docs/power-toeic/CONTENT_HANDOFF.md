# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: 30 / 44
- Generated questions persisted: 3,000
- QA checked: 2,000
- Verified: 1,925
- Needs revision: 75
- Rejected: 0
- Unchecked `pending_validation`: 1,000
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.rel.who_vs_which` with IDs 0076-0100:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/who-vs-which/pending/batch-20260829-045-part4.json`

All 25 remain `pending_validation`. Contexts cover forecasting, warehousing, export compliance, facilities, recruiting, contracts, laboratories, logistics, legal work, finance, healthcare, hospitality, and engineering. Answer positions are A/B/C/D = 6/7/6/6. Exact IDs and templates are unique within the batch. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

`p5.rel.who_vs_which` is now 100/100. Next generation is `p5.rel.whose` from `p5_rel_whose_0001`.

## This run — QA

Reviewed oldest unchecked `p5.conn.because_vs_because_of` IDs 0076-0100.

- Checked: 25
- Verified: 25
- Needs revision: 0
- Rejected: 0

Each item was individually re-solved against all four choices. Noun-phrase complements require `because of`; full finite clauses require `because`. No alternate defensible answer, naturalness defect, target-skill mismatch, distractor defect, or explanation mismatch was found.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-29-scheduled-045-because-vs-because-of-part4.qa.json`

`QA_STATUS.json` had remained at the older 1,925 checked / 1,850 verified checkpoint while the canonical CONTENT/QA handoffs had already reached 1,975 / 1,900. It was reconciled forward to 2,000 / 1,925 in this run; no later progress was discarded.

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. The revision-bound full-bank semantic near-duplicate scanner remains incomplete.

## Next generation

Start `p5.rel.whose` at `p5_rel_whose_0001`.

## Next QA

Continue the oldest unchecked backlog at `p5_conn_despite_vs_although_0001`.

Existing `needs_revision` items from earlier skills remain unresolved.
