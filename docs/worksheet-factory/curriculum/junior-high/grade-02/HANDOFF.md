# 中学2年 数学 — HANDOFF

更新: 2026-08-28

## 完了

中学2年の計画済み17技能をすべて実装・公開した。最終checkpointは次の1技能。

- `linear-function-equation-from-two-points` — 2点から一次関数の式を求める — 3 variants / 3 PDFs

各variantは20問。2点 `(x1,y1)`, `(x2,y2)` から

- `m = (y2-y1)/(x2-x1)`
- `b = y1 - m*x1`

を `Fraction` で独立再計算し、`y=mx+b` を再構成する。生成済みanswerを信頼せず、さらに得られた式へ2点を代入して両方を通ることを専用testで確認する。

MEXTの現行中学校数学では、第2学年で一次関数を扱うため、この技能は中2範囲に置く。

## 検証・公開

- publisher: `scripts/publish_jh2_linear_functions.py`
- test: `tests/test_jh2_fractional_and_linear_functions_publisher.py`
- workflow: `.github/workflows/math-jh2-publish.yml`
- shared catalog concurrency group: `worksheet-catalog-publish-v1`
- publish commit: `befc3caee100a3dd345a4afd080f4d068fd1bac1`

公開commitで以下3PDFとcatalog rowを確認済み。

- `jh2-linear-function-equation-from-two-points-01.pdf`
- `jh2-linear-function-equation-from-two-points-02.pdf`
- `jh2-linear-function-equation-from-two-points-03.pdf`

中学2年の最終公開範囲は **17 skills / 51 PDFs**。

deterministic seed、独立answer validation、problem/variant/content-hash duplicate guard、2ページPDF、通常整数番号、同一配置＋赤字解答、catalog validation、共通Factory回帰、共有catalog writer concurrency guardを維持している。

## 次回

中学2年は `done`。次回workerは中学3年をactive gradeとして `docs/worksheet-factory/curriculum/junior-high/grade-03/PLAN.md` の先頭から開始する。
