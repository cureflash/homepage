# Power古典 CONTENT STATUS

Updated: 2026-08-29 19:57 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1325
- checked: 1325
- verified: 1325
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tsu_nu.meaning`
- label: 完了・強意の識別
- targetQuestions: 300
- generated/checked/verified: 25/25/25
- remaining to first target: 275
- next exact ID: `kobun_aux_tsu_nu_meaning_0026`

## Latest checkpoint

`batch-20260829-049.json`: `kobun.aux.tsu_nu.meaning` 0001〜0025、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。生成直後に正答位置D=0の偏りを検出し、選択肢順だけを是正してから独立QA。最終正答位置 A/B/C/D = 7/6/6/6。batch内stem完全重複0、最大類似度0.909、高類似閾値0.94以上0件。完了は文末・動作完結の文脈、強意は主に「てむ・なむ・つべし・ぬべし」の形で一意に判定できることを確認。
