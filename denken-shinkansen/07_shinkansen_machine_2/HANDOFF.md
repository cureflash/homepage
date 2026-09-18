# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-18

## 現在地
- Topic 01〜16: 最終QA `PASS / completed`
- 完成数: `16 / 22`
- active topic: `17 新幹線の速度をフィードバック制御する`
- current status: `topic_17_final_qa_needs_revision`
- 次工程: Topic 17 進捗記録同期

仕様authorityは `denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`。仕様追加はしない。

## reconcile結果
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、Topic 17 source、解説PDF・QA、練習source・練習PDF・QA、PowerPoint・QA、独立再解答記録を再確認した。
- Topic 16は最終QA `PASS / completed` のままとし、重複制作していない。
- 最初の未完了テーマはTopic 17「新幹線の速度をフィードバック制御する」。
- 固定一次1問＋二次4問、計5問・6答案要素を変更していない。
- 完成教材だけで固定6答案要素を独立再解答し、公式照合 `6 / 6 PASS` を維持。
- 解説PDF表示 `6 / 6 PASS`、練習PDF表示 `5 / 5 PASS`、PowerPoint表示 `4 / 4 PASS` を維持。
- Topic 18〜21先取り、二自由度制御・フィードフォワード補償の独立論点追加、未確認実車値追加、教材外知識による補完は `0件`。
- 最終QAでは技術・試験対応品質ゲートはPASSしたが、main source `## 状態`、main source末尾 `# 次工程`、練習source末尾 `# 次工程` の3箇所が旧工程のままなので進捗記録整合のみFAIL。
- Topic 17は `NEEDS_REVISION / IN_PROGRESS` のまま completed にしていない。

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

## Topic 17 解説PDF
- PDF: `topics/17_speed_feedback_control/17_speed_feedback_control_explanation.pdf`
- QA: `topics/17_speed_feedback_control/17_speed_feedback_control_explanation_pdf_qa.md`
- A4縦・6ページ
- 固定5問・6答案要素 `6 / 6`
- 基礎／本試験標準／複合の3段階例題を維持
- 160 dpi 全6ページ表示QA `6 / 6 PASS`
- PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- SHA-256 `eb2582b3ed669824c7546c75b7dfa4737cc4daace2ec834c73ea5e1eb73746bc`
- Git blob SHA `171afc11b64f8ece63702473bdef84c20865ca80`

判定: `PASS / topic_17_explanation_pdf_complete`

## Topic 17 練習source
- source: `topics/17_speed_feedback_control/17_speed_feedback_control_practice.md`
- 一次試験型10問＋二次試験型5問
- 一次正答一意性 `10 / 10 PASS`
- 独立再計算・論理QA `15 / 15 PASS`
- 固定5問・6答案要素へ `6 / 6` 接続
- 直列接続、開ループ経路、閉ループ、偏差、外乱経路を一次・二次で確認可能
- Topic 18〜21先取り、二自由度制御の独立論点追加、未確認実車値、固定問題の正答保存 `0件`

判定: `PASS / topic_17_practice_source_complete`

## Topic 17 練習PDF
- PDF: `topics/17_speed_feedback_control/17_speed_feedback_control_practice.pdf`
- QA: `topics/17_speed_feedback_control/17_speed_feedback_control_practice_pdf_qa.md`
- A4縦・5ページ、一次10問＋二次5問
- 固定5問・6答案要素 `6 / 6`
- 主要式 `14 / 14 PASS`
- 160 dpi 全5ページ表示QA `5 / 5 PASS`
- PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- SHA-256 `e4011a7e383e4dc94f5c7a3c6fd4e9a1a85ee93b7d6054830e06f9c9dff71f01`
- Git blob SHA `87e988deffbbede3e4b76031a98a4e50762d7e8f`

判定: `PASS / topic_17_practice_pdf_complete`

## Topic 17 解説画像PowerPoint
- PPTX: `topics/17_speed_feedback_control/17_speed_feedback_control_images.pptx`
- QA: `topics/17_speed_feedback_control/17_speed_feedback_control_powerpoint_qa.md`
- 16:9・4枚
- 固定5問・6答案要素 `6 / 6`
- 120 dpi・1601×900で全4枚表示QA `4 / 4 PASS`
- 文字・数式・図の欠落、重なり、切れ、overflow `0件`
- PDF文字抽出QA PASS / Unicode置換文字 `0件` / `(cid:)` `0件`
- PPTX ZIP整合性 PASS
- SHA-256 `7272f0d11d0272b104fdec5b4cb9aca692076dc4de0ffa81471bf4f786ce3106`
- Git blob SHA `d712faec67a64ff8b3c4157f8c4ae032802da626`
- Topic 18〜21先取り、二自由度制御の独立論点追加、未確認実車値、固定過去問正答保存 `0件`

判定: `PASS / topic_17_powerpoint_complete`

## Topic 17 独立再解答前ゲート
- 記録: `topics/17_speed_feedback_control/17_speed_feedback_control_blind_reanswer_gate.md`
- 最新mainと必須spec、Topic 17全成果物を再監査
- 固定一次1問＋二次4問、計5問・6答案要素を維持
- 固定5過去問の公式正答記号・標準解答本文・完成済み個別解答の事前保存 `0件`
- Topic 18〜21先取り、二自由度制御・フィードフォワード補償の独立論点追加、未確認実車値追加 `0件`

判定: `BLIND_REANSWER_READY / IN_PROGRESS`

## Topic 17 完成後独立再解答
- 答案ロック: `topics/17_speed_feedback_control/17_speed_feedback_control_answer_lock.md`
- 記録: `topics/17_speed_feedback_control/17_speed_feedback_control_independent_reanswer.md`
- 公式正答・標準解答を見る前に固定5問・6答案要素を完成教材だけで解答し、答案をGitHubへ固定
- R07二次 問4 (1): `1 / 1 PASS`
- R06二次 問4 (1): `1 / 1 PASS`
- R04二次 問4 (3): `1 / 1 PASS`
- R03二次 問4 (1),(2): `2 / 2 PASS`
- H21一次 問4 (1): `1 / 1 PASS`
- 厳密ブラインド再解答: `6 / 6 PASS`
- 教材外知識による補完、Topic 18〜21先取り、仕様外論点追加、未確認実車値追加: `0件`

判定: `PASS / topic_17_independent_reanswer_complete / IN_PROGRESS`

## Topic 17 最終QA
- 記録: `topics/17_speed_feedback_control/17_speed_feedback_control_final_qa.md`
- 必須成果物: PASS
- 固定一次1問＋二次4問・6答案要素: `6 / 6 PASS`
- 完成後独立再解答: `6 / 6 PASS`
- 練習一次正答一意性: `10 / 10 PASS`
- 練習独立再計算・論理QA: `15 / 15 PASS`
- 解説PDF・練習PDF・PowerPoint各QA: PASS
- 仕様境界: PASS
- 進捗記録整合: FAIL — main source `## 状態`、main source末尾 `# 次工程`、練習source末尾 `# 次工程` の3箇所
- 技術本文・問題・正答・固定EXAM_ALIGNMENT変更: `0件`

判定: `NEEDS_REVISION / topic_17_final_qa_needs_revision / IN_PROGRESS`

## 次に行うこと
Topic 17の進捗記録3箇所だけを実成果物状態へ同期する。技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PPTX・独立再解答結果は変更しない。同期後に最終QAを再実施する。