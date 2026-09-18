# 17 パワー半導体の損失比較 — 最終QA

更新日: 2026-09-19

## 対象正本

- `../../../MASTER_SPEC.md`
- `../../../EXAM_ALIGNMENT_SPEC.md`
- `../../SPEC.md`
- `../../STATUS.md`
- `../../HANDOFF.md`
- `17_power_semiconductor_loss_comparison.md`
- Topic 17の解説・練習・PowerPoint成果物と各QA
- clean blind候補答案・公式照合記録

## reconcile

最新mainと直近の同系列worker成果を確認し、Topic 17は `topic_17_official_check_complete` まで進行済みと判定した。既存成果物を再制作せず、次工程の最終QAだけを実施する。

## 品質ゲート確認

- 固定過去問: 一次4問＋二次1問、計5問
- 是正後ゲート対象: 一次17＋二次6、計23答案要素
- 二次記述・計算問題: `1問` 含む
- clean blind公式照合: `23 / 23 PASS`
- 候補答案変更: `0件`
- 教材外知識補完: `0件`
- 固定問題差替え: `0件`
- SPEC指定7項目: `7 / 7 aligned`
- SPEC指定3可視化: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 解説PDF既存表示QA: `PASS / 4 pages`
- 練習PDF既存表示QA: `PASS / 6 pages`
- PowerPoint既存表示QA: `PASS / 4 slides`

技術内容とclean blind再解答は最終品質ゲートを満たしている。

## 最終QAで検出した不整合

是正後の正本EXAM_ALIGNMENTは `5問・23答案要素` だが、次の現行記録が旧 `26答案要素` 前提のままである。

1. `17_power_semiconductor_loss_comparison.md`
   - `current_status: topic_17_exam_alignment_remap_complete`
   - 完成後blind再解答を `未実施 / 次工程` と記録しており、実際の `23 / 23 PASS` と不一致。
2. `17_power_semiconductor_loss_comparison_explanation_source.md`
   - 冒頭で固定EXAM_ALIGNMENTを `5問・26答案要素` と記録。
3. `17_power_semiconductor_loss_comparison_practice_source.md`
   - `26 / 26` 接続と記録。
   - H24一次問6の `(1)〜(5)` を全てTopic 17へ対応付けており、是正後の `(2)(3)のみ` と不一致。
4. `17_power_semiconductor_loss_comparison_explanation_pdf_qa.md`
   - 固定答案要素を `26` と記録。
5. `17_power_semiconductor_loss_comparison_practice_qa.md`
   - 固定答案要素を `26` と記録。
6. `17_power_semiconductor_loss_comparison_powerpoint_qa.md`
   - 固定答案要素を `26` と記録。

`17_power_semiconductor_loss_comparison_blind_reanswer_gate.md` と旧 `blind_reanswer_candidates.md` は、STATUS/HANDOFFで再マッピング前の履歴と明示されているため、履歴保全の対象とし、本不整合修正対象には含めない。

## 判定

`NEEDS_REVISION / PROGRESS_ALIGNMENT_SYNC_REQUIRED`

Topic 17はまだ `completed` にしない。完成数は `16 / 39` のまま維持する。

技術成果物の再設計や固定EXAM_ALIGNMENTの再変更は不要。次工程では、上記6記録だけを是正後 `5問・23答案要素` と完了済みclean blind結果へ同期し、問題・正答・数式・PDF/PPTX本体・固定過去問を変更しない。その後に最終QAを再実施する。
