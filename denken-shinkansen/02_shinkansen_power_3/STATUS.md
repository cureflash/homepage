# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 5 / 16
- current_status: `topic_06_exam_alignment_complete`
- last_completed_topic: `05 新幹線を再エネだけで走らせられる？`
- active_topic: `06 275,000Vをどうやって25,000Vにする？`
- next_start: Topic 06の固定EXAM_ALIGNMENTから逆算して解説本文＋3段階例題を作成する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、最終QA PASS
- [x] 05 新幹線を再エネだけで走らせられる？ — 固定5過去問、必須成果物、表示QA、修正版教材での独立再解答5/5 PASS、教材外知識補完0件、SPEC境界を最終QAで確認し `completed`
- [ ] 06 275,000Vをどうやって25,000Vにする？ — 制作前EXAM_ALIGNMENT完了、固定5過去問の制作前独立検証5/5 PASS。次は解説本文＋3段階例題
- [ ] 07〜16 — 未完了

## Topic 05 完了記録
source: `topics/05_renewable_energy/05_renewable_energy.md`
解説PDF: `topics/05_renewable_energy/05_renewable_energy_explanation.pdf`
練習PDF: `topics/05_renewable_energy/05_renewable_energy_practice.pdf`
解説画像PowerPoint: `topics/05_renewable_energy/05_renewable_energy_images.pptx`
PowerPoint QA: `topics/05_renewable_energy/05_renewable_energy_powerpoint_qa.md`
独立再解答: `topics/05_renewable_energy/05_renewable_energy_independent_reanswer.md`
最終QA: `topics/05_renewable_energy/05_renewable_energy_final_qa.md`

固定5過去問:
- R8上 電力 問5: `(4)` — PASS
- R7下 電力 問5: `(5)` — PASS
- R6上 電力 問5: `(1)` — PASS
- R5上 電力 問5: `(2)` — PASS
- R2 電力 問5: `(3)` — PASS

公式解答との一致 `5 / 5`、教材のみ完結 `5 / 5`、教材外知識補完 `0件`。初回FAIL原因だった日射代表値とNaS電池エネルギー密度比較はsource・解説PDFへ補強済み。

表示QA:
- 解説PDF: 補強後A4縦4ページ、200 dpi全ページPASS
- 練習PDF: A4縦5ページ・12問、200 dpi全ページPASS、数値問題独立再計算PASS
- PowerPoint: 16:9・4枚、全4枚表示QA・境界外はみ出し・ZIP整合性PASS

固定範囲外のバイオマス、小水力、洋上風力の直流送電等は追加していない。未確認の新幹線消費電力・再エネ設備容量・蓄電容量は実値化していない。

## Topic 06 制作前EXAM_ALIGNMENT
source: `topics/06_substation/06_substation.md`

固定5過去問:
- R7下 電力 問6 — 避雷器 — `(1)` PASS
- R6下 電力 問7 — 計器用変成器 — `(4)` PASS
- R4上 電力 問7 — 過電流継電器の限時特性 — `(1)` PASS
- R3 電力 問8 — 断路器 — `(4)` PASS
- R2 電力 問7 — 真空遮断器 — `(5)` PASS

制作前独立検証 `5 / 5 PASS`。SPEC固定範囲は変電所、変圧器、母線、遮断器、断路器、計器用変成器、避雷器、保護リレー、受電電圧、き電電圧。GIS、調相設備、短絡電流・遮断容量・%インピーダンス計算、配電線詳細保護、三相→単相変換方式等は件数合わせで追加していない。

## 次
Topic 06「275,000Vをどうやって25,000Vにする？」の解説本文＋3段階例題を、固定5過去問の要求事項から逆算して作成する。個別変電所の未確認実設備値を一般化せず、Topic 07以降の論点を先取りしない。
