# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-19

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `18 / 22`
- current_status: `topic_19_practice_source_complete`
- last_completed_topic: `18 速度指令を変えたら何秒で追従する？`
- active_topic: `19 PIDで新幹線の速度を制御する`
- next_start: Topic 19 練習PDF＋QA

## 完了テーマ
- [x] Topic 01〜17 最終QA `PASS / completed`
- [x] Topic 18 最終QA `PASS / topic_18_final_qa_pass / completed`
- [ ] Topic 19 `IN_PROGRESS` — 制作前EXAM_ALIGNMENT `PASS`、解説source `PASS`、解説PDF＋QA `PASS`、練習source `PASS`

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## Topic 18 最終状態
- 固定EXAM_ALIGNMENT: 一次1問＋二次4問、計5問・12答案要素
- 完成後独立再解答: `12 / 12 PASS`
- 教材外知識補完: `0件`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 仕様境界・進捗記録整合: `PASS`
- 最終判定: `PASS / topic_18_final_qa_pass / completed`

## Topic 19 固定範囲
系列 `SPEC.md` の次だけを扱う。

- P・PI・PD・PID制御を速度応答で比較
- 比例制御、積分制御、微分制御、PI、PID
- 定常偏差、オーバーシュート、応答速度
- `Kp`、`Ki`、`Kd` を変化させた速度応答グラフ

境界:
- Topic 20の一般的な安定判別・ラウス・フルビッツ・根軌跡・周波数応答・ボード線図・余裕・発振判定を追加しない
- Topic 21の空転・再粘着制御を先取りしない
- 未確認の新幹線実車PIDゲイン・制御周期・制御則を実車値化しない

## Topic 19 固定EXAM_ALIGNMENT
一次1問＋二次4問、計5問・12答案要素。

- H25 一次 機械 問6 (2) — 1答案要素
- R07 二次 機械・制御 問4 (1),(2),(3) — 3答案要素
- H30 二次 機械・制御 問4 (1) — 2答案要素
- H23 二次 機械・制御 問4 (4) — 4答案要素
- R02 二次 機械・制御 問4 (1),(2) — 2答案要素

制作前EXAM_ALIGNMENT: `PASS / topic_19_exam_alignment_complete`。
固定問題の個別正答記号・最終数値・完成済み式変形結果は未保存。Topic 20相当小問は固定ゲートから除外した。

## Topic 19 解説source
成果物:
- `topics/19_pid_speed_control/19_pid_speed_control.md`

QA:
- P・I・D各動作の時間領域／ラプラス領域対応: `PASS`
- P・PI・PD・PIDの式と判別: `PASS`
- `Kp`・`Ki`・`Kd` と `Ti`・`Td` の相互変換: `PASS`
- 偏差伝達関数と最終値の定理: `PASS`
- ステップ・ランプ定常偏差への接続: `PASS`
- Topic 18の二次遅れ・オーバーシュート・応答速度への接続: `PASS`
- `Kp`・`Ki`・`Kd` 一変数比較条件: `PASS`
- 固定5問・12答案要素の教材節マッピング: `12 / 12 COVERED`
- Topic 20先取り: `0件`
- Topic 21先取り: `0件`
- 未確認実車PID値の実車値化: `0件`
- 固定問題の個別正答記号・最終数値保存: `0件`

判定: `PASS / topic_19_explanation_source_complete`

## Topic 19 解説PDF＋QA
成果物:
- `topics/19_pid_speed_control/19_pid_speed_control_explanation.pdf`
- `topics/19_pid_speed_control/19_pid_speed_control_explanation_pdf_qa.md`

QA:
- A4縦6ページ: `PASS`
- 固定5問・12答案要素: `12 / 12 COVERED`
- 表示QA: `6 / 6 PASS`
- 文字抽出: `PASS`
- 数値・論理QA: `15 / 15 PASS`
- Topic 20/21先取り・未確認実車PID値・固定問題正答保存: `各0件`
- Git blob: `bbbe79949058c62725f644236b78f8c961365291`

判定: `PASS / topic_19_explanation_pdf_complete`

## Topic 19 練習source
成果物:
- `topics/19_pid_speed_control/19_pid_speed_control_practice.md`

構成:
- 一次試験型10問（全問五肢択一）
- 二次試験型5問（記述・式変形・検算付き）
- 合計15問

QA:
- 一次正答一意性: `10 / 10 PASS`
- 全15問の独立再計算・論理確認: `15 / 15 PASS`
- 固定5問・12答案要素への演習接続: `12 / 12 COVERED`
- P・I・D、PI・PD・PID、係数変換、偏差伝達関数、ステップ／ランプ定常偏差、応答速度、オーバーシュート比較: `PASS`
- `Kp`・`Ki`・`Kd` 一変数比較: `PASS`
- Topic 20先取り: `0件`
- Topic 21先取り: `0件`
- 未確認実車PID値の実車値化: `0件`
- 固定問題の個別正答記号・最終数値・完成済み個別解答保存: `0件`

判定: `PASS / topic_19_practice_source_complete`

## 今回進めた内容
Topic 19練習sourceを作成した。一次10問＋二次5問、一次正答一意性10/10、全15問15/15、固定5問・12答案要素12/12を確認して `PASS` とした。Topic 20/21先取り、未確認実車PID値、固定問題の個別正答保存はいずれも0件。完成数は `18 / 22` のまま。

## 次工程
Topic 19「PIDで新幹線の速度を制御する」の練習PDF＋QAを作成する。