# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 19 / 38
- current_status: `topic_20_binary_publication_pending`
- last_completed_topic: `19 N700S① SiC`
- active_topic: `20 N700S② 6極誘導電動機`
- next_start: topic 20の解説PDF・練習PDF・PowerPointをGitHubへ配置し、4成果物実在確認後にWeb catalog公開とPASS計上を行う

## 新品質ゲート進捗
- [x] 01〜19 — PASS
- [ ] 20 N700S② 6極誘導電動機 — EXAM_ALIGNMENT・本文・ローカル成果物QA完了、GitHubバイナリ配置待ち

## 20 EXAM_ALIGNMENT
公式過去問5件:
1. R6上 機械 問4 — V/f一定制御、6極・66Hz・すべり5%から回転速度を求める。
2. H28 機械 問4 — 6極・50Hz・トルク200N·mから同期ワット（二次入力）を求める。
3. H25 機械 問4 — 二次入力、二次銅損、機械出力の配分。
4. R6上 機械 問3 — 三相誘導機の基本用語、回転磁界、すべり、二次周波数。
5. R5下 機械 問15 — 誘導電動機の等価回路、比例推移、トルク、すべり。

参照: 電気技術者試験センター公式過去問・解答、e-sysnet、電験三種まとめました、電験王。参照日2026-08-30。

## 20 成果物状態
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor.md` — GitHubへ配置
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_explanation.pdf` — ローカル生成済み、GitHub未配置
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_practice.pdf` — ローカル生成済み、GitHub未配置
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_images.pptx` — ローカル生成済み、GitHub未配置

## 独立再解答・QA
教材だけで選定5件を独立再解答し5/5 PASS。練習15/15も独立再計算・再判定済み。代表値は `1320`, `1254`, `20.94kW`, `4kW`, `96kW`, `2280`, `120Hz`, `80Hz`, `70.7%`, `1194N·m`, `2400V`。

## Visual QA
解説PDF 3ページ、練習PDF 3ページ、PowerPoint 6スライドをローカルで生成・確認。文字化け・クリップ・重なりなし。

## QA判定
20: `BINARY_PUBLICATION_PENDING`。EXAM_ALIGNMENT、本文、15問練習、独立再解答、計算QA、ローカルVisual QAは完了。ただしGitHub上の必須PDF/PPTX未配置のため、完成数には計上しない。

## Web公開
20は未公開。4成果物がGitHub上に揃った後に `qualifications/denken-shinkansen/catalog.json` へ登録する。

## 次
20のPDF/PPTXバイナリをGitHubへ配置し、4成果物実在確認後に20をPASSへ進める。
