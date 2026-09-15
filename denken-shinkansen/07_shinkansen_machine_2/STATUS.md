# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `7 / 22`
- current_status: `topic_08_independent_reanswer_complete`
- last_completed_topic: `07 300系のPWMコンバータは何をしている？`
- active_topic: `08 VVVFインバータで三相交流を作る`
- next_start: Topic 08の最終QAを実施し、過去問対応・必須成果物・進捗記録・SPEC境界を総合判定する

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
- [ ] 最終QA PASS

## 今回進めた内容
Topic 08の完成後独立再解答を実施した。固定EXAM_ALIGNMENTの一次3問＋二次記述2問、計5問・13小問を完成教材の式・解法手順だけで再導出し、公式解答・標準解答と照合した。

成果物:
- `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_independent_reanswer.md`

確認:
- 固定5問・13小問: `13 / 13 PASS`
- R07一次: PWM、スイッチング周波数を教材だけで判定
- H22一次: 三角波、変調率、`√3 k E_d/(2√2)`を教材だけで再導出
- H19一次: 基本波、直流電圧可変不要を教材だけで判定
- R04二次: `134 V`、`164 V`を教材だけで再計算
- H28二次: `Q5/Q6`、相/線間波形、3n次高調波、`√(2/3)E_d`を教材だけで再構築
- 教材外知識補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

## 判定
Topic 08は `topic_08_independent_reanswer_complete`。完成数は `7 / 22` のまま。次は最終QA。