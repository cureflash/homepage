# Topic 14 練習PDF QA

更新日: 2026-09-17

## 対象
- PDF: `14_300series_running_resistance_tractive_force_practice.pdf`
- source: `14_300series_running_resistance_tractive_force_practice_source.md`
- 形式: A4縦2ページ

## source同期
- 一次試験型: `8 / 8` 収録、全問五肢択一
- 二次試験型: `4 / 4` 収録、途中式・前提・単位・理由を含む
- 全12問: 完全解説付き
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・9答案要素を維持
- 固定9答案要素への接続: `9 / 9 PASS`
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
- `一次試験型`、`問8 4可視化の関係`、`二次試験型`、`問12（二次4）車輪周力一定の加速曲線を2ステップ計算`: 抽出確認 `PASS`

## 計算・論理QA
- sourceで独立再計算・論理確認済み: `12 / 12 PASS`
- PDF収録値とsourceの整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 教材外知識補完: `0件`

## SPEC境界
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 4可視化共通仮定式系の変更: `0件`
- Topic 13の回生・制動・エネルギー返送再展開: `0件`
- Topic 12のPWM/VVVF/V/f・滑り制御再展開: `0件`
- 粘着限界・曲線抵抗・トンネル抵抗・台車/歯車設計・列車運行計画追加: `0件`
- 未確認300系実車値の真値化: `0件`

## 整合情報
- PDF SHA-256: `c6294a3297daf587a8c60969d588a78d28ece396a46a3c646131e6edb6e690c7`
- PDF Git blob SHA-1: `91de2def87ab09ea20bbb35029bc1fd612d6bac8`
- source Git blob SHA-1: `49e7e0494f2668181fe1c3eab3f688ff2db6c024`

## 判定
`PASS / PRACTICE_PDF_COMPLETE`

## 現在地
- current_status: `topic_14_practice_pdf_complete`
- 完成数: `13 / 39`
- 次工程: Topic 14 解説画像PowerPoint。固定EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDFは変更しない。
