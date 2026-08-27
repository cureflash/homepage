# Power TOEIC QA/VALIDATION handoff

## Current state

Independent QA has now checked **300 questions cumulatively**.

- verified: **278**
- needs_revision: **22**
- rejected: **0**
- unchecked `pending_validation`: **1100** out of 1400 generated candidates
- `validation_complete`: **false**

## Work completed this run

Reviewed the oldest remaining unchecked batch for `p5.pos.adverb_modifies_verb` (`batch: 2026-08-26-manual-001`) question-by-question. Each item was solved from stem + four choices before consulting its stored proposed answer/explanation.

Result:

- checked: **100**
- verified: **95**
- needs_revision: **5**
- rejected: **0**

Per-item QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-manual-001-adverb-modifies-verb.qa.json`

Approved production-eligible ID gate:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adverb-modifies-verb/verified/batch-20260826-001-approved-ids.json`

The source candidate file remains unchanged. IDs absent from the approved-ID index remain excluded from any production bank.

## Five items requiring revision

- `p5_pos_adverb_modifies_verb_0018` — `remained online stably` is grammatically interpretable but unnatural.
- `p5_pos_adverb_modifies_verb_0077` — `handled urgent requests responsively` is awkward.
- `p5_pos_adverb_modifies_verb_0078` — `interface adjusted responsively` is marked/awkward for a general TOEIC item.
- `p5_pos_adverb_modifies_verb_0079` — `reacted responsively` is redundant/unnatural.
- `p5_pos_adverb_modifies_verb_0080` — `processed user input responsively` is an unnatural collocation for the target register.

These five fail the TOEIC-naturalness gate even though the proposed adverb form is grammatically derivable. They remain `needs_revision`; they were not auto-promoted.

## Quality observations

- Independent grammatical answer selection matched the stored proposed answer in all 100 items.
- No multiple-answer or key-mismatch failure was found in this batch.
- The five failures are naturalness/collocation failures, not answer-index failures.
- No exact duplicate stem was observed within this 100-question batch.
- The batch has visible structural repetition because it uses 25 word families × four answer-position variants; answer positions remain balanced A/B/C/D = **25/25/25/25**.
- A full repository-wide semantic near-duplicate scan was **not completed in this run**, so global near-duplicate clearance is not claimed.

## Exact next QA point

Continue with the next oldest unchecked data:

- file: `subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/noun-in-noun-slot/pending/batch-20260826-001.json`
- batch metadata: `2026-08-26-manual-001`
- micro-skill: `p5.pos.noun_in_noun_slot`
- question ID: `p5_pos_noun_in_noun_slot_0001`

Continue in oldest-pending order. Do not prioritize newly generated questions over older unchecked candidates.

## Generation coordination

Generation has reached **1400 questions / 14 of 44 micro-skills**. The next generation micro-skill is `p5.verb.gerund_pattern`, starting at `p5_verb_gerund_pattern_0001`. Until all 44 skills are generated, normal runs should continue combined generation + oldest-pending validation. After generation completes, switch to validation-only until pending and revision work is exhausted.
