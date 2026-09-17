# STATUS

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
theme: 新幹線が移動すると電圧はどう変わる？
current_status: `topic_11_explanation_pdf_complete`
completed_topics: `10 / 22`

## Topic 11 current result

制作前EXAM_ALIGNMENTと制作前独立再解答をPASSした固定4問・17答案要素を基準に、解説本文sourceと3段階例題に続き、解説PDFと表示・文字抽出・数式QAを完了した。

正式品質ゲート:
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成27年度 第二種二次「電力・管理」問3 — `4 / 4 PASS`
- 平成27年度 第二種二次「電力・管理」問4 — `5 / 5 PASS`
- 平成26年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 一次1問＋二次3問、計 `4 / 4問・17 / 17答案要素 PASS`

解説成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_explanation.md`
- `topics/11_moving_train_voltage/11_moving_train_voltage_explanation.pdf`
- `topics/11_moving_train_voltage/11_moving_train_voltage_explanation_pdf_qa.md`
- A4縦 `3ページ`
- 200 dpi表示QA `3 / 3 PASS`
- `pdftotext` 文字抽出QA: PASS / U+FFFD `0件`
- 3段階例題独立再計算 `3 / 3 PASS`
- SPEC固定内容 `6 / 6`
- SPEC指定計算量への数式接続 `4 / 4`
- 正式品質ゲート本文マッピング `17 / 17`

本文・PDFでは、位置 `x` から `Z(x)` を作る方法、`S=P+jQ=VI*`、`V_s=V_r+ZI`、厳密な受電端電圧式、近似電圧降下、`I²R` 損失、位置掃引、分布負荷の積分法を扱う。H30一次問7の導体量関係はTopic 10既習事項として再確認するだけで、新規主題にはしていない。

範囲監査:
- Topic 12以降の先取り: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`
- 例題数値はすべて教材上の仮定値

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [ ] Topic 11 — 解説PDF complete / IN_PROGRESS

## next_start

Topic 11の正式4問・17答案要素と解説sourceを基準に、練習問題・完全解説sourceを制作する。練習PDF、計算プログラム、PowerPointはまだ制作しない。