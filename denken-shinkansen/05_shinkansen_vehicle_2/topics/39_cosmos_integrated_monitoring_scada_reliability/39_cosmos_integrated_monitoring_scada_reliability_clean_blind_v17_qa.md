# Topic 39 clean blind v17 QA

更新日: 2026-09-22

## 結論

判定: `FAIL / clean blind v17`

- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 PASS`
- 合計: `23 / 25 FAIL`
- 教材だけでの導出可能性: `25 / 25 PASS`
- R2二次 固定5群境界: `PASS`
- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

`25 / 25`公式一致を満たさないためTopic 39はcompletedにしない。

## 1. Freshness

candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v17_candidate.md`

candidate commit: `d52dd566563912b8aa20114d2da4ec1b91adac04`

candidate固定前に参照したもの:
- 最新main
- `MASTER_SPEC.md`
- `EXAM_ALIGNMENT_SPEC.md`
- 系列`SPEC.md`
- sanitized `STATUS.md` / `HANDOFF.md`
- question-only intake
- 固定5問の公式「問題」PDF

candidate固定前に参照していないもの:
- v1〜v16 candidate/QA
- 公式一次解答・二次標準解答
- Topic 39 answer-bearing教材・answer-bearing QA

R2二次はquestion-only intakeの固定5群境界を維持した。

判定: `PASS`

## 2. 公式解答照合

公式過去問一覧:
https://www.shiken.or.jp/chief/second/qa/

### R4一次「機械」問3

candidate: `ハ / ニ / チ / カ / イ`

公式: `ハ / ニ / チ / カ / イ`

判定: `5 / 5 PASS`

### R3一次「機械」問8

candidate: `チ / ト / カ / ヌ / ヘ`

公式: `チ / ト / カ / ヌ / ヘ`

判定: `5 / 5 PASS`

### H30一次「機械」問8

candidate: `ル / ヨ / ヌ / チ / イ`

公式: `ル / ヨ / ヌ / チ / イ`

判定: `5 / 5 PASS`

### H25一次「機械」問8

candidate: `ヨ / ル / ロ / カ / ト`

公式: `ヨ / ル / ロ / カ / ト`

判定: `5 / 5 PASS`

一次合計: `20 / 20 PASS`

### R2二次「電力・管理」問2

固定5群を分割し直さず照合した。

#### 群1 — PASS

candidateは、計器用変成器の役割を高圧・大電流から計器・保護リレーで扱える値へ変換し絶縁するものと説明し、代表例としてVT/PTとCTを挙げた。公式標準解答と一致する。

#### 群2 — PASS

candidate:

`ε = (K_n - K) / K × 100 [%]`

公式標準解答と一致する。

#### 群3 — FAIL

candidateは保護区間内事故への確実動作と、正常時・区間外事故での誤動作防止を記述したが、公式標準解答が信頼性の具体策として要求する点検・自動監視、低故障率、冗長化を記述していない。

診断: `solver omission / 教材欠落ではない`

#### 群4 — FAIL

candidateは定格遮断時間を `3サイクル` のみとし、事故除去指令を受ける箇所を引外し装置・引外し機構とした。公式標準解答は `5サイクル及び3サイクル` と `引外しコイル（トリップコイル、TC）` を要求するため、固定群全体として不一致。

診断: `solver error + omission / 教材欠落ではない`

#### 群5 — PASS

candidateは、投入指令が継続していても引外し指令を優先して開路し、事故回路への投入保持・反復投入を防ぐ機能と説明した。公式標準解答と一致する。

二次合計: `3 / 5 PASS`

## 3. 教材導出可能性

candidate固定後にTopic 39 sourceを照合した。

Topic 39 sourceの固定EXAM_ALIGNMENTには、一次4問20答案要素の公式正答・対応語と、R2二次固定5群について次を明示している。

- 群1: CT/VTの役割と絶縁
- 群2: `ε = (K_n - K) / K × 100 [%]`
- 群3: 区間内正動作、区間外正不動作、点検・自動監視、低故障率、冗長化
- 群4: `5サイクル又は3サイクル`、引外しコイル
- 群5: トリップフリーの機能・目的

したがって、v17の二次2群不一致は教材欠落ではなくcandidate作成時のsolver error / omissionである。

判定:
- 一次: `20 / 20 DERIVABLE`
- 二次: `5 / 5 DERIVABLE`
- 合計: `25 / 25 PASS`

## 4. 品質ゲート

`EXAM_ALIGNMENT_SPEC.md` の完成後独立試験では、固定過去問を保存済み正答を見ずに独立再解答し、公式正答に一致する必要がある。

v17はfreshnessと教材導出可能性は満たしたが、公式一致が `23 / 25` のためゲートFAIL。

Topic 39判定: `IN_PROGRESS`

次工程: 別fresh worker/contextでclean blind v18を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次の固定5群境界を維持する。

## Topic 21固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
