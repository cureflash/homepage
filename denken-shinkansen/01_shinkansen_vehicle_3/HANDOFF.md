# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-10

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は19/38。01〜19がPASS。active topicは20 `N700S② 6極誘導電動機`。

## 今回進捗
20 `N700S② 6極誘導電動機` の不足していた必須3バイナリを再生成し、内容・計算・Visual QA後にGitHubへ配置した。Markdownを含む4成果物がGitHub上に実在することまで確認した。

Web catalogへの登録はまだ行っていないため、20はPASS計上しない。状態は `CATALOG_PUBLICATION_PENDING`。

## 20 EXAM_ALIGNMENT
対象: 第三種電気主任技術者 / 機械（誘導電動機、極数、同期速度、すべり、二次周波数、二次入力、二次銅損、V/f一定制御）。

公式過去問:
1. R6上 機械 問4 — V/f一定制御、極数、周波数、すべり、回転速度。
2. H28 機械 問4 — 同期ワット（二次入力）。
3. H25 機械 問4 — 二次入力、二次銅損、機械出力。
4. R6上 機械 問3 — 三相誘導機の基本用語と現象。
5. R5下 機械 問15 — 等価回路、比例推移、トルク、すべり。

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照日2026-08-30。

## 電験解説資料
- e-sysnet「三相誘導電動機の原理」
- e-sysnet「三相誘導電動機の特性」
- 電験三種まとめました 誘導機過去問解説
- 電験王 誘導機過去問解説

## N700S実例
佐藤賢司ほか「N700S 駆動システムの開発」（日本機械学会、2018, J-STAGE）で、SiC適用変換装置、走行風冷却、6極誘導電動機の組合せによる小型軽量化を確認。未確認の個別実運転周波数・実すべり・速度別トルク曲線・損失分解値は真値化していない。

## 成果物状態
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor.md` — GitHubへ配置
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_explanation.pdf` — GitHubへ配置
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_practice.pdf` — GitHubへ配置
- `topics/20_n700s_six_pole_motor/20_n700s_six_pole_motor_images.pptx` — GitHubへ配置

## 独立QA・Visual QA
練習15/15を独立再計算・再判定。選定公式過去問5件も教材だけで独立再解答し5/5 PASS。解説PDF 3ページ、練習PDF 3ページ、PowerPoint 6スライドを再レンダリングし、文字化け・クリップ・重なりなしを確認した。GitHub上でも4成果物の実在を確認済み。

## QA判定
20: `CATALOG_PUBLICATION_PENDING`。必須成果物は揃ったがWeb catalog未登録のため、完成数19/38のまま維持する。

## 次の正確な開始点
`qualifications/denken-shinkansen/catalog.json` に20を登録し、公開参照を確認して20をPASSへ進める。その後、21 `N700S③ バッテリー自走` の制作前EXAM_ALIGNMENTへ進む。
