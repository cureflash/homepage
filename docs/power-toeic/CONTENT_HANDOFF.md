# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **600 generated candidates across 6 completed micro-skills**.

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

Previous scheduled checkpoint `2026-08-26-scheduled-002`:

5. `p5.pos.adverb_modifies_adjective` — 100

Current checkpoint batch `2026-08-26-scheduled-003`:

6. `p5.pos.participle_adjective_ed_ing` — **100**

Total generated: **600**. All remain `pending_validation`; the generation worker has not made any `verified`, `rejected`, or `quarantined` decision.

## Current batch storage

The completed skill is stored under:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/participle-adjective-ed-ing/pending/`

It is split into four 25-question chunks:

- `batch-20260826-003-part1.json`
- `batch-20260826-003-part2.json`
- `batch-20260826-003-part3.json`
- `batch-20260826-003-part4.json`

Batch manifest:

`subjects/english/power-toeic/js/data/questions/part5/batches/2026-08-26-scheduled-003.json`

The files use `power-toeic-candidate-v1-extended`; tuple positions 0–4 remain compatible with candidate-v1, with per-item `difficulty` and `template_id` plus inherited taxonomy/generation/status metadata.

## Generation design for the new 100

The micro-skill targets the taxonomy rule for distinguishing the person/receiver side (`-ed`) from the thing/situation causing the reaction (`-ing`). The 100 candidates are spread across ten adjective families and varied business situations rather than one sentence template:

- interested / interesting
- excited / exciting
- satisfied / satisfying
- surprised / surprising
- confused / confusing
- disappointed / disappointing
- frustrated / frustrating
- concerned / concerning
- bored / boring
- exhausted / exhausting

Each family contains both receiver-side and cause-side contexts.

## Generation-time structural checks for the new 100

Passed before persistence:

- 100 stable unique question IDs;
- exactly one `____` blank in every stem;
- exactly four distinct choices per item;
- valid proposed answer index;
- answer-position distribution A/B/C/D = 25/25/25/25;
- no exact duplicate stems within the completed skill;
- no near-duplicate stem pairs at SequenceMatcher threshold >= 0.94 within the completed skill.

The full machine similarity scan against all **previously persisted 500 questions** was **not completed** through the repository-read path in this checkpoint. The manifest records this explicitly; do not treat cross-bank duplicate clearance as passed. Independent QA still owns semantic ambiguity, naturalness, distractor quality, answer/explanation consistency, taxonomy fit, and final duplicate review.

## Why this run stopped at one skill

The normal target remains 4 micro-skills × 100 questions. This run persisted one complete, structurally checked 100-question micro-skill rather than count unfinished material or lower-quality padding toward the 400-question target.

## Next generation point

Resume with:

`p5.pos.word_form_subject_position` — `主語位置の語形`

Then continue in canonical taxonomy order:

1. `p5.pos.word_form_subject_position`
2. `p5.pos.word_form_object_position`
3. `p5.verb.subject_verb_agreement`
4. `p5.verb.present_vs_past`

Normally target 100 candidates per skill and preserve the same pending-only ownership boundary.

## Quality boundary

These are generated candidates, not learner-facing approved questions. The QA worker must independently re-solve every item and specifically check alternative defensible answers, unnatural English, weak distractors, explanation consistency, taxonomy mismatch, and duplicate/near-duplicate patterns before any approval.
