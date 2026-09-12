# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-12

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_explanation_pdf_complete`
- last_completed_topic: `none`
- active_topic: `01 0系の主変圧器を等価回路で解剖する`
- next_start: Topic 01のsource Markdownを基に練習PDF（解答・完全解説付き）を作成する

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
Topic 01の解説PDF `topics/01_0series_transformer_equivalent_circuit/01_0series_transformer_equivalent_circuit_explanation.pdf` を作成した。

A4縦6ページ。source Markdownの解説本文に従い、一次・二次換算、簡易等価回路、無負荷試験・短絡試験、`%Z/%r/%x`、フェーザ図と電圧変動率、鉄損・銅損・規約効率・最大効率、並列運転の基本、3段階例題、0系への接続、頻出ミス、選定過去問対応表、公式・解法まとめを収録した。

0系固有の等価回路定数、百分率インピーダンス、鉄損・銅損等は一次資料で未確認のため実値として追加していない。例題値は教材用の仮定値のままとした。

PDFは全6ページを160 dpiでレンダリングし、文字欠け・重なり・クリッピングがないことを目視確認した。

## 判定
Topic 01 は解説PDFまで完了したが、まだ `completed` ではない。次工程は練習PDF作成。PowerPoint作成後、教材だけで選定6問を独立再解答し、最終QA PASSするまで完成数へ加算しない。
