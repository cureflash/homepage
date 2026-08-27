# 中学2年 数学 — HANDOFF

更新: 2026-08-28

## 今回追加

中学2年の次の4 checkpointを連続で実装・公開した。

1. `polynomial-times-number` — 多項式×数 — 3 variants / 3 PDFs
2. `expression-four-operations` — 式の四則混合 — 3 variants / 3 PDFs
3. `expression-substitution` — 式への代入 — 3 variants / 3 PDFs
4. `simultaneous-equations-elimination-basic` — 連立方程式 加減法 基本 — 3 variants / 3 PDFs

各variantは20問。`scripts/publish_jh2_expression_equation_basics.py` で deterministic seed から生成し、保存済みanswerを信頼せず `independent_answer()` で再計算する。

- 多項式×数: x項・y項・定数項へ同じ整数を分配し、標準形へ戻す。
- 式の四則混合: 加法→乗法→整数で割り切れる除法→減法を1式に含め、係数を構造化データから独立再計算する。
- 式への代入: `ax + by + c` に整数x/yを代入し数値を再計算する。
- 連立方程式 加減法 基本: 整数解x/yを先に選び、xまたはyの係数が既に同じ絶対値になる2式を生成する。validatorは行列式からx/yを独立に解き直し、元の2式への代入一致も専用testで確認する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 問題番号は通常整数、PDFは2ページ、解答ページは同じ問題配置に赤字で答えを追加する。

連立方程式は現行の文部科学省・中学校学習指導要領の第2学年「数と式」の配置を確認してから追加した。

## 検証・公開

- publisher: `scripts/publish_jh2_expression_equation_basics.py`
- test: `tests/test_jh2_expression_equation_basics_publisher.py`
- workflow: `.github/workflows/math-jh2-publish.yml`
- shared catalog concurrency group: `worksheet-catalog-publish-v1`

workflowでは既存JH2 publisher、新publisher、双方の専用test、`tests/test_worksheet_factory.py`、`tests/test_worksheet_catalog_writer_concurrency.py` を実行し、全step success。

- successful workflow run: `33106457275`
- publish commit: `9e1208009d4caeac07f8f7fa565c06c714eaa4a8`

現在の中学2年公開範囲は **8 skills / 24 PDFs**。

## 次にやること

次の未完了技能 **「連立方程式 代入法 基本」** から開始する。

その後、安全なら同じrunで次を順に進める。

1. 代入法 基本
2. 係数をそろえる連立方程式
3. かっこを含む連立方程式
4. 小数を含む連立方程式

引き続きdeterministic seed、独立answer validation、duplicate/hash guard、2ページPDF、通常整数番号、同一配置＋赤字解答、catalog/site validation、共有catalog writer concurrency guardを維持する。
