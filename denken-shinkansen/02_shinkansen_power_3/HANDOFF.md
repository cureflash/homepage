# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-19

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。`02_shinkansen_power_3` の新品質基準の完成数は `15 / 16`。Topic 01〜15は完成済み。active themeはTopic 16 `発電所からN700Sまで全部つないでみる`。

詳細な完了履歴は `STATUS.md` と各Topicのsource・QA記録を正本とする。

## 今回進捗
Topic 16の完成後独立再解答を完了した。固定5出題回・7答案要素を完成教材の式・解法だけで問題文から再計算し `7 / 7 PASS`、公式標準解答一致 `7 / 7 PASS`、教材外知識補完0件、SPEC固定範囲外追加0件、件数合わせ0件、未確認新幹線実設備値の真値化0件。Topic 16は最終QA未実施のため `in_progress`、完成数は `15 / 16` のまま。

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
- 公式標準解答との不一致: `0件`
- Topic 16固定範囲外の知識補完: `0件`
- 解説本文: §1〜§15 完成
- 3段階例題: 基礎・本試験標準・複合 各1問完成
- 3段階例題独立再計算: `3 / 3 PASS`
- 固定5出題回・7答案要素の本文要求事項マッピング: `7 / 7 PASS`
- 解説PDF: A4縦4ページ
- 解説PDF表示QA: 200 dpi `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 解説PDF数値・論理再検算: `3 / 3 PASS`
- 固定5出題回・7答案要素のPDF対応: `7 / 7 PASS`
- 完成後ブラインド独立再解答保護: 公式正答番号・制作前最終答案のPDF転記 `0件`
- 練習問題source: 全12問・全問五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習source固定5出題回・7答案要素への接続: `7 / 7 PASS`
- 練習PDF: A4縦4ページ
- 練習PDF表示QA: 200 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF数値・論理再検算: `12 / 12 PASS`
- 練習PDF正答一意性: `12 / 12 PASS`
- 練習PDF固定5出題回・7答案要素への接続: `7 / 7 PASS`
- 解説画像PowerPoint: 16:9・4枚
- PowerPoint固定5出題回・7答案要素の要求事項可視化: `7 / 7 PASS`
- PowerPoint表示QA: `4 / 4 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- PowerPoint内数式・論理QA: `PASS`
- 完成後ブラインド独立再解答保護: 公式正答番号・制作前最終答案のPowerPoint転記 `0件`
- 完成後独立再解答: `7 / 7 PASS`
- 完成後公式標準解答一致: `7 / 7 PASS`
- 完成後教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 件数合わせの仕様追加: `0件`
- 未確認新幹線実設備値の真値化: `0件`

## 範囲境界
- Topic 01〜15の既習事項を `発電 → 送電 → 変電 → 相変換 → き電 → 架線 → 車両` と回生時の逆方向まで一本につなぐ総復習に限定する。
- 水力・火力・原子力・再エネ、変圧、三相電力、力率、電圧降下、損失、短絡・保護、電線、配電、回生をSPEC指定どおり接続し、新規分野・新規公式を追加しない。
- N700Sは電力フローの到達点として扱い、車両内部主回路の詳細へ広げない。
- 実設備値は一次資料確認済みのものだけを実値とする。

## 次
Topic 16 main sourceへ完成後独立再解答結果を同期する。固定5出題回・7答案要素、教材本文、PDF/PPTX、SPEC固定範囲は変更しない。最終QAにはまだ進まない。

## 直前完了テーマ
Topic 15 `回生した電気はどこへ行く？` は `PASS / completed`。固定5出題回・8答案要素の完成後ブラインド独立再解答 `8 / 8 PASS`、公式解答一致 `8 / 8 PASS`、教材外知識補完0件、必須成果物・PDF/PPTX QA・SPEC境界・進捗記録整合を最終QAで確認済み。