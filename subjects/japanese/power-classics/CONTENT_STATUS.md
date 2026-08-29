# Power古典 CONTENT STATUS

Updated: 2026-08-30 08:00 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1575
- checked: 1575
- verified: 1575
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tsu_nu.meaning`
- label: 完了・強意の識別
- targetQuestions: 300
- generated/checked/verified: 275/275/275
- remaining to first target: 25
- next exact ID: `kobun_aux_tsu_nu_meaning_0276`

## Latest checkpoint

`batch-20260830-275.json`: `kobun.aux.tsu_nu.meaning` 0251〜0275、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから25問を独立再解答し、全問で一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0。batch内最大stem類似度0.7467、直前batchとの最大0.9375、高類似閾値0.94以上0件。完了は動作・変化の成立・完結、強意は「てむ・なむ・つべし・ぬべし」など推量系助動詞との接続を手掛かりに判定した。
