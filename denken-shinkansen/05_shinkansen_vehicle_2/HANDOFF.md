# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_remediation_sync_qa_complete`。active topic は Topic 23 `N700S SiC主変換装置`。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23 clean blind候補・公式照合、source補強commitをreconcile済み。

- 初回clean blind候補は commit `17837d40774f12e8348e9b55f250d5573b35f901` で公式照合前に固定。後編集しない
- 初回公式照合は固定23答案要素中 `21 / 23 PASS`。不一致はR2一次「機械」問2 `(2),(4)` のみ
- 解説source補強: commit `c778f6afcdc0132824bc4321099e1257b78c979c`
- 練習source補強: commit `49758b6587fa8ce4bd2b6a8e27b0936d6c430871`
- source補強進捗同期: commit `7b6cf706ca24ee55f81cb34f1ebcc4252cf2f753`
- 同期要否QA: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_remediation_sync_qa.md`
- Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既存診断どおり過去問固有丸め差。一般式 `P=Tω`、`ω=2πN/60` は変更しない

## Topic 23 固定EXAM_ALIGNMENT

変更禁止。固定5問・23答案要素:

- R7 一次「機械」問4 `(1)〜(5)` — 5要素
- R4 一次「機械」問4 `(1)〜(5)` — 5要素
- R2 一次「機械」問2 `(1)〜(5)` — 5要素
- H24 一次「機械」問6 `(2),(3)` — 2要素
- H24 二次「機械・制御」問1 `(1)〜(6)` — 6要素
- 一次 `17`、二次 `6`、合計 `23`

SPEC固定8項目、指定3可視化、N700S実車値／教材仮定値境界も変更しない。

## 初回clean blind不一致とsource補強

不一致A: R2一次問2 `(2)` は候補 `(1-D)V_dc`、公式 `D V_dc`。原因は問題図の電圧矢印極性とS ON/OFF状態の取り違え。

不一致B: R2一次問2 `(4)` は候補 `(1/6)V_dc I_dc T_2`、公式 `(1/2)V_dc I_dc T_2`。原因は固定図3の `p(t)=i_s v_s` 三角波へ、教材中の別波形モデル `VI t/6` を誤適用したこと。

補強済み:

1. 「矢印極性→状態表→平均値」の順を追加し、固定R2では `V=D V_dc` と明示
2. スイッチングエネルギーは `p(t)=v(t)i(t)` を問題図どおり積分し、固定R2図3では `W_off=(1/2)V_dc I_dc T_2` と明示
3. 練習一次問4の `VI t_s/6` は当該相補的直線ランプ条件だけに限定
4. 一般式 `E_sw=∫v(t)i(t)dt` は変更しない

## clean blind補強 同期要否QA

判定: `SYNC_REQUIRED / 3 artifacts`

- 解説PDF: `SYNC_REQUIRED`。補強後sourceの2読図手順を受講者向けPDFへ反映する
- 練習PDF: `SYNC_REQUIRED`。R2読図補強と `VI t_s/6` の条件限定を反映する
- PowerPoint: `SYNC_REQUIRED`。既存内容QAには固定R2向け2読図手順が明示されていないため、既存6枚構成の範囲で最小同期する

維持事項:

- 固定5問・23答案要素: `unchanged`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC固定8項目・指定3可視化変更: `0件`
- 新規問題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- 初回clean blind候補の後編集: `0件`
- 新たなexact blocker: `0件`

Topic 23はまだ `completed` にしない。

## 次の安全な工程

Topic 23解説PDFを補強後sourceから再生成し、表示・数式・固定23答案要素・clean blind補強2点をQAする。その後、練習PDF、PowerPointを順に必要最小限同期する。3成果物同期後に、初回候補とは別ファイルでclean blind再試験を行う。
