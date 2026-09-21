# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_39_exam_alignment_complete / explanation_source_pending`。last completed topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`、active topicは `39 COSMOS 統合監視・SCADA・信頼性`。

## Topic 38 完了判定

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。fresh clean blind v9は公式標準解答一致・教材依存とも `25 / 25 PASS`。Topic 38成果物は再生成しない。

## Topic 39 制作前EXAM_ALIGNMENT

正本:
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability.md`
- `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_exam_alignment_qa.md`

判定: `PASS`

- 固定公式過去問: `5問`
- 一次: `4問 / 20答案要素`
- 二次: `1問 / 5答案要素`
- 合計: `25答案要素`
- 二次直接対応: R2二次「電力・管理」問2
- 二次件数合わせ: `0件`
- 系列SPEC固定13項目: `13 / 13 mapped`
- Topic 38固定問題の重複採用: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- exact blocker: `0件`

固定5問:
1. R4一次「機械」問3 — 計器用変成器
2. R3一次「機械」問8 — A/D変換
3. H30一次「機械」問8 — LAN中継機器・アドレス
4. H25一次「機械」問8 — 変調・復調
5. R2二次「電力・管理」問2 — 計器用変成器・保護リレー信頼性・自動監視・冗長化

H26一次「機械」問3のUPS・並列冗長はTopic 38ですでに固定済みなので重複固定しない。

## 次工程

`TOPIC39_EXPLANATION_SOURCE`。

1. 固定5問・25答案要素と系列SPEC固定13項目は変更しない。
2. 一般SCADAモデルを `計測対象 → CT/VT・センサ → 信号調整 → A/D・データ収集 → 通信 → 監視/状態判定 → 操作指令 → 制御対象` として説明し、COSMOS実装図とは明確に分離する。
3. CT/VTは役割、負担、励磁、比誤差、CT二次開放の危険まで扱う。
4. A/Dは標本化、量子化、分解能、量子化誤差、サンプルホールド、代表方式を扱う。
5. 情報伝送はLAN機器、MAC/IP、Wi-Fi/DHCP、搬送波、変調/復調、AM/FM/PM、ASK/FSK/PSK/QAMを扱う。
6. 信頼性は `R(t)=exp(-λt)`、直列・並列系、`A=MTBF/(MTBF+MTTR)` を成立条件付きで扱う。
7. 系列SPECの計算・グラフ3種（信頼度―時間、単一系・冗長系比較、可用性比較）へ接続できるsourceにする。
8. source QAで固定25答案要素 `25 / 25`、固定13項目 `13 / 13`、一般式・条件・単位を再確認する。

## 境界条件

- COSMOSの未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位の冗長方式、故障率、MTBF、MTTR、可用性実値を推測しない。
- 一般SCADAモデル、信頼性計算の仮定例は実設備仕様と明確に分離する。
- SCADA、遠隔制御、可用性という名称が固定過去問に直接出たとは主張しない。
- 完成後clean blindは公式解答・保存済み正答を先に見ないfresh workerで実施する。本runは公式解答を参照済みなのでcandidateに流用しない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

次は `TOPIC39_EXPLANATION_SOURCE`。
