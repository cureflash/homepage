# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 5 / 38
- legacy_artifacts_present: 3 / 38
- current_status: rebuilding_topic_06
- next_topic: `06 0系④ 発電ブレーキ` の制作前EXAM_ALIGNMENTを作成し、公式過去問5問以上の分析から開始する

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — PASS
- [x] 03 0系① 主変圧器 — PASS
- [x] 04 0系② シリコン整流器 — PASS
- [x] 05 0系③ 速度制御 — PASS
- [ ] 06 0系④ 発電ブレーキ — 次の対象

## 05 0系③ 速度制御 — PASS
- [x] EXAM_ALIGNMENT: R6上機械問2、R4上機械問1、R1機械問1、H28機械問1、H25機械問1
- [x] e-sysnet、電験三種まとめました、TAC公開過去問を比較
- [x] 解説PDF: 3ページ
- [x] 練習PDF: 14問（基礎4/標準7/応用3、五肢択一10）
- [x] PowerPoint: 2スライド、自作模式図、出典一覧
- [x] visual QA: クリップ、重なり、文字化けなし
- [x] 練習14問独立再計算 PASS
- [x] 公式過去問5問独立再解答 5/5 PASS
- [x] Webカタログ公開

### 独立過去問QA
- R6上 機械 問2: 840 min^-1 → (2) PASS
- R4上 機械 問1: 電機子 / 電圧 / 電機子 / 回生 → (4) PASS
- R1 機械 問1: 800 min^-1 → (4) PASS
- H28 機械 問1: 1750 min^-1 → (4) PASS
- H25 機械 問1: 誤り(3)、未飽和直巻でT∝Ia^2 → PASS

## 次
`06 0系④ 発電ブレーキ` について、電気技術者試験センター公式過去問から発電機作用、直流機の発電運転、制動抵抗、ジュール熱、運動エネルギー、電力・エネルギー変換に対応する問題を原則5問以上選定し、EXAM_ALIGNMENTを先に作る。
