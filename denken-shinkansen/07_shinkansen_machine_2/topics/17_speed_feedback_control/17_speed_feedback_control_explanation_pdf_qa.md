# Topic 17 解説PDF QA

更新日: 2026-09-18

対象: `topics/17_speed_feedback_control/17_speed_feedback_control_explanation.pdf`

## reconcile
- 最新main、系列 `STATUS.md` / `HANDOFF.md`、直近の系列変更を確認した。
- 既存の「機械二種を進行」枠が完了したTopic 17制作前EXAM_ALIGNMENT・解説sourceを再利用し、重複制作していない。
- 固定一次1問＋二次4問、計5問・6答案要素は変更していない。

## 解説PDF
- A4縦・6ページ。
- 目標値、偏差、制御器、プラント、センサ、伝達関数、ブロック線図、閉ループ伝達関数、外乱を固定範囲内で収録。
- 伝達関数、直列接続、開ループ、一巡積、`G/(1+GH)`、`1/(1+GH)`、外乱経路の導出を収録。
- 基礎／本試験標準／複合の3段階例題を収録。
- 固定5問・6答案要素への教材接続を `6 / 6` 維持。
- Topic 18〜21先取り、二自由度制御の独立論点追加、未確認実車値追加、固定問題の正答記号・完成済み解答保存は `0件`。

## 表示QA
- 160 dpiで全6ページをレンダリングして目視確認: `6 / 6 PASS`。
- 文字・数式の欠落、重なり、切れ、overflow、破損グリフ: `0件`。

## 文字抽出QA
- `pdftotext` 抽出: PASS。
- Unicode置換文字: `0件`。
- `(cid:)`: `0件`。
- `R07` / `R06` / `R04` / `R03` / `H21`、`Y(s)/R(s)`、`E(s)/R(s)`、`E(s)/D(s)` の抽出を確認。

## ハッシュ
- PDF SHA-256: `eb2582b3ed669824c7546c75b7dfa4737cc4daace2ec834c73ea5e1eb73746bc`
- PDF Git blob SHA: `171afc11b64f8ece63702473bdef84c20865ca80`

## 判定
`PASS / topic_17_explanation_pdf_complete`

次工程はTopic 17練習source制作。