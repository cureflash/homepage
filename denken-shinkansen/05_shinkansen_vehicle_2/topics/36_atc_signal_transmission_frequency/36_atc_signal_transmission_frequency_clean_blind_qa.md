# Topic 36 clean blind QA — ATC② 信号伝送と周波数

更新日: 2026-09-21

判定: `PASS / COMPLETED`

## candidate lock

- candidate: `36_atc_signal_transmission_frequency_clean_blind_candidate.md`
- candidate blob SHA: `0117314c6f99beacdd5e203292da63619f04eaa2`
- candidate lock commit: `08e103113ee309a460588224a0daceae23fa6ba1`
- candidate固定前に公式解答PDF・Topic 36 answer-bearing QAを参照: `0件`
- candidate固定後修正: `0件`

## 公式照合

### R8一次「理論」問5
- candidate: `ヲ・ト・ロ・チ・ル`
- official: `ヲ・ト・ロ・チ・ル`
- result: `5 / 5 PASS`

### R3一次「機械」問8
- candidate: `チ・ト・カ・ヌ・ヘ`
- official: `チ・ト・カ・ヌ・ヘ`
- result: `5 / 5 PASS`

### H26一次「機械」問8
- candidate: `ヌ・イ・リ・チ・カ`
- official: `ヌ・イ・リ・チ・カ`
- result: `5 / 5 PASS`

### H25一次「機械」問8
- candidate: `ヨ・ル・ロ・カ・ト`
- official: `ヨ・ル・ロ・カ・ト`
- result: `5 / 5 PASS`

### H22一次「機械」問8
- candidate: `ホ・リ・ニ・ヌ・チ`
- official: `ホ・リ・ニ・ヌ・チ`
- result: `5 / 5 PASS`

一次合計: `25 / 25 PASS`。

## 教材単独性・範囲QA

- 固定公式過去問: `5 / 5 PASS`
- 一次答案要素: `25 / 25 PASS`
- 二次: `0問`。公式科目範囲上、本Topic中心の「電力システムに関する情報伝送及び処理」は一次「機械」の範囲であり、二次問題の件数合わせは行わない。
- SPEC固定8項目: `8 / 8 connected`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- 未確認実車値の真値化: `0件`
- Topic 37・38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 21固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として扱う。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 最終判定

Topic 36は、制作前EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、解説画像PowerPoint、完成後clean blind独立再解答まで全工程 `PASS`。完成数は `36 / 39` とする。

次工程はTopic 37について、最新main・上位仕様・系列SPEC・`STATUS.md` / `HANDOFF.md`・既存成果物をreconcileしてから、制作前EXAM_ALIGNMENTを開始する。
