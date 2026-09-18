# Topic 17 最終QA記録

対象: `17 常微分方程式の数値解法`

実施日: 2026-09-18

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

必須成果物、固定EXAM_ALIGNMENT、完成後独立検証、PDF/PowerPoint表示QA、SPEC境界はPASS。ただし進捗記録4ファイルが実成果物より古いため、GitHub正本の状態整合が未完了であり `completed` にはしない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS |
| 制作前独立数値検証 | PASS |
| 制作前検証スクリプト | PASS |
| 解説PDF | PASS |
| 解説PDF QA | PASS |
| 練習問題source | PASS |
| 練習PDF | PASS |
| 練習PDF QA | PASS |
| 解説画像PowerPoint | PASS |
| PowerPoint QA | PASS |
| 完成後独立検証 | PASS |
| 完成後検証スクリプト | PASS |
| 最終QA記録 | PASS |

## EXAM_ALIGNMENT確認

第二種公式過去問を直近年度から確認し、常微分方程式＋初期条件へ接続する一次「理論」5問を確認済み。

- R8 一次「理論」問6 (1)〜(2)
- R7 一次「理論」問6
- R6 一次「理論」問4
- R5 一次「理論」問5
- R4 一次「理論」問4

確認した5問はいずれもRC/RL過渡等の解析解を要求する隣接問題であり、Euler法・Runge-Kutta法そのものを直接要求する問題ではない。

- 直接Euler/RK要求の固定過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`
- 第一種・第三種による件数水増し: `0件`

直接該当問題0問という調査結果を維持し、件数合わせで範囲外問題を品質ゲートへ追加していない。

## 完成後独立検証

直接Euler/RK要求の第二種過去問が0問のため、接続確認5問を固定品質ゲートへ格上げせず、完成教材の固定範囲だけを使って保存済み例題と異なる新規数値条件3ケースを独立検証している。

- Case A 一次減衰: `PASS`
  - `h=0.10` の絶対誤差 `0.0368116...`
  - `h=0.05` の絶対誤差 `0.0173706...`
- Case B 教育用RL過渡: `PASS`
  - `h=0.05 s` の絶対誤差 `0.514732 A`
  - `h=0.025 s` の絶対誤差 `0.242705 A`
- Case C 教育用列車モデル: `PASS`
  - 同一刻みの始点値で速度・位置を同時更新
  - `t=30 s`: `v=14.628125 m/s`, `x=148.75 m`

新規3ケース: `3 / 3 PASS`。

教材外知識補完: `0件`。
固定EXAM_ALIGNMENT変更: `0件`。

## 表示・成果物QA

既存QA記録を再照合した。

- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`、数値整合 `PASS`
- 3段階例題: `3 / 3 PASS`
- 練習問題: 全12問（一次型8問／記述型4問）、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`
- 練習PDF: A4縦1ページ、200 dpi表示QA `1 / 1 PASS`、文字抽出QA `PASS`、問1〜問12＋完全解説収録 `PASS`
- PowerPoint: 16:9・5枚、固定範囲 `5 / 5`、表示QA `5 / 5 PASS`、overflow `0件`、`slides_test.py` `PASS`、PPTX ZIP/XML整合性 `PASS`

## SPEC境界確認

固定範囲:

- Euler法
- Runge-Kutta法の概念
- 刻み幅と誤差
- 初期値問題
- 簡略列車運動式 `m dv/dt = Ftraction(v) - Fresistance(v)` の時間発展

境界確認:

- Runge-Kutta法は概念のみ: PASS
- 陰的Euler法・多段法・適応刻み等の体系的追加: `0件`
- Topic 18の二分法・Newton法等の先取り: `0件`
- Topic 19の最適化先取り: `0件`
- 偏微分方程式・有限要素法の追加: `0件`
- 第一種・第三種過去問による件数水増し: `0件`
- 未確認実車値依存: `0件`

## 進捗記録整合QA

実成果物は完成後独立検証まで完了し、主source・STATUS・HANDOFF・完成後独立検証記録は「次工程: 最終QA」で同期済み。

一方、以下4ファイルの次工程記録が実状態より古い。

1. `17_ode_numerical_methods_explanation_qa.md`
   - 現在: `次工程は練習問題sourceを作成する。`
   - 実状態: 練習問題source、練習PDF、PowerPoint、完成後独立検証まで完了
2. `17_ode_numerical_methods_practice.md`
   - 現在: `次工程は練習PDFを作成し、表示QA・文字抽出QA・数値整合を確認する。`
   - 実状態: 練習PDF、PowerPoint、完成後独立検証まで完了
3. `17_ode_numerical_methods_practice_qa.md`
   - 現在: `次工程は解説画像PowerPointを作成し、PowerPoint表示QAを行う。`
   - 実状態: PowerPoint、完成後独立検証まで完了
4. `17_ode_numerical_methods_powerpoint_qa.md`
   - 現在: `Topic 17の完成後独立検証を実施する。`
   - 実状態: 完成後独立検証 `PASS` 済み

進捗記録整合: `2 / 6 PASS`。

技術本文、固定EXAM_ALIGNMENT、問題、正答、PDF、PowerPoint、完成後独立検証の技術内容に修正要求はない。

## 最終判定

- 必須成果物実在: PASS
- 第二種公式過去問調査: PASS
- 直接Euler/RK要求0問の記録と非該当問題の水増し0件: PASS
- 完成後独立検証 `3 / 3`: PASS
- 練習問題独立計算・論理QA `12 / 12`: PASS
- 一次型正答一意性 `8 / 8`: PASS
- 固定範囲外追加0件: PASS
- 未確認実車値依存0件: PASS
- 表示QA: PASS
- 進捗記録と実成果物の整合: `2 / 6 PASS`

総合判定: `NEEDS_REVISION / IN_PROGRESS`。

次工程は上記4ファイルの進捗記録だけを実成果物へ同期する。固定EXAM_ALIGNMENT、技術本文、練習問題、正答、PDF、PowerPoint、完成後独立検証は変更しない。同期後に最終QAを再判定する。