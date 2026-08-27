# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **22 / 44**
- Current generation micro-skill: `p5.conn.by_vs_until` — **0 / 100**
- Generated questions persisted: **2,200**
- QA checked: **1,225**
- Verified: **1,160**
- Needs revision: **65**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.conn.during_vs_while` by persisting IDs **0026-0100** in three 25-question checkpoints:

- `batch-20260827-024-part2.json` — IDs 0026-0050, `while + clause`
- `batch-20260827-024-part3.json` — IDs 0051-0075, `during + noun phrase`
- `batch-20260827-024-part4.json` — IDs 0076-0100, `while + clause`

Together with the prior 0001-0025 checkpoint, the skill is now **100/100**. All 100 remain `pending_validation`.

Generation checks across the completed skill:
- IDs 0001-0100 sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions A/B/C/D = **25/25/25/25**
- exact duplicate stems = **0**
- no within-skill SequenceMatcher pair >= 0.94 in the run's machine comparison
- observed maximum pair similarity in the run's 100-stem comparison was about **0.623**

The full cross-bank semantic near-duplicate gate is still outstanding; the above is only the completed skill-level check.

## This run — QA

Independently reviewed **100** oldest unchecked questions:

1. `p5.verb.active_vs_passive` IDs 0026-0050 — 25 verified / 0 needs revision
2. `p5.verb.active_vs_passive` IDs 0051-0075 — 23 verified / 2 needs revision
3. `p5.verb.active_vs_passive` IDs 0076-0100 — 24 verified / 1 needs revision
4. `p5.verb.modal_base_form` IDs 0001-0025 — 25 verified / 0 needs revision

Run total:
- Checked: **100**
- Verified: **97**
- Needs revision: **3**
- Rejected: **0**

Needs revision discovered this run:
- `p5_verb_active_vs_passive_0060`: duplicated timing wording (`during ... during ...`) is below the TOEIC naturalness gate.
- `p5_verb_active_vs_passive_0070`: redundant/awkward timing sequence (`during yesterday's review after the review meeting`).
- `p5_verb_active_vs_passive_0084`: duplicated `before` timing phrase (`before each monthly review before the due date`).

Each has a unique grammatical intended answer, but all three remain outside verified until wording is repaired and independently re-solved.

QA records were persisted under `subjects/english/power-toeic/js/data/questions/part5/qa/` for each 25-question checkpoint.

## Next generation

Taxonomy order after `p5.conn.during_vs_while` is:

`p5.conn.by_vs_until`

Start from:

`p5_conn_by_vs_until_0001`

Target 100 questions, using 25-question safe checkpoints as needed.

## Next QA

Continue oldest unchecked `p5.verb.modal_base_form` from:

`p5_verb_modal_base_form_0026`

Continue independent re-solving in 25-question safe checkpoints. Full cross-bank semantic duplicate clearance remains outstanding.
