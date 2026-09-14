# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない`、Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？`、Topic 05 `パンタグラフから入った電気はどこへ行く？` は最終QAまでPASSし、`completed`。

次はTopic 06 `0系の変圧器は何をしていた？` の制作前EXAM_ALIGNMENT。

- 完成数: `5 / 14`
- last completed: `05 パンタグラフから入った電気はどこへ行く？`
- active topic: `06 0系の変圧器は何をしていた？`
- current status: `topic_05_completed`
- Topic 05 source: `topics/05_dc_network/05_dc_network.md`
- Topic 05 explanation PDF: `topics/05_dc_network/05_dc_network_explanation.pdf`
- Topic 05 practice source: `topics/05_dc_network/05_dc_network_practice.md`
- Topic 05 practice PDF: `topics/05_dc_network/05_dc_network_practice.pdf`
- Topic 05 images PowerPoint: `topics/05_dc_network/05_dc_network_images.pptx`
- Topic 05 independent reanswer: `topics/05_dc_network/05_dc_network_exam_recheck.md`
- Topic 05 final QA: `topics/05_dc_network/05_dc_network_final_qa.md`

## 今回進捗

Topic 05の最終QAを再実施し、前回唯一のFAIL要因だったsource進捗記録不整合が解消されていることを確認した。

最終確認:
- 必須成果物: PASS
- 選定6過去問のEXAM_ALIGNMENT・教材内マッピング: PASS
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識補完: `0問`
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- SPEC境界: PASS
- source / STATUS / HANDOFF の進捗整合性: PASS

教材本文の技術内容、EXAM_ALIGNMENT 6問、数式、3段階例題、PDF/PPTX成果物、SPEC固定範囲へ新しい仕様・論点は追加していない。

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
- Topic 06以降の磁気、電磁誘導、交流、RLC、力率、三相、半導体、PWMをTopic 05の完成ゲートへ混在させない。
- 未確認の実車値を真値として置かない。

## 次に行うこと

Topic 06 `0系の変圧器は何をしていた？` の制作前EXAM_ALIGNMENTを行う。

系列SPEC上の固定範囲:
- 電流と磁界
- アンペアの法則の基本
- 磁束
- 磁束密度
- 透磁率
- 起磁力
- 磁気抵抗
- 磁気回路
- 電磁誘導
- ファラデーの法則
- レンツの法則
- 自己誘導
- 相互誘導
- インダクタンス
- 磁気エネルギー

まず公式理論過去問を直近年度から調査し、この固定範囲だけで完答できる関連問題を原則5問以上選定する。要求知識・使用式・設問型・教材内必要説明・境界をsource Markdownへ固定し、制作前独立検証を通すまで本文制作へ進まない。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
