# Topic 11 練習PDF QA

更新日: 2026-09-16

## 対象
- PDF: `11_300series_pwm_converter_practice.pdf`
- source: `11_300series_pwm_converter_practice_source.md`
- 形式: A4縦3ページ

## source同期
- 一次試験型: `8 / 8` 収録
- 二次試験型: `4 / 4` 収録
- 全12問: 完全解説付き
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・27答案要素を維持
- 固定27答案要素への接続: `27 / 27`
- EXAM_ALIGNMENT変更: `0件`

## Visual QA
- 180 dpi全3ページ表示: `3 / 3 PASS`
- 文字・数式のクリップ: `0件`
- 重なり: `0件`
- ページ外overflow: `0件`
- 日本語グリフ欠落・黒四角: `0件`

## 文字抽出QA
- 文字抽出: `PASS`
- Unicode置換文字 `�`: `0件`
- `□`置換: `0件`
- `一次試験型`、`問8 半導体損失とソフトスイッチング`、`二次試験型`、`問12 スイッチング損失と総変換損失`: 抽出確認 `PASS`

## 計算・論理QA
- sourceで独立再計算・論理・正答一意性確認済み: `12 / 12 PASS`
- PDF収録値を独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 教材外知識補完: `0件`

## SPEC境界
- Topic 12のVVVF、V/f、同期速度、すべり、定トルク／定出力領域の追加: `0件`
- Topic 13の回生、四象限運転、回生エネルギーの追加: `0件`
- 未確認300系直流中間電圧、キャリア周波数、変調率、素子損失等の実車値追加: `0件`
- 問題中の数値は教材用仮定値のまま維持

## 整合性
- SHA-256: `c79f2e4603661c11de55ba8804663cd00febcd419df1977022bc1c5ae0853fe3`
- Git blob SHA-1: `64cc5843dc65a58edc8b5120061db9f74930c091`
- ローカル `git hash-object` とGitHub `create_blob` のSHA-1一致: `PASS`

## 判定
`PASS`

## 現在地
- current_status: `topic_11_practice_pdf_complete`
- 完成数: `10 / 39`（Topic 11は最終QA未完了のため増やさない）
- 次工程: Topic 11の解説画像PowerPointを制作する。SPEC指定4可視化（PWM波形、基本波・高調波、変調条件―基本波電圧、入力電流波形）を収録し、表示QA・overflow・PowerPoint ZIP整合性を確認する。
