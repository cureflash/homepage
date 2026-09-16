# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は完成済み。

## 今回進捗
Topic 10 `新幹線が突然大電力を使ったら？` を1段階進め、前回最終QAで唯一FAILだった旧進捗記録3箇所を現在の実成果物へ同期した。

同期対象:
1. `10_load_variation_practice_source.md` — 練習PDF・練習PDF QA・PowerPoint・完成後ブラインド独立再解答・main source同期・最終QAまで実施済みの現在地へ更新。
2. `10_load_variation_powerpoint_qa.md` — 完成後ブラインド独立再解答 `8 / 8 PASS`、main source同期、最終QA実施済みの現在地へ更新。
3. `10_load_variation_independent_reanswer.md` — main source同期・最終QA実施済みの現在地へ更新。

技術本文、固定5問・8小問、問題・正答、PDF/PPTX、独立再解答結果は変更していない。

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
- `current_status`: `topic_10_progress_records_synced`
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
- 最終QA: `topics/10_load_variation/10_load_variation_final_qa.md`

## 次の正確な開始点
Topic 10最終QAを再実施する。前回FAILだった進捗記録3箇所の整合を再確認し、技術内容・固定EXAM_ALIGNMENT・独立再解答 `8 / 8 PASS`・成果物QA・SPEC境界に新たな不整合がなければ `PASS / completed` とする。
