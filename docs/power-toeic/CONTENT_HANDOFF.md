# Power TOEIC CONTENT/GENERATE handoff

## Current state

Production content now contains **1400 persisted generated candidates** across **14 complete micro-skills**. QA has independently checked 300 of them: **278 verified / 22 needs_revision / 0 rejected**, leaving **1100 unchecked `pending_validation`** questions.

`generation_complete` and `validation_complete` both remain **false**.

## Taxonomy

Canonical taxonomy remains `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json` with 44 micro-skills. Do not merge or reorder skills.

## Work completed this run — GENERATE

Completed `p5.verb.to_infinitive_pattern` at **100/100** and persisted it in four safe checkpoints:

- 0001–0025: `subjects/english/power-toeic/js/data/questions/part5/verbs/to-infinitive-pattern/pending/batch-20260827-013-part1.json`
- 0026–0050: `.../batch-20260827-013-part2.json`
- 0051–0075: `.../batch-20260827-013-part3.json`
- 0076–0100: `.../batch-20260827-013-part4.json`

All 100 remain `pending_validation`. The skill tests verbs/patterns that require a following to-infinitive using business-context Part 5 sentences and contrasts `to + base` against gerund/base/past-form distractors.

Generation checks over the 100 questions:

- sequential unique IDs 0001–0100;
- one blank per stem;
- four distinct choices and valid proposed-answer index;
- answer positions A/B/C/D = **25/25/25/25**;
- exact duplicate stems: **0**;
- intra-skill SequenceMatcher similarity >= 0.94: **0 pairs**;
- maximum observed intra-skill similarity: about **0.807**.

A full cross-bank semantic near-duplicate scan against all 1400 candidates was **not completed in this run**, so global near-duplicate clearance is not claimed.

## Work completed this run — VALIDATION

Independently re-solved the oldest unchecked `p5.pos.adverb_modifies_verb` batch before consulting proposed answers/explanations.

Result:

- checked: **100**
- verified: **95**
- needs_revision: **5**
- rejected: **0**

All 100 stored proposed keys were grammatically derivable and no multiple-answer/key-mismatch case was found, but five items fail the TOEIC-naturalness gate:

- `p5_pos_adverb_modifies_verb_0018` — `remained online stably` is unnatural.
- `p5_pos_adverb_modifies_verb_0077` — `handled urgent requests responsively` is awkward.
- `p5_pos_adverb_modifies_verb_0078` — `interface adjusted responsively` is marked/awkward for a general TOEIC item.
- `p5_pos_adverb_modifies_verb_0079` — `reacted responsively` is redundant/unnatural.
- `p5_pos_adverb_modifies_verb_0080` — `processed user input responsively` is an unnatural collocation for this target.

Canonical QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-manual-001-adverb-modifies-verb.qa.json`

Approved-ID gate:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adverb-modifies-verb/verified/batch-20260826-001-approved-ids.json`

## Exact next generation point

Resume at:

- micro-skill: `p5.verb.gerund_pattern`
- question ID: `p5_verb_gerund_pattern_0001`

Then continue in canonical taxonomy order.

## Exact next QA point

Resume the oldest unchecked batch at:

- file: `subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/noun-in-noun-slot/pending/batch-20260826-001.json`
- micro-skill: `p5.pos.noun_in_noun_slot`
- question ID: `p5_pos_noun_in_noun_slot_0001`

## Phase transition

Generation remains incomplete at **14/44 micro-skills**. Continue combined GENERATE + oldest-pending VALIDATION runs. Once all 44 skills are generated, stop new generation and switch to validation-only until pending and revision work is exhausted.
