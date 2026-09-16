# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は完成済み。

## 今回進捗
Topic 10 `新幹線が突然大電力を使ったら？` のmain sourceへ、完成後ブラインド独立再解答結果を同期した。

変更対象:
- `topics/10_load_variation/10_load_variation.md`
- `STATUS.md`
- `HANDOFF.md`

同期内容:
- 完成後ブラインド独立再解答: `8 / 8 PASS`
- 公式解答一致: `8 / 8 PASS`
- 教材外知識補完: `0件`
- Topic 11以降の論点による補完: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認実設備値の使用: `0件`
- main sourceのEXAM_ALIGNMENTへ独立答案・品質ゲート結果を反映
- main source冒頭状態・末尾次工程を実成果物へ同期

教材本文、固定5問・8小問、数式、例題、PDF/PPTX、SPEC固定範囲は変更していない。

## Topic 10 固定過去問
- R8上 電力 問12
- R7上 電力 問17 (a)(b)
- R4上 電力 問17 (a)(b)
- R3 法規 問13 (a)(b)
- R1 電力 問17 (a)(b)

## Topic 10 固定範囲
SPECから追加しない。

- 最大需要電力
- 需要率
- 負荷率
- 不等率
- 力率
- 電圧変動
- 電力損失
- 無効電力

新幹線側は `列車負荷増加 → 電流増加 → 電圧降下増加 → 損失増加` の因果だけを使う。未確認実設備値は真値として置かない。Topic 11以降の短絡・保護・遮断、弛度・張力、材料、配電・地中電線路、回生・蓄電へ先回りしない。

## 直前完了テーマ
Topic 09 `変電所からパンタグラフまでどう送る？` は `PASS / completed`。固定5問・7小問の完成後ブラインド独立再解答 `7 / 7 PASS`、最終QA PASS。

## 現在状態
- `current_status`: `topic_10_source_reanswer_synced`
- 完成数: `9 / 16`
- last completed: Topic 09 `変電所からパンタグラフまでどう送る？`
- active: Topic 10 `新幹線が突然大電力を使ったら？`
- source: `topics/10_load_variation/10_load_variation.md`
- 解説PDF: `topics/10_load_variation/10_load_variation_explanation.pdf`
- 練習問題source: `topics/10_load_variation/10_load_variation_practice_source.md`
- 練習PDF: `topics/10_load_variation/10_load_variation_practice.pdf`
- 練習PDF QA: `topics/10_load_variation/10_load_variation_practice_qa.md`
- 解説画像PowerPoint: `topics/10_load_variation/10_load_variation_images.pptx`
- PowerPoint QA: `topics/10_load_variation/10_load_variation_powerpoint_qa.md`
- 完成後独立再解答: `topics/10_load_variation/10_load_variation_independent_reanswer.md`

## 次の正確な開始点
Topic 10最終QAを実施する。必須成果物、EXAM_ALIGNMENT、固定5問・8小問の独立再解答 `8 / 8 PASS`、解説PDF／練習PDF／PowerPoint QA、進捗記録整合、SPEC固定範囲境界を再確認し、全件PASSの場合のみ `completed` とする。