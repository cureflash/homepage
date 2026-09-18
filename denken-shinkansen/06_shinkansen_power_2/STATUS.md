# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `14`
theme: 新幹線の力率と電圧をどう維持する？
current_status: `topic_14_independent_reanswer_needs_revision`
completed_topics: `13 / 22`

## Topic 12 final result

Topic 12「N700Sが何本も同時加速したら？」は最終QA再判定まで完了し、`PASS / completed`。

正式品質ゲート:
- 令和4年度 第二種二次「電力・管理」問6 — `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — `3 / 3 PASS`
- 合計: 一次1問＋二次4問、`5 / 5問・25 / 25答案要素 PASS`

完成後blind独立再解答:
- 一次: `5 / 5答案要素 PASS`
- 二次: `20 / 20答案要素 PASS`
- 合計: `5 / 5問・25 / 25答案要素 PASS`
- 制作前不足2要素: `2 / 2 改善確認`

成果物・QA:
- 解説PDF: `3 / 3` ページ表示PASS、3段階例題 `3 / 3 PASS`
- 練習: 15問、一次10＋二次5、数値・論理 `15 / 15 PASS`
- 練習PDF: `7 / 7` ページ表示PASS
- 計算プログラム: CSV `5 / 5`、高電圧側解 `5 / 5`、SVG `2 / 2`、複素KVL再代入PASS
- PowerPoint: `4 / 4` スライド表示PASS、SPEC固定8項目 `8 / 8`、指定2量 `2 / 2`
- 進捗記録整合: PASS
- Webカタログ登録: PASS

品質境界:
- 固定5問・25答案要素の変更: `0件`
- Topic 13以降の先取り: `0件`
- 教材外知識補完: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/12_multiple_train_load/12_multiple_train_load.md`
- `topics/12_multiple_train_load/12_multiple_train_load_final_qa.md`
- `topics/12_multiple_train_load/12_multiple_train_load_blind_reanswer_20260918.md`
- `qualifications/denken-shinkansen/catalog.json`

## Topic 13 final result

Topic 13「単相の新幹線負荷は三相系統を乱さない？」は、制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、各QA、完成後blind独立再解答、初回最終QA、進捗記録同期、最終QA再判定まで完了し、`PASS / completed`。

正式品質ゲート:
- 平成28年度 第二種一次「法規」問6 — `5 / 5答案要素 PASS`
- 平成23年度 第二種二次「電力・管理」問4 — `3 / 3答案要素 PASS`
- 合計: 一次1問＋二次1問、`2 / 2問・8 / 8答案要素 PASS`

原則5問未満だが、現行公式問題・公式解答を双方確認でき、Topic 13固定範囲だけで問題全体を扱える正式問題は2問。件数合わせのためTopic 16故障計算・配電方式・保護・法令詳細を追加していない。

制作前blind独立再解答:
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

完成後blind独立再解答:
- H28一次 法規 問6: `(ヌ, ハ, チ, イ, リ)`、`5 / 5 PASS`
- H23二次 電力・管理 問4: `52.0 kW / 24.0 kW / 95.0 %`、`3 / 3 PASS`
- 合計: `2 / 2問・8 / 8答案要素 PASS`
- 制作前不足2答案要素: `2 / 2 改善確認`
- 公式解答・標準解答は候補解固定後に照合。

成果物・QA:
- `13_three_phase_unbalance_explanation.pdf`: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS、3段階例題 `3 / 3 PASS`。
- `13_three_phase_unbalance_practice.md`: 15問（一次10＋二次5）、正式8答案要素 `8 / 8` 接続。
- `13_three_phase_unbalance_practice.pdf`: A4縦10ページ、表示 `10 / 10 PASS`、文字抽出PASS、数値・論理 `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`。
- `13_three_phase_unbalance_images.pptx`: 16:9・4枚、表示 `4 / 4 PASS`、overflow 0、ZIP整合性PASS、SPEC固定8項目 `8 / 8`、正式8答案要素 `8 / 8`。
- `qualifications/denken-shinkansen/catalog.json`: Topic 13登録済み。

初回最終QAの4 blocker:
1. 主source旧進捗記録 — 解消。
2. 練習source旧進捗記録 — 解消。
3. PowerPoint QA旧次工程 — 解消。
4. Webカタログ未登録 — 解消。

最終QA再判定:
- 上位仕様: PASS
- 固定EXAM_ALIGNMENT: PASS
- 必須成果物: PASS
- 完成後blind: PASS
- PDF/PPTX・練習QA: PASS
- SPEC境界: PASS
- 進捗記録整合: PASS
- Web公開: PASS
- 判定: `PASS / completed`

品質境界:
- 正式過去問追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_images.pptx`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_powerpoint_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_final_qa.md`
- `qualifications/denken-shinkansen/catalog.json`

## Topic 14 progress

Topic 14「新幹線の力率と電圧をどう維持する？」は制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋PDF QA、練習問題・完全解説source、練習PDF＋PDF QA、解説画像PowerPoint＋QA、完成後blind独立再解答まで実施。完成後blindは `20 / 21 PASS` でH23二次問3 (2a)に1 blockerが残り、`NEEDS_REVISION`。最終QAは未着手。

正式固定問題:
- 令和6年度 第二種一次「電力」問5 — `5答案要素`
- 令和4年度 第二種一次「法規」問4 — `5答案要素`
- 令和5年度 第二種二次「電力・管理」問4 — `2答案要素`
- 令和2年度 第二種二次「電力・管理」問6 — `4答案要素`
- 平成23年度 第二種二次「電力・管理」問3 — `5答案要素`
- 合計: 一次2問＋二次3問、`5問・21答案要素`

制作前blind独立再解答:
- R6一次「電力」問5: `5 / 5 PASS`
- R4一次「法規」問4: `5 / 5 PASS`
- R5二次「電力・管理」問4: `2 / 2 PASS`
- R2二次「電力・管理」問6: `3 / 4 PASS`
- H23二次「電力・管理」問3: `5 / 5 PASS`
- 合計: `20 / 21 PASS`

解説source:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.md`
- SPEC固定10項目: `10 / 10 covered`
- SPEC固定3可視化: `3 / 3 source data defined`
- 固定5問・21答案要素: `21 / 21 mapped`
- 3段階例題: `3 / 3`
- 制作前blind不足1答案要素: `1 / 1 explanation strengthened`

解説PDF・QA:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation_pdf_qa.md`
- A4縦: `6ページ`
- 200 dpi表示: `6 / 6 PASS`
- 文字抽出: `PASS`
- SPEC固定10項目: `10 / 10 covered`
- SPEC固定3可視化: `3 / 3 covered`
- 3段階例題独立再計算: `3 / 3 PASS`
- 固定5問・21答案要素: `21 / 21 covered`
- 制作前blind不足1答案要素: `1 / 1 改善説明確認`

練習source:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.md`
- 全15問: 基礎4、本試験標準8、複合・応用3
- 二種一次型五肢択一: `10問`
- 二種二次型記述: `5問`
- 固定5問・21答案要素: `21 / 21 mapped`
- SPEC固定10項目: `10 / 10 covered`
- 制作前blind不足1要素: 問8・問12で再訓練
- 数値・論理の期待値をsource内QA表へ固定

練習PDF・QA:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice_pdf_qa.md`
- A4縦: `7ページ`
- 200 dpi表示: `7 / 7 PASS`
- 文字抽出: `PASS`、U+FFFD `0件`、ページ外逸脱 `0件`
- 収録問題・完全解説: `15 / 15 PASS`
- 数値・論理独立再計算: `15 / 15 PASS`
- 一次型10問の正答一意性: `10 / 10 PASS`
- 正答列: `2, 3, 2, 3, 2, 2, 3, 3, 3, 2`
- 固定5問・21答案要素: `21 / 21 covered`
- SPEC固定10項目: `10 / 10 covered`
- 制作前blind不足1答案要素: 問8・問12で再訓練PASS

PowerPoint・QA:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_images.pptx`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_powerpoint_qa.md`
- 16:9: `4スライド`
- 全スライド表示: `4 / 4 PASS`
- `slides_test.py`: `PASS / No overflow detected`
- PPTX ZIP整合性: `PASS`
- LibreOffice PDF変換: `4ページ PASS`
- PDF文字抽出: `PASS / U+FFFD 0件`
- SPEC固定10項目: `10 / 10 PASS`
- SPEC固定3可視化: `3 / 3 PASS`
- 固定5問・21答案要素: `21 / 21` 説明接続
- 制作前blind不足1答案要素: Slide 4で `1 / 1` 改善説明維持
- 未確認実設備値: 使用せず、数値は教材用仮定値と明示

不足1答案要素の補強:
- R2二次問6の最小コンデンサ容量。容量制約を `S<=ST` の不等式として扱い、境界値が正しくても最終設備容量を不足側へ丸めない手順を明記した。正式問題の境界 `2690.52 kvar` に対して、公式標準解答の `2.70×10^3 kvar` へ接続する。
- 練習問8・問12では `1.8769 Mvar` の境界に対し、`0.1 Mvar` 刻みなら `1.9 Mvar` を採用する同型処理を再訓練する。
- PowerPoint Slide 4では同じ仮定例をP-Q容量円と `1.8 / 1.9 Mvar` の再代入比較で可視化した。

完成後blind独立再解答:
- R6一次「電力」問5: `5 / 5 PASS`
- R4一次「法規」問4: `5 / 5 PASS`
- R5二次「電力・管理」問4: `2 / 2 PASS`
- R2二次「電力・管理」問6: `4 / 4 PASS`
- H23二次「電力・管理」問3: `4 / 5 PASS`
- 合計: `20 / 21 PASS`
- 一次: `10 / 10 PASS`
- 二次: `10 / 11 PASS`
- 制作前blind不足1要素「最低必要容量を不足側へ丸めない」: `1 / 1 改善確認`
- 新規blocker: H23二次問3 (2a)。66 kV側等価値 `66.258 kV` を一次母線へ `154/66` で戻す答案処理をblind解答で落とした。公式標準解答は `154.6 kV ≒ 155 kV`。
- 判定: `NEEDS_REVISION`

品質境界:
- 固定5問・21答案要素の変更: `0件`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 covered`
- 一次・二次合計5問: `PASS`
- 二次記述・計算: `3問`
- 参考教材2系統以上: `PASS / e-sysnet.com + 電験王2`
- Topic 15以降の先取り: `0件`
- 固定範囲外の件数水増し: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_preproduction_blind_reanswer_20260918.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation_pdf_qa.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice_pdf_qa.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_images.pptx`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_powerpoint_qa.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_blind_reanswer_20260918.md`

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
- [x] Topic 11 completed
- [x] Topic 12 completed
- [x] Topic 13 completed
- [ ] Topic 14 — completion blind re-answer `20 / 21`; H23 primary-side voltage conversion revision pending

## next_start

H23二次問3 (2a) を根拠に、固定範囲を増やさず解説sourceへ「66 kV側等価値から一次母線へ154/66で戻す」答案処理を明示し、必要なlearner-facing成果物へ同期する。全21答案要素PASSまでは最終QAを行わない。
