# Topic 18 練習PDF QA

更新日: 2026-09-19

対象: `topics/18_speed_transient_response/18_speed_transient_response_practice.pdf`

## reconcile
- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md` と現行mainを確認した。
- 最初の未完了テーマはTopic 18「速度指令を変えたら何秒で追従する？」。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更していない。
- 現行練習PDFのGit blob `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc` を対象に再QAした。

## 現行練習PDF
- A4縦・5ページ。
- 一次試験型10問＋二次試験型5問を収録。
- 問1〜問15、H23 / R07 / R06 / R03 / H29 の対応表を抽出確認した。
- 固定5問・12答案要素への接続 `12 / 12` を維持。
- Topic 19〜21先取り、仕様外独立論点、未確認実車値、固定公式過去問の正答記号・完成済み個別解答保存は `0件`。

## 表示QA
- 160 dpiで全5ページをレンダリングして確認した。
- ページサイズ A4 595.276×841.89 pt: `5 / 5 PASS`。
- 文字・表の切れ、重なり、overflow: `0件`。
- ただし、source中の近似記号 `≈` がPDF上で四角い欠落グリフとして表示される。例: `1-e^{-1}≈0.632`、`≈3.30 s`、`≈7.82 s`、`≈1.264`、`≈0.0948` 等。
- sourceでは `≈` を16箇所使用しているが、PDF文字抽出では `≈` は0件で、レンダリングでも対応位置が欠落グリフになる。

判定: `FAIL`。

## 文字抽出QA
- `pdftotext -layout` による抽出自体は成功。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `問1` / `問10` / `問11` / `問15`、`H23` / `R07` / `R06` / `R03` / `H29` は抽出確認済み。
- 主要数値 `0.632`、`3.30 s`、`7.82 s`、`ω_n=10 rad/s` 相当、`ζ=0.4` 相当、`16.3%`、`1.264`、`6.59 s`、`11.74 s`、`ω_n=5 rad/s` 相当、`ζ=0.6` 相当、`ω_d=4 rad/s` 相当、`9.48%`、`1.33 s`、`0.692`、`0.8`、`0.2`、`2.598 rad/s`、係数 `3.464` を確認した。
- 近似記号 `≈` は抽出 `0件` のため、数式グリフ完全性はFAIL。

判定: `FAIL`。

## 数値・論理QA
- 一次10問の正答一意性: `10 / 10 PASS`。
- 全15問の数値・論理内容は練習sourceの既存独立QA `15 / 15 PASS` と矛盾なし。
- 固定5問・12答案要素への教材接続: `12 / 12 PASS`。
- 今回のblockerは数値・論理ではなく、現行PDFの `≈` 表示欠落である。

## ハッシュ
- PDF SHA-256: `ae2913569943e1cb4a7ea58f09ca1c0d6d3ea15da3de6b822130189cec35bead`
- PDF Git blob SHA: `df2f12f4ffdf74edc5266e95e1badb2dad4d64bc`
- PDF size: `13044 byte`

## 判定
`NEEDS_REVISION / topic_18_practice_pdf_reqa_needs_revision / IN_PROGRESS`

既存QAと現行PDFのblob不一致は解消して検証対象を現行blobへ合わせたが、`≈` の破損グリフを確認したためPASSにはできない。

## 次工程
現行練習PDFの生成側で `≈` を正しく表示できるよう修正してPDFを再生成し、同じ表示・文字抽出・数値論理QAを再実施する。技術本文・問題・正答・固定EXAM_ALIGNMENTは変更しない。