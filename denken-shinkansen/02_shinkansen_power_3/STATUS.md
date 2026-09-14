# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_independent_reanswer_needs_revision`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05の固定EXAM_ALIGNMENTを変更せず、独立再解答で判明した既存要求事項2点だけを教材へ補強する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 固定5過去問の完成後独立再解答を実施。公式解答とは5/5一致したが、教材のみ完結ゲートでR2問5 FAIL、R8上問5に固定要求事項の未収録を確認したため `NEEDS_REVISION`
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`
独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`

制作前EXAM_ALIGNMENTで固定した5問を変更せず、完成教材だけで独立再解答した。候補解答は `(4),(5),(1),(2),(3)` で公式解答と5/5一致した。

ただし `EXAM_ALIGNMENT_SPEC.md` の「教材外知識で補完した場合はFAIL」を適用すると、R2 電力 問5は教材内に地表日射の代表値 `約1 kJ/(m²·s)` がなく、選択肢(3)と(4)を教材だけで区別できないためFAIL。またR8上 電力 問5は選択肢自体は教材から(4)へ絞れるが、制作前EXAM_ALIGNMENTで要求事項に固定した「ナトリウム・硫黄電池の単位質量当たりエネルギー密度が鉛蓄電池の約3倍」が教材に明示されていない。

判定: `NEEDS_REVISION / FAIL`。Topic 05はcompletedにしない。完成数は `4 / 16` のまま。

### 補強対象（既存EXAM_ALIGNMENT内のみ）
1. R2 電力 問5 — 地表に入射する太陽光エネルギーの代表値 `約1 kJ/(m²·s)`
2. R8上 電力 問5 — ナトリウム・硫黄電池の単位質量当たりエネルギー密度は鉛蓄電池の約3倍

固定5過去問、SPEC固定範囲、除外問題は変更しない。バイオマス、小水力、洋上風力の直流送電等を追加しない。

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
Topic 05の固定EXAM_ALIGNMENTを変更せず、上記2点だけを教材へ補強する。仕様追加は行わない。補強後に影響成果物を同期し、固定5問を再度完成教材だけで独立再解答する。
