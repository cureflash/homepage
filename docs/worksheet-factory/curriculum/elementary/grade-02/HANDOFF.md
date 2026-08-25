# 小学2年 算数 — HANDOFF

更新: 2026-08-26

## 完了状態

小学2年の `PLAN.md` にある優先範囲と、明示された九九の追加展開を完了した。

文部科学省「小学校学習指導要領（平成29年告示）解説 算数編」で第2学年の配置を確認しながら実装した。

- 2位数を中心とする加法・減法と筆算
- 3桁を含む簡単な加法・減法
- 乗法九九と1位数同士の乗法
- 10〜12程度の2位数×1位数
- 1000・10000までの数と位取り・大小
- 1/2・1/3を中心とする簡単な分数

参照: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf

## 最終追加: 九九 speed

- 既存 `scripts/publish_grade2_times_tables_missing.py` を確認した結果、九九の「逆引き」はすでに `□ × 7 = 35` / `6 × □ = 42` の missing-factor 型で実装済みだった。
- 別の逆引き教材を作ると、問題内容は同じままで表現・並べ替えだけの重複になるため追加しなかった。
- 代わりに `scripts/publish_grade2_times_tables_speed.py` を追加し、既存の段別20問・全段ランダム24問と異なる高密度反復として `九九 スピード40問` を実装した。
- seed=3101/3202/3303 の3variantを決定的生成する。
- 各プリントは40問で、2〜9の8段を各5問ずつ均等に出題する。
- 各variantは実際に選ぶ基本事実の集合が異なる。3variantを合わせると、各段について1〜9の全基本事実を必ず含む。
- 40問内に同一基本事実は重複しない。
- `independent_speed_answer()` で生成器が保持する答えとは独立に再計算する。
- 問題番号は普通整数 `1`〜`40`。解答ページは問題ページと同じ配置を再掲し、赤字で答えを追加する。
- カタログは `worksheet_series: mixed`、`worksheet_format: times-table-speed` とした。
- 正規化 `content_hash` で既存教材と3variant間の内容重複を拒否する。
- `tests/test_grade2_times_tables_speed_publisher.py` で決定性、各段5問、基本事実集合のvariant差、3variant合計で各段1〜9網羅、独立解答、PDF2ページ、カタログ整合性、冪等性を検証する。

## 公開範囲

- 通常横書き: 8技能 × 3variant = 24PDF
- 筆算専用: 4技能 × 3variant = 12PDF
- 九九段別: 8技能 × 3variant = 24PDF
- 九九全段ランダム: 1技能 × 3variant = 3PDF
- 九九穴埋め: 1技能 × 3variant = 3PDF
- 九九speed: 1技能 × 3variant = 3PDF
- 簡単な2桁×1桁: 3技能 × 3variant = 9PDF
- たし算・ひき算・かけ算混合: 1技能 × 3variant = 3PDF
- 1000・10000までの数: 3技能 × 3variant = 9PDF
- 簡単な分数: 2技能 × 3variant = 6PDF
- 学年総復習: 1技能 × 3variant = 3PDF

合計33技能・99PDFを `materials/worksheets/elementary/grade-02/` に公開済み。全て `worksheets/catalog.json` に登録され、既存の動的一覧/navigationから表示される。

## 最終検証

GitHub Actions `Grade 2 worksheet factory checkpoint` run `32899019390` で latest main を再取得してから以下を実行し、すべて成功した。

- core生成器
- 筆算生成器
- 九九段別生成器
- 九九全段ランダム生成器
- 九九穴埋め生成器
- 九九speed生成器
- 簡単な2桁×1桁生成器
- 3演算混合生成器
- 位取り生成器
- 簡単な分数生成器
- 学年総復習生成器
- 各専用テスト
- `tests/test_worksheet_factory.py`

同runで新規speed版3PDFとカタログ更新を公開し、コミット `5e1bcae878090cabbcf0bc4e6c87b279d55f53d6` を main に反映した。

## 次回

Grade 2 は `done`。次のWorksheet Factory実行では共有指示どおりSTATUSだけを順に走査し、次の未完了学年へ進む。Grade 2 は実際の不具合が見つからない限り再オープンしない。
