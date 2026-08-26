# Power TOEIC QA/VALIDATION handoff

## Current state

Independent QA has now checked **200 questions cumulatively**.

- verified: **183**
- needs_revision: **17**
- rejected: **0**
- unchecked `pending_validation`: **1100** out of 1300 generated candidates
- `validation_complete`: **false**

## Work completed this run

Reviewed the oldest remaining pending batch for `p5.pos.adjective_before_noun` (`batch: 2026-08-26-manual-001`) question-by-question. Each item was solved from the stem and four choices before consulting its stored proposed answer/explanation.

Result:

- checked: **100**
- verified: **96**
- needs_revision: **4**
- rejected: **0**

Per-item QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-manual-001.qa.json`

Approved production-eligible ID gate:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adjective-before-noun/verified/batch-20260826-001-approved-ids.json`

The source candidate file remains unchanged. IDs absent from the approved-ID index remain excluded from any production bank.

## Four items requiring revision

- `p5_pos_adjective_before_noun_0037` — `secure connection` / `secured connection`
- `p5_pos_adjective_before_noun_0038` — `secure network` / `secured network`
- `p5_pos_adjective_before_noun_0039` — `secure storage method` / `secured storage method`
- `p5_pos_adjective_before_noun_0040` — `secure system` / `secured system`

In each case both adjective forms are grammatically and semantically defensible in the existing context, so the item lacks a uniquely defensible answer. These four remain `needs_revision`; they were not auto-promoted.

## Quality observations

- The proposed key matched the independently derived unique answer in all 96 verified items.
- No key mismatch was found; the four failures are ambiguity failures.
- Stored explanations are short but accurate for the 96 verified items.
- No exact duplicate stem was observed within this 100-question batch.
- The batch has visible structural repetition because it uses 25 word families × four answer-position variants, but the passing stems remain contextually distinct.
- Answer positions are balanced A/B/C/D = **25/25/25/25**.
- A full repository-wide semantic near-duplicate scan was **not completed in this run**, so global near-duplicate clearance is not claimed.

## Exact next QA point

Continue with the next oldest unchecked data:

- file: `subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adverb-modifies-verb/pending/batch-20260826-001.json`
- batch metadata: `2026-08-26-manual-001`
- micro-skill: `p5.pos.adverb_modifies_verb`
- question ID: `p5_pos_adverb_modifies_verb_0001`

Continue in oldest-pending order. Do not prioritize the newly generated `modal_base_form` batch over older unchecked candidates.

## Generation coordination

Generation has reached **1300 questions / 13 of 44 micro-skills**. The next generation micro-skill is `p5.verb.to_infinitive_pattern`. Until all 44 skills are generated, normal runs should continue combined generation + oldest-pending validation. After generation completes, switch to validation-only until pending and revision work is exhausted.
