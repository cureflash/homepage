# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **22 / 44**
- Current generation micro-skill: `p5.conn.by_vs_until` — **50 / 100**
- Generated questions persisted: **2,250**
- QA checked: **1,275**
- Verified: **1,210**
- Needs revision: **65**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Continued `p5.conn.by_vs_until` and persisted IDs **0026-0050** as:

- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/by-vs-until/pending/batch-20260828-025-part2.json`

The checkpoint continues to separate:
- `by` = deadline by which a completion/result must occur;
- `until` = endpoint through which an action/state continues.

All 25 remain `pending_validation`.

Generation checks for this checkpoint:
- IDs 0026-0050 sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions A/B/C/D = **7/6/6/6**
- exact duplicate stems = **0**
- no within-checkpoint SequenceMatcher pair >= 0.94
- observed maximum pair similarity ≈ **0.663**

The full cross-bank semantic near-duplicate gate is still outstanding; the above is only a checkpoint-level lexical/surface similarity check.

## This run — QA

Independently reviewed the oldest unchecked `p5.verb.modal_base_form` IDs **0051-0075**.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

Every item uniquely requires the bare infinitive immediately after a modal verb. The business English is acceptable, distractors cannot grammatically replace the base form directly after the modal, and the stored proposed answer/explanation agrees with the independently selected answer.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-modal-base-form-part3.qa.json`

## Next generation

Continue `p5.conn.by_vs_until` from:

`p5_conn_by_vs_until_0051`

Target the remaining 50 questions, using 25-question safe checkpoints as needed. After 0100, taxonomy order advances to `p5.conn.for_vs_since`.

## Next QA

Continue oldest unchecked `p5.verb.modal_base_form` from:

`p5_verb_modal_base_form_0076`

Continue independent re-solving in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved. Full cross-bank semantic duplicate clearance remains outstanding.
