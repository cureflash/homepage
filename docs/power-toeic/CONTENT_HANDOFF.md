# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content generation now contains **1000 persisted generated candidates**.

- **10 micro-skills are complete at 100 questions each**.
- All 1000 persisted questions remain `pending_validation`.
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

Completed subtotal: **1000**.

## Work completed this run

Generated and persisted the full 100-question `p5.verb.present_vs_past` micro-skill in four 25-question pending batches:

- 0001–0025: `subjects/english/power-toeic/js/data/questions/part5/verbs/present-vs-past/pending/batch-20260827-009-part1.json`
- 0026–0050: `.../batch-20260827-009-part2.json`
- 0051–0075: `.../batch-20260827-009-part3.json`
- 0076–0100: `.../batch-20260827-009-part4.json`

The set intentionally uses explicit temporal cues so the target distinction is not dependent on unstated context:

- 0001–0050: simple-present routines/habits with cues such as `every Monday`, `each quarter`, `every weekday`, `whenever ...`, and standing procedures;
- 0051–0100: simple-past completed events with cues such as `yesterday`, `last Friday`, `two days ago`, `last month`, and clauses anchored to explicit completed past events.

Generation-time structural checks for the 100 candidates:

- stable sequential IDs 0001–0100;
- exactly one blank per stem;
- four distinct choices per item;
- valid proposed-answer indexes;
- answer positions balanced A/B/C/D = **25/25/25/25**;
- exact duplicate stems: **0**;
- intra-skill SequenceMatcher similarity >= 0.94: **0 pairs**;
- maximum observed intra-skill similarity: approximately **0.925**;
- all items remain `pending_validation`;
- no QA status was promoted.

The highest-similarity pair is intentionally a present/past contrast built around the same office-shuttle context (items 0048 and 0098), but it remains below the current 0.94 near-duplicate threshold. Independent VALIDATION must still judge whether such paired contexts are pedagogically useful or too repetitive.

The full cross-bank machine near-duplicate scan against all 1000 questions is still **not claimed complete** because this runtime does not expose a full local repository checkout. Independent VALIDATION must later perform global duplicate, naturalness, ambiguity, all-choice substitution, and explanation review before approval.

## Exact next generation point

Resume at `p5_verb_present_perfect_vs_past_0001` for `p5.verb.present_perfect_vs_past` and generate toward 100 questions before marking the skill complete.

Then continue in canonical taxonomy order:

1. `p5.verb.active_vs_passive`
2. `p5.verb.modal_base_form`
3. `p5.verb.to_infinitive_pattern`
4. next canonical taxonomy item

Normal target remains up to four complete 100-question micro-skills per run, but safe persisted checkpoints take priority over padding.

## Phase transition

Generation remains incomplete: **10 of 44 micro-skills are complete**. Do not enter VALIDATION until every target micro-skill reaches its required count and CONTENT status records `generation_complete: true`.
