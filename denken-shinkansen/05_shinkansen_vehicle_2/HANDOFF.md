# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_source_blind_remediation_complete`。active topic は Topic 23 `N700S SiC主変換装置`。

## reconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、Topic 23既存成果物、clean blind候補・公式照合記録をreconcile済み。

- clean blind候補は commit `17837d40774f12e8348e9b55f250d5573b35f901` で公式照合前に固定。
- 公式照合では固定23答案要素中 `21 / 23 PASS`。R2一次「機械」問2 `(2),(4)` の2点だけ不一致。
- 候補ファイルは後編集していない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既存診断どおり過去問固有丸め差。一般式は変更しない。

## Topic 23 固定EXAM_ALIGNMENT

変更禁止。固定5問・23答案要素は以下。

- R7 一次「機械」問4 `(1)〜(5)` — 5要素
- R4 一次「機械」問4 `(1)〜(5)` — 5要素
- R2 一次「機械」問2 `(1)〜(5)` — 5要素
- H24 一次「機械」問6 `(2),(3)` — 2要素
- H24 二次「機械・制御」問1 `(1)〜(6)` — 6要素
- 一次 `17`、二次 `6`、合計 `23`

SPEC固定8項目、指定3可視化、N700S実車値／教材仮定値境界も変更しない。

## Topic 23 clean blind初回

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

不一致A: R2一次問2 `(2)` は候補 `(1-D)V_dc`、公式 `D V_dc`。原因は問題図の電圧矢印極性とSオン／オフ状態の取り違え。

不一致B: R2一次問2 `(4)` は候補 `(1/6)V_dc I_dc T_2`、公式 `(1/2)V_dc I_dc T_2`。原因は公式図3の `p(t)=i_s v_s` 三角波へ、教材中の別波形モデル `VI t/6` を誤適用したこと。

H24二次6要素は未丸め候補と公式標準解答の3桁丸めが数学的に一致し、`6 / 6 PASS`。

## 今回のsource補強

判定: `PASS / SOURCE_REMEDIATION_COMPLETE`

修正したのは以下2ファイルだけ。

- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_explanation_source.md`
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter_practice_source.md`

反映内容:

1. チョッパの素子電圧は、問題図の矢印極性を正方向としてSオン／オフ状態表を作ってから平均する手順を追加。固定R2一次問2では `V=D V_dc` と明示。
2. スイッチングエネルギーは係数を暗記せず `p(t)=v(t)i(t)` を問題図どおり積分する手順を追加。固定R2一次問2では `p(t)` が三角波なので `W_off=(1/2)V_dc I_dc T_2` と明示。
3. 練習一次問4の `VI t_s/6` は、同問で与えた相補的直線ランプに限ることを明記。
4. 固定R2読図補強を独立確認し `2 / 2 PASS`。

維持事項:

- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- JR東海7%値・富士電機20%値の誤拡張: `0件`
- 初回clean blind候補の後編集: `0件`

Topic 23はまだ `completed` にしない。既存PDF/PPTXはsource補強前のため、同期要否QAと必要更新、その後の修正後clean blind再試験が残る。

## 次の安全な工程

既存の解説PDF・練習PDF・PowerPointについて、今回の2点を受講者が確認できるよう同期が必要かをQAする。必要な成果物だけ更新して表示QAし、その後に修正後clean blindを既存候補と別ファイルで実施する。固定EXAM_ALIGNMENT、SPEC、一般式、仮定値／実車値境界は変更しない。
