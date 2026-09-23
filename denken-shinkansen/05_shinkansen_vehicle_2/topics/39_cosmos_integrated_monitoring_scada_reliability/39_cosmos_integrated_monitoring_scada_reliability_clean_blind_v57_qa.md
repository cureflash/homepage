# Topic 39 clean blind v57 QA

更新日: 2026-09-23

## 判定

- candidate commit: `6bb5177557cb390ea6a7c9edffd982b539a21968`
- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `2 / 5 FAIL`
- 合計: `22 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- R2二次固定5群境界: `PASS`
- gate: `FAIL`

candidate固定前はquestion-only intakeと公式「問題」PDFだけで再解答し、公式標準解答・教材本文・既存clean-blind QAのanswer-bearing部分はcandidate commit後に照合した。

## 一次 20答案要素

### R4一次「機械」問3

candidate `ハ / ニ / チ / カ / イ`。公式標準解答と全一致。`5 / 5 PASS`。

### R3一次「機械」問8

candidate `チ / ト / カ / ヌ / ヘ`。公式標準解答と全一致。`5 / 5 PASS`。

### H30一次「機械」問8

candidate `ル / ヨ / ヌ / チ / イ`。公式標準解答と全一致。`5 / 5 PASS`。

### H25一次「機械」問8

candidate `ヨ / ル / ロ / カ / ト`。公式標準解答と全一致。`5 / 5 PASS`。

## 二次 5答案要素

公式標準解答: `https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf`

### 群1: 小問(1)前半

`FAIL`。candidateは「高電圧・大電流を計器・保護継電器で扱える低い電圧・電流へ変成する」役割とVT(PT)・CTを答案化したが、公式標準解答が要求する「保護リレーや計器を高圧回路から絶縁する」役割を明示していない。`solver omission`。

### 群2: 小問(1)後半

`PASS`。`ε = (K_n - K) / K × 100 [%]` は公式標準解答と一致。

### 群3: 小問(2)

`FAIL`。candidateは保護区間内での正動作と平常時・区間外での誤動作防止を答案化したが、公式標準解答が挙げる点検・自動監視、故障率が低いこと、冗長化を答案化していない。`solver omission`。

### 群4: 小問(3)前半

`FAIL`。公式標準解答は定格遮断時間として`5サイクル及び3サイクル`を要求するが、candidateは`3サイクル`のみ。事故除去指令を受ける箇所についてはcandidate内で`引外しコイル`への入力を明示しており、この名称要件は満たす。`solver omission`。

### 群5: 小問(3)後半

`PASS`。投入指令中でも引外しを優先して開路し、事故回路への投入・開放の繰返しを防ぐ機能・目的を説明しており、公式標準解答の要求を満たす。

## 教材導出ゲート

`25 / 25 PASS`。

現行教材は、一次20要素に加え、R2二次の①高圧回路からの絶縁、②比誤差式、③正動作・正不動作＋点検・自動監視＋低故障率＋冗長化、④`5サイクル及び3サイクル`＋`引外しコイル`、⑤トリップフリーの機能・目的を明記している。v57の不一致は教材・固定EXAM_ALIGNMENT・系列SPECの不足ではなくclean-blind solver側の省略であるため、教材修正は行わない。

## 反映判断

- 教材本文・PDF・練習・PowerPoint: 変更なし
- `SPEC.md`: 変更なし
- `EXAM_ALIGNMENT_SPEC.md`: 変更なし
- 固定EXAM_ALIGNMENT: 変更なし
- 系列SPEC固定13項目: 変更なし
- Topic 21一般式: 変更なし
- Topic 39完了判定: 未達
- 次工程: `topic_39_clean_blind_v58_pending`
- 現worker/contextはcandidate固定後にanswer-bearing資料を参照済みのためv58を実施しない。worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V58_CURRENT_CONTEXT_FRESHNESS_INVALID`
