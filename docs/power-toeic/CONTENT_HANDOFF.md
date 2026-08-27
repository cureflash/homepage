# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **23 / 44**
- Current generation micro-skill: `p5.conn.for_vs_since` — **25 / 100**
- Generated questions persisted: **2,325**
- QA checked: **1,350**
- Verified: **1,285**
- Needs revision: **65**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Started `p5.conn.for_vs_since` by persisting IDs **0001-0025** as:

- `subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/for-vs-since/pending/batch-20260828-025-part1.json`

The checkpoint explicitly separates:
- `for` = duration expressions such as `for three weeks`, `for nearly six years`, `for ninety minutes`;
- `since` = starting points/events such as `since January 2023`, `since last October`, `since the merger in 2024`.

All 25 remain `pending_validation`.

Checkpoint checks performed during construction:
- IDs 0001-0025 sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions deliberately distributed across A/B/C/D rather than fixed
- varied subjects and business contexts across logistics, finance, IT, facilities, recruitment, hospitality, research, sales, procurement and compliance
- no intentional surface-template duplication

The full cross-bank semantic near-duplicate gate is still outstanding; this checkpoint is not production-approved.

## This run — QA

Independently reviewed the oldest unchecked `p5.verb.to_infinitive_pattern` IDs **0026-0050** before consulting stored answers/explanations.

Run result:
- Checked: **25**
- Verified: **25**
- Needs revision: **0**
- Rejected: **0**

All 25 independently resolve to the to-infinitive after the governing verb. Some contexts are formulaic, but each displayed sentence is grammatically acceptable TOEIC-style business English and none of the three alternative forms is defensible. Stored proposed answers and explanations agree with the independent solutions.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-to-infinitive-part2.qa.json`

## Next generation

Continue:

`p5.conn.for_vs_since`

Start ID:

`p5_conn_for_vs_since_0026`

## Next QA

Continue the same oldest unchecked micro-skill:

`p5.verb.to_infinitive_pattern`

Start ID:

`p5_verb_to_infinitive_pattern_0051`

Continue independent re-solving in 25-question safe checkpoints. Existing `needs_revision` items from earlier skills remain unresolved. Full revision-bound cross-bank semantic duplicate clearance remains outstanding.
