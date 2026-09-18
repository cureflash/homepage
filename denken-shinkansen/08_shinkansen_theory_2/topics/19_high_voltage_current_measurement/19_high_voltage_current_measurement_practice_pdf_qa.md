# Topic 19 練習PDF QA - 25kV・大電流をどう安全に測る？

更新日: 2026-09-18

## 対象

- PDF: `19_high_voltage_current_measurement_practice.pdf`
- source: `19_high_voltage_current_measurement_practice.md`
- 用紙: A4縦
- ページ数: 5

## 表示QA

200 dpiで全5ページをレンダリングして確認した。

- page 1: `PASS`
- page 2: `PASS`
- page 3: `PASS`
- page 4: `PASS`
- page 5: `PASS`
- 文字切れ: `0件`
- 重なり: `0件`
- 黒四角・欠損グリフ: `0件`
- ページ外はみ出し: `0件`

判定: `5 / 5 PASS`。

## 文字・PDF整合性QA

- `pdftotext`: `PASS`
- 抽出テキスト: 10,845 bytes
- 問1〜問12・正答一覧・完全解説を抽出確認: `PASS`
- 置換文字 `�`: `0件`
- フォント参照QA: `PASS`
  - HeiseiKakuGo-W5: CID Type 0 / UniJIS-UCS2-H（200 dpiレンダリング確認）
- PDF preflight: `PASS`
- 暗号化: `なし`
- scanned判定: `false`

SHA-256: `ee688b55214354282ecdfcfbffc2d31500d7c867fe80cba616198cdc7ef70c2e`

## 内容QA

- 問題数: 12問
- 形式: 全問五肢択一
- 難易度: 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- SPEC固定範囲10項目への接続: `10 / 10`
- 電圧計・電流計の接続と内部抵抗: `PASS`
- 分流器・倍率器: `PASS`
- CT・VTの変成比と安全事項: `PASS`
- CT・VTを介した電力・電力量: `PASS`
- コンデンサ形計器用変圧器の等価回路・補償条件: `PASS`
- 静電電圧計・容量分圧: `PASS`
- エアトン分流器: `PASS`
- 熱電形交流電力計・有効電力: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 20の誤差・ブリッジ・波形・サンプリング先取り: `0件`
- 実設備CT・VTの未確認実値追加: `0件`

## 判定

`PASS / PRACTICE_PDF_COMPLETE`

次工程は解説画像PowerPoint＋表示QA。完成数は `18 / 21` のまま。
