# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` とTopic 02 `なぜ新幹線は25,000Vなのか` は最終QAまでPASSし、`completed`。

- 完成数: `2 / 14`
- active topic: `03 架線はただの銅線ではない`
- current status: `topic_03_powerpoint_complete`

## 今回進捗

Topic 03を1段階進め、確定済みEXAM_ALIGNMENT・解説本文・解説PDF・練習PDFを基準に解説画像PowerPointを完成した。

更新成果物:
- `topics/03_catenary_resistance/03_catenary_resistance_images.pptx`
- `STATUS.md`
- `HANDOFF.md`

PowerPoint仕様:
- 16:9、7枚
- 抵抗率・長さ・断面積、直列・並列、温度係数、発熱・消費電力・電圧降下、3段階例題、新幹線接続を可視化
- 新幹線接続値は既存sourceの教材用仮定値のみを使用
- 後続Topicのキルヒホッフ則、最大電力供給、正弦波、RLC等は追加していない

PowerPoint QA:
- 全7枚をレンダリングして表示確認
- 文字切れ・重なり・欠落なし
- overflow検査 PASS

判定: `POWERPOINT_COMPLETE / IN_PROGRESS`

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

Topic 03の完成教材だけを使って、選定済み公式過去問6問を独立再解答し、公式解答と照合する。

対象:
1. 令和8年度上期 理論 問7
2. 令和7年度下期 理論 問5
3. 令和6年度下期 理論 問7
4. 令和5年度上期 理論 問7
5. 令和4年度下期 理論 問7
6. 令和2年度 理論 問5

1問でも教材外知識を補わないと解けない場合、または根拠を教材内で説明できない場合は `NEEDS_REVISION`。独立再解答と最終QAを通過するまで `completed` としない。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
