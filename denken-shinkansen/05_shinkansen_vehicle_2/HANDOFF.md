# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_remediated_blind_official_check_pass`。active topic は Topic 23 `N700S SiC主変換装置`。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果、Topic 23初回clean blind、source補強、成果物同期QA、解説PDF再同期、練習PDF再同期、PowerPoint再同期、修正後clean blind候補固定・候補固定QA、修正後公式照合をreconcile済み。

- 初回clean blind候補は commit `17837d40774f12e8348e9b55f250d5573b35f901` で公式照合前に固定。後編集しない
- 初回公式照合は固定23答案要素中 `21 / 23 PASS`。不一致はR2一次「機械」問2 `(2),(4)` のみ
- 解説source補強: commit `c778f6afcdc0132824bc4321099e1257b78c979c`
- 練習source補強: commit `49758b6587fa8ce4bd2b6a8e27b0936d6c430871`
- 成果物同期QA正本: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_post_blind_artifact_sync_qa.md`
- 解説PDF・練習PDFは補強後sourceから再生成・QA済み
- PowerPointは既存6枚構成の範囲で再生成し、R2読図補強2点を同期・表示QA済み
- 修正後clean blind候補は `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_candidates_remediated_clean.md` として commit `5d28e38e9151edc9d2ca3e309783aea2e6b9272f` で固定
- 修正後候補固定QA: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_remediated_lock_qa.md` = `PASS / CANDIDATES_LOCKED`
- 修正後公式照合: `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_remediated_official_check.md` = `PASS / 23_OF_23`
- Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は過去問固有丸め差。一般式 `P=Tω`、`ω=2πN/60` は変更しない

## Topic 23 固定EXAM_ALIGNMENT

変更禁止。固定5問・23答案要素:

- R7 一次「機械」問4 `(1)〜(5)` — 5要素
- R4 一次「機械」問4 `(1)〜(5)` — 5要素
- R2 一次「機械」問2 `(1)〜(5)` — 5要素
- H24 一次「機械」問6 `(2),(3)` — 2要素
- H24 二次「機械・制御」問1 `(1)〜(6)` — 6要素
- 一次 `17`、二次 `6`、合計 `23`

SPEC固定8項目、指定3可視化、N700S実車値／教材仮定値境界も変更しない。

## 初回clean blind不一致と補強

不一致A: R2一次問2 `(2)` は候補 `(1-D)V_dc`、公式 `D V_dc`。原因は問題図の電圧矢印極性とS ON/OFF状態の取り違え。

不一致B: R2一次問2 `(4)` は候補 `(1/6)V_dc I_dc T_2`、公式 `(1/2)V_dc I_dc T_2`。原因は固定図3の `p(t)=i_s v_s` 三角波へ、教材中の別波形モデル `VI t/6` を誤適用したこと。

補強済み:

1. 「矢印極性→状態表→平均値」の順を追加し、固定R2では `V=D V_dc`
2. 固定R2図3では `W_off=(1/2)V_dc I_dc T_2`
3. `VI t_s/6` は相補的直線ランプ条件だけに限定
4. 一般式 `E_sw=∫v(t)i(t)dt` は変更しない

修正後clean blindでは、R2一次問2 `(2),(4)` を含む固定23答案要素が公式解答・標準解答と `23 / 23 PASS`。

## 成果物同期状態

- 解説PDF: `PASS / RESYNCED`
- 練習PDF: `PASS / RESYNCED`
- PowerPoint: `PASS / RESYNCED`
  - `23_n700s_sic_main_converter_images.pptx`
  - `23_n700s_sic_main_converter_powerpoint_qa.md`
  - 16:9 `6 slides`
  - SHA-256 `dc5babab362325cb00ca462660cd7f9b6c1cd1f6ef6f1e36c62ffe55395ae70c`
  - clean blind補強2点 `2 / 2 PASS`
  - 固定5問・23答案要素 `23 / 23 covered`
  - SPEC固定8項目 `8 / 8 covered`
  - SPEC指定3可視化 `3 / 3 PASS`
  - LibreOffice / pdftoppm `6 / 6 PASS`
  - geometry overflow `0`

## 修正後clean blind公式照合

判定: `PASS / 23_OF_23`

- R7一次 `5 / 5 PASS`
- R4一次 `5 / 5 PASS`
- R2一次 `5 / 5 PASS`
- H24一次 `2 / 2 PASS`
- H24二次 `6 / 6 PASS`
- 一次 `17 / 17 PASS`
- 二次 `6 / 6 PASS`
- 合計 `23 / 23 PASS`
- 修正後候補固定後の後編集: `0件`

維持事項:

- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- 新規問題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- 初回clean blind候補の後編集: `0件`
- 修正後clean blind候補の後編集: `0件`
- 新たなexact blocker: `0件`

Topic 23はまだ `completed` にしない。

## 次の安全な工程

Topic 23の最終QAを実施する。固定5問・23答案要素の `23 / 23 PASS`、解説PDF・練習PDF・PowerPoint同期状態、SPEC固定8項目・指定3可視化、固定EXAM_ALIGNMENT、一般式、N700S実車値／教材仮定値境界、STATUS/HANDOFFを再確認する。全項目PASSの場合のみTopic 23を `completed` とし、完成数を `23 / 39` へ進める。
