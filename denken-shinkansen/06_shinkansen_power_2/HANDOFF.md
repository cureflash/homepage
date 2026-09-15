# HANDOFF

updated: 2026-09-16
series: `06_shinkansen_power_2`
active_topic: `07`
current_status: `topic_07_source_progress_synced`

## 今回完了

Topic 07「三相電力をどう25kVの単相へ変える？」を1段階進め、前回最終QAで唯一FAILだった主sourceの進捗記録不整合を解消した。

対象:
- `topics/07_feeding_transformer/07_feeding_transformer.md`

同期した箇所:
- 更新日
- 冒頭 `状態`
- 冒頭の工程説明
- 末尾 `現在地`

教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、練習問題、PDF/PPTX、固定範囲は変更していない。

## 固定した公式過去問

1. 平成23年度 第二種一次「理論」問6
   - 対称三相交流の複素フェーザ
   - 相間電流、電流フェーザ合成、実効値
   - 完成後再解答 `5 / 5空欄 PASS`
2. 平成23年度 第二種二次「機械・制御」問2
   - スコット結線
   - 主座/T座巻数比
   - 一次三相電流
   - 巻線容量
   - 結線利用率
   - 完成後再解答 `7 / 7答案要素 PASS`

合計 `2 / 2問 PASS`、`12 / 12答案要素 PASS`。教材外知識補完・固定範囲外追加・後続Topic知識依存はいずれも0件。

## 現在の必須成果物

- `topics/07_feeding_transformer/07_feeding_transformer.md`
- `topics/07_feeding_transformer/07_feeding_transformer_explanation.pdf`
- `topics/07_feeding_transformer/07_feeding_transformer_practice.md`
- `topics/07_feeding_transformer/07_feeding_transformer_practice.pdf`
- `topics/07_feeding_transformer/07_feeding_transformer_images.pptx`
- `topics/07_feeding_transformer/07_feeding_transformer_powerpoint_qa.md`
- `topics/07_feeding_transformer/07_feeding_transformer_independent_reanswer.md`
- `topics/07_feeding_transformer/07_feeding_transformer_final_qa.md`

既存QA:
- 解説PDF: A4縦6ページ、表示 `6 / 6 PASS`、文字抽出PASS
- 練習15問: 一次型 `10 / 10 PASS`、二次記述 `5 / 5 PASS`
- 練習PDF: A4縦6ページ、表示 `6 / 6 PASS`、文字抽出PASS
- PowerPoint: 16:9・5枚、表示 `5 / 5 PASS`、overflow 0件、ZIP整合性PASS
- 完成後独立再解答: `2 / 2問 PASS`、`12 / 12答案要素 PASS`
- 固定10項目: `10 / 10`
- 未確認実設備値追加: `0件`

## 境界

Topic 07固定範囲は、三相交流、単相負荷、相変換、スコット、変形ウッドブリッジ、ルーフ・デルタ、三相側不平衡、逆相電流、フェーザ図、結線比較。

次を件数合わせ・補強目的で追加しない。
- V結線
- 一般配電方式
- ％インピーダンス、単位法
- ATき電
- 線路電圧降下
- 対称座標法による一般解析
- 短絡計算
- 保護協調

変形ウッドブリッジ、ルーフ・デルタは構成比較まで。三相側不平衡・逆相は意味と発生条件までとし、対称座標法による定量解析はTopic 13へ送る。

## 原則5問未満の扱い

現行公式アーカイブと年度別索引を照合し、固定範囲だけで問題全体を完答可能と確定できる一次・二次問題を上記2問に限定した。平成15年度一次「機械」問2のスコット結線直接出題は索引で確認できるが、現行公式アーカイブ外で公式本文・公式解答を再確認できないため正式ゲートには数えない。

固定範囲外問題で5問へ水増ししない。

## 次に行う

Topic 07の最終QAを再実施する。

確認対象:
- 主sourceの進捗記録が実成果物と整合していること
- 固定2過去問の完成後独立再解答 `2 / 2問 PASS`、`12 / 12答案要素 PASS`
- 教材外補完0件
- 必須成果物が全件存在
- PDF/PPTX QAがPASS
- 固定10項目・固定範囲境界が維持されていること

全件PASSなら `PASS / completed` とし、完成数を `7 / 22` へ進める。