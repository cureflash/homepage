# 10 300系① 誘導電動機等価回路 — 最終QA

更新日: 2026-09-16

## 判定

`PASS / completed`

技術内容、固定EXAM_ALIGNMENT、一次・二次の独立再解答、必須成果物、表示・構造QA、練習問題QA、SPEC境界、進捗記録整合を再確認し、全件PASSとした。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 教材だけで対応過去問を自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 10: 一相分等価回路、一次抵抗・漏れリアクタンス、励磁回路、二次換算、すべり、二次入力、二次銅損、機械出力、トルク、最大トルク、比例推移、効率。指定4可視化はトルク―すべり、出力―すべり、効率―負荷率、二次抵抗変更時の特性。
- Topic 11以降のPWMコンバータ、VVVF、回生・四象限運転等は追加しない。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次3問＋二次2問、計5問・22答案要素を維持。

- R8 一次 機械 問2 (1)〜(5)
- R7 一次 機械 問2 (1)〜(5)
- H25 一次 機械 問1 (1)
- R3 二次 機械・制御 問1 (1)〜(6)
- H28 二次 機械・制御 問1 (1)〜(5)

固定EXAM_ALIGNMENT変更: `0件`

## 3. 完成後独立再解答

`10_300series_induction_motor_equivalent_circuit_independent_reanswer.md` を再確認。

- 一次: `11 / 11 PASS`
- 二次: `11 / 11 PASS`
- 合計: `22 / 22 PASS`
- 教材外知識補完: `0件`
- 正答・標準解答との不一致: `0件`

独立再解答品質ゲート: `PASS`

## 4. 必須成果物

- 主source: `10_300series_induction_motor_equivalent_circuit.md` — 存在
- 解説PDF: `10_300series_induction_motor_equivalent_circuit_explanation.pdf` — 存在
- 練習source: `10_300series_induction_motor_equivalent_circuit_practice_source.md` — 存在
- 練習PDF: `10_300series_induction_motor_equivalent_circuit_practice.pdf` — 存在
- 解説画像PowerPoint: `10_300series_induction_motor_equivalent_circuit_images.pptx` — 存在
- 完成後独立再解答記録: `10_300series_induction_motor_equivalent_circuit_independent_reanswer.md` — 存在

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦5ページ
- 180 dpi Visual QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 3段階例題: `3 / 3`
- SPEC指定4グラフ: `4 / 4`

### 練習PDF
- A4縦3ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi Visual QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 計算・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・検算: `4 / 4 PASS`

### PowerPoint
- 16:9・4スライド
- SPEC指定4可視化: `4 / 4 PASS`
- Visual QA: `4 / 4 PASS`
- overflow: `0件 / PASS`
- ZIP整合性: `PASS`

成果物QA: `PASS`

## 6. SPEC境界

- 固定範囲外追加: `0件`
- Topic 11〜13先取り: `0件`
- 未確認300系実車値追加: `0件`
- 教材用仮定値と300系実車値の混同: `0件`

SPEC境界: `PASS`

## 7. 進捗記録整合

前回FAIL要因だった主source冒頭の「最終QAは未実施」は既に同期済みであることを確認した。本再判定に合わせ、主sourceを `PASS / completed`、STATUS・HANDOFFをTopic 10完了・Topic 11開始待ちへ同期する。

進捗記録整合: `PASS`

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次3問＋二次2問・22答案要素: `PASS`
- 完成後独立再解答: `22 / 22 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`

したがって最終判定は `PASS / completed`。完成数は `10 / 39`。

次工程はTopic 11「300系② PWMコンバータ」の制作前EXAM_ALIGNMENT。