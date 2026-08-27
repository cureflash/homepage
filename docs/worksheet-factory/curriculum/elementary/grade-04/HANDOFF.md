# 小学4年 算数 — HANDOFF

更新: 2026-08-27

## 今回のreconcile

- 共通Factory指示を再確認し、小1〜小3の `STATUS.json` が `done`、小4が最初の未完了学年であることを確認した。
- 共有 `docs/worksheet-factory/90_HANDOFF.md` の「実装未開始」は古く、最新 `main` では小4が15技能・45PDFまで公開済みだったため、完成済み学年や既存公開物を巻き戻さず小4の正本 `STATUS/HANDOFF` から再開した。
- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」と小学校4年生算数・指導資料集を再確認し、第4学年で四則の混合した式、（ ）を用いた式、計算順序を扱うことを確認した。

## 今回追加

### 四則混合計算

- `scripts/publish_grade4_mixed_operations.py` を追加した。
- 1技能を3variant、計3PDF生成・公開した。
  - `mixed-four-operations`: 四則混合計算。
- seedは `8604 / 8705 / 8806`、各20問。
- 各variantは4パターンを5問ずつ含み、**各問題の式に `+ / − / × / ÷` の4種類すべてを含める**ことで、直前の「計算の順序・かっこ付き計算」の2演算中心パターンと実質重複しないようにした。
  - `a + b × c − d ÷ e`
  - `a × b + c ÷ d − e`
  - `（a + b）× c − d ÷ e`
  - `a ÷ b +（c − d）× e`
- 除法は必ず整数で割り切れ、かっこ内の減法は正、最終解は `0〜999` に収まる。
- `independent_answer()` は保存済みanswerを参照せず、構造化されたoperandとpatternから独立再計算する。
- 問題内重複、variant間差、既存catalogとのnormalized content hash重複を検査する。
- 問題番号は `1`, `2`, ... の通常整数表記とし、小数に見える `01.` 形式を使わない。
- 解答ページは問題ページと同じ配置を再掲し、解答だけ赤字で追加する。
- `tests/test_grade4_mixed_operations_publisher.py` を追加し、決定性、4パターン各5問、全問題に四則4記号が含まれること、独立解答再計算、整数除法条件、問題内重複、variant差、既存content hashとの衝突なし、PDF 2ページ、catalog整合性、冪等性、番号/赤字解答仕様を検証する。
- `.github/workflows/grade4-core-publish.yml` に新publisher/testを追加し、既存小4publisher/testと `tests/test_worksheet_factory.py` を同じcheckpointで再実行するようにした。

## 検証・公開

- publisher追加: `b9b9282f5a318f2724337d0932085b65107f8f03`
- test追加: `1b4697ad3644733be346f2103dea7fdb0a21b402`
- Grade 4 workflow組み込み: `62d1fa670f7980d7d054e68f578e77ab630d48e2`
- `Grade 4 worksheet factory checkpoint` が全publisher/testを通過した後、workflowが `Publish grade 4 worksheet checkpoint` を `main` へpushした。
- 公開コミット: `6b879146ef2e380751a9db804911f8a5e8d6a6cf`
- 公開PDFを最新 `main` で確認済み。
  - `e4-mixed-four-operations-01.pdf`
  - `e4-mixed-four-operations-02.pdf`
  - `e4-mixed-four-operations-03.pdf`

## 現在の公開範囲

小4算数は **16技能・48PDF** を公開済み。

- 大きな整数の加減: 4技能 × 3variant = 12PDF
- 2桁の除数による整数除法: 2技能 × 3variant = 6PDF
- 1/100の位までの小数加減: 2技能 × 3variant = 6PDF
- 1/100の位までの小数×1桁整数: 1技能 × 3variant = 3PDF
- 1/100の位までの小数÷1桁整数（割り切れる）: 1技能 × 3variant = 3PDF
- 同分母分数のたし算・ひき算: 2技能 × 3variant = 6PDF
- 仮分数・帯分数の相互変換: 2技能 × 3variant = 6PDF
- 計算の順序・かっこ付き計算: 1技能 × 3variant = 3PDF
- 四則混合計算: 1技能 × 3variant = 3PDF

公開先: `materials/worksheets/elementary/grade-04/`。カタログは `worksheets/catalog.json`。

## 範囲上の方針

- `2桁×2桁 / 3桁×2桁` は第3学年の乗法範囲と重複するため、小4の新規技能として追加しない。
- 小4の小数除法は、現時点では機械的に一意な「割り切れる」反復技能を公開済み。余りを伴う小数除法を追加する場合は、余りの位取り・表し方を公的資料で再確認してから別技能として扱う。
- 分数は第4学年の真分数・仮分数・帯分数、同分母加減の範囲に留め、一般的な約分・通分は第5学年側へ送る。
- 「計算の順序・かっこ付き計算」は基礎、「四則混合計算」は1式に四則4種類を含める反復として分離した。

## 未完了

- 億・兆の位取り
- 概数・四捨五入
- 学年総復習

## 次にやること

小学4年の **億・兆の位取り** を実装する。単なる数の読み上げだけではなく、位の名称と数値の対応を機械的に反復できる技能として設計する。第4学年の大きな数の範囲を公的資料で再確認し、既存の大きな整数の加減教材とcontent上重複しないようにする。決定的seed、独立解答、問題内/教材間重複検査、通常整数の問題番号、同一配置への赤字解答、PDF/カタログ登録、Grade 4 checkpoint全回帰を維持する。
