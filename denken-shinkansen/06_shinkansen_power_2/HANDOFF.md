# HANDOFF

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
current_status: `topic_13_explanation_pdf_complete`

## 今回完了

Topic 13「単相の新幹線負荷は三相系統を乱さない？」の解説PDFとPDF QAを制作した。

正式品質ゲートは既存の2問8答案要素を維持した。
- 平成28年度 第二種一次「法規」問6 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — `3答案要素`

制作前blind独立再解答のベースラインも維持する。
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

解説PDFはA4縦4ページ。200 dpiで全ページをレンダリングし `4 / 4 PASS`、`pdftotext -layout` の文字抽出もPASS、U+FFFDは0件。3段階例題はsourceとは別計算で再計算し `3 / 3 PASS`。

PDFでは、三相不平衡、正相・逆相・零相、`a` 演算子、対称座標変換、単相線間負荷による逆相、電圧不平衡率、同期機への逆相影響、相振り分け・き電用変圧器・強い上位系統による緩和を固定範囲内で収録した。

制作前再解答で不足したH23二次問4の2答案要素について、二つの単相負荷を同一にする最大条件、Ta/Tbの回路電流差、フェーザ合成、`P1,max = Sb - Sa cos30°`、設備利用率までをPDFへ明示した。正式2問8答案要素のPDF説明マッピングは `8 / 8`、改善説明は `2 / 2`。

この段階では説明箇所の存在とPDF品質を確認しただけであり、完成後blind独立再解答は未実施。Topic 13は `IN_PROGRESS` のままで、完成数は `12 / 22`。

品質境界:
- 正式過去問追加: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation_pdf_qa.md`

## 現在地

Topic 01〜12: `completed`。

完成数: `12 / 22`。

active topic: Topic 13「単相の新幹線負荷は三相系統を乱さない？」。

## 次に行う

Topic 13の練習問題・完全解説sourceを制作する。固定2問8答案要素と制作前不足2要素の改善説明を維持し、一次試験型に加えて二次試験へ接続する記述式問題を含める。Topic 14以降・Topic 16故障計算は先取りしない。
