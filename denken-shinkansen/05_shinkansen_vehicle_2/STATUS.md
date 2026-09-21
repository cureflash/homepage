# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `36 / 39`
- current_status: `topic_37_clean_blind_v2_ready`
- last_completed_topic: `36 ATC② 信号伝送と周波数`
- active_topic: `37 ATC③ 速度制御系`
- next_start: 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`をreconcileし、`topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_intake.md` と公式の問題PDFだけを用いて `clean_blind_v2_candidate` を先に固定する。candidate固定前にv1 candidate/QA、公式標準解答、固定EXAM_ALIGNMENTの正答、解説source/PDF、練習source/PDF、各answer-bearing QAを開かない。未確認の実車ATC内部実装・数値を真値化せず、Topic 38を先取りしない。

Topic 01〜36は `PASS / completed`。完成数は `36 / 39`。

## Topic 37 ATC③ 速度制御系

判定: `NEEDS_REVISION / CLEAN_BLIND_V2_READY`

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
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- exact blocker: `0件`

固定過去問:
- R4一次「機械」問7
- R7二次「機械・制御」問4
- R6二次「機械・制御」問4
- R4二次「機械・制御」問4
- R3二次「機械・制御」問4

SPEC固定項目:
- 速度検出
- 目標速度
- 伝達関数
- ブロック線図
- 応答
- 安定性
- ブレーキ制御
- フェイルセーフ

### 既存成果物

- 解説source / source QA: `PASS`
- 解説PDF / PDF QA: `PASS`
- 練習source / source QA: `PASS`
- 練習PDF / PDF QA: `PASS`
- 解説画像PowerPoint / render・content QA: `PASS`
- 固定5問・25答案要素接続: `25 / 25 PASS`
- 一次: `5 / 5 connected`
- 二次: `20 / 20 connected`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- 教材用仮定値を実車値として使用: `0件`
- ATS-Dxを新幹線ATC実装として使用: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`

### clean blind v1

- candidate: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_candidate.md`
- QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_qa.md`
- 一次: `4 / 5 PASS`
- 二次: `20 / 20 PASS`
- 合計: `24 / 25 FAIL`
- FAIL要素: `1答案要素`
- 診断: 教材欠落ではなく独立再解答側の特定ミス。詳細はanswer-bearing QAに隔離する。
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- Topic 21一般式変更: `0件`

### clean blind v2 準備

- question-only intake: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_intake.md`
- intake QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_intake_qa.md`
- R4一次「機械」問7 question-only fallback: intake内に正答情報なしで収録済み
- 必須startup文書のanswer-bearing記述: 本STATUS/HANDOFFから除去済み
- v2 candidate: 未作成
- v2 QA: 未実施
- exact blocker: `0件`

本runはsanitize前のanswer-bearing情報を確認済みのため、freshness条件を守ってv2 candidateは作成しない。次のfresh runは本STATUS/HANDOFFとquestion-only intakeから開始する。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の既存丸め差診断は正本どおり維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。
