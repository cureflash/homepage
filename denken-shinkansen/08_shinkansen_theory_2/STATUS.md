# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-12

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 0 / 21
- current_status: `topic_01_explanation_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 25kV架線を一つの等価回路にする`
- next_start: Topic 01の練習PDF（解答・完全解説付き）を作成する。一次試験型を中心に、本文13節と選定7問の要求事項へ接続し、表示確認後にPowerPointへ進む

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次理論から7問選定
- [x] `08 理論・二種` は一次理論中心であり二次問題を無理に付けない上位仕様を確認
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
Topic 01 `25kV架線を一つの等価回路にする` の解説PDFを作成し、GitHub正本へ追加した。

成果物:
`topics/01_catenary_equivalent_circuit/01_catenary_equivalent_circuit_explanation.pdf`

PDFはsource Markdownの解説本文を正本として、次を維持した。

- 本文13節
- 基礎例題: 節点法とKCL
- 本試験標準例題: テブナン／ノートン等価
- 複合・ひっかけ例題: 交流テブナンと共役整合
- R8〜R3の選定7問との対応表
- KCL/KVL、節点法・閉路法、重ね合わせ、電源変換、テブナン／ノートン、相反定理、二端子回路、交流回路、最大電力伝送
- 制御電源を含む場合の試験電源法との区別
- 新幹線き電系統を `Vth-Zth-列車負荷` とする教育用抽象モデルと、実設備を同一視しない注意

PDFはA4縦5ページ。全5ページを画像レンダリングして表示確認し、本文・表・数式にクリッピング、重なり、黒四角、欠落がないことを確認した。

`MASTER_SPEC.md` の規定どおり、`08 理論・二種` は一次理論中心であり、二次試験に独立した理論科目はないため、二次問題を数合わせで追加していない。

## 判定
Topic 01 は解説PDFまで完了したが、まだ `completed` ではない。練習PDF・PowerPointを作成し、教材のみでの公式過去問独立再解答と最終QA PASSを通過するまで完成数へ加算しない。
