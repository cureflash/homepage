# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_protocol_conflict_blocked`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 現在地

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- v1〜v3 candidate変更: `0件`

## 直前成果のreconcile

latest main、`STATUS.md` / `HANDOFF.md`、直近commit metadataをreconcileした。Topic 38の最新有効成果はfresh clean blind v4。

- candidate commit: `4a2ee352f7496a8d1811fd8af9f2f2221b5ed738`
- freshness: `PASS`
- candidate固定後修正: `0件`
- 公式標準解答一致: `23 / 25 FAIL`
- 不一致位置: R2一次「機械」問8(3)、H23一次「機械」問8(3)の2要素
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落: `0件`
- 固定5問変更: `0件`
- Topic 21一般式変更: `0件`

QA正本: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v4_qa.md`

Topic 38はcompletedにしていない。

## 仕様不整合

clean blind v5の現HANDOFF手順は上位仕様と両立しない。

1. `EXAM_ALIGNMENT_SPEC.md` §10は、完成後の独立試験を「EXAM_ALIGNMENTで選定した過去問を教材内容だけを使って独立再解答する」ものとしている。
2. `MASTER_SPEC.md` §1は、各runでactive themeの既存成果物を読むことを必須としている。
3. 直前HANDOFFは、v5 candidate固定前に既存教材・既存answer-bearing資料を読まないことを要求していた。
4. 同時に、そのHANDOFF / STATUS自体がv4結果を含み、必読startup文書になっている。

したがって、現状では「上位仕様準拠の独立再解答」と「従来のfresh candidate条件」を同時に満たす手順が一意に定まらない。上位仕様が系列SPEC・ローカル運用より優先することは明記されているが、freshnessをどの範囲で要求するかをこちらで新規定義すると品質ゲート自体の意味を変更するため、推測で続行しない。

## 次工程

- clean blind v5を実施しない。
- 教材remediation・固定EXAM_ALIGNMENT変更・Topic 39先取りをしない。
- v4 candidateを変更しない。
- clean blind正式手順が上位仕様と矛盾しない形で確定した後、その手順でTopic 38を再判定する。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39の内容を先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

exact blocker: `TOPIC38_CLEAN_BLIND_PROTOCOL_CONFLICT` — `EXAM_ALIGNMENT_SPEC.md` §10の「教材内容だけで独立再解答」、`MASTER_SPEC.md` §1の既存成果物必読、従来HANDOFFの「candidate固定前に既存教材・answer-bearing資料を読まない」が両立せず、v5の正当な実施条件を一意に確定できない。
