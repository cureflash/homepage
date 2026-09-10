# Power古典 CONTENT STATUS

Updated: 2026-09-11 01:30 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1725
- checked: 1725
- verified: 1725
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tari_ri.meaning`
- label: 完了・存続の識別
- targetQuestions: 200
- generated/checked/verified: 125/125/125
- remaining to first target: 75
- next exact ID: `kobun_aux_tari_ri_meaning_0126`

## Latest checkpoint

`batch-20260911-125.json`: `kobun.aux.tari_ri.meaning` 0101〜0125、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから25問を再解答し、全問で一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0、batch内最大stem類似度0.6588（0115/0116、0112/0121）、既存の同skill 0001〜0100とのstem完全重複0、batch内の高類似閾値0.94以上0件。完了は出来事の完結後に次の行動へ移る文脈、存続は結果状態が継続する文脈として判定した。助動詞「り」の用例はサ変動詞未然形または四段活用已然形への接続のみを使用した。
