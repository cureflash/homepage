# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 2 / 14
- current_status: `topic_03_exam_alignment_complete`
- last_completed_topic: `02 なぜ新幹線は25,000Vなのか`
- active_topic: `03 架線はただの銅線ではない`
- next_start: Topic 03の確定済みEXAM_ALIGNMENTに従い、解説本文と3段階例題を作成する

## Topic 01 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 公式過去問5問の関連候補を確認
- [x] e-sysnet、電験三種まとめました、電験王の説明粒度を確認
- [x] source Markdownを作成し、必要説明事項と境界論点を記録
- [x] 既存5候補をSPEC境界で再判定
- [x] 平成29年度理論問14をTopic 01単独の独立再解答ゲート対象として確定
- [x] Topic 05または後続Topicの知識を必要とする候補を独立再解答ゲートから除外
- [x] 平成18年度〜令和8年度上期の理論問題を横断確認し、追加候補の要求知識を再判定
- [x] 独立再解答ゲート対象の公式過去問集合を確定（5問未満例外を適用し、平成29年度理論問14の1問）
- [x] EXAM_ALIGNMENT確定
- [x] 解説本文
- [x] 解説PDF
- [x] 練習PDF（15問、全問五肢択一、完全解説）
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] QA PASS

## Topic 02 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 令和8年度上期・令和7年度下期・令和7年度上期の公式理論問題から直近6候補を確認
- [x] 候補6問をTopic 02境界で判定
- [x] 直並列回路、回路網、RLC等を要求する5問をゲート対象外に整理
- [x] 令和7年度下期 理論 問6をTopic 02単独の独立再解答ゲート対象として確定
- [x] 5問未満例外を適用
- [x] e-sysnet、電験王、電験三種まとめましたを確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材で必要な説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題・練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA

## Topic 03 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 03固定範囲でゲート対象6問を確定
- [x] Topic 05以降へ送る境界論点を整理
- [x] e-sysnet、電験王、電験三種まとめましたの説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題source・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA

## 今回進めた内容

Topic 03 `架線はただの銅線ではない` を1段階進め、制作前EXAM_ALIGNMENTを完了した。

- source Markdown: `topics/03_catenary_resistance/03_catenary_resistance.md`
- ゲート対象公式過去問: 6問
  - 令和8年度上期 理論 問7
  - 令和7年度下期 理論 問5
  - 令和6年度下期 理論 問7
  - 令和5年度上期 理論 問7
  - 令和4年度下期 理論 問7
  - 令和2年度 理論 問5
- 固定論点: 抵抗率、導電率、長さ、断面積、直列・並列、温度係数、温度と抵抗、電圧降下、発熱
- 近接問題のうち、キルヒホッフ則・複数電源回路・最大電力供給を必要とする問題は後続Topicへ分離
- 公式正答は制作前sourceへ保存せず、完成後独立再解答で照合する
- 未確認の架線実車値の真値化: なし
- SPEC範囲外の仕様追加: なし

## 判定

Topic 03は `EXAM_ALIGNMENT_COMPLETE / IN_PROGRESS`。完成数は `2 / 14` のまま。次工程は、確定済みsource Markdownだけを基準に解説本文＋3段階例題を作成する。
