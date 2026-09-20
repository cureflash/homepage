# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜27は最終QAまで `PASS / completed`。完成数は `27 / 39`。

現在地は `topic_28_clean_blind_fresh_worker_blocked`。active topicは Topic 28 `L0系② 同期機のフェーザと推進力`。Topic 28はまだ `completed` ではない。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 28既存成果、直近コミットをreconcileした。

Topic 28は解説source remediation、解説PDF再同期、練習source/PDF、PowerPointまで完了済み。次工程は、公式解答を先に見ていないfresh workerがremediation後教材だけを使ってclean blind候補を新規固定する工程。

しかし本runは必須reconcileとして `STATUS.md` / `HANDOFF.md` を読んだ時点で、前回clean blindの公式照合結果とH29二次「機械・制御」問1(1)の公式側の式・記号対応を既に閲覧している。このため本run自身が新規候補を作成しても、`EXAM_ALIGNMENT_SPEC.md` の「公式解答や保存済み正答を先に見ずに独立再解答する」条件、および既存handoffの「公式解答を見ていないfresh worker」条件を満たしたとは認定できない。

推測でPASS扱いせず、exact blockerをGitHub正本へ記録して停止した。

blocker record:
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_fresh_worker_blocker.md`
- 判定: `BLOCKED / FRESH_WORKER_CONDITION_NOT_CERTIFIABLE`

今回、旧blind候補、固定EXAM_ALIGNMENT、教材成果物、Topic 21一般式は変更していない。

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
- source remediation commit: `28692c4d7c5b0bfee99f28d32be4eaf19f404a14`
- remediation QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_remediation_source_qa.md`
- explanation PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- PDF canonical blob SHA: `1eaa458d46a636ac4955d3475073e14071b4cd7f`
- PDF source blob SHA: `8f9562b6b56a22ec7b507a5dc5834fda73787515`
- PDF QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_pdf_qa.md`
- file size: `17,642 bytes`
- SHA-256: `45d7c54bda708a74bf760fa7c1ec470f4aedce67ab564eae52f7d99f09f23e9c`
- A4縦3頁、PDFium/Poppler `3 / 3 PASS`
- `pdftotext -layout`: `PASS`（`11,200 bytes`）、置換文字 `0件`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8`
- 指定3可視化: `3 / 3 PASS`
- exact blocker: `0件`

### 練習source / PDF

- practice source: `PASS / PRACTICE_SOURCE_COMPLETE`
- source blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- 一次8問＋二次4問、独立再計算 `12 / 12 PASS`、一次正答一意性 `8 / 8 PASS`
- practice PDF: `PASS / PRACTICE_PDF_COMPLETE`
- canonical PDF blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
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
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`

## clean blind結果

- 候補: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_candidates.md`
- 候補固定commit: `c3962aec781742bcbb17935327abcef9bb9d7317`
- candidate blob SHA: `6bf27ac5829d763f30549f775e9c4b710c790588`
- 公式照合QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_blind_compare_qa.md`
- 判定: `NEEDS_REVISION / 26_OF_27_PASS`
- 一次合計: `5 / 5 PASS`
- 二次合計: `21 / 22 PASS`
- 全答案要素: `26 / 27 PASS`
- 唯一の不一致: H29二次「機械・制御」問1 `(1)` の設問指定変数への適合
- 旧候補は公式照合後に編集しない

## source remediation

clean blindで露呈した最小範囲のみ補強済み。

- H29 `φ` = 本教材 `θ` = 力率角、`δ` = 負荷角を分離
- `V,I,X_s,φ` 指定時に必要な式を明記
- 頻出ミスへ記号取り違えを追加
- 固定過去問: `5問` のまま
- 固定答案要素: `27` のまま
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認L0系実車値の真値化: `0件`
- Topic 29先取り: `0件`
- remediation後PDF同期: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`

## fresh-worker blocker

- 判定: `BLOCKED / FRESH_WORKER_CONDITION_NOT_CERTIFIABLE`
- 本runは既存公式照合内容を閲覧済みでありfresh worker条件を満たせない
- この状態で新規blind候補を固定してPASS判定することは禁止
- 旧blind候補変更: `0件`
- fixed EXAM_ALIGNMENT変更: `0件`
- Topic 28 completed化: `しない`

解除条件:
- 公式解答・既存blind比較結果を事前に参照していない別fresh workerが、remediation後教材のみを使って別ファイルへ候補を固定する
- 候補固定後に公式照合を行う
- `27 / 27 PASS` を確認した後に最終QAへ進む

## 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・可視化の数値は教材用仮定値とする。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点としてのみ扱う。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

公式解答・既存blind比較結果を事前に参照していない別fresh workerで、remediation後教材だけを使ったclean blind候補を別ファイルに新規固定する。固定後に公式照合し、PASSなら最終QAへ進む。Topic 28はそれまで `completed` に数えない。
