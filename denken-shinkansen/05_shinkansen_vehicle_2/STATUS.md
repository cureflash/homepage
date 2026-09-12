# STATUS - 新幹線車両・電験二種

更新日: 2026-09-12

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 0 / 39
- current_status: `topic_01_powerpoint_complete`
- last_completed_topic: `none`
- active_topic: `01 0系① 主変圧器の等価回路`
- next_start: Topic 01の選定済み公式過去問6問を、保存済み正答を見ず、完成教材（解説PDF・練習PDF・PowerPoint・source Markdown）のみで独立再解答する。一次1問・二次記述5問について公式解答と照合し、教材外知識で補っていないことを確認する

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
Topic 01 `0系① 主変圧器の等価回路` の解説画像PowerPointを作成した。

成果物:
`topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_images.pptx`

16:9・4枚。解説本文・解説PDF・練習PDFの論点をもとに、一次・二次試験で必要な巻数比と一次/二次換算、一次換算簡易等価回路、無負荷試験・短絡試験の成立条件、`%Z/%r/%x` と基準量、遅れ/進み力率の電圧変動率、鉄損・銅損・規約効率・最大効率条件、本試験標準の解法手順を整理した。一次の選択肢判断と二次記述の途中式・換算側・成立条件・単位を同じ流れで確認できる構成とした。

0系への接続では、既存の一次資料確認済みである25 kV・60 Hz・1650 kVA・低圧タップ切換・25段だけを実車情報として扱い、`1650 kVA / 25 kV = 66 A` は計算値と明示した。未確認の `R, X, g0, b0, %Z`、鉄損・銅損を実値化していない。

全4枚を画像レンダリングして目視確認し、`slides_test.py` でもoverflowなしを確認した。

## 判定
Topic 01 はPowerPointまで完了したが、まだ `completed` ではない。選定済み公式過去問6問の完成教材だけでの独立再解答と最終QA PASSが残っている。
