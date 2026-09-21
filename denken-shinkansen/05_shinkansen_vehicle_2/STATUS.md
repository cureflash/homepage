# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_clean_blind_v2_ready`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: Topic 38 fresh clean blind v2。必須startup文書を確認後、直近コミットはmetadataのみreconcileし、question-only intakeだけから別candidateを固定する。candidate固定前は直近commit diff、保存済み正答、v1 candidate/QA/remediation、EXAM_ALIGNMENT QA、解説/練習source/PDF/QA、PowerPoint/QA、公式標準解答を開かない。v1 candidateは変更しない。

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

状態: `CLEAN_BLIND_V2_READY`

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
- v1 candidate変更: `0件`

### fresh clean blind v2 readiness

- question-only intakeは正答・公式標準解答・既存教材の解答情報を含めない構成を確認済み。
- v2 candidateファイルは未作成（404確認）。
- 本runでは直近コミットをreconcileする際にcommit diffを取得し、candidate固定前にanswer-bearing情報が露出したため、freshness条件を満たさない。v2 candidateは作成していない。
- 次runは直近コミットをmetadataのみでreconcileし、candidate固定前にcommit diffを取得しない。
- fresh v2 candidate: `未作成`
- candidate固定前に参照可能: `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、当該系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`、その後question-only intakeのみ。
- candidate固定前に参照禁止: 直近commit diff、保存済み正答、v1 candidate/QA/remediation、EXAM_ALIGNMENT QA、解説/練習source/PDF/QA、PowerPoint/QA、公式標準解答。
- candidate固定後に「公式標準解答一致」と「教材だけで導出可能」を別々に判定し、固定5問・25答案要素の双方 `25 / 25` でなければcompletedにしない。
- exact blocker for this run: `candidate固定前のcommit diff取得によりanswer-bearing情報が露出し、fresh clean blind条件不成立`
- exact blocker for next fresh run: `0件`

## Topic 21 固定注記

既存の丸め差診断と一般式は変更しない。詳細はTopic 21の専用成果物を正本とする。
