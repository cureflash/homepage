# STATUS

updated: 2026-09-16
series: `06_shinkansen_power_2`
active_topic: `07`
theme: 三相電力をどう25kVの単相へ変える？
current_status: `topic_07_source_progress_synced`
completed_topics: `6 / 22`

## Topic 06 final result

Topic 06「275kVを受ける新幹線変電所の中身」は `PASS / completed`。固定5過去問は制作前・完成後とも `5 / 5問 PASS`、一次 `20 / 20小問`、二次 `3 / 3設問`、教材外補完・固定範囲外追加は0件。必須成果物・PDF/PPTX表示QA・source進捗整合もPASS済み。

## Topic 07 固定範囲

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` を正本として次の10項目を固定する。

- 三相交流
- 単相負荷
- 相変換
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線
- 三相側不平衡
- 逆相電流
- フェーザ図
- 結線比較

V結線、一般配電方式、％インピーダンス、単位法、ATき電、線路電圧降下、対称座標法による定量解析、短絡計算、保護協調は追加しない。

## Topic 07 EXAM_ALIGNMENT / 制作前独立検証

正式固定:
1. 平成23年度 第二種一次「理論」問6
   - `5 / 5空欄 PASS`
2. 平成23年度 第二種二次「機械・制御」問2
   - `7 / 7答案要素 PASS`

合計 `2 / 2問 PASS`、`12 / 12答案要素 PASS`。固定範囲外知識補完・後続Topic知識依存・未確認実設備値依存はいずれも0件。

## Topic 07 成果物

- `topics/07_feeding_transformer/07_feeding_transformer.md`
- `topics/07_feeding_transformer/07_feeding_transformer_explanation.pdf`
- `topics/07_feeding_transformer/07_feeding_transformer_practice.md`
- `topics/07_feeding_transformer/07_feeding_transformer_practice.pdf`
- `topics/07_feeding_transformer/07_feeding_transformer_images.pptx`
- `topics/07_feeding_transformer/07_feeding_transformer_powerpoint_qa.md`
- `topics/07_feeding_transformer/07_feeding_transformer_independent_reanswer.md`
- `topics/07_feeding_transformer/07_feeding_transformer_final_qa.md`

QA:
- 解説PDF: A4縦6ページ、表示 `6 / 6 PASS`、文字抽出PASS
- 練習: 15問、一次型 `10 / 10 PASS`、二次記述 `5 / 5 PASS`
- 練習PDF: A4縦6ページ、表示 `6 / 6 PASS`、文字抽出PASS
- PowerPoint: 16:9・5枚、表示 `5 / 5 PASS`、overflow 0件、ZIP整合性PASS
- 完成後独立再解答: `2 / 2問 PASS`、`12 / 12答案要素 PASS`
- 固定10項目: `10 / 10`
- 固定範囲外追加: `0件`
- 未確認実設備値追加: `0件`

## 今回進めた1段階

前回最終QAで唯一FAILだった主sourceの進捗記録不整合を解消した。

`topics/07_feeding_transformer/07_feeding_transformer.md` について、次だけを実成果物へ同期した。

- 更新日
- 冒頭 `状態`
- 冒頭の工程説明
- 末尾 `現在地`

教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、練習問題、PDF/PPTX、固定範囲は変更していない。

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [ ] Topic 07 source進捗同期完了 / 最終QA再実施待ち

## next_start

Topic 07の最終QAを再実施する。主source進捗整合、固定2過去問の完成後独立再解答 `2 / 2問・12 / 12答案要素 PASS`、必須成果物、PDF/PPTX QA、固定範囲境界を再確認し、全件PASSなら `completed` とする。