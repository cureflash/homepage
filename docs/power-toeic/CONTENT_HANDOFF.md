# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **700 persisted generated candidates**.

- **7 micro-skills are complete at 100 questions each**.
- All 700 persisted questions remain `pending_validation`.
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
7. `p5.pos.word_form_subject_position` — 100

Completed subtotal: **700**.

## Newly completed micro-skill

`p5.pos.word_form_subject_position` — 主語位置の語形

Persisted ranges:

- 0001–0025: `.../word-form-subject-position/pending/batch-20260827-004-part1.json`
- 0026–0050: `.../word-form-subject-position/pending/batch-20260827-005-part2.json`
- 0051–0075: `.../word-form-subject-position/pending/batch-20260827-006-part3.json`
- 0076–0100: `.../word-form-subject-position/pending/batch-20260827-006-part4.json`

The new 0051–0100 checkpoint adds ten business word families: completion, inspection, expansion, reduction, selection, distribution, maintenance, verification, availability, and reliability. Items were written to force a noun-form subject, commonly through controlled `noun + of ...` structures, rather than relying on contexts where an -ing form could become a defensible alternate subject.

Generation-time structural checks for the new 50:

- stable sequential IDs 0051–0100;
- exactly one blank per stem;
- four distinct choices per item;
- valid proposed-answer indexes;
- answer positions A/B/C/D = 13/13/12/12 across the new 50;
- 50 distinct stems;
- no within-new-item SequenceMatcher similarity at or above 0.94; maximum observed similarity was approximately 0.671;
- all items remain `pending_validation`; no status was promoted to verified.

The full cross-bank machine near-duplicate scan against all 700 questions is still not claimed as complete because this runtime does not expose a full local repository checkout. Independent VALIDATION must perform duplicate/naturalness/ambiguity review before approval.

## Exact next generation point

Resume at `p5_pos_word_form_object_position_0001` for `p5.pos.word_form_object_position` and generate toward 100 questions before marking the skill complete.

Then continue in canonical taxonomy order:

1. `p5.verb.subject_verb_agreement`
2. `p5.verb.present_vs_past`
3. next canonical taxonomy item

Normal target remains up to four complete 100-question micro-skills per run, but safe persisted checkpoints take priority over padding.

## Phase transition

Generation remains incomplete: **7 of 44 micro-skills are complete**. Do not enter VALIDATION until every target micro-skill reaches its required count and CONTENT status records `generation_complete: true`.
