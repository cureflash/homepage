# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は30/38。01〜30がPASS。active topicは31 `ATC② 地上から車上へどう情報を送る？`。

## 今回進捗
Topic 31の練習source/PDFを完成した。15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説とし、正答位置はA/B/C/D/E各3問。制作前に固定した公式過去問5問・6対象項目を `6 / 6` 練習マッピングし、独立数値・論理QA `15 / 15 PASS`。PDFはA4縦4ページ、180 dpi全4ページ表示QA PASS、文字抽出QA PASS。

Topic 32の速度検出・速度照査・ブレーキ指令・フィードバック・ブロック線図・AND/OR具体回路、未確認のATC実車周波数値・符号体系・ビットレート、固定過去問に不要な通信方式各論は追加していない。

更新:
- `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.md` — 15問、4/8/3、全問五肢択一＋完全解説、固定6対象項目を全件マッピング
- `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.pdf` — A4縦4ページ、180 dpi `4 / 4 PASS`、文字抽出QA PASS
- `STATUS.md` — `topic_31_practice_pdf_complete` へ更新
- `HANDOFF.md` — 次開始点をTopic 31解説画像PowerPointへ更新

## Topic 31 固定EXAM_ALIGNMENT
1. R7下 機械 問14 — フローチャートの条件分岐・反復による論理判断 — `3` — PASS
2. R5上 機械 問18(a) — `T=1/f`、2.5 GHz → 0.4 ns — `3` — PASS
3. R5上 機械 問18(b) — `t=CPI/f`、CPI=4・0.02 μs → 200 MHz — `4` — PASS
4. R4下 機械 問13 — 雑音、多重化、変調波、標本化、圧縮 — `3` — PASS
5. R4下 理論 問14 — 標本化、量子化、符号化、伝送路雑音、A-D変換 — `5` — PASS
6. R4上 機械 問14 — センサ、アナログ/デジタル、A-D/D-A、インタフェース — `2` — PASS

制作前独立解答: `6 / 6 PASS`。
本文マッピング: `6 / 6 PASS`。
解説PDF反映: `6 / 6 PASS`。
練習マッピング: `6 / 6 PASS`。
練習独立QA: `15 / 15 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
固定範囲外追加: `0件`。
未確認実車値追加: `0件`。

## Topic 31 練習QA
- source: `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.md`
- PDF: `topics/31_atc_signal_transmission/31_atc_signal_transmission_practice.pdf`
- 15問（基礎4／標準8／複合3）
- 五肢択一: `15 / 15`
- 正答位置: A/B/C/D/E各3問
- 固定5問・6対象項目: `6 / 6`
- 独立数値・論理QA: `15 / 15 PASS`
- 複数正答: `0件`
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- Topic 32範囲追加: `0件`
- 未確認実車値追加: `0件`

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
- `current_status`: `topic_31_practice_pdf_complete`
- 完成数: 30/38
- 01〜30: PASS
- active topic: 31 `ATC② 地上から車上へどう情報を送る？`
- Topic 31制作前独立解答: `6 / 6 PASS`
- Topic 31本文マッピング: `6 / 6 PASS`
- Topic 31解説PDF反映: `6 / 6 PASS`
- Topic 31練習マッピング: `6 / 6 PASS`
- Topic 31練習独立QA: `15 / 15 PASS`

## 次の正確な開始点
Topic 31の解説画像PowerPointを作成する。固定5問・6対象項目の解法経路を可視化し、16:9表示QA・PPTX ZIP整合性を確認する。