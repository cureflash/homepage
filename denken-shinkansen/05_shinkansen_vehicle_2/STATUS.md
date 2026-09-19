# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `21 / 39`
- current_status: `topic_22_explanation_source_complete`
- last_completed_topic: `21 高速域の速度・けん引力・出力制御`
- active_topic: `22 E5系 再粘着制御`
- next_start: Topic 22 解説PDF作成＋PDF QA。固定した第二種一次2問＋二次3問、計5問・11答案要素、SPEC固定8項目・3可視化を変更しない

## 完了済み

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

## Topic 22 制作前EXAM_ALIGNMENT

判定: `PASS / PREPRODUCTION_EXAM_ALIGNMENT_COMPLETE`

固定公式過去問:
- H28 一次 機械 問5 `(4),(5)` — `2答案要素 / 直接`
- R2 一次 機械 問3 `(1)` — `1答案要素 / 橋渡し`
- R7 二次 機械・制御 問2 `(1)のs1のみ`, `(3)のN2のみ` — `2答案要素 / 橋渡し`
- R2 二次 機械・制御 問1 `(2),(3),(4)` — `3答案要素 / 橋渡し`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)` — `3答案要素 / 橋渡し`

固定品質ゲート:
- 一次: `2問・3答案要素`
- 二次: `3問・8答案要素`
- 合計: `5問・11答案要素`
- 二次記述問題: `3問`
- 直接問題: `1問`
- 橋渡し問題: `4問`
- SPEC固定8項目: `8 / 8 mapped`
- SPEC指定3可視化: `3 / 3 requirements fixed`

境界:
- H28一次 問5が粘着差と車輪回転速度差を直接扱う。
- 残る4問は速度差・滑り・トルク応答・フィードバック特性の橋渡し技能として固定し、再粘着の直接出題とは扱わない。
- SPEC固有の粘着係数・粘着限界・空転・滑走・再粘着・3可視化は教材内で明示的に補完する。
- 公式解答・標準解答の個別正答記号・最終数値は制作前段階では保存しない。
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control.md`

## Topic 22 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- 固定公式過去問: `5 / 5` 維持
- 固定答案要素: `11 / 11 covered`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3` 再生成条件あり
- 3段階例題: `3 / 3`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_source.md`

## 次工程

Topic 22解説PDFをsourceから生成し、表示・文字抽出・固定11答案要素・SPEC固定8項目・指定3可視化をPDF QAする。