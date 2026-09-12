# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_powerpoint_complete`
- last_completed_topic: `none`
- active_topic: `01 0系の主変圧器を等価回路で解剖する`
- next_start: Topic 01の選定6問を、保存済み正答を先に見ず、source Markdown・解説PDF・練習PDF・PowerPointだけで独立再解答する。公式選択、途中式、換算側、成立条件・近似条件、単位、根拠まで教材内で完結することを確認する

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
- [x] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01の解説画像PowerPoint `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx` を作成した。

16:9・4枚構成。source Markdown・解説PDF・練習PDFから、一次・二次換算、一次換算簡易等価回路、無負荷試験・短絡試験、`%Z/%r/%x`、遅れ/進み力率の電圧変動率、鉄損・銅損・規約効率・最大効率、並列運転、二次答案の解法フロー、0系主変圧器への接続を式と要点で整理した。

0系については一次資料確認済みの `25 kV / 60 Hz`、`1650 kVA`、低圧タップ切換、25段のみを公開値として示し、一次側定格相当電流 `66 A` は公開仕様からの計算値と明示した。0系固有の `R, X, g0, b0, %Z`、鉄損・銅損は未確認のため実値化していない。

外部図版は使用していない。最終スライドに公式過去問、参考教材、0系実車資料、内部正本をまとめた。

全4スライドをレンダリングして目視確認し、文字欠け・重なり・クリッピングなし。`slides_test.py` のcanvas overflow検査もPASSした。

## 判定
Topic 01 はPowerPointまで完了したが、まだ `completed` ではない。次工程は、選定済み一次1問＋二次記述5問を完成教材だけで独立再解答すること。独立再解答と最終QA PASSまでは完成数へ加算しない。
