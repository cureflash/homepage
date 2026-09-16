# Topic 12 練習PDF QA

更新日: 2026-09-17

## 対象
- PDF: `12_300series_vvvf_inverter_induction_control_practice.pdf`
- source: `12_300series_vvvf_inverter_induction_control_practice_source.md`
- 形式: A4縦2ページ

## source同期
- 一次試験型: `8 / 8` 収録
- 二次試験型: `4 / 4` 収録
- 全12問: 完全解説付き
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・13答案要素を維持
- 固定13答案要素への接続: `13 / 13 PASS`
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
- `一次試験型`、`問8 VVVFと誘導電動機`、`二次試験型`、`問12 トルク-速度特性の読み取り`: 抽出確認 `PASS`

## 計算・論理QA
- sourceで独立再計算・論理・正答一意性確認済み: `12 / 12 PASS`
- PDF収録値の再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 教材外知識補完: `0件`

## SPEC境界
- Topic 13の回生・四象限運転・回生エネルギー追加: `0件`
- ベクトル制御・センサレス制御等のSPEC外制御方式追加: `0件`
- Topic 11のPWMコンバータ側高調波・力率制御・直流中間電圧制御の再展開: `0件`
- 未確認300系実車値の真値化: `0件`
- 問題中の数値は教材用仮定値を維持

## GitHub整合
- Git blob SHA-1: `7d0bde171a13ca4ee6b449983df17cba1c9d848b`
- source Git blob SHA-1: `0bc516e38950bd3c44c4e2181234dbe4f729e11c`

## 判定
`PASS`

## 現在地
- current_status: `topic_12_practice_pdf_complete`
- 完成数: `11 / 39`（Topic 12は最終QA未完了のため増やさない）
- 次工程: Topic 12の解説画像PowerPointを制作する。SPEC指定4可視化（周波数―同期速度、周波数―電圧、回転速度―トルク、回転速度―出力）を収録し、表示QA・overflow・PowerPoint ZIP整合性を確認する。固定EXAM_ALIGNMENTは変更しない。
