# Topic 20 練習PDF QA - East iは走りながら何をどう測る？

更新日: 2026-09-19

## 対象

- PDF: `20_east_i_measurement_practice.pdf`
- source: `20_east_i_measurement_practice.md`
- 用紙: A4縦
- ページ数: 4

## 表示QA

200 dpiで全4ページをレンダリングして確認した。

- page 1: `PASS`
- page 2: `PASS`
- page 3: `PASS`
- page 4: `PASS`
- 文字切れ: `0件`
- 重なり: `0件`
- 黒四角・欠損グリフ: `0件`
- ページ外はみ出し: `0件`

判定: `4 / 4 PASS`。

## 文字・PDF整合性QA

- `pdftotext`: `PASS`
- 抽出テキスト: `12,570 bytes`
- 問1〜問12・正答一覧・完全解説を抽出確認: `PASS`
- 置換文字 `�`: `0件`
- フォント参照QA: `PASS`
  - HeiseiKakuGo-W5: CID Type 0 / UniJIS-UCS2-H（200 dpiレンダリング確認）
- PDF preflight: `PASS`（非埋込CIDフォント警告のみ。表示・文字抽出はPASS）
- 暗号化: `なし`
- scanned判定: `false`

SHA-256: `974ebdac85e8e1ddfd0b603378f470a801f657bd7b6be77bdec9013fd8956c79`

## 内容QA

- 問題数: `12問`
- 形式: `全問五肢択一`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- SPEC固定範囲12項目への接続: `12 / 12`
- 測定誤差・絶対誤差・相対誤差・精度・有効数字: `PASS`
- 零位法・複素インピーダンス比較・容量校正: `PASS`
- 交流ブリッジ・寄生成分・補償／ガード: `PASS`
- 電圧計・電流計の負荷効果と接続選択: `PASS`
- 波形計測・オシロスコープ・10:1プローブ補償: `PASS`
- A/D変換・量子化幅: `PASS`
- サンプリング・標本化定理・エイリアシング: `PASS`
- A/D・サンプリング・エイリアシングを存在しない過去問へ接続: `0件`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 固定範囲外追加: `0件`
- East i内部測定回路・未公開定数の推測追加: `0件`

## 判定

`PASS / PRACTICE_PDF_COMPLETE`

次工程は解説画像PowerPoint＋表示QA。完成数は `19 / 21` のまま。
