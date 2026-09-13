# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` とTopic 02 `なぜ新幹線は25,000Vなのか` は最終QAまでPASSし、`completed`。

- 完成数: `2 / 14`
- active topic: `03 架線はただの銅線ではない`
- current status: `topic_03_independent_reanswer_complete`

## 今回進捗

Topic 03を1段階進め、完成教材だけを根拠として選定済み公式過去問6問を独立再解答した。公式解答は独立解答確定後に照合した。

追加成果物:
- `topics/03_catenary_resistance/03_catenary_resistance_exam_recheck.md`
- `STATUS.md`
- `HANDOFF.md`

独立再解答結果:
1. 令和8年度上期 理論 問7 → `(4)` / 公式 `(4)`
2. 令和7年度下期 理論 問5 → `(1)` / 公式 `(1)`
3. 令和6年度下期 理論 問7 → `(4)` / 公式 `(4)`
4. 令和5年度上期 理論 問7 → `(3)` / 公式 `(3)`
5. 令和4年度下期 理論 問7 → `(2)` / 公式 `(2)`
6. 令和2年度 理論 問5 → `(4)` / 公式 `(4)`

- 公式解答との一致: `6 / 6`
- 教材外知識の補完が必要な問題: `0`
- SPEC範囲外の仕様追加: なし

判定: `INDEPENDENT_REANSWER_COMPLETE / IN_PROGRESS`

## Topic 03 EXAM_ALIGNMENT

系列SPEC固定範囲:
- 抵抗率・導電率
- 長さ・断面積・電線抵抗
- 直列・並列接続
- 温度係数・温度と抵抗
- 電圧降下・発熱

選定済み公式過去問:
1. 令和8年度上期 理論 問7 — 2抵抗の並列接続と未知抵抗の式変形
2. 令和7年度下期 理論 問5 — 直列＋並列抵抗と消費電力比較
3. 令和6年度下期 理論 問7 — 合成抵抗から未知抵抗を逆算
4. 令和5年度上期 理論 問7 — 抵抗温度係数と一定電圧時の電流変化
5. 令和4年度下期 理論 問7 — 温度係数＋並列合成抵抗の変化率
6. 令和2年度 理論 問5 — `R=ρl/S` による複数電線の抵抗比較

練習問題対応:
- R8上 問7 → Q6, Q14
- R7下 問5 → Q7, Q8, Q13
- R6下 問7 → Q14
- R5上 問7 → Q9, Q10, Q15
- R4下 問7 → Q11
- R2 問5 → Q1, Q2, Q5, Q12, Q13, Q15

既存成果物:
- source Markdown: `topics/03_catenary_resistance/03_catenary_resistance.md`
- 解説PDF: `topics/03_catenary_resistance/03_catenary_resistance_explanation.pdf`
- 練習source: `topics/03_catenary_resistance/03_catenary_resistance_practice.md`
- 練習PDF: `topics/03_catenary_resistance/03_catenary_resistance_practice.pdf`
- 解説画像PowerPoint: `topics/03_catenary_resistance/03_catenary_resistance_images.pptx`
- 独立再解答記録: `topics/03_catenary_resistance/03_catenary_resistance_exam_recheck.md`

## 境界確認

Topic 03へ追加しないもの:
- キルヒホッフ第1・第2法則
- 枝電流法
- 重ね合わせ
- テブナン・ノートン
- 最大電力供給
- 正弦波・実効値
- RLC・インピーダンス

未確認の新幹線架線材質・断面積・抵抗値・温度を実車値として置かない。架線の張力・摩耗・機械強度・高速集電性能は、材料選定に電気抵抗以外の条件もあることを示す範囲に留める。

## 次に行うこと

Topic 03の最終QAを実施する。

確認対象:
- EXAM_ALIGNMENTの6問がすべて教材内で根拠説明されていること
- 独立再解答記録が公式解答6 / 6一致であること
- 解説PDF・練習PDF・PowerPoint・source Markdownが相互に範囲矛盾していないこと
- 未確認実車値を真値として扱っていないこと
- SPEC外の後続Topic論点を追加していないこと
- 全成果物がGitHub正本に存在すること

最終QAをPASSした場合のみTopic 03を `completed` とし、完成数を `3 / 14` に更新してTopic 04へ進む。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
