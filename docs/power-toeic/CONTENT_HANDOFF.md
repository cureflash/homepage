# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **24 / 44**
- Current generation micro-skill: `p5.conn.time_prepositions` — **50 / 100**
- Generated questions persisted: **2,450**
- QA checked: **1,475**
- Verified: **1,406**
- Needs revision: **69**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Persisted `p5.conn.time_prepositions` IDs **0026-0050** as:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/time-prepositions/pending/batch-20260828-025-part2.json`

All 25 new items remain `pending_validation`. They cover specific dates, months, years, clock times, named days, day+part-of-day, seasons, `at night`, `at dawn`, `at noon`, `the morning of + date`, and decade expressions. Answer positions are A/B/C/D = **6/7/6/6**. Each record keeps one cloze, four distinct choices, a valid keyed answer, explanation, difficulty and stable template ID.

This connector-only run did not execute the repository-wide semantic duplicate scanner, so no global duplicate-clearance claim is made.

## This run — QA

Reviewed the oldest unchecked `p5.verb.gerund_pattern` IDs **0051-0075**.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

The displayed `deny`, `risk`, `delay`, `enjoy`, and `discuss` constructions each uniquely select a gerund complement among the four choices. Stored explanations are consistent with the keyed answers.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-gerund-part3.qa.json`

## Test limitation

The connector read/write path succeeded, but repo-local full schema/Node tests were not executed in this run. Full revision-bound cross-bank semantic duplicate clearance also remains outstanding.

## Next generation

Continue `p5.conn.time_prepositions` from:

`p5_conn_time_prepositions_0051`

## Next QA

Continue `p5.verb.gerund_pattern` from:

`p5_verb_gerund_pattern_0076`

Continue in 25-question safe checkpoints. Existing `needs_revision` items remain unresolved.
