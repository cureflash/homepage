# 15 500系 高速域の出力・熱解析 — 解説PDF QA

更新日: 2026-09-18

## 対象
- PDF: `15_500series_high_speed_output_thermal_explanation.pdf`
- source: `15_500series_high_speed_output_thermal.md`
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・16答案要素

## PDF構造・表示QA
- A4縦: `4ページ`
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 文字欠落: `0件`
- 黒四角・文字化け: `0件`
- 重なり・クリップ: `0件`
- PDF open/preflight: `PASS`

## 教材内容QA
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・16答案要素接続: `16 / 16 PASS`
- SPEC指定9項目: `9 / 9 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
  - 回転速度―トルク: `PASS`
  - 回転速度―出力: `PASS`
  - 出力―損失: `PASS`
  - 簡略熱モデル: `PASS`
- 4可視化の共通仮定式系: `PASS`
- 教材用仮定値を500系実車値と明示した箇所: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## ハッシュ
- PDF SHA-256: `58c06ad4b257d854e8e3ee15035e73f864f493e0bfd7df361c72498c07fb2984`
- Git blob SHA: `be8cdfaa65b377ca85130ca90ac6b8f5d5e23ef7`

## 判定
`PASS / EXPLANATION_PDF_COMPLETE`

## 次工程
Topic 15の練習問題sourceを作成する。固定EXAM_ALIGNMENT、SPEC固定範囲、解説source/PDFの共通仮定式系を変更せず、第二種一次・二次への接続と完全解説条件を守る。
