# HANDOFF

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
current_status: `topic_13_practice_source_complete`

## 今回完了

Topic 13「単相の新幹線負荷は三相系統を乱さない？」の練習問題・完全解説sourceを制作した。

正式品質ゲートは既存の2問8答案要素を変更していない。
- 平成28年度 第二種一次「法規」問6 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — `3答案要素`

制作前blind独立再解答のベースラインも維持する。
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

練習sourceは全15問。基礎4問、本試験標準8問、複合・応用3問で、二種一次型五肢択一10問＋二種二次型記述5問とした。全問に途中式・理由・検算を含む完全解説を付した。

正式2問8答案要素の練習カバレッジは `8 / 8`。H28一次の不平衡原因、交流式電気鉄道、電圧不平衡率、逆相の同期機影響、強い上位系統を演習化し、H23二次の最大三相平衡負荷、単相負荷合計、変圧器利用率を問14で再訓練する。

制作前に不足したH23二次問4の2答案要素について、異容量V結線のTa/Tb電流分担、`cos30°` のフェーザ投影、単相負荷合計、利用率を同型の仮定値問題で再演習できる形にした。対称座標変換、逆変換、零相条件、相振り分けもTopic 13固定範囲内で演習化した。

主要数値はsource作成とは別計算で再計算し一致した。
- 問3: `69.282 A`
- 問7/12: `|Ib| = 72.111 A`、三相電流和 `0`
- 問8: `(|V0|,|V1|,|V2|)=(10,80,10) V`
- 問11: `86.603 A`
- 問13: `2.00 %`
- 問14: `69.282 kW`, `35.359 kW`, `95.128 %`
- 問15: 正相 `173.205 A`、逆相 `0 A`

この段階では練習sourceだけを完成させた。練習PDF、PowerPoint、完成後blind独立再解答、最終QAは未実施。Topic 13は `IN_PROGRESS` のままで、完成数は `12 / 22`。

品質境界:
- 正式過去問追加: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.md`

## 現在地

Topic 01〜12: `completed`。

完成数: `12 / 22`。

active topic: Topic 13「単相の新幹線負荷は三相系統を乱さない？」。

## 次に行う

Topic 13の練習PDFを制作し、全ページ表示QA・文字抽出QA・全15問の数値/論理再確認を行う。固定2問8答案要素と制作前不足2要素の改善説明を維持し、Topic 14以降・Topic 16故障計算は先取りしない。
