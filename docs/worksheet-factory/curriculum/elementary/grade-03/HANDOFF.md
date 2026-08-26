# 小学3年 算数 — HANDOFF

更新: 2026-08-26

## 完了状態

小学3年の自動反復プリントについて、PLAN.mdで優先対象としていた計算・数領域を実装し、カリキュラム上不適切または現行生成器では意味のある教材にならない項目を根拠付きで除外・非採用とした。`STATUS.json` は `done`。

## 公開済み

### 3位数・4位数の加法・減法

- `scripts/publish_grade3_add_sub.py`
- 4技能 × 3variant = 12PDF。

### 乗法

- `scripts/publish_grade3_multiplication.py`
- 3技能 × 3variant = 9PDF。

### 除法

- `scripts/publish_grade3_division.py`
- 割り切れる除法・あまりありの2技能 × 3variant = 6PDF。

### 0.1の位までの小数の加法・減法

- `scripts/publish_grade3_decimals.py`
- 2技能 × 3variant = 6PDF。

### 簡単な同分母分数の加法・減法

- `scripts/publish_grade3_fractions.py`
- 2技能 × 3variant = 6PDF。
- 同分母の真分数どうし。加法は和が1まで、減法は正の真分数になる範囲。

### 万・億までの数と位取り

文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」第3学年 A（1）を再確認し、万の単位、1億までの数、10倍・100倍・1000倍・1/10、数の相対的な大きさを第3学年範囲として実装した。

- `scripts/publish_grade3_large_numbers.py`
- `tests/test_grade3_large_numbers_publisher.py`
- 5技能 × 3variant = 15PDF。
  - `large-number-place-digit`: 1億までの数の位取り
  - `large-number-compose`: 1億までの数の構成
  - `large-number-compare`: 1億までの数の大小
  - `large-number-scale`: 10倍・100倍・1000倍・10分の1
  - `large-number-relative-units`: 十・百・千・万を単位にした数
- 各20問。seed=4601/4702/4803。
- 位取りは8種類の位を各2〜3回、大小は `<` 8・`>` 8・`=` 4、倍率は4形式を各5問、相対的な大きさは十・百・千・万を各5問に固定した。
- 数の構成は紙面で過密にならないよう、1問につき非0の位を2〜5個に限定した。
- 全問題を生成値とは別の `independent_answer()` で再計算し、決定性・分布・variant差・内容hash重複・PDF2ページ・カタログ・冪等性を検証した。
- GitHub Actions `Grade 3 worksheet factory checkpoint` run `32917582467` 成功。
- 公開コミット: `55df786fdc0a0aed68d9059e65d2ae838a6a422b`。

### □を使った四則の逆算

文部科学省解説で、第3学年に「□を用いた式」があり、加法と減法、乗法と除法の相互関係を式・図と関連付けて扱う配置であることを再確認した。

- `scripts/publish_grade3_missing_number.py`
- `tests/test_grade3_missing_number_publisher.py`
- 5技能 × 3variant = 15PDF。
  - `missing-addend`: 加数を求める
  - `missing-subtrahend`: 減数を求める
  - `missing-factor`: 乗数を求める
  - `missing-dividend`: 被除数を求める
  - `missing-divisor`: 除数を求める
- 各20問。seed=4901/5002/5103。
- 全問一意、決定的生成、独立再計算、variant差、内容hash重複、PDF2ページ、カタログ、冪等性を検証した。
- GitHub Actions run `32917680679` 成功。
- 公開コミット: `c39788f802fdf2810266de6086e6ad0bee55728b`。

### 小学3年 算数 総復習

- `scripts/publish_grade3_review.py`
- `tests/test_grade3_review_publisher.py`
- 3variant = 3PDF。各24問。seed=5201/5302/5403。
- 1枚で次を横断する。
  - 整数加法3問
  - 整数減法3問
  - 乗法4問
  - 除法4問（割り切れる2・あまりあり2）
  - 小数加減4問
  - 同分母分数加減2問
  - 大きな数2問
  - □を用いた式2問
- 解答形式が数値・不等号・分数・あまり表記を含むため、カタログの `answer_type` は `accepted-set` とした。
- 初回Actions run `32917816818` では、小数加法候補が検証上限を超えうる不整合をテスト前生成時に検出し、PDFは公開されなかった。
- 候補生成を検証条件に一致させて修正後、Actions run `32917878207` が成功。新規3PDF、既存の全Grade 3生成器テスト、共通 `tests/test_worksheet_factory.py` が全て成功した。
- 公開コミット: `1047e07`（`Publish grade 3 worksheet checkpoint`）。

## カリキュラム確認で追加しなかった項目

### 四則計算混合

- PLAN.md の `四則計算混合` を「一つの式の中で加減乗除を混在させる計算」として第3学年には実装していない。
- 文部科学省解説では、四則混合の式や括弧を用いる式は第4学年の内容であるため、小3へ前倒ししない。

### そろばん型

- 文部科学省解説の第3学年 A（8）では、そろばんによる数の表し方と、珠を操作して行う簡単な加法・減法が対象であることを確認した。
- 現行worksheet factoryは式中心のPDFレンダラで、そろばんの珠・定位点・桁ごとの珠状態を意味的に表現する専用rendererを持たない。
- 通常の加減式を「そろばん」と名付けるだけでは既存加減プリントの意味のない重複になるため、PLAN.mdの「生成器との相性を見て判断」に従い、今回は非採用とした。
- 将来、珠配置を正しく描画・検証できる専用rendererを追加した場合のみ、独立教材として再検討する。

## 現在の公開範囲

- 小3算数: 24技能。
- 加法・減法: 12PDF。
- 乗法: 9PDF。
- 除法: 6PDF。
- 小数加減: 6PDF。
- 同分母分数加減: 6PDF。
- 万・億までの数と位取り: 15PDF。
- □を使った四則の逆算: 15PDF。
- 学年総復習: 3PDF。
- **合計72PDF**。
- 公開先: `materials/worksheets/elementary/grade-03/`。
- 全て `worksheets/catalog.json` に登録し、既存の動的一覧/navigationから小学3年として参照できる。

## 共通品質条件

- 問題番号は `1`、`2` … の普通整数表記で、`01.` のように小数へ見える表記を使わない。
- 解答ページは問題ページと同一配置を再掲し、答えを赤字で追加する。
- deterministic seed、独立解答再計算、問題内重複検査、教材間 `content_hash` 重複検査、PDF2ページ、カタログ検証、冪等性を各生成器で固定している。
- `.github/workflows/grade3-core-publish.yml` は加減・乗法・除法・小数・分数・大きな数・□式・総復習と共通factory回帰をlatest main上でまとめて検証する。

## 次回

小学3年は完了。通常の学年順スキャンでは次の未完了学年の `STATUS.json` を探し、その学年だけを開始する。小学3年を再開して新規プリントを足すのは、実欠陥修正、意味のある非重複variant拡張、またはそろばん専用rendererのような明確なfactory改善がある場合に限る。
