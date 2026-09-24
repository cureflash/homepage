# STATUS - 新幹線車両・電験二種

更新日: 2026-09-24

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `38 / 39`
- current_status: `topic_39_clean_blind_v64_pending / IN_PROGRESS`
- last_completed_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- active_topic: `39 COSMOS 統合監視・SCADA・信頼性`
- next_start: 別fresh worker/contextでclean blind v64を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次はintake記載の固定5群境界を維持する。

Topic 01〜38は `PASS / completed`。完成数は `38 / 39`。

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

判定: `PASS / completed`

- EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint＋各QA: `PASS / REMEDIATED`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- clean blind v9: 公式標準解答一致 `25 / 25 PASS`、教材だけで導出可能 `25 / 25 PASS`
- exact blocker: `0件 / PASS`

## Topic 39 COSMOS 統合監視・SCADA・信頼性

判定: `IN_PROGRESS / CLEAN_BLIND_V64_PENDING`

### 制作前EXAM_ALIGNMENT

- EXAM_ALIGNMENT＋QA: `PASS`
- 固定公式過去問: `5問`
- 一次: `4問 / 20答案要素`
- 二次: `1問 / 5答案要素`
- 合計: `25答案要素`
- 二次直接対応: R2二次「電力・管理」問2
- 二次件数合わせ: `0件`
- 系列SPEC固定13項目: `13 / 13 mapped`
- Topic 38固定問題の重複採用: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`

固定5問:
1. R4一次「機械」問3 — 計器用変成器
2. R3一次「機械」問8 — A/D変換
3. H30一次「機械」問8 — LAN中継機器・アドレス
4. H25一次「機械」問8 — 変調・復調
5. R2二次「電力・管理」問2 — 計器用変成器・保護リレー信頼性・自動監視・冗長化

### 完了済み成果物

- 解説source＋source QA: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF＋PDF QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source＋source QA: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF＋PDF QA: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint＋render/content QA: `PASS / POWERPOINT_COMPLETE`
- 固定25答案要素の教材接続: `25 / 25 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ: `3 / 3 PASS`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`

### clean blind v60

- candidate commit: `51476c70f5e04925eb6aa354d5b51c0f47f880e9`
- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 FAIL`
- 合計: `23 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- 固定5群境界: `PASS`
- 診断: `solver omission ×2 secondary groups`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v60_qa.md`
- answer-bearingな不一致詳細はv60 QAにのみ保持する。

### clean blind v61

- candidate commit: `7d7983a6ab3ec20fc22b30eef6d46ca923791718`
- freshness: `PASS`
- 一次: `20 / 20 PASS`
- 二次: `3 / 5 FAIL`
- 合計: `23 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- 固定5群境界: `PASS`
- 診断: `solver omission ×2 secondary groups`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v61_qa.md`
- 教材不足は `0件`。教材修正は行わない。

### clean blind v62

- candidate commit: `5eef77beb36def0f6c237a75eb50ceb9bf617b3f`
- freshness: `PASS`
- 一次: `19 / 20 FAIL`
- 二次: `3 / 5 FAIL`
- 合計: `22 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- 固定5群境界: `PASS`
- 診断: `solver-side mismatch ×3 answer elements/groups`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v62_qa.md`
- 教材不足は `0件`。教材修正は行わない。
- answer-bearingな不一致詳細はv62 QAにのみ保持する。

### clean blind v63

- candidate commit: `7a4e75a619d6bb7436b3ea78e196a98a0b5f7826`
- QA commit: `919c364b6a687deb6f62ed47562125da0cadf639`
- freshness: `PASS`
- 一次: `19 / 20 FAIL`
- 二次: `4 / 5 FAIL`
- 合計: `23 / 25 FAIL`
- 教材導出: `25 / 25 PASS`
- 固定5群境界: `PASS`
- 診断: `solver-side mismatch ×2 answer elements/groups`
- QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v63_qa.md`
- 教材不足は `0件`。教材修正は行わない。
- answer-bearingな不一致詳細はv63 QAにのみ保持し、v64 fresh workerはcandidate固定前に開かない。

過去のv1〜v63 clean blind記録は各candidate/QAとGit履歴を正本とし、現行STATUSでは最新判定を保持する。

### 反映判断

- 教材・PDF・練習・PowerPoint修正: `0件`
- `SPEC.md`変更: `0件`
- `EXAM_ALIGNMENT_SPEC.md`変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- project exact blocker: `0件`

### 次工程

別fresh worker/contextによるclean blind v64。candidate固定前はanswer-bearing資料を開かず、question-only intakeと公式「問題」PDFだけで25答案要素を解く。R2二次はintakeの固定5群境界を維持する。candidate固定後に公式標準解答・教材と照合する。

現v63 worker/contextはcandidate固定後にanswer-bearing資料を参照済みのためv64を実施しない。worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V64_CURRENT_CONTEXT_FRESHNESS_INVALID`。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。