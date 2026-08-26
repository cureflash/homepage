# Power TOEIC CONTENT/GENERATE handoff

## Current state

First manual throughput run completed **400 generated candidates = 4 micro-skills x 100**.

This content workflow is intentionally independent from application implementation progress in `STATUS.json` / `90_HANDOFF.md`.

## Taxonomy

Machine-readable Part 5 taxonomy is now at:

`subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`

It contains **44 micro-skills in 6 learner-facing groups**.

## Generated batch

Batch: `2026-08-26-manual-001`

Generated and still `pending_validation`:

1. `p5.pos.adjective_before_noun` — 100
2. `p5.pos.adverb_modifies_verb` — 100
3. `p5.pos.noun_in_noun_slot` — 100
4. `p5.pos.adjective_after_linking_verb` — 100

Total: **400**.

All generated content lives under the fine-grained path:

`subjects/english/power-toeic/js/data/questions/part5/<group>/<micro-skill>/pending/`

Do not move any item to a learner-facing/verified pool from the generation worker.

## Throughput finding

The first run completed the 400-question target while also paying one-time setup cost for the 44-skill taxonomy and content/QA status separation. Therefore **400 candidates per generation run is feasible and is not demonstrated to be the ceiling**.

Do not increase the scheduled target yet. Keep 4 x 100 until independent QA shows whether quality/backlog is manageable; generation volume is not useful if validation cannot keep pace.

## Next generation point

Start with:

`p5.pos.adverb_modifies_adjective`

Then continue in taxonomy order, normally four unfinished micro-skills per run and 100 candidates per skill.

## Quality boundary

These candidates have generation-time structural checks only. The QA worker must independently re-solve every item, specifically checking alternative answers, unnatural English, weak distractors, wrong explanations, taxonomy mismatch, and duplicate/near-duplicate patterns.
