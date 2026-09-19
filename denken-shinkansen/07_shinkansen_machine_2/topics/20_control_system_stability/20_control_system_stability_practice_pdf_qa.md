# Topic 20 練習PDF QA

更新日: 2026-09-19

対象: `topics/20_control_system_stability/20_control_system_stability_practice.pdf`

## reconcile
- 最新main上の練習sourceと生成PDFを対象に検証した。
- 固定EXAM_ALIGNMENTは一次2問＋二次3問、計5問・14答案要素のまま変更していない。
- 練習sourceは一次試験型10問＋二次試験型5問、合計15問。技術内容は変更していない。
- Topic 21先取り、未確認実車制御値の実車値化、固定公式過去問の個別正答保存は追加していない。

## 現行練習PDF
- A4縦・3ページ・2段組。
- canonical source blob: `f6ff974780df1b0c53ebbcfd02df53ef554c9269`
- PDF Git blob: `da2093fe5f68f961c9e6a76e99b45746221fc69a`
- PDF SHA-256: `24b3edbde90fb233985c12e6bfe94c58e3a0497d0fae5be02ba46642d1d4ef04`
- PDF size: `11535 byte`

## 表示QA
- Poppler `pdftoppm` 200 dpiで全3ページをPNGレンダリング: `3 / 3 PASS`。
- 全ページ同一レンダリング寸法: `1654x2339 px`。
- `pdftocairo` 160 dpiでも全3ページをレンダリング: `3 / 3 PASS`。全ページ `1323x1871 px`。
- ページ外への内容はみ出し: `0件`。抽出word bboxも全件ページ内。
- bbox最小余白: `20.25 pt`。
- 異常な黒塗り領域: `0件`。200 dpiレンダリングの黒画素率最大値は `0.02638`。

判定: `PASS`。

## 文字抽出QA
- `pdftotext -layout` 成功。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `問1` / `問10` / `問11` / `問15`、`ラウス` / `ゲイン余裕` / `位相余裕` / `PI` / `約` を抽出確認。
- bbox抽出語数: `662`。

判定: `PASS`。

## 内容整合
- PDFはQA済みcanonical練習source blob `f6ff974780df1b0c53ebbcfd02df53ef554c9269` の一次10問＋二次5問をPDF化したもの。
- 一次10問の正答一意性 `10 / 10 PASS`、全15問の独立再計算・論理確認 `15 / 15 PASS`、固定一次2問＋二次3問・14答案要素 `14 / 14 COVERED` は既存source QAを維持する。
- 二次問11〜15は途中式・前提・検算を含む。
- 近似記号はPDF表示上「約」として表記し、数値の意味を維持した。
- Topic 21先取り、未確認実車制御値の実車値化、固定公式過去問個別正答保存: `各0件 / PASS`。

## 判定
`PASS / topic_20_practice_pdf_complete / IN_PROGRESS`

## 次工程
Topic 20の解説画像PowerPoint sourceを作成する。
