# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_explanation_source_complete`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source作成を完了した。正式品質ゲートは固定5問・23答案要素のまま変更なし。

初回blindでは平成21年度二次「電力・管理」問6の2答案要素だけ、問題取得時に第三者解説ページの解答表示を先に見たためblind-validへ算入しなかった。2026-09-19のclean rerunでは公式問題PDF `20091129_ch_second_q01.pdf` の問6問題文・系統図・インピーダンス表だけを入力として独立再計算し、計算確定後に公式標準解答と照合した。

記録:
- `topics/16_short_circuit/16_short_circuit.md`
- `topics/16_short_circuit/16_short_circuit_preproduction_blind_20260919.md`
- `topics/16_short_circuit/16_short_circuit_preproduction_blind_clean_rerun_20260919.md`
- `topics/16_short_circuit/16_short_circuit_explanation.md`

正式品質ゲート:
- 令和2年度一次「電力」問3: `5 / 5 PASS`
- 平成25年度一次「電力」問4: `5 / 5 PASS`
- 令和7年度二次「電力・管理」問2: `5 / 5 PASS`
- 令和3年度二次「電力・管理」問3: `6 / 6 PASS`
- 平成21年度二次「電力・管理」問6: `2 / 2 PASS`
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`
- 公式標準解答との照合: `23 / 23一致`

H21問6 clean rerun:
- CB3開放: `6.08 kA`
- CB3投入: `10.3 kA`
- 判定: `2 / 2 PASS`

固定範囲:
- 短絡容量
- ％インピーダンス
- 単位法
- 正相・逆相・零相インピーダンス
- 三相短絡
- 一線地絡
- 線間短絡
- 二線地絡
- 対称座標法
- 故障種別―短絡電流

解説source:
- MASTER SPEC最低構成へ接続
- 3段階例題を収録
- 固定5問・23答案要素: `23 / 23 covered`
- 過去問逆算の固定10説明項目: `10 / 10`
- 三相短絡 / 一線地絡 / 線間短絡 / 二線地絡の故障別回路を収録
- 故障位置―短絡電流の教材用仮定データを収録
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 仕様追加: `0件`

Topic 16は未完了のため、完成数は `15 / 22` のまま。次工程は解説PDF生成＋PDF QA。

## Topic 15 completion

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋QA、練習source、練習PDF＋QA、PowerPoint＋QA、完成後blind独立再解答、Webカタログ登録、最終QAまで完了。

正式品質ゲート対象は一次3問＋二次2問、計5問・24答案要素で固定したまま変更なし。

### 制作前blind

- R2一次「電力」問6: `5 / 5 PASS`
- H28一次「電力」問5: `5 / 5 PASS`
- H26一次「電力」問1: `5 / 5 PASS`
- H25二次「電力・管理」問6: `3 / 3答案群 PASS`
- H21二次「電力・管理」問4: `6 / 6 PASS`
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`

記録:
- `topics/15_regenerative_power/15_regenerative_power_preproduction_blind_20260919.md`

### learner-facing成果物

解説source:
- `topics/15_regenerative_power/15_regenerative_power_explanation.md`
- 固定本文節マッピング `8 / 8`
- MASTER SPEC最低構成、3段階例題、SPEC固定時系列データを収録
- `系統受容性`、`電圧上昇`、`回生失効の概念` を収録

解説PDF:
- `topics/15_regenerative_power/15_regenerative_power_explanation.pdf`
- QA: `PASS`
- A4縦 `3ページ` / 200 dpi `3 / 3 PASS`
- 固定5問・24答案要素: `24 / 24 covered`

練習source/PDF:
- `topics/15_regenerative_power/15_regenerative_power_practice.md`
- `topics/15_regenerative_power/15_regenerative_power_practice.pdf`
- 全15問 / 一次型10 / 二次型5 / 完全解説15 / 15
- 固定5問・24答案要素: `24 / 24`
- PDF QA: `PASS`

PowerPoint:
- `topics/15_regenerative_power/15_regenerative_power_images.pptx`
- `topics/15_regenerative_power/15_regenerative_power_powerpoint_qa.md`
- 16:9 `5スライド`
- 現行artifact SHA-256: `6f64016cb118012d02ab080a6292a31dda279d9c856ddad4ba75eea557b37116`
- ZIP整合性 / overflow / 5枚表示 / PDF変換 / 文字抽出: `PASS`
- SPEC固定8項目: `8 / 8 PASS`
- SPEC固定3可視化: `3 / 3 PASS`
- 固定5問・24答案要素: `24 / 24 covered`
- QA総合判定: `PASS`

### 完成後blind

記録:
- `topics/15_regenerative_power/15_regenerative_power_completion_blind_20260919.md`

結果:
- R2一次「電力」問6: `5 / 5 PASS`
- H28一次「電力」問5: `5 / 5 PASS`
- H26一次「電力」問1: `5 / 5 PASS`
- H25二次「電力・管理」問6: `3 / 3答案群 PASS`
- H21二次「電力・管理」問4: `6 / 6 PASS`
- 一次: `15 / 15 PASS`
- 二次: `9 / 9 PASS`
- 合計: `5 / 5問・24 / 24答案要素 PASS`
- 判定: `PASS / topic_15_completion_blind_complete`

### Webカタログ・最終QA

`qualifications/denken-shinkansen/catalog.json` に既存Topic形式で登録済み。

- id: `15_regenerative_power`
- seriesId: `06_shinkansen_power_2`
- topicNo: `15`
- title: `回生した電力が大量に戻ったら？`
- explanation / practice / slides / source: Topic 15正本への相対パス

最終QA:
- `topics/15_regenerative_power/15_regenerative_power_final_qa.md`
- 判定: `PASS / COMPLETED`

## 品質境界

Topic 16:
- 固定EXAM_ALIGNMENT: `5問`（一次2・二次3）
- 固定答案要素: `23`（一次10・二次13）
- 制作前blind: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- 解説source固定答案要素: `23 / 23 covered`
- 解説source固定説明項目: `10 / 10`
- Topic 17保護・遮断・保護協調先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

Topic 15:
- 固定EXAM_ALIGNMENT: `5問`（一次3・二次2）
- 固定答案要素: `24`（一次15・二次9）
- 制作前blind: `24 / 24 PASS`
- 完成後blind: `24 / 24 PASS`
- 解説PDF QA: `PASS`
- 練習PDF QA: `PASS`
- PowerPoint QA: `PASS`
- Webカタログ登録: `PASS`
- 最終QA: `PASS / COMPLETED`
- 周辺問題による件数水増し: `0件`
- Topic 14問題の重複採用: `0件`
- Topic 16故障計算先取り: `0件`
- Topic 17保護・FRT設計先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- Topic 21需給制御一般の新規展開: `0件`
- 未確認実設備値の真値化: `0件`
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
- [x] Topic 14 completed
- [x] Topic 15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source完了 / 次は解説PDF＋QA

## next_start

`topics/16_short_circuit/16_short_circuit_explanation.md` からTopic 16解説PDFを生成し、PDF QAを行う。固定5問・23答案要素、固定10説明項目、3段階例題、故障種別の対称分回路、故障位置―短絡電流の可視化を欠落させない。練習source/PDF、PowerPoint、完成後blind、Topic 17以降はまだ行わない。
