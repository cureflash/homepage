# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. The revision-bound full-bank semantic near-duplicate scan is still incomplete. Continue ordinary generation and oldest-first QA, but do not treat `verified` as final production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **27 / 44**
- Generated questions persisted: **2,700**
- QA checked: **1,700**
- Verified: **1,625**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.pron.subject_vs_object` with IDs **0076-0100**:

`subjects/english/power-toeic/js/data/questions/part5/pronouns-relatives/subject-vs-object/pending/batch-20260828-033-part4.json`

All 25 remain `pending_validation`. The set mixes clause subjects, direct/indirect objects, prepositional objects, compound subjects/objects, and passive-subject positions across compliance, engineering, insurance, procurement, laboratory, payroll, facilities, legal, travel, conference, and support contexts. Answer positions are A/B/C/D = **4/7/7/7**, which brings the 100-question skill distribution close to balance. Structural review found sequential unique IDs, one blank per stem, four distinct choices, no exact duplicate stems, no within-checkpoint SequenceMatcher pair >= 0.94, and maximum observed pair similarity **0.566**.

This completes `p5.pron.subject_vs_object` at **100/100**.

## This run — QA

Reviewed oldest unchecked `p5.verb.conditional_form` IDs **0076-0100**.

- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

The set alternates real future conditions, present/future hypotheticals, and unreal past conditions. In each item, the displayed condition fixes one main-clause form among `will + base`, `would + base`, and `would have + past participle`; all four choices were reviewed for unique-answer validity, sentence naturalness, temporal consistency, distractor plausibility, target-skill fit, and explanation consistency.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-033-conditional-part4.qa.json`

## QA-method / test limitation

The persisted candidate format co-locates stems, choices, proposed answers and explanations, so connector-only access cannot technically guarantee hidden-key first-pass isolation. Items were nevertheless re-solved individually. Repo-local full schema/Node tests and the full-bank semantic near-duplicate scanner were not executable in this connector-only run.

## Next generation

Start:

`p5.pron.possessive_forms` from `p5_pron_possessive_forms_0001`.

## Next QA

Continue oldest unchecked backlog at:

`p5_verb_participle_clause_0001`.

Existing `needs_revision` items from earlier skills remain unresolved.
