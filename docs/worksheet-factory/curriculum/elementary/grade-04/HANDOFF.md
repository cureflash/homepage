# 小学4年 算数 — HANDOFF

更新: 2026-08-26

## 今回のreconcile

- 共通Factory指示を再確認し、小1〜小3の `STATUS.json` が `done`、小4が最初の未完了学年であることを確認した。
- 開始時のHANDOFF/STATUSは小数÷整数の前で止まっていたが、最新 `main` にはその後の並行作業がすでに入っていたため、進捗を巻き戻さず実際の公開状態へreconcileした。
- 最新 `main` では以下が追加・公開済みだった。
  - `scripts/publish_grade4_decimal_division.py`: 小数÷1桁整数（1/100の位まで・割り切れる）1技能 × 3variant = 3PDF。
  - `scripts/publish_grade4_same_denominator_fractions.py`: 同分母分数のたし算・ひき算2技能 × 3variant = 6PDF。
- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」を再確認し、第4学年で真分数・仮分数・帯分数とその大きさ、同分母分数の加減を扱う配置を確認した。

## 今回追加

### 仮分数 ↔ 帯分数の変換

- `scripts/publish_grade4_fraction_conversions.py` を追加した。
- 2技能を各3variant、計6PDF生成・公開した。
  - `improper-to-mixed-fraction`: 仮分数を帯分数になおす。
  - `mixed-to-improper-fraction`: 帯分数を仮分数になおす。
- seedは `8001 / 8102 / 8203`、各20問。
- 分母は2〜12、帯分数の整数部分は1〜5、分数部分は真分数に限定する。
- 仮分数→帯分数は `divmod`、帯分数→仮分数は `整数部分 × 分母 + 分子` で独立再計算し、生成時に保存した答えへ依存せず検証する。
- 問題内重複、variant間差、既存教材とのcontent hash重複を検査する。
- 問題番号は `1`, `2`, ... の通常整数表記とし、小数に見える `01.` 形式を使わない。
- 解答ページは問題ページと同じ配置を再掲し、解答だけ赤字で追加する。
- `tests/test_grade4_fraction_conversions_publisher.py` で決定性、独立解答再計算、問題内重複、variant差、content hash重複、PDF 2ページ、catalog整合性、冪等性を検証する。
- `.github/workflows/grade4-core-publish.yml` に新publisher/testを追加した。
- PR #33 を squash mergeし、実装コミットは `7550f2de05bba4bef93efb216f555f74aa4bc6f3`。
- `Grade 4 worksheet factory checkpoint` run `32943337238` は成功した。
  - workflow内でlatest mainを再取得。
  - 小4の既存publisher全件、新publisher、各専用test、`tests/test_worksheet_factory.py` がすべて成功。
  - 新規6PDFとcatalogを `main` に公開。
- 公開コミットは `9feae7de5e2741d56633540d6df82baa856e5bb1`。

## 現在の公開範囲

小4算数は **14技能・42PDF** を公開済み。

- 大きな整数の加減: 4技能 × 3variant = 12PDF
- 2桁の除数による整数除法: 2技能 × 3variant = 6PDF
- 1/100の位までの小数加減: 2技能 × 3variant = 6PDF
- 1/100の位までの小数×1桁整数: 1技能 × 3variant = 3PDF
- 1/100の位までの小数÷1桁整数（割り切れる）: 1技能 × 3variant = 3PDF
- 同分母分数のたし算・ひき算: 2技能 × 3variant = 6PDF
- 仮分数・帯分数の相互変換: 2技能 × 3variant = 6PDF

公開先: `materials/worksheets/elementary/grade-04/`。カタログは `worksheets/catalog.json`。

## 範囲上の方針

- `2桁×2桁 / 3桁×2桁` は第3学年の乗法範囲と重複するため、小4の新規技能として追加しない。
- 小4の小数除法は、現時点ではまず機械的に一意な「割り切れる」反復技能を公開済み。余りを伴う小数除法を追加する場合は、余りの位取り・表し方を公的資料で再確認してから別技能として扱う。
- 分数は第4学年の真分数・仮分数・帯分数、同分母加減の範囲に留め、一般的な約分・通分は第5学年側へ送る。

## 未完了

- 四則計算の順序・かっこ付き計算
- 四則混合計算
- 億・兆の位取り
- 概数・四捨五入
- 学年総復習

## 次にやること

文部科学省の第4学年における **四則混合の式と（ ）を用いた式** の配置を再確認する。そのうえで、まず「計算の順序・かっこ付き計算」を、答えが機械的に一意に決まる整数問題、独立解答再計算、決定的seed、問題内・教材間重複検査、通常整数の問題番号、同一配置への赤字解答、PDF/カタログ登録、Grade 4 checkpoint回帰テストまで実装する。
