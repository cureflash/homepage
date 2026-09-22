# Topic 39 clean blind v45 QA

更新日: 2026-09-22

## 判定

`FAIL / CLEAN_BLIND_RETRY_REQUIRED`

- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 FAIL`
- 合計: `23 / 25 FAIL`
- 教材導出可能: `25 / 25 PASS`
- R2固定5群境界: `PASS`
- 教材修正必要: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Freshness QA

candidate `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v45_candidate.md` は commit `eac51733924f4763e639d59cea44d360b5a51a88` で固定した。candidate固定前は最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、sanitized `STATUS.md` / `HANDOFF.md`、question-only intake、固定5問の公式「問題」PDFだけを使用し、v1〜v44 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材・QAは開いていない。

判定: `PASS`

## 公式標準解答との照合

### 一次4問

- R4一次「機械」問3: `5 / 5 PASS`
  - candidate `ハ / ニ / チ / カ / イ`、公式一致。
- R3一次「機械」問8: `5 / 5 PASS`
  - candidate `チ / ト / カ / ヌ / ヘ`、公式一致。
- H30一次「機械」問8: `5 / 5 PASS`
  - candidate `ル / ヨ / ヌ / チ / イ`、公式一致。
- H25一次「機械」問8: `5 / 5 PASS`
  - candidate `ヨ / ル / ロ / カ / ト`、公式一致。

一次計: `20 / 20 PASS`

### R2二次「電力・管理」問2 — 固定5群

- 群1 小問(1)前半: `PASS`
  - 計器用変成器の役割とCT/VTを回答。
- 群2 小問(1)後半: `PASS`
  - 比誤差 `ε=(K_n-K)/K×100 [%]` を回答。
- 群3 小問(2): `FAIL`
  - candidateは保護区間内事故への確実動作と、正常時・区間外事故での不要動作防止を回答した。
  - 公式標準解答が信頼性確保策として列挙する `点検・自動監視`、`故障率が低いこと`、`冗長化` を欠落。
- 群4 小問(3)前半: `FAIL`
  - candidate: `3サイクル`、`引外し装置（トリップコイル）`。
  - 公式: `5サイクル及び3サイクル`、`引外しコイル（トリップコイル、TCも可）`。
  - 遮断時間の列挙不足に加え、本文名称を `引外し装置` としたため公式指定より上位概念で名称精度不足。
- 群5 小問(3)後半: `PASS`
  - 投入操作・投入指令と競合しても引外しを優先し、投入・開放反復による損傷・事故拡大を防止する機能と目的を回答。

二次計: `3 / 5 FAIL`

## 教材導出可能性QA

candidate固定後に既存 `39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md` を照合した。教材本文には固定25答案要素を導出できる記述が維持されている。

- CT/VT: 役割、負担、励磁、比誤差式、CT二次短絡側での安全処置を明記。
- A/D: 標本化、量子化誤差、積分形、MSB、サンプルホールドを明記。
- LAN: リピータ、ブリッジ、MAC、Wi-Fi、DHCPを明記。
- 変調: 搬送波、復調、AM、QAM（直交振幅変調）、ASKを明記。
- R2二次: 正動作/正不動作、定期点検・自動監視、低故障率、冗長化、`5サイクル又は3サイクル`、`引外しコイル（トリップコイル）`、トリップフリーを明記。

固定25答案要素は既存教材だけから導出可能。

判定: `25 / 25 PASS`

## R2固定5群境界QA

intake記載の5群を分割・再結合せず、そのまま採点単位として使用した。

判定: `PASS`

## 診断

- primary solver error: `0件`
- secondary solver omission: `2群`
- secondary nomenclature error: `1群`
- 教材不足: `0件`
- 仕様不整合: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程

別fresh worker/contextで `clean blind v46` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDF以外のanswer-bearing資料を開かない。R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみTopic 39最終ゲートへ進む。
