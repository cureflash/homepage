# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_clean_blind_v7_invalid`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: Topic 38 fresh clean blind v8。candidate固定前は必須正本・question-only intake・公式「問題」PDFだけを確認し、Topic 38 source/教材・prior candidate/QA・公式標準解答・answer-bearing commit diffを開かない。

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

状態: `CLEAN_BLIND_V7_INVALID`

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

### 直前の有効clean blind

- v6は品質ゲート未達で `FAIL`。
- 詳細な答案・正誤位置・公式正答はv6 QA正本だけに保持し、mandatoryな `STATUS.md` / `HANDOFF.md` には再掲しない。
- 教材欠落によるFAIL: `0件`
- 教材本文修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 38 completed: `NO`

### clean blind v7 invalidation

- candidate作成: `0件`
- candidate commit: `0件`
- QA照合: `0件`
- 原因: candidate固定前の必須reconcileで、当時の `STATUS.md` / `HANDOFF.md` 自体にv6の保存済み正答を特定できる答案詳細が記載されていた。
- `MASTER_SPEC.md` §1は毎runで `STATUS.md` / `HANDOFF.md` の確認を必須とし、`EXAM_ALIGNMENT_SPEC.md` §10は保存済み正答を先に見ない独立再解答を要求するため、このrunではfreshnessを満たせない。
- exact blocker: `TOPIC38_CLEAN_BLIND_V7_FRESHNESS_CONTAMINATED_BY_MANDATORY_RECORDS`
- 記録: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v7_invalid.md`

### 次の安全な工程

- mandatory記録は本更新で非answer-bearing要約へ整理した。
- Topic 38 fresh clean blind v8を、このrunのv6答案詳細を参照していないfresh workerで実施する。
- candidate固定前は `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、question-only intake、公式「問題」PDFだけを読む。
- Topic 38 source Markdown、練習source/PDF、解説PDF、prior clean-blind candidate / QA、公式標準解答、保存済み正答を含むQA・answer-bearing commit diffはcandidate固定前に開かない。
- 固定5問・25答案要素を独立再解答してcandidateを固定する。
- 固定後に公式標準解答と現行教材へ照合する。
- `25 / 25` かつ教材依存 `25 / 25` ならcompleted判定へ進む。未達ならcandidateを修正せずQA記録する。

次工程は `TOPIC38_CLEAN_BLIND_V8`。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
