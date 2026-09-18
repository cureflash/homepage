# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-18

## 現在地

Topic 01〜16は最終QAまで `PASS / completed`。

完成数: `16 / 20`

current_status: `topic_17_powerpoint_complete`

active_topic: `17 常微分方程式の数値解法`

次工程: Topic 17の完成後独立検証を行う。

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

## reconcile結果

直近の「電気数学二種を進行」枠の成果を確認した。

- Topic 16「数値微分・数値積分」: 最終QA `PASS / completed`
- Topic 17 制作前EXAM_ALIGNMENT: 完了
- Topic 17 制作前独立数値検証: 完了
- Topic 17 解説本文＋3段階例題: 完了
- Topic 17 解説PDF＋QA: 完了
- Topic 17 練習問題source: 完了
- Topic 17 練習PDF＋QA: 完了
- Topic 17 解説画像PowerPoint＋表示QA: 完了

Topic 01〜16の詳細な過去問対応・成果物・QA記録は、各Topic配下のsource・QA・`STATUS.md` を正本とする。

# Topic 17 常微分方程式の数値解法

## 固定範囲

`SPEC.md` に従い、以下のみ扱う。

- Euler法
- Runge-Kutta法の概念
- 刻み幅と誤差
- 初期値問題
- 簡略列車運動式 `m dv/dt = Ftraction(v) - Fresistance(v)` の時間発展

追加しない内容:

- Topic 18の二分法・Newton法等の非線形方程式反復
- Topic 19の最適化
- 陰的Euler法、多段法、適応刻み等の体系的展開
- 偏微分方程式、有限要素法
- 第一種・第三種問題による第二種品質ゲート件数の水増し
- 未確認の新幹線実車値

## EXAM_ALIGNMENT

source:
`topics/17_ode_numerical_methods/17_ode_numerical_methods.md`

第二種公式過去問を直近年度から確認し、常微分方程式＋初期条件へ接続する一次「理論」5問を確認済み。

- R8 一次 理論 問6 (1)〜(2)
- R7 一次 理論 問6
- R6 一次 理論 問4
- R5 一次 理論 問5
- R4 一次 理論 問4

確認した5問はいずれもRC/RL過渡等の解析解を要求する隣接問題であり、Euler法・Runge-Kutta法そのものを直接要求する問題ではない。

- 直接Euler/RK要求の固定過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`

R8問6はTopic 17との接続確認では独立な一次応答である (1)〜(2) のみを見る。(3)以降のC-L結合を本Topicへ追加しない。

## 制作前独立数値検証

記録:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_preproduction_validation.md`

再現用スクリプト:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_preproduction_validation.py`

正規化一次減衰系 `dy/dt=-y, y(0)=1` をEuler法で独立計算済み。

`h=0.25` の手計算:

```text
1 -> 0.75 -> 0.5625 -> 0.421875 -> 0.31640625
```

解析解 `e^-1=0.367879441...` と比較し、刻み幅比較も確認済み。

判定: `PASS / PREPRODUCTION_NUMERICAL_VALIDATION_COMPLETE`

## 解説本文＋3段階例題

source:
`topics/17_ode_numerical_methods/17_ode_numerical_methods.md`

固定6説明項目: `6 / 6 PASS`

3段階例題:

- 基礎: `dy/dt=-y` のEuler法
- 本試験標準: RL過渡をEuler法で計算し解析解・刻み幅と比較
- 複合: 教育用列車モデルの速度・位置更新

独立再計算: `3 / 3 PASS`

Runge-Kutta法は `SPEC.md` 指定どおり概念に限定。Topic 18以降の先取り0件、未確認実車値依存0件。

## 解説PDF

PDF:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_explanation.pdf`

QA:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_explanation_qa.md`

確認済み:

- A4縦4ページ
- 200 dpi表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 固定範囲5項目 `5 / 5 PASS`
- 教材で必要な説明6項目 `6 / 6 PASS`
- 3段階例題 `3 / 3 PASS`
- RL例題 `h=0.10 s`: `i(0.40)=9.375 A`
- 解析解: `8.646647... A`
- 絶対誤差: `0.728353 A`
- `h=0.05 s`: `i(0.40)=8.998871 A`
- 絶対誤差: `0.352224 A`
- 教育用列車例: `v(60)=28.525 m/s`, `x(60)=590 m`
- 直接Euler/RK要求の固定過去問: `0問`
- 非該当問題の件数水増し: `0件`
- Topic 18以降の先取り: `0件`
- 未確認実車値依存: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 練習問題source

source:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_practice.md`

構成:

- 全12問
- 一次型8問
- 記述型4問
- 基礎3問／標準6問／複合3問
- Euler法、初期値、刻み幅と誤差、RL/RC過渡、簡略列車運動式を反復
- Runge-Kutta法は概念確認のみ

QA:

- 独立計算・論理QA `12 / 12 PASS`
- 一次型正答番号 `3, 4, 2, 3, 3, 4, 4, 2`
- 一次型正答一意性 `8 / 8 PASS`
- 接続確認した第二種公式過去問 `5問`
- 直接Euler/RK要求の固定過去問 `0問`
- 非該当問題の品質ゲート件数への水増し `0件`
- Topic 18以降の先取り `0件`
- 未確認実車値追加 `0件`

## 練習PDF

PDF:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_practice.pdf`

QA:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_practice_qa.md`

確認済み:

- A4縦1ページ
- 200 dpi表示QA `1 / 1 PASS`
- 文字切れ・重なり・壊れた日本語グリフ `0件`
- 文字抽出QA `PASS`
- 全12問・解答・完全解説収録 `PASS`
- 独立計算・論理QA `12 / 12 PASS`
- 一次型正答一意性 `8 / 8 PASS`
- 数値整合 `PASS`
- 直接Euler/RK要求の固定過去問 `0問`
- 非該当5問の固定品質ゲート件数への水増し `0件`
- Topic 18以降の先取り `0件`
- 未確認実車値依存 `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 解説画像PowerPoint

PowerPoint:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_images.pptx`

QA:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_powerpoint_qa.md`

確認済み:

- 16:9・5枚
- 固定範囲5項目 `5 / 5 covered`
- 同一生成コードによる表示QA `5 / 5 PASS`
- overflow `0件`
- `slides_test.py` `PASS`
- PPTX ZIP/XML整合性 `PASS`
- 数値整合 `PASS`
- 直接Euler/RK要求の固定過去問 `0問`
- 非該当5問の固定品質ゲート件数への水増し `0件`
- Topic 18以降の先取り `0件`
- 未確認実車値依存 `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## 現在の品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 第二種公式過去問を直近年度から確認
- [x] 常微分方程式＋初期条件へ接続する第二種一次「理論」5問を確認
- [x] 直接Euler/RK要求問題0問を記録し、水増ししないことを確定
- [x] 電験学習資料を複数系統確認
- [x] 数値ODE基礎資料を複数確認
- [x] sourceへ制作前EXAM_ALIGNMENT・必要説明・境界を固定
- [x] 制作前独立数値検証
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA・文字抽出QA・数値整合QA
- [x] 練習問題source
- [x] 練習PDF＋表示QA・文字抽出QA・数値整合QA
- [x] 解説画像PowerPoint
- [x] PowerPoint表示QA
- [ ] 完成後独立検証
- [ ] 最終QA
- [ ] `completed`

## 次工程

Topic 17の完成後独立検証を行う。固定範囲、直接Euler/RK要求0問、非該当問題の件数水増し0件を維持する。