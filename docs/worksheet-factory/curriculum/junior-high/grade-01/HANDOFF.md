# 中学1年 数学 — HANDOFF

更新: 2026-08-28

## 今回完了

中学1年の次の4 checkpointを連続で実装・公開した。

1. `algebra-terms-coefficients` — 文字式の項・係数 — 3 variants / 3 PDFs
2. `combine-like-terms` — 同類項をまとめる — 3 variants / 3 PDFs
3. `algebra-add-sub` — 文字式の加減 — 3 variants / 3 PDFs
4. `algebra-mul-div` — 文字式の乗除 — 3 variants / 3 PDFs

各PDFは20問。今回新規は4技能 / 12PDF、中学1年累計は **12技能 / 36PDF**。

## 教科配置

現行の文部科学省「中学校学習指導要領」数学・第1学年の「数と式」に沿って、文字を用いた式、項・係数、同類項の整理、一次式の加減、数と文字の乗除を反復技能として配置した。

## 実装

- `scripts/publish_jh1_algebraic_expressions.py`
  - 項・係数: `ax + by + c` から指定文字の係数を答える。各variantでx/yを10問ずつ。
  - 同類項: 3つのx項の係数をまとめ、`□x` の係数を答える。
  - 文字式の加減: 2つの一次式の加法・減法を各10問。独立再計算後の標準化文字列を正答とする。
  - 文字式の乗除: 整数×単項式と単項式÷整数を各10問。除法は必ず係数が整数で割り切れる。
  - 全問題をdeterministic seedから再生成可能。
  - 保存済みanswerを信頼せず `independent_answer()` で再計算する。
- `tests/test_jh1_algebraic_expressions_publisher.py`
  - deterministic再生成
  - independent answer recomputation
  - 問題内重複、variant間差、既存catalogとのnormalized content hash衝突検査
  - x/y、加/減、乗/除の10/10分散
  - 2ページPDF
  - 通常整数の問題番号
  - 問題ページと同一配置への赤字解答
  - catalog validation / 冪等publish
- `.github/workflows/math-jh1-publish.yml`
  - 新publisher/testを既存中1publisher、共通Factory回帰、共有catalog writer concurrency guardと同じworkflowへ追加。

## 公開

- publisher commit: `fa8667bc1a28a6b9a39f23f53e0d49a136121bdd`
- test commit: `7126bdb8318d33907e2accd0ce110a48c036b320`
- workflow commit: `88925acad05fc35c8145f99487c8542c739b6dbb`
- publish commit: `0aae4136953d15e76d3dad31cd4b897f23f44acf`

公開commitには12PDFと12 catalog rowsが実際に追加されている。

## 次にやること

次の未完了は `式への代入`。

次runでは安全なら最大4 checkpointとして以下まで進める。

1. 式への代入
2. 一元一次方程式 基本
3. 移項だけの反復
4. かっこを含む一次方程式

同じFactory契約と共有catalog concurrency guardを維持する。
