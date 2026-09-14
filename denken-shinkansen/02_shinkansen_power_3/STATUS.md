# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 6 / 16
- current_status: `topic_07_exam_alignment_complete`
- last_completed_topic: `06 275,000Vをどうやって25,000Vにする？`
- active_topic: `07 なぜ三相交流をそのまま架線へ流さない？`
- next_start: Topic 07の解説本文＋3段階例題を作成する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [x] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答6/6 PASS、最終QA PASS
- [x] 05 新幹線を再エネだけで走らせられる？ — 固定5過去問、必須成果物、表示QA、修正版教材での独立再解答5/5 PASS、教材外知識補完0件、SPEC境界を最終QAで確認し `completed`
- [x] 06 275,000Vをどうやって25,000Vにする？ — 固定5過去問、必須成果物、表示QA、完成後独立再解答5/5 PASS、教材外知識補完0件、source進捗整合・SPEC境界を最終QAで確認し `completed`
- [ ] 07 なぜ三相交流をそのまま架線へ流さない？ — 制作前EXAM_ALIGNMENT完了。固定5問・8小問、制作前独立検証 `8 / 8 PASS`。次は解説本文＋3段階例題
- [ ] 08〜16 — 未完了

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

## Topic 06 完了記録
source: `topics/06_substation/06_substation.md`
解説PDF: `topics/06_substation/06_substation_explanation.pdf`
練習PDF: `topics/06_substation/06_substation_practice.pdf`
解説画像PowerPoint: `topics/06_substation/06_substation_images.pptx`
PowerPoint QA: `topics/06_substation/06_substation_powerpoint_qa.md`
独立再解答: `topics/06_substation/06_substation_independent_reanswer.md`
最終QA: `topics/06_substation/06_substation_final_qa.md`

固定5過去問:
- R7下 電力 問6 — 避雷器 — `(1)` PASS
- R6下 電力 問7 — 計器用変成器 — `(4)` PASS
- R4上 電力 問7 — 過電流継電器の限時特性 — `(1)` PASS
- R3 電力 問8 — 断路器 — `(4)` PASS
- R2 電力 問7 — 真空遮断器 — `(5)` PASS

制作前独立検証 `5 / 5 PASS`。固定5過去問の要求事項から逆算した解説本文＋3段階例題をsourceへ完成し、全件を教材節へマッピング済み。

解説PDFはA4縦4ページ。200 dpi全4ページ表示QA・文字抽出QA PASS。

練習PDFはA4縦3ページ・全12問、全問五肢択一。難易度は基礎3／標準7／複合2、全問に完全解説を付けた。固定5過去問は避雷器=問8・12、計器用変成器=問3・5・11・12、過電流継電器=問9・10、断路器=問6・12、真空遮断器=問7へ接続した。200 dpi全3ページ表示QA PASS、文字抽出QA PASS。数値問題は問1=8,800回、問4=440A、問5=3.5A、問11=2.75Aを別計算で再確認し `4 / 4 PASS`。

解説画像PowerPointは16:9・4枚。固定5過去問の要求事項を全件可視化し、全4枚表示QA、`slides_test.py` による境界外はみ出し検査、PPTX ZIP整合性をPASS。固定範囲外論点・未確認実値の追加は0件。

完成後独立再解答は `(1), (4), (1), (4), (5)` で公式解答と `5 / 5` 一致。教材のみ完結 `5 / 5`、教材外知識補完 `0件`、固定範囲外追加 `0件`。sourceの状態・EXAM_ALIGNMENT・次工程への同期も確認済み。

最終QAでは必須成果物の実在、固定5過去問のEXAM_ALIGNMENT、複数系統の参考教材、表示QA、完成後独立再解答、source進捗整合、SPEC固定範囲・除外境界を確認し、全件PASS。Topic 06を `completed` とした。

SPEC固定範囲は変電所、変圧器、母線、遮断器、断路器、計器用変成器、避雷器、保護リレー、受電電圧、き電電圧。GIS、調相設備、短絡電流・遮断容量・%インピーダンス計算、配電線詳細保護、三相→単相変換方式等は追加していない。

## Topic 07 進捗記録
source: `topics/07_phase_conversion/07_phase_conversion.md`

固定5過去問・8小問:
- R7下 理論 問15(a)(b) — 線間/相電圧・三相電力 — `(3),(3)` PASS
- R5下 理論 問15(a)(b) — Y/Δ・三相電力 — `(3),(4)` PASS
- R4上 機械 問9 — スコット結線・二次90° — `(3)` PASS
- H30 電力 問8 — 変圧比・三相電力 — `(3)` PASS
- H27 機械 問7 — スコット結線・三相側不平衡緩和 — `(3)` PASS

制作前独立検証 `8 / 8 PASS`。公式問題・公式解答を正本とし、電験王・電験三種まとめましたの複数系統で説明粒度と解法を確認した。

Topic 07固定範囲は三相交流、単相交流、線間/相電圧、三相電力、き電用変圧器、相変換、三相側負荷平衡、スコット結線、変形ウッドブリッジ結線、ルーフ・デルタ結線。二種相当の厳密ベクトル導出、Topic 08以降の電圧降下・線路損失・き電回路詳細、力率改善、短絡・保護へは拡張していない。

## 次
Topic 07「なぜ三相交流をそのまま架線へ流さない？」の解説本文＋3段階例題を作成する。