# STATUS - 新幹線車両・電験二種

更新日: 2026-09-22

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `38 / 39`
- current_status: `topic_39_clean_blind_v17_blocked / BLOCKED`
- last_completed_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- active_topic: `39 COSMOS 統合監視・SCADA・信頼性`
- next_start: 別fresh worker/contextでclean blind v17を実施する。candidate固定前はquestion-only intakeと公式「問題」PDFだけを用い、R2二次はintake記載の固定5群境界を維持する。

Topic 01〜38は `PASS / completed`。完成数は `38 / 39`。

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

判定: `PASS / completed`

- EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint＋各QA: `PASS / REMEDIATED`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- clean blind v9: 公式標準解答一致 `25 / 25 PASS`、教材だけで導出可能 `25 / 25 PASS`
- exact blocker: `0件 / PASS`

## Topic 39 COSMOS 統合監視・SCADA・信頼性

判定: `BLOCKED / CLEAN_BLIND_V17_FRESHNESS_INVALID`

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

### clean blind履歴

- v1: candidate `cb034e4e121512844cf0333c6df49de84d7555e8` / 公式一致 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / `solver error`
- v2: candidate `0d2b169dff258124d088581b7690bfcdc063fc4f` / 公式一致 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / `solver error`
- v3: candidate `d7408b99b0287bdc21c034379eb70b969f9ae370` / freshness `PASS` / 公式一致 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v4: candidate `32aa4a98774f662eb01d02f29d71fe6ba287f26a` / freshness `PASS` / 公式一致 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v5: candidate `4ec9094da46b28a861a1af03fc57d72a4f363f87` / freshness `PASS` / 一次 `18 / 20` / 二次 `4 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v6: candidate `9f8a1260c334054eae18e124ff3a2722f75961b7` / freshness `PASS` / 一次 `20 / 20` / 二次 `4 / 5` / 合計 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v7: candidate `05a182424a027d47e2fc452aa8ca6a92d34a5dd8` / freshness `PASS` / 一次 `20 / 20` / 二次 `4 / 5` / 合計 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error`
- v8: candidate `0763c9055298cf54f853c79b0ed60da7439f2d20` / freshness `PASS` / 一次 `20 / 20` / 二次 `4 / 5` / 合計 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error`
- v9 pre-attempt: 別worker/contextでfreshness不成立のためcandidate未作成。worker-local blockerのみ記録。
- v9 actual: candidate `203bec75a792d541126e1863604eb35cddb59146` / freshness `PASS` / 一次 `19 / 20` / 二次 `4 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v10: candidate `2ec47a4b21c4f7cd9d89a5cfb5d919d6e399e5b0` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v11: candidate `1a038f86f340a0834ffaaa375d1e98da9a410455` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v12 pre-attempt: 別worker/contextでfreshness不成立のためcandidate未作成。worker-local blockerのみ記録。
- v12 actual: candidate `2ed839295e292ccd7c5b520c5484e8b4e82bb7fe` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v13: candidate `e4cd3aca8f50143c7d19104cbfb58422ccae10b4` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v14 pre-attempt: 別worker/contextでfreshness不成立のためcandidate未作成。worker-local blockerのみ記録。
- v14 actual: candidate `ef9cf2b5deed62c03a5de0636815a161320339af` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×3`
- v15: candidate `85db8a6cac8753bcaabe9eb3dc99515f4071e3e9` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v16: candidate `46e0bb622ce297352402fde037d479cd03e1d696` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2`
- v17 pre-attempt: 現worker/contextでcandidate固定前にTopic 39 answer-bearing情報を既読のためfreshness不成立。candidate未作成。

v16 QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v16_qa.md`

v16のanswer-bearingな不一致詳細はv16 QAにのみ保持し、mandatory recordには集計と診断だけを残す。

- 教材・PDF・練習・PowerPoint修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `TOPIC39_CLEAN_BLIND_V17_CURRENT_CONTEXT_FRESHNESS_INVALID`

### 次工程

別fresh worker/contextによるclean blind v17。candidate固定前はanswer-bearing資料を開かず、question-only intakeと公式「問題」PDFだけで25答案要素を解く。R2二次はintakeの固定5群境界を維持する。candidate固定後に公式標準解答・教材と照合する。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。