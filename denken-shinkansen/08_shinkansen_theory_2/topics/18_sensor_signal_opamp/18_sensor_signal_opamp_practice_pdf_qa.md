# Topic 18 練習PDF QA - 新幹線のセンサ信号をどう増幅する？

更新日: 2026-09-18

## 対象

- PDF: `18_sensor_signal_opamp_practice.pdf`
- source: `18_sensor_signal_opamp_practice.md`
- 用紙: A4縦
- ページ数: 3

## 表示QA

200 dpiで全3ページをレンダリングして目視確認した。

- page 1: `PASS`
- page 2: `PASS`
- page 3: `PASS`
- 文字切れ: `0件`
- 重なり: `0件`
- 黒四角・欠損グリフ: `0件`
- ページ外はみ出し: `0件`

判定: `3 / 3 PASS`。

## 文字・PDF整合性QA

- `pdftotext`: `PASS`
- 抽出テキスト: 8,409 bytes
- 問1〜問12・正答一覧・完全解説を抽出確認: `PASS`
- フォント参照QA: `PASS`
  - HeiseiKakuGo-W5: CID Type 0 / UniJIS-UCS2-H（200 dpiレンダリング確認）
- PDF preflight: `PASS`
- 暗号化: `なし`
- scanned判定: `false`

SHA-256: `14da420cc2667d859029fd61abbbc17feb78732f2b3db1d4464a959137e1d6c8`

## 内容QA

- 問題数: 12問
- 形式: 全問五肢択一
- 難易度: 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- 理想条件・仮想短絡・入力電流0: `PASS`
- 反転・非反転増幅: `PASS`
- 加算・差動・重ね合わせ: `PASS`
- 非反転側分圧→仮想短絡→KCL: `PASS`
- T形帰還抵抗網KCL: `PASS`
- 積分・微分: `PASS`
- コンパレータと負帰還線形動作の区別: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19・20先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

## 判定

`PASS / PRACTICE_PDF_COMPLETE`
