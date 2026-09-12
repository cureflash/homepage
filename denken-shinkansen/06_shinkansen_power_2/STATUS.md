# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-12

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_source_content_complete`
- last_completed_topic: `none`
- active_topic: `01 新幹線を電力系統から見てみる`
- next_start: Topic 01のsource Markdown 2ファイルを正本として、解説PDF・練習PDF・解説画像PowerPointを作成する。Topic 08/12/16/20の本題へ範囲を広げない

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
- [x] 練習問題・完全解説（15問、一次型10問＋二次記述型5問）
- [x] 練習問題15問の独立再計算・一意解QA
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

## source Markdown
- `topics/01_power_system_view/01_power_system_view.md`
  - EXAM_ALIGNMENT、制作前独立検証、解説本文、3段階例題
- `topics/01_power_system_view/01_power_system_view_practice.md`
  - 練習15問、完全解説、過去問対応マッピング、練習問題QA

## 今回進めた内容
Topic 01を1段階進め、練習プリント用の問題・完全解説を作成した。

練習問題は全15問とし、基礎4問、本試験標準8問、複合・応用3問で構成した。二種一次型の五肢択一を10問、二次「電力・管理」型の記述問題を5問含め、一次・二次の双方へ接続した。

扱う範囲は既存本文のフェーザ、複素電力、p.u.・％法、基準変更、一線結線図からの等価回路化、直列・並列合成、電圧・位相差とP/Q、電圧降下近似、三相対称短絡容量に限定した。

15問は式・単位・中間値・正答を独立再計算し、一次型10問は五肢択一として一意解、二次型5問は採点可能な途中式まで確認した。

Topic 08の変圧器並列運転、Topic 12の本格的潮流計算、Topic 16の故障種別・対称座標法、Topic 20の安定度は追加していない。

## 判定
Topic 01 は `source_content_complete`。まだ `completed` ではない。解説PDF・練習PDF・PowerPointを作成後、正式選定5問を教材だけで独立再解答し、最終QA PASSするまで完成数へ加算しない。
