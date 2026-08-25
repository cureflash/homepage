# 小学2年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第2学年 A「数と計算」の乗法を再確認した。
  - 第2学年で乗法の意味を理解し、乗法九九を構成して身に付け、1位数と1位数との乗法の計算を確実にできるようにする位置付けであることを確認した。
  - 参照: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
- `scripts/publish_grade2_times_tables_mixed.py` を追加し、`九九 全段ランダム` を段別プリントとは独立した混合技能として実装した。
- seed=1001/1102/1203 の3種類で決定的生成し、新規3PDFを公開した。
- 各プリントは24問。
  - 2〜9の8段を各3問ずつ出題し、1枚の中で特定の段に偏らない。
  - 各段の1〜9を決定的に3群へ分割し、3variantにそれぞれ割り当てる。
  - 3variantを合わせると `2×1` から `9×9` までの72基本事実を重複なくちょうど1回ずつ扱う。
  - 各variant内では24問をseedでシャッフルし、段別プリントを単純に連結した並びにはしない。
- `independent_mixed_answer()` で生成器が保持する答えとは独立に全問を再計算する。
- 各24問内の `(段, 乗数)` 重複、variant間の正規化 `content_hash` 重複、既存カタログとの教材内容重複を拒否する。
- 問題番号は普通整数 `1`〜`24`。解答ページは問題ページと同じ配置を再掲し、各式の下へ赤字で答えを追加する。
- カタログには `worksheet_series: mixed`、`worksheet_format: times-table-mixed` を保存した。
- `tests/test_grade2_times_tables_mixed_publisher.py` を追加し、決定性、各段3問、24問内の事実重複なし、3variant全体で72事実完全網羅、独立解答再計算、PDF2ページ、カタログ整合性、冪等性を検証するようにした。
- Grade 2 checkpointを拡張し、core版・筆算版・段別九九版・全段ランダム版・共通ファクトリー回帰テストをlatest main上でまとめて検証するようにした。

## 現在の公開範囲

- 小2算数: 21技能。
- 通常横書き: 8技能 × 3variant = 24PDF。
- 筆算専用: 4技能 × 3variant = 12PDF。
- 九九段別: 8技能 × 3variant = 24PDF。
- 九九全段ランダム: 1技能 × 3variant = 3PDF。
- 合計63PDFを公開済み。
- 公開先: `materials/worksheets/elementary/grade-02/`。
- `worksheets/catalog.json` に登録済みで、既存の動的一覧/navigationから小2として表示される。

## 検証

GitHub Actions `Grade 2 worksheet factory checkpoint` run 32875388068 で latest main を再取得してから以下を実行し、すべて成功した。

- `python scripts/publish_grade2_core.py .` → 公開済み分は `published 0`
- `python scripts/publish_grade2_columnar.py .` → 公開済み分は `published 0`
- `python scripts/publish_grade2_times_tables.py .` → 公開済み分は `published 0`
- `python scripts/publish_grade2_times_tables_mixed.py .` → 新規3PDF生成
- `python tests/test_grade2_core_publisher.py` → OK
- `python tests/test_grade2_columnar_publisher.py` → OK
- `python tests/test_grade2_times_tables_publisher.py` → OK
- `python tests/test_grade2_times_tables_mixed_publisher.py` → OK
- `python tests/test_worksheet_factory.py` → OK

同runで新規3PDFとカタログ更新を `Publish grade 2 worksheet checkpoint` として main へ反映した。公開コミットは `225c8f4eb0110e9d752ab9deb09ccce5acd77f1f`。

## 未完了

PLAN.md の残り、とくに次の優先項目は未実装。

- 九九 穴埋め
- 簡単な2桁×1桁
- たし算・ひき算・かけ算混合
- 1000・10000までの位取り/大小
- 簡単な分数
- 学年総復習
- 九九の逆引き/speed展開

## 次にやること

`九九 穴埋め` を実装する。第2学年の九九の確実な習得を目的に、`□ × 7 = 35` や `6 × □ = 42` のように既知の積から欠けた1位数の因数を答える形式を、2〜9の段に偏らず構造化する。通常の九九式を単に同じ順番で穴埋めへ置換しただけにはせず、左右どちらを隠すかも含めて決定的seedで変化させる。独立解答再計算、各段分布、正解の一意性、教材間重複検査、問題と同位置への赤字解答、PDF/カタログ登録、回帰テストまで通してから簡単な2桁×1桁へ進む。
