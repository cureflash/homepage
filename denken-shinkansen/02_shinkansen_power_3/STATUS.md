# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 5 / 16
- current_status: `topic_05_completed`
- last_completed_topic: `05 新幹線を再エネだけで走らせられる？`
- active_topic: `06 275,000Vをどうやって25,000Vにする？`
- next_start: Topic 06の制作前EXAM_ALIGNMENTを実施し、直近公式過去問からSPEC固定範囲に直接対応する問題を原則5問以上選定・独立検証する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、最終QA PASS
- [x] 05 新幹線を再エネだけで走らせられる？ — 固定5過去問、必須成果物、表示QA、修正版教材での独立再解答5/5 PASS、教材外知識補完0件、SPEC境界を最終QAで確認し `completed`
- [ ] 06〜16 — 未完了

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

## 次
Topic 06「275,000Vをどうやって25,000Vにする？」の制作前EXAM_ALIGNMENTを開始する。SPEC固定範囲は変電所、変圧器、母線、遮断器、断路器、計器用変成器、避雷器、保護リレー、受電電圧、き電電圧。仕様外論点を件数合わせで追加しない。
