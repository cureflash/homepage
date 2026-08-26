# 小学4年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 共通Factory指示を再確認し、小1〜小3の `STATUS.json` が `done`、小4が最初の未完了学年であることを確認した。
- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第4学年 A「数と計算」を再確認した。
  - 第4学年では、除数が1位数や2位数で被除数が2位数や3位数の除法を扱う。
  - 第4学年では小数の加法・減法を1/100の位まで広げて扱う。
  - 第4学年では小数の乗法及び除法として `小数×整数`、`小数÷整数` を扱い、第5学年で乗数・除数が小数の場合へ拡張する。
  - PLANの `2桁×2桁 / 3桁×2桁` は第3学年の乗法範囲と重複するため、小4の新規技能としては追加しない方針を維持する。

### 1. 2桁の除数による整数のわり算

- `scripts/publish_grade4_division.py` を追加済み。
- 「2桁で割るわり算（割り切れる）」「2桁で割るわり算（あまりあり）」の2技能、各3variant、計6PDFを公開済み。
- 商・余りの独立再計算、除法恒等式、余り条件、決定的seed、重複検査、同一配置への赤字解答を検証済み。

### 2. 1/100の位までの小数のたし算・ひき算

- `scripts/publish_grade4_decimals.py` を追加済み。
- 「小数のたし算（1/100の位まで）」「小数のひき算（1/100の位まで）」の2技能、各3variant、計6PDFを公開済み。
- 浮動小数点をauthorityにせず、1/100を1とする整数単位で保持・計算する。
- 繰り上がり/繰り下がり有無を半数ずつにし、独立解答再計算、決定的seed、重複検査、同一配置への赤字解答を検証済み。

### 3. 1/100の位までの小数×1桁整数

- 文部科学省の現行解説で、第4学年に `小数×整数` が明示され、第5学年では乗数が小数の場合へ意味を拡張する構成であることを再確認した。
- `scripts/publish_grade4_decimal_multiplication.py` を追加した。
- 「小数×1桁整数（1/100の位まで）」を1技能として、seed=5001/5102/5203の3variantで生成する。
- 各プリントは20問。被乗数は1/100単位の整数 (`multiplicand_units`) で保持し、乗数は2〜9に限定する。
- `independent_decimal_multiplication_answer()` は生成時の答えに依存せず、整数単位で積を再計算する。
- 浮動小数点は計算authorityに使わず、表示時だけ `整数部.小数部2桁` に整形する。
- 各20問は、小数部分で繰り上がりがある問題10問・ない問題10問に固定する。
- 問題番号は通常整数表記、解答ページは同じ問題配置を再掲して赤字解答を追加する。
- `tests/test_grade4_decimal_multiplication_publisher.py` を追加し、決定性、20問内重複、独立解答、乗数範囲、繰り上がり分布、variant差、content hash重複、PDF2ページ、カタログ、冪等性を検証する。
- `.github/workflows/grade4-core-publish.yml` を拡張し、既存3publisher/3testsと新規publisher/test、共通Factory回帰をlatest main上でまとめて実行するようにした。

## 現在の公開範囲

main上で公開済みなのは小4算数8技能・24PDF。

- 大きな整数の加減: 4技能 × 3variant = 12PDF
- 2桁の除数による整数除法: 2技能 × 3variant = 6PDF
- 1/100の位までの小数加減: 2技能 × 3variant = 6PDF

今回の小数×1桁整数はPRマージ後のGrade 4 checkpoint workflowで3PDF生成・検証・カタログ登録される。成功後は9技能・27PDFになる。

公開先: `materials/worksheets/elementary/grade-04/`。カタログは `worksheets/catalog.json`。

## 検証

- 直前の公開済みcheckpointでは GitHub Actions `32925117631` が成功済み。
- 今回の新規checkpointはPRマージ後に `Grade 4 worksheet factory checkpoint` を起動し、以下をlatest main上で実行する設計。
  - `python scripts/publish_grade4_large_integer_add_sub.py .`
  - `python scripts/publish_grade4_division.py .`
  - `python scripts/publish_grade4_decimals.py .`
  - `python scripts/publish_grade4_decimal_multiplication.py .`
  - 対応する4本のpublisher test
  - `python tests/test_worksheet_factory.py`

## 未完了

- 小数÷整数
- 同分母分数のたし算・ひき算
- 帯分数・仮分数の変換
- 四則計算の順序・かっこ付き計算
- 四則混合計算
- 億・兆の位取り
- 概数・四捨五入
- 学年総復習

`2桁×2桁 / 3桁×2桁` は第3学年範囲と重複するため、小4の新規技能としては追加しない。

## 次にやること

文部科学省の第4学年における **小数÷整数** の配置と余りの扱いを最新の公的資料で再確認する。そのうえで、まず1/100の位までの小数を1桁整数で割る反復技能を、整数単位による厳密計算、独立解答再計算、割り切れる問題を基本とした表示規則、決定的seed、問題内・教材間重複検査、同一配置への赤字解答、PDF/カタログ登録、Grade 4 checkpoint回帰テストまで実装する。
