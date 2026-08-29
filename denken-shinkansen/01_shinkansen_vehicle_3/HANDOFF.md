# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-30

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。制作順01→10を先頭から再確認し、active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は16/38。01〜16がPASS。

## 今回完了
`16 N700系 車両システム制御` を制作前EXAM_ALIGNMENTから本文・練習・PowerPoint・Visual QA・独立過去問再解答まで進め、PASSした。

## 公式過去問
R6上機械問13、R4上機械問15、R3機械問13、H30機械問13、H28機械問13。正本は電気技術者試験センター公式問題・解答。参照教材はe-sysnet、電験王、電験三種まとめました。参照日2026-08-30。

## 教材範囲
目標値・制御量・操作量・偏差・センサ、シーケンス/フィードバック、負帰還、`CG/(1+CGH)`、一巡`CGH`、途中信号によるブロック線図整理、一次遅れ、折点角周波数、Bode線図、PID、定常偏差まで収録。

## 新幹線資料
JR東海公式でN700系の新幹線初の車体傾斜と、N700Aの定速走行装置を確認。JR東海は定速走行を「速度信号に沿った走行制御」と説明。日本機械学会誌のJR東海著者記事で空気ばね式車体傾斜、デジタル列車制御、情報伝送を確認。定速走行の教材ブロック線図は標準フィードバックへの抽象化で、実車実装図ではない。

## 成果物
- `topics/16_n700_system_control/16_n700_system_control.md`
- `topics/16_n700_system_control/16_n700_system_control_explanation.pdf`
- `topics/16_n700_system_control/16_n700_system_control_practice.pdf` — 15問
- `topics/16_n700_system_control/16_n700_system_control_images.pptx` — 5スライド

## QA
練習15/15独立再計算PASS。解説/練習PDFを200 dpi、PPTXをPDF変換後200 dpiでVisual QAし、文字化け・クリップ・重なりなし。

## 公式過去問独立再解答
- R6上問13 → `(2)` PASS
- R4上問15 → `(a)2`, `(b)3` PASS
- R3問13 → `(2)` PASS
- H30問13 → `(4)` PASS
- H28問13 → `(2)` PASS

選定5件すべて公式解答一致。教材外知識の補完なし。

## QA判定
16: `PASS`。完成数16/38。

## Web公開
16をカタログへ登録。

## 判断不能事項
N700/N700Aの実制御ゲイン、実伝達関数、速度検出器の詳細構成、車体傾斜の詳細制御則は公開一次資料で確認できないため真値化していない。試験用ブロック線図は標準制御系への抽象化と明記した。

## 次の正確な開始点
MASTER制作順を01から確認し01〜16が新品質基準PASSであることを確認後、17 `E5系 320km/h運転` をactive topicとし、本文作成前に関連公式過去問5問以上を優先調査してEXAM_ALIGNMENTを作成する。
