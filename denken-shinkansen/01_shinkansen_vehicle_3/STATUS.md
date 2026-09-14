# STATUS - 新幹線車両・電験三種

更新日: 2026-09-14

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 29 / 38
- current_status: `topic_29_completed`
- last_completed_topic: `29 コンプレッサ・ポンプ・ファン`
- active_topic: `30 ATC① 新幹線は列車をどう検知する？`
- next_start: Topic 30の制作前EXAM_ALIGNMENT。公式過去問を直近年度から確認し、系列SPEC固定範囲（レール、軌道回路、車軸短絡、電圧、電流、短絡、リレー、列車検知）へ直接対応する問題だけを固定して独立解答する

## 新品質ゲート進捗
- [x] 01〜29 — PASS
- [ ] 30 ATC① 新幹線は列車をどう検知する？ — NOT_STARTED

## 29 EXAM_ALIGNMENT
品質ゲート対象は公式過去問5問。系列SPEC固定範囲は、コンプレッサ、ポンプ、ファン、電動機応用、トルク、出力、効率。

1. R4下 機械 問11 — ポンプ揚水、損失水頭、ポンプ効率・電動機効率、必要電動機入力 — `4` — PASS
2. H30 機械 問10 — ポンプ揚水、余裕係数、100 kW電動機の必要台数 — `4` — PASS
3. H29 機械 問12 — 流体搬送負荷のトルク特性、送風機の風量・所要電力と速度の関係 — `4` — PASS
4. H27 機械 問12 — 実揚程・全揚程、ポンプ効率、余裕係数、電動機出力 — `5` — PASS
5. H18 機械 問10 — ポンプ揚水、損失水頭、ポンプ効率・電動機効率、必要電動機入力 — `3` — PASS

制作前独立解答: `5 / 5 PASS`。
完成後独立再解答: `5 / 5 PASS`。
教材外知識補完: `0件`。
固定範囲外論点追加: `0件`。
未確認実車値追加: `0件`。

完成後再導出値:
- R4下 問11: `13.14 kW` → 4
- H30 問10: `673.75 kW`、`7台` → 4
- H29 問12: `Q∝n`、`T∝n^2`、`P∝n^3` → 4
- H27 問12: `11.79 kW` → 5
- H18 問10: `20.19 kW` → 3

## 29 成果物
- 解説source / EXAM_ALIGNMENT: `topics/29_compressor_pump_fan/29_compressor_pump_fan.md`
- 解説PDF: `topics/29_compressor_pump_fan/29_compressor_pump_fan_explanation.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS
- 練習source: `topics/29_compressor_pump_fan/29_compressor_pump_fan_practice.md` — 15問、独立QA `15 / 15 PASS`
- 練習PDF: `topics/29_compressor_pump_fan/29_compressor_pump_fan_practice.pdf` — A4縦4ページ、180 dpi全ページ表示QA PASS
- 解説画像PowerPoint: `topics/29_compressor_pump_fan/29_compressor_pump_fan_images.pptx` — 16:9・4スライド、表示QA・overflow・ZIP整合性PASS
- 完成後独立再解答・最終QA: `topics/29_compressor_pump_fan/29_compressor_pump_fan_final_qa.md` — `5 / 5 PASS / COMPLETED`

## 29 範囲境界
追加していない:
- 圧縮機の断熱・等温・ポリトロープ圧縮仕事
- 冷媒物性、冷凍サイクル、p-h線図、COP詳細
- ポンプのキャビテーション、NPSH、詳細配管設計
- ファンの翼形・騒音・ダクト設計
- 巻上機、エレベータ、はずみ車、減速機
- 未確認の新幹線コンプレッサ・ポンプ・ファン実車値

## 29 最終QA
- 固定5問を完成教材の式・判断経路だけで再解答し、公式解答と`5 / 5`一致
- 流量換算、全揚程、水動力、効率連鎖、余裕係数、台数切上げ、ファン相似則を教材内で完結
- 教材外知識補完 `0件`
- 固定範囲外論点追加 `0件`
- 未確認実車値追加 `0件`
- 最終判定: `PASS / COMPLETED`

## 次テーマ
Topic 30 `ATC① 新幹線は列車をどう検知する？`
系列SPEC固定範囲:
- レール
- 軌道回路
- 車軸短絡
- 電圧
- 電流
- 短絡
- リレー
- 列車検知
