# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `14`
theme: 新幹線の力率と電圧をどう維持する？
current_status: `topic_14_final_qa_needs_revision`
completed_topics: `13 / 22`

## Completed through Topic 13

Topic 01〜13は `completed`。

直近完了:
- Topic 12「N700Sが何本も同時加速したら？」: `PASS / completed`、固定5問・25答案要素 `25 / 25 PASS`
- Topic 13「単相の新幹線負荷は三相系統を乱さない？」: `PASS / completed`、固定2問・8答案要素 `8 / 8 PASS`

主要記録:
- `topics/12_multiple_train_load/12_multiple_train_load_final_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_final_qa.md`
- `qualifications/denken-shinkansen/catalog.json`

## Topic 14 progress

Topic 14「新幹線の力率と電圧をどう維持する？」は、制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、各QA、修正版成果物に対する完成後blind独立再解答まで実施済み。

2026-09-19に最終QAを実施し、技術内容・過去問対応品質ゲートはPASSしたが、進捗記録整合、PowerPoint QAと現行GitHub正本バイナリの指紋整合、Web公開にblockerがあるため `NEEDS_REVISION / IN_PROGRESS` とした。

最終QA:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_final_qa.md`

### 正式固定問題

- 令和6年度 第二種一次「電力」問5 — `5答案要素`
- 令和4年度 第二種一次「法規」問4 — `5答案要素`
- 令和5年度 第二種二次「電力・管理」問4 — `2答案要素`
- 令和2年度 第二種二次「電力・管理」問6 — `4答案要素`
- 平成23年度 第二種二次「電力・管理」問3 — `5答案要素`
- 合計: 一次2問＋二次3問、`5問・21答案要素`

固定EXAM_ALIGNMENT変更: `0件`。
新規正式過去問追加: `0件`。

### 完成後blind独立再解答

- R6一次「電力」問5: `5 / 5 PASS`
- R4一次「法規」問4: `5 / 5 PASS`
- R5二次「電力・管理」問4: `2 / 2 PASS`
- R2二次「電力・管理」問6: `4 / 4 PASS`
- H23二次「電力・管理」問3: `5 / 5 PASS`
- 一次: `10 / 10 PASS`
- 二次: `11 / 11 PASS`
- 合計: `5 / 5問・21 / 21答案要素 PASS`
- 制作前不足「最低必要容量を不足側へ丸めない」: `PASS / 改善維持`
- 前回完成後blind blocker「66 kV側等価値 → 154 kV一次側」: `PASS / 改善確認`

記録:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_blind_reanswer_20260919.md`

### 成果物・QA

解説:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_explanation_pdf_qa.md`
- 現行PDF Git blob: `af004d565ace53bcb2334ae038e4355fc57bc649`
- A4縦5ページ、200 dpi表示 `5 / 5 PASS`
- 3段階例題 `3 / 3 PASS`
- SPEC固定3可視化 `3 / 3 PASS`
- 固定5問・21答案要素 `21 / 21 covered`

練習:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.md`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice.pdf`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_practice_pdf_qa.md`
- 15問（一次型10＋二次型5）
- 200 dpi表示 `7 / 7 PASS`
- 数値・論理 `15 / 15 PASS`
- 一次型正答一意性 `10 / 10 PASS`
- 固定5問・21答案要素 `21 / 21 covered`

PowerPoint:
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_images.pptx`
- `topics/14_power_factor_voltage_control/14_power_factor_voltage_control_powerpoint_qa.md`
- QA本文上は4スライド、表示 `4 / 4 PASS`、overflow 0、SPEC固定10項目 `10 / 10`、3可視化 `3 / 3`、固定21答案要素 `21 / 21`
- ただしQA記録のファイルサイズ `39281 bytes` と現行GitHub正本 `15002 bytes`・blob `9ad4e4bc2e0c8f7eafbeb83f277c05496b2303d8` が不一致。現行バイナリを再QAするまで最終証跡として確定しない。

### 最終QA blocker

1. `14_power_factor_voltage_control_explanation.md` のstage・次工程が旧状態。
2. `14_power_factor_voltage_control_practice.md` が練習PDF・PowerPoint・blindを未実施としている。
3. `14_power_factor_voltage_control_explanation_pdf_qa.md` の次工程が完成後blind再実施のまま。
4. `14_power_factor_voltage_control_practice_pdf_qa.md` の次工程がPowerPoint制作のまま。
5. `14_power_factor_voltage_control_powerpoint_qa.md` がTopic全体をblind再実施前としている。
6. PowerPoint QA記録のファイル指紋が現行GitHub正本と不一致。
7. `qualifications/denken-shinkansen/catalog.json` にTopic 14が未登録。

### 品質境界

- SPEC固定10項目: `10 / 10 covered`
- SPEC固定3可視化: `3 / 3 maintained`
- Topic 15以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・Topic 20安定度先取り: `0件`
- 固定範囲外の件数水増し: `0件`
- 未確認実設備値の真値化: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

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
- [ ] Topic 14 — final QA `NEEDS_REVISION`; blocker 7件

## next_start

Topic 14の最終QA blocker 7件を解消する。固定5問・21答案要素と教材技術範囲は変更しない。

1. 旧進捗記録を現行工程へ同期する。
2. 現行GitHub正本PPTXを再QAし、現行blobに対応するQA記録へ更新する。
3. Topic 14の解説PDF・練習PDF・PowerPoint・sourceを `qualifications/denken-shinkansen/catalog.json` へ登録する。
4. 最終QAを再判定する。

全件PASSまではTopic 14を `completed` にせず、Topic 15へ進めない。
