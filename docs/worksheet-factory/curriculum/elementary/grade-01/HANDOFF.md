# 小学1年 算数 — HANDOFF

更新: 2026-08-25

## 今回完了

- 追加seed版を実公開した。
  - 全15技能について seed=202 を variant 02、seed=303 を variant 03 として生成。
  - 30PDFを `materials/worksheets/elementary/grade-01/` に追加し、`worksheets/catalog.json` に登録。
  - 同一seed決定性、独立解答再計算、既存カタログを含む `content_hash` 重複なしを検証。
- `tests/test_grade1_variant_publisher.py` を公開前後どちらでも通る冪等な回帰テストへ修正。
- 50問版に必要な複数ページPDFレンダリングを共通 `worksheet_factory.py` に実装。
  - 1ページ20問を上限に自動分割。
  - 50問は問題3ページ＋解答3ページ。
  - 解答ページは各問題ページと同じ配置を再現し、赤字で答えを追記。
  - 問題番号はページをまたいでも `21`〜`50` の通常整数表記を維持。
  - 既存20問版は従来どおり問題1ページ＋解答1ページで、既存URLは変更なし。
- `tests/test_grade1_multi_page_renderer.py` を追加し、20問=2ページ、50問=6ページをPDF構造まで検証。
- 旧レンダラー実装文字列を固定していた共通回帰テストを現行責務に合わせて更新し、`tests/test_worksheet_factory.py` を含む全関連検証を通した。
- `scripts/publish_grade1_50q.py` を追加し、全15技能の50問版を seed=505 で生成・公開。
- 50問版15PDFをカタログ登録し、決定性・独立解答検証・問題数・ページ分割・全カタログ重複なしを検証。
- GitHub Actions の grade1 factory checkpoint で latest main を再取得してから生成・検証し、安全な状態で main へ反映した。

## 現在の公開範囲

- 小1の内容技能: 15技能。
- 各技能の20問版: seed=101/202/303 の3種類、計45PDF。
- 各技能の50問版: seed=505 の1種類、計15PDF。
- 小1算数として計60PDFを生成パイプライン・カタログ経由で公開済み。

## 検証

- `test_grade1_variant_publisher.py`: OK。
- `test_grade1_remaining_skills.py`: OK。
- `test_grade1_multi_page_renderer.py`: OK。
- `test_grade1_50q_publisher.py`: OK。
- `test_worksheet_factory.py`: OK。
- 追加seed版30枚と50問版15枚は、生成後にPDF存在・サイズ・カタログ整合性を確認。
- 50問版は20/20/10問の3問題ページに分割し、それぞれに対応する解答ページを生成。

## 未完了

- speed版。

## 次にやること

小1の `speed版` の仕様を機械的に区別できる形で定義する。通常20問版の単なるseed違いにはせず、短時間反復として意味のある問題数・表示・カタログメタデータを決め、全15技能について決定的生成・独立解答検証・重複検査・PDF/カタログ登録まで実装する。speed版の公開と全小1受入条件の最終監査が通れば `STATUS.json` を `done` にする。
