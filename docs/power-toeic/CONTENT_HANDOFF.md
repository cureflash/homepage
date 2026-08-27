# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **23 / 44**
- Current generation micro-skill: `p5.conn.for_vs_since` — **50 / 100**
- Generated questions persisted: **2,350**
- QA checked: **1,375**
- Verified: **1,307**
- Needs revision: **68**
- Rejected: **0**
- Unchecked `pending_validation`: **975**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This run — generation

Persisted `p5.conn.for_vs_since` IDs **0026-0050** as:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/for-vs-since/pending/batch-20260828-025-part2.json`

The checkpoint continues the explicit contrast:
- `for` = duration (`for six months`, `for more than a decade`, etc.);
- `since` = starting point or starting event (`since September 2024`, `since the system was installed`, etc.).

All 25 remain `pending_validation`.

Checkpoint checks completed:
- IDs 0026-0050 sequential and unique within the checkpoint
- one cloze per item
- four distinct visible choices per item
- valid answer indexes
- answer positions A/B/C/D = **6/7/7/5**
- exact duplicate stems: **0**
- SequenceMatcher >= 0.94 within this checkpoint: **0**
- maximum observed within-checkpoint similarity: about **0.589**

This does **not** claim cross-bank semantic duplicate clearance. In particular, generated items remain candidates until independent QA; no item from this checkpoint is production-approved.

## This run — QA

Reviewed the oldest unchecked `p5.verb.to_infinitive_pattern` IDs **0051-0075** and compared each displayed sentence against all four alternatives before accepting the stored key/explanation.

Run result:
- Checked: **25**
- Verified: **22**
- Needs revision: **3**
- Rejected: **0**

Needs revision:
- `p5_verb_to_infinitive_pattern_0055` — past `managed` conflicts pragmatically with future-time `during the next quarter`.
- `p5_verb_to_infinitive_pattern_0056` — past `attempted` conflicts with future-time `during the next quarter`.
- `p5_verb_to_infinitive_pattern_0057` — past `failed` plus `despite two reminders` conflicts with future-time `during the next quarter`.

The infinitive form itself is structurally intended in all three, but these are not natural, temporally coherent TOEIC-style sentences, so they were not bulk-verified.

QA record:

`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-28-scheduled-025-to-infinitive-part3.qa.json`

Connector limitation: the source candidate file stores stem, choices, proposed answer, and explanation together. Strict answer-field blinding was therefore not technically enforceable in this connector-only run. The QA record states that limitation explicitly; temporally incoherent items were not approved.

## Next generation

Continue:

`p5.conn.for_vs_since`

Start ID:

`p5_conn_for_vs_since_0051`

## Next QA

Continue the same oldest unchecked micro-skill:

`p5.verb.to_infinitive_pattern`

Start ID:

`p5_verb_to_infinitive_pattern_0076`

Continue in 25-question safe checkpoints. Existing `needs_revision` items remain unresolved. Full revision-bound cross-bank semantic duplicate clearance remains outstanding.
