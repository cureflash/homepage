# STATUS - 新幹線車両・電験二種

更新日: 2026-09-12

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 0 / 39
- current_status: `topic_01_explanation_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 0系① 主変圧器の等価回路`
- next_start: Topic 01の練習PDF（解答・完全解説付き）を作成する。一次試験型に加え、二次試験に接続する記述式を含め、換算側・成立条件・途中式・単位を採点可能な形で示す

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次・二次合わせて6問選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 解説本文
- [x] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `0系① 主変圧器の等価回路` の解説PDFを作成した。

成果物:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf`

source Markdownの解説本文を基に、7ページの解説プリントへ反映した。換算側・成立条件・単位を明示し、無負荷/短絡試験、`%Z/%r/%x`、遅れ/進み力率の電圧変動率、鉄損・銅損・負荷率・効率、3段階例題、0系への接続、6問の過去問対応を収録した。

0系実車値は確認済みの `交流60 Hz 25 kV`、`主変圧器容量1650 kVA`、`低圧タップ切換`、`25段` のみに限定し、`66 A` は公開値からの計算値と明記した。未確認の等価回路定数、%インピーダンス、鉄損・銅損を実値扱いしていない。

PDFは7ページすべてを画像レンダリングして確認し、文字欠け・黒四角・クリッピング・重なりがないことを確認した。

## 判定
Topic 01 は解説PDFまで完了したが、まだ `completed` ではない。練習PDF・PowerPoint、完成後の教材のみでの公式過去問独立再解答、最終QA PASSが残っている。
