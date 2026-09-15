# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は32/38。01〜32がPASS。active topicは33 `COMTRAC① 東海道新幹線全体をどう監視する？`。

## 今回進捗
Topic 32の最終QAを実施し、`PASS / COMPLETED` とした。固定EXAM_ALIGNMENTの公式過去問5問・6対象項目は完成後独立再解答 `6 / 6 PASS`。必須成果物、練習QA、解説PDF・練習PDF・PowerPoint表示QA、進捗記録整合、固定範囲境界を全件PASS確認した。

教材外知識補完0件、固定範囲外知識による正答補完0件、未確認新幹線ATC実車値追加0件。完成数を32/38へ更新し、次の未完了テーマをTopic 33へ移した。Topic 32の教材本文・固定EXAM_ALIGNMENT・数式・例題・PDF・練習問題・PowerPointは変更していない。

最終QA記録: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_final_qa.md`

## Topic 32 固定EXAM_ALIGNMENT
1. R8上 機械 問13 — ブロック線図・負帰還・伝達関数 — `4` — PASS
2. R7下 機械 問18(a) — 一次遅れ閉ループ伝達関数 — `2` — PASS
3. R7下 機械 問18(b) — 周波数応答・ボード線図 — `2` — PASS
4. R6下 機械 問13 — P・I・Dと定常・過渡特性 — `2` — PASS
5. R6下 機械 問14 — AND・OR・NOT、論理式、タイムチャート — `3` — PASS
6. R6上 機械 問13 — シーケンス・フィードバック・インタロック — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
完成後独立再解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認実車値依存: `0件`。

source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control.md`
最終QA記録: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_final_qa.md`

## Topic 32 成果物
- 解説source: §1〜§15＋3段階例題、固定EXAM_ALIGNMENT `6 / 6` 本文マッピング済み
- 解説PDF: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_explanation.pdf` — A4縦4ページ、180 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習source/PDF: 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、独立QA `15 / 15 PASS`、A4縦4ページ、表示QA `4 / 4 PASS`
- PowerPoint: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_images.pptx` — 16:9・4枚、表示QA `4 / 4 PASS`、overflow PASS、ZIP整合性PASS
- 完成後独立再解答・最終QA: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_final_qa.md` — `6 / 6 PASS`、`PASS / COMPLETED`

## Topic 32 完成後独立再解答
- R8上 機械 問13 — `e=R-x`, `x=e/(jωT2)`, `C=x+(T1/T2)e` を連立し `C/R=(1+jωT1)/(1+jωT2)` → 選択肢4 — PASS
- R7下 機械 問18(a) — `T=0.2 s, K=10` より `C/R=10/(1+j0.2ω)` → 選択肢2 — PASS
- R7下 機械 問18(b) — 低周波利得 `20 dB`、折点 `5 rad/s`、以後 `-20 dB/dec` → 選択肢2 — PASS
- R6下 機械 問13 — I=定常特性改善、D=過渡特性改善、P=両特性へ影響 → 選択肢2 — PASS
- R6下 機械 問14 — `X=A·C+B·NOT(C)` を `C=0/1` で場合分けしてタイムチャート追跡 → 選択肢3 — PASS
- R6上 機械 問13 — シーケンス/フィードバック、有接点、インタロック、タイムチャートを対応 → 選択肢2 — PASS
- 合計: `6 / 6 PASS`

## Topic 32 最終QA
`PASS / COMPLETED`。
- 必須成果物: PASS
- 固定5問・6対象項目の完成後独立再解答: `6 / 6 PASS`
- 練習問題QA: `15 / 15 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS

## Topic 32 固定範囲境界
扱う:
- 速度検出の役割
- 速度照査
- ブレーキ指令
- フィードバック
- ブロック線図
- 固定過去問に必要な負帰還、一次遅れ系、周波数応答、P・I・D基礎
- AND、OR、NOT、論理式、タイムチャート
- シーケンス制御、インタロック
- フェイルセーフの一般原則
- JRTT公開資料で確認できるATC方式世代差

追加しない:
- Topic 30の軌道回路・列車検知回路の再説明
- Topic 31の信号周波数・符号化・伝送方式各論の再説明
- 未確認の新幹線ATC実車周波数、符号体系、ビットレート、速度検出器定数、速度照査閾値、減速度、応答時間
- 固定過去問のAND/OR例から実ATC内部論理式を推定すること
- 根軌跡、ナイキスト線図、ラウス判別、PID調整法など固定過去問に不要な高度制御設計論

## 直前完了
Topic 32 `ATC③ 新幹線をどう自動で減速させる？` は固定5問・6対象項目の完成後独立再解答 `6 / 6 PASS`、必須成果物・練習QA・表示QA・進捗記録整合・固定範囲境界すべてPASSで `PASS / COMPLETED`。完成数32/38。

## 現在の状態
- `current_status`: `topic_32_completed`
- 完成数: 32/38
- 01〜32: PASS
- active topic: 33 `COMTRAC① 東海道新幹線全体をどう監視する？`
- Topic 32最終QA: `PASS / COMPLETED`
- Topic 33: 未着手

## 次の正確な開始点
Topic 33 `COMTRAC① 東海道新幹線全体をどう監視する？` の制作前EXAM_ALIGNMENTを実施する。系列SPEC固定範囲は、列車番号、列車位置、ダイヤ、データ表現、2進数、情報処理、データ伝送。まず公式過去問を直近年度から調査し、固定EXAM_ALIGNMENTを確定してから本文制作へ進む。
