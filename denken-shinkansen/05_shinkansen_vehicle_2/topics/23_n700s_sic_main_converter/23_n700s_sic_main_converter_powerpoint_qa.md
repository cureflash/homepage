# Topic 23 N700S SiC主変換装置 - 解説画像PowerPoint QA

更新日: 2026-09-19

判定: `PASS / POWERPOINT_RECOVERY_COMPLETE`

## reconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23の初回clean blind→source補強→PDF再同期→修正後clean blind `23 / 23 PASS`→PPTX破損blockerまでreconcileした。同一工程の重複はしていない。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更していない。

## 復旧artifact

対象: `23_n700s_sic_main_converter_images.pptx`

- 形式: 16:9 / `6 slides`
- byte size: `8,587 bytes`
- SHA-256: `b7c1e6af945c9e1c36e01175db365a8c4f119800e0ae655894fdae2ee0b02062`
- Git blob SHA: `4ac7e4c493e8c24e8ea98d40db2494a7218f14b2`
- 旧破損blob `ff2c73d872da4fc3605fb30e5f67c9dc97517f5c` は置換対象

現行の補強済みTopic 23 sourceと固定6枚構成から再生成した。技術本文、固定EXAM_ALIGNMENT、問題、数式、SPEC境界は変更していない。

## 構造・表示QA

- ZIP整合性: `PASS`
- python-pptx open: `6 / 6 PASS`
- LibreOffice PDF変換: `PASS / 6 pages`
- PDFページ寸法: `960.009 × 540 pt`
- pdftoppm 110 dpi: `6 / 6 PASS`
- contact sheet目視: `6 / 6 PASS`
- geometry overflow: `0`
- 文字切れ・重なり・欠落グリフ: `0`
- pdftotext replacement character: `0`
- pdftotext `(cid:)`: `0`

## 内容QA

- 固定5問・23答案要素: `23 / 23 covered`
  - 一次: `17 / 17`
  - 二次: `6 / 6`
- SPEC固定8項目: `8 / 8 covered`
  - SiC / 導通損失 / スイッチング損失 / スイッチング周波数 / 変換効率 / 発熱 / 冷却 / 小型軽量化
- SPEC指定3可視化: `3 / 3 PASS`
  1. 電流―導通損失
  2. スイッチング周波数―総損失
  3. 同条件Si系・SiC系比較
- clean blind補強2点: `2 / 2 PASS`
  1. R2一次問2(2): 電圧矢印極性→ON/OFF状態表→平均値、固定図で `V=D V_dc`
  2. R2一次問2(4): 固定図の三角形 `p(t)` は `W_off=(1/2)V_dc I_dc T_2`、`VI t_s/6` は別の相補直線ランプ条件のみ
- H24二次橋渡し: `V_a=E+R_a I_a`、`E∝n`、通流率と導通損失を収録

## 境界QA

- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- 新規問題追加: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海N700A比7%値のSiC単独効果化: `0件`
- 富士電機20%軽量化のN700S車両全体への誤拡張: `0件`
- 新たなexact blocker: `0件`

## 次工程

Topic 23はまだ `completed` にしない。復旧した現行GitHub PPTXと、すでにPASS済みの解説PDF・練習PDF・修正後clean blindを対象に最終QAを再実施する。PASS確定前にTopic 24へ進めない。
