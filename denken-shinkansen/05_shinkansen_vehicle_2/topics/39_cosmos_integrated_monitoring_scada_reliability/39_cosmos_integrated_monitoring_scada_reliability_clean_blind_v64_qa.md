# Topic 39 COSMOS clean blind v64 QA

更新日: 2026-09-24

## 判定

`FAIL / CLEAN_BLIND_V64`

- candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v64_candidate.md`
- candidate commit: `b72a45adbb1cd22ab6e5b41c5b715a82cd46bb3d`
- freshness: `PASS`
- 公式標準解答一致: `21 / 25 FAIL`
  - 一次4問: `20 / 20 PASS`
  - 二次1問・固定5群: `1 / 5 FAIL`
- 教材だけで導出可能: `25 / 25 PASS`
- R2二次固定5群境界: `PASS`
- Topic 39教材不足: `0件`
- 教材修正・再生成: `不要`

## Freshness QA

candidate固定前に参照したのは、上位仕様、系列SPEC、sanitized STATUS/HANDOFF、question-only intake、intake記載の公式「問題」PDF 5件のみ。

candidate固定前に次は参照していない。

- 公式「解答」PDF
- v1〜v63 candidate/QA
- 保存済み正答
- Topic 39 answer-bearing教材・answer-bearing QA

candidate commit後に初めて公式標準解答と既存教材を開いて照合したため、v64 freshnessは `PASS`。

## 公式標準解答照合

### 一次4問

- R4一次「機械」問3: `5 / 5 PASS`
- R3一次「機械」問8: `5 / 5 PASS`
- H30一次「機械」問8: `5 / 5 PASS`
- H25一次「機械」問8: `5 / 5 PASS`

一次計: `20 / 20 PASS`

### R2二次「電力・管理」問2 — 固定5群

固定5群はintake記載の境界を変更せず採点した。

#### 群1 — 小問(1)前半: `FAIL`

candidateは高電圧・大電流を計器・保護リレーで扱える低電圧・小電流へ変換する役割と、VT/PT・CTの例を回答した。一方、公式標準解答が要求する「高電圧回路から計測・保護回路を電気的に絶縁する」という役割を明示していない。安全に扱えるという表現だけでは、固定答案要素としての絶縁機能を独立に回収できないためFAIL。

#### 群2 — 小問(1)後半: `PASS`

candidateの比誤差式 `ε = (K_n - K) / K × 100 [%]` は公式標準解答と一致。

#### 群3 — 小問(2): `FAIL`

candidateは保護すべき事故時の確実動作、正常時・対象外時の不動作、不動作・誤動作防止という信頼性の意味を回答した。しかし公式標準解答が具体策として要求する、点検・自動監視による故障検出、低故障率部品の使用、複数系列化・冗長化を列挙していないためFAIL。

#### 群4 — 小問(3)前半: `FAIL`

candidateは77/66 kV系統の定格遮断時間を `5サイクル`、指令受信箇所を `引外し装置（トリップ装置）` とした。公式標準解答は定格遮断時間を `5サイクル及び3サイクル`、事故除去指令を受ける箇所を `引外しコイル` としている。列挙不足と用語不一致があるためFAIL。

#### 群5 — 小問(3)後半: `FAIL`

candidateは投入指令中でも引外し指令を優先して遮断する機能を説明したが、目的を一般的な事故電流遮断・系統保護に留めた。公式標準解答が要求する、投入・引外し動作の反復を防止し、遮断器の損傷や事故拡大を防ぐという目的を明示していないためFAIL。

二次計: `1 / 5 FAIL`

## 教材導出QA

candidate固定後に既存Topic 39教材を照合した。

- 固定一次20答案要素: 教材から導出可能
- 固定二次5答案要素: 教材から導出可能
- 合計: `25 / 25 PASS`

既存の解説source/PDF、練習source/PDF、PowerPointに対する既存QAも `25 / 25`教材接続を満たしており、今回の不一致は教材不足ではなくsolver側の回収不足と判定する。

## 最終診断

- 公式一致: `21 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- 固定5群境界: `PASS`
- diagnosis: `solver-side mismatch ×4 secondary groups`
- Topic 39: `IN_PROGRESS`
- series 05: `38 / 39`

教材・SPEC・EXAM_ALIGNMENTは修正しない。

次は別fresh worker/contextによる `TOPIC39_CLEAN_BLIND_V65`。このv64 contextはcandidate固定後にanswer-bearing資料を参照済みのため、v65を実施しない。

worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V65_CURRENT_CONTEXT_FRESHNESS_INVALID`
