# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 15 / 38
- current_status: `topic_15_pass`
- last_completed_topic: `15 400系・E3系・E6系・E8系 新在直通`
- next_topic: `16 N700系 車両システム制御`
- next_start: topic 16の制作前EXAM_ALIGNMENTから開始する

## 新品質ゲート進捗
- [x] 01〜15 — PASS
- [ ] 16 N700系 車両システム制御 — 次の未完了テーマ

## 15 EXAM_ALIGNMENT
公式過去問5件:
1. R5上 機械 問9 — 鉄損・銅損、負荷率、最大効率。
2. R4下 機械 問8 — 無負荷損・負荷損、銅損の電流二乗則。
3. R4上 機械 問8 — 短絡試験、等価R/X。
4. R3 機械 問9 — 全負荷銅損、百分率抵抗降下、電圧変動率。
5. R2 機械 問9 — 三巻線、P/Q/S、一次電流。

正本は電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnet、電験三種まとめました、電験王。参照日2026-08-30。

## 新幹線実例
JR東日本公式ページでE8系の2024年3月16日営業開始、山形新幹線・東北新幹線運行、最高300 km/hを確認。土木学会誌で山形新幹線在来線区間AC20 kV、新幹線AC25 kVを確認。実巻数・実二次電圧・タップ構成は確認不能のため真値化していない。

## 成果物
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage.md`
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage_explanation.pdf` — 2ページ
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage_practice.pdf` — 15問、3ページ
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage_images.pptx` — 5スライド

## QA
- 練習15/15独立再計算PASS。
- PDFを180 dpiでVisual QA、PPTXをPDF変換後160 dpiでVisual QA。文字化け・クリップ・重なりなし。

## 公式過去問独立再解答
- R5上問9 → 98.04% → `(4)` PASS
- R4下問8 → 900 W → `(4)` PASS
- R4上問8 → 1.90 ohm → `(3)` PASS
- R3問9 → 1.2% → `(3)` PASS
- R2問9 → 55.99 A → `(2)` PASS

5/5で公式解答と一致。教材外知識を補わずに式選択・適用条件を説明できた。

## QA判定
15: `PASS`。新品質基準の完成数は15/38。

## Web公開
15のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ登録する。

## 次
16 `N700系 車両システム制御` の本文作成前EXAM_ALIGNMENTから開始する。
