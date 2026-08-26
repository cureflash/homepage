# Power TOEIC QA/VALIDATION handoff

## Current state

Independent QA has completed the latest generated batch `2026-08-26-scheduled-002` for micro-skill `p5.pos.adverb_modifies_adjective`.

- checked: 100
- verified: 87
- needs_revision: 13
- rejected: 0
- remaining pending backlog: 400

The per-item QA record is canonical at:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-26-scheduled-002.qa.json`

The 87 verified IDs are separately indexed as production-eligible at:

`subjects/english/power-toeic/js/data/questions/part5/parts-of-speech/adverb-modifies-adjective/verified/batch-20260826-002-approved-ids.json`

The original candidate files remain unchanged. The approved-ID index is an explicit gate: IDs not listed there must not enter a learner-facing production pool.

## QA method used

Each of the 100 items was independently solved from the stem and four choices before consulting the generated proposed answer/explanation. Then each item was reviewed for:

- one defensible answer only;
- alternate-answer risk;
- grammatical and semantic naturalness;
- distractor validity;
- intended micro-skill alignment;
- answer/explanation consistency;
- exact/near-duplicate concerns;
- excessive template or lexical repetition.

The batch had no existing verified-bank collision to compare against because the verified production bank was empty before this QA pass. The generation-time within-batch exact/near-duplicate checks were also reviewed; no item was rejected solely for duplication. The family structure is repetitive (25 adverb/word-family sets × 4 answer-position variants), but the 87 passing items remain sufficiently distinct for this first bank checkpoint.

## 13 items requiring revision

The full per-ID reason is in the QA JSON. Main defect classes:

1. **taxonomy mismatch: adverb actually modifies another adverb**
   - `...0020`: `remarkably quickly`
   - `...0047`: `exceptionally well qualified`
   - `...0062`: `arrived unusually early`

2. **taxonomy mismatch: adverb modifies a passive verb phrase rather than an adjective**
   - `...0034`: `widely accepted`
   - `...0035`: `widely used`
   - `...0036`: `widely recognized`
   - `...0094`: `publicly announced`
   - `...0096`: `publicly confirmed`

3. **explanation points to the wrong syntactic target even though the keyed answer is unique**
   - `...0024`: `significantly more accurate`
   - `...0056`: `considerably more efficient`

4. **unnatural/weak TOEIC-style collocation**
   - `...0051`: `customer satisfaction is stronger`
   - `...0079`: `operationally practical`
   - `...0082`: `environmentally efficient`

These 13 remain excluded. They may be minimally rewritten by a future revision step, but must be independently rechecked before becoming verified.

## Exact next QA point

The latest 100-question scheduled batch is complete. Resume the older remaining backlog at:

- batch: `2026-08-26-manual-001`
- micro-skill: `p5.pos.adjective_before_noun`
- question ID: `p5_pos_adjective_before_noun_0001`

Then continue through the remaining three micro-skills of that manual batch in order unless a newer generated batch should be prioritized by the scheduler rule.

## Throughput observation

A full 100-question micro-skill can be independently reviewed in one QA run with meaningful item-level scrutiny. This run does **not** establish that 400 questions can be checked with the same rigor in one run. At the current observed rate, generation may outpace QA if generation regularly produces 400 per run, so backlog growth must be monitored rather than bulk-approving unchecked items.
