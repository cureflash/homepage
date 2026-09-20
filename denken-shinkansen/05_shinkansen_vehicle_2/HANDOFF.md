# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜27は最終QAまで `PASS / completed`。完成数は `27 / 39`。

現在地は `topic_28_practice_pdf_complete`。active topicは Topic 28 `L0系② 同期機のフェーザと推進力`。次工程は解説画像PowerPoint生成＋QA。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 27最終成果、Topic 28既存成果、直近コミット、既存車両二種worker成果をreconcileした。

既存workerがTopic 28の制作前EXAM_ALIGNMENT、解説source/PDF、練習source/QAまで完了していたため、それらは再作成しなかった。固定EXAM_ALIGNMENTは一次1問・5答案要素＋二次4問・22答案要素＝5問・27答案要素で `27 / 27 PASS`。練習sourceは一次8問＋二次4問、独立再計算 `12 / 12 PASS`、一次正答一意性 `8 / 8 PASS`。

このrunでは次の安全な未完工程だった練習PDFを生成し、PDF QAを追加した。A4縦5頁、canonical blob SHA `2c24d79caa33af88db01324007c312c2551356ec`、SHA-256 `773bf45ecd5aa839dd9a8a92df62717333af62305b2fb76e1b92155281f3041d`。PDFium/Poppler `5 / 5 PASS`、`pdftotext -layout` PASS、置換文字0件、文字切れ・重なり・ページ外逸脱0件。

練習PDFは一次8問＋正答・完全解説 `8 / 8`、二次4問＋途中式・前提・単位・理由説明 `4 / 4`。固定5問・27答案要素 `27 / 27 connected`、SPEC必須8項目 `8 / 8 covered`、指定3可視化の計算接続 `3 / 3 aligned`。未確認L0系実車値の真値化、Topic 29先取り、固定EXAM_ALIGNMENT変更、Topic 21一般式変更はいずれも0件。exact blocker 0件。

## Topic 28 固定EXAM_ALIGNMENT

成果物:
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion.md`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_exam_alignment_qa.md`

固定問題:
1. R4 一次「機械」問1 `(1)〜(5)` — 5答案要素
2. R7 二次「機械・制御」問1 — 6答案要素
3. R5 二次「機械・制御」問1 — 6答案要素
4. H29 二次「機械・制御」問1 — 6答案要素
5. H27 二次「機械・制御」問1 — 4答案要素

集計:
- 一次: `1問・5答案要素`
- 二次: `4問・22答案要素`
- 合計: `5問・27答案要素`
- 制作前独立再計算・公式照合: `27 / 27 PASS`

固定する教材範囲:
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

## Topic 28 成果物現在地

### 解説source

- `PASS / EXPLANATION_SOURCE_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- blob SHA: `793d886094722b469d844cadded5d990bdb2cdf2`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source_qa.md`

### 解説PDF

- `PASS / EXPLANATION_PDF_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `a2bfff6ed03abc3d77a923b92fd0f275409719f5`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_pdf_qa.md`

### 練習source

- `PASS / PRACTICE_SOURCE_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice_source.md`
- blob SHA: `6ae62109d1efa99fe3913ecb258a58f151b6968a`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice_source_qa.md`
- 一次8問、二次4問、合計12問
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定答案要素接続: `27 / 27`

### 練習PDF

- `PASS / PRACTICE_PDF_COMPLETE`
- path: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice.pdf`
- canonical blob SHA: `2c24d79caa33af88db01324007c312c2551356ec`
- QA: `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_practice_pdf_qa.md`
- file size: `12,096 bytes`
- SHA-256: `773bf45ecd5aa839dd9a8a92df62717333af62305b2fb76e1b92155281f3041d`
- A4縦: `5 pages`
- PDFium / Poppler: `5 / 5 PASS`
- `pdftotext -layout`: `PASS`（`7,872 bytes`）
- 置換文字: `0件`
- 一次8問＋正答・完全解説: `8 / 8 PASS`
- 二次4問＋途中式・前提・単位・理由説明: `4 / 4 PASS`
- 固定答案要素接続: `27 / 27`
- SPEC必須8項目: `8 / 8 covered`
- 指定3可視化の計算接続: `3 / 3 aligned`

## 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・可視化の数値は教材用仮定値として明示する。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 28の解説画像PowerPointを生成し、固定5問・27答案要素、SPEC必須8項目、指定3可視化への接続をQAする。PowerPoint完了後に、完成後clean blind独立再解答候補固定→公式照合→最終QAの順で進む。