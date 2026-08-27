# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 300
- QA checked: 300
- Verified: 300
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Continued `kobun.verb.conjugation_type.shimo_nidan` and persisted IDs 0026-0050, bringing this micro-skill to 50/100.

New IDs:
`kobun_verb_conjugation_type_shimo_nidan_0026` through `kobun_verb_conjugation_type_shimo_nidan_0050`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-shimo-nidan/pending/batch-20260828-008.json`

This checkpoint broadens lexical coverage with attested lower-bigrade verbs: ア行 `得（う）` and ヤ行 `見ゆ・聞こゆ・覚ゆ・絶ゆ`. Evidence is distributed across 未然形・連用形・終止形・連体形・已然形. No invented verbs were introduced solely to force lexical diversity.

Answer positions: A/B/C/D = 6/7/6/6. Across the first 50 下二段 items, answer positions are A/B/C/D = 13/13/12/12.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-008-shimo-nidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.shimo_nidan` is now 50/100.

Resume at:
`kobun_verb_conjugation_type_shimo_nidan_0051`

Prioritize command-form coverage in the next checkpoint and continue using attested lower-bigrade lexemes. Useful remaining classes include ワ行 forms such as `植う・飢う・据う` and other well-attested regular lower-bigrade verbs. Avoid homographs or semantic uses whose historical conjugation type is not unique unless the stem disambiguates them.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
