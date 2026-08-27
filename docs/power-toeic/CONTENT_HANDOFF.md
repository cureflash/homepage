# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **25 / 44**
- Generated questions persisted: **2,500**
- QA checked: **1,500**
- Verified: **1,425**
- Needs revision: **75**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Completed `p5.conn.time_prepositions` by persisting IDs **0051-0100** as two safe checkpoints:

- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/time-prepositions/pending/batch-20260828-025-part3.json`
- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/time-prepositions/pending/batch-20260828-025-part4.json`

All 50 new items remain `pending_validation`. They cover months, years, dates, named days, day+part-of-day, clock times, seasons, general parts of day, decade periods, and fixed points such as noon/midnight/dawn/dusk. Answer positions across the new 50 are A/B/C/D = **12/12/13/13**. The 50-question checkpoint has no identical stems and no SequenceMatcher pair at or above 0.94; maximum observed similarity was approximately **0.688**.

This connector-only run did not execute the repository-wide semantic duplicate scanner, so no global duplicate-clearance claim is made.

## This run — QA

Reviewed the oldest unchecked `p5.verb.gerund_pattern` IDs **0076-0100**.

Run result:
- Checked: **25**
- Verified: **19**
- Needs revision: **6**
- Rejected: **0**

Revision IDs:

- `p5_verb_gerund_pattern_0081` — present `mentions` conflicts with `during yesterday's project briefing`.
- `p5_verb_gerund_pattern_0086` through `0090` — the gerund target is clear, but one-time present `quits` is unnatural or temporally inconsistent with completed past events / the surrounding sequence.

These six were not promoted merely because their gerund choice is structurally obvious; whole-sentence TOEIC naturalness remains part of the QA gate.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-gerund-part4.qa.json`

## Test limitation

The new 50 generation items were checked for IDs, one-cloze/four-choice structure, keyed-index validity, answer-position distribution, exact stem duplicates and within-checkpoint SequenceMatcher similarity before persistence. Repo-local full schema/Node tests were not executed in this connector-only run. Full revision-bound cross-bank semantic duplicate clearance also remains outstanding.

## Next generation

Start taxonomy-next micro-skill:

`p5.conn.logical_conjunction`

from:

`p5_conn_logical_conjunction_0001`

## Next QA

The `p5.verb.gerund_pattern` 100-question oldest-pending pass is complete. Continue oldest unchecked backlog at:

`p5_verb_causative_have_make_let_0001`

Continue in 25-question safe checkpoints. Existing `needs_revision` items remain unresolved.
