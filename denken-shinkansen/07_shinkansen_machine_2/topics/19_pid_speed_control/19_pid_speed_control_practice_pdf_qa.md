# Topic 19 練習PDF QA

更新日: 2026-09-19

対象: `topics/19_pid_speed_control/19_pid_speed_control_practice.pdf`

## reconcile
- 最新main上の練習sourceとPDFを対象に再検証した。
- 固定EXAM_ALIGNMENTは一次1問＋二次4問、計5問・12答案要素のまま変更していない。
- 練習sourceは一次試験型10問＋二次試験型5問、合計15問。技術内容は変更していない。
- Topic 20/21先取り、未確認実車PID値の実車値化、固定問題の個別正答記号・最終数値保存は追加していない。

## 現行練習PDF
- A4縦・15ページ。
- canonical source blob: `f1015f13e5deefcbd7e67fbd8d0891249d684333`
- PDF Git blob: `5983354776827cfb38889a944d1cbb4c6c269fbe`
- PDF SHA-256: `de11e196f9fef5d120c2c3c959c80b96c29f0531addf666c4131e03a7eb0686a`
- PDF size: `123573 byte`

## 表示QA
- Poppler `pdftoppm` 200 dpiで全15ページをPNGレンダリング: `15 / 15 PASS`。
- 全ページ同一レンダリング寸法: `1654x2339 px`。
- ページ外への内容はみ出し: `0件`。抽出word bboxも全件ページ内。
- レンダリング内容の最小余白: `56 px`（ページ端接触なし）。
- ページ面積12%超の異常な黒塗り領域: `0件`。

判定: `PASS`。

## 文字抽出QA
- `pdftotext -layout` 成功。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `問1` / `問10` / `問11` / `問15`、`PID` / `Kp` / `Ki` / `Kd` を抽出確認。
- bbox抽出語数: `857`。

判定: `PASS`。

## 内容整合
- PDFはQA済みcanonical練習source blob `f1015f13e5deefcbd7e67fbd8d0891249d684333` から生成され、source自体は不変。
- 一次10問の正答一意性 `10 / 10 PASS`、全15問の独立再計算・論理確認 `15 / 15 PASS`、固定5問・12答案要素 `12 / 12 COVERED` は既存source QAを維持する。

## 判定
`PASS / topic_19_practice_pdf_complete / IN_PROGRESS`

## 次工程
Topic 19の解説画像PowerPoint sourceを作成する。
