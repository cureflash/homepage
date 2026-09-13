# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は解説画像PowerPointまで完了。

完成数: `3 / 20`

current_status: `topic_04_images_pptx_complete`

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

## Topic 04 品質ゲート対象

- R8 一次 機械 問3 (2)〜(3)
- R7 一次 機械 問2 (1)〜(5)
- R7 一次 理論 問5 (3)〜(5)
- R7 一次 理論 問3 (3)〜(5)
- R7 二次 機械・制御 問1 (5)a〜b
- R3 二次 機械・制御 問1 (4)〜(6)

計6問・18対象項目。制作前独立再導出18/18で公式解答・標準解答と一致し、解説本文・練習PDF・PowerPointはこの固定範囲から外していない。

固定範囲:
- 一変数関数の極値
- 二階微分による判定
- パラメータ依存

電験への接続:
- 最大トルク条件
- 最大効率条件
- 最大電力条件
- 最適動作点

## PowerPoint実装・QA

- 16:9、全4スライド
- 一変数極値の候補・判定、定義域、端点・微分不能点を可視化
- 最大電力、交流RL負荷 `R=ωL`、変圧器最大効率 `P_i=P_c` を収録
- 誘導電動機の最大トルク時滑り、分母最小化、二階微分判定、最適点と最大値のパラメータ依存を収録
- 同期調相機 `I(E)=|E-1|/X_s` の微分不能最小点を収録
- 全4スライド表示QA PASS
- 文字切れ・重なり・文字化け・空白ページなし
- キャンバス外はみ出しなし
- ZIP整合性PASS

## 実装上の境界

- R7二次同期調相機のような絶対値最小点は微分不能点を直接比較する
- 最適点と最大値のパラメータ依存を分けて読む
- 多変数最適化、ラグランジュ未定乗数法、反復計算・数値最適化は先取りしない
- 実車固有の制御則・未確認実機値は追加しない

## 次に行うこと

Topic 04の固定6問・18対象項目を、完成教材だけを使って保存済み正答を先に見ずに独立再解答する。

1. 各設問で使用式・成立条件・定義域を教材から選ぶ。
2. 一次4問・二次2問を再導出する。
3. 再解答後に公式解答・標準解答と照合する。
4. 教材外知識で補完した箇所が1つでもあればFAILとして、最終QAへ進めない。
5. 固定範囲外の論点は追加しない。
