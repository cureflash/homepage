# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜37は最終QAまで `PASS / completed`。完成数 `37 / 39`。

現在地は `topic_38_clean_blind_v3_failed`。last completed topicは `37 ATC③ 速度制御系`、active topicは `38 COMTRAC 列車追跡・進路制御・高信頼化`。

## Topic 38 現在地

remediation後のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPointと各QAは `PASS`。固定5問は変更していない。

- 一次: `5問 / 25答案要素`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- v1/v2 candidate変更: `0件`

## 今回の1段階

latest main、必須startup文書、直近コミットmetadataをreconcileした。candidate固定前に直近commit diffやanswer-bearing資料を開かず、question-only intakeと固定5問の公式「問題」PDFだけからfresh clean blind v3 candidateを固定した。

- candidate commit: `888db60d6bf3f0d7a9b168a946ee654703073828`
- freshness: `PASS`
- candidate固定後修正: `0件`
- 公式標準解答一致: `23 / 25 FAIL`
- 不一致位置: R2一次「機械」問8(3)、H23一次「機械」問8(5)の2要素
- 教材だけで導出可能: `25 / 25 PASS`
- 教材欠落: `0件`
- 固定5問変更: `0件`
- Topic 21一般式変更: `0件`

QA正本: `topics/38_comtrac_train_tracking_route_control_reliability/38_comtrac_train_tracking_route_control_reliability_clean_blind_v3_qa.md`

品質ゲートの公式一致 `25 / 25` を満たさないため、Topic 38はcompletedにしない。教材側は `25 / 25` 導出可能なので再remediationしない。

## 次工程

本workerはcandidate固定後に公式標準解答・教材を参照済みなのでfresh clean blind v4を実行しない。教材remediation・固定EXAM_ALIGNMENT変更・Topic 39先取りもしない。

clean blind v4を行えるのは、candidate固定前に以下を参照していない別fresh workerだけ。

- v3 candidate / v3 QA
- v2 candidate / v2 QA
- 保存済み正答
- v1 candidate/QA/remediation
- EXAM_ALIGNMENT QA
- 解説/練習source/PDF/QA
- PowerPoint/QA
- 公式標準解答
- answer-bearing commit diff

fresh workerは `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、本`HANDOFF.md`、`STATUS.md`、直近commit metadata、question-only intake、公式「問題」PDFだけをcandidate固定前に用いる。v4 candidateは別ファイルとして固定し、固定後にだけ公式解答・教材へ照合する。

別workerがv4または他の有効なTopic 38成果をmainへ反映した場合、本workerはそれをreconcileして次の安全な工程へ進む。

## 境界条件

- 未確認のCOMTRAC内部構成、列車追跡アルゴリズム、進路制御論理、インターロック実装、処理周期、冗長方式、故障率、MTBF、MTTR、可用性値を真値化しない。
- JR東海第二総合指令所の存在から装置単位の冗長方式・切替方式を推測しない。
- 教材用状態機械・Boolean式・可用性計算の仮定例は実装値と明確に分離する。
- Topic 39の内容を先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` は `π=3.14` 相当の丸め差診断を維持し、一般式 `P=Tω`、`ω=2πN/60` を変更しない。

exact blocker: `TOPIC38_CLEAN_BLIND_V3_OFFICIAL_MATCH_23_OF_25` — fresh v3の公式標準解答一致が必須 `25 / 25` に2要素不足。本workerはanswer-bearing資料参照済みのため、自分でfresh v4を再試行しない。
