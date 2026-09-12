# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-12

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_practice_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 0系の主変圧器を等価回路で解剖する`
- next_start: Topic 01の解説画像PowerPointを作成する。source Markdown・解説PDF・練習PDFの論点を欠落させず、一次・二次の試験対応に必要な式・換算側・成立条件・解法手順を図解する

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
Topic 01の練習PDF `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_practice.pdf` を作成した。

一次試験型の五肢択一8問と、二次試験へ接続する記述式4問の計12問を収録した。一次・二次換算、無負荷試験、短絡試験、`%Z/%r/%x`、遅れ/進み力率の電圧変動率、鉄損・銅損、規約効率、最大効率条件、並列運転を、選定済み公式過去問6問から逆算した要求事項に対応させた。

二次記述型では、換算側、無負荷・短絡試験の成立条件、途中式、単位、近似条件を答案として示す形にした。定格電流以外で短絡試験を行った場合の全負荷銅損換算、百分率値からオーム値への換算、電圧変動率の二次項、並列運転の負荷分担も扱う。問題は公式過去問本文・図・数値の複製ではなく、教材用の独自設問で構成した。

全数値問題は独立計算で再確認した。PDFはA4縦5ページを180 dpiで全ページレンダリングし、PDFium / pdftoppmの両方で文字欠け、黒四角、重なり、クリッピングがないことを確認した。

## 判定
Topic 01 は練習PDFまで完了したが、まだ `completed` ではない。次工程は解説画像PowerPoint作成。PowerPoint作成後、教材だけで選定6問を独立再解答し、最終QA PASSするまで完成数へ加算しない。
