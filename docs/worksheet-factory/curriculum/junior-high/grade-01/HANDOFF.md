# 中学1年 数学 — HANDOFF

更新: 2026-08-27

## 今回完了

中学1年の先頭4 checkpointを連続で実装・公開した。

1. `signed-addition` — 正負の数の加法 — 3 variants / 3 PDFs
2. `signed-subtraction` — 正負の数の減法 — 3 variants / 3 PDFs
3. `signed-multiplication` — 正負の数の乗法 — 3 variants / 3 PDFs
4. `signed-division` — 正負の数の除法 — 3 variants / 3 PDFs

各PDFは20問。除法は商が整数になる問題だけを生成する。

## 検証契約

- deterministic seed再生成
- 保存済みanswerに依存しない `independent_answer()` 再計算
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突検査
- 符号パターンが単一に偏らないこと
- 除法の0除算禁止・整数商条件
- 2ページPDF
- 通常整数の問題番号
- 問題ページと同一配置に赤字解答
- catalog validation
- 共通Factory回帰
- 共有catalog writer concurrency guard

`.github/workflows/math-jh1-publish.yml` は共有catalog writer group `worksheet-catalog-publish-v1` を使用する。

## 公開

- publisher: `scripts/publish_jh1_signed_four_operations.py`
- dedicated test: `tests/test_jh1_signed_four_operations_publisher.py`
- publish commit: `f3d0fdc194157e853a9ba04b2cb461bfc59da51e`
- 新規公開: 4技能 / 12PDF

## 教科配置

現行MEXT中学校数学第1学年「A 数と式」で、数を正の数・負の数まで拡張し、その四則計算を扱うことを確認した。

## 次にやること

次の未完了は `正負の数の四則混合`。

次runでは安全なら最大4 checkpointとして以下まで進める。

1. 正負の数の四則混合
2. かっこ・累乗を含む計算
3. 素数判定の基礎
4. 素因数分解

同じFactory契約と共有catalog concurrency guardを維持する。
