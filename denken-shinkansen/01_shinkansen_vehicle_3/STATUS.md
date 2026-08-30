# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 19 / 38
- current_status: `topic_19_pass`
- last_completed_topic: `19 N700S① SiC`
- active_topic: `20 N700S② 6極誘導電動機`
- next_start: topic 20の制作前EXAM_ALIGNMENT。公式過去問を原則5件以上確認してsource Markdownへ記録する

## 新品質ゲート進捗
- [x] 01〜19 — PASS

## 19 EXAM_ALIGNMENT
公式過去問5件:
1. R6上 機械 問16 — IGBTブリッジ、逆並列ダイオード、誘導性負荷、`τ=L/R`。
2. R5上 機械 問10 — IGBT/MOSFET、SiC、逆方向電流、テイル電流。
3. R5上 機械 問16 — 単相インバータ、誘導性負荷、還流、波形。
4. R4下 機械 問16 — IGBT電圧形インバータ、R-L負荷、Q/D経路、時定数。
5. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常動作。

参照: 電気技術者試験センター公式過去問・解答、e-sysnet、電験三種まとめました。参照日2026-08-30。

## 19 成果物
GitHub上で必須4成果物の実在を確認済み。
- `topics/19_n700s_sic/19_n700s_sic.md`
- `topics/19_n700s_sic/19_n700s_sic_explanation.pdf` — 2ページ
- `topics/19_n700s_sic/19_n700s_sic_practice.pdf` — 15問、3ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/19_n700s_sic/19_n700s_sic_images.pptx` — 6スライド

## 独立再解答・QA
教材だけで選定5件を独立再解答し5/5 PASS。練習15/15も独立再計算・再判定済み。代表値は `2 ms`, `400 W`, `120 W`, `520 W`, `99.48%`, `1.15 kW`, `99.54%`、周波数3倍時の`P_sw` 3倍。

## Visual QA
解説PDF 2ページ、練習PDF 3ページ、PowerPoint 6スライドをレンダリングし、文字化け・クリップ・重なりなしを確認。

## QA判定
19: `PASS`。EXAM_ALIGNMENT、本文、15問練習、独立再解答、計算QA、Visual QA、4成果物のGitHub実在、Web catalog登録をすべて満たした。

## Web公開
`qualifications/denken-shinkansen/catalog.json` にtopic 19を登録済み。

## 次
20 `N700S② 6極誘導電動機` の制作前EXAM_ALIGNMENTから開始する。
