# 小学6年 算数 — HANDOFF

更新: 2026-08-27

## 今回実装

第6学年の先頭4技能を1 batchとして実装した。

1. `fraction-times-integer` — 分数×整数
2. `fraction-times-fraction` — 分数×分数
3. `fraction-div-integer` — 分数÷整数
4. `fraction-div-fraction` — 分数÷分数

文部科学省の現行小学校学習指導要領解説・算数編で、第6学年に分数の乗法及び除法を扱い、整数や小数の乗除も分数の計算へまとめて扱うことを確認した。

`scripts/publish_grade6_fraction_first_four.py` は各技能3variant、各20問をdeterministic seedで生成する。`Fraction` による独立再計算、問題内・variant間・既存catalogとのnormalized hash衝突検査、2ページPDF、通常整数の問題番号、同一配置への赤字解答を実装した。

`tests/test_grade6_fraction_first_four_publisher.py` を追加し、決定性、独立解答、重複、PDF 2ページ、catalog整合性、冪等性、番号・赤字解答仕様を検証する。

`.github/workflows/grade6-core-publish.yml` を追加し、repository-wide catalog writer concurrency group `worksheet-catalog-publish-v1` に参加させた。catalog writer guard `tests/test_worksheet_catalog_writer_concurrency.py` の既知writer集合にもGrade 6 workflowを登録した。

## 現在の状態

publisher/test/workflow実装はmainへ入っているが、このhandoff更新時点では `Publish grade 6 worksheet checkpoint` の公開commitをまだ確認できていない。

したがって12PDFを公開済みとは扱わない。STATUSは `in_progress` のまま。

## 次にやること

最初に最新mainを確認し、Grade 6 workflowの成功と以下12PDF/catalog rowの公開を確認する。

- 4技能 × 3variant = 12PDF

公開成功が確認できた場合のみ、次の未完了技能 **帯分数を含む乗除** へ進む。workflow失敗の場合はログ上の失敗原因を修正し、未公開データを手作業でcatalogへ捏造しない。
