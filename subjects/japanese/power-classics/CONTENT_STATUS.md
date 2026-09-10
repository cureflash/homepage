# Power古典 CONTENT STATUS

Updated: 2026-09-10 23:58 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1650
- checked: 1650
- verified: 1650
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tari_ri.meaning`
- label: 完了・存続の識別
- targetQuestions: 200
- generated/checked/verified: 50/50/50
- remaining to first target: 150
- next exact ID: `kobun_aux_tari_ri_meaning_0051`

## Latest checkpoint

`batch-20260910-050.json`: `kobun.aux.tari_ri.meaning` 0026〜0050、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから25問を再解答し、全問で一意にproposed keyと一致。正答位置 A/B/C/D = 6/6/7/6。選択肢内重複0、stem完全重複0、batch内最大stem類似度0.6415、直前batchとの最大0.8936、高類似閾値0.94以上0件。完了は出来事の完結後に次の行動へ移る文脈、存続は結果状態が継続する文脈として判定した。助動詞「り」は四段活用已然形またはサ変動詞未然形への接続のみを使用した。
