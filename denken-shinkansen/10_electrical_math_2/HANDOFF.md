# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-19

## 現在地

Topic 01〜19は最終QAまで `PASS / completed`。

完成数: `19 / 20`

current_status: `topic_20_powerpoint_complete`

active_topic: `20 新幹線を数式モデルだけで走らせる`

次工程: Topic 20の完成後独立検証。

## 上位仕様

毎runで以下を正本として確認する。

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/10_electrical_math_2/SPEC.md`
- 本 `HANDOFF.md`
- `STATUS.md`
- active topic の既存成果物
- main の直近変更

仕様外論点を件数合わせで追加しない。二種相当の公式過去問対応を先に固定し、完成後は教材だけで独立検証して品質ゲートを通過したテーマだけを `completed` とする。

## 完了済みTopic

Topic 01〜19は完了済み。各テーマの固定EXAM_ALIGNMENT、独立検証、成果物QA、最終QAの詳細は各 `topics/<topic>/` 配下のsource・QA記録を正本とする。

直近完了:

- Topic 18 `非線形方程式と反復計算`: `PASS / completed`
- Topic 19 `最適化入門`: `PASS / completed`
  - 最終QA再判定: `PASS`
  - 進捗記録整合: `6 / 6 PASS`
  - 完成後独立検証: `3 / 3 PASS`
  - 直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問: `0問`
  - 接続確認5問の固定品質ゲート件数への水増し: `0件`
  - 仕様外追加: `0件`

# Topic 20 新幹線を数式モデルだけで走らせる

## 主source

`topics/20_shinkansen_math_model/20_shinkansen_math_model.md`

## 固定範囲

`SPEC.md` に従い、既完了Topicの数学を一つの簡略新幹線モデルへ統合する。

```text
牽引力・走行抵抗
↓
運動方程式
↓
数値積分
↓
速度・位置
↓
消費電力・回生電力
↓
ラプラス領域の簡略制御モデル
↓
PWM波形・FFT
```

実車値を使用する場合は一次資料等の出典を明記し、計算値・仮定値と区別する。未確認実車値は使わない。

追加しない内容:

- Topic 05〜19で未採用だった数学理論・算法
- 最適制御理論、KKT条件、一般的な数値最適化アルゴリズム
- 電力潮流の詳細アルゴリズム
- 陰的Euler法、多段法、適応刻み等の数値ODE手法の体系的追加
- FFTアルゴリズム実装詳細、ADC量子化・変換回路方式
- PWM制御方式・スイッチング戦略の一般論
- 詳細な車両工学解説
- 第一種・第三種過去問による第二種品質ゲート件数の水増し
- 未確認の新幹線実車値

## 制作前EXAM_ALIGNMENT

2026-09-19、第二種公式過去問の現行アーカイブを確認し、統合モデル各要素へ接続する5問を整理した。

- R8 一次 理論 問6 (1)〜(2): 微分方程式・初期条件・時間発展
- R6 一次 法規 問4 (1)〜(2): 時間面積・平均電力・積算
- R7 二次 機械・制御 問4 (1),(4): 伝達関数・極零点・インパルス応答
- H28 二次 機械・制御 問3 (3)〜(4): 周期波形・高調波・実効値
- R3 一次 機械 問8 (1): サンプリング定理

確認結果:

- 統合新幹線モデル自体を直接要求する確認済み第二種過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題の追加: `0件`
- 仕様外数学の追加: `0件`
- 未確認実車値の固定: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`。

## 既完了Topicとの接続

- 牽引力・走行抵抗→運動方程式: Topic 17
- 数値積分→速度・位置: Topic 16 / 17
- 消費・回生電力量: Topic 05 / 16
- ラプラス領域の簡略制御モデル: Topic 09 / 10
- PWM波形: Topic 13
- FFT: Topic 14

既完了内容を再講義せず、変数・単位・符号規約を一つの計算フローへ接続する。

## 制作前独立検証

記録:
`topics/20_shinkansen_math_model/20_shinkansen_math_model_preproduction_validation.md`

再現用スクリプト:
`topics/20_shinkansen_math_model/20_shinkansen_math_model_preproduction_validation.py`

教育用仮定値だけで固定範囲を独立検証した。

- Case A: 牽引力→運動方程式→速度・位置→仕事・電力量 `PASS`
- Case B: 回生側の符号規約 `PASS`
- Case C: Euler刻み幅・解析解・一次伝達関数の整合 `PASS`
- Case D: 周期成分・サンプリング条件・DFT周波数ビン `PASS`
- 統合モデル直接要求の確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題追加: `0件`
- 仕様外追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / PREPRODUCTION_VALIDATION_COMPLETE`。

## 解説本文＋3段階例題

主sourceへ固定範囲だけで解説本文を追加し、教材で必要な説明6項目と3段階例題を完成した。

- 教材で必要な説明: `6 / 6 PASS`
- 3段階例題: `3 / 3 PASS`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 例題1: 力→速度・位置→仕事・電力積分の整合 `PASS`
- 例題2: 一次運動モデル→伝達関数→時間応答の整合 `PASS`
- 例題3: 回生符号・エネルギー収支・サンプリング条件 `PASS`
- 統合モデル直接要求の確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題追加: `0件`
- 仕様外追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / EXPLANATION_BODY_COMPLETE`。

## 解説PDF＋QA

成果物:

- `topics/20_shinkansen_math_model/20_shinkansen_math_model_explanation.pdf`
- `topics/20_shinkansen_math_model/20_shinkansen_math_model_explanation_qa.md`

固定済み本文だけからA4縦4ページの解説PDFを作成し、表示・文字抽出・独立数値照合を行った。

- A4縦: `4ページ`
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 3段階例題の独立数値照合: `3 / 3 PASS`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 統合モデル直接要求の確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題追加: `0件`
- 仕様外追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`。

## 練習問題source

成果物:

`topics/20_shinkansen_math_model/20_shinkansen_math_model_practice.md`

固定範囲だけで全12問を作成し、一次型8問・記述型4問、基礎3問・標準6問・複合3問とした。全問を教育用仮定値で構成し、式・単位・中間値・検算まで完全解説へ固定した。

- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 一次型正答番号: `3, 3, 2, 3, 4, 1, 4, 5`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 統合モデル直接要求の確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題追加: `0件`
- 仕様外数学・算法追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

## 練習PDF＋QA

成果物:

- `topics/20_shinkansen_math_model/20_shinkansen_math_model_practice.pdf`
- `topics/20_shinkansen_math_model/20_shinkansen_math_model_practice_qa.md`

固定済み練習sourceだけからA4縦4ページの練習PDFを作成し、表示・文字抽出・独立数値照合を行った。

- A4縦: `4ページ`
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 統合モデル直接要求の確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題追加: `0件`
- 仕様外追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`。

## 解説画像PowerPoint＋QA

成果物:

- `topics/20_shinkansen_math_model/20_shinkansen_math_model_images.pptx`
- `topics/20_shinkansen_math_model/20_shinkansen_math_model_powerpoint_qa.md`

固定済みEXAM_ALIGNMENT・教材本文・練習問題の範囲を変えず、統合モデルを16:9・5枚で可視化した。

- 16:9: `5枚`
- SPEC固定統合範囲: `7 / 7 covered`
- 教材で必要な説明6項目の可視化: `6 / 6 PASS`
- 接続確認5問との対応: `5 / 5 PASS`
- 数値整合QA: `PASS`
- 全5スライド表示QA: `5 / 5 PASS`
- shape geometry overflow: `0件`
- `slides_test.py`: `PASS`
- PPTX ZIP/XML整合性: `PASS`
- 統合モデル自体を直接要求する確認済み第二種過去問: `0問`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題の追加: `0件`
- 仕様外数学・算法の追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / POWERPOINT_COMPLETE`。

## 制作品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 最新main・STATUS・HANDOFF・既完了Topicをreconcile
- [x] 第二種公式過去問の現行アーカイブ確認
- [x] 接続確認5問を整理
- [x] 統合モデル直接要求0問を記録
- [x] 接続問題の件数水増し0件を確認
- [x] 第一種・第三種による水増し0件を確認
- [x] 電験学習資料を複数系統確認
- [x] source MarkdownへEXAM_ALIGNMENT・必要説明・境界を固定
- [x] 制作前独立検証
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋QA（A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出QA `PASS`、独立数値照合 `3 / 3 PASS`）
- [x] 練習問題source（全12問、一次型8問・記述型4問、基礎3問・標準6問・複合3問、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`）
- [x] 練習PDF＋QA（A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出QA `PASS`、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`）
- [x] 解説画像PowerPoint＋QA（16:9・5枚、固定統合範囲 `7 / 7`、必要説明 `6 / 6 PASS`、接続確認5問 `5 / 5 PASS`、表示QA `5 / 5 PASS`、overflow `0件`）
- [ ] 完成後独立検証
- [ ] 最終QA
- [ ] `completed`

## 次工程

固定済みEXAM_ALIGNMENT、制作前独立検証、解説本文・解説PDF・練習問題source・練習PDF・PowerPointを変更せず、Topic 20の完成後独立検証を行う。