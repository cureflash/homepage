# Topic 39 clean blind v61 QA

更新日: 2026-09-24

## 判定

- candidate commit: `7d7983a6ab3ec20fc22b30eef6d46ca923791718`
- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 FAIL`
- 合計: `23 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- R2二次固定5群境界: `PASS`
- gate: `FAIL`

candidate固定前はquestion-only intakeと公式「問題」PDFだけで再解答し、candidate commit後に公式標準解答・既存教材・v60 QAと照合した。

## 一次20答案要素

### R4一次「機械」問3
candidate `負担 / 励磁 / 小さ / 比誤差 / 短絡`。公式標準解答と全一致。 `5 / 5 PASS`。

### R3一次「機械」問8
candidate `2 / 誤差 / 時間 / MSB / サンプルホールド`。公式標準解答と全一致。 `5 / 5 PASS`。

### H30一次「機械」問8
candidate `リピータ / ブリッジ / MAC / Wi-Fi / DHCP`。公式標準解答と全一致。 `5 / 5 PASS`。

### H25一次「機械」問8
candidate `搬送波 / 復調 / AM / 直交振幅変調(QAM) / ASK`。公式標準解答と全一致。 `5 / 5 PASS`。

## 二次5答案要素

公式標準解答:
https://www.shiken.or.jp/chief/upload/20201122_ch_second_a01.pdf

### 群1: 小問(1)前半 — PASS
高電圧・大電流を扱いやすい値へ変成し、高圧回路から計測・保護回路を絶縁する役割と、VT/PT・CTを挙げており要求を満たす。

### 群2: 小問(1)後半 — PASS
`ε = (K_n - K) / K × 100 [%]` は公式標準解答と一致。

### 群3: 小問(2) — FAIL
candidateは「内部事故時の確実動作」と「健全時・区間外事故時の不要動作防止」を答えたが、公式標準解答が信頼性向上策として求める `点検・自動監視 / 低故障率 / 冗長化` を列挙していない。 `solver omission`。

### 群4: 小問(3)前半 — FAIL
candidateは定格遮断時間を `3サイクル` のみとした。公式標準解答は `5サイクル及び3サイクル`。事故除去指令の受け口 `引外しコイル（トリップコイル）` は一致。失点は遮断時間の列挙不足。 `solver omission`。

### 群5: 小問(3)後半 — PASS
投入指令が残っていても引外しを優先し、再投入の反復を防いで事故拡大・機器損傷を防ぐトリップフリーの機能・目的を説明しており要求を満たす。

## 教材導出ゲート

`25 / 25 PASS`。現行教材には、群3の `点検・自動監視 / 低故障率 / 冗長化` と、群4の `5サイクル又は3サイクル` を含めて必要事項が収録済みであり、教材修正は不要。

## 反映判断

- 教材本文・PDF・練習・PowerPoint: 変更なし
- SPEC / EXAM_ALIGNMENT_SPEC / 固定EXAM_ALIGNMENT: 変更なし
- Topic 39完了判定: 未達
- project exact blocker: 0件
- 次工程: `topic_39_clean_blind_v62_pending`
- 現v61 contextはcandidate固定後にanswer-bearing資料を参照済みのためv62を実施しない。
