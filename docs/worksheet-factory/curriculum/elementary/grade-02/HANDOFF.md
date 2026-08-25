# 小学2年 算数 — HANDOFF

更新: 2026-08-26

## 今回完了

- 文部科学省の現行小学校学習指導要領（算数編）と教科書対照表を確認し、第2学年に加法・減法・乗法、2桁のたし算・ひき算、筆算が配置されていることを確認した。
- `scripts/publish_grade2_core.py` を追加し、最優先項目のうち次の4技能を実装した。
  - 2桁 + 2桁（繰り上がりなし）
  - 2桁 + 2桁（繰り上がりあり）
  - 2桁 - 2桁（繰り下がりなし）
  - 2桁 - 2桁（繰り下がりあり）
- 各技能を seed=101/202/303 の3種類で決定的生成し、計12PDFを公開した。
- 各20問内で同一の数値ペアを重複させない候補集合方式にした。
- 生成器が保持する答えとは別に `independent_answer()` で加減を再計算し、桁数・繰り上がり/繰り下がり条件も独立検証する。
- `content_hash` を既存カタログ全体と比較し、他教材との問題内容重複を拒否する。
- 既存の共通PDFレンダラーを使い、問題ページの同一配置を解答ページへ再掲して赤字解答を追加する形式を維持した。
- `tests/test_grade2_core_publisher.py` を追加し、決定性、20問内重複なし、seed間/技能間重複なし、既存他教材との重複なし、PDF生成、カタログ整合性、冪等性を検証する。
- `.github/workflows/grade2-core-publish.yml` を追加し、latest main との再同期後に生成・検証・commit/pushするチェックポイントを構築した。

## 公開範囲

- 小2算数: 現在4技能。
- 各技能20問 × 3 seed = 12PDF。
- 公開先: `materials/worksheets/elementary/grade-02/`。
- `worksheets/catalog.json` に登録済みで、既存の動的一覧ページから `小2` として自動表示される。

## 検証

GitHub Actions `Grade 2 worksheet factory checkpoint` run 32863632999 で以下を実行し、成功。

- `python scripts/publish_grade2_core.py .`
- `python tests/test_grade2_core_publisher.py`
- `python tests/test_worksheet_factory.py`

同runで `Publish grade 2 two-digit arithmetic worksheets` として12PDFとカタログ更新を `main` へ反映した。

## 未完了

PLAN.md の残り、とくに次の優先項目は未実装。

- 3桁を含む簡単なたし算・ひき算
- たし算・ひき算の筆算反復
- 九九 2の段〜9の段を段別に
- 九九 全段ランダム
- 九九 穴埋め
- 簡単な2桁×1桁
- たし算・ひき算・かけ算混合
- 1000・10000までの位取り/大小
- 簡単な分数
- 学年総復習
- 九九の逆引き/speed展開

## 次にやること

文部科学省の第2学年配置を再確認したうえで、`3桁を含む簡単なたし算・ひき算` を次の独立技能として構造化し、決定的seed生成・独立解答検証・重複検査・PDF/カタログ登録・回帰テストまで実装する。その安全なチェックポイント後に、筆算反復へ進む。
