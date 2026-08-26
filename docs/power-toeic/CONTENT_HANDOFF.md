# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **650 persisted generated candidates**.

- **6 micro-skills are complete at 100 questions each**.
- The 7th micro-skill, `p5.pos.word_form_subject_position`, is **50 / 100 persisted**.
- All 650 persisted questions remain `pending_validation`.
- No QA decision was made by this generation run.
- `generation_complete` remains **false**. Continue GENERATE only.

## Taxonomy

Canonical taxonomy remains `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json` with 44 micro-skills. Do not merge or reorder skills.

## Completed micro-skills

1. `p5.pos.adjective_before_noun` — 100
2. `p5.pos.adverb_modifies_verb` — 100
3. `p5.pos.noun_in_noun_slot` — 100
4. `p5.pos.adjective_after_linking_verb` — 100
5. `p5.pos.adverb_modifies_adjective` — 100
6. `p5.pos.participle_adjective_ed_ing` — 100

Completed subtotal: **600**.

## Current partial micro-skill

`p5.pos.word_form_subject_position` — 主語位置の語形

Persisted ranges:

- 0001–0025: `.../word-form-subject-position/pending/batch-20260827-004-part1.json`
- 0026–0050: `.../word-form-subject-position/pending/batch-20260827-005-part2.json`

The new 0026–0050 checkpoint adds five word families: approval, implementation, security, performance, and replacement. Each item places the blank in subject position and contrasts noun/verb/adjective or participial forms in a business context. All remain `pending_validation`.

Generation-time structural design for the new checkpoint:

- stable sequential IDs 0026–0050;
- exactly one blank per stem;
- four distinct choices per item;
- valid proposed answer indexes;
- answer positions deliberately rotated across the checkpoint;
- five different business word families and 25 distinct stems;
- no status was promoted to verified.

The full cross-bank machine near-duplicate scan against all previous questions is still not claimed as complete because this runtime does not provide a full local repository checkout. Independent VALIDATION must perform duplicate/naturalness/ambiguity review before approval.

## Exact next generation point

Resume at `p5_pos_word_form_subject_position_0051` and finish through 0100 before adding this micro-skill to `generated_micro_skills`.

Then continue in canonical taxonomy order:

1. `p5.pos.word_form_object_position`
2. `p5.verb.subject_verb_agreement`
3. `p5.verb.present_vs_past`
4. next canonical taxonomy item

Normal target remains up to four complete 100-question micro-skills per run, but safe persisted checkpoints take priority over padding.

## Phase transition

Generation is far from complete: 6 of 44 micro-skills are complete and the 7th is half complete. Do not enter VALIDATION until every target micro-skill reaches its required count and CONTENT status records `generation_complete: true`.
