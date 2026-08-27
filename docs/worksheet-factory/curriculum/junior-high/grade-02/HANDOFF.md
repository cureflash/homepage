# 中学2年 数学 — HANDOFF

更新: 2026-08-28

## 今回追加

中学2年の先頭4 checkpointを連続で実装・公開した。

1. `monomial-multiplication` — 単項式の乗法 — 3 variants / 3 PDFs
2. `monomial-division` — 単項式の除法 — 3 variants / 3 PDFs
3. `polynomial-addition` — 多項式の加法 — 3 variants / 3 PDFs
4. `polynomial-subtraction` — 多項式の減法 — 3 variants / 3 PDFs

各variantは20問。`scripts/publish_jh2_expression_operations.py` で deterministic seed から生成し、保存済みanswerを信頼せず `independent_answer()` で再計算する。

- 単項式の乗法: 係数を乗算し、同じ文字の指数を加算する。
- 単項式の除法: 係数は必ず割り切れるようにし、分子側の各指数を除数以上に制約して指数を減算する。
- 多項式の加法・減法: x項、y項、定数項を別々に再計算して標準形へ戻す。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数、PDFは2ページ、解答ページは同じ問題配置に赤字で答えを追加する。

## 検証・公開

- publisher: `scripts/publish_jh2_expression_operations.py`
- test: `tests/test_jh2_expression_operations_publisher.py`
- workflow: `.github/workflows/math-jh2-publish.yml`
- shared catalog concurrency group: `worksheet-catalog-publish-v1`

初回workflowではpublisher専用テストと共通Factoryテストまで通過したが、共有catalog writer監査が新しい `math-jh2-publish.yml` をexpected writer一覧に未登録として拒否した。これは共有catalog競合防止ガードが意図どおり動いたものなので、`tests/test_worksheet_catalog_writer_concurrency.py` にJH2 workflowを正式登録して再実行した。

再実行は全step success。

- successful workflow run: `33101526841` attempt 2
- publish commit: `f532ab79ec37fdd37372617583fe60f047733c00`

現在の中学2年公開範囲は **4 skills / 12 PDFs**。

## 次にやること

次の未完了技能 **「多項式×数」** から開始する。

その後、安全なら同じrunで次を順に進める。

1. 多項式×数
2. 式の四則混合
3. 式への代入
4. 連立方程式 加減法 基本

新単元へ入る際は現行MEXT配置を再確認し、deterministic seed、独立answer validation、duplicate/hash guard、2ページPDF、通常整数番号、同一配置＋赤字解答、catalog/site validation、共有catalog writer concurrency guardを維持する。
