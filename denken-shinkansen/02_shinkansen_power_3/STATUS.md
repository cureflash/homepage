# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_explanation_body_complete`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05の解説PDF。完成済み本文・3段階例題・固定5過去問カバレッジをA4縦へ収録し、全ページ表示QAを行う

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 制作前EXAM_ALIGNMENT、解説本文・3段階例題完了。PDF以降は未着手
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`

制作前EXAM_ALIGNMENTで固定した公式過去問5問を変更せず、要求事項から逆算して解説本文＋3段階例題を完成した。

1. R8上 電力 問5 — §7 蓄電池と出力平滑化、§9 系統連系と需給
2. R7下 電力 問5 — §4 風力発電・誘導発電機、§9 系統連系
3. R6上 電力 問5 — §6 燃料電池
4. R5上 電力 問5 — §4 風力発電・`P ∝ v^3`
5. R2 電力 問5 — §3 太陽光発電、§9 系統連系と需給

本文では太陽光、風力、地熱、燃料電池、蓄電池、設備利用率、系統連系、需給バランス、新幹線への接続をSPEC固定範囲内で収録。未確認の列車消費電力・再エネ設備容量・蓄電容量は実値化していない。

3段階例題:
- 基礎: 設備利用率
- 標準: 風速変化と `v^3` 出力比
- 複合: 太陽光・仮定鉄道負荷・蓄電池の時間別需給

### 未着手成果物
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- 完成後独立再解答
- 最終QA

固定範囲外のバイオマス、小水力、洋上風力の直流送電等は追加していない。地熱発電はSPEC固定範囲なので本文へ収録したが、品質ゲート対象過去問は変更していない。

## Topic 04
Topic 04は最終QA PASSで `completed`。固定6過去問の完成後独立再解答6/6 PASS、教材外知識補完0件、仕様外追加0件。

完成成果物:
- source: `topics/04_nuclear_power/04_nuclear_power.md`
- 解説PDF: `topics/04_nuclear_power/04_nuclear_power_explanation.pdf`
- 練習PDF: `topics/04_nuclear_power/04_nuclear_power_practice.pdf`
- 解説画像PowerPoint: `topics/04_nuclear_power/04_nuclear_power_images.pptx`
- PowerPoint QA: `topics/04_nuclear_power/04_nuclear_power_powerpoint_qa.md`
- 独立再解答: `topics/04_nuclear_power/04_nuclear_power_independent_reanswer.md`
- 最終QA: `topics/04_nuclear_power/04_nuclear_power_final_qa.md`

## 次
Topic 05の解説PDFを作成する。source本文・数式・3段階例題・固定5過去問への対応を収録し、全ページ表示QAを行う。SPEC固定範囲外の論点は追加しない。完成数は `4 / 16` のまま。