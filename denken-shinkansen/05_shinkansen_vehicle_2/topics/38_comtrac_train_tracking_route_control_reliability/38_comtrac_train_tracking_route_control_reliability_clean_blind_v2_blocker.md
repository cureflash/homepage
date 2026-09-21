# Topic 38 clean blind v2 readiness

更新日: 2026-09-21

## 判定

`READY / candidate not created in this run`

latest main、必須startup文書、直近コミット、既存worker成果をreconcileした。既存workerがremediation済み解説PDF・練習PDF・PowerPointと各QAを完成させ、fresh v2用のquestion-only intakeとsanitized `STATUS.md` / `HANDOFF.md` を用意していることを確認した。

ただし本runでは、直近コミット確認時にcommit diffを取得し、candidate固定前にv1/remediation由来のanswer-bearing情報が露出した。このためfreshness要件を満たすv2 candidateは本runでは作成しない。既存教材、固定問題、固定答案要素、EXAM_ALIGNMENT、QA、v1 candidateには変更を加えない。

## 構造QA

- `38_comtrac_train_tracking_route_control_reliability_clean_blind_intake.md`: question-only構成を確認
- v2 candidate path: 未作成（404）
- `STATUS.md` / `HANDOFF.md`: candidate固定前に直接答えを載せないsanitized状態を維持
- Topic 21 H26二次「機械・制御」問1(4): 既存の丸め差診断を維持し、一般式は変更しない

## 次runのfresh開始条件

candidate固定前に参照してよいもの:

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/05_shinkansen_vehicle_2/SPEC.md`
- sanitized `STATUS.md`
- sanitized `HANDOFF.md`
- 直近コミットのmessage / SHA / date等のmetadata
- その後、Topic 38のquestion-only intakeのみ

candidate固定前に参照しないもの:

- 直近commit diff
- 保存済み正答
- v1 candidate / v1 QA / remediation記録
- Topic 38 EXAM_ALIGNMENT QA
- 解説source / PDF / QA
- 練習source / PDF / QA
- PowerPoint / QA
- 公式標準解答

新規candidateは `38_comtrac_train_tracking_route_control_reliability_clean_blind_v2_candidate.md` として固定し、固定後は変更しない。

## 比較ゲート

candidate固定後にのみ照合を行う。

- 公式標準解答一致: 固定5問・25答案要素 `25 / 25` 必須
- 教材だけで導出可能: 固定5問・25答案要素 `25 / 25` 必須
- 二次: 直接対応 `0問` を維持し、件数合わせ `0件`
- SPEC固定9項目は変更しない
- 未確認COMTRAC実装・数値を真値化しない
- Topic 39を先取りしない

本runのv2 candidate作成: `0件`
exact blocker for this run: `candidate固定前のcommit diff取得によりanswer-bearing情報が露出し、fresh clean blind条件不成立`
next fresh run exact blocker: `0件`
