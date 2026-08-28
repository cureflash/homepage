# 中学3年 数学 — HANDOFF

更新: 2026-08-28

## 今回完了

先頭4 checkpointを連続で実装・公開した。

1. `monomial-times-polynomial` — 単項式×多項式の展開 — 3 variants / 3 PDFs
2. `polynomial-times-polynomial` — 多項式×多項式の展開 — 3 variants / 3 PDFs
3. `x-plus-a-x-plus-b` — `(x+a)(x+b)` 型の展開 — 3 variants / 3 PDFs
4. `square-formula-expansion` — `(a+b)^2 / (a-b)^2` の展開 — 3 variants / 3 PDFs

現行MEXTの中学校数学第3学年「数と式」で式の展開・因数分解を扱う配置を確認した。

## 実装・検証

- publisher: `scripts/publish_jh3_expansion_basics.py`
- test: `tests/test_jh3_expansion_basics_publisher.py`
- workflow: `.github/workflows/math-jh3-publish.yml`
- repository-wide catalog writer concurrency group `worksheet-catalog-publish-v1` にJH3 workflowを登録済み。
- deterministic seed、独立係数再計算、問題内重複、variant間差、既存catalog content hash非衝突、PDF 2ページ、通常整数の問題番号、同一配置＋赤字解答、catalog validation、共通Factory回帰をworkflowで検証。
- publish commit: `9bf00474bc824108b598019abfffc35813be5689`

## 現在地

中学3年は **4技能・12PDF** 公開済み。

## 次の開始点

`PLAN.md` の次の未完了項目 **`(a+b)(a-b)`** から開始する。

安全なら次の4 checkpointを連続処理する。

1. `(a+b)(a-b)`
2. 共通因数でくくる因数分解
3. `x^2+(a+b)x+ab` 型
4. 平方公式型の因数分解

同じ deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation 契約を維持する。
