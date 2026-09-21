# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_v2_ready`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 現在地

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- v1 candidate変更: `0件`

## 今回の1段階

latest main、必須startup文書、直近コミット、既存worker成果をreconcileした。直近コミット確認時にcommit diffを取得し、candidate固定前にanswer-bearing情報が露出したため、このrunではfresh clean blind v2 candidateを作成しない。

構造QAとして以下を確認した。

- question-only intakeは正答・公式標準解答・既存教材の解答情報を含めない構成
- v2 candidateファイルは未作成
- remediation済み成果物を再生成しない
- Topic 21一般式は変更しない

readiness記録: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v2_blocker.md`

## 次工程: fresh clean blind v2

次runは以下の順序だけで進める。

1. `../MASTER_SPEC.md`、`../EXAM_ALIGNMENT_SPEC.md`、当該系列`SPEC.md`、本`HANDOFF.md`、`STATUS.md`を確認する。
2. 直近コミットはmessage/SHA/date等のmetadataだけでreconcileし、candidate固定前にcommit diffを開かない。
3. `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_intake.md` のquestion-only intakeだけを開く。
4. 保存済み正答・教材・QA・公式解答を見ずに、別ファイル `38_comtrac_train_tracking_route_control_reliability_clean_blind_v2_candidate.md` を固定する。
5. candidate固定後にだけ公式標準解答と教材を開き、「公式標準解答一致」と「教材だけで導出可能」を別々に照合する。
6. 固定5問・25答案要素の双方 `25 / 25` でなければcompletedにしない。二次は直接対応0問を維持し、件数合わせをしない。

candidate固定前に開かないもの: 直近commit diff、保存済み正答、v1 candidate/QA/remediation、EXAM_ALIGNMENT QA、解説/練習source/PDF/QA、PowerPoint/QA、公式標準解答。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39の内容を先取りしない。
- Topic 21の既存診断・一般式は変更しない。

exact blocker for this run: `candidate固定前のcommit diff取得によりanswer-bearing情報が露出し、fresh clean blind条件不成立`
exact blocker for next fresh run: `0件`
