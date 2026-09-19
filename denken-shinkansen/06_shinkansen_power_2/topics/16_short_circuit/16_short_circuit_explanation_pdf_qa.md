# Topic 16 解説PDF QA

updated: 2026-09-19
status: `FAIL / topic_16_explanation_pdf_current_blob_reqa_right_clipping`

対象: `16_short_circuit_explanation.pdf`
source: `16_short_circuit_explanation.md`

## 今回の目的

最終QAで既存QA記録と現行GitHub artifactのidentity不一致が判明したため、既存QAを転用せず、現行blobそのものを再QAした。

正式品質ゲートの固定5問・23答案要素、固定10説明項目、補正済み5項目は変更していない。

## 現行成果物 identity

- Git blob SHA-1: `a2fd385e832df7e628d6bd879d9ffcf26fca575b`
- ファイルサイズ: `11232 bytes`
- SHA-256: `e6ddb708e2d2002c33ac1af15091e756d1d25f021e5a7793ef6b4e25238cca92`
- 用紙: A4縦
- ページ数: `7`
- 正式品質ゲート: 一次2問＋二次3問、固定 `5問・23答案要素`（変更なし）

## 構造・文字抽出QA

- page tree: `7 pages`
- encrypted: `False`
- PDFium: `7 / 7 render completed`
- Poppler: `7 / 7 render completed`
- `pdftotext`: 抽出可能
- U+FFFD: `0件`
- 補正5項目の文字抽出: `5 / 5 present`
  - 電磁誘導障害
  - 遮断容量
  - BTB
  - 電圧階級
  - `S_sc` の電圧は故障前の基準線間電圧

## 表示QA

判定: `FAIL`

PDFium / Popplerの両方で同じ右端クリッピングを確認した。

- page 1: `PASS`
- page 2: `FAIL`
  - 基準換算式・解法アルゴリズムの右端がページ外へ切れる。
  - `Z_pu,common` 周辺の式が学習者表示上で欠落する。
- page 3: `PASS`
- page 4: `FAIL`
  - 本試験標準例題の `S_sc = 100 / 0.40 = 250 MVA` の末尾 `0` が右端で切れ、表示上 `25 MVA` に見える。
  - 逆算問題の式も右端で切れる。
- page 5: `PASS`
- page 6: `FAIL`
  - 25kV架線の教材用仮定モデル式・説明文が右端で切れる。
- page 7: `FAIL`
  - 参照URLと末尾説明文が右端で切れる。

表示正常: `3 / 7 pages`
表示異常: `4 / 7 pages`

黒四角・欠損グリフによる失敗は確認していない。失敗原因は横方向のレイアウト超過。

## 内容QA

抽出テキスト上では固定10説明項目と補正5項目が存在する。ただしlearner-facing PDFの表示が欠落しているため、現行artifactを `covered / PASS` と認定しない。

固定5問・23答案要素についても、元sourceおよび完成後blind clean rerunの `23 / 23 PASS` は変更しないが、現行解説PDF単体は表示欠落があるため品質ゲートの成果物要件を満たさない。

特にpage 4では正しい `250 MVA` が表示上 `25 MVA` に見えるため、数値教材として許容不可。

## 仕様境界

- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載追加: `0件`
- 仕様追加: `0件`

## 判定

`FAIL / RIGHT_EDGE_CLIPPING_ON_CURRENT_BLOB`

現行blob `a2fd385e...` は解説PDF QAを通過しない。

次工程は、補正済み `16_short_circuit_explanation.md` の内容・固定品質ゲートを変えず、横方向の改行・折返しだけを修正して解説PDFを再生成し、新しい現行blobに対してPDFium / Poppler / 文字抽出 / 内容QAを再実施する。PowerPoint再QAへはまだ進まない。
