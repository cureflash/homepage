# 小学4年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 共通Factory指示を再確認し、小1〜小3の `STATUS.json` が `done`、小4が最初の未完了学年であることを確認した。
- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第4学年 A「数と計算」を再確認した。
  - 第4学年では、除数が1位数や2位数で被除数が2位数や3位数の除法を扱う。解説には `98÷23`、`171÷21` の例があるため、小3の1位数除数と重複しない「2桁の除数」に限定して教材化した。
  - 第4学年では小数の加法・減法を1/100の位まで広げて扱う。解説の `3.7+2.48` のように小数点を揃え、整数と同様の原理で計算する内容に合わせた。
  - PLANの `2桁×2桁 / 3桁×2桁` は第3学年の乗法範囲と重複するため、小4の新規技能としては追加しない方針を維持する。

### 1. 2桁の除数による整数のわり算

- `scripts/publish_grade4_division.py` を追加した。
- 次の2技能を追加した。
  - 2桁で割るわり算（割り切れる）
  - 2桁で割るわり算（あまりあり）
- 各技能を seed=4401/4502/4603 の3variantで生成し、新規6PDFを公開した。
- 各プリントは20問。除数11〜99、被除数は999以下とし、小3の1位数除数教材と明確に分離した。
- `independent_division_answer()` で `divmod()` を用いて商・余りを独立再計算する。
- 全問で `除数 × 商 + 余り = 被除数`、`0 <= 余り < 除数` を検証する。あまりあり技能では余りを必ず1以上にする。
- 問題番号は通常整数表記で、解答ページは同じ問題配置を再掲し、赤字で商・余りを追加する。
- `tests/test_grade4_division_publisher.py` を追加し、決定性、範囲、独立再計算、除法恒等式、余り条件、variant差、content hash重複、PDF2ページ、カタログ、冪等性を検証する。
- Grade 4 checkpointを拡張し、既存の大整数加減と新規除法をlatest main上でまとめて検証するようにした。
- PR #15をmainへマージし、GitHub Actions `Grade 4 worksheet factory checkpoint` run `32924990320` が成功した。
- 同runで新規6PDFとカタログ更新を公開し、公開コミットは `a60bfbb7f3e70ccc5a96add24dd23c7b66ad6a4b`。

### 2. 1/100の位までの小数のたし算・ひき算

- `scripts/publish_grade4_decimals.py` を追加した。
- 次の2技能を追加した。
  - 小数のたし算（1/100の位まで）
  - 小数のひき算（1/100の位まで）
- 各技能を seed=4701/4802/4903 の3variantで生成し、新規6PDFを公開した。
- 小数は浮動小数点値を計算のauthorityにせず、内部では「1/100を1とする整数単位」 (`a_units`, `b_units`, `answer_units`) で保持・計算する。表示時だけ小数点以下2桁へ変換する。
- 各20問は、小数部分での繰り上がり/繰り下がりあり10問、なし10問に固定して偏りを防いだ。
- `independent_decimal_answer()` で生成時の答えとは独立に整数単位の加減を再計算する。
- 問題番号は通常整数表記、解答ページは同一配置に赤字解答を追加する。
- `tests/test_grade4_decimals_publisher.py` を追加し、決定性、20問内重複、独立解答、繰り上がり/繰り下がり分布、variant差、content hash重複、PDF2ページ、カタログ、冪等性を検証する。
- Grade 4 checkpointをさらに拡張し、大整数加減・2桁除数除法・小数加減・共通Factory回帰をまとめて検証するようにした。
- PR #16をmainへマージし、GitHub Actions `Grade 4 worksheet factory checkpoint` run `32925117631` が成功した。
- 同runで新規6PDFとカタログ更新を公開し、公開コミットは `d815cfe72f6325d00b5fc6a7c1c0b2b14aa7fe05`。

## 現在の公開範囲

- 小4算数: 8技能。
- 大きな整数の加減: 4技能 × 3variant = 12PDF。
- 2桁の除数による整数除法: 2技能 × 3variant = 6PDF。
- 1/100の位までの小数加減: 2技能 × 3variant = 6PDF。
- 合計24PDFを公開済み。
- 公開先: `materials/worksheets/elementary/grade-04/`。
- `worksheets/catalog.json` 登録済み。

## 検証

最新のGitHub Actions run `32925117631` では、latest mainを再取得してから以下がすべて成功した。

- `python scripts/publish_grade4_large_integer_add_sub.py .` → 公開済み分 `published 0`
- `python scripts/publish_grade4_division.py .` → 公開済み分 `published 0`
- `python scripts/publish_grade4_decimals.py .` → 新規6PDF生成
- `python tests/test_grade4_large_integer_add_sub_publisher.py` → OK
- `python tests/test_grade4_division_publisher.py` → OK
- `python tests/test_grade4_decimals_publisher.py` → OK
- `python tests/test_worksheet_factory.py` → OK

run終了時に新規6PDFをmainへ公開し、現在の公開コミットは `d815cfe72f6325d00b5fc6a7c1c0b2b14aa7fe05`。

## 未完了

- 小数×整数
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

文部科学省の第4学年における **小数×整数** の配置・到達範囲を最新の公的資料で再確認する。そのうえで、まず1/100の位までの小数を1桁の整数倍する反復技能を、整数単位による厳密計算、独立解答再計算、桁あふれ/表示規則、決定的seed、問題内・教材間重複検査、同一配置への赤字解答、PDF/カタログ登録、Grade 4 checkpoint回帰テストまで実装する。公的資料から2桁整数倍までを第4学年の安全な基本反復として扱えることが明確なら、同じcheckpoint内で別技能として段階化する。
