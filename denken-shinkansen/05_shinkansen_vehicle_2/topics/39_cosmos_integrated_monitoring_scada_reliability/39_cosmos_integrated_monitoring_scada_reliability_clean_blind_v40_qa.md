# Topic 39 clean blind v40 QA

更新日: 2026-09-22

## 判定

`FAIL / CLEAN_BLIND_RETRY_REQUIRED`

- freshness: `PASS`
- 一次: `19 / 20 FAIL`
- 二次: `3 / 5 FAIL`
- 合計: `22 / 25 FAIL`
- 教材導出可能: `25 / 25 PASS`
- R2固定5群境界: `PASS`
- 教材修正必要: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Freshness QA

candidate `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v40_candidate.md` は commit `9dbc95a6fd1f7c36d11444f2d580d8239d24e33a` で固定した。candidate固定前は最新main、上位仕様、系列SPEC、sanitized STATUS/HANDOFF、question-only intake、固定5問の公式「問題」PDFだけを使用し、公式標準解答、過去candidate/QA、保存済み正答、Topic 39 answer-bearing教材・QAは開いていない。

判定: `PASS`

## 公式標準解答との照合

### 一次4問

- R4一次「機械」問3: `5 / 5 PASS`
- R3一次「機械」問8: `5 / 5 PASS`
- H30一次「機械」問8: `4 / 5 FAIL`
  - (5) candidate: `ヘ：IP`
  - 公式: `イ：DHCP`
  - 問題文はIPアドレス等を自動割当てするサーバ名を要求しており、candidateは配布対象のアドレス種別と配布プロトコル／サーバ名を混同した。
- H25一次「機械」問8: `5 / 5 PASS`

一次計: `19 / 20 FAIL`

### R2二次「電力・管理」問2 — 固定5群

- 群1 小問(1)前半: `PASS`
  - 計器用変成器の変成・計測保護用途、CT/VTを回答。
- 群2 小問(1)後半: `PASS`
  - 比誤差 `ε=(K_n-K)/K×100 [%]` を回答。
- 群3 小問(2): `FAIL`
  - candidateは保護区間内事故への正動作と区間外事故・正常時の正不動作を記述したが、公式標準解答が信頼性確保策として要求する点検・自動監視、低故障率、冗長化を欠落。
- 群4 小問(3)前半: `FAIL`
  - candidateは `3サイクル` と `引外しコイル（トリップコイル）` を回答。
  - 公式は定格遮断時間として `5サイクル及び3サイクル` を要求するため、列挙不足。
- 群5 小問(3)後半: `PASS`
  - 投入指令・投入動作中でも引外しを優先して開路し、事故状態で投入・遮断を繰り返さないトリップフリーの機能・目的を回答。

二次計: `3 / 5 FAIL`

## 教材導出可能性QA

既存 `39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md` をcandidate固定後に照合した。

- CT/VT: 役割、負担、励磁、比誤差式、CT二次短絡側での安全処置を明記。
- A/D: 標本化、`2^n`、量子化誤差、変換時間、MSB、サンプルホールド、代表方式を明記。
- LAN: リピータ、ブリッジ、MAC、Wi-Fi、DHCPを明記し、DHCPをIP設定の自動配布プロトコルとして区別。
- 変調: 搬送波、復調、AM、QAM（直交振幅変調）、ASKを明記。
- R2二次: CT/VTの役割と比誤差式、正動作/正不動作、定期点検・自動監視、低故障率、冗長化、`5サイクル又は3サイクル`、`引外しコイル（トリップコイル）`、トリップフリーを明記。

固定25答案要素は既存教材だけから導出可能。

判定: `25 / 25 PASS`

## R2固定5群境界QA

intake記載の5群を分割・再結合せず、そのまま採点単位として使用した。

判定: `PASS`

## 診断

- primary solver error: `1要素`
- secondary solver omission: `2群`
- 教材不足: `0件`
- 仕様不整合: `0件`
- Topic 21一般式変更: `0件`

## 次工程

別fresh worker/contextで `clean blind v41` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDF以外のanswer-bearing資料を開かない。R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみTopic 39最終ゲートへ進む。