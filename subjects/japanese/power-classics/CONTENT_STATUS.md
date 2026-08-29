# Power古典 CONTENT STATUS

Updated: 2026-08-29 23:57 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1425
- checked: 1425
- verified: 1425
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tsu_nu.meaning`
- label: 完了・強意の識別
- targetQuestions: 300
- generated/checked/verified: 125/125/125
- remaining to first target: 175
- next exact ID: `kobun_aux_tsu_nu_meaning_0126`

## Latest checkpoint

`batch-20260829-125.json`: `kobun.aux.tsu_nu.meaning` 0101〜0125、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesから各問を再解答し、25問すべて一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0。batch内最大stem類似度0.8824、直前batchとの最大stem類似度0.9286、高類似閾値0.94以上0件。生成後の重複検査で0113・0119・0120のstemが直前batchに近すぎることを検出し、意味・正答を変えず設問文を修正してから再検査した。完了は動作・変化の成立・完結、強意は主に「てむ・なむ・つべし・ぬべし」で判定した。
