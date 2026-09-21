# Topic 39 EXAM_ALIGNMENT QA

更新日: 2026-09-21

対象: `39 COSMOS 統合監視・SCADA・信頼性`

判定: `PASS`

## reconcile

- run開始時に最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近commitを確認した。
- Topic 38はclean blind v9 `25 / 25 PASS` でcompleted済み。既存成果物を再生成しない。
- Topic 39は作業開始時点で既存topic directoryを確認できず、重複成果物なし。
- EXAM_ALIGNMENT作成前 main HEAD: `6678e7360132daf221a8eed8b5dcd45330d181c8`。
- EXAM_ALIGNMENT正本commit: `f1a70fd718d3fec74a07a6ade301d9167bd52541`。

## 仕様ゲート

| 項目 | 結果 |
|---|---|
| MASTER_SPEC優先 | PASS |
| EXAM_ALIGNMENT_SPEC準拠 | PASS |
| 系列SPEC Topic 39固定13項目 | `13 / 13 mapped` |
| 公式過去問を直近年度からスクリーニング | PASS |
| 固定公式過去問 | `5問` |
| 一次 | `4問 / 20答案要素` |
| 二次 | `1問 / 5答案要素` |
| 一次・二次合計 | `5問 / 25答案要素` |
| 二次直接対応問題 | R2二次「電力・管理」問2を採用 |
| 二次件数合わせ | `0件` |
| 公式問題URL | `5 / 5` |
| 公式解答URL | `5 / 5` |
| 参考教材 | 電験の真髄 + e-sysnetの2系統を確認 |
| Topic 38固定問題の重複採用 | `0件` |
| 未確認COSMOS内部実装・数値の真値化 | `0件` |
| exact blocker | `0件` |

## 固定5問QA

1. R4一次「機械」問3: 計器用変成器。Topic 39の計器用変成器・遠隔計測へ直接接続。`PASS`。
2. R3一次「機械」問8: A/D変換。Topic 39のA/D変換・データ収集へ直接接続。`PASS`。
3. H30一次「機械」問8: LAN中継・アドレス・Wi-Fi/DHCP。情報伝送・分散システムへ直接接続。`PASS`。
4. H25一次「機械」問8: 変調・復調。情報伝送へ直接接続。`PASS`。
5. R2二次「電力・管理」問2: 計器用変成器、保護リレー信頼性、自動監視、低故障率、冗長化。状態監視・冗長系・故障率・信頼度へ直接接続。`PASS`。

H26一次「機械」問3のUPS・並列冗長は関連性があるが、Topic 38ですでに固定済みのため本Topicでは固定しない。重複回避判定 `PASS`。

## 公式解答照合QA

- R4一次「機械」問3: `ハ / ニ / チ / カ / イ` を公式解答で確認。
- R3一次「機械」問8: `チ / ト / カ / ヌ / ヘ` を公式解答で確認。
- H30一次「機械」問8: `ル / ヨ / ヌ / チ / イ` を公式解答で確認。
- H25一次「機械」問8: `ヨ / ル / ロ / カ / ト` を公式解答で確認。
- R2二次「電力・管理」問2: 公式標準解答で、CT/VT、比誤差、正動作/正不動作、点検・自動監視、低故障率、冗長化、遮断器・トリップフリーを確認。

判定: `25 / 25 answer requirements fixed`。

注意: 本QAは制作前の公式解答照合であり、完成後のclean blindではない。公式解答を参照済みのため、本runの知識状態をclean blind候補に流用しない。

## 系列SPEC固定13項目QA

- 分散システム: mapped
- 情報伝送: mapped
- データ収集: mapped
- 状態監視: mapped
- SCADA: mapped as synthesis; named direct past-question matchとは主張しない
- A/D変換: mapped
- 計器用変成器: mapped
- 遠隔計測: mapped
- 遠隔制御: mapped as synthesis; actual COSMOS protocolは未確定のまま
- 冗長系: mapped
- 故障率: mapped
- 信頼度: mapped
- 可用性: mapped as general reliability model; actual COSMOS availabilityは未確定のまま

合計: `13 / 13 PASS`。

## 一般式QA

教材へ固定する一般式は以下。実設備値とは分離する。

- 一定故障率: `R(t)=exp(-λt)`
- 独立な直列系: `R_series=ΠR_i`
- 独立な並列系: `R_parallel=1-Π(1-R_i)`
- 同一2系並列: `R_parallel=1-(1-R)^2`
- 定常可用性近似: `A=MTBF/(MTBF+MTTR)`

成立条件（一定故障率、独立故障、理想切替・共通原因故障無視等）を本文に必ず明記する。判定 `PASS`。

## Topic 21固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

本runでの一般式変更: `0件`。

## 次工程

固定5問・25答案要素、固定13項目を維持したまま、Topic 39の解説sourceを作成する。最初に一般SCADAモデル、CT/VT、A/D、通信、信頼性・可用性を過去問要求へ直接接続し、COSMOS固有情報は一次資料で確認できた範囲だけ追加する。
