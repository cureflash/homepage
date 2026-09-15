# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `7 / 22`
- current_status: `topic_08_calculation_program_complete`
- last_completed_topic: `07 300系のPWMコンバータは何をしている？`
- active_topic: `08 VVVFインバータで三相交流を作る`
- next_start: Topic 08の固定5問・13小問を完成教材だけで独立再解答し、教材外知識補完の有無を確認する

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
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 08のSPEC指定計算プログラムと波形・FFT成果物を完成し、数値・論理・表示QAを実施した。

成果物:
- `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_calc.py`
- `topics/08_vvvf_inverter_three_phase/08_switching_waveforms.svg`
- `topics/08_vvvf_inverter_three_phase/08_phase_voltage_waveforms.svg`
- `topics/08_vvvf_inverter_three_phase/08_line_voltage_waveforms.svg`
- `topics/08_vvvf_inverter_three_phase/08_fundamental_waveform.svg`
- `topics/08_vvvf_inverter_three_phase/08_fft_harmonics.svg`
- `topics/08_vvvf_inverter_three_phase/08_vvvf_inverter_three_phase_calculation_qa.md`

確認:
- 教材用仮定値 `E_d=600 V`, `k=0.90`, `f1=50 Hz`, `fc=1.5 kHz` を使用し、300系実車値とはしていない
- U/V/W 120°位相差、正弦波信号と三角波キャリアの比較からスイッチ状態を生成
- 相端電圧 `±E_d/2`、線間電圧 `0,±E_d` を同一条件から生成
- 線間基本波実効値: FFT `330.229 V`、理論 `330.681 V`、差 `0.137 %`
- 3・6・9次線間高調波は基本波比 `0.2534 % / 0.1155 % / 0.0823 %`
- 独立NumPy FFTとの全ビン比較: 最大絶対差 `3.47×10^-8`
- SVG XML parse・ローカルレンダリング・表示QA: `5 / 5 PASS`
- 固定一次3問＋二次記述2問、計5問・13小問は変更なし
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

## 判定
Topic 08は `topic_08_calculation_program_complete`。完成数は `7 / 22` のまま。次は完成教材のみで固定5問・13小問の独立再解答。
