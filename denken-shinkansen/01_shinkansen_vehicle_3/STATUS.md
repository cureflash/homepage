# STATUS - 新幹線車両・電験三種

更新日: 2026-09-10

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 20 / 38
- current_status: `topic_21_exam_alignment_pending`
- last_completed_topic: `20 N700S② 6極誘導電動機`
- active_topic: `21 N700S③ バッテリー自走`
- next_start: topic 21の制作前EXAM_ALIGNMENT。公式過去問を直近年度から調査し、要求知識・使用式・設問型を記録してから本文へ進む

## 新品質ゲート進捗
- [x] 01〜20 — PASS
- [ ] 21 N700S③ バッテリー自走 — EXAM_ALIGNMENT未着手

## 20 完了内容
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor.md`
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_explanation.pdf` — 3ページ
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_practice.pdf` — 15問、3ページ
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_images.pptx` — 6スライド
- `qualifications/denken-shinkansen/catalog.json` へtopic 20を登録

## 20 QA
公式過去問5件を教材だけで独立再解答し5/5 PASS。練習15/15を独立再計算・再判定。解説PDF 3ページ、練習PDF 3ページ、PowerPoint 6スライドをレンダリングし、文字化け・クリップ・重なりなしを確認した。

代表値: `1320`, `1254`, `20.94kW`, `4kW`, `96kW`, `2280`, `120Hz`, `80Hz`, `70.7%`, `1194N·m`, `2400V`。

## QA判定
20: `PASS`。必須4成果物のGitHub配置、EXAM_ALIGNMENT、15問練習、独立再解答、計算QA、Visual QA、Web catalog登録まで完了。

## 次
21 `N700S③ バッテリー自走` の制作前EXAM_ALIGNMENTから開始する。
