# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `28 / 39`
- current_status: `topic_29_waiting_exam_alignment`
- last_completed_topic: `28 L0系② 同期機のフェーザと推進力`
- active_topic: `29 L0系③ 超電導磁気浮上の電磁力`
- next_start: Topic 29の制作前EXAM_ALIGNMENT。公式過去問を一次・二次合わせ原則5問以上調査し、固定問題・答案要素・教材必要説明を本文制作前に確定する

## 完成済み

Topic 01〜28: `PASS / completed`。完成数 `28 / 39`。

Topic 29は未着手。本文制作前のEXAM_ALIGNMENTから開始する。

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

## Topic 29 開始条件

主題: `L0系③ 超電導磁気浮上の電磁力`

SPEC上の主題は、浮上・案内系を電磁誘導と電磁エネルギーから解析すること。

次工程では本文を書かず、先に `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` に従って公式過去問を調査する。

- 二種一次・二次を合わせ原則5問以上
- 二次対象論点が確認できる場合は最低1問含める
- 年度・科目・問番号・要求知識・使用式・設問型を固定
- 教材で必要な説明を逆算
- 固定後に解説source制作へ進む
- 未確認のL0系浮上力・案内力・コイル諸元等を実車真値として置かない
- 確定不能事項は推測せずexact blockerを記録する

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
