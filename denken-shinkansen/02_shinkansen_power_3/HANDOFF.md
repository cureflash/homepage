# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `14 / 16`。Topic 01〜14は完成済み。active themeはTopic 15 `回生した電気はどこへ行く？`。

詳細な完了履歴は `STATUS.md` と各Topicのsource・QA記録を正本とする。

## 今回進捗
Topic 15の解説PDFを作成し、表示・文字抽出・数値論理QAまで完了した。A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`、3段階例題の独立再計算 `3 / 3 PASS`、固定5出題回・8答案要素のPDF対応 `8 / 8 PASS`。SPEC固定範囲外追加、Topic 16先取り、未確認新幹線実設備値の真値化はいずれも0件。完成後ブラインド独立再解答を保護するため、公式正答番号・制作前最終答案はPDFへ転記していない。

source: `topics/15_regenerative_power/15_regenerative_power.md`
解説PDF: `topics/15_regenerative_power/15_regenerative_power_explanation.pdf`
解説PDF QA: `topics/15_regenerative_power/15_regenerative_power_explanation_qa.md`

固定品質ゲート:
- R8上 電力 問5 — 二次電池、リチウムイオン電池、NAS電池、電力貯蔵、出力平滑化をPDFへ接続
- R7上 法規 問13(a)(b) — 発電・負荷グラフ、余剰送電、自家消費、自給率をPDFへ接続
- R4下 電力 問11 — 需給バランス、負荷平準化、蓄電池、揚水、運転予備力をPDFへ接続
- H29 法規 問13(a)(b) — 双方向送受電、自家消費比率をPDFへ接続
- H25 法規 問12(a)(b) — R7上問13の再出題として同一解法をPDFで再現

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
Topic 15の練習問題sourceを作成する。三種仕様に従い原則12問以上、少なくとも半数を五肢択一とし、固定5出題回・8答案要素へ接続する。SPEC固定範囲外へ広げない。

## 直前完了テーマ
Topic 14 `駅やトンネルにはどう電気を配る？` は `PASS / completed`。固定5問・6答案要素の完成後ブラインド独立再解答 `6 / 6 PASS`、公式解答一致 `6 / 6 PASS`、教材外知識補完0件、必須成果物・PDF/PPTX QA・SPEC境界・進捗記録整合を最終QAで確認済み。

source: `topics/14_distribution/14_distribution.md`
最終QA: `topics/14_distribution/14_distribution_final_qa.md`