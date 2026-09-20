# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜27は最終QAまで `PASS / completed`。完成数は `27 / 39`。

現在地は `topic_28_powerpoint_complete`。active topicは Topic 28 `L0系② 同期機のフェーザと推進力`。次工程は完成後clean blind独立再解答候補固定。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 27最終成果、Topic 28既存成果、直近コミット、既存車両二種worker成果をreconcileした。

開始時点で既存workerはTopic 28の制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDFまで完了していたため再作成せず、未完だった解説画像PowerPoint生成＋QAのみ進めた。

Topic 26/27で確認済みのconnector経由binary upload truncateリスクを避け、GitHub Actions上でPowerPointを生成し、canonical artifact自体をZIP・python-pptx・geometry・LibreOffice・pdftotextで検証してmainへcommitした。Actions run `35483141385` は `success`。

## Topic 28 固定EXAM_ALIGNMENT

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

## Topic 28 成果物現在地

### 解説source

- `PASS / EXPLANATION_SOURCE_COMPLETE`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation_source.md`
- blob SHA: `793d886094722b469d844cadded5d990bdb2cdf2`

### 解説PDF

- `PASS / EXPLANATION_PDF_COMPLETE`
- `topics/28_l0_synchronous_machine_phasor_propulsion/28_l0_synchronous_machine_phasor_propulsion_explanation.pdf`
- canonical blob SHA: `a2bfff6ed03abc3d77a923b92fd0f275409719f5`

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
- file size: `241,446 bytes`
- SHA-256: `48c2ed316625d3df369f38b4c08e1885c60222b6915a36a8862368da6e782a21`
- 16:9 / `6 slides`
- GitHub Actions canonical build/validation: `PASS`
- ZIP integrity / python-pptx / geometry: `PASS`
- LibreOffice render: `6 / 6 PASS`
- `pdftotext -layout`: `PASS`（`10,882 bytes`）
- 置換文字: `0件`
- 固定過去問: `5 / 5 connected`
- 一次答案要素: `5 / 5 connected`
- 二次答案要素: `22 / 22 connected`
- 合計答案要素: `27 / 27 connected`
- SPEC必須8項目: `8 / 8 PASS`
- 指定3可視化: `3 / 3 PASS`
- exact blocker: `0件`

## 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・可視化の数値は教材用仮定値とする。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点としてのみ扱う。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 28の完成後clean blind独立再解答候補を、保存済み正答・公式解答を先に見ずに固定する。候補固定後は公式照合→最終QAの順で進む。PowerPoint完了だけではTopic 28を `completed` としない。
