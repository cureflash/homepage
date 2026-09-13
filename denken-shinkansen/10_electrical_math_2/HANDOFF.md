# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は、前回最終QAで検出したsource Markdownの進捗記録不整合を修正済み。最終QA再判定待ち。

完成数: `3 / 20`

current_status: `topic_04_source_progress_synced`

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

最終QA:
`topics/04_extrema_optimal_conditions/04_extrema_optimal_conditions_final_qa.md`

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

## 前回最終QAと修正内容

前回最終QAでは、教材内容・過去問対応・成果物実在はPASS条件を満たしていたが、source Markdown冒頭の状態記録が旧進捗のままだったため `NEEDS_REVISION` とした。

今回、`04_extrema_optimal_conditions.md` を現在地へ同期した。

- 冒頭の状態: 解説PDF・練習PDF・PowerPoint・PowerPoint QA・完成後独立再解答まで完了へ修正
- 末尾の次工程: 最終QA再判定へ修正
- EXAM_ALIGNMENT、本文、数式、例題、固定範囲は変更していない

## 実装上の境界

- R7二次同期調相機のような絶対値最小点は微分不能点を直接比較する
- 最適点と最大値のパラメータ依存を分けて読む
- 多変数最適化、ラグランジュ未定乗数法、反復計算・数値最適化は先取りしない
- 実車固有の制御則・未確認実機値は追加しない

## 次に行うこと

Topic 04の最終QAを再判定する。

1. source Markdownの状態記録とGitHub正本の実成果物が一致していることを確認する。
2. 必須成果物、固定EXAM_ALIGNMENT 6問・18対象項目、完成後独立再解答18/18、表示QA、SPEC境界を再確認する。
3. 全品質ゲートPASSの場合のみTopic 04を `completed`、完成数を `4 / 20` とする。