# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: 0 / 22
- current_status: `topic_01_powerpoint_complete`
- last_completed_topic: `none`
- active_topic: `01 新幹線を電力系統から見てみる`
- next_start: Topic 01の正式選定5問を、保存済み正答を先に見ず、完成教材（解説PDF・練習PDF・PowerPoint・source Markdown）のみで独立再解答する。一次2問・二次記述3問について公式解答と照合し、教材外知識で補っていないことを確認する

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
- [x] 解説PDF
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
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
Topic 01を1段階進め、解説画像PowerPoint `topics/01_power_system_view/01_power_system_view_images.pptx` を作成した。

16:9・4枚。source Markdownの既定範囲だけを使い、次を整理した。

1. 新幹線電力供給系統を `電源フェーザ + 系統インピーダンス + 複素負荷` へ落とす見方
2. 複素電力 `S=P+jQ`、フェーザ、遅れ・進み・逆潮流の符号
3. 三相基準量、p.u.、％インピーダンス、基準変更、一線結線図から一相等価回路への手順
4. `P-Q-電圧`、三相対称短絡容量、二次試験の記述手順
5. 正式選定5問（一次2＋二次記述3）の要求論点

Topic 08の変圧器固有の％Z・並列運転、Topic 12の本格的潮流計算、Topic 16の故障種別・対称座標法、Topic 20の安定度には踏み込んでいない。実設備の未確認値も追加していない。

PowerPointは全4枚を画像レンダリングで確認し、`slides_test.py` でもoverflowなしを確認した。

## 判定
Topic 01 は `powerpoint_complete`。まだ `completed` ではない。次工程は正式選定5問を完成教材だけで独立再解答すること。全問PASSし最終QAを通過するまで完成数へ加算しない。
