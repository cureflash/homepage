# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 3 / 16
- current_status: `topic_03_completed`
- last_completed_topic: `03 JR東日本はなぜ火力発電所まで持っている？`
- active_topic: `04 東京―佐世保「原子力新幹線」`
- next_start: Topic 04の制作前EXAM_ALIGNMENTを行う。公式過去問を直近年度から原則5問以上調査し、複数系統の参考教材を確認して、`SPEC.md` の固定範囲内で要求事項をsource Markdownへ記録する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [ ] 04〜16 — 未完了

## Topic 03 最終QA
記録: `topics/03_thermal_power/03_thermal_power_final_qa.md`

確認結果:
- 必須成果物のGitHub正本上の実在: PASS
- 公式過去問6問・7小問のEXAM_ALIGNMENT: PASS
- 複数系統の参考教材確認: PASS
- 制作前独立再解答: 7/7 PASS
- 解説PDF: A4縦6ページ、200 dpi全ページ表示QA PASS、現行blobはQA後未変更
- 練習PDF: A4縦6ページ、12問（基礎3 / 標準7 / 複合2）、全問五肢択一・完全解説、200 dpi全ページ表示QA PASS、現行blobはQA後未変更
- PowerPoint: 16:9・7枚、全スライド表示QA・境界外はみ出し検査・ZIP整合性 PASS、現行blobはQA後未変更
- 数式・数値・単位・成立条件の整合: PASS
- 固定範囲外追加: 0件
- 未確認実車値の真値化: 0件
- 完成後独立再解答: 7/7 PASS

判定: Topic 03を `completed` とする。

## Topic 03 成果物
- source Markdown: `topics/03_thermal_power/03_thermal_power.md`
- 解説PDF: `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- 練習PDF: `topics/03_thermal_power/03_thermal_power_practice.pdf`
- 解説画像PowerPoint: `topics/03_thermal_power/03_thermal_power_images.pptx`
- PowerPoint QA: `topics/03_thermal_power/03_thermal_power_powerpoint_qa.md`
- 完成後独立再解答: `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`
- 最終QA: `topics/03_thermal_power/03_thermal_power_final_qa.md`

## Topic 03 過去問対応ゲート
1. R8上 電力 問3 — `(1)` / 公式 `(1)` — PASS
2. R7下 電力 問15(a) — `(4)` / 公式 `(4)` — PASS
3. R7上 電力 問2 — `(5)` / 公式 `(5)` — PASS
4. R6上 電力 問3 — `(4)` / 公式 `(4)` — PASS
5. R3 電力 問15(a) — `(2)` / 公式 `(2)` — PASS
6. R3 電力 問15(b) — `(4)` / 公式 `(4)` — PASS
7. R1 電力 問15(a) — `(3)` / 公式 `(3)` — PASS

固定範囲外の詳細煙風道設備、再熱・再生サイクル、給水加熱器等、燃焼化学・CO2計算、保護装置・継電器・トリップ機構は追加していない。

## 次
Topic 04 `東京―佐世保「原子力新幹線」` の制作前EXAM_ALIGNMENTから開始する。完成数は3/16。