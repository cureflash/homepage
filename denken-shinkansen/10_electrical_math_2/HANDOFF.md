# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は完成後独立再解答まで完了。

完成数: `3 / 20`

current_status: `topic_04_exam_reanswer_complete`

active_topic: `04 微分による極値・最適条件`

## Topic 04 現在の成果物

source Markdown:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions.md`

解説PDF:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions_explanation.pdf`

練習PDF:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions_practice.pdf`

解説画像PowerPoint:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions_images.pptx`

PowerPoint QA:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions_powerpoint_qa.md`

完成後独立再解答:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions_exam_reanswer.md`

## Topic 04 品質ゲート対象

- R8 一次 機械 問3 (2)〜(3)
- R7 一次 機械 問2 (1)〜(5)
- R7 一次 理論 問5 (3)〜(5)
- R7 一次 理論 問3 (3)〜(5)
- R7 二次 機械・制御 問1 (5)a〜b
- R3 二次 機械・制御 問1 (4)〜(6)

計6問・18対象項目。制作前独立再導出18/18に続き、完成後も完成教材だけで再解答し、一次13/13・二次5/5・合計18/18で公式解答・標準解答と一致した。教材外知識による補完は0件。

固定範囲:
- 一変数関数の極値
- 二階微分による判定
- パラメータ依存

電験への接続:
- 最大トルク条件
- 最大効率条件
- 最大電力条件
- 最適動作点

## 完成後独立再解答

- R8 一次 機械 問3 (2)〜(3): `(2)ロ (3)ヌ`、2/2 PASS
- R7 一次 機械 問2 (1)〜(5): `(1)ハ (2)ヌ (3)ル (4)チ (5)ワ`、5/5 PASS
- R7 一次 理論 問5 (3)〜(5): `(3)ヲ (4)ヌ (5)ニ`、3/3 PASS
- R7 一次 理論 問3 (3)〜(5): `(3)ハ (4)ヌ (5)リ`、3/3 PASS
- R7 二次 機械・制御 問1 (5)a〜b: `I=|E-1|/X_s`、`E=1.0 p.u.`、2/2 PASS
- R3 二次 機械・制御 問1 (4)〜(6): `T(s)`、`s_m=r'_2/sqrt(r_1^2+x^2)`、`T_m=(3p/(4πf))V_1^2/{r_1+sqrt(r_1^2+x^2)}`、3/3 PASS

## 実装上の境界

- R7二次同期調相機のような絶対値最小点は微分不能点を直接比較する
- 最適点と最大値のパラメータ依存を分けて読む
- 多変数最適化、ラグランジュ未定乗数法、反復計算・数値最適化は先取りしない
- 実車固有の制御則・未確認実機値は追加しない

## 次に行うこと

Topic 04の最終QAを実施する。

1. MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPECと成果物の整合を確認する。
2. 固定EXAM_ALIGNMENT 6問・18対象項目の教材内カバレッジを再確認する。
3. 完成後独立再解答18/18 PASSと教材外知識補完0件を確認する。
4. 解説PDF・練習PDF・PowerPoint・QA記録・sourceの進捗記録を照合する。
5. 全品質ゲートPASSの場合のみTopic 04を `completed` とし、完成数を `4 / 20` へ更新する。
