# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `28 / 39`
- current_status: `topic_29_practice_source_complete`
- last_completed_topic: `28 L0系② 同期機のフェーザと推進力`
- active_topic: `29 L0系③ 超電導磁気浮上の電磁力`
- next_start: Topic 29練習sourceを正本として練習PDFを生成し、表示・数式・単位・一次8問/二次4問・固定5問24答案要素との接続をQAする

## 完成済み

Topic 01〜28: `PASS / completed`。完成数 `28 / 39`。

Topic 29は `PRACTICE_SOURCE_COMPLETE`。テーマ自体はまだ `completed` ではない。

## Topic 28 最終判定

判定: `PASS / COMPLETED`

最終QA:
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_final_qa.md`

必須成果物:
- 制作前EXAM_ALIGNMENT: `PASS`
- 解説source remediation V2: `PASS / SOURCE_REMEDIATION_V2_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_V2_COMPLETE`
  - canonical blob SHA: `774df59978f3b4952fceb04fa596f0a3b191899e`
  - A4縦5頁、PDFium / Poppler `5 / 5 PASS`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
  - canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
  - A4縦5頁、PDFium / Poppler `5 / 5 PASS`
- PowerPoint: `PASS / POWERPOINT_COMPLETE`
  - canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
  - 16:9・6 slides

clean blind v2:
- candidate: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920_v2.md`
- lock commit: `4694d60f3399e55ddb54e9c3d18792249d7d5e5c`
- compare QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_compare_qa_20260920_v2.md`
- 一次: `5 / 5 PASS`
- 二次: `22 / 22 PASS`
- 合計: `27 / 27 PASS`
- candidate lock後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

前回fresh blind `22 / 27 PASS` で露呈したR4固有の端子電圧上昇とH29の `K_SCR → X_s[p.u.]` 中間知識は、candidateを変えず教材側だけをremediationし、v2 clean blindで解消確認済み。

## Topic 28 固定境界

L0系実車接続は公開一次資料で確認済みの推進原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・グラフの数値は教材用仮定値として扱う。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点としてのみ扱う。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加していない。

## Topic 29 固定EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

- path: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force.md`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_exam_alignment_qa.md`
- 固定過去問: `5問`
- 一次: `4問・20答案要素`
- 二次: `1問・4答案要素`
- 合計: `24答案要素`
- 制作前独立再計算・公式照合: `24 / 24 PASS`
- 公式照合不一致: `0件`
- exact blocker: `0件`

固定問題:
1. R8 一次「理論」問2 `(1)〜(5)` — 5答案要素
2. R7 一次「理論」問2 `(1)〜(5)` — 5答案要素
3. R4 一次「理論」問2 `(1)〜(5)` — 5答案要素
4. R2 一次「理論」問2 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問1 `(1)〜(4)` — 4答案要素

SPEC必須8項目:
- ファラデーの法則
- 相互誘導
- 誘導電流
- 磁気エネルギー
- 電磁力
- 超電導磁石
- 浮上力
- 案内力

指定3可視化:
- 磁束変化―誘導起電力
- 速度―誘導電流
- 速度―電磁力

L0系実車の未確認の超電導磁石磁界、コイル電流、抵抗・インダクタンス、幾何寸法、浮上力、案内力、速度しきい値は真値化しない。数値例・グラフの仮定値は「教材用仮定値」と明記する。Topic 30範囲の先取りは0件。

## Topic 29 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

- source: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation_source.md`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation_source_qa.md`
- 固定5問・24答案要素: `24 / 24 connected`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`
- 3段階例題: 基礎 / 本試験標準 / 複合 `PASS`
- 数式・単位・例題独立再計算: `PASS`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 29 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

- PDF: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation.pdf`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_explanation_pdf_qa.md`
- canonical blob SHA: `f656c1b95a542bf15bfc77ca2f799fda6886faa0`
- A4縦4頁
- PDFium / Poppler: `4 / 4 PASS`
- `pdftotext -layout`: `PASS`
- 固定5問・24答案要素: `24 / 24 covered`
- 一次: `20 / 20 covered`
- 二次: `4 / 4 covered`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 PASS`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 29 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

- source: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_practice_source.md`
- QA: `topics/29_l0_superconducting_magnetic_levitation_force/29_l0_superconducting_magnetic_levitation_force_practice_source_qa.md`
- 一次試験型: `8 / 8 PASS`、全問五肢択一・正答一意
- 二次試験型: `4 / 4 PASS`、途中式・前提・単位・理由を記載
- 数値・論理独立再計算: `12 / 12 PASS`
- 固定5問・24答案要素: `24 / 24 connected`
- 一次答案要素: `20 / 20 connected`
- 二次答案要素: `4 / 4 connected`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化の計算系: `3 / 3 aligned`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

次工程はTopic 29練習PDF生成＋PDF QA。教材一式完成前にclean blind独立再解答へ進まない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
