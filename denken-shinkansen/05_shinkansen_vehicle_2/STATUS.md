# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_exam_alignment_ready`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`、既存worker成果をreconcileし、Topic 38の制作前EXAM_ALIGNMENTを公式二種過去問から開始する。一次・二次の実対応を先に確定し、件数合わせで二次問題を採用しない。未確認のCOMTRAC内部実装・数値を推測せず、Topic 39を先取りしない。

Topic 01〜37は `PASS / completed`。完成数は `37 / 39`。

## Topic 37 ATC③ 速度制御系

判定: `PASS / completed`

### 制作前EXAM_ALIGNMENT

- source: `topics/37_atc_speed_control_system/37_atc_speed_control_system.md`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_exam_alignment_qa.md`
- 固定公式過去問: `5 / 5 PASS`
- 一次: `1問 / 5答案要素`、`5 / 5 PASS`
- 二次: `4問 / 20答案要素`、`20 / 20 PASS`
- 合計: `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 mapped`
- 系列SPEC固定計算・グラフ: `2 / 2 mapped`
- 二次問題の件数合わせ採用: `0件`

### 成果物

- 解説source / source QA: `PASS`
- 解説PDF / PDF QA: `PASS`
- 練習source / source QA: `PASS`
- 練習PDF / PDF QA: `PASS`
- 解説画像PowerPoint / render・content QA: `PASS`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 教材用仮定値を実車値として使用: `0件`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`

### clean blind

v1:
- candidate: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_candidate.md`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_qa.md`
- 一次 `4 / 5`、二次 `20 / 20`、合計 `24 / 25 FAIL`
- 1要素FAILは教材欠落ではなく独立再解答側の特定ミス。

v2:
- candidate: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_v2_candidate.md`
- candidate lock commit: `6fe8f6262431c25870e7b44560f79bed8e7022f5`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_v2_qa.md`
- 一次: `5 / 5 PASS`
- 二次: `20 / 20 PASS`
- 合計: `25 / 25 PASS`
- v1唯一のR4一次「機械」問7(2)は、v2で `自己保持回路` を独立に特定して解消。
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- exact blocker: `0件`

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

状態: `EXAM_ALIGNMENT_READY`

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

制作前に、公式二種過去問で一次・二次の実対応を確認する。未確認のCOMTRAC内部構成、論理、冗長方式、可用性値、処理周期等は真値化しない。Topic 39のSCADA・遠隔計測・A/D変換等は先取りしない。

exact blocker: `0件`

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
