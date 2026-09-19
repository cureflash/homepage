# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_blind_reanswer_needs_revision`。active topic は Topic 23 `N700S SiC主変換装置`。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種worker成果をreconcile済み。

- Topic 23 練習PDF＋QAは別workerの既存成果を再生成せず採用。
- Topic 23 解説画像PowerPoint＋QAも既存完成成果をreconcile。
- clean blind候補は commit `17837d40774f12e8348e9b55f250d5573b35f901` で公式照合前に固定。
- その後の公式照合は commit `beadcbf4c1b11b81d0425303d559adbe181ed21b` で記録済み。候補ファイルは変更していない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既存診断どおり公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## Topic 23 固定EXAM_ALIGNMENT

変更禁止。固定5問・23答案要素は以下。

- R7 一次「機械」問4 `(1)〜(5)` — 5要素
- R4 一次「機械」問4 `(1)〜(5)` — 5要素
- R2 一次「機械」問2 `(1)〜(5)` — 5要素
- H24 一次「機械」問6 `(2),(3)` — 2要素
- H24 二次「機械・制御」問1 `(1)〜(6)` — 6要素
- 一次 `17`、二次 `6`、合計 `23`

SPEC固定8項目、指定3可視化、N700S実車値／教材仮定値境界も変更しない。

## Topic 23 既存成果物

完成・QA済み:

- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_source.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation.pdf`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_pdf_qa.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice_source.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice.pdf`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice_pdf_qa.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_images.pptx`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_powerpoint_qa.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_candidates_clean.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_blind_reanswer_official_check.md`

既存PDF/PPTXの表示QAはPASS。JR東海のN700A比7%をSiC単独効果へ読み替えず、富士電機の20%軽量化をN700S車両全体の重量低減率へ誤拡張しない。未確認のN700S実車 `V_on / R_on / E_on / E_off / f_s / R_th / T_j` は真値化しない。

## clean blind公式照合

判定: `FAIL / NEEDS_REVISION`

- R7一次 問4: `5 / 5 PASS`
- R4一次 問4: `5 / 5 PASS`
- R2一次 問2: `3 / 5 PASS`
- H24一次 問6 `(2),(3)`: `2 / 2 PASS`
- H24二次 問1: `6 / 6 PASS`
- 一次合計: `15 / 17 PASS`
- 二次合計: `6 / 6 PASS`
- 総合: `21 / 23 PASS`
- 候補固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 新たなexact blocker: `0件`

不一致はR2一次「機械」問2の2要素だけ。

### 不一致A — `(2)`

候補 `(1-D)V_dc` `(ロ)`、公式 `D V_dc` `(ト)`。

原因はダイオード電圧の状態読み違い。公式図ではSオン中に `v=V_dc`、Sオフ還流中に `v=0` なので平均は `V=D V_dc`。教材には通流率式はあるが、この固定過去問に必要な「図の矢印極性→各スイッチ状態→平均値」の確認手順が不足していた。

### 不一致B — `(4)`

候補 `(1/6)V_dc I_dc T_2` `(ヘ)`、公式 `(1/2)V_dc I_dc T_2` `(リ)`。

固定問題図3では `i_s v_s` 自体が底辺 `T_2`、高さ `V_dc I_dc` の三角波。したがって `W_off=(1/2)V_dc I_dc T_2`。候補は教材内の別波形モデルにある `1/6` を誤適用した。一般式 `E_sw=∫v(t)i(t)dt` は正しく、変更しない。

H24二次6要素は未丸め候補と公式標準解答の丸め値が数学的に一致するため `6 / 6 PASS`。

## 次の安全な工程

固定問題・一般式・SPECを変更せず、Topic 23教材側へ次の2点だけを最小修正する。

1. 降圧チョッパは問題図の矢印極性とSオン／オフ状態を表に落としてから平均化し、固定R2問2では `V=D V_dc` となることを明示する。
2. スイッチングエネルギーは係数を暗記せず、問題で与えられた `p(t)=v(t)i(t)` 波形をそのまま積分する。固定R2問2の三角波では `W_off=(1/2)V_dc I_dc T_2` とする。

まず `23_n700s_sic_main_converter_explanation_source.md` と `23_n700s_sic_main_converter_practice_source.md` だけを修正し、その後に解説PDF・練習PDF・PowerPointの同期要否をQAする。修正後のclean blindは既存候補を上書きせず、別ファイルで再実施する。
