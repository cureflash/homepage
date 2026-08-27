# 小学6年 算数 — HANDOFF

更新: 2026-08-27

## 公開済み

小学6年は **8技能・24PDF** まで公開済み。

先頭4技能:

1. `fraction-times-integer` — 分数×整数
2. `fraction-times-fraction` — 分数×分数
3. `fraction-div-integer` — 分数÷整数
4. `fraction-div-fraction` — 分数÷分数

公開commit: `3949839d4ff31a62f6438a39d4694c3fccbed871`

今回の4 checkpoint:

5. `mixed-number-mul-div` — 帯分数を含む乗除
6. `fraction-decimal-mixed` — 分数・小数混合計算
7. `fraction-four-operations` — 分数四則混合
8. `simplify-ratio` — 比を簡単にする

公開commit: `f3fae25c04e32394d397a2f2f57615e1a35d4f03`

## 範囲確認

文部科学省の現行小学校学習指導要領解説・算数編を確認した。

- 第6学年で分数の乗法・除法を扱う。
- 整数や小数の乗法・除法を分数の場合の計算にまとめることも扱う。
- 帯分数を含む計算は児童の実態に応じて扱い、過度に複雑な計算にはしない。
- 第6学年の「比」で比の意味、等しい比、比の値を扱う。

## 実装・検証

`scripts/publish_grade6_fraction_ratio_next_four.py` を追加した。各技能3variant、各20問をdeterministic seedで生成する。

- 分数系は `Fraction` から保存済みanswerに依存せず独立再計算する。
- 比を簡単にする問題は `gcd` を独立計算し、互いに素の整数比まで約する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 2ページPDF、通常整数の問題番号、2ページ目の同一配置＋赤字解答を維持する。
- `tests/test_grade6_fraction_ratio_next_four_publisher.py` で決定性、独立解答、重複、PDF、catalog、冪等性、番号・赤字解答を検証する。
- Grade 6 workflowは先頭4技能と今回4技能の両publisher/test、共通Factory test、catalog-writer concurrency guardを実行する。
- shared catalog writer concurrency group `worksheet-catalog-publish-v1` を維持する。

## 次にやること

次の未完了技能 **比の値** から再開する。

その後の順序はPLANどおり:

1. 比の値
2. 比例式の欠損値計算
3. 文字を使った簡単な式への代入
4. 速さ・時間・道のりの公式代入型計算

1 run最大4 checkpointを維持し、各技能でMEXT範囲確認、deterministic generation、独立answer validation、duplicate/hash検査、PDF/catalog/site validation、Grade 6回帰を通してから公開する。
