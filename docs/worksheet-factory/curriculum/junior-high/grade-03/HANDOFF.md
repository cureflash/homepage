# 中学3年 数学 — HANDOFF

更新: 2026-08-28

## 今回完了

次の4 checkpointを連続で実装・公開した。

1. `difference-of-squares-expansion` — `(a+b)(a-b)` の展開 — 3 variants / 3 PDFs
2. `factor-common-factor` — 共通因数でくくる因数分解 — 3 variants / 3 PDFs
3. `factor-x2-sum-product` — `x^2+(a+b)x+ab` 型の因数分解 — 3 variants / 3 PDFs
4. `factor-square-formula` — 平方公式型の因数分解 — 3 variants / 3 PDFs

現行MEXTの中学校数学第3学年「数と式」で式の展開・因数分解を扱う配置を再確認した。

## 実装・検証

- publisher: `scripts/publish_jh3_factorization_basics.py`
- test: `tests/test_jh3_factorization_basics_publisher.py`
- workflow: `.github/workflows/math-jh3-publish.yml`
- repository-wide catalog writer concurrency group `worksheet-catalog-publish-v1` を維持。
- deterministic seed、独立係数再計算、因数分解結果の逆展開、問題内重複、variant間差、既存catalog content hash非衝突、PDF 2ページ、通常整数の問題番号、同一配置＋赤字解答、catalog validation、共通Factory回帰をworkflowで検証。
- publish commit: `4f77b081a34bfe50fdcc0c86b1bcaab9f4eecb4c`

## 現在地

中学3年は **8技能・24PDF** 公開済み。

## 次の開始点

`PLAN.md` の次の未完了項目 **「和と差の積型の因数分解」** から開始する。

安全なら次の4 checkpointを連続処理する。

1. 和と差の積型の因数分解
2. 展開・因数分解混合100問系
3. 平方根の基本値
4. 根号の簡単化

同じ deterministic generator → independent validator → duplicate/hash guard → PDF → catalog/site validation 契約を維持する。平方根へ入る際は、現行MEXTの第3学年配置を改めて確認してから実装する。
