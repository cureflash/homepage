# Topic 20 最終QA記録

対象: `20 新幹線を数式モデルだけで走らせる`

再判定日: 2026-09-19

## 判定

`PASS / completed`。

初回 `NEEDS_REVISION` の原因だった進捗記録5ファイルと `STATUS.md` / `HANDOFF.md` は実成果物状態へ同期済み。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、必須成果物、固定EXAM_ALIGNMENT、完成後独立検証、PDF/PowerPoint表示QA、SPEC境界、進捗記録整合を再確認し、全品質ゲートPASSと判定する。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS |
| 制作前独立検証 | PASS |
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

固定済みEXAM_ALIGNMENTを変更せず再確認した。

- 統合新幹線モデル自体を直接要求する確認済み第二種公式過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
  - R8 一次「理論」問6 (1)〜(2)
  - R6 一次「法規」問4 (1)〜(2)
  - R7 二次「機械・制御」問4 (1),(4)
  - H28 二次「機械・制御」問3 (3)〜(4)
  - R3 一次「機械」問8 (1)
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題の追加: `0件`

判定: `PASS`。

## 完成後独立検証の再確認

制作前検証・3段階例題・練習問題とは異なる教育用数値条件で実施済みの新規3ケースを再確認した。

- Case A 牽引力→速度・位置→仕事・電力量: `PASS`
  - `a=3 m/s^2`
  - `v=3,6,9,12 m/s`
  - `x=22.5 m`
  - `Wtraction=472.5 kJ`
  - `Wresistance=67.5 kJ`
  - `ΔK=405 kJ`
  - `F dx = ∫P dt = ΔK + Wresistance`
- Case B 一次簡略制御モデル・解析解・Euler法: `PASS`
  - `G(s)=1/(5s+2)`
  - `τ=2.5 s`, `v_ss=10 m/s`
  - `v_exact(2.5)=6.321205588286 m/s`
  - Euler `Δt=0.50 s`: `6.7232 m/s`
  - Euler `Δt=0.25 s`: `6.513215599 m/s`
  - 刻み幅縮小で誤差減少
- Case C 回生符号→サンプリング→周波数スペクトル: `PASS`
  - `v=12,11,10,9,8 m/s`, `x=40 m`
  - `E_signed=ΔK=-200 kJ`
  - 正表示する機械側回収量 `200 kJ`
  - `f_s=100 Hz > 2*37.5 Hz`
  - `Δf=12.5 Hz`
  - DFT: `12.5 Hz -> 1.0`, `37.5 Hz -> 0.4`

新規3ケース: `3 / 3 PASS`。
教材外知識補完: `0件`。
固定EXAM_ALIGNMENT変更: `0件`。

## 練習・表示QA

既存QA記録を再照合した。

- 教材で必要な説明: `6 / 6 PASS`
- 3段階例題: `3 / 3 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出 `PASS`、独立数値照合 `3 / 3 PASS`
- 練習問題: 全12問（一次型8問・記述型4問、基礎3問・標準6問・複合3問）、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`
- 練習PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出 `PASS`、独立計算・論理QA `12 / 12 PASS`
- PowerPoint: 16:9・5枚、固定統合範囲 `7 / 7`、必要説明 `6 / 6 PASS`、接続確認 `5 / 5 PASS`、再レンダリング `5 / 5 PASS`、overflow `0件`、`slides_test.py` `PASS`、ZIP/XML整合性 `PASS`

判定: `PASS`。

## SPEC境界確認

固定統合範囲:

- 牽引力・走行抵抗
- 運動方程式
- 数値積分
- 速度・位置
- 消費電力・回生電力
- ラプラス領域の簡略制御モデル
- PWM波形・FFT

境界確認:

- Topic 05〜19で未採用だった数学理論・算法の追加: `0件`
- 最適制御理論・KKT条件・一般数値最適化の追加: `0件`
- 電力潮流詳細アルゴリズムの追加: `0件`
- 陰的Euler法・多段法・適応刻み等の追加数値ODE手法: `0件`
- FFT実装詳細・ADC量子化・PWM制御方式一般論の追加: `0件`
- 詳細な車両工学の追加: `0件`
- 未確認実車値依存: `0件`

判定: `PASS`。

## 進捗記録整合QAの再判定

初回FAILだった5ファイルを含む進捗記録6ファイルをGitHub正本で再確認した。

1. `20_shinkansen_math_model.md`
   - 状態: `topic_20_final_qa_needs_revision / IN_PROGRESS` — PASS
   - 解説PDF・練習PDF・PowerPoint・完成後独立検証・初回最終QAまで完了済み — PASS
   - 次工程: Topic 20最終QA再判定 — PASS
2. `20_shinkansen_math_model_explanation_qa.md`
   - 練習PDF・PowerPoint・完成後独立検証・初回最終QAまで完了済み — PASS
   - 次工程: Topic 20最終QA再判定 — PASS
3. `20_shinkansen_math_model_practice.md`
   - 練習PDF・PowerPoint・完成後独立検証・初回最終QAまで完了済み — PASS
   - 次工程: Topic 20最終QA再判定 — PASS
4. `20_shinkansen_math_model_practice_qa.md`
   - PowerPoint・完成後独立検証・初回最終QAまで完了済み — PASS
   - 次工程: Topic 20最終QA再判定 — PASS
5. `20_shinkansen_math_model_powerpoint_qa.md`
   - PowerPoint本体・QA、完成後独立検証、初回最終QAまで実体化済み — PASS
   - 次工程: Topic 20最終QA再判定 — PASS
6. `../../HANDOFF.md`
   - `current_status`: `topic_20_final_qa_needs_revision` — PASS
   - 次工程: Topic 20最終QA再判定 — PASS

進捗記録整合: `6 / 6 PASS`。

系列 `STATUS.md` も `topic_20_final_qa_needs_revision`、完成数 `19 / 20`、次工程「Topic 20の最終QA再判定」で初回QA後の状態へ同期済みであることを確認した。

技術本文、固定EXAM_ALIGNMENT、問題、正答、PDF、PowerPoint、完成後独立検証の技術内容変更: `0件`。

## 最終判定

- 必須成果物実在: PASS
- 第二種公式過去問調査・接続5問確認: PASS
- 統合モデル直接要求0問の記録と水増し0件: PASS
- 完成後独立検証 `3 / 3`: PASS
- 練習問題独立計算・論理QA `12 / 12`: PASS
- 一次型正答一意性 `8 / 8`: PASS
- 教材外知識補完0件: PASS
- 固定範囲外追加0件: PASS
- 未確認実車値依存0件: PASS
- 表示QA: PASS
- 進捗記録と実成果物の整合: `6 / 6 PASS`

総合判定: `PASS / completed`。

Topic 20を完了とし、`10_electrical_math_2` は `20 / 20` 完了とする。
