# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **26 / 44**
- Generated questions persisted: **2,600**
- QA checked: **1,600**
- Verified: **1,525**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.conn.logical_conjunction` with IDs **0076-0100**:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/logical-conjunction/pending/batch-20260828-029-part4.json`

All 25 remain `pending_validation`. Answer positions are A/B/C/D = **7/6/6/6**. Structural review found sequential unique IDs, one blank per stem, four distinct choices, no exact duplicate stems, no within-checkpoint SequenceMatcher pair >= 0.94, and maximum observed pair similarity about **0.529**.

## This run — QA

Reviewed oldest unchecked `p5.verb.causative_have_make_let` IDs **0076-0100**.

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 use `have + object + past participle`; each has exactly one valid past-participle complement, natural business English, and an explanation consistent with the keyed answer.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-029-causative-part4.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. Repo-local full schema/Node tests and the full-bank semantic near-duplicate scanner were not executable in this connector-only run.

## Next generation

Start taxonomy-next micro-skill:

`p5.pron.subject_vs_object` from `p5_pron_subject_vs_object_0001`.

## Next QA

Continue oldest unchecked backlog at:

`p5_verb_conditional_form_0001`.

Existing `needs_revision` items from earlier skills remain unresolved.
