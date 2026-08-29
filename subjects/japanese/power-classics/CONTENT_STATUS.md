# Power古典 CONTENT STATUS

Updated: 2026-08-29 12:00 JST
Phase: A — taxonomy順に未充足micro-skillを生成・独立QA

## Cumulative

- generated: 1100
- checked: 1100
- verified: 1100
- needs_revision: 0
- rejected: 0
- pending: 0

`verified` は独立QA合格を意味し、production-approvedを意味しない。全bank横断semantic near-duplicate gateは未完了。

## Current micro-skill

- skill: `kobun.aux.ki_keri.meaning`
- label: き・けりの意味識別
- targetQuestions: 200
- generated/checked/verified: 0/0/0
- remaining to first target: 200
- next exact ID: `kobun_aux_ki_keri_meaning_0001`

## Latest checkpoint

`batch-20260829-040.json`: `kobun.aux.zuru.connection` 0076〜0100、25 generated / 25 checked / 25 verified / 0 needs_revision / 0 rejected。これで同skillは100/100で第一目標完了。正答位置 A/B/C/D = 4/7/7/7。batch内stem完全重複0、最大類似度0.842、高類似閾値0.94以上0件。打消の助動詞「ず」の未然形接続、本活用・補助活用、四段・上一段・下二段・ナ変・ラ変・サ変・カ変への接続と後続語からの活用形判定を確認した。
