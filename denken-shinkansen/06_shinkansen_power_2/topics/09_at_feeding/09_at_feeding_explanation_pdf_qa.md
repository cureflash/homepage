# Topic 09 解説PDF QA

updated: 2026-09-16
status: `PASS`

対象: `09_at_feeding_explanation.pdf`

## 生成条件

- 用紙: A4縦
- ページ数: `3`
- source: `09_at_feeding.md` の解説本文＋3段階例題
- 固定EXAM_ALIGNMENT・正式3過去問・固定10項目は変更なし

## 表示QA

200 dpiで全ページをレンダリングして確認。

- page 1: PASS
- page 2: PASS
- page 3: PASS
- 合計: `3 / 3 PASS`

文字欠け、重なり、ページ外、黒塗り化、壊れた日本語グリフ: `0件`

## 文字抽出QA

`pdftotext` 相当で本文抽出を確認: `PASS`

- 置換文字 U+FFFD: `0件`
- ATき電方式: PASS
- トロリ線: PASS
- き電線: PASS
- レール: PASS
- 帰線: PASS
- オートトランス: PASS
- 等価回路: PASS
- インピーダンス: PASS
- 電圧降下: PASS
- 電流分担: PASS
- R7一次／H25一次／H26二次の識別子: PASS

## 数式・単位QA

主要結果をsourceから独立再計算して確認。

- 例題1: `V_T=+25 kV`, `V_F=-25 kV`, `V_T-V_F=50 kV` → PASS
- 例題2: `I=259.8-j150.0 A`, `ΔV=96.96+j47.94 V`, `|V_r|=24.903 kV`, 電圧降下率 `0.388 %` → PASS
- 例題3: `I=4 A`, `V_1=80 V`, `V_2=120 V` → PASS
- 3段階例題再計算: `3 / 3 PASS`
- 正式3過去問への本文接続: `3 / 3問・14 / 14答案要素`

## 範囲境界

- 固定範囲外論点追加: `0件`
- Topic 10以降の先取り: `0件`
- 未確認実設備値追加: `0件`
- 正式固定3問変更: `0件`
- 原則5問への水増し: `0件`
- 仕様追加: `0件`

## ファイル整合

- ファイルサイズ: `10043 bytes`
- Git blob SHA: `cdd61d50cb07eb9db93a87ddbf0f7ebef7e54e7b`
- SHA-256: `2e994ddfae0d00741008581185fa38d9f4884b284651726f5ea411a376e9a1b2`

判定: `PASS`
