# Topic 21 練習PDF QA

更新日: 2026-09-20

対象: `topics/21_readhesion_control/21_readhesion_control_practice.pdf`

## reconcile
- 最新main上の練習sourceを正本としてPDF化し、技術内容は変更していない。
- 固定EXAM_ALIGNMENTは一次4問＋二次1問、計5問・14答案要素のまま変更していない。
- 練習sourceは一次試験型10問＋二次試験型5問、合計15問。
- 未確認実車仕様化、Topic 22先取り、SPEC外A-D変換器方式追加、固定公式過去問の個別正答保存は追加していない。

## 現行練習PDF
- A4縦・2ページ・2段組。
- canonical source blob: `c9a87ccf46b7f8caa91c064af1fc56149d05e3d1`
- PDF Git blob: `29c89b41edfb4b2dda95edca77cc7bf529faa758`
- PDF SHA-256: `dbe0cb6ff26fa23d7f99f1d1c8a9b48984822ae02bbb5146a57c9ea95f5ea88e`
- PDF size: `12680 byte`

## 表示QA
- Poppler `pdftoppm` 200 dpiで全2ページをPNGレンダリング: `2 / 2 PASS`。
- 全ページ同一レンダリング寸法: `1654x2339 px`。
- `pdftocairo` 160 dpiでも全2ページをレンダリング: `2 / 2 PASS`。全ページ `1323x1871 px`。
- ページ外への内容はみ出し: `0件`。抽出word bboxも全件ページ内。
- bbox最小余白: `11.39 pt`。
- 異常な黒塗り領域: `0件`。200 dpiレンダリングの黒画素率最大値は `0.03023`。

判定: `PASS`。

## 文字抽出QA
- `pdftotext -layout` 成功。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `問1`〜`問15` の15見出しを全件抽出確認。
- `ロータリエンコーダ` / `空転` / `滑走` / `粘着` / `トルク抑制` / `非線形性` / `飽和` / `インパルス応答` / `ステップ応答` / `0.6485` / `0.358` を抽出確認。

判定: `PASS`。

## 内容整合
- PDFはQA済みcanonical練習source blob `c9a87ccf46b7f8caa91c064af1fc56149d05e3d1` の一次10問＋二次5問をPDF化したもの。
- 一次10問の正答一意性 `10 / 10 PASS`、全15問の独立再計算・論理確認 `15 / 15 PASS`、固定一次4問＋二次1問・14答案要素 `14 / 14 COVERED` は既存source QAを維持する。
- 二次問11〜15は途中式・前提・検算を含む。
- 近似記号はPDF表示上「約」として表記し、数値の意味を維持した。
- 未確認の実車センサ方式・しきい値・制御周期・トルク抑制量・回復量・判定ロジックの実車仕様化、Topic 22先取り、SPEC外A-D変換器方式追加、固定公式過去問個別正答保存: `各0件 / PASS`。

## 判定
`PASS / topic_21_practice_pdf_complete / IN_PROGRESS`

## 次工程
Topic 21の解説画像PowerPoint sourceを作成する。
