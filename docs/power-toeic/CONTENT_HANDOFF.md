# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **24 / 44**
- Current generation micro-skill: `p5.conn.time_prepositions` — **25 / 100**
- Generated questions persisted: **2,425**
- QA checked: **1,450**
- Verified: **1,381**
- Needs revision: **69**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Persisted `p5.conn.time_prepositions` IDs **0001-0025** as:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/time-prepositions/pending/batch-20260828-025-part1.json`

All 25 new items remain `pending_validation`.

Checkpoint checks completed:
- IDs 0001-0025 sequential and unique within the checkpoint
- one cloze per item
- four distinct visible choices per item
- valid answer indexes
- answer positions A/B/C/D = **7/6/6/6**
- exact duplicate stems: **0**
- SequenceMatcher >= 0.94 within this checkpoint: **0**
- maximum observed within-checkpoint similarity: about **0.557**

The distractor set intentionally avoids `during`/`by` so that otherwise valid alternate time-adverbial readings do not create multiple correct answers. This checkpoint does **not** claim cross-bank semantic duplicate clearance.

## This run — QA

Reviewed the oldest unchecked `p5.verb.gerund_pattern` IDs **0026-0050**.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

The `suggest`, `keep`, `practice`, `mind`, and `admit` constructions each uniquely select the gerund form among the displayed choices. Some subject-role contexts are template-like, but none creates an alternate correct choice in this checkpoint and the stored explanations match the keyed forms.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-gerund-part2.qa.json`

## Test limitation

The connector write/read path succeeded, but repo-local full schema/Node test execution was not completed because this execution environment could not resolve `github.com` for a local clone. Do not interpret this as a passing full-repository test result.

## Next generation

Continue `p5.conn.time_prepositions` from:

`p5_conn_time_prepositions_0026`

## Next QA

Continue `p5.verb.gerund_pattern` from:

`p5_verb_gerund_pattern_0051`

Continue in 25-question safe checkpoints. Existing `needs_revision` items remain unresolved. Full revision-bound cross-bank semantic duplicate clearance remains outstanding.
