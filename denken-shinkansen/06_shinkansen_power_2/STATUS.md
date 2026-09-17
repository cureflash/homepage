# STATUS

updated: 2026-09-17
series: `06_shinkansen_power_2`
active_topic: `11`
theme: 新幹線が移動すると電圧はどう変わる？
current_status: `topic_11_calculation_program_complete`
completed_topics: `10 / 22`

## Topic 11 current result

制作前EXAM_ALIGNMENTと制作前独立再解答をPASSした固定4問・17答案要素を基準に、解説本文source、解説PDF、練習問題・完全解説source、独立QA、練習PDFとPDF QA、計算プログラム・CSV・グラフと独立計算QAまで完了した。

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
- A4縦 `2ページ`
- 200 dpi表示QA `2 / 2 PASS`
- `pdftotext` 文字抽出QA: PASS / U+FFFD `0件`
- 3段階例題独立再計算 `3 / 3 PASS`
- SPEC固定内容 `6 / 6`
- SPEC指定計算量への数式接続 `4 / 4`
- 正式品質ゲート本文マッピング `17 / 17`

練習成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_practice.md`
- `topics/11_moving_train_voltage/11_moving_train_voltage_practice_qa.md`
- `topics/11_moving_train_voltage/11_moving_train_voltage_practice.pdf`
- `topics/11_moving_train_voltage/11_moving_train_voltage_practice_pdf_qa.md`
- 全15問: 基礎4 / 本試験標準8 / 複合・応用3
- 二種一次型五肢択一10問 / 二種二次型記述5問
- 一次型正答一意性: `10 / 10 PASS`
- 独立数値・論理QA: `15 / 15 PASS`
- 正式4問・17答案要素への練習接続: `17 / 17 PASS`
- SPEC固定6項目: `6 / 6 PASS`
- 計算プログラム指定4量への接続: `4 / 4 PASS`
- 練習PDF: A4縦 `8ページ`
- 200 dpi表示QA: `8 / 8 PASS`
- `pdftotext` 文字抽出QA: PASS / U+FFFD `0件`
- PDF SHA-256: `d7b6c17e52e9d15d6ecc07e2c9a7dc58acd503c6c784932da2d52bffb8c49527`
- Git blob SHA: `4aeffbd83faf7256161475899f8e3f8319d29073`
- GitHub正本bytes再レンダリング差分: `8 / 8ページ・0差分 PASS`

計算プログラム成果物:
- `topics/11_moving_train_voltage/11_moving_train_voltage_sim.py`
- `topics/11_moving_train_voltage/11_moving_train_voltage_sweep.csv`
- `topics/11_moving_train_voltage/11_moving_train_voltage_pantograph_voltage.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_line_current.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_active_loss.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_reactive_power.svg`
- `topics/11_moving_train_voltage/11_moving_train_voltage_sim_qa.md`
- 解説例題2の教材上仮定値を再利用し、`x=0.0 ... 12.0 km` を `0.1 km` 刻みで `121点` 掃引
- パンタグラフ電圧・線路電流・有効電力損失・無効電力: `4 / 4` CSV出力・グラフ化 PASS
- 代表点 `0 / 6 / 12 km` 独立再代入 PASS
- `x=12 km`: `Vr=24.866572 kV`, `I=178.731693 A`, `P_loss=15.333609 kW`
- 解説例題2の丸め値と一致
- 全点傾向QA: `Vr` 単調非増加、`I/P_loss/Q_line` 単調非減少、`Q_load` 一定 — PASS

本文・練習・計算プログラムでは、位置 `x` から `Z(x)` を作る方法、`S=P+jQ=VI*`、`V_s=V_r+ZI`、厳密な受電端電圧式、近似電圧降下、`I²R` 損失、位置比較、分布負荷の積分法を扱う。H30一次問7の導体量関係はTopic 10既習事項として再確認するだけで、新規主題にはしていない。

範囲監査:
- Topic 12以降の先取り: `0件`
- 未確認実設備値依存: `0件`
- 仕様追加: `0件`
- 公式過去問転載: `0件`
- 例題・練習・計算プログラム数値はすべて教材上の仮定値

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
- [ ] Topic 11 — 計算プログラム complete / IN_PROGRESS

## next_start

Topic 11の解説画像PowerPointを制作し、表示・数式・試験対応QAを行う。完成後blind再解答はまだ実施しない。
