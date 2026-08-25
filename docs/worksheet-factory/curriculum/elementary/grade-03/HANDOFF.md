# 小学3年 算数 — HANDOFF

更新: 2026-08-26

## 今回までに完了

### 3位数・4位数の加法・減法

- `scripts/publish_grade3_add_sub.py` で4技能を公開済み。
  - 3桁 + 3桁
  - 3桁 - 3桁
  - 4桁 + 4桁
  - 4桁 - 4桁
- 各3variant、計12PDF。

### 乗法

- `scripts/publish_grade3_multiplication.py` で3技能を公開済み。
  - 2桁 × 1桁
  - 2桁 × 2桁
  - 3桁 × 1桁
- 各3variant、計9PDF。

### 除法

- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第3学年除法を再確認した。
  - `12÷3`、`13÷3` のような乗法九九を1回用いて商を求める除法を扱う。
  - `80÷4`、`69÷3` のような簡単な2位数を1位数で割る計算も扱う。
- `scripts/publish_grade3_division.py` を追加し、2技能を実装した。
  - `2桁 ÷ 1桁（割り切れる）`
    - 九九の逆引きだけの再利用にならないよう、商を10以上とした2位数÷1位数を生成する。
  - `1桁で割るわり算（あまりあり）`
    - 商1〜9、余りは `1 <= 余り < 除数` とし、九九を使って商を求められる基本形に限定する。
- 各技能 seed=3701/3802/3903 の3variant、計6PDF。
- `independent_division_answer()` で商・余りを生成値とは独立に再計算する。
- 被除数10〜99、除数2〜9、商・余り条件、20問内重複、教材間content hash重複を検証する。
- `tests/test_grade3_division_publisher.py` を追加し、決定性、独立商・余り再計算、除数分布、PDF2ページ、カタログ整合性、冪等性まで検証する。
- Grade 3 checkpoint run `32909146458` が成功し、6PDFをmainへ公開した。

### 0.1の位までの小数の加法・減法

- 文部科学省の現行資料で、第3学年に「1/10の位までの小数の加法及び減法」が明記されていることを再確認した。
- `scripts/publish_grade3_decimals.py` を追加し、2技能を実装した。
  - 0.1の位までの小数のたし算
  - 0.1の位までの小数のひき算
- 各技能 seed=4001/4102/4203 の3variant、計6PDF。
- 浮動小数点誤差を答え判定へ持ち込まないため、内部では全値を「0.1が何個分か」の整数で保持し、表示時だけ小数1桁へ変換する。
- 各20問は、小数第1位で繰り上がり・繰り下がりが生じる問題10問と、生じない問題10問を必ず含む。
- `independent_decimal_answer()` で整数化した値から独立再計算する。
- 20問内重複、variant/content hash重複、PDF2ページ、普通整数の問題番号、同一位置への赤字解答、カタログ整合性、冪等性を検証する。
- `tests/test_grade3_decimals_publisher.py` を追加した。
- GitHub Actions `Grade 3 worksheet factory checkpoint` run `32909279239` が成功した。
  - `published 0 grade-3 addition/subtraction worksheets`
  - `published 0 grade-3 multiplication worksheets`
  - `published 0 grade-3 division worksheets`
  - `published 6 grade-3 decimal worksheets`
  - 既存加減・乗法・除法、新規小数、共通worksheet factoryの全テスト `OK`
- 同runの公開コミットは `d3c9fc214228871a7ea2024fda97ed305932d6b9`。

## 現在の公開範囲

- 小3算数: 11技能。
- 加法・減法: 4技能 × 3variant = 12PDF。
- 乗法: 3技能 × 3variant = 9PDF。
- 除法: 2技能 × 3variant = 6PDF。
- 小数加減: 2技能 × 3variant = 6PDF。
- 合計33PDFを公開済み。
- 公開先: `materials/worksheets/elementary/grade-03/`。
- `worksheets/catalog.json` に登録済みで、既存の動的一覧/navigationから小学3年として表示される。

## 未完了

PLAN.md の残りは未実装。

- 簡単な同分母分数のたし算・ひき算
- 四則計算混合
- 万・億までの数と位取り
- □を使った四則の逆算
- そろばん型（既存生成器との適合性を確認して判断）
- 学年総復習

## 次にやること

文部科学省の第3学年における分数の配置を再確認したうえで、`簡単な同分母分数のたし算・ひき算` を実装する。現行解説にある「真分数どうし」「和が1までの加法とその逆の減法」の範囲を守り、分母を揃えた機械的に検証可能な計算として構造化する。決定的seed生成、分子の独立再計算、真分数・和1以下・同分母条件の検証、20問内および教材間重複検査、普通整数の問題番号、同一配置への赤字解答、PDF/カタログ登録、Grade 3 checkpoint回帰テストまで通してから四則計算混合へ進む。
