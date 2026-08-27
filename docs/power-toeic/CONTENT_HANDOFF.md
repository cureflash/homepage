# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **22 / 44**
- Current generation micro-skill: `p5.conn.by_vs_until` — **25 / 100**
- Generated questions persisted: **2,225**
- QA checked: **1,250**
- Verified: **1,185**
- Needs revision: **65**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Started `p5.conn.by_vs_until` and persisted IDs **0001-0025** as:

- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/by-vs-until/pending/batch-20260827-025-part1.json`

The checkpoint explicitly separates:
- `by` = deadline by which a completion/result must occur;
- `until` = endpoint through which an action/state continues.

All 25 remain `pending_validation`.

Generation checks for this checkpoint:
- IDs 0001-0025 sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions A/B/C/D = **6/6/7/6**
- exact duplicate stems = **0**
- no within-checkpoint SequenceMatcher pair >= 0.94
- observed maximum pair similarity = **0.5625**

The full cross-bank semantic near-duplicate gate is still outstanding; the above is only a checkpoint-level lexical/surface similarity check.

## This run — QA

Independently reviewed the oldest unchecked `p5.verb.modal_base_form` IDs **0026-0050**.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

Every item uniquely requires the bare infinitive immediately after a modal verb, the business English is acceptable, and the stored explanation agrees with the independently selected answer.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-025-modal-base-form-part2.qa.json`

## Next generation

Continue `p5.conn.by_vs_until` from:

`p5_conn_by_vs_until_0026`

Target the remaining 75 questions, using 25-question safe checkpoints as needed. After 0100, taxonomy order advances to `p5.conn.for_vs_since`.

## Next QA

Continue oldest unchecked `p5.verb.modal_base_form` from:

`p5_verb_modal_base_form_0051`

Continue independent re-solving in 25-question safe checkpoints. Full cross-bank semantic duplicate clearance remains outstanding.
