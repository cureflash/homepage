# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `14 / 16`。Topic 01〜14は完成済み。active themeはTopic 15 `回生した電気はどこへ行く？`。

詳細な完了履歴は `STATUS.md` と各Topicのsource・QA記録を正本とする。

## 今回進捗
Topic 15の練習PDF＋QAを作成した。A4縦4ページ、全12問・全問五肢択一、基礎3／本試験標準7／複合2。200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`、数値・論理再検算 `12 / 12 PASS`、正答一意性 `12 / 12 PASS`、固定5出題回・8答案要素への接続 `8 / 8 PASS`。SPEC固定範囲外追加0件、Topic 16先取り0件、未確認新幹線実設備値の真値化0件。

source: `topics/15_regenerative_power/15_regenerative_power.md`
解説PDF: `topics/15_regenerative_power/15_regenerative_power_explanation.pdf`
解説PDF QA: `topics/15_regenerative_power/15_regenerative_power_explanation_qa.md`
練習問題source: `topics/15_regenerative_power/15_regenerative_power_practice_source.md`
練習PDF: `topics/15_regenerative_power/15_regenerative_power_practice.pdf`
練習PDF QA: `topics/15_regenerative_power/15_regenerative_power_practice_qa.md`

固定品質ゲート:
- R8上 電力 問5 — 問3・問9で二次電池、Li-ion、NAS、電力貯蔵、出力平滑化へ接続
- R7上 法規 問13(a)(b) — 問2・問6・問7・問10・問11で余剰送電、面積計算、自家消費、自給率へ接続
- R4下 電力 問11 — 問8・問9で需給バランス、負荷平準化、蓄電池、揚水、運転予備力へ接続
- H29 法規 問13(a)(b) — 問5・問6・問10・問11で双方向送受電、自家消費比率へ接続
- H25 法規 問12(a)(b) — R7上問13の再出題として問6・問7・問10・問11で同一解法を再現

集計:
- 制作前EXAM_ALIGNMENT: 完了
- 固定問題: `5出題回・8答案要素`
- 実質問題パターン: `4`（R7上法規問13はH25法規問12の再出題）
- 制作前独立検証: `8 / 8 PASS`
- 公式解答一致: `8 / 8 PASS`
- 解説本文: §1〜§15 完成
- 3段階例題: 基礎・本試験標準・複合 各1問完成
- 3段階例題独立再計算: `3 / 3 PASS`
- 固定5出題回・8答案要素の本文要求事項マッピング: `8 / 8 PASS`
- 解説PDF: A4縦4ページ
- 解説PDF表示QA: 200 dpi `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 解説PDF数値・論理再検算: `3 / 3 PASS`
- 固定5出題回・8答案要素のPDF対応: `8 / 8 PASS`
- 練習問題source: 全12問・全問五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習source数値・論理独立再計算: `12 / 12 PASS`
- 練習source正答一意性: `12 / 12 PASS`
- 練習source固定5出題回・8答案要素への接続: `8 / 8 PASS`
- 練習PDF: A4縦4ページ
- 練習PDF表示QA: 200 dpi `4 / 4 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF数値・論理再検算: `12 / 12 PASS`
- 練習PDF正答一意性: `12 / 12 PASS`
- 練習PDF固定5出題回・8答案要素への接続: `8 / 8 PASS`
- `kW` / `kWh`、`W=Pt`、`W=∫Pdt`、グラフ面積: PASS
- 余剰・不足・送電・受電の方向判定: PASS
- 自家消費量・自家消費比率・自給率の分母区別: PASS
- 蓄電池・電力貯蔵・負荷平準化・需給バランス: PASS
- 回生失効・受入余力・省エネルギーの因果: PASS
- 完成後ブラインド独立再解答保護: PASS
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
Topic 15の解説画像PowerPointを作成する。固定5出題回・8答案要素を可視化し、16:9表示QA、overflow、ZIP整合性、数値・論理、SPEC固定範囲を確認する。

## 直前完了テーマ
Topic 14 `駅やトンネルにはどう電気を配る？` は `PASS / completed`。固定5問・6答案要素の完成後ブラインド独立再解答 `6 / 6 PASS`、公式解答一致 `6 / 6 PASS`、教材外知識補完0件、必須成果物・PDF/PPTX QA・SPEC境界・進捗記録整合を最終QAで確認済み。

source: `topics/14_distribution/14_distribution.md`
最終QA: `topics/14_distribution/14_distribution_final_qa.md`