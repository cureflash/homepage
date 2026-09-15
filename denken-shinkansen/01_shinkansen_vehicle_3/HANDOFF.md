# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は31/38。01〜31がPASS。active topicは32 `ATC③ 新幹線をどう自動で減速させる？`。

## 今回進捗
Topic 32の練習source＋練習PDFを完成した。固定EXAM_ALIGNMENTの公式過去問5問・6対象項目、解説本文§1〜§15、解説PDFは変更せず、系列SPEC固定範囲（速度検出、速度照査、ブレーキ指令、フィードバック、ブロック線図、AND、OR、フェイルセーフ）だけで15問を作成した。

全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説。正答位置はA/B/C/D/E各3問。固定6対象項目を練習へ `6 / 6` マッピングし、独立数値・論理QA `15 / 15 PASS`、複数正答0件。PDFはA4縦4ページ、180 dpi全4ページ表示QA `4 / 4 PASS`、文字抽出QA PASS。固定範囲外論点・Topic 30/31範囲の再説明・未確認新幹線ATC実車値の追加は0件。

更新:
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.md` — 15問、固定EXAM_ALIGNMENT `6 / 6` 練習マッピング、独立QA `15 / 15 PASS`
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.pdf` — A4縦4ページ、180 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- `STATUS.md` — `topic_32_practice_pdf_complete` へ更新
- `HANDOFF.md` — 次開始点を解説画像PowerPointへ更新

## Topic 32 固定EXAM_ALIGNMENT
1. R8上 機械 問13 — ブロック線図・負帰還・伝達関数 — `4` — PASS
2. R7下 機械 問18(a) — 一次遅れ閉ループ伝達関数 — `2` — PASS
3. R7下 機械 問18(b) — 周波数応答・ボード線図 — `2` — PASS
4. R6下 機械 問13 — P・I・Dと定常・過渡特性 — `2` — PASS
5. R6下 機械 問14 — AND・OR・NOT、論理式、タイムチャート — `3` — PASS
6. R6上 機械 問13 — シーケンス・フィードバック・インタロック — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認実車値追加: `0件`。

source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control.md`

## Topic 32 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「一次遅れ系の折点と低周波利得」／標準「内部信号から伝達関数を求める」／複合「論理式とシーケンス判断」
- 固定EXAM_ALIGNMENT: `6 / 6` 本文マッピング済み
- 負帰還: `C/R=G/(1+GH)`
- 固定過去問型: `C/R=(1+jωT1)/(1+jωT2)` を内部信号から導出
- 一次遅れ: `W(jω)=K/(1+jωT)`、`ωc=1/T`、低周波利得 `20log10K`、折点後 `-20 dB/dec`
- P・I・D: I=定常特性改善、D=過渡特性改善、Pは両特性へ影響
- 論理回路: AND・OR・NOT、`X=A·C+B·NOT(C)`、タイムチャート追跡
- シーケンス制御・インタロック・フェイルセーフの一般原則
- JRTT公開範囲のATC世代差のみ収録
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 32 解説PDF
- `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6対象項目の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## Topic 32 練習source / PDF
- source: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.md`
- PDF: `topics/32_atc_speed_brake_control/32_atc_speed_brake_control_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6対象項目: `6 / 6` 練習マッピング
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦4ページ、180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定範囲外論点追加: `0件`
- Topic 30/31範囲の再説明追加: `0件`
- 未確認実車値追加: `0件`

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
Topic 31 `ATC② 地上から車上へどう情報を送る？` は固定5問・6対象項目の完成後独立再解答 `6 / 6 PASS`、必須成果物・表示QA・進捗記録整合・固定範囲境界すべてPASSで `PASS / COMPLETED`。完成数31/38。

## 現在の状態
- `current_status`: `topic_32_practice_pdf_complete`
- 完成数: 31/38
- 01〜31: PASS
- active topic: 32 `ATC③ 新幹線をどう自動で減速させる？`
- Topic 32制作前独立解答: `6 / 6 PASS`
- Topic 32解説本文: §1〜§15 完了
- Topic 32 3段階例題: 完了
- Topic 32固定EXAM_ALIGNMENT本文マッピング: `6 / 6 PASS`
- Topic 32解説PDF: A4縦4ページ、180 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- Topic 32練習source/PDF: 15問、A4縦4ページ、独立QA `15 / 15 PASS`、180 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- Topic 32 PowerPoint: 未着手
- Topic 32完成後独立再解答: 未着手

## 次の正確な開始点
Topic 32の固定5問・6対象項目、解説本文/PDF、練習source/PDFを変更せず、解説画像PowerPointを作成する。系列SPEC固定範囲だけを扱い、未確認実車値・Topic 30/31範囲・固定過去問に不要な高度制御論を追加しない。
