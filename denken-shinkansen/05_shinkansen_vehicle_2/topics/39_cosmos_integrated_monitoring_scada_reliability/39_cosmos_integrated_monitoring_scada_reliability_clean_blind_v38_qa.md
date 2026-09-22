# Topic 39 clean blind v38 QA

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

candidate `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v38_candidate.md` は、candidate固定前に最新main、上位仕様、系列SPEC、sanitized STATUS/HANDOFF、question-only intake、固定5問の公式「問題」PDFだけを使用して作成した。公式標準解答、過去candidate/QA、保存済み正答、Topic 39 answer-bearing教材・QAはcandidate commit後に初めて照合した。

判定: `PASS`

## 公式標準解答との照合

### 一次4問

- R4一次「機械」問3: `5 / 5 PASS`
- R3一次「機械」問8: `5 / 5 PASS`
- H30一次「機械」問8: `4 / 5 FAIL`
  - (5) candidate: `ヘ：IP`
  - 公式: `イ：DHCP`
  - 問題文は「IPアドレス等を自動的に割り当てる (5) サーバ」を問うため、必要語はDHCP。candidateは配布されるアドレス種別と配布サーバ名を混同した。
- H25一次「機械」問8: `5 / 5 PASS`

一次計: `19 / 20 FAIL`

### R2二次「電力・管理」問2 — 固定5群

- 群1 小問(1)前半: `PASS`
  - 計器用変成器の絶縁・適切な低電圧/小電流への変成、CT/VTを回答。
- 群2 小問(1)後半: `PASS`
  - 比誤差 `ε=(K_n-K)/K×100 [%]` を回答。
- 群3 小問(2): `FAIL`
  - candidateは保護区間内事故での正動作、正常時・区間外事故での正不動作のみ記述。
  - 公式標準解答が要求する信頼性確保の要素である定期点検・自動監視、低故障率、冗長化を欠落。
- 群4 小問(3)前半: `FAIL`
  - candidate: `5サイクル`、`引外し装置（トリップ装置）`
  - 公式: `5サイクル及び3サイクル`、`引外しコイル（トリップコイル、TC可）`
  - 定格遮断時間の列挙不足と、要求された部位名称の不一致。
- 群5 小問(3)後半: `PASS`
  - 投入動作・投入指令があっても引外しを優先し開路するトリップフリーの機能と目的を記述。

二次計: `3 / 5 FAIL`

## 教材導出可能性QA

既存 `39_cosmos_integrated_monitoring_scada_reliability_explanation_source.md` をcandidate固定後に照合した。

- CT/VT: 負担、励磁、比誤差式、CT二次短絡側での安全処置を明記。
- A/D: `f_s > 2 f_max`、量子化誤差、積分形、MSB、サンプルホールドを明記。
- LAN: リピータ、ブリッジ、MAC、Wi-Fi、DHCPを明記し、DHCPをIP設定の自動配布プロトコルとして区別。
- 変調: 搬送波、復調、AM、QAM、ASKを明記。
- R2二次: CT/VTの役割と比誤差式、正動作/正不動作、定期点検・自動監視、低故障率、冗長化、`5サイクル又は3サイクル`、`引外しコイル（トリップコイル）`、トリップフリーを明記。

固定25答案要素は既存教材だけから導出可能。

判定: `25 / 25 PASS`

## 診断

- primary solver error: `1要素`
- secondary solver omission: `2群`
- secondary nomenclature error: `1群`（群4内）
- 教材不足: `0件`
- 仕様不整合: `0件`

## 次工程

別fresh worker/contextで `clean blind v39` を実施する。candidate固定前はquestion-only intakeと公式「問題」PDF以外のanswer-bearing資料を開かない。R2二次は固定5群境界を維持する。`25 / 25`公式一致かつ`25 / 25`教材導出可能の場合のみTopic 39最終ゲートへ進む。
