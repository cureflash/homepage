# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **23 / 44**
- Next generation micro-skill: `p5.conn.for_vs_since` — **0 / 100**
- Generated questions persisted: **2,300**
- QA checked: **1,325**
- Verified: **1,260**
- Needs revision: **65**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.conn.by_vs_until` by persisting IDs **0076-0100** as:

- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/by-vs-until/pending/batch-20260828-025-part4.json`

The checkpoint continues to separate:
- `by` = deadline by which a completion/result must occur;
- `until` = endpoint through which an action/state continues.

All 25 remain `pending_validation`.

Generation checks for this checkpoint:
- IDs 0076-0100 sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions A/B/C/D = **6/7/6/6**
- exact duplicate stems = **0**
- no within-checkpoint SequenceMatcher pair >= 0.94
- observed maximum pair similarity ≈ **0.636**

The full cross-bank semantic near-duplicate gate is still outstanding; the above is only a checkpoint-level lexical/surface similarity check.

## This run — QA

Independently reviewed the oldest unchecked `p5.verb.to_infinitive_pattern` IDs **0001-0025** before consulting stored answers/explanations.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 independently resolve to the to-infinitive after the governing verb. The presented alternative forms are not defensible in the displayed structures, business English is acceptable for the TOEIC Part 5 target, and every stored proposed answer/explanation agreed with the independent solution.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-to-infinitive-part1.qa.json`

## Next generation

`p5.conn.by_vs_until` is complete at 100/100. Continue taxonomy order with:

`p5.conn.for_vs_since`

Start ID:

`p5_conn_for_vs_since_0001`

## Next QA

Continue the same oldest unchecked micro-skill:

`p5.verb.to_infinitive_pattern`

Start ID:

`p5_verb_to_infinitive_pattern_0026`

Continue independent re-solving in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved. Full cross-bank semantic duplicate clearance remains outstanding.
