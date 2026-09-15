# Topic 08 解説PDF QA

updated: 2026-09-16
status: `PASS`

対象: `08_transformer_percent_impedance_explanation.pdf`

## 生成条件

- 用紙: A4縦
- ページ数: `5`
- source: `08_transformer_percent_impedance.md` の解説本文＋3段階例題
- 固定EXAM_ALIGNMENT・正式4過去問・固定9項目は変更なし

## 表示QA

200 dpiで全ページをレンダリングして確認。

- page 1: PASS
- page 2: PASS
- page 3: PASS
- page 4: PASS
- page 5: PASS
- 合計: `5 / 5 PASS`

文字欠け、重なり、ページ外、黒塗り化、壊れた日本語グリフ: `0件`

## 文字抽出QA

`pdftotext` 相当で本文抽出を確認: `PASS`

固定9項目の語句を全件抽出確認:
- ％インピーダンス
- 単位法
- 基準容量変更
- 基準電圧変更
- 短絡電流・短絡容量
- 電圧降下
- 変圧器並列運転
- 循環電流
- 負荷分担

## 数式・単位QA

主要結果をsourceと再照合:
- 例題1 三相短絡電流: `3.50 kA`
- 例題1 短絡容量: `400 MV·A`
- 例題2 送電端電圧: `158.0 kV`
- 例題3 負荷分担A: `32 MV·A`
- 例題3 負荷分担B: `48 MV·A`
- 例題3 循環電流: `0.262 kA`

固定4過去問への本文接続: `4 / 4問・17 / 17答案要素`

## 範囲境界

- 固定範囲外論点追加: `0件`
- 後続Topic依存: `0件`
- 未確認実設備値追加: `0件`
- 正式固定4問変更: `0件`
- 原則5問への水増し: `0件`

## ファイル整合

- ローカル生成サイズ: `17639 bytes`
- SHA-256: `36e9becada9e9eb0941436f91248c74d1f6d8ccb33fc193070e7632cac8435ba`

判定: `PASS`