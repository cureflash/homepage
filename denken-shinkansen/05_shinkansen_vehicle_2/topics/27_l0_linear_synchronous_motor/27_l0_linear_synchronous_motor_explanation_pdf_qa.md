# Topic 27 解説PDF QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 27制作前EXAM_ALIGNMENT、Topic 27解説source/QA、直近の車両二種worker成果を再確認した。既存workerが解説source＋source QAまで完了していたため重複制作せず、次工程の解説PDFだけを実施した。

固定EXAM_ALIGNMENTは第二種一次4問・18答案要素＋二次1問・5答案要素、合計5問・23答案要素のまま変更していない。

## artifact identity

- path: `27_l0_linear_synchronous_motor_explanation.pdf`
- canonical blob SHA: `10f17547d41a12d59ad76dcb33bc7a3a398f86a8`
- file size: `10,082 bytes`
- SHA-256: `6e5dad1b40d7f8de0e233f11ef6ba070ee6698a4e8454f2f6553201b8072fb24`
- A4縦: `3 pages`

## 表示・構造QA

- PDFium 130 dpi: `3 / 3 PASS`
- Poppler 130 dpi: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（7,313 bytes）
- 置換文字 `�`: `0件`
- 文字・図のクリッピング: `0件`
- 文字重なり: `0件`
- 日本語欠落グリフ・破損グリフ: `0件`
- SPEC指定2可視化: `2 / 2 PASS`
  - 周波数―同期速度
  - 極ピッチ―同期速度
- 可視化の仮定値注記: `2 / 2 PASS`

PDFiumとPopplerの双方で3ページを確認し、本文・2グラフの欠落やクリッピングは確認されなかった。

## 数値・論理独立再計算

### 例題1

`τ=1.20 m`, `f=50 Hz`

`v_s=2×1.20×50=120 m/s`

`120×3.6=432 km/h`

判定: PASS

### 例題2

`P=6`, `f=50 Hz`

`N_s=120×50/6=1000 min^-1`

`X_s=1.8+0.2=2.0 Ω/相`

`X_s I_a=2.0×100=200 V/相`

判定: PASS

### 例題3

`K=220/200=1.10`

`Z_s(p.u.)=1/1.10=0.909090...`

`Z_base=6600^2/(5.0×10^6)=8.712 Ω`

`Z_s=0.909090...×8.712=7.92 Ω/相`

`X_s=sqrt(7.92^2-0.80^2)=7.879... Ω/相≈7.88 Ω/相`

判定: PASS

3段階例題: `3 / 3 PASS`

## 過去問対応品質ゲート

- 固定過去問: `5 / 5 covered`
- 一次答案要素: `18 / 18 covered`
- 二次答案要素: `5 / 5 covered`
- 合計答案要素: `23 / 23 covered`
- 系列SPEC必須7項目: `7 / 7 covered`
- 固定教材必要説明8項目: `8 / 8 covered`
- 指定2可視化: `2 / 2 PASS`
- 3段階例題: `3 / 3 PASS`

## 境界QA

- L0系の未確認実極ピッチ・実推進周波数・実同期リアクタンス・実推力・コイル電流電圧の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外主題追加: `0件`
- Topic 28範囲の負荷角・出力角特性・本格推力解析の追加: `0件`
- Topic 21 H26二次 問1(4)の一般式変更: `0件`
- `48.0 / 48.1 N·m` 差は `π=3.14` 相当の過去問固有丸め差として注記維持
- exact blocker: `0件`

## 最終判定

`PASS / EXPLANATION_PDF_COMPLETE`

次工程: Topic 27 練習source。固定EXAM_ALIGNMENTと解説PDFを入力として、一次試験型＋二次記述式の練習問題を作成し、数値・論理を独立再計算する。