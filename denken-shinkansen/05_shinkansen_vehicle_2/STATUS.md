# STATUS - 新幹線車両・電験二種

更新日: 2026-09-12

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 0 / 39
- current_status: `topic_01_practice_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 0系① 主変圧器の等価回路`
- next_start: Topic 01の解説画像PowerPointを作成する。解説本文・解説PDF・練習PDFの論点を欠落させず、一次・二次の試験対応に必要な式・換算側・成立条件・解法手順を図解する

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
- [x] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `0系① 主変圧器の等価回路` の練習PDFを作成した。

成果物:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf`

一次試験型の五肢択一8問と、二次試験へ接続する記述式4問の計12問を収録した。一次・二次換算、無負荷試験、短絡試験、`%Z/%r/%x`、遅れ/進み力率の電圧変動率、鉄損・銅損、規約効率、最大効率条件を、選定済み公式過去問6問から逆算した要求事項に対応させた。

二次記述型では、換算側・成立条件・途中式・単位・近似条件を答案として明示できる形にし、短絡試験を定格電流以外で行った場合の銅損換算も含めた。問題は過去問本文の複製ではなく、教材用の独自数値・独自設問で構成した。

PDFは4ページすべてを画像レンダリングして確認し、PDFium / pdftoppmの両方で文字欠け・黒四角・クリッピング・重なりがないことを確認した。全数値問題は独立計算で再確認済み。

## 判定
Topic 01 は練習PDFまで完了したが、まだ `completed` ではない。PowerPoint、完成後の教材のみでの公式過去問6問の独立再解答、最終QA PASSが残っている。
