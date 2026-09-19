# Topic 16 解説PDF QA

updated: 2026-09-19
status: `PASS / topic_16_explanation_pdf_regenerated_exact_blob_qa_pass`

target: `16_short_circuit_explanation.pdf`
source: `16_short_circuit_explanation.md`

## 今回の目的

現行解説PDFで検出された右端クリッピングだけを修正した。固定EXAM_ALIGNMENT、固定5問・23答案要素、補正済み5項目、本文内容は変更していない。

## 再生成成果物 identity

- Git blob SHA-1: `626d9098ccf7453f2439b1ffc3df50c3bbdd3b5b`
- file size: `34,238 bytes`
- SHA-256: `0d305c1240f57a3efe7a279130f18821bb204a561de46429df596a1ae64c79fb`
- paper: A4 portrait
- pages: `7`
- formal gate: primary 2 + secondary 3 = fixed `5問・23答案要素`（変更なし）

## 構造・文字抽出QA

- PDFium: `7 / 7 render completed`
- Poppler: `7 / 7 render completed`
- `pdftotext`: PASS
- U+FFFD: `0件`
- 補正5項目: `5 / 5 present`
  - 電磁誘導障害
  - 遮断容量
  - BTB
  - 電圧階級
  - `S_sc` の電圧は故障前の基準線間電圧

## 表示QA

判定: `PASS`

PDFium / Popplerの両方で全7ページをrenderし、右端クリッピングがないことを確認した。

- 全ページ: right-edge overflow `0件`
- PDFium: 最小右余白 `90 px`（180 dpi）
- Poppler: 最小右余白 `91 px`（180 dpi）
- 旧page 2相当: 基準換算式・解法アルゴリズムをページ幅内に収容
- 旧page 4相当: `S_sc = S_B/0.40 = 250 MVA` を欠落なく表示
- 旧page 6相当: 25kV架線の教材用仮定モデル式・説明文をページ幅内に収容
- 旧page 7相当: 参照URL・末尾説明文を折返して表示
- `√3×66 kV×2.19 kA ≒ 250 MVA`: learner-facing表示を確認

## 内容QA

固定10説明項目と補正5項目を維持した。正式過去問対応品質ゲートは既存clean rerunの一次 `10 / 10 PASS`、二次 `13 / 13 PASS`、合計 `23 / 23 PASS` を変更しない。

今回の変更はPDFレイアウトのみで、source本文・過去問選定・答案要素・計算値の変更はない。

## 仕様境界

- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載追加: `0件`
- 仕様追加: `0件`

## 判定

`PASS / CURRENT_EXPLANATION_PDF_EXACT_BLOB_QA`

次工程は現行PowerPoint blob `a4817d7cfb1a1733f5147f52efa3ec4e249999d5` のexact-blob QA。Topic 16はまだ `completed` にしない。
