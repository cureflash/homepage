# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `7 / 22`
- current_status: `topic_08_final_qa_needs_revision`
- last_completed_topic: `07 300系のPWMコンバータは何をしている？`
- active_topic: `08 VVVFインバータで三相交流を作る`
- next_start: Topic 08の主source冒頭・末尾と練習source末尾に残る旧進捗記録3箇所だけを実態へ同期し、技術本文・固定EXAM_ALIGNMENT・数式・問題/正答・PDF/PPTX・計算/波形は変更しない。同期後に最終QAを再実施する

## 完了テーマ
- [x] Topic 01 最終QA PASS
- [x] Topic 02 最終QA PASS
- [x] Topic 03 最終QA PASS
- [x] Topic 04 最終QA PASS
- [x] Topic 05 最終QA PASS
- [x] Topic 06 最終QA PASS
- [x] Topic 07 最終QA PASS

## Topic 08 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次3問＋二次記述2問、計5問選定
- [x] 混合問題は固定範囲へ直接対応する小問だけをゲート対象として明示
- [x] V/f制御、ベクトル制御、デッドタイム設計、素子選定、整流器設計等を固定範囲外として除外
- [x] 参考教材を複数系統で確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] ゲート対象13小問の公式解答／標準解答照合を伴う制作前独立検証: `13 / 13 PASS`
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source（一次10問＋二次記述5問、全15問完全解説）
- [x] 練習PDF（解答・完全解説付き）
- [x] 解説画像PowerPoint
- [x] 計算プログラム・指定波形/FFT
- [x] 公式過去問の教材のみでの独立再解答: `13 / 13 PASS`
- [ ] 最終QA PASS — 2026-09-15最終QAは進捗記録不整合3箇所のみで `NEEDS_REVISION`

## 今回進めた内容
Topic 08の最終QAを実施した。固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、練習・PDF/PPTX表示QA、SPEC指定計算/波形QA、固定範囲を総合確認した。

成果物:
- `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_final_qa.md`

PASS:
- 固定一次3問＋二次記述2問、計5問・13小問を維持
- 完成後独立再解答: `13 / 13 PASS`
- 練習15問、解説PDF、練習PDF、PowerPointの既存QA: PASS
- SPEC指定のスイッチング波形・相電圧/線間電圧・基本波・FFT/高調波QA: PASS
- 教材外知識補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

exact blocker:
1. `08_vvvf_inverter_three_phase.md` 冒頭が「解説PDFまで完成」「練習PDF以降は未着手」の旧記録。
2. 同source末尾の次工程が「練習問題sourceを作成」の旧記録。
3. `08_vvvf_inverter_three_phase_practice.md` 末尾の次工程が「練習PDFを作成」の旧記録。

## 判定
Topic 08は `topic_08_final_qa_needs_revision`。技術内容・過去問対応・成果物はPASSだが、進捗記録3箇所が実態と不整合のため `completed` にしない。完成数は `7 / 22` のまま。次はこの3箇所だけを同期し、その後に最終QAを再実施する。