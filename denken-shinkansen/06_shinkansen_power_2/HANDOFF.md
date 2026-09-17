# HANDOFF

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
current_status: `topic_11_practice_pdf_complete`

## 今回完了

Topic 11「新幹線が移動すると電圧はどう変わる？」の練習PDFを制作し、表示・文字抽出・数式・問題解答整合QAをPASSした。

前提の制作前品質ゲートは維持する。

- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 合計: `4 / 4問・17 / 17答案要素 PASS`

追加成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_practice.pdf`
- `topics/11_moving_train_voltage/11_moving_train_voltage_practice_pdf_qa.md`

練習PDF品質確認:
- A4縦 `8ページ`
- 全15問 / 完全解説15問を収録
- 200 dpi表示QA: `8 / 8 PASS`
- 文字切れ・重なり・欠落: `0件`
- `pdftotext -layout`: PASS / U+FFFD `0件`
- source独立QA `15 / 15 PASS` を維持
- 正式4問・17答案要素への接続: `17 / 17 PASS`
- SPEC固定6項目: `6 / 6 PASS`
- パンタグラフ電圧・線路電流・有効電力損失・無効電力への接続: `4 / 4 PASS`
- PDF SHA-256: `916bfee4e38eb4ad3c98f16a73be303b929587b07c54abbbe86cfaa02ed071f8`
- Topic 12以降の先取り: `0件`
- 未確認実設備値: `0件`
- 仕様追加: `0件`
- 公式過去問転載: `0件`

## 現在地

Topic 11: `practice_pdf_complete / IN_PROGRESS`。

完成数: `10 / 22`。

## 次に行う

Topic 11 SPECの計算プログラムを制作し、列車位置 `x` を連続掃引してパンタグラフ電圧・線路電流・有効電力損失・無効電力を計算・グラフ化する。PowerPointはまだ制作しない。