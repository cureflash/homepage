# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜27は最終QAまで `PASS / completed`。完成数は `27 / 39`。

現在地は `topic_28_blind_reanswer_needs_revision`。active topicは Topic 28 `L0系② 同期機のフェーザと推進力`。Topic 28はまだ `completed` ではない。

## 今回のreconcileと進行

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 28既存成果、直近コミット、既存車両二種worker成果をreconcileした。

開始時点でTopic 28は制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointまで完了していたため、それらを再作成せず完成後clean blind工程へ進んだ。

公式解答を開く前に固定5問・27答案要素の候補を新規ファイルへ固定し、commit `c3962aec781742bcbb17935327abcef9bb9d7317` とした。候補固定後に公式標準解答と照合し、候補ファイルは変更していない。

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

- explanation source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- source blob SHA: `793d886094722b469d844cadded5d990bdb2cdf2`
- explanation PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- PDF canonical blob SHA: `a2bfff6ed03abc3d77a923b92fd0f275409719f5`

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
- R4一次: `5 / 5 PASS`
- R7二次: `6 / 6 PASS`
- R5二次: `6 / 6 PASS`
- H29二次: `5 / 6 PASS`
- H27二次: `4 / 4 PASS`
- 一次合計: `5 / 5 PASS`
- 二次合計: `21 / 22 PASS`
- 全答案要素: `26 / 27 PASS`

### 唯一の不一致

H29二次「機械・制御」問1 `(1)`。

本試験は電圧変動率 `ε` を `V, I, X_s, φ` で表すよう要求する。公式標準解答は

`E=sqrt(V^2+2VX_sI sinφ+(X_sI)^2)`

から

`ε={sqrt(V^2+2VX_sI sinφ+(X_sI)^2)-V}/V×100 [%]`

とする。

固定候補は、力率角 `φ` ではなく負荷角 `δ` を用いる別表現を回答した。式自体の一般的フェーザ幾何ではなく、設問指定変数への適合でFAIL。

原因は記号対応。本教材では力率角を `θ` と置く一方、H29本試験では同じ力率角を `φ` と置く。blind再解答時に `φ` と負荷角 `δ` を取り違えた。

必要な最小補強:
- H29本試験の `φ` = 本教材の力率角 `θ`
- `φ/θ` と負荷角 `δ` は別物
- `V,I,X_s,φ` 指定なら発電機遅れ力率式から `ε` を表す

この補強後、解説PDFへ同期し、公式解答を見ていないfresh workerでclean blindを新規固定する。今回固定した候補は修正しない。

## 固定境界

L0系実車接続は、公開一次資料で確認済みの「ガイドウェイ推進コイルへ三相交流を供給し、移動磁界と車上超電導磁石との吸引・反発で推進する」という原理まで。公開一次資料で確認していない実際の `X_s`、`E`、`δ`、有効電力、無効電力、推力、推進効率を真値化しない。例題・可視化の数値は教材用仮定値とする。

`δ=90°` は円筒形・定常・平衡三相・電機子抵抗/損失無視の基本モデルにおける静的最大点としてのみ扱う。電気有効電力を効率条件なしに実車推進力へ直接等置しない。

Topic 29の浮上・案内系、突極機二反作用、d-q軸、過渡・次過渡リアクタンスはTopic 28へ追加しない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

H29 `(1)` の `φ / θ / δ` 記号対応を教材へ最小補強し、解説PDFを同期する。その後は公式解答を見ていないfresh workerでclean blind候補を別ファイルに新規固定し、公式照合→最終QAへ進む。Topic 28はそれまで `completed` に数えない。
