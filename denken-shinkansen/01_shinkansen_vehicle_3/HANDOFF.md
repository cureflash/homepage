# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は30/38。01〜30がPASS。active topicは31 `ATC② 地上から車上へどう情報を送る？`。

## 今回進捗
Topic 31の制作前EXAM_ALIGNMENTを完了した。系列SPEC固定範囲（信号、周波数、情報伝送、センサ、デジタル信号、論理判断）から逆算して公式過去問5問・6対象項目を固定し、問題本文だけで独立解答した後に公式解答と照合して `6 / 6 PASS`。Topic 32の速度照査・ブレーキ指令・フィードバック・ブロック線図・AND/ORは採用せず、未確認の新幹線ATC実車値も追加していない。

更新:
- `topics/31_atc_signal_transmission/31_atc_signal_transmission.md` — 制作前EXAM_ALIGNMENT、固定過去問、独立解答、参考教材、範囲境界を新規作成
- `STATUS.md` — `topic_31_exam_alignment_complete` へ更新
- `HANDOFF.md` — 次開始点をTopic 31解説本文＋3段階例題へ更新

## Topic 31 固定EXAM_ALIGNMENT
1. R7下 機械 問14 — フローチャートの条件分岐・反復による論理判断 — `3` — PASS
2. R5上 機械 問18(a) — `T=1/f`、2.5 GHz → 0.4 ns — `3` — PASS
3. R5上 機械 問18(b) — `t=CPI/f`、CPI=4・0.02 μs → 200 MHz — `4` — PASS
4. R4下 機械 問13 — 雑音、多重化、変調波、標本化、圧縮 — `3` — PASS
5. R4下 理論 問14 — 標本化、量子化、符号化、伝送路雑音、A-D変換 — `5` — PASS
6. R4上 機械 問14 — センサ、アナログ/デジタル、A-D/D-A、インタフェース — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
固定範囲外追加: `0件`。
未確認実車値追加: `0件`。

## Topic 31 固定範囲
扱う:
- 信号
- 周波数
- 情報伝送
- センサ
- デジタル信号
- 論理判断
- 固定過去問が要求する標本化・量子化・符号化、A-D/D-A、雑音、多重化、変調、圧縮、周期と周波数、条件分岐

追加しない:
- Topic 30の列車検知回路そのものの再説明
- Topic 32の速度検出、速度照査、ブレーキ指令
- Topic 32のフィードバック、ブロック線図
- Topic 32のAND、ORを用いた具体的論理回路設計・簡単化
- 未確認の新幹線ATC実車周波数値、符号体系、ビットレート、具体機器定数
- 固定過去問に不要な通信方式各論

## 現在の状態
- `current_status`: `topic_31_exam_alignment_complete`
- 完成数: 30/38
- 01〜30: PASS
- active topic: 31 `ATC② 地上から車上へどう情報を送る？`
- Topic 31制作前独立解答: `6 / 6 PASS`

## 次の正確な開始点
Topic 31の解説本文＋3段階例題を作成する。固定5問・6対象項目を教材本文へ全件マッピングし、系列SPEC固定範囲とTopic 32境界を維持する。