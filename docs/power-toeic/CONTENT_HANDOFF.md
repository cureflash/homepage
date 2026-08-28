# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **26 / 44**
- Current partial skill: `p5.pron.subject_vs_object` **75 / 100**
- Generated questions persisted: **2,675**
- QA checked: **1,675**
- Verified: **1,600**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Continued `p5.pron.subject_vs_object` with IDs **0051-0075**:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/subject-vs-object/pending/batch-20260828-032-part3.json`

All 25 remain `pending_validation`. The set mixes clause subjects, direct/indirect objects, prepositional objects, and compound subjects/objects across sales, facilities, finance, logistics, travel, audit, procurement, customer service, and project contexts. Answer positions are A/B/C/D = **7/6/6/6**. Structural review found sequential unique IDs, one blank per stem, four distinct choices, no exact duplicate stems, no within-checkpoint SequenceMatcher pair >= 0.94, and maximum observed pair similarity **0.550**.

## This run — QA

Reviewed oldest unchecked `p5.verb.conditional_form` IDs **0051-0075**.

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 express unreal past conditions. Their result clauses use `would/could/might have + past participle`, so the if-clause requires past perfect; each four-choice set has one defensible answer. Sentence naturalness, time-reference consistency, distractor plausibility, target-skill fit, and explanation consistency were checked item by item.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-032-conditional-part3.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. Repo-local full schema/Node tests and the full-bank semantic near-duplicate scanner were not executable in this connector-only run.

## Next generation

Continue:

`p5.pron.subject_vs_object` from `p5_pron_subject_vs_object_0076`.

## Next QA

Continue oldest unchecked backlog at:

`p5_verb_conditional_form_0076`.

Existing `needs_revision` items from earlier skills remain unresolved.
