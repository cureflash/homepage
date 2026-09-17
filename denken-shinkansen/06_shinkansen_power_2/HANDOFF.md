# HANDOFF

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `12`
current_status: `topic_12_practice_pdf_complete`

## 今回完了

Topic 12「N700Sが何本も同時加速したら？」の練習PDFとPDF QAを制作した。

成果物:
- `topics/12_multiple_train_load/12_multiple_train_load_practice.pdf`
- `topics/12_multiple_train_load/12_multiple_train_load_practice_pdf_qa.md`

構成・QA:
- A4縦7ページ、200 dpi表示QA `7 / 7 PASS`
- 全15問・完全解説 `15 / 15 PASS`
- 二種一次型五肢択一 `10 / 10 PASS`
- 二種二次型記述 `5 / 5 PASS`
- 一次型正答一意性 `10 / 10 PASS`、複数正答 `0件`
- 二次記述の途中式・単位・符号・検算 `5 / 5 PASS`
- 文字抽出PASS、U+FFFD `0件`
- 固定5問・25答案要素への教材内接続 `25 / 25 PASS`
- SPEC固定8項目への接続 `8 / 8 PASS`

制作前再解答で不足していた進み/遅れ無効電力の符号規約をPDFでも維持した。
- `S=P+jQ`
- 遅れ `Q>0`
- 進み `Q<0`
- 三相負荷 `I=(P-jQ)/(√3V)`
- 問13で進み負荷の符号誤りがKVL・ループ電流へ伝搬することを確認

## 正式品質ゲート

固定済み品質ゲートは変更していない。
- 令和4年度 第二種二次「電力・管理」問6 — 制作前再解答 `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — 制作前再解答 `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — 制作前再解答 `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — 制作前再解答 `1 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — 制作前再解答 `3 / 3 PASS`
- 制作前合計: 一次1問＋二次4問、`23 / 25答案要素 PASS`

PDFの `25 / 25` は教材内カバレッジ確認であり、完成後blind独立再解答PASSではない。

## 品質境界

- 固定5問・25答案要素の変更: `0件`
- Topic 13以降の論点追加: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 現在地

Topic 11: `completed`。

Topic 12: 解説PDF＋QA、練習問題source＋source QA、練習PDF＋PDF QAまで完了。品質ゲートは完成後blind独立再解答まで未通過。

完成数: `11 / 22`。

## 次に行う

Topic 12 SPECの計算・可視化に従い、列車本数を変化させたときの電圧・損失を計算するプログラムと結果CSV・グラフを制作する。固定5問・25答案要素と符号規約を維持し、仕様外論点・Topic 13以降・未確認N700S実設備値は追加しない。
