# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_powerpoint_complete`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05の固定5過去問を、完成教材だけを使って独立再解答する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint完了。完成後独立再解答以降は未着手
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`

制作前EXAM_ALIGNMENTで固定した公式過去問5問を変更せず、解説本文・3段階例題・解説PDF・練習PDFに続き、解説画像PowerPoint `topics/05_renewable_energy/05_renewable_energy_images.pptx` を完成した。16:9・4枚。太陽光、風力、地熱、燃料電池、発電量変動、設備利用率、系統連系、蓄電池、需給バランスをSPEC固定範囲内で可視化し、固定5過去問の要求事項へ対応。全4枚レンダリング目視確認、`slides_test.py`、PPTX ZIP整合性ともPASS。未確認の列車消費電力・再エネ設備容量・蓄電容量は実値化しておらず、SPEC固定範囲外の論点も追加していない。

固定5過去問とPowerPointの対応:
1. R8上 電力 問5 — 蓄電池・出力平滑化 → Slide 3・4
2. R7下 電力 問5 — 風力・誘導発電機・系統並列 → Slide 2・3・4
3. R6上 電力 問5 — 燃料電池 → Slide 2・4
4. R5上 電力 問5 — 風力・`P ∝ v^3` → Slide 2・4
5. R2 電力 問5 — 太陽光・パワーコンディショナ・需給 → Slide 1〜4

SPEC固定範囲の地熱・設備利用率・発電量変動もSlide 1〜3に収録。

### 未着手成果物
- 完成後独立再解答
- 最終QA

固定範囲外のバイオマス、小水力、洋上風力の直流送電等は追加していない。地熱発電はSPEC固定範囲なので教材へ収録するが、品質ゲート対象過去問は変更していない。

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
Topic 05の固定5過去問を完成教材だけで独立再解答する。保存済み正答を先に見ず、教材外知識で補完しない。完成数は `4 / 16` のまま。
