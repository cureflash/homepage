# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_clean_blind_protocol_conflict_blocked`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: Topic 38のclean blind v5には進まない。上位仕様と現HANDOFFの独立再解答手順に不整合があるため、仕様解決後に再開する。既存教材・固定EXAM_ALIGNMENT・v4 candidateは変更しない。

Topic 01〜37は `PASS / completed`。完成数は `37 / 39`。

## Topic 37 ATC③ 速度制御系

判定: `PASS / completed`

- 制作前EXAM_ALIGNMENT＋QA: `PASS`
- 解説source/PDF、練習source/PDF、PowerPoint＋render/content QA: `PASS`
- 固定5問・25答案要素: 一次 `5 / 5`、二次 `20 / 20`、合計 `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

状態: `BLOCKED_BY_CLEAN_BLIND_PROTOCOL_CONFLICT`

### remediation完了範囲

- EXAM_ALIGNMENT＋QA: `PASS / REMEDIATED`
- 解説source＋source QA: `PASS / REMEDIATED`
- 練習source＋source QA: `PASS / REMEDIATED`
- 解説PDF＋PDF QA: `PASS / REMEDIATED`
- 練習PDF＋PDF QA: `PASS / REMEDIATED`
- PowerPoint＋render/content QA: `PASS / REMEDIATED`
- 固定5問変更: `0件`
- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- v1〜v3 candidate変更: `0件`

### fresh clean blind v4結果

- freshness: `PASS`
- v4 candidate固定commit: `4a2ee352f7496a8d1811fd8af9f2f2221b5ed738`
- candidate固定後修正: `0件`
- 公式標準解答一致: `23 / 25 FAIL`
- 不一致位置: R2一次「機械」問8(3)、H23一次「機械」問8(3)の2要素
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落によるFAIL: `0件`
- QA: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v4_qa.md`
- Topic 38 completed: `NO`

### 仕様不整合

上位正本と現HANDOFFのclean blind手順が一致しない。

- `EXAM_ALIGNMENT_SPEC.md` §10は、完成後の独立試験を「EXAM_ALIGNMENTで選定した過去問を教材内容だけを使って独立再解答する」ゲートとしている。
- `MASTER_SPEC.md` §1は、各runでactive themeの既存成果物を読むことを必須としている。
- 一方、現`HANDOFF.md`はv5 candidate固定前に既存教材を読まないことを要求している。また同じ`HANDOFF.md` / `STATUS.md`の必読を要求しながら、そこにv4のanswer-bearing結果が記載されている。

このままでは「上位仕様に従う独立再解答」と「現HANDOFFのfresh candidate条件」を同時に満たす手順を一意に決められない。上位仕様が系列内運用より優先すること自体は明記されているが、どのclean blind手順を正式ゲートとするかの仕様決定なしにv5を実施すると、品質ゲートの意味を変更することになるため停止する。

### 次の安全な工程

- clean blind v5を実施しない。
- 教材remediation・固定EXAM_ALIGNMENT変更・Topic 39先取りをしない。
- 既存v4 candidateを変更しない。
- clean blindの正式手順が上位仕様と矛盾しない形で確定した後、その手順に従って再開する。

exact blocker: `TOPIC38_CLEAN_BLIND_PROTOCOL_CONFLICT` — `EXAM_ALIGNMENT_SPEC.md` §10の「教材内容だけで独立再解答」、`MASTER_SPEC.md` §1の既存成果物必読、現`HANDOFF.md`の「candidate固定前に既存教材・answer-bearing資料を読まない」が両立せず、v5の正当な実施条件を一意に確定できない。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
