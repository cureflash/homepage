# Topic 22 最終QA

更新日: 2026-09-21

判定: `PASS / topic_22_final_qa_pass / completed`

## 対象
- active topic: `22 東京→新大阪を主回路＋走行制御でシミュレーション`
- 固定EXAM_ALIGNMENT: 一次4問＋二次2問、計6問・16答案要素
- QA前完成数: `21 / 22`
- QA後完成数: `22 / 22`

## 1. 上位仕様・系列仕様
`denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` と現行mainを再照合した。

- 二種一次・二次を合わせて公式過去問5問以上: `6問 / PASS`
- 一次・二次を含む: `一次4問＋二次2問 / PASS`
- 二次記述式を含む: `2問 / PASS`
- 令和8年度最新一次問題を含む: `PASS`
- 2026-09-20時点の最新公表二次問題を含む: `PASS`
- 固定16答案要素を教材へ割当: `16 / 16 COVERED`
- Topic 22の系列SPEC入力10項目: `10 / 10 COVERED`
- Topic 22の系列SPEC出力8項目: `8 / 8 COVERED`
- 指定グラフ6種: `6 / 6 GENERATED / COVERED`
- 未確認実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`

## 2. 必須成果物
現行mainで次を確認した。

- 解説source: `22_integrated_route_simulation.md`
- 計算プログラム: `22_integrated_route_simulation_calc.py`
- 計算結果CSV: `22_integrated_route_simulation_results.csv`
- 計算QA: `22_integrated_route_simulation_calculation_qa.md`
- 指定6グラフ: `22_time_speed.svg`、`22_time_acceleration.svg`、`22_time_current.svg`、`22_time_torque.svg`、`22_time_power.svg`、`22_time_regeneration_power.svg`
- 解説PDF: `22_integrated_route_simulation_explanation.pdf`
- 解説PDF QA: `22_integrated_route_simulation_explanation_pdf_qa.md`
- 練習source: `22_integrated_route_simulation_practice.md`
- 練習PDF: `22_integrated_route_simulation_practice.pdf`
- 練習PDF QA: `22_integrated_route_simulation_practice_pdf_qa.md`
- 解説画像PowerPoint: `22_integrated_route_simulation_images.pptx`
- PowerPoint QA: `22_integrated_route_simulation_powerpoint_qa.md`
- 完成後独立再解答: `22_integrated_route_simulation_independent_reanswer.md`

成果物存在: `18 / 18 PASS`。

## 3. 成果物QA
- 解説source固定6問・16答案要素: `16 / 16 COVERED`
- シミュレーションCSV: `3301` 行 / PASS
- 数値式照合: 同期速度・滑り・速度換算・駆動力・加速度 `PASS`
- 力行点: `1828`、回生点: `1149` / PASS
- 消費・回生同時正値: `0`、速度負値: `0` / PASS
- SVG XML: `6 / 6 PASS`
- 代表点独立再計算: 力行・回生各1点 / PASS
- 解説PDF: A4縦2ページ、表示 `2 / 2 PASS`、文字抽出・数値QA `PASS`
- 解説PDF固定16答案要素: `16 / 16 COVERED`
- 解説PDF例題: 基礎・本試験標準・複合 `3 / 3 INCLUDED`
- 練習source: 一次10問＋二次5問
- 練習PDF: A4縦2ページ・2段組、表示 `2 / 2 PASS`、数値・論理QA `15 / 15 PASS`
- 練習PDF固定16答案要素: `16 / 16 COVERED`
- PowerPoint: 16:9・4枚、構造QA・ZIP integrity・表示QA `PASS`
- PowerPoint固定16答案要素: `16 / 16 COVERED`

技術・成果物ゲートは `PASS`。

## 4. 完成後独立再解答
固定6問・16答案要素を完成教材だけで再解答し、その後に公式正答・標準解答と照合した記録を確認した。独立再解答記録は commit `aad1b1fff507227d7b725669786eb2871cb9342a` で追加され、その後Topic 22ディレクトリの技術成果物変更はない。

- R08一次 問3 (1)〜(3): `3 / 3 PASS`
- R07一次 問2 (1): `1 / 1 PASS`
- R07一次 問4 (4),(5): `2 / 2 PASS`
- R06一次 問2 (1),(2): `2 / 2 PASS`
- R07二次 問2 (1): `2 / 2 PASS`
- R07二次 問4 (1)〜(5): `6 / 6 PASS`
- 公式一致: `16 / 16 PASS`
- 公式照合後訂正: `0件`
- 教材の概念・解法不足: `0件`
- 教材外知識補完: `0件`
- 独立再解答記録QA: `8 / 8 PASS`

過去問対応品質ゲート: `PASS`。

## 5. 前回NEEDS_REVISION 2件の再確認
前回最終QA commit `0a6c9426e29d41588b7dbf6ac0afe6d3e2cf258a` で指摘したcanonical sourceの進捗メタデータ2件を現行mainで再確認した。

1. `22_integrated_route_simulation.md`
   - 冒頭状態を `topic_22_progress_metadata_synced / IN_PROGRESS` へ同期済み。
   - 独立再解答を `16 / 16 PASS` へ同期済み。
   - 次工程を「Topic 22 最終QA再実施」へ同期済み。
   - 同期commit: `a4ce54499c0232347f0b8762417f7e09cc8c8603`。
   - 判定: `PASS`。
2. `22_integrated_route_simulation_practice.md`
   - 独立再解答を `16 / 16 PASS` へ同期済み。
   - 次工程を「Topic 22 最終QA再実施」へ同期済み。
   - 同期commit: `0e693791e261feac1a0c9d5681e7618304c8138d`。
   - 判定: `PASS`。

進捗・メタデータ同期: `2 / 2 PASS`。

前回最終QA後のTopic 22ディレクトリ変更は上記canonical source 2ファイルの進捗メタデータ同期のみであり、技術本文、固定EXAM_ALIGNMENT、計算プログラム、CSV、指定6グラフ、PDF、PowerPoint、独立再解答記録は変更されていない。

## 6. 最終判定
MASTER SPEC、EXAM_ALIGNMENT SPEC、系列SPEC、固定EXAM_ALIGNMENT、成果物QA、独立再解答、前回指摘2件の整合をすべて満たす。

- 技術・試験対応品質ゲート: `PASS`
- 成果物ゲート: `PASS`
- 独立再解答ゲート: `PASS`
- 進捗・正本整合ゲート: `PASS`

判定: `PASS / topic_22_final_qa_pass / completed`

完成数: `22 / 22`

## 次工程
`07_shinkansen_machine_2` は全22テーマ `completed`。本系列内の未完了テーマはない。次回の制作対象は `MASTER_SPEC.md` の全系列制作順を先頭から再確認して選定する。