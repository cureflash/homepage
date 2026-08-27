# 小学4年 算数 — HANDOFF

更新: 2026-08-27
状態: done

## 今回完了したcheckpoint

小学4年の残り3技能を連続checkpointとして実装・検証・公開し、小4計画を完了した。

### 1. 億・兆の位取り

- publisher: `scripts/publish_grade4_large_number_place_value.py`
- skill: `large-number-place-value`
- 3 variant / 3 PDF / 各20問
- seeds: `8907 / 9008 / 9109`
- 「指定された位の数字」と「兆・億・万・一の4桁まとまりから整数を構成」の2形式を混在させた。
- 保存済みanswerを参照しない `independent_answer()` で再計算する。
- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」第4学年 A(1) で億・兆の単位と十進位取り記数法を再確認した。

### 2. 概数・四捨五入

- publisher: `scripts/publish_grade4_rounding.py`
- skill: `rounding-estimation`
- 3 variant / 3 PDF / 各20問
- seeds: `9201 / 9302 / 9403`
- 十・百・千・一万・十万の位までの概数を均等に出題する。
- 四捨五入は整数演算で独立再計算し、指定位の倍数になることを検証する。
- 文部科学省同解説の第4学年「概数」「四捨五入」の範囲を再確認した。

### 3. 学年総復習計算

- publisher: `scripts/publish_grade4_review.py`
- skill: `grade4-review`
- 3 variant / 3 PDF / 各20問
- seeds: `9504 / 9605 / 9706`
- 大きな整数の加減、2桁の除数による整数除法、小数加法、四則混合を各4問ずつ含む。
- 既存のfocused worksheetをそのまま複製せず、新seedで総復習用問題集合を生成する。

## 検証

以下をGrade 4 workflowへ組み込み、公開前に再実行した。

- 3 publisherの決定的seed再生成
- 保存済みanswerを見ない独立解答再計算
- 問題内重複検査
- variant間差
- 既存catalogとのnormalized content hash非衝突
- PDF 2ページ構造
- 問題番号 `1`, `2`, ... の通常整数表記
- 解答ページで同一問題配置＋赤字解答
- catalog validation
- publisher冪等性
- 既存Grade 4 publisher/test全回帰
- `tests/test_worksheet_factory.py`

追加test:

- `tests/test_grade4_large_number_place_value_publisher.py`
- `tests/test_grade4_rounding_publisher.py`
- `tests/test_grade4_review_publisher.py`
- `tests/test_grade4_remaining_publishers.py`

公開workflowがすべての検証を通過した後、9PDFを `main` に公開した。

- 公開commit: `353a9652607eae4e177d8fe97d1964ccb1e9113f`

## 小学4年の最終公開範囲

小学4年算数は **19技能・57PDF**。

今回追加:

- 億・兆の位取り: 1技能 × 3variant = 3PDF
- 概数・四捨五入: 1技能 × 3variant = 3PDF
- 学年総復習: 1技能 × 3variant = 3PDF

従来公開済み:

- 大きな整数の加減: 4技能 × 3variant = 12PDF
- 2桁の除数による整数除法: 2技能 × 3variant = 6PDF
- 1/100の位までの小数加減: 2技能 × 3variant = 6PDF
- 1/100の位までの小数×1桁整数: 1技能 × 3variant = 3PDF
- 1/100の位までの小数÷1桁整数（割り切れる）: 1技能 × 3variant = 3PDF
- 同分母分数のたし算・ひき算: 2技能 × 3variant = 6PDF
- 仮分数・帯分数の相互変換: 2技能 × 3variant = 6PDF
- 計算の順序・かっこ付き計算: 1技能 × 3variant = 3PDF
- 四則混合計算: 1技能 × 3variant = 3PDF

公開先: `materials/worksheets/elementary/grade-04/`
カタログ: `worksheets/catalog.json`

## 範囲上の判断

- `2桁×2桁 / 3桁×2桁` は第3学年の乗法範囲と重複するため、小4の独立新技能として追加しない。
- 一般的な約分・通分は第5学年へ送る。
- 小4の計画済み反復技能はこれで完了。

## 次回の正確な開始地点

`docs/worksheet-factory/curriculum/elementary/grade-05/STATUS.json` をactive gradeとして読み、`PLAN.md` の先頭未完了項目 **「小数×小数」** から開始する。

第5学年では、文部科学省解説で乗数・除数が小数である場合の小数乗法・除法を扱うことを確認済み。小5用publisher/workflowを新設または既存Factory規約に沿って拡張し、決定的seed、独立解答、重複検査、PDF 2ページ、同一配置赤字解答、catalog/site validationを維持する。

このrunは小4の残りが3checkpointだったため、3checkpointで学年完了境界に到達して停止した。`00_MASTER_INSTRUCTIONS.md` の「active gradeだけを扱う」規則に従い、同じrunで小5へ跨いで4つ目を数合わせで追加していない。
