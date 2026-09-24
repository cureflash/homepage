# Topic 39 Clean Blind v63 QA

更新日: 2026-09-24

## 前提

- candidate: `39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v63_candidate.md`
- candidate commit: `7a4e75a619d6bb7436b3ea78e196a98a0b5f7826`
- candidate固定前に参照したものは、上位仕様、系列SPEC、sanitized STATUS/HANDOFF、question-only intake、公式「問題」PDFのみ。
- candidate commit後に初めて公式標準解答、Topic 39教材、既存clean-blind QAを開いた。
- 固定対象: `5問 / 25答案要素`
- R2二次: intake固定の5群境界を維持。

## 公式標準解答との照合

| 固定問題 | 判定 |
|---|---:|
| R4一次「機械」問3 | `5 / 5 PASS` |
| R3一次「機械」問8 | `5 / 5 PASS` |
| H30一次「機械」問8 | `4 / 5 FAIL` |
| H25一次「機械」問8 | `5 / 5 PASS` |
| R2二次「電力・管理」問2 | `4 / 5 FAIL` |
| 合計 | `23 / 25 FAIL` |

### answer-bearing mismatch details

1. H30一次「機械」問8 `(5)`
   - candidate: `IP`
   - 公式: `DHCP`
   - 問題文は空欄直後が「サーバ」であり、正答はDHCPサーバ。

2. R2二次「電力・管理」問2 群4
   - candidate: 77/66 kV遮断器の遮断時間を `5サイクル又は3サイクル` とし、事故除去指令の受け点を `引外し装置（操作機構のトリップ機構）` とした。
   - 公式: 遮断時間は `5サイクル及び3サイクル`、事故除去指令の受け点は `引外しコイル（トリップコイル、TC）`。
   - 遮断時間の列挙は満たすが、受け点の機器名が公式答案要素に一致しないため固定群全体をFAILとする。

## 教材だけでの導出可能性

判定: `25 / 25 PASS`

現行Topic 39 sourceには固定答案要素が明示されている。

- R4: 負担、励磁、比誤差、CT二次側短絡の安全原則
- R3: 2倍標本化、量子化誤差、積分時間、MSB、サンプルホールド
- H30: リピータ、ブリッジ、MAC、Wi-Fi、DHCP
- H25: 搬送波、復調、AM、QAM、ASK
- R2: VT/CTの役割、比誤差式、保護リレーの正動作/正不動作・点検/自動監視・低故障率・冗長化、5/3サイクル、引外しコイル、トリップフリー

したがって今回の不一致は教材不足ではなくsolver側の誤答である。教材修正・再生成は不要。

## R2二次 固定5群境界

判定: `PASS`

candidateはintakeの次の5群を分割・再編せず維持した。

1. 小問(1)前半
2. 小問(1)後半
3. 小問(2)
4. 小問(3)前半
5. 小問(3)後半

## Gate conclusion

- freshness: `PASS`
- official-answer agreement: `23 / 25 FAIL`
- teaching-material derivability: `25 / 25 PASS`
- fixed 5-group boundary: `PASS`
- Topic 39 final verdict: `NEEDS_REVISION / CLEAN_BLIND_FAIL`
- series completion: `38 / 39`
- next clean-blind version: `v64`

v63は100%閾値を満たさないため、Topic 39および系列05をcompletedへ昇格しない。answer-bearingな不一致詳細は本QAにのみ保持する。