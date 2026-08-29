# Power古典 CONTENT STATUS

Updated: 2026-08-29 14:00 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1150
- checked: 1150
- verified: 1150
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.ki_keri.meaning`
- label: き・けりの意味識別
- targetQuestions: 200
- generated/checked/verified: 50/50/50
- remaining to first target: 150
- next exact ID: `kobun_aux_ki_keri_meaning_0051`

## Latest checkpoint

`batch-20260829-042.json`: `kobun.aux.ki_keri.meaning` 0026〜0050、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。正答位置 A/B/C/D = 7/6/6/6。batch内stem完全重複0、最大類似度0.640、高類似閾値0.94以上0件。助動詞「き」の過去、物語・伝承文脈での「けり」の過去、眼前の気づき・感動・和歌／会話文脈での「けり」の詠嘆を、stem＋choicesのみから独立再解答して確認した。
