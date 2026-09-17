# HANDOFF

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
current_status: `topic_11_explanation_pdf_complete`

## 今回完了

Topic 11「新幹線が移動すると電圧はどう変わる？」の解説PDFを制作し、表示・文字抽出・数式QAをPASSした。

前提の制作前品質ゲートは維持する。

- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`

追加成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_explanation.pdf`
- `topics/11_moving_train_voltage/11_moving_train_voltage_explanation_pdf_qa.md`

PDF品質確認:
- A4縦 `3ページ`
- 200 dpi表示QA `3 / 3 PASS`
- 文字欠け・重なり・ページ外・黒塗り・壊れた日本語/数式グリフ `0件`
- `pdftotext` PASS / U+FFFD `0件`
- 3段階例題の独立再計算 `3 / 3 PASS`
- SPEC固定内容 `6 / 6`
- パンタグラフ電圧・線路電流・有効電力損失・無効電力への数式接続 `4 / 4`
- 正式4問・17答案要素の本文接続 `17 / 17`
- Topic 12以降の先取り `0件`
- 未確認実設備値 `0件`
- 仕様追加 `0件`

PDFは解説sourceの単一移動負荷モデル、厳密受電端電圧式、近似電圧降下、`I²R` 損失、分布負荷積分、3段階例題をそのまま教材化しており、正式品質ゲートの範囲は変更していない。

## 現在地

Topic 11: `explanation_pdf_complete / IN_PROGRESS`。

完成数: `10 / 22`。

## 次に行う

Topic 11の正式4問・17答案要素と解説sourceを基準に、練習問題・完全解説sourceを制作する。練習PDF、計算プログラム、PowerPointはまだ制作しない。