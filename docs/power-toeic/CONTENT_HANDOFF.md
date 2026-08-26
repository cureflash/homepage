# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **500 generated candidates across 5 completed micro-skills**.

This content workflow remains intentionally independent from application implementation progress in `STATUS.json` / `90_HANDOFF.md` and from QA ownership in `QA_STATUS.json`.

## Taxonomy

Machine-readable Part 5 taxonomy remains canonical at:

`subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`

It contains **44 micro-skills in 6 learner-facing groups**. Do not coarsen or reorder it during generation.

## Completed content

Previously completed batch `2026-08-26-manual-001`:

1. `p5.pos.adjective_before_noun` — 100
2. `p5.pos.adverb_modifies_verb` — 100
3. `p5.pos.noun_in_noun_slot` — 100
4. `p5.pos.adjective_after_linking_verb` — 100

Current checkpoint batch `2026-08-26-scheduled-002`:

5. `p5.pos.adverb_modifies_adjective` — **100**

Total generated: **500**. All remain `pending_validation`; the generation worker has not made any `verified`, `rejected`, or `quarantined` decision.

## Current batch storage

The completed skill is stored under the fine-grained canonical path:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adverb-modifies-adjective/pending/`

It is split into four 25-question chunks:

- `batch-20260826-002-part1.json`
- `batch-20260826-002-part2.json`
- `batch-20260826-002-part3.json`
- `batch-20260826-002-part4.json`

Batch manifest:

`subjects/english/power-toeic/js/data/questions/part5/batches/2026-08-26-scheduled-002.json`

The files use `power-toeic-candidate-v1-extended`: tuple positions 0–4 remain compatible with the first candidate format, while per-item `difficulty` and `template_id` were added. Part, skill group, micro-skill, taxonomy path, tags, generator version, batch, generated time, and pending-validation status are inherited from the file wrapper.

## Generation-time checks for the new 100

Passed before persistence:

- 100 stable unique question IDs;
- exactly one `____` blank in every stem;
- exactly four distinct choices per item;
- valid proposed answer index;
- answer-position distribution A/B/C/D = 25/25/25/25;
- no exact duplicate stems within the completed skill;
- no near-duplicate stem pairs at SequenceMatcher threshold >= 0.94 within the completed skill;
- varied business contexts and lexical families rather than one repeated surface template.

A full machine similarity scan against all previously persisted 400 questions could not be completed through the available repository-read path in this checkpoint, so the manifest records that check as **not completed** rather than claiming success. Independent QA still owns semantic ambiguity and naturalness review.

## Why this run stopped at one skill

The normal target remains 4 micro-skills × 100 questions. Candidate material for later skills was explored locally, but only a fully persisted, structurally checked skill is counted as completed. The run therefore saved a clean 100-question skill checkpoint instead of padding the target with unpersisted or insufficiently checked material.

## Next generation point

Resume with:

`p5.pos.participle_adjective_ed_ing` — `-ed/-ing形容詞`

Then continue in taxonomy order:

1. `p5.pos.participle_adjective_ed_ing`
2. `p5.pos.word_form_subject_position`
3. `p5.pos.word_form_object_position`
4. `p5.verb.subject_verb_agreement`

Normally target 100 candidates per skill and preserve the same pending-only ownership boundary.

## Quality boundary

These are generated candidates, not learner-facing approved questions. The QA worker must independently re-solve every item and specifically check alternative defensible answers, unnatural English, weak distractors, explanation consistency, taxonomy mismatch, and duplicate/near-duplicate patterns before any approval.
