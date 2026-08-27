# Power TOEIC CONTENT handoff

## AUDIT FINDING — P2 final cross-bank duplicate gate

**Severity:** P2 — bounded QA debt; does not stop safe generation/independent re-solving.

`30_QUESTION_AND_QA_SPEC.md` requires duplicate/similarity review before approval. Current CONTENT/QA state still does not have a completed revision-bound full-bank semantic near-duplicate scan. Continue ordinary generation and oldest-first QA, but do not treat `verified` as synonymous with production-approved until the global gate passes.

Required follow-up before any production-bank build: run a full cross-bank duplicate/similarity pass over all otherwise-verified candidates, record/quarantine duplicate clusters, and make the future bank-builder reject inputs without revision-bound global duplicate clearance.

## Current canonical state

- Taxonomy: `subjects/english/power-toeic/js/data/taxonomy/part5-v1.json`
- Fully completed generated micro-skills: **21 / 44**
- Current generation micro-skill: `p5.conn.during_vs_while` — **25 / 100**
- Generated questions persisted: **2,125**
- QA checked: **1,125**
- Verified: **1,063**
- Needs revision: **62**
- Rejected: **0**
- Unchecked `pending_validation`: **1,000**
- `generation_complete`: `false`
- `validation_complete`: `false`

## This checkpoint — generation

Persisted `p5.conn.during_vs_while` IDs **0001-0025**:

`subjects/english/power-toeic/js/data/questions/part5/connectors-prepositions/during-vs-while/pending/batch-20260827-023-part1.json`

This first checkpoint tests `during` before noun phrases in varied business contexts. All 25 remain `pending_validation`.

Generation checks:
- IDs 0001-0025 sequential and unique
- one cloze per item
- four distinct visible choices per item
- answer positions A/B/C/D = **7/6/6/6**
- exact duplicate stems = **0**
- no within-draft SequenceMatcher pair >= 0.94

The micro-skill is intentionally incomplete at 25/100. Do not count unpersisted drafts as generated progress.

## This checkpoint — QA

Independently reviewed the oldest unchecked `p5.verb.active_vs_passive` IDs **0001-0025**, solving from stem + choices before consulting the stored proposed answers/explanations.

Result:
- Checked: **25**
- Verified: **23**
- Needs revision: **2**
- Rejected: **0**

Needs revision:
- `p5_verb_active_vs_passive_0013`: plural subject `course materials` requires `were prepared`, but the stored options provide only singular `was prepared` as the intended passive answer.
- `p5_verb_active_vs_passive_0016`: plural subject `survey results` requires `were analyzed`, but the stored options provide only singular `was analyzed` as the intended passive answer.

Do not mark those two verified until the options/explanations are repaired and independently re-solved.

QA record:
`subjects/english/power-toeic/js/data/questions/part5/qa/2026-08-27-scheduled-023-active-vs-passive-part1.qa.json`

## Next generation

Continue `p5.conn.during_vs_while` from:

`p5_conn_during_vs_while_0026`

Target completion remains 100 questions before moving to the next taxonomy micro-skill.

## Next QA

Continue `p5.verb.active_vs_passive` from:

`p5_verb_active_vs_passive_0026`

Continue in 25-question safe checkpoints. Full cross-bank semantic duplicate clearance remains outstanding.
