# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 4 / 16
- current_status: `topic_05_independent_reanswer_pass`
- last_completed_topic: `04 東京―佐世保「原子力新幹線」`
- active_topic: `05 新幹線を再エネだけで走らせられる？`
- next_start: Topic 05 sourceのEXAM_ALIGNMENT・進捗メタデータへ再独立再解答5/5 PASSを同期する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、source進捗同期、最終QA PASS
- [ ] 05 新幹線を再エネだけで走らせられる？ — 修正版教材で固定5過去問を再独立再解答し5/5 PASS、教材外知識補完0件。sourceへの結果同期・最終QA前のため `completed` にはしない
- [ ] 06〜16 — 未完了

## Topic 05 現在地
source: `topics/05_renewable_energy/05_renewable_energy.md`
解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf`
独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`

制作前EXAM_ALIGNMENTで固定した5問は変更していない。初回独立再解答は公式解答と5/5一致したものの、R2 電力 問5の日射代表値とR8上 電力 問5のNaS電池エネルギー密度比較が完成教材に不足していたため `NEEDS_REVISION / FAIL` とした。

不足2点はsourceと解説PDFへ補強済み。今回、修正版教材だけで固定5問を再独立再解答し、次の結果となった。

- R8上 電力 問5: `(4)` = 公式 `(4)` — PASS
- R7下 電力 問5: `(5)` = 公式 `(5)` — PASS
- R6上 電力 問5: `(1)` = 公式 `(1)` — PASS
- R5上 電力 問5: `(2)` = 公式 `(2)` — PASS
- R2 電力 問5: `(3)` = 公式 `(3)` — PASS

公式解答との一致 `5 / 5`、教材のみ完結 `5 / 5`、教材外知識補完 `0件`。固定5過去問、SPEC固定範囲、除外問題は変更していない。

完成後独立再解答ゲートは `PASS`。ただしsourceのEXAM_ALIGNMENT・進捗メタデータへの結果同期と最終QAが未実施のため、完成数は `4 / 16` のまま。

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
Topic 05 sourceのEXAM_ALIGNMENT・進捗メタデータへ今回の再独立再解答 `5/5 PASS` を同期する。その後、最終QAで成果物・表示QA・範囲境界・品質ゲートを再確認する。