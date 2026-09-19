# Topic 23 N700S SiC主変換装置 — clean blind補強 同期要否QA

更新日: 2026-09-19

判定: `SYNC_REQUIRED / 3 artifacts`

## reconcile

latest main、`STATUS.md` / `HANDOFF.md`、直近workerのsource補強commit、既存PDF/PPTX QAをreconcileした。

- 解説source補強: commit `c778f6afcdc0132824bc4321099e1257b78c979c`
- 練習source補強: commit `49758b6587fa8ce4bd2b6a8e27b0936d6c430871`
- 進捗同期: commit `7b6cf706ca24ee55f81cb34f1ebcc4252cf2f753`
- 初回clean blind候補は commit `17837d40774f12e8348e9b55f250d5573b35f901` のまま変更しない

## clean blindで補強した2点

1. 固定R2一次「機械」問2 `(2)`：図の電圧矢印極性→S ON/OFF状態表→時間平均の順に読み、固定図では `V=D V_dc` とする。
2. 固定R2一次「機械」問2 `(4)`：係数を暗記せず `p(t)=v(t)i(t)` を問題図どおり積分し、固定図3では `p(t)` 自体が三角波なので `W_off=(1/2)V_dc I_dc T_2` とする。教材例の `VI t_s/6` は相補的直線ランプ条件だけに限定する。

一般式 `E_sw=∫v(t)i(t)dt` は変更しない。

## 同期要否

### 解説PDF

`SYNC_REQUIRED`。

既存PDF QAはsource補強前の内容で `17 / 17 covered` としていたが、初回clean blindで上記2点の説明不足が実証された。補強後sourceの「矢印極性→状態表→平均値」と、固定R2図3の三角波 `1/2` 判定を受講者向けPDFへ反映する必要がある。

### 練習PDF

`SYNC_REQUIRED`。

既存PDFは練習source補強前に生成されている。補強後sourceではR2 `(2)` の対応を読図補強へ修正し、一次問4の `VI t_s/6` を当該仮定波形限定と明示しているため、練習PDFも再生成が必要。

### PowerPoint

`SYNC_REQUIRED`。

既存PowerPoint QAの内容一覧には一般式 `P_sw=f_s(E_on+E_off)` とH24二次向け平均電圧式はあるが、今回必要になった固定R2向けの「矢印極性→状態表→平均値」手順と、`1/2` / `1/6` を波形から区別する読図手順は明示されていない。clean blind品質ゲートを満たすため、この2点を既存6枚構成の範囲で最小同期する。

## 品質ゲート

- 固定5問・23答案要素: `unchanged`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC固定8項目変更: `0件`
- SPEC指定3可視化変更: `0件`
- 新規問題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- Topic 21 H26二次 問1(4)の一般式変更: `0件`
- 新たなexact blocker: `0件`

## 次工程

解説PDFを補強後sourceから再生成し、表示・数式・固定23答案要素・2補強点をQAする。その後、練習PDF、PowerPointを順に必要最小限同期する。3成果物同期後に、初回候補とは別ファイルでclean blind再試験を行う。
