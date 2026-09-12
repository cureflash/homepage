# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-12

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 0 / 21
- current_status: `topic_01_powerpoint_complete`
- last_completed_topic: `none`
- active_topic: `01 25kV架線を一つの等価回路にする`
- next_start: Topic 01の必須成果物だけを使い、選定7問（R8問3、R7問5、R6問3、R5問3・問4、R4問3、R3問3）を保存済み正答を見ずに独立再解答する

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
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `25kV架線を一つの等価回路にする` の解説画像PowerPointを作成し、GitHub正本へ追加した。

成果物:
`topics/01_catenary_equivalent_circuit/01_catenary_equivalent_circuit_images.pptx`

PowerPointは16:9・4枚で、解説本文・解説PDF・練習PDFの論点を図解した。

収録範囲:
- 教育用の新幹線き電等価回路と `Vth-Zth-負荷`
- KCL / KVL、節点法・閉路法の解法手順
- 重ね合わせの理と独立電源の零化
- テブナン／ノートン等価、電源変換
- 制御電源を含む場合の試験電源法との区別
- 相反定理
- 交流テブナン、複素インピーダンス、有効電力
- 直流最大電力伝送と交流共役整合
- 選定7問への過去問マッピング

実在のATき電回路そのものを単純な `Vth-Zth` 回路と同一視せず、教育用簡略モデルであることを明示した。`MASTER_SPEC.md` の規定どおり、`08 理論・二種` は一次理論中心であるため二次問題を数合わせで追加していない。

PowerPointはLibreOfficeでPDF化し、全4枚を180 dpiでレンダリングして文字欠け・クリッピング・重なりを確認した。`slides_test.py` のキャンバス外描画検査もPASSした。

## 判定
Topic 01 は必須成果物まで完了したが、まだ `completed` ではない。教材のみでの公式過去問独立再解答と最終QA PASSを通過するまで完成数へ加算しない。
