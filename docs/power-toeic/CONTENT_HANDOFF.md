# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **24 / 44**
- Current generation micro-skill: `p5.conn.time_prepositions` — **0 / 100**
- Generated questions persisted: **2,400**
- QA checked: **1,425**
- Verified: **1,356**
- Needs revision: **69**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Persisted `p5.conn.for_vs_since` IDs **0076-0100** as:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/for-vs-since/pending/batch-20260828-025-part4.json`

This completes `p5.conn.for_vs_since` at **100 / 100**. All 25 new items remain `pending_validation`.

Checkpoint checks completed:
- IDs 0076-0100 sequential and unique within the checkpoint
- one cloze per item
- four distinct visible choices per item
- valid answer indexes
- answer positions A/B/C/D = **7/6/6/6**
- exact duplicate stems: **0**
- SequenceMatcher >= 0.94 within this checkpoint: **0**
- maximum observed within-checkpoint similarity: about **0.607**

This does **not** claim cross-bank semantic duplicate clearance.

## This run — QA

Reviewed the oldest unchecked `p5.verb.gerund_pattern` IDs **0001-0025**.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

The avoid / consider / finish / postpone / recommend constructions each uniquely select the gerund form among the displayed choices, and the stored explanations are consistent with the keyed answers.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-gerund-part1.qa.json`

## Next generation

`p5.conn.for_vs_since` is complete. Continue the taxonomy with:

`p5.conn.time_prepositions`

Start ID:

`p5_conn_time_prepositions_0001`

## Next QA

Continue `p5.verb.gerund_pattern` from:

`p5_verb_gerund_pattern_0026`

Continue in 25-question safe checkpoints. Existing `needs_revision` items remain unresolved. Full revision-bound cross-bank semantic duplicate clearance remains outstanding.
