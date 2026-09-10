# Power古典 CONTENT STATUS

Updated: 2026-09-10 23:31 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1625
- checked: 1625
- verified: 1625
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.tari_ri.meaning`
- label: 完了・存続の識別
- targetQuestions: 200
- generated/checked/verified: 25/25/25
- remaining to first target: 175
- next exact ID: `kobun_aux_tari_ri_meaning_0026`

## Latest checkpoint

`batch-20260910-025.json`: `kobun.aux.tari_ri.meaning` 0001〜0025、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。stem＋choicesのみから25問を再解答し、全問で一意にproposed keyと一致。正答位置 A/B/C/D = 7/6/6/6。選択肢内重複0、stem完全重複0、batch内最大stem類似度0.7711、高類似閾値0.94以上0件。完了は出来事の成立・完結と次動作への移行、存続は結果状態の継続を示す文脈から判定した。助動詞「り」の例は四段活用已然形接続のみを使用した。
