# Power古典 CONTENT STATUS

Updated: 2026-08-30 05:00 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1500
- checked: 1500
- verified: 1500
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tsu_nu.meaning`
- label: 完了・強意の識別
- targetQuestions: 300
- generated/checked/verified: 200/200/200
- remaining to first target: 100
- next exact ID: `kobun_aux_tsu_nu_meaning_0201`

## Latest checkpoint

`batch-20260830-200.json`: `kobun.aux.tsu_nu.meaning` 0176〜0200、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから25問を独立再解答し、全問で一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0。batch内最大stem類似度0.8889、直前batchとの最大0.9231、高類似閾値0.94以上0件。完了は動作・変化の成立・完結、強意は「てむ・なむ・つべし・ぬべし」など推量系助動詞との接続を手掛かりに判定した。
