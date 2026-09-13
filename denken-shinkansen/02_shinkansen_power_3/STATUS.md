# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_exam_alignment_complete`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05の解説本文＋3段階例題。確定済み5過去問の要求事項から逆算し、SPEC固定範囲だけで作成する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 制作前EXAM_ALIGNMENT完了。本文以降は未着手
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`

制作前EXAM_ALIGNMENTを完了し、品質ゲート対象を次の公式過去問5問に固定した。

1. R8上 電力 問5 — 二次電池、リチウムイオン電池、再エネ出力平滑化、ナトリウム・硫黄電池、エネルギー密度
2. R7下 電力 問5 — 風力等で用いる誘導発電機、励磁、滑り、系統並列、突入電流
3. R6上 電力 問5 — 燃料電池の直流出力、分類、反応原理、排熱利用、水素改質
4. R5上 電力 問5 — 風力発電、風速と出力の `v^3` 関係、発電機の種類、出力変動
5. R2 電力 問5 — 太陽光発電、セル、パワーコンディショナ、昼間余剰電力、需給調整

固定範囲外のバイオマス、小水力、洋上風力の直流送電等を含む問題は件数合わせで採用していない。R6下問5は地熱を含むが、問題全体の完答にバイオマス知識が必要なため品質ゲート対象外とした。地熱発電自体はSPEC固定範囲なので本文には収録する。

### 未着手成果物
- 解説本文＋3段階例題
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- 完成後独立再解答
- 最終QA

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
Topic 05の解説本文＋3段階例題を作成する。太陽光、風力、地熱、燃料電池、発電量変動、設備利用率、系統連系、蓄電池、需給バランスのSPEC固定範囲から出ず、確定済み5過去問を解くための中間知識・式・判断根拠を欠落させない。完成数は `4 / 16`。
