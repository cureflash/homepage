# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 16 / 38
- current_status: `topic_16_pass`
- last_completed_topic: `16 N700系 車両システム制御`
- next_topic: `17 E5系 320km/h運転`
- next_start: topic 17の制作前EXAM_ALIGNMENTから開始する

## 新品質ゲート進捗
- [x] 01〜16 — PASS
- [ ] 17 E5系 320km/h運転 — 次の未完了テーマ

## 16 EXAM_ALIGNMENT
公式過去問5件: R6上機械問13、R4上機械問15、R3機械問13、H30機械問13、H28機械問13。

要求論点は、シーケンス/フィードバックの区別、ブロック線図、一巡/閉ループ伝達関数、一次遅れとBode線図、複雑ブロック線図の信号方程式、PIDと定常偏差。正本は電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnet、電験王、電験三種まとめました。参照日2026-08-30。

## 新幹線実例
JR東海公式でN700系の2007年営業開始と新幹線初の車体傾斜、N700Aの2013年営業開始と定速走行装置を確認。JR東海は定速走行装置を「速度信号に沿った走行制御」と説明。日本機械学会誌のJR東海著者記事で、空気ばね式車体傾斜、デジタル列車制御、情報伝送の組合せを確認。非公開の実制御ゲイン・伝達関数・センサ構成は真値化していない。

## 成果物
- `topics/16_n700_system_control/16_n700_system_control.md`
- `topics/16_n700_system_control/16_n700_system_control_explanation.pdf`
- `topics/16_n700_system_control/16_n700_system_control_practice.pdf` — 15問（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/16_n700_system_control/16_n700_system_control_images.pptx` — 5スライド

## QA
- 練習15/15独立再計算・再判定PASS。
- 解説/練習PDFを200 dpiでVisual QA。
- PowerPointをPDF変換後200 dpiでVisual QA。文字化け・クリップ・重なりなし。

## 公式過去問独立再解答
- R6上問13 → `(2)` PASS
- R4上問15 → `(a)2`, `(b)3` PASS
- R3問13 → `(2)` PASS
- H30問13 → `(4)` PASS
- H28問13 → `(2)` PASS

選定5件すべて公式解答一致。教材内の定義・式・解法だけで再構成できた。

## QA判定
16: `PASS`。新品質基準の完成数は16/38。

## Web公開
16のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ登録する。

## 次
17 `E5系 320km/h運転` の本文作成前EXAM_ALIGNMENTから開始する。
