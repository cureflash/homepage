# Power古典 CONTENT handoff

## Current canonical state
- Shared runtime/backend authority: existing Power TOEIC Drill Engine; no classics-specific fork.
- Taxonomy: `subjects/japanese/power-classics/data/taxonomy/classics-v1.json`
- Taxonomy: 30 big categories / 100 atomic micro-skills.
- Generated questions: 350
- QA checked: 350
- Verified: 350
- Needs revision: 0
- Rejected: 0
- Unchecked pending_validation: 0
- generation_complete: false
- validation_complete: false
- global duplicate gate: not complete

## This checkpoint — generation
Completed `kobun.verb.conjugation_type.shimo_nidan` by persisting IDs 0076-0100, bringing this micro-skill to 100/100.

New IDs:
`kobun_verb_conjugation_type_shimo_nidan_0076` through `kobun_verb_conjugation_type_shimo_nidan_0100`

Batch:
`subjects/japanese/power-classics/data/questions/kobun/verbs/conjugation-type-shimo-nidan/pending/batch-20260828-010.json`

The final 25 restore breadth across 未然・連用・終止・連体・已然・命令 rather than over-concentrating on 命令形. They use attested lower-bigrade verbs including `受く・出づ・求む・捨つ・植う・見ゆ・聞こゆ・覚ゆ・絶ゆ・越ゆ・答ふ・与ふ・据う・飢う`. No invented verbs were introduced solely for diversity.

One draft stem duplicated a prior question exactly (`ありのままに答へよ`); it was detected before QA and rewritten. Final exact stem duplicates within the new batch: 0.

Answer positions in this batch: A/B/C/D = 6/6/6/7. Combined with the prior 75 questions, the full `shimo_nidan` bank is exactly A/B/C/D = 25/25/25/25.

## This checkpoint — QA
Independently re-solved all 25 new questions from stem + choices before consulting stored answer/explanation.

- checked: 25
- verified: 25
- needs_revision: 0
- rejected: 0

QA record:
`subjects/japanese/power-classics/data/questions/qa/2026-08-28-scheduled-010-shimo-nidan.qa.json`

External grammar spot-checks reconfirmed the lower-bigrade e/e/u/uる/uれ/eよ pattern, ワ行下二段 `植う・飢う・据う`, and ヤ行下二段 `覚ゆ・絶ゆ・見ゆ` before finalizing the checkpoint.

## Next generation
`kobun.verb.conjugation_type.shimo_nidan` is complete at 100/100.

Advance to taxonomy-next skill:
`kobun.verb.conjugation_type.irregular`

Resume at:
`kobun_verb_conjugation_type_irregular_0001`

Target is 100 questions. Cover カ変・サ変・ナ変・ラ変 as separate, explicit contexts while avoiding forms whose surface alone would make the intended lexeme ambiguous. Keep answer positions balanced and do not invent historical forms.

## Next QA
There is no unchecked Power古典 pending backlog at this checkpoint. Independently QA the oldest candidates generated in the next run.

## Release gate
`verified` is not production-approved. Before a runtime/approved-bank build, perform a revision-bound full-bank semantic near-duplicate scan and quarantine or resolve clusters.
