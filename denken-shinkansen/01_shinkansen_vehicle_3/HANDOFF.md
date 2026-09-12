# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は23/38。01〜23がPASS。active topicは24 `L0系③ 超電導磁気浮上`。

## 今回進捗
Topic 24を1段階進め、制作前EXAM_ALIGNMENTを完了した。

新規・更新:
- `topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev.md`
- `STATUS.md`
- `HANDOFF.md`

直近年度を優先して系列SPEC範囲内の公式過去問6問を品質ゲート対象に固定。式・法則から再導出して公式解答と照合し、6/6 PASS。教材本文や実車仕様はまだ追加していない。

## Topic 24 品質ゲート対象
1. R8上 理論 問4 — 点磁極が作る磁界・重ね合わせ — 3 / 3 — PASS
2. R8上 機械 問2 — 運動起電力 `e=Blv` — 4 / 4 — PASS
3. R7下 理論 問4 — 円弧電流が作る磁界・合成 — 5 / 5 — PASS
4. R7上 理論 問4 — 直線導体・円形コイルの磁界 — 5 / 5 — PASS
5. R6下 理論 問3 — ファラデーの法則 — 2 / 2 — PASS
6. R6下 理論 問4 — 平行導体の磁界・電磁力方向 — 2 / 2 — PASS

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-13

## 固定範囲・境界
系列SPECの既定範囲だけを扱う。

- 超電導磁石
- 磁界
- 電磁誘導
- 誘導電流
- 電磁力
- 浮上
- 案内

次は範囲外として採用しない。
- R8上 理論 問3 — 自己インダクタンス・磁気エネルギーが主題
- R6下 理論 問12 — 荷電粒子のサイクロイド軌道が必要

Topic 24で必要な試験知識は、磁界の向き・大きさと重ね合わせ、点磁極・直線導体・円形/円弧電流の磁界、ファラデー/レンツ、誘導電流、`e=Blv`、`F=BIl sinθ` と方向判定。L0系の実車説明は一次資料で確認できた事実だけを使う。

## 現在の状態
- `current_status`: `topic_24_exam_alignment_complete`
- 完成数: 23/38
- Topic 24: 制作前EXAM_ALIGNMENT完了、未完成
- 次段階: 解説本文＋3段階例題

## 次の正確な開始点
`topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev.md` の確定済みEXAM_ALIGNMENTを前提に、解説本文と基礎・本試験標準・複合の3段階例題を作る。選定6問を教材だけで解ける中間知識まで書く。超電導磁石・浮上・案内のL0系接続はJR東海等の一次資料で確認し、未確認値・系列SPEC外論点を追加しない。

## 直前完了テーマ
Topic 23 `L0系② 500km/hと周波数制御` は完成後独立再解答5/5 PASSを含め全品質ゲートPASS済み。完成成果物はsource Markdown、解説PDF、練習PDF15問、PowerPoint 7スライド。