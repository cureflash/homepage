# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-20

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `21 / 22`
- current_status: `topic_22_practice_pdf_complete / IN_PROGRESS`
- last_completed_topic: `21 空転した車輪を再粘着させる`
- active_topic: `22 東京→新大阪を主回路＋走行制御でシミュレーション`
- next_start: Topic 22 解説画像PowerPoint source

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / completed`
- [x] Topic 19 最終QA `PASS / completed`
- [x] Topic 20 最終QA `PASS / completed`
- [x] Topic 21 最終QA `PASS / completed`
- [ ] Topic 22

各完了テーマの固定EXAM_ALIGNMENT、成果物QA、独立再解答、最終QAの詳細は各 `topics/<topic>/` 配下のsource・QA記録を正本とする。

## Topic 22 固定範囲
系列 `SPEC.md` の Topic 22 で指定された内容だけを扱う。

基本構成:
`架線25kV → 主変圧器 → PWMコンバータ → DCリンク → VVVFインバータ → 誘導電動機 → 歯車 → 車輪 → 列車 → 速度フィードバック`

入力:
- 架線電圧
- 変圧器定数
- モーター定数
- 極数
- インバータ周波数
- 車輪径
- 歯車比
- 車両質量
- 走行抵抗
- PI/PIDゲイン

出力:
- 主電動機電流
- トルク
- 出力
- 車輪速度
- 列車速度
- 加速度
- 消費電力
- 回生電力

グラフ:
- 時間―速度
- 時間―加速度
- 時間―電流
- 時間―トルク
- 時間―電力
- 時間―回生電力

境界:
- Topics 01〜21は既習事項として必要な範囲だけ統合する。
- 実車・実路線値は一次資料等で確認できた値だけを実値とし、計算値・仮定値を区別する。
- 東京―新大阪の実速度曲線、勾配、区間距離、実車の変圧器定数・モーター定数・PI/PIDゲイン等は固定していない。
- 系列SPECにない新規制御方式・車両仕様は追加しない。

## Topic 22 固定EXAM_ALIGNMENT
`topics/22_integrated_route_simulation/22_integrated_route_simulation.md`

一次4問＋二次2問、計6問・16答案要素。

- R08 一次 機械 問3 (1)〜(3) — 3答案要素
- R07 一次 機械 問2 (1) — 1答案要素
- R07 一次 機械 問4 (4),(5) — 2答案要素
- R06 一次 機械 問2 (1),(2) — 2答案要素
- R07 二次 機械・制御 問2 (1) — 2答案要素
- R07 二次 機械・制御 問4 (1)〜(5) — 6答案要素

制作前品質ゲート:
- 公式過去問5問以上: `6問 / PASS`
- 一次・二次を含む: `一次4問＋二次2問 / PASS`
- 二次記述式を含む: `2問 / PASS`
- 2026年度最新一次問題を含む: `PASS`
- 2026-09-20時点の最新公表二次問題を含む: `PASS`
- 固定16答案要素を教材節へ割当: `16 / 16 ASSIGNED`
- 参考教材2系統以上: `e-sysnet＋電験王 / PASS`
- 制作前sourceへの固定過去問個別正答保存: `0件 / PASS`
- 一次資料未確認の実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 独立再解答: `NOT_RUN`

## Topic 22 解説source
- 状態: `PASS / topic_22_explanation_source_complete / IN_PROGRESS`
- 固定答案要素本文収録: `16 / 16 COVERED`
- 系列SPEC入力: `10 / 10 COVERED`
- 系列SPEC出力: `8 / 8 COVERED`
- 指定グラフ: `6 / 6 COVERED`
- 実値・計算値・仮定値の区別: `PASS`
- 未確認実路線・実車値の真値化: `0件 / PASS`
- 固定過去問の個別正答記号・最終数値保存: `0件 / PASS`
- 独立再解答: `NOT_RUN`

## Topic 22 総合シミュレーション成果物
- 状態: `PASS / topic_22_simulation_artifacts_complete / IN_PROGRESS`
- `topics/22_integrated_route_simulation/22_integrated_route_simulation_calc.py`
- `topics/22_integrated_route_simulation/22_integrated_route_simulation_results.csv`: `3301` 行
- 指定6グラフ: `6 / 6 GENERATED`
- 数値式照合: 同期速度・滑り・速度換算・駆動力・加速度 `PASS`
- 力行点: `1828` 点 / PASS
- 回生点: `1149` 点 / PASS
- 消費・回生同時正値: `0` 点 / PASS
- 速度負値: `0` 点 / PASS
- SVG XML: `6 / 6 PASS`
- 代表点独立再計算: 力行・回生各1点 / PASS
- 詳細QA: `topics/22_integrated_route_simulation/22_integrated_route_simulation_calculation_qa.md`
- 未確認実車・実路線値の真値化: `0件 / PASS`
- 固定EXAM_ALIGNMENT: 一次4問＋二次2問・16答案要素を変更なし
- 独立過去問再解答: `NOT_RUN`

## Topic 22 解説プリントPDF
- 状態: `PASS / topic_22_explanation_pdf_complete / IN_PROGRESS`
- PDF: `topics/22_integrated_route_simulation/22_integrated_route_simulation_explanation.pdf`
- QA: `topics/22_integrated_route_simulation/22_integrated_route_simulation_explanation_pdf_qa.md`
- A4縦: `2ページ`
- 固定答案要素: `16 / 16 COVERED`
- 基礎・本試験標準・複合例題: `3 / 3 INCLUDED`
- 指定グラフ: `6 / 6 INCLUDED`
- 200 dpiレンダリング: `2 / 2 PASS`
- 文字抽出: `PASS`、replacement character `0`、`(cid:)` `0`
- 数値QA: 変圧器例・誘導機例・PI時間応答・既存シミュレーション整合 `PASS`
- 未確認実車・実路線値の真値化: `0件 / PASS`
- 固定過去問個別正答記号・最終数値保存: `0件 / PASS`
- 独立過去問再解答: `NOT_RUN`

## Topic 22 練習source
- 状態: `PASS / topic_22_practice_source_complete / IN_PROGRESS`
- source: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice.md`
- 一次試験型: `10 / 10` 五肢択一
- 二次試験型: `5 / 5` 記述・途中式・単位・検算付き
- 固定答案要素: `16 / 16 COVERED`
- 主回路→誘導機→走行系→速度フィードバック統合: `COVERED`
- 力行・回生の符号規約、消費電力・回生電力分離: `COVERED`
- 未確認実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 固定過去問個別正答記号・最終数値保存: `0件 / PASS`
- 独立過去問再解答: `NOT_RUN`

## Topic 22 練習プリントPDF
- 状態: `PASS / topic_22_practice_pdf_complete / IN_PROGRESS`
- PDF: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice.pdf`
- QA: `topics/22_integrated_route_simulation/22_integrated_route_simulation_practice_pdf_qa.md`
- A4縦・2ページ・2段組
- 一次試験型: `10 / 10` 五肢択一
- 二次試験型: `5 / 5` 記述・途中式・単位・検算付き
- 固定答案要素: `16 / 16 COVERED`
- 200 dpiレンダリング: `2 / 2 PASS`
- `pdftocairo` 160 dpiレンダリング: `2 / 2 PASS`
- 文字抽出: `PASS`、replacement character `0`、`(cid:)` `0`
- 数値・論理QA: `15 / 15 PASS`
- 未確認実車・実路線値の真値化: `0件 / PASS`
- 系列SPEC外の新規制御方式・車両仕様追加: `0件 / PASS`
- 固定過去問個別正答記号・最終数値保存: `0件 / PASS`
- 独立過去問再解答: `NOT_RUN`

## 今回進めた内容
Topic 22の練習sourceを正本として、一次10問＋二次5問の問題・解答・完全解説をA4縦2ページの練習プリントPDFへ反映した。表示・文字抽出・数値・論理QAを実施し、`15 / 15 PASS`。固定一次4問＋二次2問・16答案要素は変更せず `16 / 16 COVERED` を維持した。未確認実車・実路線値の真値化と系列SPEC外の仕様追加は行っていない。

完成数は `21 / 22` のまま。

## 次工程
Topic 22 解説画像PowerPoint source。固定EXAM_ALIGNMENTは変更せず、独立過去問再解答は全成果物完成後に行う。
