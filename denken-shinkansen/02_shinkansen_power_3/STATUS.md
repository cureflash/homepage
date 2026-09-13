# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 3 / 16
- current_status: `topic_04_exam_alignment_complete`
- last_completed_topic: `03 JR東日本はなぜ火力発電所まで持っている？`
- active_topic: `04 東京―佐世保「原子力新幹線」`
- next_start: Topic 04の解説本文＋3段階例題を作る。まず原子力船「むつ」の原子炉形式・熱出力・蒸気条件・タービン/発電設備主要仕様を一次資料で確認し、選定6過去問の要求事項を`SPEC.md`固定範囲内で本文へマッピングする

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [ ] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT完了。解説本文以降は未着手
- [ ] 05〜16 — 未完了

## Topic 04 現在地
source: `topics/04_nuclear_power/04_nuclear_power.md`

制作前EXAM_ALIGNMENTで、直近年度から固定範囲適合性を確認したうえで次の6問を品質ゲート対象に選定した。

1. R8上 電力 問4 — 原子核・質量欠損・結合エネルギー・`E=mc^2`・核分裂
2. R6上 電力 問4 — U-235核分裂エネルギーと石炭発熱量の換算
3. R5上 電力 問4 — ウラン燃料中U-235の質量欠損と重油発熱量の換算
4. H30 電力 問4 — 原子力発電所の蒸気タービン、湿分、蒸気条件、熱効率、蒸気量、回転速度
5. H27 電力 問4 — 軽水炉、PWR/BWR、冷却材・主要設備・蒸気発生
6. H21 電力 問4 — 原子力発電の汽力発電との対応、原子炉、U-235/U-238、濃縮燃料

直近であっても、R7下の新型炉・核融合、R7上の核燃料サイクル、R6下の放射線分類、R5下の詳細燃料加工等は`SPEC.md`固定範囲を越えるため品質ゲート対象から除外した。

参考教材はe-sysnet、電験王、電験三種まとめましたの複数系統を確認済み。完成後独立再解答は未実施で、成果物完成後に教材だけを使って6/6 PASSを確認する。

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
Topic 04の解説本文＋3段階例題を作る。原子力船「むつ」の実在仕様は一次資料確認後にのみ使用し、完成数は3/16のままとする。