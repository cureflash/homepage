# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **23 / 44**
- Current generation micro-skill: `p5.conn.for_vs_since` — **75 / 100**
- Generated questions persisted: **2,375**
- QA checked: **1,400**
- Verified: **1,331**
- Needs revision: **69**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Persisted `p5.conn.for_vs_since` IDs **0051-0075** as:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/for-vs-since/pending/batch-20260828-025-part3.json`

All 25 remain `pending_validation`.

Checkpoint checks completed:
- IDs 0051-0075 sequential and unique within the checkpoint
- one cloze per item
- four distinct visible choices per item
- valid answer indexes
- answer positions A/B/C/D = **5/7/8/5**
- exact duplicate stems: **0**
- SequenceMatcher >= 0.94 within this checkpoint: **0**
- maximum observed within-checkpoint similarity: about **0.613**

This does **not** claim cross-bank semantic duplicate clearance.

## This run — QA

Reviewed the oldest unchecked `p5.verb.to_infinitive_pattern` IDs **0076-0100**.

Run result:
- Checked: **25**
- Verified: **24**
- Needs revision: **1**
- Rejected: **0**

Needs revision:
- `p5_verb_to_infinitive_pattern_0097` — past `failed` is paired with the still-open deadline `by the end of this week`; revise to an unambiguously elapsed deadline such as `by the end of last week` before approval.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-to-infinitive-part4.qa.json`

## Next generation

Continue `p5.conn.for_vs_since` from:

`p5_conn_for_vs_since_0076`

## Next QA

The to-infinitive skill is now fully checked. Continue oldest unchecked backlog with:

`p5.verb.gerund_pattern`

Start ID:

`p5_verb_gerund_pattern_0001`

Continue in 25-question safe checkpoints. Existing `needs_revision` items remain unresolved. Full revision-bound cross-bank semantic duplicate clearance remains outstanding.
