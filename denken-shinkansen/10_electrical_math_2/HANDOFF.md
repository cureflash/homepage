# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `複素数・複素指数・フェーザ計算` は `completed`。

Topic 02 `ベクトルと座標変換` は `completed`。

Topic 03 `偏微分・全微分` は `completed`。

Topic 04 `微分による極値・最適条件` は最終QA再判定PASSで `completed`。

完成数: `4 / 20`

current_status: `topic_04_completed`

active_topic: `05 積分によるエネルギー計算`

## Topic 04 完成成果物

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

## Topic 04 品質ゲート結果

固定EXAM_ALIGNMENT:

- R8 一次 機械 問3 (2)〜(3)
- R7 一次 機械 問2 (1)〜(5)
- R7 一次 理論 問5 (3)〜(5)
- R7 一次 理論 問3 (3)〜(5)
- R7 二次 機械・制御 問1 (5)a〜b
- R3 二次 機械・制御 問1 (4)〜(6)

計6問・18対象項目。制作前独立再導出18/18、完成後独立再解答18/18で公式解答・標準解答と一致。教材外知識による補完は0件。

固定範囲:
- 一変数関数の極値
- 二階微分による判定
- パラメータ依存

電験への接続:
- 最大トルク条件
- 最大効率条件
- 最大電力条件
- 最適動作点

最終QA再判定:
- 必須成果物実在: PASS
- EXAM_ALIGNMENT: PASS
- 二次試験対応: PASS
- 独立再解答: PASS
- 表示QA: PASS
- source進捗整合: PASS
- SPEC外内容の非混入: PASS

総合判定: `PASS / completed`。

## 実装上の境界

- R7二次同期調相機のような絶対値最小点は微分不能点を直接比較する
- 最適点と最大値のパラメータ依存を分けて読む
- 多変数最適化、ラグランジュ未定乗数法、反復計算・数値最適化は先取りしない
- 実車固有の制御則・未確認実機値は追加しない

## 次に行うこと

Topic 05 `積分によるエネルギー計算` の制作前EXAM_ALIGNMENTを行う。

1. `SPEC.md` の固定範囲 `E=∫Pdt`、`W=∫Fdx`、電界・磁界エネルギー、平均値、RMSとの関係を確認する。
2. 電気技術者試験センターの二種公式過去問を直近年度から調査する。
3. 本Topicへ直接対応する一次・二次の過去問を原則5問以上選定する。二次の直接対応問題が確認できる場合は最低1問含める。
4. 要求知識・式・設問型・教材内必要説明をsource MarkdownのEXAM_ALIGNMENTとして固定する。
5. 件数合わせでTopic 06以降やSPEC外論点を追加しない。