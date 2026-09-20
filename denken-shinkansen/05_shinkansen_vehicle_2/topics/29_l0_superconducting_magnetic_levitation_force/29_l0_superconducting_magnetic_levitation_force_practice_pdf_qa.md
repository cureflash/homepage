# Topic 29 練習PDF QA

更新日: 2026-09-20

判定: `PASS / PRACTICE_PDF_COMPLETE`

対象:
- `29_l0_superconducting_magnetic_levitation_force_practice_source.md`
- `29_l0_superconducting_magnetic_levitation_force_practice_source_qa.md`
- `29_l0_superconducting_magnetic_levitation_force_practice.pdf`

## 1. reconcile

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 29の固定EXAM_ALIGNMENT、解説source/PDF、練習source/QAを確認した。既存正本の次工程どおり、練習sourceを正本として練習PDF生成とPDF QAのみ実施した。

固定EXAM_ALIGNMENT、Topic 21一般式、L0系実車境界は変更していない。

## 2. canonical PDF

- path: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_practice.pdf`
- canonical blob SHA: `1f639d616e3c2432279e02e599c374771c0cfb70`
- file size: `17,654 bytes`
- SHA-256: `3acf1c5f64365ceba4f40c2167eec4a6003b4839cd9ef8dd5830c372b3d2cd04`
- A4縦: `7 pages`
- PDF title: `Topic 29 Practice`
- encrypted: `no`

## 3. render / text QA

- PDFium render: `7 / 7 PASS`
- Poppler render: `7 / 7 PASS`
- visual inspection: `PASS`（文字切れ・重なり・ページ外逸脱なし）
- `pdftotext -layout`: `PASS`（`11,755 bytes`）
- 置換文字 `�`: `0件`
- 日本語本文: CID日本語フォントで表示確認 `PASS`

## 4. 問題・解説収録

- 一次試験型8問＋五肢択一＋正答・完全解説: `8 / 8 PASS`
- 二次試験型4問＋途中式・前提・単位・理由説明: `4 / 4 PASS`
- 数値・論理独立再計算: practice source QAで `12 / 12 PASS`、PDF転記値を再照合 `PASS`
- 一次正答一意性: `8 / 8 PASS`

主要数値照合:
- 問1 `E_rms≈13.33 V` — PASS
- 問3 `E_hat=2.50 V` — PASS
- 問4 `T=-0.75 N・m` — PASS
- 問5 `Φ≈36.46 μWb` — PASS
- 問6 `I_1=8.0 A, W_1=3.20 J` — PASS
- 問7 `I_rms≈2.74 A` — PASS
- 問9 `ω=75 rad/s, E_rms≈5.30 V, I_rms≈5.88 A, F_model≈177 N` — PASS
- 問10 `W'_m=18.85 J, T≈-2.08 N・m, e_1≈6.93 V` — PASS
- 問11 `Ψ=0.80 Wb・turn, i=8.0 A, F=-1.60 N, W_ext=+1.60 J` — PASS
- 問12 `N_s=1500 min^-1, s=0.20, f_2=10 Hz, I_2≈78.1 A, P_2≈18.3 kW, T≈116 N・m, s_m=0.25, s_p=1.80` — PASS

## 5. EXAM_ALIGNMENT / SPEC gate

- 固定過去問: `5 / 5 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `4 / 4 connected`
- 合計答案要素: `24 / 24 connected`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化の計算接続: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## 6. 境界・安全QA

- `Φ` / `Ψ` の区別: 維持 — PASS
- ファラデー負号とレンツ則: 維持 — PASS
- `e=-v dΨ/dx` の連鎖律: 維持 — PASS
- `R+jωL` を含む正弦定常モデル条件: 維持 — PASS
- 電流一定 / 鎖交磁束一定の拘束条件: 維持 — PASS
- 浮上 / 案内の方向分離: 維持 — PASS
- 教材用 `F_model=K_F I_rms` の実車一般式化: `0件`
- 未確認L0系の磁界・コイル電流・`R/L/M`・幾何寸法・浮上力・案内力・速度しきい値の真値化: `0件`
- Topic 30非接触給電の先取り: `0件`
- SPEC外主題追加: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 7. Topic 21過去問固有注記

H26二次「機械・制御」問1(4)の `48.1 N・m / 48.0 N・m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 8. 最終判定

判定: `PASS / PRACTICE_PDF_COMPLETE`

次工程: Topic 29 解説画像PowerPoint生成＋QA。教材一式完成前にclean blind独立再解答へ進まない。
