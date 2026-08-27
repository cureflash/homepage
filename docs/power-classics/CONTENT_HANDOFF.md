# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork was created.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 30
- QA checked: 30
- Verified: 30
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Generated `kobun.verb.conjugation_type.yodan` IDs 0001-0030 under:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-yodan/pending/batch-20260827-001.json`

The batch is a finite-knowledge direct identification drill: each item presents a different classical verb and asks for its conjugation type. All targets in this batch are 四段活用. Proposed answer positions are A/B/C/D = 8/8/7/7.

## This checkpoint — QA
Independently solved all 30 from stem + choices before consulting stored answer/explanation.
- checked: 30
- verified: 30
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-27-scheduled-001-yodan.qa.json`

## Next generation
Continue `kobun.verb.conjugation_type.yodan` from:
`kobun_verb_conjugation_type_yodan_0031`
Target for Phase A: 100.

After yodan reaches 100, advance taxonomy order to `kobun.verb.conjugation_type.kami_ichidan`.

## Next QA
There is currently no unchecked Power古典 pending backlog after this checkpoint. On the next run, independently QA the oldest newly generated unchecked candidates.

## Release gate
`verified` is not production-approved. Before any runtime/approved-bank build, run a revision-bound cross-bank semantic near-duplicate scan and quarantine/resolve clusters.
