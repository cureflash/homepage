# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-12

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_explanation_complete`
- last_completed_topic: `none`
- active_topic: `01 新幹線を電力系統から見てみる`
- next_start: Topic 01のsource Markdownを正本として、練習プリント用問題・完全解説を作成し、解説PDF・練習PDF・解説画像PowerPointの成果物化へ進む。Topic 08/12/16/20の本題へ範囲を広げない

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を全問範囲監査し、一次2問＋二次記述3問の計5問を正式選定
- [x] 二次試験の記述式問題を含めた
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う要求事項の独立検証
- [x] 要求事項を解説本文の節へマッピング
- [x] 解説本文（検証済み9節＋3段階例題）
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問5問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 正式な品質ゲート対象
- H29 一次 電力 問6
- R5 一次 電力 問4
- R4 二次 電力・管理 問3
- R5 二次 電力・管理 問4
- R6 二次 電力・管理 問4

## 今回進めた内容
Topic 01を1段階進め、検証済み本文節マッピングに従って解説本文をsource Markdownへ作成した。

本文では、フェーザ・複素電力、P/Q/Sと力率、三相基準量、p.u.・％法、基準変更、一線結線図からp.u.等価回路への変換、直列・並列合成、電圧・位相差とP/Q、電圧降下近似、短絡容量、二次試験の記述手順、新幹線系統モデルへの接続までを扱った。

MASTER_SPECの最低構成に合わせ、基礎・本試験標準・複合の3段階例題も追加した。例題値は教材用の設定値であり、未確認の実車値を実値扱いしていない。

範囲境界は維持し、Topic 08の変圧器固有の％Z・並列運転、Topic 12の本格的潮流計算、Topic 16の故障種別・対称座標法、Topic 20の安定度は先取りしていない。

## 判定
Topic 01 は `explanation_complete`。まだ `completed` ではない。必須PDF・PowerPointと練習問題を作成後、正式選定5問を教材だけで独立再解答し、最終QA PASSするまで完成数へ加算しない。
