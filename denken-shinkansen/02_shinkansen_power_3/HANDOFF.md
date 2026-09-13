# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は3/16。Topic 01〜03は完成済み。active topicは04 `東京―佐世保「原子力新幹線」`。

## 今回進捗
Topic 03 `JR東日本はなぜ火力発電所まで持っている？` の最終QAを実施し、品質ゲートをすべて満たしたため `completed` とした。

追加成果物:
- `topics/03_thermal_power/03_thermal_power_final_qa.md`

更新:
- `STATUS.md`
- `HANDOFF.md`

## Topic 03 最終QA結果
- 必須成果物実在: PASS
- 公式過去問6問・7小問のEXAM_ALIGNMENT: PASS
- 複数系統の参考教材確認: PASS
- 制作前独立再解答: 7/7 PASS
- 解説PDF: A4縦6ページ、既実施200 dpi全ページ表示QA PASS、現行blob一致
- 練習PDF: A4縦6ページ、12問（基礎3 / 標準7 / 複合2）、全問五肢択一・完全解説、既実施200 dpi全ページ表示QA PASS、現行blob一致
- PowerPoint: 16:9・7枚、全スライド表示QA・境界外はみ出し・ZIP整合性 PASS、現行blob一致
- 数式・数値・単位・成立条件: PASS
- 固定範囲外追加: 0件
- 未確認実車値の真値化: 0件
- 完成後独立再解答: 7/7 PASS

## Topic 03 過去問対応
1. R8上 電力 問3 — `(1)` / 公式 `(1)` — PASS
2. R7下 電力 問15(a) — `(4)` / 公式 `(4)` — PASS
3. R7上 電力 問2 — `(5)` / 公式 `(5)` — PASS
4. R6上 電力 問3 — `(4)` / 公式 `(4)` — PASS
5. R3 電力 問15(a) — `(2)` / 公式 `(2)` — PASS
6. R3 電力 問15(b) — `(4)` / 公式 `(4)` — PASS
7. R1 電力 問15(a) — `(3)` / 公式 `(3)` — PASS

教材外の新規公式・論点補完0件。詳細煙風道設備、再熱・再生サイクル、給水加熱器等、燃焼化学・CO2計算、保護装置・継電器・トリップ機構は追加していない。

## Topic 03 成果物
- `topics/03_thermal_power/03_thermal_power.md`
- `topics/03_thermal_power/03_thermal_power_explanation.pdf`
- `topics/03_thermal_power/03_thermal_power_practice.pdf`
- `topics/03_thermal_power/03_thermal_power_images.pptx`
- `topics/03_thermal_power/03_thermal_power_powerpoint_qa.md`
- `topics/03_thermal_power/03_thermal_power_independent_reanswer.md`
- `topics/03_thermal_power/03_thermal_power_final_qa.md`

## 現在状態
- `current_status`: `topic_03_completed`
- 完成数: `3/16`
- last completed: Topic 03
- active: Topic 04 `東京―佐世保「原子力新幹線」`

## 次の正確な開始点
Topic 04の制作前EXAM_ALIGNMENTを行う。電気技術者試験センター公式過去問を直近年度から原則5問以上調査し、複数系統の参考教材を確認する。`SPEC.md` のTopic 04固定範囲から仕様を追加せず、要求知識・式・設問型・教材必須説明をsource Markdownへ記録する。