# Topic 38 clean blind v2 readiness

更新日: 2026-09-21

## 判定

`READY / candidate not created in this run`

本runは `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、当該系列`SPEC.md` とGitHub現状を確認した後、必須startup文書に残っていたanswer-bearing情報をcandidate固定前に読んでいる。このためfreshness要件を満たすv2 candidateは本runでは作成しない。

品質ゲートを維持するため、`STATUS.md` と `HANDOFF.md` からv1診断・remediationのanswer-bearing詳細を隔離した。既存の固定問題、固定答案要素、EXAM_ALIGNMENT、教材成果物、QA、v1 candidateには変更を加えていない。

## 次runのfresh開始条件

candidate固定前に参照してよいもの:

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/05_shinkansen_vehicle_2/SPEC.md`
- sanitization後の `STATUS.md`
- sanitization後の `HANDOFF.md`
- その後、Topic 38のquestion-only intakeのみ

candidate固定前に参照しないもの:

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
next fresh run exact blocker: `0件`
