# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-22

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜38は最終ゲートまで `PASS / completed`。完成数 `38 / 39`。

現在地は `topic_39_clean_blind_v47_pending / IN_PROGRESS`。active topicは `39 COSMOS 統合監視・SCADA・信頼性`。

## Topic 39 固定ゲート

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

## Topic 39 完了済み成果物

- 制作前EXAM_ALIGNMENT＋QA: `PASS`
- 解説source＋source QA: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF＋PDF QA: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source＋source QA: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF＋PDF QA: `PASS / PRACTICE_PDF_COMPLETE`
- PowerPoint＋render/content QA: `PASS / POWERPOINT_COMPLETE`
- 固定25答案要素の教材接続: `25 / 25 PASS`
- 系列SPEC固定13項目: `13 / 13 PASS`
- 系列SPEC計算・グラフ3種: `3 / 3 PASS`
- 一般SCADAモデルをCOSMOS実装と断定: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`

## clean blind履歴

- v1: candidate `cb034e4e121512844cf0333c6df49de84d7555e8` / 公式一致 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS`
- v2: candidate `0d2b169dff258124d088581b7690bfcdc063fc4f` / 公式一致 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS`
- v3: candidate `d7408b99b0287bdc21c034379eb70b969f9ae370` / freshness `PASS` / 公式一致 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v4: candidate `32aa4a98774f662eb01d02f29d71fe6ba287f26a` / freshness `PASS` / 公式一致 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v5: candidate `4ec9094da46b28a861a1af03fc57d72a4f363f87` / freshness `PASS` / 一次 `18 / 20` / 二次 `4 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v6: candidate `9f8a1260c334054eae18e124ff3a2722f75961b7` / freshness `PASS` / 一次 `20 / 20` / 二次 `4 / 5` / 合計 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `FAIL`
- v7: candidate `05a182424a027d47e2fc452aa8ca6a92d34a5dd8` / freshness `PASS` / 一次 `20 / 20` / 二次 `4 / 5` / 合計 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS`
- v8: candidate `0763c9055298cf54f853c79b0ed60da7439f2d20` / freshness `PASS` / 一次 `20 / 20` / 二次 `4 / 5` / 合計 `24 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS`
- v9 pre-attempt: 別worker/contextでfreshness不成立のためcandidate未作成。
- v9 actual: candidate `203bec75a792d541126e1863604eb35cddb59146` / freshness `PASS` / 一次 `19 / 20` / 二次 `4 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v10: candidate `2ec47a4b21c4f7cd9d89a5cfb5d919d6e399e5b0` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v11: candidate `1a038f86f340a0834ffaaa375d1e98da9a410455` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v12 pre-attempt: 別worker/contextでfreshness不成立のためcandidate未作成。
- v12 actual: candidate `2ed839295e292ccd7c5b520c5484e8b4e82bb7fe` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v13: candidate `e4cd3aca8f50143c7d19104cbfb58422ccae10b4` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v14 pre-attempt: 別worker/contextでfreshness不成立のためcandidate未作成。
- v14 actual: candidate `ef9cf2b5deed62c03a5de0636815a161320339af` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×3`
- v15: candidate `85db8a6cac8753bcaabe9eb3dc99515f4071e3e9` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2`
- v16: candidate `46e0bb622ce297352402fde037d479cd03e1d696` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2`
- v17 pre-attempt: 別worker/contextでcandidate固定前にTopic 39 answer-bearing情報を既読のためfreshness不成立。candidate未作成。
- v17 actual: candidate `d52dd566563912b8aa20114d2da4ec1b91adac04` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error + omission ×2`
- v18: candidate `86687a455b86d8a4c05c203299bcba5038cbe339` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error + omission ×3`
- v19 pre-attempt: 既存worker/contextでfreshness不成立のためcandidate未作成。
- v19 actual: candidate `e1c580c614b6e1da9db1b1e2c971b047988890f6` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error + omission ×3`
- v20: candidate `20ba1ceccff8966ceb2071c17d540776625b6569` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v21 pre-attempt: 本worker/contextはcandidate固定前にTopic 39 answer-bearing情報を既読のためfreshness不成立。candidate未作成。worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V21_CURRENT_CONTEXT_FRESHNESS_INVALID`。
- v21 actual: candidate `dcfeeb36e44644e594b0f05034267fc6f77cdaa4` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v22: candidate `a24d83c4a5293b6d26d3d31bd844a3b928aad5f9` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v23: candidate `21bb972c779ca30de94e1fe6e054dc668874541d` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v24: candidate `bb81b235267214b684de92d89365353e0b7b70d6` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v25: candidate `ecd4d4d30bc0fffc5182f229b369323aa98f7ca9` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v26: candidate `0b425690643de052d14f087b54953643f06b22ca` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v27: candidate `8321d05fe6fa53aad3ae03225b7b2df4bbaf519b` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v28: candidate `57d0062708c4b44e6fac68d856eb389374f13016` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v29: candidate `6c9b7f89c2c40a6d6cdfdab8a77efb0a7ae1acd8` / freshness `PASS` / 一次 `18 / 20` / 二次 `3 / 5` / 合計 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error + omission + nomenclature error ×4`
- v30: candidate `c9745020487885c6ac05db05ee8005fe2e059551` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission + nomenclature error ×2`
- v31: candidate `f2614f5629d12857a83529302bdc610dc9030d91` / freshness `PASS` / 一次 `19 / 20` / 二次 `2 / 5` / 合計 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver transcription error ×1 + solver omission ×3 groups + nomenclature error ×1 group`
- v32: candidate `bfb071d996311cd3b944a02a6010014d8e9078bb` / freshness `PASS` / 一次 `18 / 20` / 二次 `2 / 5` / 合計 `20 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2 primary + solver omission ×3 secondary groups + nomenclature error ×1 secondary group`
- v33: candidate `051f70215adbbdacba7127eb46d34a7b20bb5fd0` / freshness `PASS` / 一次 `18 / 20` / 二次 `3 / 5` / 合計 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2 primary + solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v34 pre-attempt: 本worker/contextはcandidate固定前にTopic 39 answer-bearing情報を既読のためfreshness不成立。candidate未作成。worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V34_CURRENT_CONTEXT_FRESHNESS_INVALID`。
- v34 actual: candidate `15a1b616fd851639c1651d2a296c5acf5d72335a` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×1 primary + solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v35: candidate `2c6fbc1764e0e57196d185cd026dce9c3758f723` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v36 pre-attempt: 本worker/contextはcandidate固定前にTopic 39 answer-bearing情報を既読のためfreshness不成立。candidate未作成。worker-local exact blocker: `TOPIC39_CLEAN_BLIND_V36_CURRENT_CONTEXT_FRESHNESS_INVALID`。
- v36 actual: candidate `22b38789daff20f0519d9667fa3bb515cf3a1a5f` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups`
- v37: candidate `3c9d5fc01011626367e852e669ca2aa4b7cca36c` / freshness `PASS` / 一次 `18 / 20` / 二次 `3 / 5` / 合計 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2 primary + solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v38: candidate `6d0a9c037c10001b56fc3e3fc0db94b4d6817597` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×1 primary + solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v39: candidate `054f3b18a18b5ddbcf001878987822c1199a0fc1` / freshness `PASS` / 一次 `18 / 20` / 二次 `3 / 5` / 合計 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×2 primary + solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v40: candidate `9dbc95a6fd1f7c36d11444f2d580d8239d24e33a` / freshness `PASS` / 一次 `19 / 20` / 二次 `3 / 5` / 合計 `22 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver error ×1 primary + solver omission ×2 secondary groups`
- v41: candidate `488091a502d52244a756828c2423e548075b063c` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v42: candidate `78b2368d3226799c52c5e69f7b5e3e8af90fc95c` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v43: candidate `9bf74ad27804126295e24e109b9a90469763628d` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v44: candidate `619a89a09d2041ae1d234c55986fd678cc3d6ec8` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v45: candidate `eac51733924f4763e639d59cea44d360b5a51a88` / freshness `PASS` / 一次 `20 / 20` / 二次 `3 / 5` / 合計 `23 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×2 secondary groups + nomenclature error ×1 secondary group`
- v46: candidate `93f32b6c24c56e15061cde48a634bd1934830c9f` / freshness `PASS` / 一次 `20 / 20` / 二次 `1 / 5` / 合計 `21 / 25 FAIL` / 教材導出 `25 / 25 PASS` / 固定5群境界 `PASS` / `solver omission ×4 secondary groups + nomenclature error ×1 secondary group`

v46 QA: `topics/39_cosmos_integrated_monitoring_scada_reliability/39_cosmos_integrated_monitoring_scada_reliability_clean_blind_v46_qa.md`。answer-bearingな不一致詳細はQAだけに保持し、本mandatory recordには書かない。

- 教材修正・再生成: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 系列SPEC固定13項目変更: `0件`
- 未確認COSMOS内部実装・数値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程

`TOPIC39_CLEAN_BLIND_V47`。別fresh worker/contextのみで実施する。

1. 最新main、上位仕様、系列SPEC、sanitized `STATUS.md` / `HANDOFF.md`、question-only intakeをreconcileする。
2. candidate固定前はv1〜v46 candidate/QA、公式標準解答、保存済み正答、Topic 39 answer-bearing教材・answer-bearing QAを開かない。
3. question-only intakeと公式「問題」PDFだけで固定25答案要素を解く。R2二次はintake記載の5群境界を維持し、分割し直さない。
4. candidateをcommitして固定した後にのみ、公式標準解答・既存教材と照合する。
5. `25 / 25`公式一致、`25 / 25`教材導出可能、固定5群境界維持を満たした場合だけ最終QAへ進める。

## 境界条件

- COSMOSの未公開内部構成、独自通信プロトコル、データ形式、監視周期、遠隔制御論理、装置単位の冗長方式、故障率、MTBF、MTTR、可用性実値を推測しない。
- 一般SCADAモデル、信頼性計算の仮定例は実設備仕様と明確に分離する。
- SCADA、遠隔制御、可用性という名称が固定過去問に直接出たとは主張しない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は既存の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。