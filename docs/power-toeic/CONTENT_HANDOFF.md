# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **1100 persisted generated candidates**.

- **11 micro-skills are complete at 100 questions each**.
- All 1100 persisted questions remain `pending_validation`.
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
8. `p5.pos.word_form_object_position` — 100
9. `p5.verb.subject_verb_agreement` — 100
10. `p5.verb.present_vs_past` — 100
11. `p5.verb.present_perfect_vs_past` — 100

Completed subtotal: **1100**.

## Work completed this run

Generated and persisted the full 100-question `p5.verb.present_perfect_vs_past` micro-skill in four 25-question pending batches:

- 0001–0025: `subjects/english/power-toeic/js/data/questions/part5/verbs/present-perfect-vs-past/pending/batch-20260827-010-part1.json`
- 0026–0050: `.../batch-20260827-010-part2.json`
- 0051–0075: `.../batch-20260827-010-part3.json`
- 0076–0100: `.../batch-20260827-010-part4.json`

The set intentionally separates the two tense readings with explicit time anchors:

- 0001–0050: present perfect with current-link cues such as `already`, `since Monday`, `since January`, `so far this week`, `during the current quarter`, `up to now`, and `over the past three months`;
- 0051–0100: simple past with finished-time cues such as `yesterday`, `last Friday`, `two weeks ago`, `last month`, `in 2024`, `in March 2025`, and `before the office closed last night`.

Generation-time structural checks for the 100 candidates:

- stable sequential IDs 0001–0100;
- exactly one blank per stem;
- four distinct choices per item;
- valid proposed-answer indexes;
- answer positions balanced A/B/C/D = **25/25/25/25**;
- exact duplicate stems: **0**;
- intra-skill SequenceMatcher similarity >= 0.94: **0 pairs**;
- maximum observed intra-skill similarity: approximately **0.918**;
- all items remain `pending_validation`;
- no QA status was promoted.

During generation, an earlier **unsaved** draft was rejected because naive inflection produced malformed third-person forms and random verb/object pairing created poor collocations. The persisted set replaced that draft with explicit third-person forms and fixed natural verb-object collocations before any Git write.

The full cross-bank machine near-duplicate scan against all 1100 questions is still **not claimed complete** because this runtime does not expose a full local repository checkout. Independent VALIDATION must later perform global duplicate, naturalness, ambiguity, all-choice substitution, and explanation review before approval.

## Exact next generation point

Resume at `p5_verb_active_vs_passive_0001` for `p5.verb.active_vs_passive` and generate toward 100 questions before marking the skill complete.

Then continue in canonical taxonomy order:

1. `p5.verb.modal_base_form`
2. `p5.verb.to_infinitive_pattern`
3. `p5.verb.gerund_pattern`
4. next canonical taxonomy item

Normal target remains up to four complete 100-question micro-skills per run, but safe persisted checkpoints take priority over padding.

## Phase transition

Generation remains incomplete: **11 of 44 micro-skills are complete**. Do not enter VALIDATION until every target micro-skill reaches its required count and CONTENT status records `generation_complete: true`.
