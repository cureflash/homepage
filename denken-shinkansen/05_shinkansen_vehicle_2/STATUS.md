# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `27 / 39`
- current_status: `topic_28_remediation_v2_pdf_complete_waiting_fresh_blind`
- last_completed_topic: `27 L0系① リニア同期モータ`
- active_topic: `28 L0系② 同期機のフェーザと推進力`
- next_start: fresh workerが保護対象を開かず、remediation V2教材だけで新規clean blind candidateを固定する

## 完成済み

Topic 01〜27: `PASS / completed`。完成数 `27 / 39`。

Topic 28はまだ `completed` ではない。

## Topic 28 固定EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion.md`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_exam_alignment_qa.md`
- 固定過去問: `5問`
- 一次: `1問・5答案要素`
- 二次: `4問・22答案要素`
- 合計: `27答案要素`
- SPEC必須8項目: フェーザ、内部誘導起電力、同期リアクタンス、負荷角、電力角特性、有効電力、無効電力、推進力
- 指定3可視化: 電力角特性、負荷角―出力、フェーザ図
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 28 成果物

### 解説source / PDF

- explanation source: `PASS / EXPLANATION_SOURCE_REMEDIATED_V2`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- source blob SHA: `ca52ffa9625184be7d5b00844aa411b713b52141`
- remediation V2 QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_v2_source_qa.md`
- explanation PDF: `PASS / EXPLANATION_PDF_RESYNC_V2_COMPLETE`
- PDF path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `774df59978f3b4952fceb04fa596f0a3b191899e`
- canonical artifact commit: `20dea48c39b2c0dc236acce45c15252342e13459`
- A4縦 `5 pages`
- build artifact PDFium / Poppler: `5 / 5 PASS`
- canonical PDF構造: `PASS`
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
- PDFium / Poppler: `5 / 5 PASS`

### PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images.pptx`
- canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
- canonical artifact commit: `8ca524e4836823d1f7df85dfabf5fc5ac00566bb`
- 16:9 `6 slides`
- GitHub Actions build/validation: `PASS`
- LibreOffice render: `6 / 6 PASS`

## Topic 28 clean blind履歴

本runでfresh clean blind候補を新規固定し、candidate固定後に公式照合した。照合で新たな教材不足が判明したため、candidateは変更せず履歴として保持し、教材sourceと解説PDFだけをremediation V2へ更新した。

次回のfresh workerがcandidateを固定する前に、以下の内容を開かない。

- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_compare_qa.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_worker_blocker.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_blind_compare_qa_20260920.md`

既存worker成果のreconcileは、candidate固定前はcommit message・path・artifact存在確認までに限定する。

## clean blind読取順

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`を読む。
2. 直近commitと既存worker成果をmetadata/pathでreconcileし、上記保護対象の内容を開かない。
3. remediation V2後のTopic 28教材を読む。
4. 固定5問は公式問題文だけを使って独立再解答し、新規candidateを別ファイルへ固定・commitする。
5. candidate固定後に初めて公式標準解答・保護対象の比較QAを開き、27答案要素を照合する。
6. `27 / 27 PASS` の場合のみ最終QAへ進む。FAILならcandidateは編集せず、教材側だけを最小remediationする。

## Topic 28 固定境界

L0系実車接続は、公開一次資料で確認済みの推進原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・グラフの数値は教材用仮定値として扱う。Topic 29の浮上・案内系は先取りしない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 28はまだ `completed` と数えない。今回のcandidate・比較QA・公式標準解答を事前に参照していないfresh workerが、上記読取順でremediation V2教材から新規clean blind candidateを固定し、その後に公式照合する。再照合 `27 / 27 PASS` 後のみ最終QAへ進む。
