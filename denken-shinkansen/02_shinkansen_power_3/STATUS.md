# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-14

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 3 / 16
- current_status: `topic_04_powerpoint_complete`
- last_completed_topic: `03 JR東日本はなぜ火力発電所まで持っている？`
- active_topic: `04 東京―佐世保「原子力新幹線」`
- next_start: Topic 04の完成教材だけを使い、選定6過去問を独立再解答する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答、最終QAまで完了
- [x] 02 上越新幹線を水の力で走らせる — EXAM_ALIGNMENT、解説本文・解説PDF・練習PDF・解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QAまで完了
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答7/7 PASS、最終QA PASS
- [ ] 04 東京―佐世保「原子力新幹線」 — 制作前EXAM_ALIGNMENT、解説本文・3段階例題、解説PDF、練習PDF、解説画像PowerPointまで完了。完成後独立再解答・最終QAは未実施
- [ ] 05〜16 — 未完了

## Topic 04 現在地
source: `topics/04_nuclear_power/04_nuclear_power.md`

品質ゲート対象は固定済みの公式過去問6問。

1. R8上 電力 問4 — 原子核・質量欠損・結合エネルギー・`E=mc^2`・核分裂
2. R6上 電力 問4 — U-235核分裂エネルギーと石炭発熱量の換算
3. R5上 電力 問4 — ウラン燃料中U-235の質量欠損と重油発熱量の換算
4. H30 電力 問4 — 原子力発電所の蒸気タービン、湿分、蒸気条件、熱効率、蒸気量、回転速度
5. H27 電力 問4 — 軽水炉、PWR/BWR、冷却材・主要設備・蒸気発生
6. H21 電力 問4 — 原子力発電と汽力発電の対応、原子炉、U-235/U-238、濃縮燃料

### 完成済み成果物
- 解説PDF: `topics/04_nuclear_power/04_nuclear_power_explanation.pdf` — A4縦4ページ、全ページ表示QA PASS
- 練習PDF: `topics/04_nuclear_power/04_nuclear_power_practice.pdf` — A4縦6ページ、12問、全ページ表示QA PASS
- 解説画像PowerPoint: `topics/04_nuclear_power/04_nuclear_power_images.pptx` — 16:9・2枚、固定6過去問の要求事項を収録し、全スライド表示QA・境界外はみ出し・ZIP整合性 PASS
- PowerPoint QA: `topics/04_nuclear_power/04_nuclear_power_powerpoint_qa.md`

PowerPointではJAEA一次資料で確認済みの「むつ」実在値とSPEC固定の架空列車部分を分離した。未確認の列車発電端出力・走行性能は真値化していない。

固定範囲外の新型炉、核燃料サイクル、放射線分類・遮蔽、安全法規、詳細燃料加工は追加していない。

完成後独立再解答は未実施。教材だけで6/6正答かつ根拠説明可能であることを確認するまで `completed` にしない。

## Topic 03
Topic 03は最終QA PASSで `completed`。最終QA記録: `topics/03_thermal_power/03_thermal_power_final_qa.md`。

## 次
Topic 04の完成教材だけを使って選定6過去問を保存済み正答を先に見ず独立再解答する。教材外知識の補完が1件でもあればFAILとする。完成数は3/16のままとする。