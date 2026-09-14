# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない`、Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` は最終QAまでPASSし、`completed`。

Topic 05 `パンタグラフから入った電気はどこへ行く？` は完成後独立再解答まで完了。

- 完成数: `4 / 14`
- active topic: `05 パンタグラフから入った電気はどこへ行く？`
- current status: `topic_05_exam_reanswer_complete`
- source: `topics/05_dc_network/05_dc_network.md`
- explanation PDF: `topics/05_dc_network/05_dc_network_explanation.pdf`
- practice source: `topics/05_dc_network/05_dc_network_practice.md`
- practice PDF: `topics/05_dc_network/05_dc_network_practice.pdf`
- images PowerPoint: `topics/05_dc_network/05_dc_network_images.pptx`
- independent reanswer: `topics/05_dc_network/05_dc_network_exam_recheck.md`

## 今回進捗

完成済み教材を変更せず、Topic 05の選定6過去問を公式解答を見る前に独立再解答した。その後、電気技術者試験センター公式解答と照合した。

独立再解答:
1. 令和8年度上期 理論 問5 → `(5)`
2. 令和8年度上期 理論 問7 → `(4)`
3. 令和7年度下期 理論 問5 → `(1)`
4. 令和6年度上期 理論 問5 → `(1)`
5. 令和6年度上期 理論 問7 → `(3)`
6. 令和6年度下期 理論 問6 → `(4)`

公式解答も `(5), (4), (1), (1), (3), (4)` で、`6 / 6 PASS`。

- 教材だけで必要公式を選択: PASS
- 教材だけで途中式を構成: PASS
- 教材だけで選択肢を確定: PASS
- 教材外知識補完: 0問
- 固定範囲外・後続Topic知識の追加: なし

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

Topic 05の最終QAを実施する。必須成果物、EXAM_ALIGNMENT、完成後独立再解答 `6 / 6 PASS`、表示QA、SPEC境界、source・STATUS・HANDOFFの進捗記録整合性を確認し、全件PASSの場合のみ `completed` とする。不整合があれば内容を勝手に拡張せず `NEEDS_REVISION` として記録する。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
