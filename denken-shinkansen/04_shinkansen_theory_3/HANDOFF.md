# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない`、Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` は最終QAまでPASSし、`completed`。

Topic 05 `パンタグラフから入った電気はどこへ行く？` は解説画像PowerPointまで完了。

- 完成数: `4 / 14`
- active topic: `05 パンタグラフから入った電気はどこへ行く？`
- current status: `topic_05_powerpoint_complete`
- source: `topics/05_dc_network/05_dc_network.md`
- explanation PDF: `topics/05_dc_network/05_dc_network_explanation.pdf`
- practice source: `topics/05_dc_network/05_dc_network_practice.md`
- practice PDF: `topics/05_dc_network/05_dc_network_practice.pdf`
- images PowerPoint: `topics/05_dc_network/05_dc_network_images.pptx`

## 今回進捗

確定済みEXAM_ALIGNMENT、完成済みsource・解説PDF・練習問題source・練習PDFを変更せず、Topic 05の解説画像PowerPointを完成した。

成果物:
- 16:9、3スライド
- 直列・並列・分圧・分流、KCL/KVL・枝電流法、重ね合わせ、テブナン・ノートン、負荷電力・最大電力を選定6過去問へ接続
- 新幹線側の計算回路は「教育用等価回路」と明示
- 実車内部配線・保護回路・主回路定数の推測なし
- Topic 06以降の磁気・電磁誘導・交流・RLC・力率・三相・半導体・PWMの追加なし
- LibreOffice全3スライド表示QA PASS
- PPTX ZIP整合性検査PASS

ゲート対象公式過去問:
1. 令和8年度上期 理論 問5 — 同一電池の並列、内部抵抗合成、負荷電力
2. 令和8年度上期 理論 問7 — 並列回路、KCL、未知抵抗の文字式
3. 令和7年度下期 理論 問5 — 直並列合成、枝電圧、消費電力比較
4. 令和6年度上期 理論 問5 — テブナン等価回路、負荷電力
5. 令和6年度上期 理論 問7 — 等価抵抗、最大電力供給条件
6. 令和6年度下期 理論 問6 — 複数電源、KCL/KVL、枝電流

練習問題対応:
- R8上 問5 → Q9, Q15
- R8上 問7 → Q4, Q5, Q7
- R7下 問5 → Q2, Q3, Q8
- R6上 問5 → Q12, Q14
- R6上 問7 → Q14, Q15
- R6下 問6 → Q6, Q10, Q11, Q14

完成後独立再解答は未実施。

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

Topic 05の完成済みsource、解説PDF、練習問題source・練習PDF、解説画像PowerPointを変更せず、選定6過去問を完成教材だけで独立再解答する。保存済み正答は先に見ず、教材外知識補完が必要な設問があればFAILとして記録する。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
