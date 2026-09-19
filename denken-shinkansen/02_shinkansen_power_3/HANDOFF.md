# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-19

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。`02_shinkansen_power_3` は新品質基準で `16 / 16` 完了。Topic 01〜16はすべて `PASS / completed`。

詳細な完了履歴は `STATUS.md` と各Topicのsource・QA・最終QA記録を正本とする。

## 今回進捗
Topic 16 `発電所からN700Sまで全部つないでみる` の最終QAを再実施した。

判定: `PASS / completed`。

初回最終QAで唯一FAILだった進捗記録整合は7箇所すべて同期済み。技術内容、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、PDF/PPTX QA、SPEC境界、進捗記録整合を再確認し、全件PASSとした。固定EXAM_ALIGNMENT、数式、問題、正答、PDF/PPTX、完成後独立再解答結果は変更していない。

最終QA: `topics/16_power_system_integration/16_power_system_integration_final_qa.md`
source: `topics/16_power_system_integration/16_power_system_integration.md`
解説PDF: `topics/16_power_system_integration/16_power_system_integration_explanation.pdf`
解説PDF QA: `topics/16_power_system_integration/16_power_system_integration_explanation_qa.md`
練習問題source: `topics/16_power_system_integration/16_power_system_integration_practice_source.md`
練習PDF: `topics/16_power_system_integration/16_power_system_integration_practice.pdf`
練習PDF QA: `topics/16_power_system_integration/16_power_system_integration_practice_qa.md`
解説画像PowerPoint: `topics/16_power_system_integration/16_power_system_integration_images.pptx`
PowerPoint QA: `topics/16_power_system_integration/16_power_system_integration_powerpoint_qa.md`
完成後独立再解答: `topics/16_power_system_integration/16_power_system_integration_independent_reanswer.md`

## Topic 16 固定品質ゲート
- R8上 電力 問2 — 発電電力・電力量・単位換算 — `(5)` PASS
- H30 電力 問8 — 変圧・三相電力・力率 — `(3)` PASS
- R7下 電力 問16(a)(b) — 電圧降下・送電損失・力率・配電 — `(4),(2)` PASS
- R7下 電力 問12 — %インピーダンス・短絡電流・遮断器 — `(3)` PASS
- R7上 法規 問13(a)(b) — 発電/負荷の時間変化・送受電・系統エネルギーフロー — `(2),(3)` PASS

集計:
- 固定問題: `5出題回・7答案要素`
- 制作前EXAM_ALIGNMENT: 完了
- 制作前独立再解答: `7 / 7 PASS`
- 公式標準解答一致: `7 / 7 PASS`
- 解説本文＋3段階例題: 完了
- 3段階例題独立再計算: `3 / 3 PASS`
- 固定5出題回・7答案要素の本文要求事項マッピング: `7 / 7 PASS`
- 解説PDF: A4縦4ページ、表示QA `4 / 4 PASS`、文字抽出QA `PASS`、固定品質ゲート対応 `7 / 7 PASS`
- 練習問題source: 全12問・全問五肢択一、基礎3 / 本試験標準7 / 複合2
- 練習PDF: A4縦4ページ、表示QA `4 / 4 PASS`、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`
- 解説画像PowerPoint: 16:9・4枚、要求事項可視化 `7 / 7 PASS`、表示QA `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`
- 完成後独立再解答: `7 / 7 PASS`
- 完成後公式標準解答一致: `7 / 7 PASS`
- 完成後教材外知識補完: `0件`
- main sourceへの完成後独立再解答結果同期: 完了
- SPEC固定範囲外追加: `0件`
- 件数合わせの仕様追加: `0件`
- 未確認新幹線実設備値の真値化: `0件`
- 初回最終QA: `NEEDS_REVISION / IN_PROGRESS`（進捗記録整合のみFAIL）
- 初回最終QAで指摘された進捗記録7箇所同期: 完了
- 最終QA再実施: `PASS / completed`

## 範囲境界
- Topic 01〜15の既習事項を `発電 → 送電 → 変電 → 相変換 → き電 → 架線 → 車両` と回生時の逆方向まで一本につなぐ総復習に限定する。
- 水力・火力・原子力・再エネ、変圧、三相電力、力率、電圧降下、損失、短絡・保護、電線、配電、回生をSPEC指定どおり接続し、新規分野・新規公式を追加しない。
- N700Sは電力フローの到達点として扱い、車両内部主回路・制御詳細へ広げない。
- 実設備値は一次資料確認済みのものだけを実値とする。

## 系列完了
`02_shinkansen_power_3` は `16 / 16` 完了。`MASTER_SPEC.md` の全系列制作順では次は `03_shinkansen_machine_3`。次回はその系列の `SPEC.md`、`STATUS.md`、`HANDOFF.md` と既存成果物を確認し、最初の未完了テーマから開始する。
