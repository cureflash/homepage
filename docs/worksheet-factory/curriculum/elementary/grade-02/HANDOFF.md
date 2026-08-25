# 小学2年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」の第2学年の乗法内容を再確認した。
  - 第2学年で乗法の意味を理解し、乗法九九を構成して身に付け、1位数と1位数との乗法を確実にできるようにする配置であることを確認した。
- `scripts/publish_grade2_times_tables.py` を追加し、九九2の段〜9の段を8個の独立技能として構造化した。
- 次の8技能を公開した。
  - 九九 2の段
  - 九九 3の段
  - 九九 4の段
  - 九九 5の段
  - 九九 6の段
  - 九九 7の段
  - 九九 8の段
  - 九九 9の段
- 各技能を seed=701/802/903 の3種類で決定的生成し、新規24PDFを公開した。
- 各プリントは20問。
  - 1〜9の全基本事実を必ず最低2回ずつ出題する。
  - 20問にするため、seedごとに2個の基本事実だけを3回目として追加する。
  - seedごとに並び順と追加反復する2事実を変え、各段3variantが同じ反復構成にならないよう検証する。
- `independent_times_table_answer()` で生成器が保持する答えとは独立に全問を再計算する。
- 問題ページは普通整数の問題番号 `1`〜`20` を使用し、`01.` のような表記は使わない。
- 解答ページは問題ページと同じ配置を再掲し、各式の下へ答えを赤字で追加する。
- `worksheet_format: times-table-stage` をカタログに保存し、段別九九として機械的に識別できるようにした。
- 正規化 `content_hash` により、段・seed間および既存カタログとの教材内容重複を拒否する。
- `tests/test_grade2_times_tables_publisher.py` を追加し、決定性、全基本事実の出現回数、独立解答再計算、variant差、重複、PDF2ページ、カタログ整合性、冪等性を検証するようにした。
- Grade 2 checkpointを拡張し、core版・筆算版・段別九九版・共通ファクトリー回帰テストをlatest main上でまとめて検証するようにした。

## 現在の公開範囲

- 小2算数: 20技能。
- 通常横書き: 8技能 × seed=101/202/303 = 24PDF。
- 筆算専用: 4技能 × seed=401/502/603 = 12PDF。
- 九九段別: 8技能 × seed=701/802/903 = 24PDF。
- 合計60PDFを公開済み。
- 公開先: `materials/worksheets/elementary/grade-02/`。
- `worksheets/catalog.json` に登録済みで、既存の動的一覧/navigationから小2として表示される。

## 検証

GitHub Actions `Grade 2 worksheet factory checkpoint` run 32872485726 で latest main を再取得してから以下を実行し、すべて成功した。

- `python scripts/publish_grade2_core.py .` → 公開済み分は `published 0`
- `python scripts/publish_grade2_columnar.py .` → 公開済み分は `published 0`
- `python scripts/publish_grade2_times_tables.py .` → 新規24PDF生成
- `python tests/test_grade2_core_publisher.py` → OK
- `python tests/test_grade2_columnar_publisher.py` → OK
- `python tests/test_grade2_times_tables_publisher.py` → OK
- `python tests/test_worksheet_factory.py` → OK

同runで新規24PDFとカタログ更新を `Publish grade 2 worksheet checkpoint` として main へ反映した。公開コミットは `a8006979317636e628b09e7c01fe45de14480a86`。

代表として「九九 7の段」seed=701を同一生成ロジックでPDF化・画像レンダリングし、20問配置、普通整数の問題番号、掛け算記号、同一配置への赤字解答、クリッピング・重なり・文字欠けがないことを目視確認した。公開後にも `e2-times-7-01.pdf` の実ファイルとカタログ登録を確認した。

## 未完了

PLAN.md の残り、とくに次の優先項目は未実装。

- 九九 全段ランダム
- 九九 穴埋め
- 簡単な2桁×1桁
- たし算・ひき算・かけ算混合
- 1000・10000までの位取り/大小
- 簡単な分数
- 学年総復習
- 九九の逆引き/speed展開

## 次にやること

第2学年の乗法九九の配置を文部科学省資料で再確認したうえで、`九九 全段ランダム` を実装する。2〜9の全72基本事実を母集団とし、特定の段に偏らず複数段を横断して反復できる独立技能として構造化する。段別プリントを単純連結・並べ替えしただけの内容にはせず、決定的seed生成、独立解答再計算、段分布検証、教材間重複検査、問題と同位置への赤字解答、PDF/カタログ登録、回帰テストまで通してから九九穴埋めへ進む。
