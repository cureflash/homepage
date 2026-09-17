# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 現在地
- Topic 01〜16: 最終QA `PASS / completed`
- 完成数: `16 / 22`
- active topic: `17 新幹線の速度をフィードバック制御する`
- current status: `topic_17_explanation_source_complete`
- 次工程: Topic 17 解説PDF制作

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 17 sourceを再確認した。
- Topic 16は最終QA `PASS / completed` のままとし、重複制作していない。
- 最初の未完了テーマはTopic 17「新幹線の速度をフィードバック制御する」。
- Topic 17の制作前EXAM_ALIGNMENTに固定された一次1問＋二次4問、計5問・6答案要素を変更していない。
- Topic 17解説source本文を完成し、固定6答案要素を `6 / 6` 接続した。
- Topic 18〜21先取り、二自由度制御の独立論点追加、未確認実車値追加、固定問題の正答記号・完成済み解答保存は `0件`。

## Topic 16 固定EXAM_ALIGNMENT
- R02 一次 機械 問4 (1),(4),(5) — 3答案要素
- H30 一次 機械 問6 (3),(4) — 2答案要素
- H26 一次 機械 問3 (1) — 1答案要素
- H18 一次 機械 問3 (1) — 1答案要素
- H23 二次 機械・制御 問3 (3),(4) — 5答案要素

一次4問＋二次記述1問、計5問。品質ゲート対象は12答案要素。

## Topic 16 完成成果物
- [x] 制作前EXAM_ALIGNMENT `PASS`
- [x] 解説source `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link.md`
- [x] 解説PDF `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation.pdf` — 8ページ、表示QA `8 / 8 PASS`
- [x] 解説PDF QA `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_explanation_pdf_qa.md`
- [x] 練習source `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.md` — 一次10問＋二次5問、独立QA `15 / 15 PASS`
- [x] 練習PDF `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice.pdf` — 5ページ、主要数値 `29 / 29 PASS`、表示QA `5 / 5 PASS`
- [x] 練習PDF QA `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_practice_pdf_qa.md`
- [x] 解説画像PowerPoint `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_images.pptx` — 16:9・4枚、表示QA `4 / 4 PASS`
- [x] PowerPoint QA `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_powerpoint_qa.md`
- [x] 独立再解答前ゲート `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_blind_reanswer_gate.md`
- [x] H18再実施用問題入力 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_h18_q3_1_blind_input.md`
- [x] H18答案ロック `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_h18_q3_1_answer_lock.md`
- [x] 完成後独立再解答記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_independent_reanswer.md` — 厳密ブラインド `12 / 12 PASS`
- [x] 最終QA記録 `topics/16_n700s_battery_dc_link/16_n700s_battery_dc_link_final_qa.md` — `PASS / completed`

## Topic 16 最終QA
- 必須成果物実在: PASS
- 固定5問・12答案要素: `12 / 12 PASS`
- 独立再解答: `12 / 12 PASS`
- 練習一次正答一意性: `10 / 10 PASS`
- 練習独立計算・論理QA: `15 / 15 PASS`
- 解説PDF・練習PDF・PowerPoint各QA: PASS
- 仕様境界: PASS
- 進捗記録整合: PASS
- 技術本文・問題・正答・固定EXAM_ALIGNMENT変更: `0件`
- 最終判定: `PASS / topic_16_final_qa_pass / completed`

## Topic 17 固定範囲
系列 `SPEC.md` の Topic 17「新幹線の速度をフィードバック制御する / 伝達関数・ブロック線図」を正本とする。

扱う内容:
- 目標値
- 偏差
- 制御器
- プラント
- センサ
- 伝達関数
- ブロック線図
- 閉ループ伝達関数
- 外乱

Topic 18の過渡応答、Topic 19のPID、Topic 20の安定判別・周波数応答、Topic 21の再粘着制御は先取りしない。

## Topic 17 固定EXAM_ALIGNMENT
- R07 二次 機械・制御 問4 (1) — 1答案要素
- R06 二次 機械・制御 問4 (1) — 1答案要素
- R04 二次 機械・制御 問4 (3) — 1答案要素
- R03 二次 機械・制御 問4 (1),(2) — 2答案要素
- H21 一次 機械 問4 (1) — 1答案要素

一次1問＋二次4問、計5問。品質ゲート対象は6答案要素。

制作前EXAM_ALIGNMENT source:
`topics/17_speed_feedback_control/17_speed_feedback_control.md`

判定: `PASS / topic_17_exam_alignment_complete`

## Topic 17 解説source
- source: `topics/17_speed_feedback_control/17_speed_feedback_control.md`
- 目標値・偏差・出力・フィードバック量を信号式で整理
- 伝達関数、直列接続、開ループ経路、一巡積を説明
- 閉ループ `G/(1+GH)` と偏差 `1/(1+GH)` を導出
- 外乱の印加位置を含む `E/D` 導出手順を説明
- 基礎／本試験標準／複合の3段階例題を作成・代数再計算PASS
- 固定5問・6答案要素を `6 / 6` 接続
- 境界違反、未確認実車値、固定問題の正答保存 `0件`

判定: `PASS / topic_17_explanation_source_complete`

## 次に行うこと
Topic 17解説PDFを制作する。固定5問・6答案要素、3段階例題、仕様境界を維持し、完成後に表示・文字抽出QAを行う。