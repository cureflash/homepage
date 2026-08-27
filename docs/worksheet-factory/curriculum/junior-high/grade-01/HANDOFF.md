# 中学1年 数学 — HANDOFF

更新: 2026-08-28

## 今回完了

中学1年の次の4 checkpointを連続で実装・公開した。

1. `substitution` — 式への代入 — 3 variants / 3 PDFs
2. `linear-equation-basic` — 一元一次方程式 基本 — 3 variants / 3 PDFs
3. `linear-equation-transposition` — 移項だけの反復 — 3 variants / 3 PDFs
4. `linear-equation-parentheses` — かっこを含む一次方程式 — 3 variants / 3 PDFs

各PDFは20問。今回新規は4技能 / 12PDF、中学1年累計は **16技能 / 48PDF**。

## 教科配置

現行の文部科学省「中学校学習指導要領」数学・第1学年の「数と式」に沿って、文字式への数の代入と一元一次方程式の基本計算を反復技能として配置した。

## 実装

- `scripts/publish_jh1_substitution_linear_equations.py`
  - 式への代入: `ax+b` に整数 `x` を代入して数値を求める。
  - 一元一次方程式 基本: `ax+b=c` を整数解になるよう生成する。
  - 移項だけの反復: `x+b=c` を反復する。
  - かっこ付き一次方程式: `a(x+b)=c` を整数解になるよう生成する。
  - 全問題をdeterministic seedから再生成可能。
  - 保存済みanswerを信頼せず `independent_answer()` で再計算する。
- `tests/test_jh1_substitution_linear_equations_publisher.py`
  - deterministic再生成
  - independent answer recomputation
  - 問題内重複、variant間差、既存catalogとのnormalized content hash衝突検査
  - 2ページPDF
  - 通常整数の問題番号
  - 問題ページと同一配置への赤字解答
  - catalog validation / 冪等publish
- `.github/workflows/math-jh1-publish.yml`
  - 新publisher/testを既存中1publisher、共通Factory回帰、共有catalog writer concurrency guardと同じworkflowへ追加。

## 検証・公開

- publisher commit: `f069a66fb468158bac404548940377358c759381`
- test commit: `077c6673c6b0bcf66cac9807a8a2736906868087`
- workflow commit: `5b45dfccc4cd8835c058992a55475bbb9858b320`
- workflow run: `33091396085` — publish job success
- publish commit: `db31430acdf34c30bf3d7171e00af9bdd0d4de7e`

公開commitには12PDFと12 catalog rowsが実際に追加されている。

## 次にやること

次の未完了は `小数を含む一次方程式`。

次runでは安全なら最大4 checkpointとして以下まで進める。

1. 小数を含む一次方程式
2. 分数を含む一次方程式
3. 比例式型の方程式
4. 比例・反比例の式への代入

同じFactory契約と共有catalog concurrency guardを維持する。
