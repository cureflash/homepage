# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。MASTER_SPEC順で `01_shinkansen_vehicle_3` は完了、`02_shinkansen_power_3` が最初の未完了系列。新品質基準の完成数は `14 / 16`。Topic 01〜14は完成済み。active themeはTopic 15 `回生した電気はどこへ行く？`。

詳細な完了履歴は `STATUS.md` と各Topicのsource・QA記録を正本とする。

## 今回進捗
Topic 15の完成後ブラインド独立再解答を実施した。固定5出題回・8答案要素の候補答案を公式標準解答参照前に `2366cffd425cb781868a6e2144266bb38d7e7a87` で固定し、その後に電気技術者試験センター公式標準解答と照合。`8 / 8 PASS`、固定後の答案変更0件、教材外知識補完0件、SPEC固定範囲外追加0件、Topic 16先取り0件、未確認新幹線実設備値の真値化0件。

固定候補: `topics/15_regenerative_power/15_regenerative_power_independent_reanswer_candidates.md`
完成後独立再解答: `topics/15_regenerative_power/15_regenerative_power_independent_reanswer.md`
source: `topics/15_regenerative_power/15_regenerative_power.md`
解説PDF: `topics/15_regenerative_power/15_regenerative_power_explanation.pdf`
解説PDF QA: `topics/15_regenerative_power/15_regenerative_power_explanation_qa.md`
練習問題source: `topics/15_regenerative_power/15_regenerative_power_practice_source.md`
練習PDF: `topics/15_regenerative_power/15_regenerative_power_practice.pdf`
練習PDF QA: `topics/15_regenerative_power/15_regenerative_power_practice_qa.md`
解説画像PowerPoint: `topics/15_regenerative_power/15_regenerative_power_images.pptx`
PowerPoint QA: `topics/15_regenerative_power/15_regenerative_power_powerpoint_qa.md`

## 固定品質ゲート
- R8上 電力 問5 — `(4)` / 公式 `(4)` — PASS
- R7上 法規 問13(a)(b) — `(2),(3)` / 公式 `(2),(3)` — PASS
- R4下 電力 問11 — `(5)` / 公式 `(5)` — PASS
- H29 法規 問13(a)(b) — `(2),(5)` / 公式 `(2),(5)` — PASS
- H25 法規 問12(a)(b) — `(2),(3)` / 公式 `(2),(3)` — PASS

集計:
- 固定問題: `5出題回・8答案要素`
- 実質問題パターン: `4`（R7上法規問13はH25法規問12の再出題）
- 制作前EXAM_ALIGNMENT: 完了
- 制作前独立検証: `8 / 8 PASS`
- 解説本文＋3段階例題: 完了
- 解説PDF＋QA: 完了
- 練習問題source＋練習PDF＋QA: 完了
- 解説画像PowerPoint＋QA: 完了
- 完成後ブラインド独立再解答: `8 / 8 PASS`
- 公式解答一致: `8 / 8 PASS`
- 教材外知識補完: `0件`
- 候補固定後の答案変更: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 16先取り: `0件`
- 未確認新幹線実設備値の真値化: `0件`

## 範囲境界
- 回生電力が架線へ戻った後、他負荷・系統・蓄電設備へ流れる電力収支を扱う。
- `P[kW]` と `W[kWh]`、`W=Pt`、時間変化時の面積計算、余剰・不足・送受電、自家消費を扱う。
- 蓄電池は電力貯蔵・充放電の役割まで。電池化学・UPS・充電方式へ広げない。
- 需給調整で固定過去問に現れる太陽光・揚水・運転予備力・火力は必要最小限の例に限定する。
- 回生失効の具体的車両制御や新幹線実設備値は一次資料確認前に断定しない。
- Topic 16の総合系統計算は先取りしない。

## 次
Topic 15の最終QAを実施する。必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答 `8 / 8 PASS`、PDF/PPTX QA、SPEC境界、進捗記録整合を再確認し、PASSの場合のみ `completed` とする。

## 直前完了テーマ
Topic 14 `駅やトンネルにはどう電気を配る？` は `PASS / completed`。固定5問・6答案要素の完成後ブラインド独立再解答 `6 / 6 PASS`、公式解答一致 `6 / 6 PASS`、教材外知識補完0件、必須成果物・PDF/PPTX QA・SPEC境界・進捗記録整合を最終QAで確認済み。
