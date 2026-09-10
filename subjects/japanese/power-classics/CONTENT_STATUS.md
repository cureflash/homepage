# Power古典 CONTENT STATUS

Updated: 2026-09-10 23:00 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1600
- checked: 1600
- verified: 1600
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tari_ri.meaning`
- label: 完了・存続の識別
- targetQuestions: 200
- generated/checked/verified: 0/0/0
- remaining to first target: 200
- next exact ID: `kobun_aux_tari_ri_meaning_0001`

## Latest checkpoint

`batch-20260910-300.json`: `kobun.aux.tsu_nu.meaning` 0276〜0300、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから25問を独立再解答し、全問で一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0。batch内最大stem類似度0.8302、直前batchとの最大0.7632、高類似閾値0.94以上0件。完了は動作・変化の成立・完結、強意は「てむ・なむ・つべし・ぬべし」など推量系助動詞との接続を手掛かりに判定した。これで `kobun.aux.tsu_nu.meaning` は300/300で第一目標完了。
