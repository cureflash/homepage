# Topic 07 練習PDF QA

更新日: 2026-09-15

対象: `07_power_semiconductors_practice.pdf`

source: `07_power_semiconductors_practice.md`

## 生成確認

- A4縦4ページ
- 全12問・全問五肢択一
- 基礎3／本試験標準7／複合・応用2
- 12問すべてに正答・完全解説を収録
- 固定EXAM_ALIGNMENT 5問への接続を維持

## 表示QA

200 dpiで全4ページをレンダリングし、全ページを確認した。

- clipping: `0件`
- overlap: `0件`
- broken glyph: `0件`
- 問題文・五肢・正答番号・解説・数式・単位: 可読
- 結果: `4 / 4 PASS`

## 文字抽出QA

`pdftotext -layout` で抽出して確認した。

- 問1〜問12見出し: `12 / 12`
- `正答:`: `12 / 12`
- `Psw = (Eon + Eoff)fs`: 抽出確認
- `η = Pout / Pin`: 抽出確認
- 問12の効率計算・損失差: 抽出確認
- 結果: `PASS`

## 範囲確認

- 固定EXAM_ALIGNMENT 5問: 変更なし
- 練習sourceの独立計算・論理QA: `12 / 12 PASS` 維持
- 正答一意性: `12 / 12 PASS` 維持
- 固定範囲外論点の追加: `0件`
- 未確認実車値の追加: `0件`
