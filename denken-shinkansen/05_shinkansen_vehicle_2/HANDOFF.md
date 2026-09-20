# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜27は最終QAまで `PASS / completed`。完成数は `27 / 39`。

現在地は `topic_28_fresh_blind_handoff_ready`。active topicは Topic 28 `L0系② 同期機のフェーザと推進力`。Topic 28はまだ `completed` ではない。

## reconcile済み

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 28既存成果、直近commitをreconcileした。

Topic 28は以下まで完了済み。
- 制作前EXAM_ALIGNMENT
- remediation後の解説source
- remediation後sourceと同期した解説PDF
- 練習source / 練習PDF
- PowerPoint

固定過去問は5問、合計27答案要素。固定EXAM_ALIGNMENTは変更しない。

既存worker成果との重複はなし。Topic 21 H26二次「機械・制御」問1(4)の過去問固有丸め差も既存診断を維持し、一般式は変更していない。

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
- 制作前独立再計算・公式照合: `27 / 27 PASS`
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

## Topic 28 成果物

### 解説source / PDF

- explanation source: `PASS / EXPLANATION_SOURCE_REMEDIATED`
- source blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- remediation QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_source_qa.md`
- explanation PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- PDF canonical blob SHA: `1eaa458d46a636ac4955d3475073e14071b4cd7f`
- A4縦3頁、PDFium/Poppler `3 / 3 PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8`
- 指定3可視化: `3 / 3 PASS`

### 練習source / PDF

- practice source: `PASS / PRACTICE_SOURCE_COMPLETE`
- source blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- 一次8問＋二次4問
- 独立再計算 `12 / 12 PASS`
- 一次正答一意性 `8 / 8 PASS`
- practice PDF: `PASS / PRACTICE_PDF_COMPLETE`
- canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
- A4縦5頁、PDFium/Poppler `5 / 5 PASS`
- 固定答案要素接続 `27 / 27`

### PowerPoint

- `PASS / POWERPOINT_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images.pptx`
- canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
- canonical artifact commit: `8ca524e4836823d1f7df85dfabf5fc5ac00566bb`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images_qa.md`
- 16:9 / `6 slides`
- GitHub Actions canonical build/validation: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`

## clean blind保護対象

fresh candidate固定前に次の3ファイルの内容を開かない。

- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_compare_qa.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_worker_blocker.md`

これらは履歴として保持する。fresh candidate固定前のreconcileはcommit message・path・artifact存在確認までに限定し、内容を読まない。

## fresh worker実行順

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、本`HANDOFF.md`を読む。
2. 直近commitを確認し、既存worker成果と重複しないことをmetadata/pathで確認する。
3. remediation後Topic 28教材を読む。上記保護対象は開かない。
4. 固定5問を問題文だけから独立再解答し、新規candidateを別ファイルへ固定・commitする。
5. candidate固定後に公式解答と旧比較QAを開き、27答案要素を照合する。
6. `27 / 27 PASS` の場合のみ最終QAへ進む。FAILならcandidateは変更せず、教材側だけを最小remediationする。

本runは既に旧比較内容を閲覧済みのため新規candidate固定を行わない。必須pre-readの `STATUS.md` / `HANDOFF.md` から旧比較結果の詳細を除去し、次のfresh workerが品質条件を満たせる状態へ整理した。

## 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・可視化の数値は教材用仮定値とする。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点としてのみ扱う。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

次のfresh workerが上記順序でTopic 28 clean blind候補を新規固定する。固定後に公式照合し、PASSなら最終QAへ進む。Topic 28はそれまで `completed` に数えない。
