# Power TOEIC content handoff

## Current content state

- Taxonomy: `part5-v1.0` — 44 micro-skills.
- Fully generated micro-skills: 39 / 44.
- Generated questions: 3,900.
- Checked: 2,900.
- Verified: 2,815.
- Needs revision: 85.
- Rejected: 0.
- Unchecked `pending_validation`: 1,000.
- `generation_complete`: `false`.
- `validation_complete`: `false`.

## This run — generation

Generated 100 new Part 5 candidates in four 25-question checkpoints, all retained as `pending_validation`.

- `p5.vocab.verb_noun_collocation` 0001-0100: 100 questions; the micro-skill is complete at 100/100.
- Answer positions: A/B/C/D = 28/24/24/24.
- Exact duplicate stems authored within the skill: 0.
- First-checkpoint SequenceMatcher similarity >= 0.94: 0; maximum approximately 0.509.
- Full cross-bank semantic duplicate clearance remains outstanding.

The generated items cover common TOEIC business collocations across finance, procurement, logistics, compliance, HR, customer service, contracts, operations, training, and project management rather than a single sentence template.

## This run — independent QA

Reviewed the oldest 100 unchecked pending questions in strict backlog order.

- `p5.pron.reflexive` 0001-0100: 100 checked / 99 verified / 1 needs_revision / 0 rejected.

`p5_pron_reflexive_0042` remains quarantined because `Our project team set ourselves a deadline` relies on notional agreement between singular collective `team` and first-person plural `ourselves`; that is not clean enough for a strict TOEIC production item. The other 99 items have one defensible reflexive/emphatic-pronoun answer, natural TOEIC-style English, intended-skill alignment, and consistent explanations.

The persisted candidate format co-locates keys with stems, so connector-only access cannot technically guarantee a hidden-key first pass. Full-bank semantic near-duplicate clearance remains outstanding, so `verified` is not yet equivalent to final production-approved status.

## Next generation

Start `p5.vocab.adjective_noun_collocation` at `p5_vocab_adjective_noun_collocation_0001`.

## Next QA

Continue the oldest unchecked backlog at `p5_rel_who_vs_which_0001`.
