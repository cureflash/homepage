# Topic 21 解説PDF QA

更新日: 2026-09-20
対象: `21_readhesion_control_explanation.pdf`

## 1. 仕様照合
- `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、Topic 21 sourceを再確認。
- 固定EXAM_ALIGNMENTは一次4問＋二次1問、計5問・14答案要素のまま。
- Topic 22総合走行シミュレーション先取り: `0件`
- 未確認の現行新幹線センサ方式・検知しきい値・制御周期・トルク抑制量/回復量・判定ロジックの実車仕様化: `0件`
- SPEC外A-D変換器方式等の追加: `0件`
- 固定過去問の個別正答記号・最終数値保存: `0件`

## 2. 成果物
- A4縦4ページ。
- メカトロニクス基本構成、シーケンス/フィードバック、ロータリエンコーダ、磁気/光電センサ、車輪速度・加速度推定、空転・滑走・粘着、トルク抑制・再粘着、非線形性・飽和・応答速度、二次型閉ループ伝達関数・時間応答、STAR21公開試験例を収載。
- 固定5問・14答案要素: `14 / 14 COVERED`
- 基礎・本試験標準・複合の3段階例題: `3 / 3 INCLUDED`
- STAR21公開値は953形試験結果として明示し、現行新幹線へ一般化していない。

## 3. 表示QA
- 200 dpi `render_pdf.py`: `4 / 4 PASS`
- `pdftocairo` 160 dpi: `4 / 4 PASS`
- 文字切れ、本文重なり、ページ外はみ出し、欠落グリフ: `0件`

## 4. 文字抽出QA
- `pdftotext` 抽出成功。
- replacement char: `0`
- `(cid:)`: `0`
- `R08`、`R06`、`R04`、`H27`、`R07`、`14 / 14 COVERED`、`150 min^-1`、`17.2 m/s^2`、`3e^(-3t)`、`STAR21` を抽出確認。

## 5. 数値・論理QA
1. `P=2048, Δt=0.10 s, N=512` から `n=150 min^-1`: `PASS`
2. 同条件から `ω=5π ≒ 15.7 rad/s`: `PASS`
3. `r=0.43 m, Δt=0.05 s, 40→42 rad/s` から `a_w=17.2 m/s^2`: `PASS`
4. 負帰還の閉ループ `G_y=L/(1+L)`: `PASS`
5. `G_y=3/(s+3)` のインパルス応答 `3e^(-3t)`: `PASS`
6. 同系の単位ステップ応答 `1-e^(-3t)`: `PASS`

合計: `6 / 6 PASS`

## 6. GitHub正本同一性
- size: `13959 bytes`
- SHA-256: `daa9c1311425e2a1f6fd04001f370e35ce32351ad0f0a995f10c9eaa0729e665`
- Git blob: `c87d3d22897caca0e5beeb83b2e364bbf26518c2`

## 7. 判定
`PASS / topic_21_explanation_pdf_complete`

次工程: Topic 21 練習source。