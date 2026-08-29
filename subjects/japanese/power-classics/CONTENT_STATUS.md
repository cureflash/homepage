# Power古典 CONTENT STATUS

Updated: 2026-08-30 02:00 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1450
- checked: 1450
- verified: 1450
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tsu_nu.meaning`
- label: 完了・強意の識別
- targetQuestions: 300
- generated/checked/verified: 150/150/150
- remaining to first target: 150
- next exact ID: `kobun_aux_tsu_nu_meaning_0151`

## Latest checkpoint

`batch-20260830-150.json`: `kobun.aux.tsu_nu.meaning` 0126〜0150、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesから各問を再解答し、25問すべて一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0。batch内最大stem類似度0.8889、高類似閾値0.94以上0件。完了は動作・変化の成立・完結、強意は主に「てむ・なむ・つべし・ぬべし」で判定し、助動詞「ぬ」と打消「ず」の混同を避けた。
