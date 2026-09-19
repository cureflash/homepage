# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-19

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: `16 / 16`
- current_status: `series_complete`
- last_completed_topic: `16 発電所からN700Sまで全部つないでみる`
- active_topic: `none`
- next_start: `MASTER_SPEC.md` の全系列制作順に従い、次系列 `03_shinkansen_machine_3` の正本・STATUS・HANDOFFを確認して最初の未完了テーマから開始する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — completed
- [x] 02 上越新幹線を水の力で走らせる — completed
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — completed
- [x] 04 東京―佐世保「原子力新幹線」 — completed
- [x] 05 新幹線を再エネだけで走らせられる？ — completed
- [x] 06 275,000Vをどうやって25,000Vにする？ — completed
- [x] 07 なぜ三相交流をそのまま架線へ流さない？ — completed
- [x] 08 新幹線の変電所はなぜ数十kmおき？ — completed
- [x] 09 変電所からパンタグラフまでどう送る？ — completed
- [x] 10 新幹線が突然大電力を使ったら？ — completed
- [x] 11 架線事故ではどうやって電気を止める？ — completed
- [x] 12 320km/hでもパンタグラフが離れないのはなぜ？ — completed
- [x] 13 新幹線の架線は何でできている？ — completed
- [x] 14 駅やトンネルにはどう電気を配る？ — completed
- [x] 15 回生した電気はどこへ行く？ — completed
- [x] 16 発電所からN700Sまで全部つないでみる — `PASS / completed`

各Topicの詳細な過去問マッピング、独立再解答、PDF/PPTX QA、SPEC境界、修正履歴は各Topicのsource・QA・最終QA記録を正本とする。

## Topic 16 完了記録
source: `topics/16_power_system_integration/16_power_system_integration.md`
解説PDF: `topics/16_power_system_integration/16_power_system_integration_explanation.pdf`
解説PDF QA: `topics/16_power_system_integration/16_power_system_integration_explanation_qa.md`
練習問題source: `topics/16_power_system_integration/16_power_system_integration_practice_source.md`
練習PDF: `topics/16_power_system_integration/16_power_system_integration_practice.pdf`
練習PDF QA: `topics/16_power_system_integration/16_power_system_integration_practice_qa.md`
解説画像PowerPoint: `topics/16_power_system_integration/16_power_system_integration_images.pptx`
PowerPoint QA: `topics/16_power_system_integration/16_power_system_integration_powerpoint_qa.md`
完成後独立再解答: `topics/16_power_system_integration/16_power_system_integration_independent_reanswer.md`
最終QA: `topics/16_power_system_integration/16_power_system_integration_final_qa.md`

固定5出題回・7答案要素:
- R8上 電力 問2
- H30 電力 問8
- R7下 電力 問16 (a)(b)
- R7下 電力 問12
- R7上 法規 問13 (a)(b)

集計:
- 制作前EXAM_ALIGNMENT: 完了
- 制作前独立検証: `7 / 7 PASS`
- 公式標準解答一致: `7 / 7 PASS`
- 解説本文＋3段階例題: 完了
- 3段階例題独立再計算: `3 / 3 PASS`
- 固定5出題回・7答案要素の本文要求事項マッピング: `7 / 7 PASS`
- 解説PDF: A4縦4ページ
- 解説PDF表示QA: `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 練習問題source: 全12問・全問五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習PDF: A4縦4ページ
- 練習PDF表示QA: `4 / 4 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF数値・論理再検算: `12 / 12 PASS`
- 練習PDF正答一意性: `12 / 12 PASS`
- 解説画像PowerPoint: 16:9・4枚
- PowerPoint要求事項可視化: `7 / 7 PASS`
- PowerPoint表示QA: `4 / 4 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- 完成後独立再解答: `7 / 7 PASS`
- 完成後公式標準解答一致: `7 / 7 PASS`
- 完成後教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 件数合わせの仕様追加: `0件`
- 未確認新幹線実設備値の真値化: `0件`
- 初回最終QA: `NEEDS_REVISION / IN_PROGRESS`（進捗記録整合のみFAIL）
- 初回最終QAで指摘された旧進捗記録7箇所同期: 完了
- 最終QA再実施: `PASS / completed`

完成後独立答案:
- R8上 電力 問2: `(5)`
- H30 電力 問8: `(3)`
- R7下 電力 問16(a)(b): `(4),(2)`
- R7下 電力 問12: `(3)`
- R7上 法規 問13(a)(b): `(2),(3)`

## 系列完了
`02_shinkansen_power_3` は新品質基準で `16 / 16` 完了。Topic 01〜16はすべて `PASS / completed`。次は `MASTER_SPEC.md` の全系列制作順に従い `03_shinkansen_machine_3` へ移行する。
