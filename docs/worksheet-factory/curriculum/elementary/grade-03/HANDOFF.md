# 小学3年 算数 — HANDOFF

更新: 2026-08-26

## 今回までに完了

### 3位数・4位数の加法・減法

- `scripts/publish_grade3_add_sub.py` で4技能を公開済み。
- 各3variant、計12PDF。

### 乗法

- `scripts/publish_grade3_multiplication.py` で3技能を公開済み。
- 各3variant、計9PDF。

### 除法

- `scripts/publish_grade3_division.py` で2技能を公開済み。
- 各3variant、計6PDF。

### 0.1の位までの小数の加法・減法

- `scripts/publish_grade3_decimals.py` で2技能を公開済み。
- 各3variant、計6PDF。

### 簡単な同分母分数の加法・減法

- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第3学年 A（6）を再確認した。
  - 第3学年では簡単な場合の分数の加法・減法を扱う。
  - 解説は具体的に「同分母」「真分数どうし」「和が1までの加法と、その逆の減法」としている。
- `scripts/publish_grade3_fractions.py` を追加し、2技能を実装した。
  - 簡単な同分母分数のたし算
  - 簡単な同分母分数のひき算
- 各技能 seed=4301/4402/4503 の3variant、計6PDF。
- 分母は3〜10。両オペランドは真分数に限定する。
- 加法は分子和が分母以下、すなわち和が1までに限定する。
- 減法は真分数どうしで正の真分数になるものに限定する。
- `independent_fraction_answer()` で分子を生成値とは独立に再計算する。
- 各20問は6種類以上の分母を含み、同一プリント内の式重複を禁止する。
- seedごとの問題集合差、既存教材との `content_hash` 重複、PDF2ページ、カタログ整合性、冪等性を検証する。
- 問題番号は普通整数 `1`〜`20`。解答ページは問題と同じ位置を再掲し、答えを赤字で追加する。
- `tests/test_grade3_fractions_publisher.py` を追加した。
- Grade 3 checkpointを加減・乗法・除法・小数・分数・共通factory回帰まで拡張した。
- GitHub Actions `Grade 3 worksheet factory checkpoint` run `32913179441` が成功した。
  - 新規 `published 6 grade-3 fraction worksheets`
  - `grade 3 fraction publisher tests: OK`
  - 既存の加減・乗法・除法・小数テストも全て `OK`
  - `worksheet factory tests: OK`
- 同runの公開コミットは `dfbb4e09f7948407ca155d17c3ad0438c6c2eaa9`。

## カリキュラム確認で除外した項目

- PLAN.md の `四則計算混合` を「1つの式の中で加減乗除が混在する計算」として第3学年には実装しない。
- 文部科学省解説では、第3学年の式の学習は加法・減法、乗法・除法の相互関係や□を用いた式までで、**四則混合の式や（ ）を用いた式は第4学年の内容**と明記されている。
- したがって、無理に第3学年へ混合式プリントを追加せず、次の正当な第3学年項目へ進む。

## 現在の公開範囲

- 小3算数: 13技能。
- 加法・減法: 4技能 × 3variant = 12PDF。
- 乗法: 3技能 × 3variant = 9PDF。
- 除法: 2技能 × 3variant = 6PDF。
- 小数加減: 2技能 × 3variant = 6PDF。
- 簡単な同分母分数加減: 2技能 × 3variant = 6PDF。
- 合計39PDFを公開済み。
- 公開先: `materials/worksheets/elementary/grade-03/`。
- `worksheets/catalog.json` に登録済みで、既存の動的一覧/navigationから小学3年として表示される。

## 未完了

- 万・億までの数と位取り
- □を使った四則の逆算
- そろばん型（既存生成器との適合性を確認して判断）
- 学年総復習

## 次にやること

文部科学省の第3学年 A（1）「整数の表し方」を再確認したうえで、`万・億までの数と位取り` を実装する。現行解説の「万の単位」「1億まで」「10倍・100倍・1000倍・1/10」「数の相対的な大きさ」の範囲を構造化し、位取り・数の構成・大小比較など意味の異なる技能へ分割する。決定的seed生成、独立解答再計算、問題内・教材間重複検査、普通整数の問題番号、同一配置への赤字解答、PDF/カタログ登録、Grade 3 checkpoint回帰テストまで通す。
