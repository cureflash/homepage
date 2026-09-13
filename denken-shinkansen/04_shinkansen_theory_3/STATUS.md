# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 2 / 14
- current_status: `topic_02_completed`
- last_completed_topic: `02 なぜ新幹線は25,000Vなのか`
- active_topic: `03 架線はただの銅線ではない`
- next_start: Topic 03の制作前EXAM_ALIGNMENTを行い、系列SPECの固定範囲内で公式過去問を直近年度から調査して教材必須説明を確定する

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

## 今回進めた内容

Topic 02 `なぜ新幹線は25,000Vなのか` を1段階進め、最終QAを完了した。

- QA記録: `topics/02_why_25kv/02_why_25kv_final_qa.md`
- source Markdown・解説PDF・練習PDF・解説画像PowerPointの実在をGitHub正本で確認
- 現行の解説PDF・練習PDF・PowerPointのblobが既実施表示QA対象版と一致することを確認
- 練習PDF: 12問、全問五肢択一、完全解説、表示QA PASS
- PowerPoint: 7枚、表示QA・overflow検査 PASS
- 令和7年度下期 理論 問6の完成後独立再解答: `1 / 1 PASS`
- 独立解答: `E=7.20 V`、選択肢 `(2)`、公式正答 `(2)` と一致
- 教材外知識の補完: 0件
- Topic 03以降の知識使用: 0件
- SPEC範囲外の仕様追加: なし
- 未確認実車値の真値化: なし

## 判定

Topic 02は最終QA `PASS / completed`。完成数を `2 / 14` に更新した。次工程はTopic 03「架線はただの銅線ではない」の制作前EXAM_ALIGNMENT。