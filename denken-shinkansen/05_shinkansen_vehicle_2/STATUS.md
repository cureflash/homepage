# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `27 / 39`
- current_status: `topic_28_clean_blind_fresh_worker_blocked`
- last_completed_topic: `27 L0系① リニア同期モータ`
- active_topic: `28 L0系② 同期機のフェーザと推進力`
- next_start: 公式解答・既存blind比較結果を事前に参照していない別fresh workerで、remediation後教材だけを使ったclean blind候補を別ファイルへ新規固定する

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

## Topic 28 解説source

- 判定: `PASS / EXPLANATION_SOURCE_REMEDIATED`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- 初回QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source_qa.md`
- remediation QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_source_qa.md`
- 固定過去問: `5 / 5 mapped`
- 合計答案要素: `27 / 27 covered`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 defined`
- H29 `φ / θ / δ` 記号対応: `補強済み`
- 未確認L0系実車値の真値化: `0件`
- Topic 29先取り: `0件`
- fixed EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 28 解説PDF

- 判定: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `1eaa458d46a636ac4955d3475073e14071b4cd7f`
- source blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_pdf_qa.md`
- file size: `17,642 bytes`
- SHA-256: `45d7c54bda708a74bf760fa7c1ec470f4aedce67ab564eae52f7d99f09f23e9c`
- A4縦: `3 pages`
- PDFium / Poppler render: `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（`11,200 bytes`）
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 covered`
- 一次答案要素: `5 / 5 covered`
- 二次答案要素: `22 / 22 covered`
- 合計答案要素: `27 / 27 covered`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 PASS`
- H29 `φ` = 本教材 `θ` = 力率角、`δ` = 負荷角: `PDF同期 PASS`
- H29指定変数式 `E=sqrt(V^2+2VX_sI sinφ+(X_sI)^2)` と電圧変動率式: `PDF同期 PASS`
- 旧clean blind候補の編集: `0件`
- exact blocker: `0件`

## Topic 28 練習source

- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice_source.md`
- blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice_source_qa.md`
- 一次試験型: `8問`
- 二次試験型: `4問`
- 合計: `12問`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `5 / 5 connected`
- 二次答案要素: `22 / 22 connected`
- 合計答案要素: `27 / 27 connected`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`
- exact blocker: `0件`

## Topic 28 練習PDF

- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice.pdf`
- canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice_pdf_qa.md`
- file size: `12,096 bytes`
- SHA-256: `773bf45ecd5aa839dd9a8a92df62717333af62305b2fb76e1b92155281f3041d`
- A4縦: `5 pages`
- PDFium / Poppler render: `5 / 5 PASS`
- `pdftotext -layout`: `PASS`（`7,872 bytes`）
- 置換文字 `�`: `0件`
- 一次8問＋正答・完全解説: `8 / 8 PASS`
- 二次4問＋途中式・前提・単位・理由説明: `4 / 4 PASS`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `5 / 5 connected`
- 二次答案要素: `22 / 22 connected`
- 合計答案要素: `27 / 27 connected`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`
- exact blocker: `0件`

## Topic 28 PowerPoint

- 判定: `PASS / POWERPOINT_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images.pptx`
- canonical blob SHA: `b677f457c8e8f6aebcfebeeecd0b68ff7736883b`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_images_qa.md`
- canonical artifact commit: `8ca524e4836823d1f7df85dfabf5fc5ac00566bb`
- GitHub Actions build/validation: `PASS`
- file size: `241,446 bytes`
- SHA-256: `48c2ed316625d3df369f38b4c08e1885c60222b6915a36a8862368da6e782a21`
- 16:9: `6 slides`
- PPTX ZIP / python-pptx / geometry: `PASS`
- LibreOffice PDF変換: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（`10,882 bytes`）
- 置換文字 `�`: `0件`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `5 / 5 connected`
- 二次答案要素: `22 / 22 connected`
- 合計答案要素: `27 / 27 connected`
- SPEC必須8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 29先取り: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 28 clean blind公式照合

- 候補: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- 候補固定commit: `c3962aec781742bcbb17935327abcef9bb9d7317`
- 候補blob SHA: `6bf27ac5829d763f30549f775e9c4b710c790588`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_compare_qa.md`
- 判定: `NEEDS_REVISION / 26_OF_27_PASS`
- 一次: `5 / 5 PASS`
- 二次: `21 / 22 PASS`
- 合計: `26 / 27 PASS`
- 不一致: H29二次「機械・制御」問1(1)のみ
- 内容: 問題は `V,I,X_s,φ` で電圧変動率を表すことを要求するが、固定候補が力率角 `φ` ではなく負荷角 `δ` を用いた別表現で回答した
- 原因: 本教材の力率角記号 `θ` とH29本試験の `φ` の対応をblind再解答で取り違え、`δ` を選択した
- 固定候補の公式照合後編集: `0件`
- fixed EXAM_ALIGNMENT変更: `0件`

## Topic 28 source remediation

- 判定: `PASS / SOURCE_REMEDIATION_COMPLETE`
- source commit: `28692c4d7c5b0bfee99f28d32be4eaf19f404a14`
- QA commit: `2e24f142239ea932c6fb28631b9ad35aec2e76d1`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_source_qa.md`
- 補強: H29 `φ` = 本教材 `θ` = 力率角、`δ` = 負荷角を分離
- 指定変数式: `E=sqrt(V^2+2VX_sI sinφ+(X_sI)^2)` と電圧変動率式を明記
- 式整合: 既存発電機フェーザ式から独立展開 `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 新規仕様追加: `0件`
- PDF同期: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`

## Topic 28 fresh-worker blocker

- 判定: `BLOCKED / FRESH_WORKER_CONDITION_NOT_CERTIFIABLE`
- blocker: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_worker_blocker.md`
- exact reason: 本runは必須reconcileで `STATUS.md` / `HANDOFF.md` を読んだ時点で前回blindの公式照合内容を閲覧済みのため、本run自身を「公式解答を先に見ていないfresh worker」と認定できない
- 旧blind候補変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 28 completed化: `しない`

## Topic 28 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・グラフの数値は教材用仮定値として扱う。Topic 29の浮上・案内系は先取りしない。

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 28はまだ `completed` と数えない。公式解答・既存blind比較結果を事前に参照していない別fresh workerが、remediation後教材だけを使ってclean blind候補を別ファイルへ新規固定し、固定5問・27答案要素を公式再照合する。今回固定した旧候補は修正しない。再照合PASS後に最終QAへ進む。
