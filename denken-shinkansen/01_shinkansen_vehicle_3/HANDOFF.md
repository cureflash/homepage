# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-30

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は19/38。01〜19がPASS。次のactive topicは20 `N700S② 6極誘導電動機`。

## 今回進捗
19 `N700S① SiC` の未完了だったバイナリ公開を解消した。Git object APIでPDF/PPTXをblob化し、並行してmainへ入った宅建更新を基底にreconcileして非forceで反映した。必須4成果物のGitHub実在を確認し、Web catalogへ19を登録した。

## 19 公式過去問
1. R6上 機械 問16 — IGBT単相ブリッジ、逆並列ダイオード、誘導性負荷、Q/D経路、`τ=L/R`。
2. R5上 機械 問10 — IGBT/MOSFET、SiC、逆方向電流、テイル電流。
3. R5上 機械 問16 — 単相インバータ、誘導性負荷、還流、波形。
4. R4下 機械 問16 — IGBT電圧形インバータ、R-L負荷、逆並列ダイオード、時定数。
5. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常動作。

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照日2026-08-30。

## 電験解説資料
- e-sysnet「パワーエレクトロニクスと半導体デバイス」
- e-sysnet「インバータの動作原理とその応用」
- 電験三種まとめました R5上問10、R6上問16、H29問10ほか

## N700S実例
佐藤賢司ほか「N700S 駆動システムの開発」（日本機械学会、2018）で、SiC適用変換装置、走行風冷却、6極誘導電動機の組合せによる小型軽量化を確認。未確認の個別素子値・実スイッチング周波数・変換効率は真値化していない。

## 成果物
- `topics/19_n700s_sic/19_n700s_sic.md`
- `topics/19_n700s_sic/19_n700s_sic_explanation.pdf` — 2ページ
- `topics/19_n700s_sic/19_n700s_sic_practice.pdf` — 15問、3ページ
- `topics/19_n700s_sic/19_n700s_sic_images.pptx` — 6スライド

## 独立QA・Visual QA
練習15/15を独立再計算・再判定。選定公式過去問5件も教材だけで独立再解答し5/5 PASS。解説PDF 2ページ、練習PDF 3ページ、PowerPoint 6スライドをレンダリングし、文字化け・クリップ・重なりなしを確認した。

## QA判定
19: `PASS`。EXAM_ALIGNMENT、教材内容、練習問題、独立再解答、計算QA、Visual QA、必須4成果物、Web catalog公開をすべて満たした。完成数19/38。

## 次の正確な開始点
20 `N700S② 6極誘導電動機` の制作前EXAM_ALIGNMENT。一般財団法人 電気技術者試験センター公式過去問を原則5件以上確認し、年度・期・科目・問番号、要求知識、使用公式、設問型、典型ミスをsource Markdownへ記録してから本文へ進む。
