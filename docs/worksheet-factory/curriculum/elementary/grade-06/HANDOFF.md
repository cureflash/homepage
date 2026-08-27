# 小学6年 算数 — HANDOFF

更新: 2026-08-27

## 公開済み

小学6年は **12技能・36PDF** まで公開済み。

既存8技能:

1. `fraction-times-integer` — 分数×整数
2. `fraction-times-fraction` — 分数×分数
3. `fraction-div-integer` — 分数÷整数
4. `fraction-div-fraction` — 分数÷分数
5. `mixed-number-mul-div` — 帯分数を含む乗除
6. `fraction-decimal-mixed` — 分数・小数混合計算
7. `fraction-four-operations` — 分数四則混合
8. `simplify-ratio` — 比を簡単にする

今回の4 checkpoint:

9. `ratio-value` — 比の値
10. `proportion-missing-value` — 比例式の欠損値計算
11. `variable-substitution` — 文字式への代入
12. `speed-distance-time-substitution` — 速さ・時間・道のりの公式代入

今回の公開commit: `ee9c3b1094c20f057908b1465494efc4da7588e4`

## 範囲確認

文部科学省の現行「小学校学習指導要領（平成29年告示）解説 算数編」を再確認した。

- 第6学年C（2）で比の意味・表し方・等しい比を扱い、用語として「比の値」が明示されている。
- 第6学年では `a`, `x` などの文字を用いた式を扱い、数を当てはめて調べる活動を通して文字の使用に慣れることが示されている。
- 第6学年で速さを理解し、求めることが学習内容に含まれる。

## 実装・検証

`scripts/publish_grade6_ratio_algebra_speed_four.py` を追加し、4技能×3variant、各20問をdeterministic seedで生成する。

- 比の値は整数比 `a:b` を `Fraction(a,b)` で独立再計算する。
- 比例式 `a:b=c:□` は等しい比になる整数scaleを生成し、`a×□ = b×c` を独立検証する。
- 文字式への代入は4種の簡単な式patternを使い、保存済みanswerに依存せず式を再評価する。
- 速さ・時間・道のりは `道のり=速さ×時間` の関係から3対象を独立再計算し、整数で一意に解ける問題だけ生成する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash衝突を検査する。
- 2ページPDF、通常整数の問題番号、2ページ目の同一配置＋赤字解答を維持する。
- `tests/test_grade6_ratio_algebra_speed_four_publisher.py` で決定性、独立解答、関係式整合性、重複、PDF、catalog、冪等性、番号・赤字解答を検証する。
- Grade 6 workflowは既存2 publisherと今回publisher、全Grade 6 publisher test、共通Factory test、catalog-writer concurrency guardを通した後だけcatalog/PDFを公開する。
- shared catalog writer concurrency group `worksheet-catalog-publish-v1` を維持する。

## 次にやること

PLANの残りは3項目。

1. 単位換算を含む数値練習
2. 小学校6年間の四則総復習
3. 5分間計算チャレンジ型の総合セット

次runでは同一active gradeのまま最大3 checkpointを進め、小6完了条件を満たしたらSTATUSを `done` にする。各checkpointでMEXT範囲確認、deterministic generation、独立answer validation、duplicate/hash検査、PDF/catalog/site validation、Grade 6回帰を維持する。
