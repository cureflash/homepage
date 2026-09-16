# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `9 / 16`。Topic 01〜09は完成済み。

## 今回進捗
Topic 10 `新幹線が突然大電力を使ったら？` の解説PDFを完成した。

成果物:
- `topics/10_load_variation/10_load_variation_explanation.pdf`
- A4縦4ページ
- source §1〜§15と3段階例題を反映
- 固定5問・8小問の要求事項を `8 / 8` 維持

QA:
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 3段階例題の数値・論理独立再計算: PASS
- SPEC固定範囲外追加: `0件`
- Topic 11以降の先取り: `0件`
- 未確認新幹線実設備値の真値化: `0件`

## Topic 10 固定過去問
- R8上 電力 問12
- R7上 電力 問17 (a)(b)
- R4上 電力 問17 (a)(b)
- R3 法規 問13 (a)(b)
- R1 電力 問17 (a)(b)

完成後ブラインド独立再解答を汚染しないため、制作前の選択肢番号・数値解は進捗記録へ保存しない。

## Topic 10 固定範囲
SPECから追加しない。

- 最大需要電力
- 需要率
- 負荷率
- 不等率
- 力率
- 電圧変動
- 電力損失
- 無効電力

新幹線側は `列車負荷増加 → 電流増加 → 電圧降下増加 → 損失増加` の因果だけを使う。未確認実設備値は真値として置かない。Topic 11以降の短絡・保護・遮断、弛度・張力、材料、配電・地中電線路、回生・蓄電へ先回りしない。

## 直前完了テーマ
Topic 09 `変電所からパンタグラフまでどう送る？` は `PASS / completed`。固定5問・7小問の完成後ブラインド独立再解答 `7 / 7 PASS`、最終QA PASS。

## 現在状態
- `current_status`: `topic_10_explanation_pdf_complete`
- 完成数: `9 / 16`
- last completed: Topic 09 `変電所からパンタグラフまでどう送る？`
- active: Topic 10 `新幹線が突然大電力を使ったら？`
- source: `topics/10_load_variation/10_load_variation.md`
- 解説PDF: `topics/10_load_variation/10_load_variation_explanation.pdf`

## 次の正確な開始点
Topic 10練習問題sourceを作成する。三種なので原則12問以上、固定5問・8小問へ接続し、正答一意性・数値論理QAを行う。