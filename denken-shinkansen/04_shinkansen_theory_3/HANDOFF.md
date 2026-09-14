# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない`、Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` は最終QAまでPASSし、`completed`。

Topic 05 `パンタグラフから入った電気はどこへ行く？` は最終QAを実施したが、source Markdownの進捗記録不整合により `NEEDS_REVISION`。

- 完成数: `4 / 14`
- active topic: `05 パンタグラフから入った電気はどこへ行く？`
- current status: `topic_05_final_qa_needs_revision`
- source: `topics/05_dc_network/05_dc_network.md`
- explanation PDF: `topics/05_dc_network/05_dc_network_explanation.pdf`
- practice source: `topics/05_dc_network/05_dc_network_practice.md`
- practice PDF: `topics/05_dc_network/05_dc_network_practice.pdf`
- images PowerPoint: `topics/05_dc_network/05_dc_network_images.pptx`
- independent reanswer: `topics/05_dc_network/05_dc_network_exam_recheck.md`
- final QA: `topics/05_dc_network/05_dc_network_final_qa.md`

## 今回進捗

Topic 05の最終QAを実施した。

PASS:
- 必須成果物6点の実在
- EXAM_ALIGNMENT 6問
- 完成後独立再解答 `6 / 6`
- 教材外知識補完 `0問`
- 解説PDF・練習PDF・PowerPointの制作時表示QA
- SPEC境界

FAIL:
- `05_dc_network.md` 冒頭が `status: EXPLANATION_SOURCE_COMPLETE` のまま
- 冒頭説明が解説PDF・練習PDF・PowerPoint・完成後独立再解答を未実施と記録したまま
- 末尾 `次工程` が「解説PDFを作成する」のまま

教材内容・数式・過去問選定・成果物には今回変更を加えていない。

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

教材本文・EXAM_ALIGNMENT・数式・成果物は変更せず、`05_dc_network.md` の進捗記録だけをGitHub正本の現在地へ同期する。

具体的には、冒頭を「完成後独立再解答まで完了・最終QAは進捗記録不整合によりNEEDS_REVISION」と整合させ、末尾 `次工程` を「進捗記録同期後に最終QAを再実施」へ更新する。その後に最終QAを再実施し、全件PASSの場合のみ `completed` とする。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
