# Topic 13 練習PDF QA

更新日: 2026-09-17

## 対象
- PDF: `13_300series_regenerative_four_quadrant_practice.pdf`
- source: `13_300series_regenerative_four_quadrant_practice_source.md`
- 形式: A4縦2ページ

## source同期
- 一次試験型: `8 / 8` 収録
- 二次試験型: `4 / 4` 収録
- 全12問: 完全解説付き
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・15答案要素を維持
- 固定15答案要素への接続: `15 / 15 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

## Visual QA
- 180 dpi全2ページ表示: `2 / 2 PASS`
- 文字・数式のクリップ: `0件`
- 重なり: `0件`
- ページ外overflow: `0件`
- 日本語グリフ欠落・黒四角: `0件`

## 文字抽出QA
- 文字抽出: `PASS`
- Unicode置換文字 `�`: `0件`
- `□`置換: `0件`
- `一次試験型`、`問8 架線へ戻した回生電力の利用`、`二次試験型`、`問12（二次4）回生可能エネルギー`: 抽出確認 `PASS`

## 計算・論理QA
- sourceで独立再計算・論理・正答一意性確認済み: `12 / 12 PASS`
- PDF収録値の再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 教材外知識補完: `0件`

## SPEC境界
- Topic 14の走行抵抗・必要けん引力・加速度計算追加: `0件`
- H27固定範囲外の回生失効・電力貯蔵設備・運行間隔追加: `0件`
- H24二次固定範囲外の無効電流・出力可能領域追加: `0件`
- Topic 11/12の高調波・力率制御・V/f制御等の再展開: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値の真値化: `0件`
- 問題中の数値は教材用仮定値を維持

## 整合情報
- PDF SHA-256: `ec183d8f536905083c3cbf9cdaca06d014f99e735fa00361b5ea82472fc935c0`
- PDF Git blob SHA-1: `ce7d43ed9a81f752bd0220d211c145f2b65a5908`
- source Git blob SHA-1: `c52cdd0959c30b62488985ee416af6ee4fc35b58`

## 判定
`PASS`

## 現在地
- current_status: `topic_13_practice_pdf_complete`
- 完成数: `12 / 39`
- 次工程: Topic 13 解説画像PowerPoint。固定EXAM_ALIGNMENTは変更しない。
