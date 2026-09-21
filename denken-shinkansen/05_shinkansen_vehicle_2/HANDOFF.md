# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_exam_alignment_complete`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 37 完了記録

制作前EXAM_ALIGNMENT＋QA、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QA、解説画像PowerPoint＋render/content QAは既存worker成果を採用し、重複生成していない。

固定5問・25答案要素は一次5、二次20。既存教材接続は `25 / 25 PASS`、SPEC固定8項目 `8 / 8 PASS`、系列SPEC固定計算・グラフ `2 / 2 PASS`。

clean blind v1は `24 / 25 FAIL` だったが、教材欠落ではなく独立再解答側の1要素ミスと診断済み。

clean blind v2:
- candidate: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_v2_candidate.md`
- candidate lock commit: `6fe8f6262431c25870e7b44560f79bed8e7022f5`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_v2_qa.md`
- 一次: `5 / 5 PASS`
- 二次: `20 / 20 PASS`
- 合計: `25 / 25 PASS`
- v1唯一のR4一次「機械」問7(2)は、v2で `自己保持回路` をcandidate固定前に独立特定。
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- exact blocker: `0件`

よってTopic 37は `PASS / completed`。

## Topic 38 制作前EXAM_ALIGNMENT 完了記録

対象: `COMTRAC 列車追跡・進路制御・高信頼化`

- source: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability.md`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `5問 / 25答案要素`、独立再解答 `25 / 25 PASS`
- 二次: `0問`。当該コア論点の直接対応を固定できず、件数合わせ採用 `0件`
- SPEC固定9項目: `9 / 9 mapped`
- 鉄道一次資料境界: `PASS`
- exact blocker: `0件`

固定問題:
1. R8 一次「機械」問8 — マイクロコンピュータ、シーケンス制御、フィードバック、センサ、ステッピングモータ
2. R2 一次「機械」問8 — OSタスク管理、状態、割込み、FIFO、優先度
3. H29 一次「機械」問8 — ソフトウェア試験、結合試験、ブラックボックス試験
4. H26 一次「機械」問3 — UPS、バイパス、並列冗長、同期、n+1
5. H23 一次「機械」問8 — 組合せ回路、順序回路、フリップフロップ、状態遷移、論理最小化

固定9項目:
- 列車追跡
- 状態データ
- 論理処理
- 時刻情報
- ブール代数
- インターロック
- 状態遷移
- 冗長化
- 可用性

電験過去問はCOMTRACそのものの出題とは扱わない。情報処理・論理・状態・信頼性の試験要求を固定し、列車追跡・進路制御・インターロック等の鉄道固有部分はJR東海/JRTT/鉄道総研等の一次資料で接続する。

## 次工程: Topic 38 解説source＋独立source QA

次runは最新main、上位2仕様書、系列SPEC、本STATUS/HANDOFF、Topic 38 EXAM_ALIGNMENT成果、他workerの新規成果をreconcileしてから開始する。

- 固定5問・25答案要素の要求をすべて本文節へ接続する。
- SPEC固定9項目を `9 / 9` 本文で説明する。
- 組合せ論理/順序論理、状態遷移、イベント・割込み・FIFO、シーケンス制御、ソフトウェア試験、冗長化・可用性を電験二種の一般論として説明する。
- COMTRACはJR東海一次資料で確認できる運行状況把握・進路制御・運行管理の範囲に限定して接続する。
- 解説source完成後、独立source QAを通すまでPDF・練習・PowerPointを作らない。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
