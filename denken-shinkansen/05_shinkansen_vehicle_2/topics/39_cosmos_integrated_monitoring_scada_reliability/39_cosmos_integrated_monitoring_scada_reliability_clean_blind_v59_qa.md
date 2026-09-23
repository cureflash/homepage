# Topic 39 clean blind v59 QA

更新日: 2026-09-23

## 判定

- candidate commit: `5d722387409c8665bd5d4dd1ffadb0b84c84eeab`
- freshness: `PASS`
- 一次: `19 / 20 FAIL`
- 二次: `2 / 5 FAIL`
- 合計: `21 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- R2二次固定5群境界: `PASS`
- gate: `FAIL`

candidate固定前はquestion-only intakeと公式「問題」PDFだけで再解答し、candidate commit後に公式標準解答・既存教材と照合した。

## 一次 20答案要素

### R4一次「機械」問3

candidate `負担 / 励磁 / 小さ / 比誤差 / 短絡`。公式標準解答 `ハ / ニ / チ / カ / イ` と全一致。`5 / 5 PASS`。

### R3一次「機械」問8

candidate `2 / 誤差 / 時間 / MSB / サンプルホールド`。公式標準解答 `チ / ト / カ / ヌ / ヘ` と全一致。`5 / 5 PASS`。

### H30一次「機械」問8

candidate `リピータ / ブリッジ / MAC / Wi-Fi / DHCP`。公式標準解答 `ル / ヨ / ヌ / チ / イ` と全一致。`5 / 5 PASS`。

### H25一次「機械」問8

candidate `搬送波 / 復調 / AM / 直交振幅変調(QAM) / 直交振幅変調(QAM)`。

公式標準解答は `ヨ / ル / ロ / カ / ト` = `搬送波 / 復調 / AM / 直交振幅変調(QAM) / ASK`。

(1)〜(4)は一致、(5)は図2をQAMと判定したため不一致。`4 / 5 FAIL`。診断: `solver figure-identification error`。

## 二次 5答案要素

公式標準解答: `https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf`

### 群1: 小問(1)前半

`FAIL`。candidateは高電圧・大電流を計器・保護リレーが扱える値へ変成する役割とVT/PT・CTを答案化したが、公式標準解答が要求する「保護リレーや計器を高圧回路から絶縁する」を明示していない。`solver omission`。

### 群2: 小問(1)後半

`PASS`。`ε = (K_n - K) / K × 100 [%]` は公式標準解答と一致。

### 群3: 小問(2)

`FAIL`。candidateは保護区間内事故での正動作と、正常時・保護範囲外事故での不要動作防止を答案化したが、公式標準解答が要求する `点検・自動監視 / 低故障率 / 冗長化` を欠く。`solver omission`。

### 群4: 小問(3)前半

`FAIL`。candidateは `3サイクル` としたが、公式標準解答は `5サイクル及び3サイクル`。事故除去指令を受ける箇所についてはcandidate中に `引外しコイル／トリップコイル` を含み、名称要求は満たす。失点は遮断時間の列挙不足。`solver omission`。

### 群5: 小問(3)後半

`PASS`。投入指令中でも引外しを優先して開放し、事故回路への投入・開放の繰返しを防ぐ機能・目的を説明しており、公式標準解答の要求を満たす。

## 教材導出ゲート

`25 / 25 PASS`。

現行教材は一次20要素について公式正答語・図の識別を含み、R2二次についても①高圧回路からの絶縁、②比誤差式、③正動作・正不動作＋点検・自動監視＋低故障率＋冗長化、④`5サイクル及び3サイクル`＋`引外しコイル`、⑤トリップフリーの機能・目的を明記している。

v59の不一致は教材・固定EXAM_ALIGNMENT・系列SPECの不足ではなくclean-blind solver側の誤判定・省略である。教材修正は行わない。

## 反映判断

- 教材本文・PDF・練習・PowerPoint: 変更なし
- `SPEC.md`: 変更なし
- `EXAM_ALIGNMENT_SPEC.md`: 変更なし
- 固定EXAM_ALIGNMENT: 変更なし
- 系列SPEC固定13項目: 変更なし
- 未確認COSMOS内部実装・数値の真値化: 0件
- Topic 21一般式: 変更なし
- Topic 39完了判定: 未達
- project exact blocker: 0件
- 次工程: `topic_39_clean_blind_v60_pending`
