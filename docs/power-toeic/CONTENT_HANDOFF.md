# Power TOEIC content handoff

## Current content state

- Taxonomy: `part5-v1.0` — 44 micro-skills.
- Fully generated micro-skills: 40 / 44.
- Generated questions: 4,050.
- Checked: 3,125.
- Verified: 3,040.
- Needs revision: 85.
- Rejected: 0.
- Unchecked `pending_validation`: 925.
- `generation_complete`: `false`.
- `validation_complete`: `false`.

## This run — generation

Generated 25 new Part 5 candidates as a safe checkpoint, all retained as `pending_validation`.

- `p5.vocab.preposition_collocation` 0026-0050: 25 questions; the micro-skill is now 50/100.
- Answer positions: A/B/C/D = 6/7/6/6.
- Exact duplicate stems: 0.
- SequenceMatcher similarity >= 0.94: 0; maximum approximately 0.515.
- Full cross-bank semantic duplicate clearance remains outstanding.

The new items cover forecasting, hotel operations, purchasing, market recovery, production risk, service differentiation, asset ownership, customer service, capital investment, budgeting, remote-work inquiries, audit communications, scheduling, finance, employee benefits, consulting, protective packaging, contractor negotiation, delivery fees, investor concerns, training feedback, regional industry, engineering tests, property expansion, and packaging reduction while testing fixed preposition collocations.

## This run — independent QA

Reviewed the oldest 25 unchecked pending questions in strict backlog order.

- `p5.rel.where_vs_when` 0001-0025: 25 checked / 25 verified / 0 needs_revision / 0 rejected.

Each item was checked for relative-adverb syntax, unique answer, distractor validity, TOEIC-style naturalness, intended-skill alignment, and explanation consistency. All 25 use a place or time antecedent whose clause uniquely requires `where` or `when`; bare `which`, `who`, and the opposite relative adverb are not defensible in the displayed sentence. The persisted candidate format co-locates keys with stems, so connector-only access cannot technically guarantee a hidden-key first pass. Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next generation

Continue `p5.vocab.preposition_collocation` at `p5_vocab_preposition_collocation_0051`.

## Next QA

Continue the oldest unchecked backlog at `p5_rel_where_vs_when_0026`.
