# 小学1年 算数 — HANDOFF

更新: 2026-08-25

## 完了状態

小学1年の算数プリントは受入条件を満たし、完了。

## 公開範囲

- 内容技能: 15技能。
- 20問版: 全15技能 × seed=101/202/303 の3種類 = 45PDF。
- 50問版: 全15技能 × seed=505 の1種類 = 15PDF。
- speed版: 全15技能 × seed=707 の1種類 = 15PDF。
- 合計75PDFを生成パイプライン・`worksheets/catalog.json` 経由で公開。

## speed版の仕様

- 通常20問版の単なるseed違いにはせず、短時間反復用として10問構成にした。
- 目安時間は3分。
- ID/URLは `e1-{skill}-speed-01` / `.../e1-{skill}-speed-01.pdf`。
- `worksheet_format: speed`、`time_target_minutes: 3` をカタログへ保存。
- `worksheet_series` は学習系列（focused/review）の意味を維持し、speedは別メタデータで表現。
- タイトルとPDF紙面に `スピード3分・10問` を明示。
- 問題番号は `1`、`2` の通常整数表記。
- 解答ページは問題ページと同じ配置を再掲し、答えを赤字で追記。

## 生成・検証

- `scripts/publish_grade1_variants.py`: 20問追加seed版を冪等生成。
- `scripts/publish_grade1_50q.py`: 50問版を冪等生成。
- `scripts/publish_grade1_speed.py`: speed版15枚を冪等生成。
- `worksheet_factory.py` の共通レンダラーは20問ごとに問題ページを分割し、対応する解答ページを同じ配置で生成する。
- 50問版は問題20/20/10問の3ページ + 対応する解答3ページ。
- speed版は問題10問1ページ + 対応する赤字解答1ページ。
- 全形式で決定的seed生成、独立解答再計算、正規化 `content_hash` 重複検査、カタログURL/実ファイル整合性を検証。
- GitHub Actions `Grade 1 worksheet factory checkpoint` run 32859974605 で以下を実行し、すべて成功。
  - `test_grade1_variant_publisher.py`
  - `test_grade1_50q_publisher.py`
  - `test_grade1_speed_publisher.py`
  - `test_grade1_remaining_skills.py`
  - `test_grade1_multi_page_renderer.py`
  - `test_worksheet_factory.py`
- 同runでspeed版15PDFを生成し、`Publish grade 1 speed worksheets` としてmainへ反映。
- 代表speed版を同一seed・同一レンダラー条件で再生成して画像化し、整数問題番号、`スピード3分・10問` 表示、同一問題配置への赤字解答、クリッピング・重なり・文字欠けがないことを確認。

## URL互換性

- 既存の小1 20問版・追加seed版・50問版の公開URLは変更していない。
- unrelatedな教材・ゲーム・ツールは変更していない。

## 次回

この学年は `done`。次回の通常スキャンでは小学2年の `STATUS.json` へ進み、最初の未完了学年として処理する。小学1年の `HANDOFF.md` は、実欠陥の修正または全学年完了後の正当な追加variant/保守が必要になるまで読まない。
