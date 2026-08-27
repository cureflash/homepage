# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 275
- QA checked: 275
- Verified: 275
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Started `kobun.verb.conjugation_type.shimo_nidan` and persisted IDs 0001-0025 (25/100).

New IDs:
`kobun_verb_conjugation_type_shimo_nidan_0001` through `kobun_verb_conjugation_type_shimo_nidan_0025`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-shimo-nidan/pending/batch-20260828-007.json`

This checkpoint uses attested 下二段 lexemes including `受く・出づ・求む・捨つ・植う` and diversifies evidence across 未然形・連用形・終止形・連体形・已然形. No invented verbs were introduced solely to force lexical diversity.

Answer positions: A/B/C/D = 7/6/6/6.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting their stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-007-shimo-nidan.qa.json`

## Next generation
`kobun.verb.conjugation_type.shimo_nidan` is now 25/100.

Resume at:
`kobun_verb_conjugation_type_shimo_nidan_0026`

Continue with attested lower-bigrade verbs and broaden evidence, especially 命令形 and additional lexical classes. Avoid homographs whose historical conjugation type is context-dependent unless the stem makes the intended lexical sense unique.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
