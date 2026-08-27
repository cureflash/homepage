# 中学1年 数学 — HANDOFF

更新: 2026-08-27

## 今回完了

中学1年の次の4 checkpointを連続で実装・公開した。

1. `signed-mixed-four-operations` — 正負の数の四則混合 — 3 variants / 3 PDFs
2. `signed-parentheses-powers` — かっこ・累乗を含む計算 — 3 variants / 3 PDFs
3. `prime-identification` — 素数判定の基礎 — 3 variants / 3 PDFs
4. `prime-factorization` — 素因数分解 — 3 variants / 3 PDFs

各PDFは20問。

## 実装

- `scripts/publish_jh1_signed_mixed_powers.py`
  - 四則混合は乗除優先と整数除法を機械的に保証する。
  - かっこ・累乗は2乗・3乗、負の数、かっこを組み合わせ、保存済みanswerとは独立に再計算する。
- `scripts/publish_jh1_primes_factorization.py`
  - 素数判定は各variantで素数10問・合成数10問。
  - 素因数分解は2〜300の範囲で合成数を生成し、独立factorizationで素因数がすべて素数かつ積が元の数に戻ることを検証する。
- `tests/test_jh1_mixed_primes_publishers.py`
  - deterministic seed再生成
  - independent answer recomputation
  - 問題内重複、variant間差、既存catalogとのnormalized content hash衝突検査
  - 素数/合成数の10/10分散
  - 素因数分解の積復元
  - 2ページPDF
  - 通常整数の問題番号
  - 問題ページと同一配置への赤字解答
  - 冪等publish
- `.github/workflows/math-jh1-publish.yml` に新publisher/testを追加し、既存中1publisher、共通Factory回帰、共有catalog writer concurrency guardと同一workflowで検証する。

## 教科配置

現行MEXT中学校学習指導要領の第1学年「数と式」に沿って、正負の数の計算の発展と、自然数を素数の積として表す学習を配置した。

## 公開

- workflow組み込み commit: `7f70202c714dec751330cc1ce0e5bde5bbe2fd6e`
- publish commit: `6110fa7f6d8104c9c4c5b664a2996e452337cfc4`
- 今回新規: 4技能 / 12PDF
- 中学1年累計: 8技能 / 24PDF

## 次にやること

次の未完了は `文字式の項・係数の確認`。

次runでは安全なら最大4 checkpointとして以下まで進める。

1. 文字式の項・係数の確認
2. 同類項をまとめる
3. 文字式の加減
4. 文字式の乗除

同じFactory契約と共有catalog concurrency guardを維持する。
