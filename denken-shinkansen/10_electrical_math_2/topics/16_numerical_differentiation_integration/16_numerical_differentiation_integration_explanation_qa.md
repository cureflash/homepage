# Topic 16 解説PDF QA

対象: `16_numerical_differentiation_integration_explanation.pdf`

## 組版

- A4縦: PASS
- ページ数: 5
- 200 dpi 全ページ表示確認: `5 / 5 PASS`
- 欠け・重なり・黒塗り・文字化け: 0件
- `pdftotext -layout` 文字抽出: PASS
- SHA-256: `230471716764b25f4bc5ba99da740f00b6b86df8824ef8135f7b5ac6da2c7e0d`
- file size: `15256 bytes`

## 試験対応

固定範囲は `SPEC.md` の以下に限定した。

- 差分
- 数値微分
- 台形則
- Simpson則の基本
- 誤差
- 刻み幅
- 速度データから加速度を求める例
- 電力データから電力量を求める例

固定第二種公式過去問4問・8答案要素との接続をPDF内に反映し、`8 / 8 PASS`。

- R6一次「法規」問4 (1)〜(2)
- R4二次「電力・管理」問1のピーク／オフピーク出力2値
- H23二次「電力・管理」問6 (1)a、(1)b、(2)
- H22二次「電力・管理」問3 (4)

3段階例題はsourceの独立再計算結果を維持し、`3 / 3 PASS`。

- 速度データの中心差分: `2.5 m/s^2`
- 区分一定電力: `208 MWh`, `8.67 MW`, `72.2 %`
- 台形則とSimpson則: `20 MWh`, `21.33 MWh`

## 境界

- 第一種・第三種による品質ゲート件数水増し: 0件
- Topic 17以降の先取り: 0件
- 高次数値微分・高次Newton-Cotes公式の体系的追加: 0件
- スプライン補間・有限要素法等の別算法追加: 0件
- 未確認実車値依存: 0件

## 判定

`PASS / topic_16_explanation_pdf_complete`

次工程: Topic 16の練習問題sourceを作成する。
