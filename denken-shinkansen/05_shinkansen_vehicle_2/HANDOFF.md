# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜28は最終QAまで `PASS / completed`。完成数は `28 / 39`。

現在地は `topic_29_waiting_exam_alignment`。active topicは Topic 29 `L0系③ 超電導磁気浮上の電磁力`。

## 今回完了したTopic 28

Topic 28 `L0系② 同期機のフェーザと推進力` は最終QAまで完了。

最終QA:
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_final_qa.md`
- 判定: `PASS / COMPLETED`

成果物:
- 制作前EXAM_ALIGNMENT: `PASS`
- 解説source remediation V2: `PASS`
  - blob SHA: `ca52ffa9625184be7d5b00844aa411b713b52141`
- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_V2_COMPLETE`
  - canonical blob SHA: `774df59978f3b4952fceb04fa596f0a3b191899e`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
  - blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
  - canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
- PowerPoint: `PASS / POWERPOINT_COMPLETE`
  - canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`

## Topic 28 clean blind v2

fresh candidateは、remediation V2前のcandidate/compare QAおよび公式標準解答を事前に開かず固定した。

- candidate: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920_v2.md`
- lock commit: `4694d60f3399e55ddb54e9c3d18792249d7d5e5c`
- official compare: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_compare_qa_20260920_v2.md`
- R4一次: `5 / 5 PASS`
- R7二次: `6 / 6 PASS`
- R5二次: `6 / 6 PASS`
- H29二次: `6 / 6 PASS`
- H27二次: `4 / 4 PASS`
- 合計: `27 / 27 PASS`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

前回 `22 / 27 PASS` のFAILは、R4固有条件の共通端子電圧上昇とH29の短絡比→同期リアクタンスの中間知識不足だった。candidateは変更せず教材だけを最小remediationし、v2 clean blindで両方の解消を確認した。

## Topic 28固定境界

公開一次資料で確認していないL0系実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化していない。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点に限定。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスのTopic 28先取りは0件。

## Topic 29 次の安全な工程

Topic 29 `L0系③ 超電導磁気浮上の電磁力` の制作前EXAM_ALIGNMENTから開始する。本文はまだ書かない。

SPEC主題: 浮上・案内系を電磁誘導と電磁エネルギーから解析する。

実行順:
1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、本`HANDOFF.md`、直近commit、既存車両二種worker成果をreconcileする。
2. 電気技術者試験センターの二種公式過去問を直近年度から調査する。
3. 一次・二次合わせ原則5問以上を選定する。二次対象論点が確認できる場合は最低1問含める。
4. 各問の年度・科目・問番号、要求知識、使用式、設問型、答案要素を固定する。
5. 電磁誘導、磁気回路、磁気エネルギー、電磁力等のどの説明が教材に必要かを過去問から逆算する。
6. 参考教材を最低2系統確認し、EXAM_ALIGNMENT sourceとQAをGitHubへ固定する。
7. 固定後のみ解説source制作へ進む。

L0系実車の浮上力・案内力・推進コイル/浮上案内コイルの未確認諸元を推測で真値化しない。公式過去問との対応が確定できない場合はexact blockerを記録して止める。

## Topic 21 H26二次 問1(4)

`48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
