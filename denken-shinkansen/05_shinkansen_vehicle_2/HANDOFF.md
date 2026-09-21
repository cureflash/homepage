# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_exam_alignment_ready`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

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

## 次工程: Topic 38 制作前EXAM_ALIGNMENT

対象: `COMTRAC 列車追跡・進路制御・高信頼化`

系列SPEC固定範囲:
- 列車追跡
- 状態データ
- 論理処理
- 時刻情報
- ブール代数
- インターロック
- 状態遷移
- 冗長化
- 可用性

次runは、最新main、上位2仕様書、系列SPEC、本STATUS/HANDOFF、既存worker成果をreconcileした後、公式の第二種電気主任技術者試験過去問を直近年度から調査する。

- 一次・二次を合わせ原則5問以上。ただし実対応問題が少なければ確認できた全件を扱う。
- 二次は主題に実対応するものだけ採用し、件数合わせで採用しない。
- 過去問要求を用語・論理・状態遷移・冗長化・可用性等へ分解し、SPEC固定9項目とのcoverageを制作前に確定する。
- 制作前EXAM_ALIGNMENTが通るまで解説source/PDF、練習、PowerPointを先に作らない。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率・可用性値等を真値化しない。
- COMTRAC固有の技術事実はJR、公的機関、鉄道総研等の一次資料で確認する。
- Topic 39のCOSMOS、SCADA、A/D変換、計器用変成器、遠隔計測・遠隔制御は先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。

exact blocker: `0件`
