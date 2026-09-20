# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `27 / 39`
- current_status: `topic_28_fresh_blind_handoff_ready`
- last_completed_topic: `27 L0系① リニア同期モータ`
- active_topic: `28 L0系② 同期機のフェーザと推進力`
- next_start: fresh workerが下記「clean blind読取順」を厳守し、remediation後教材だけで新規候補を固定する

## 完成済み

Topic 01〜27: `PASS / completed`。完成数 `27 / 39`。

Topic 27最終QA:
- `topics/27_l0_linear_synchronous_motor/27_l0_linear_synchronous_motor_final_qa.md`
- 固定過去問 `5 / 5 PASS`
- 合計答案要素 `23 / 23 PASS`
- SPEC必須7項目 `7 / 7 PASS`
- 指定2可視化 `2 / 2 PASS`
- exact blocker `0件`

## Topic 28 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion.md`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_exam_alignment_qa.md`
- 固定過去問: `5問`
- 一次: `1問・5答案要素`
- 二次: `4問・22答案要素`
- 合計: `27答案要素`
- 固定問題: R4一次「機械」問1、R7二次「機械・制御」問1、R5二次「機械・制御」問1、H29二次「機械・制御」問1、H27二次「機械・制御」問1
- 制作前独立再計算・公式照合: `27 / 27 PASS`
- SPEC必須8項目: フェーザ、内部誘導起電力、同期リアクタンス、負荷角、電力角特性、有効電力、無効電力、推進力
- SPEC指定可視化: `3件`（電力角特性、負荷角―出力、フェーザ図）
- exact blocker: `0件`

## Topic 28 成果物

### 解説source / PDF

- explanation source: `PASS / EXPLANATION_SOURCE_REMEDIATED`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- source blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- remediation QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_source_qa.md`
- explanation PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- PDF path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `1eaa458d46a636ac4955d3475073e14071b4cd7f`
- A4縦 `3 pages`
- PDFium / Poppler render: `3 / 3 PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8`
- 指定3可視化: `3 / 3 PASS`

### 練習source / PDF

- practice source: `PASS / PRACTICE_SOURCE_COMPLETE`
- source blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- 一次8問＋二次4問
- 独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- practice PDF: `PASS / PRACTICE_PDF_COMPLETE`
- canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
- A4縦 `5 pages`
- PDFium / Poppler render: `5 / 5 PASS`
- 固定答案要素接続: `27 / 27`

### PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images.pptx`
- canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
- canonical artifact commit: `8ca524e4836823d1f7df85dfabf5fc5ac00566bb`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images_qa.md`
- 16:9 `6 slides`
- GitHub Actions build/validation: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`

## Topic 28 clean blind履歴の扱い

旧candidate・公式比較QA・fresh-worker blockerは履歴として残すが、fresh candidate固定前には内容を開かない。

保護対象:
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_compare_qa.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_worker_blocker.md`

既存worker成果のreconcileは、fresh candidate固定前はcommit message・path・artifact存在確認までに限定する。旧candidateや比較結果の内容は参照しない。

## clean blind読取順

fresh workerは次の順を厳守する。

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`を読む。
2. 直近commitと既存worker成果はmetadata/pathでreconcileし、上記保護対象3ファイルの内容は開かない。
3. remediation後のTopic 28教材を読む。旧blind candidate・公式比較QAは読まない。
4. 固定5問を問題文だけから独立再解答し、新規candidateを別ファイルへ固定する。
5. candidate固定commit後に初めて公式解答・旧比較QAを開き、27答案要素を照合する。
6. `27 / 27 PASS` の場合のみ最終QAへ進む。FAILならcandidateは編集せず、教材側を最小remediationする。

本runは既に旧比較内容を閲覧済みのためcandidate固定は実施しない。必須pre-read文書から比較結果の詳細を除き、次のfresh workerが品質条件を満たせる状態へ正本を整理した。

## Topic 28 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・グラフの数値は教材用仮定値として扱う。Topic 29の浮上・案内系は先取りしない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 28はまだ `completed` と数えない。次のfresh workerが上記読取順で新規clean blind candidateを固定し、その後に公式照合する。旧candidateは修正しない。再照合PASS後に最終QAへ進む。
