# Topic 28 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

対象:
- `28_l0_synchronous_machine_phasor_propulsion_practice_source.md`
- `28_l0_synchronous_machine_phasor_propulsion_practice_source_qa.md`
- `28_l0_synchronous_machine_phasor_propulsion_practice.pdf`

## 1. reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、直近コミット、Topic 27成果、Topic 28既存成果を確認した。既存workerがTopic 28の制作前EXAM_ALIGNMENT、解説source/PDF、練習source/QAまで完了していたため重複作業せず、次工程の練習PDF生成とPDF QAのみ実施した。

固定EXAM_ALIGNMENT、Topic 21一般式、L0系実車境界は変更していない。

## 2. canonical PDF

- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice.pdf`
- canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
- file size: `12,096 bytes`
- SHA-256: `773bf45ecd5aa839dd9a8a92df62717333af62305b2fb76e1b92155281f3041d`
- A4縦: `5 pages`
- PDF title: `Topic 28 Practice`
- encrypted: `no`

## 3. render / text QA

- PDFium render: `5 / 5 PASS`
- Poppler render: `5 / 5 PASS`
- visual inspection: `PASS`（文字切れ・重なり・ページ外逸脱なし）
- `pdftotext -layout`: `PASS`（`7,872 bytes`）
- 置換文字 `�`: `0件`
- 日本語本文: CID日本語フォントで表示確認 `PASS`

## 4. 問題・解説収録

- 一次試験型8問＋五肢択一＋正答・完全解説: `8 / 8 PASS`
- 二次試験型4問＋途中式・前提・単位・理由説明: `4 / 4 PASS`
- 数値・論理独立再計算: practice source QAで `12 / 12 PASS`、PDF転記値を再照合 `PASS`
- 一次正答一意性: `8 / 8 PASS`

主要数値照合:
- 問1 `|E|=1.204 p.u.` — PASS
- 問2 `|E|=0.854 p.u.` — PASS
- 問3 `P=1.00 p.u.` — PASS
- 問4 `Q≈+0.0654 p.u.` — PASS
- 問5 `P_max=2.20 p.u.` — PASS
- 問8 `F=162 kN` — PASS
- 問9 `|E|≈1.442, δ≈19.44°, P=0.600, Q=0.450 p.u.` — PASS
- 問10 `P_max=2.00→1.60 p.u., δ=36.87°→48.59°` — PASS
- 問11 `δ'=48.59°` — PASS
- 問12 `P_e≈24.30 MW, P_mech≈20.90 MW, F≈150 kN` — PASS

## 5. EXAM_ALIGNMENT / SPEC gate

- 固定過去問: `5 / 5 connected`
- 一次答案要素: `5 / 5 connected`
- 二次答案要素: `22 / 22 connected`
- 合計答案要素: `27 / 27 connected`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化の計算接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## 6. 境界・安全QA

- 円筒形・定常・平衡三相・抵抗/損失無視のモデル条件: 明示 — PASS
- `δ=90°` を理想基本モデルの静的最大点に限定: PASS
- 電気有効電力を効率条件なしに実車推進力へ直接等置: `0件`
- 未確認L0系 `X_s,E,δ,P,Q,F,η` の真値化: `0件`
- Topic 29浮上・案内系の先取り: `0件`
- SPEC外主題追加: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 7. Topic 21過去問固有注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 8. 最終判定

判定: `PASS / PRACTICE_PDF_COMPLETE`

次工程: Topic 28 解説画像PowerPoint生成＋QA。
