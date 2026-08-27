# 中学2年 数学 — HANDOFF

更新: 2026-08-28

## 今回追加

中学2年の次の4 checkpointを連続で実装・公開した。

1. `simultaneous-equations-fractions` — 分数を含む連立方程式 — 3 variants / 3 PDFs
2. `linear-function-substitution` — 一次関数 xからyを求める代入 — 3 variants / 3 PDFs
3. `linear-function-rate-from-two-points` — 2点から変化の割合 — 3 variants / 3 PDFs
4. `linear-function-from-slope-intercept` — 傾きと切片から式を作る — 3 variants / 3 PDFs

各variantは20問。MEXT「中学校学習指導要領（平成29年告示）解説 数学編」で、第2学年に連立二元一次方程式と一次関数が配置されていることを確認した。

- 分数連立は `Fraction` で係数・定数を保持し、determinantでx/yを独立再計算する。
- 一次関数代入は `y=ax+b` へ指定xを代入し、`Fraction` で厳密にyを求める。
- 2点から変化の割合は `(y2-y1)/(x2-x1)` を独立再計算する。
- 傾き・切片から式を作る問題は、与えられた傾きmと切片bから `y=mx+b` を独立に再構成する。
- deterministic seed、問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数、PDFは2ページ、解答ページは同じ問題配置に赤字で答えを追加する。

## 検証・公開

- publishers:
  - `scripts/publish_jh2_fractional_simultaneous_equations.py`
  - `scripts/publish_jh2_linear_functions.py`
- test: `tests/test_jh2_fractional_and_linear_functions_publisher.py`
- workflow: `.github/workflows/math-jh2-publish.yml`
- shared catalog concurrency group: `worksheet-catalog-publish-v1`

workflowは既存JH2 publisher/test、新publisher/test、`tests/test_worksheet_factory.py`、`tests/test_worksheet_catalog_writer_concurrency.py` を通過した後に12PDFを公開した。

- publish commit: `b9061e8f01ef0f91709a8a7744ce3a70c352b09b`

現在の中学2年公開範囲は **16 skills / 48 PDFs**。

## 次にやること

次の未完了技能 **「2点から一次関数の式を求める数値練習」** から開始する。

引き続きdeterministic seed、独立answer validation、duplicate/hash guard、2ページPDF、通常整数番号、同一配置＋赤字解答、catalog/site validation、共有catalog writer concurrency guardを維持する。
