# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない`、Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` は最終QAまでPASSし、`completed`。

Topic 05 `パンタグラフから入った電気はどこへ行く？` は、前回最終QAで唯一FAILだったsource Markdownの進捗記録不整合を解消済み。次は最終QA再実施。

- 完成数: `4 / 14`
- active topic: `05 パンタグラフから入った電気はどこへ行く？`
- current status: `topic_05_source_progress_synced`
- source: `topics/05_dc_network/05_dc_network.md`
- explanation PDF: `topics/05_dc_network/05_dc_network_explanation.pdf`
- practice source: `topics/05_dc_network/05_dc_network_practice.md`
- practice PDF: `topics/05_dc_network/05_dc_network_practice.pdf`
- images PowerPoint: `topics/05_dc_network/05_dc_network_images.pptx`
- independent reanswer: `topics/05_dc_network/05_dc_network_exam_recheck.md`
- final QA: `topics/05_dc_network/05_dc_network_final_qa.md`

## 今回進捗

`05_dc_network.md` の進捗記録のみをGitHub正本の現在地へ同期した。

同期箇所:
- 冒頭 `status`: `EXPLANATION_SOURCE_COMPLETE` → `PROGRESS_RECORD_SYNCED`
- 冒頭説明: 後続成果物未実施の記録を、全成果物＋完成後独立再解答完了へ更新
- 過去問対応節の進捗注記: 完成後独立再解答 `6 / 6 PASS`、教材外知識補完 `0問` を反映
- 末尾 `次工程`: 解説PDF作成 → 最終QA再実施

教材本文の技術内容、EXAM_ALIGNMENT 6問、数式、3段階例題、PDF/PPTX成果物、SPEC固定範囲は変更していない。

## Topic 05 固定範囲

- 直列回路
- 並列回路
- 合成抵抗
- 分圧
- 分流
- キルヒホッフ第1法則
- キルヒホッフ第2法則
- 枝電流法
- 重ね合わせの理
- テブナンの定理
- ノートンの定理の基本
- 最大電力供給の基本

必須関係式・判断:

```text
Rseries = R1 + R2 + ...
1/Rparallel = 1/R1 + 1/R2 + ...
V1 = R1/(R1+R2) V
I1 = R2/(R1+R2) I
ΣIin = ΣIout
ΣV = 0
Vth = 開放端子電圧
Rth = 独立電源を零にして端子から見た等価抵抗
RN = Rth
Vth = IN Rth
PL = Vth² RL / (Rth + RL)²
最大電力条件: RL = Rth
```

## Topic 05 境界確認

- 新幹線側の回路は必ず「教育用等価回路」と明記する。
- 実車の内部配線・保護回路・主回路定数を推測しない。
- Topic 06以降の磁気、電磁誘導、交流、RLC、力率、三相、半導体、PWMを完成ゲートへ混在させない。
- 未確認の実車値を真値として置かない。

## 次に行うこと

Topic 05の最終QAを再実施する。

確認対象:
- 必須成果物の実在
- EXAM_ALIGNMENT 6問と教材内マッピング
- 完成後独立再解答 `6 / 6 PASS` と教材外知識補完 `0問`
- 解説PDF・練習PDF・PowerPointの表示QA記録
- SPEC境界
- source / STATUS / HANDOFF の進捗記録整合性

全件PASSの場合のみTopic 05を `completed` とし、完成数を `5 / 14` へ進める。FAILがあれば内容を特定して `NEEDS_REVISION` のままとする。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
