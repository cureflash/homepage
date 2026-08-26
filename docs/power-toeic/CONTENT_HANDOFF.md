# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content now contains **1300 persisted generated candidates** across **13 complete micro-skills**. QA has independently checked 200 of them: **183 verified / 17 needs_revision / 0 rejected**, leaving **1100 unchecked `pending_validation`** questions.

`generation_complete` and `validation_complete` both remain **false**.

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
12. `p5.verb.active_vs_passive` — 100
13. `p5.verb.modal_base_form` — 100

Completed subtotal: **1300**.

## Work completed this run — GENERATE

A parallel worker had already persisted the first 25 `p5.verb.modal_base_form` questions at:

- `subjects/english/power-toeic/js/data/questions/part5/verbs/modal-base-form/pending/batch-20260827-012-part1.json`

That checkpoint was reconciled rather than duplicated. This run then persisted:

- 0026–0050: `.../batch-20260827-012-part2.json`
- 0051–0075: `.../batch-20260827-012-part3.json`
- 0076–0100: `.../batch-20260827-012-part4.json`

The combined 100-question skill uses modal verbs such as `can / must / should / may / might / will / could` with the tested rule that the following main verb takes the base form.

Generation checks over the combined 100:

- sequential unique IDs 0001–0100;
- one blank per stem;
- four distinct choices and valid proposed-answer index;
- answer positions A/B/C/D = **25/25/25/25**;
- exact duplicate stems: **0**;
- intra-skill SequenceMatcher similarity >= 0.94: **0 pairs**;
- maximum observed intra-skill similarity: about **0.671**.

A draft morphology helper would have produced `shiped / shiping` for one item; this was detected before persistence and corrected to `shipped / shipping`.

A full cross-bank semantic near-duplicate scan against all 1300 candidates was **not completed in this run**, so global duplicate clearance is not claimed.

## Work completed this run — VALIDATION

The oldest remaining pending batch `2026-08-26-manual-001` / `p5.pos.adjective_before_noun` was independently re-solved question-by-question before consulting proposed answers/explanations.

Result:

- checked: **100**
- verified: **96**
- needs_revision: **4**
- rejected: **0**

The four revision items are IDs `0037`–`0040`. Each uses `secure` and `secured` as competing adjective choices in noun phrases such as connection/network/storage method/system; both readings are defensible, so these items are not uniquely solvable.

Canonical QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-manual-001.qa.json`

Approved-ID gate:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adjective-before-noun/verified/batch-20260826-001-approved-ids.json`

## Exact next generation point

Resume at:

- micro-skill: `p5.verb.to_infinitive_pattern`
- question ID: `p5_verb_to_infinitive_pattern_0001`

Then continue in canonical taxonomy order.

## Exact next QA point

Resume the oldest unchecked batch at:

- file: `subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adverb-modifies-verb/pending/batch-20260826-001.json`
- micro-skill: `p5.pos.adverb_modifies_verb`
- question ID: `p5_pos_adverb_modifies_verb_0001`

## Phase transition

Generation remains incomplete at **13/44 micro-skills**. Continue normal combined GENERATE + VALIDATION runs. Do not bulk-promote unchecked questions. Once all 44 skills are generated, stop new generation and switch to validation-only until pending/revision work is exhausted.
