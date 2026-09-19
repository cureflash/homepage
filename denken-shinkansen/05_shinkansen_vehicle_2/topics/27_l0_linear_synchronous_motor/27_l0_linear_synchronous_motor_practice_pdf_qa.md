# Topic 27 練習PDF QA

更新日: 2026-09-20

## 対象

- PDF: `27_l0_linear_synchronous_motor_practice.pdf`
- source: `27_l0_linear_synchronous_motor_practice_source.md`
- source blob SHA: `986b72ef8e509eff37bcad8132eff52b3086ffcb`
- canonical PDF blob SHA: `a5f336100e3b9c0ca697f729f476d475c80782a0`

## 構造・表示QA

- file size: `11,721 bytes`
- SHA-256: `31ca8307691fbee099ff891f99764ed114a0285b4bf7198054ab7f7eb0a41339`
- page size: `A4縦`
- pages: `3`
- PDFium render: `3 / 3 PASS`
- Poppler render: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（10,408 bytes）
- replacement char `�`: `0件`
- 文字切れ・重なり・ページ外はみ出し・欠落グリフ: `0件 / PASS`
- 初回生成で `≈` がCIDフォント上の欠落グリフになったため、数値・意味を変えず `約3.62 Ω/相` へ表記修正して再生成し、両レンダラで再確認: `PASS`

## 内容QA

- 一次試験型8問＋正答・完全解説: `8 / 8 PASS`
- 二次試験型4問＋途中式・前提・単位・理由を含む完全解説: `4 / 4 PASS`
- 全12問の数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `18 / 18 connected`
- 二次答案要素: `5 / 5 connected`
- 合計答案要素: `23 / 23 connected`
- SPEC必須7項目: `7 / 7 covered`
- SPEC指定2可視化の計算接続: `2 / 2 aligned`

## 境界QA

- 未確認L0系極ピッチ・推進周波数・同期リアクタンス・推力・推進コイル電圧電流の真値化: `0件`
- 数値例の扱い: `一般問題または教材用仮定値`
- Topic 28範囲（負荷角δ、出力角特性、推力式本格解析）の先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21 H26二次 問1(4)の過去問固有丸め差の扱い変更: `0件`
- 一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- exact blocker: `0件`

## 判定

`PASS / PRACTICE_PDF_COMPLETE`

次の安全な工程は Topic 27 解説画像PowerPoint生成＋PowerPoint QA。固定5問・23答案要素、SPEC必須7項目、指定2可視化、L0系実車値境界を維持する。
