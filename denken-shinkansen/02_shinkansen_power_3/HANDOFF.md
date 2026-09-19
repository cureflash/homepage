# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-19

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。`02_shinkansen_power_3` の新品質基準の完成数は `15 / 16`。Topic 01〜15は完成済み。active themeはTopic 16 `発電所からN700Sまで全部つないでみる`。

詳細な完了履歴は `STATUS.md` と各Topicのsource・QA記録を正本とする。

## 今回進捗
Topic 16の初回最終QAを実施した。技術内容、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、PDF/PPTX QA、SPEC境界はPASS。一方、旧工程を指す進捗記録7箇所が現在地と不一致のため、判定は `NEEDS_REVISION / IN_PROGRESS`。完成数は `15 / 16` のまま。

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
- 初回最終QA: `NEEDS_REVISION / IN_PROGRESS`
- 初回最終QAの唯一の未達カテゴリ: 進捗記録整合

## 進捗記録の未同期7箇所
1. `STATUS.md` — `current_status` が `topic_16_main_source_synced`、`next_start` が最終QA実施のまま。
2. `topics/16_power_system_integration/16_power_system_integration.md` — 状態、§19、次工程が最終QA未実施／最終QA実施のまま。
3. `topics/16_power_system_integration/16_power_system_integration_explanation_qa.md` — 次工程が練習問題source作成のまま。
4. `topics/16_power_system_integration/16_power_system_integration_practice_source.md` — 状態が `practice_source_complete`、次工程が練習PDF作成のまま。
5. `topics/16_power_system_integration/16_power_system_integration_practice_qa.md` — 次工程がPowerPoint作成のまま。
6. `topics/16_power_system_integration/16_power_system_integration_powerpoint_qa.md` — 次工程が完成後独立再解答のまま。
7. `topics/16_power_system_integration/16_power_system_integration_independent_reanswer.md` — 結論が最終QA未実施、次工程がmain source同期のまま。

## 範囲境界
- Topic 01〜15の既習事項を `発電 → 送電 → 変電 → 相変換 → き電 → 架線 → 車両` と回生時の逆方向まで一本につなぐ総復習に限定する。
- 水力・火力・原子力・再エネ、変圧、三相電力、力率、電圧降下、損失、短絡・保護、電線、配電、回生をSPEC指定どおり接続し、新規分野・新規公式を追加しない。
- N700Sは電力フローの到達点として扱い、車両内部主回路・制御詳細へ広げない。
- 実設備値は一次資料確認済みのものだけを実値とする。

## 次
上記7箇所の進捗記録を現在地へ同期する。固定EXAM_ALIGNMENT、数式、問題、正答、PDF/PPTX、完成後独立再解答結果は変更しない。同期後にTopic 16の最終QAを再実施し、全件PASSの場合のみ `completed` とする。

## 直前完了テーマ
Topic 15 `回生した電気はどこへ行く？` は `PASS / completed`。固定5出題回・8答案要素の完成後ブラインド独立再解答 `8 / 8 PASS`、公式解答一致 `8 / 8 PASS`、教材外知識補完0件、必須成果物・PDF/PPTX QA・SPEC境界・進捗記録整合を最終QAで確認済み。
