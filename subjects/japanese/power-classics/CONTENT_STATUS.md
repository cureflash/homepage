# Power古典 CONTENT STATUS

Updated: 2026-08-29 20:59 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1350
- checked: 1350
- verified: 1350
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tsu_nu.meaning`
- label: 完了・強意の識別
- targetQuestions: 300
- generated/checked/verified: 50/50/50
- remaining to first target: 250
- next exact ID: `kobun_aux_tsu_nu_meaning_0051`

## Latest checkpoint

`batch-20260829-050.json`: `kobun.aux.tsu_nu.meaning` 0026〜0050、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから独立再解答し、25問すべて一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。batch内stem完全重複0、最大類似度0.9275、高類似閾値0.94以上0件。完了は動作・変化の完結、強意は主に「てむ・なむ・つべし・ぬべし」の後続形で判定し、「ぬ」は打消「ず」と形態的に混同しない語形・文脈に限定した。
