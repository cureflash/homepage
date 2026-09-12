# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-12

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 0 / 21
- current_status: `topic_01_practice_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 25kV架線を一つの等価回路にする`
- next_start: Topic 01の解説画像PowerPointを作成する。解説本文・解説PDF・練習PDFの論点を欠落させず、選定7問に必要な回路網定理・解法手順・交流等価回路・最大電力条件を図解する

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
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `25kV架線を一つの等価回路にする` の練習PDFを作成し、GitHub正本へ追加した。

成果物:
`topics/01_catenary_equivalent_circuit/01_catenary_equivalent_circuit_practice.pdf`

練習PDFは電験二種一次「理論」型の五肢択一12問と、各問の完全解説で構成した。

収録範囲:
- KCL・節点法
- KVL・閉路法
- 重ね合わせの理
- 電圧源・電流源の等価変換
- テブナン等価
- 制御電源を含む場合の試験電源法
- 平衡ブリッジ
- 相反定理
- T形二端子対抵抗回路
- 交流テブナン・複素インピーダンス・有効電力
- 直流最大電力伝送
- 交流共役整合

R8〜R3の選定7問の要求事項へ対応させ、過去問本文は複製せず独自問題・独自数値で構成した。

`MASTER_SPEC.md` の規定どおり、`08 理論・二種` は一次理論中心であるため、二次試験形式を数合わせで追加していない。

全12問は独立再計算し一意解を確認した。PDFはA4縦5ページ。PDFium / pdftoppmの両方で全5ページを180 dpiレンダリングし、文字欠け・黒四角・クリッピング・重なりがないことを確認した。

## 判定
Topic 01 は練習PDFまで完了したが、まだ `completed` ではない。PowerPointを作成し、教材のみでの公式過去問独立再解答と最終QA PASSを通過するまで完成数へ加算しない。
