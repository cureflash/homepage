# Topic 18 練習PDF QA

更新日: 2026-09-19

対象: `topics/18_speed_transient_response/18_speed_transient_response_practice.pdf`

## reconcile
- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 18固定 `EXAM_ALIGNMENT` と現行mainを再確認した。
- 最初の未完了テーマはTopic 18「速度指令を変えたら何秒で追従する？」。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更していない。
- 技術本文・問題・正答・固定過去問対応は変更せず、前回blockerだった `≈` 欠落グリフだけを生成側で修正してPDFを再生成した。

## 現行練習PDF
- A4縦・3ページ。
- 一次試験型10問＋二次試験型5問を収録。
- 問1〜問15、H23 / R07 / R06 / R03 / H29 の対応表を抽出確認した。
- 固定5問・12答案要素への接続 `12 / 12 PASS`。
- Topic 19〜21先取り、仕様外独立論点、未確認実車値、固定公式過去問の正答記号・完成済み個別解答保存は `0件`。

## 表示QA
- 160 dpiで全3ページをPDFiumとPopplerの2系統でレンダリングして確認した。
- ページサイズ A4 595.276×841.89 pt: `3 / 3 PASS`。
- 文字・表の切れ、重なり、overflow、黒四角・欠落グリフ: `0件`。
- source中の近似記号 `≈` は17箇所。全てPDF上で表示され、欠落グリフは解消した。

判定: `PASS`。

## 文字抽出QA
- `pdftotext -layout` による抽出成功。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- source中 `≈` 17箇所に対しPDF抽出も `17件`。
- `問1` / `問10` / `問11` / `問15`、`H23` / `R07` / `R06` / `R03` / `H29` を抽出確認済み。
- 主要数値 `0.632`、`3.30 s`、`7.82 s`、`1.264`、`6.59 s`、`11.74 s`、`9.48%`、`1.33 s`、`0.692`、`0.8`、`0.2`、`2.598 rad/s`、`3.464` を確認した。

判定: `PASS`。

## 数値・論理QA
- 一次10問の正答一意性: `10 / 10 PASS`。
- 全15問の数値・論理内容は練習sourceの既存独立QA `15 / 15 PASS` と矛盾なし。
- 固定5問・12答案要素への教材接続: `12 / 12 PASS`。
- 今回は表示生成のみ修正し、技術内容は変更していない。

判定: `PASS`。

## ハッシュ
- PDF SHA-256: `50fdfc549fdefd89e14577f671e5e13261a95b3141acd9cba69637f5e2d1f209`
- PDF Git blob SHA: `fb67c0ac0d3b6d9ec7656d0a759b6ac86992f242`
- PDF size: `22060 byte`

## 判定
`PASS / topic_18_practice_pdf_reqa_pass / IN_PROGRESS`

前回blockerの `≈` 欠落グリフは解消し、表示・文字抽出・数値論理・固定12答案要素接続をすべてPASSした。

## 次工程
Topic 18の進捗記録（main source、練習source、`STATUS.md`、`HANDOFF.md`）を現状態へ同期し、その後に最終QAを再実施する。