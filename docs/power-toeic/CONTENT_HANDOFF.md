# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **625 persisted generated candidates**.

- **6 micro-skills are complete at 100 questions each**.
- The 7th micro-skill, `p5.pos.word_form_subject_position`, is **25 / 100 persisted**.
- All 625 persisted questions remain `pending_validation`.
- No question has been marked `verified`, `needs_revision`, `rejected`, `approved`, or otherwise QA-decided by the generation worker.
- `generation_complete` remains **false**. Do not transition this worker to VALIDATION yet.

This content workflow remains independent from application implementation progress in `STATUS.json` / `90_HANDOFF.md`. During GENERATE, modify only the content-generation state and pending question data.

## Taxonomy

Machine-readable Part 5 taxonomy remains canonical at:

`subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`

It contains **44 micro-skills in 6 learner-facing groups**. Do not coarsen, merge, or reorder those skills during generation.

## Completed micro-skills

1. `p5.pos.adjective_before_noun` — 100
2. `p5.pos.adverb_modifies_verb` — 100
3. `p5.pos.noun_in_noun_slot` — 100
4. `p5.pos.adjective_after_linking_verb` — 100
5. `p5.pos.adverb_modifies_adjective` — 100
6. `p5.pos.participle_adjective_ed_ing` — 100

Completed subtotal: **600**.

## Current partial micro-skill

`p5.pos.word_form_subject_position` — `主語位置の語形`

Current persisted range:

- `p5_pos_word_form_subject_position_0001`
- through `p5_pos_word_form_subject_position_0025`

Storage:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/word-form-subject-position/pending/batch-20260827-004-part1.json`

Batch manifest:

`subjects/english/power-toeic/js/data/questions/part5/batches/2026-08-27-scheduled-004.json`

The checkpoint uses `power-toeic-candidate-v1-extended`; tuple positions 0–4 remain compatible with the established candidate format, and each item includes `difficulty` and `template_id` plus inherited taxonomy/generation/status metadata.

## Generation design for the persisted 25

The intended decision rule is: the blank is the grammatical subject of the clause, so a noun or noun-form answer is required. The persisted checkpoint currently uses five word families with five distinct business-context sentences each:

- decision / decisive / decisively / decide
- response / responsive / responsively / respond
- competition / competitive / competitively / compete
- operation / operational / operationally / operate
- communication / communicative / communicatively / communicate

An initial generic-predicate pass created several unnatural combinations. Those stems were **rewritten before handoff** so that the persisted checkpoint now uses natural business-context predicates rather than accepting structurally valid but semantically awkward sentences.

## Generation-time checks for the persisted 25

Passed for the persisted checkpoint:

- 25 stable unique IDs;
- exactly one `____` blank per stem;
- exactly four distinct choices per item;
- valid proposed answer indexes;
- answer positions A/B/C/D = **7 / 6 / 6 / 6** for this partial checkpoint;
- exact duplicate stems = **0**;
- SequenceMatcher near-duplicate stems at threshold >= 0.94 = **0**;
- maximum within-checkpoint SequenceMatcher similarity after wording refinement = **0.6144**.

The **full cross-bank machine similarity scan against the previously persisted 600 questions was not completed**. Direct `git` checkout from this execution environment could not resolve `github.com`; therefore do not claim cross-bank duplicate clearance. Complete that scan when a runtime with repository checkout / full-bank local access is available, or during independent QA.

These generation-time checks are not QA approval. Independent VALIDATION must still re-solve every question and evaluate ambiguity, naturalness, distractor defensibility, explanation correctness, taxonomy fit, and duplicate status.

## Exact next generation point

Resume inside the same micro-skill at:

`p5_pos_word_form_subject_position_0026`

Do **not** add `p5.pos.word_form_subject_position` to `generated_micro_skills` until IDs 0001–0100 are all safely persisted and the skill reaches 100 questions.

After that skill is complete, continue in canonical taxonomy order:

1. `p5.pos.word_form_object_position`
2. `p5.verb.subject_verb_agreement`
3. `p5.verb.present_vs_past`
4. then the next taxonomy item after `present_vs_past`

Normal target remains up to 4 complete micro-skills × 100 questions per run, but safe completed skill/checkpoint persistence takes priority over padding.

## Phase-transition rule

There are 44 taxonomy micro-skills total and generation is far from complete. Continue **GENERATE only** while any micro-skill is incomplete.

Only after every target micro-skill has the required generated question count and CONTENT status records `generation_complete: true` may this same worker switch to VALIDATION on a later run. Do not restart or delegate to the separate stopped QA schedule.
