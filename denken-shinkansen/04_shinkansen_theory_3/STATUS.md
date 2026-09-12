# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 1 / 14
- current_status: `topic_02_exam_reanswer_complete`
- last_completed_topic: `01 新幹線1編成はどれだけ電気を食う？`
- active_topic: `02 なぜ新幹線は25,000Vなのか`
- next_start: Topic 02の最終QAを行い、PASS時のみcompletedへ更新する

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
- [ ] 最終QA

## 今回進めた内容

Topic 02 `なぜ新幹線は25,000Vなのか` を1段階進め、完成後の公式過去問独立再解答を完了した。

- 対象: 令和7年度下期 理論 問6
- 完成教材だけを使い、公式解答確認前に再解答
- `V=RI` から `V1=6.75 V`、`V2=6.90 V`
- `V=E-Ir` の2条件連立から `r=0.15 Ω`、`E=7.20 V`
- 独立解答: 選択肢 `(2)`
- 独立解答後に公式解答と照合し、公式正答 `(2)` と一致
- 教材外知識の補完: 0件
- Topic 03以降の知識: 使用なし
- 判定: `1 / 1 PASS`
- source Markdownへ再解答記録を反映済み
- 最終QAは未実施

## 判定

Topic 02は `exam_reanswer_complete`。完成数は `1 / 14` のまま。次工程は最終QAで、PASS時のみTopic 02を `completed` とし完成数へ加算する。
