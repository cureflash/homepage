# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 4 / 14
- current_status: `topic_05_explanation_source_complete`
- last_completed_topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- active_topic: `05 パンタグラフから入った電気はどこへ行く？`
- next_start: Topic 05の確定sourceから解説PDFを作成する。選定6過去問への対応と系列SPEC境界を維持し、後続Topic論点・未確認実車値は追加しない

## Topic 01 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 02 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 03 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 03固定範囲でゲート対象6問を確定
- [x] Topic 05以降へ送る境界論点を整理
- [x] e-sysnet、電験王、電験三種まとめましたの説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source・練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 04 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 04固定範囲でゲート対象6問を確定
- [x] 固定範囲外の近接論点を境界整理
- [x] e-sysnet・電験王の説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source・練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] source Markdown冒頭進捗メタデータ同期
- [x] 最終QA再実施
- [x] source Markdown末尾 `次工程` 記録同期
- [x] 最終QA PASS

## Topic 05 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 05固定範囲でゲート対象6問を確定
- [x] 固定範囲外の後続Topic論点・実車推測を境界整理
- [x] e-sysnet・電験三種まとめました・電験王の説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題source・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 05 `パンタグラフから入った電気はどこへ行く？` の解説本文＋3段階例題を完成した。

確定EXAM_ALIGNMENTの6過去問から逆算し、以下を本文へ収録した。

- 直列・並列、合成抵抗、分圧・分流
- 同一起電力・同一内部抵抗の電池並列の基本
- KCL / KVL、枝電流法、負の電流の解釈
- 重ね合わせの理と電源を零にするときの扱い
- テブナン・ノートン等価回路
- 負荷電力、最大電力条件 `RL=Rth`
- 本試験で再利用できる解法手順
- 3段階例題（直並列、複数電源KCL＋重ね合わせ、テブナン＋ノートン＋最大電力）

選定6問の要求事項を教材内節へ全件マッピングした。新幹線側は「教育用等価回路」と明記し、実車の内部配線・保護回路・主回路定数は推測していない。Topic 06以降の磁気・交流・三相・半導体論点は追加していない。

## 判定

Topic 05は `EXPLANATION_SOURCE_COMPLETE`。完成数は `4 / 14` 据え置き。次工程は解説PDF。