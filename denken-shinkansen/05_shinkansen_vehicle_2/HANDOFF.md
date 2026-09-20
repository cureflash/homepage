# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜27は最終QAまで `PASS / completed`。完成数は `27 / 39`。

現在地は `topic_28_remediation_v2_pdf_complete_waiting_fresh_blind`。active topicは Topic 28 `L0系② 同期機のフェーザと推進力`。Topic 28はまだ `completed` ではない。

## reconcile済み

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 28既存成果、直近commitをreconcile済み。

Topic 28は以下まで完了済み。
- 制作前EXAM_ALIGNMENT
- 解説source remediation V2
- remediation V2 sourceと同期した解説PDF
- 解説PDF QA
- 練習source / 練習PDF
- PowerPoint

固定過去問は5問、合計27答案要素。固定EXAM_ALIGNMENTは変更しない。既存worker成果との重複作業は行っていない。

## 今回のclean blindとremediation

本runでfresh clean blind candidateを別ファイルへ固定し、candidate commit後に公式照合した。新たな教材不足が確認されたため、candidateは変更せず履歴として残し、教材側だけを最小remediationした。

remediation V2:
- source blob SHA: `ca52ffa9625184be7d5b00844aa411b713b52141`
- source QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_v2_source_qa.md`
- explanation PDF canonical blob SHA: `774df59978f3b4952fceb04fa596f0a3b191899e`
- PDF artifact commit: `20dea48c39b2c0dc236acce45c15252342e13459`
- PDF QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_pdf_qa.md`
- A4縦 `5 pages`
- build artifact PDFium / Poppler: `5 / 5 PASS`
- canonical PDF structure: `PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8`
- 指定3可視化: `3 / 3 PASS`

## Topic 28 固定EXAM_ALIGNMENT

固定問題:
1. R4 一次「機械」問1 `(1)〜(5)` — 5答案要素
2. R7 二次「機械・制御」問1 — 6答案要素
3. R5 二次「機械・制御」問1 — 6答案要素
4. H29 二次「機械・制御」問1 `(1),(2),(5)` — 6答案要素
5. H27 二次「機械・制御」問1 — 4答案要素

集計:
- 一次: `1問・5答案要素`
- 二次: `4問・22答案要素`
- 合計: `5問・27答案要素`
- 固定EXAM_ALIGNMENT変更: `0件`

SPEC必須8項目:
- フェーザ
- 内部誘導起電力
- 同期リアクタンス
- 負荷角
- 電力角特性
- 有効電力
- 無効電力
- 推進力

指定可視化:
1. 電力角特性
2. 負荷角―出力
3. フェーザ図

## clean blind保護対象

次のfresh candidate固定前に以下の内容を開かない。

- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_compare_qa.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_worker_blocker.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_compare_qa_20260920.md`

これらは履歴として保持する。candidate固定前のreconcileはcommit message・path・artifact存在確認までに限定する。

## fresh worker実行順

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、本`HANDOFF.md`を読む。
2. 直近commitを確認し、既存worker成果と重複しないことをmetadata/pathで確認する。
3. remediation V2後のTopic 28教材を読む。上記保護対象は開かない。
4. 固定5問は公式問題文だけを使って独立再解答し、新規candidateを別ファイルへ固定・commitする。
5. candidate固定後に公式標準解答と比較QAを開き、27答案要素を照合する。
6. `27 / 27 PASS` の場合のみ最終QAへ進む。FAILならcandidateは変更せず、教材側だけを最小remediationする。

## 固定境界

L0系実車接続は、公開一次資料で確認済みの推進原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・可視化の数値は教材用仮定値とする。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点としてのみ扱う。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

今回のfresh candidate・比較QA・公式標準解答を事前に参照していないfresh workerが、上記順序でTopic 28 clean blind candidateを新規固定する。固定後に公式照合し、`27 / 27 PASS` の場合のみ最終QAへ進む。Topic 28はそれまで `completed` に数えない。
