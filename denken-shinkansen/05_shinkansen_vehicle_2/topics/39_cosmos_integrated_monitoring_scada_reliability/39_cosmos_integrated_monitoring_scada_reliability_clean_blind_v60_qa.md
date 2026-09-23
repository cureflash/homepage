# Topic 39 clean blind v60 QA

更新日: 2026-09-23

## 判定

- candidate commit: `51476c70f5e04925eb6aa354d5b51c0f47f880e9`
- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 FAIL`
- 合計: `23 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- R2二次固定5群境界: `PASS`
- gate: `FAIL`

candidate固定前はquestion-only intakeと公式「問題」PDFだけで再解答し、candidate commit後に公式標準解答・既存教材と照合した。

## 一次 20答案要素

### R4一次「機械」問3

candidate `負担 / 励磁 / 小さ / 比誤差 / 短絡`。

公式標準解答 `ハ / ニ / チ / カ / イ` と全一致。`5 / 5 PASS`。

公式解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf

### R3一次「機械」問8

candidate `2 / 誤差 / 時間 / MSB / サンプルホールド`。

公式標準解答 `チ / ト / カ / ヌ / ヘ` と全一致。`5 / 5 PASS`。

公式解答: https://www.shiken.or.jp/chief/upload/20210821_ch_second_a01.pdf

### H30一次「機械」問8

candidate `リピータ / ブリッジ / MAC / Wi-Fi / DHCP`。

公式標準解答 `ル / ヨ / ヌ / チ / イ` と全一致。`5 / 5 PASS`。

公式解答: https://www.shiken.or.jp/chief/upload/20180901_ch_second_a01.pdf

### H25一次「機械」問8

candidate `搬送波 / 復調 / AM / 直交振幅変調(QAM) / ASK`。

公式標準解答 `ヨ / ル / ロ / カ / ト` と全一致。`5 / 5 PASS`。

公式解答: https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf

## 二次 5答案要素

公式標準解答: https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### 群1: 小問(1)前半

`PASS`。

candidateは、計器用変成器の役割として「高電圧・大電流を扱いやすい値へ変成」だけでなく「測定・保護回路を高電圧回路から絶縁」を明示し、代表例としてVT/PT・CTを挙げている。公式標準解答の要求を満たす。

### 群2: 小問(1)後半

`PASS`。

`ε = (K_n - K) / K × 100 [%]` は公式標準解答と一致。

### 群3: 小問(2)

`FAIL`。

candidateは、事故時の確実動作と事故でない場合の誤動作・不要動作防止を答案化したが、公式標準解答が信頼性の条件として列挙する `点検・自動監視 / 低故障率 / 冗長化` を欠く。`solver omission`。

### 群4: 小問(3)前半

`FAIL`。

candidateは定格遮断時間を `5サイクル` のみとした。公式標準解答は `5サイクル及び3サイクル`。事故除去指令を受ける箇所については `引外し装置（トリップ装置／トリップコイル）` とし、公式の `引外しコイル（トリップコイル、TCも可）` を含むため名称要求は満たす。失点は遮断時間の列挙不足。`solver omission`。

### 群5: 小問(3)後半

`PASS`。

candidateは、投入指令・投入操作中でも引外し指令を優先して遮断を完遂し、事故除去を確実にする機能・目的を説明している。公式標準解答の要求を満たす。

## 教材導出ゲート

`25 / 25 PASS`。

現行canonical sourceは一次20要素について公式正答語・図の識別を収録し、R2二次についても以下を明記している。

1. 高圧回路からの絶縁＋CT/VT
2. 比誤差式
3. 正動作・正不動作＋点検・自動監視＋低故障率＋冗長化
4. `5サイクル又は3サイクル`＋`引外しコイル`
5. トリップフリーの機能・目的

したがってv60の不一致2群は教材・固定EXAM_ALIGNMENT・系列SPECの不足ではなくclean-blind solver側の省略である。教材修正は行わない。

## 反映判断

- 教材本文・PDF・練習・PowerPoint: 変更なし
- `SPEC.md`: 変更なし
- `EXAM_ALIGNMENT_SPEC.md`: 変更なし
- 固定EXAM_ALIGNMENT: 変更なし
- 系列SPEC固定13項目: 変更なし
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式: 変更なし
- Topic 39完了判定: 未達
- project exact blocker: `0件`
- 次工程: `topic_39_clean_blind_v61_pending`
