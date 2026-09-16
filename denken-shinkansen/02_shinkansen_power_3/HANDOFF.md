# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `10 / 16`。Topic 01〜10は完成済み。

## 今回進捗
Topic 10 `新幹線が突然大電力を使ったら？` の最終QAを再実施し、`PASS / completed` とした。

再確認結果:
- 必須成果物: PASS
- 固定5問・8小問の完成後ブラインド独立再解答: `8 / 8 PASS`
- 公式解答一致: `8 / 8`
- 教材外知識補完: `0件`
- 解説PDF・練習PDF・PowerPoint QA: PASS
- SPEC固定範囲外追加: `0件`
- 前回FAILだった進捗記録3箇所の整合: PASS

技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、独立再解答結果は変更していない。main source、最終QA、STATUS、HANDOFFのみ完成状態へ同期した。

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
Topic 10 `新幹線が突然大電力を使ったら？` は `PASS / completed`。固定5問・8小問の完成後ブラインド独立再解答 `8 / 8 PASS`、最終QA PASS。

## 現在状態
- `current_status`: `topic_10_completed`
- 完成数: `10 / 16`
- last completed: Topic 10 `新幹線が突然大電力を使ったら？`
- active: Topic 11 `架線事故ではどうやって電気を止める？`
- Topic 10 source: `topics/10_load_variation/10_load_variation.md`
- Topic 10 解説PDF: `topics/10_load_variation/10_load_variation_explanation.pdf`
- Topic 10 練習問題source: `topics/10_load_variation/10_load_variation_practice_source.md`
- Topic 10 練習PDF: `topics/10_load_variation/10_load_variation_practice.pdf`
- Topic 10 練習PDF QA: `topics/10_load_variation/10_load_variation_practice_qa.md`
- Topic 10 解説画像PowerPoint: `topics/10_load_variation/10_load_variation_images.pptx`
- Topic 10 PowerPoint QA: `topics/10_load_variation/10_load_variation_powerpoint_qa.md`
- Topic 10 完成後独立再解答: `topics/10_load_variation/10_load_variation_independent_reanswer.md`
- Topic 10 最終QA: `topics/10_load_variation/10_load_variation_final_qa.md`

## 次の正確な開始点
Topic 11 `架線事故ではどうやって電気を止める？` の制作前EXAM_ALIGNMENTを実施する。`SPEC.md` のTopic 11固定範囲だけを対象に、電気技術者試験センター公式過去問を直近年度から調査し、三種原則5問以上を固定する。本文・PDF等の制作にはまだ進まない。
