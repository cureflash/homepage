# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: `10 / 16`
- current_status: `topic_11_practice_pdf_complete`
- last_completed_topic: `10 新幹線の速度はどう自動制御される？`
- active_topic: `11 空転した車輪をどう立て直す？`
- next_start: Topic 11の解説画像PowerPointを作成する

## 新品質ゲート進捗
- [x] 01 架線25kVをそのままモーターに入れたらどうなる？ — 品質ゲートPASS / completed
- [x] 02 初代0系はどうやって走っていた？ — 品質ゲートPASS / completed
- [x] 03 直流モーターはどうやって速度を変える？ — 品質ゲートPASS / completed
- [x] 04 300系でモーターが全部変わった — 品質ゲートPASS / completed
- [x] 05 誘導電動機はなぜ勝手に回る？ — 品質ゲートPASS / completed
- [x] 06 新幹線はどうやって速度を変えている？ — 品質ゲートPASS / completed
- [x] 07 GTO→IGBT→SiCで何が変わった？ — 品質ゲートPASS / completed
- [x] 08 N700Sのモーターはなぜ小さくできた？ — 品質ゲートPASS / completed
- [x] 09 新幹線はどうやって電気で止まる？ — 品質ゲートPASS / completed
- [x] 10 新幹線の速度はどう自動制御される？ — 品質ゲートPASS / completed
- [ ] 11 空転した車輪をどう立て直す？ — 練習PDF完成 / 制作中
- [ ] 12〜16 — 未完了

## Topic 11 現在品質状態
- 固定範囲: センサ / 回転速度 / 車輪 / 粘着 / 空転 / 滑走 / フィードバック / 制御指令 / アクチュエータ / メカトロニクス / 応答速度
- 固定EXAM_ALIGNMENT: R4下 機械 問14
- 品質ゲート対象: `1問`
- 制作前独立検証: `1 / 1 PASS`
- 固定過去問要求事項の本文マッピング: `1 / 1 PASS`
- 3段階例題: `3 / 3 PASS`
- 解説source QA: PASS
- 解説PDF: 完成
- 解説PDF表示QA: `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 解説PDF文字切れ・重なり・ページ外はみ出し: `0件`
- 解説PDF固定過去問マッピング: `1 / 1`
- 練習問題source: `12問` 完成
- 練習問題構成: 基礎3 / 本試験標準7 / 複合・応用2
- 練習問題形式: `12 / 12` 五肢択一
- 練習問題独立論理QA: `12 / 12 PASS`
- 練習問題正答一意性QA: `12 / 12 PASS`
- 練習問題→固定EXAM_ALIGNMENT接続: `1 / 1`
- 練習PDF: 完成（A4縦3ページ）
- 練習PDF表示QA: `3 / 3 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF文字切れ・重なり・ページ外はみ出し: `0件`
- 教材外・固定範囲外知識による補完: `0件`
- 件数合わせの固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 実車固有アルゴリズムの推測: `0件`
- R4上 機械 問14: A-D/D-A変換等が固定範囲外のため非選定
- R6上 機械 問13: シーケンス制御・インタロック・タイムチャートが固定範囲外のため非選定
- source: `topics/11_readhesion_control/11_readhesion_control.md`
- explanation PDF: `topics/11_readhesion_control/11_readhesion_control_explanation.pdf`
- explanation PDF QA: `topics/11_readhesion_control/11_readhesion_control_explanation_pdf_qa.md`
- practice source: `topics/11_readhesion_control/11_readhesion_control_practice.md`
- practice PDF: `topics/11_readhesion_control/11_readhesion_control_practice.pdf`
- practice PDF QA: `topics/11_readhesion_control/11_readhesion_control_practice_pdf_qa.md`

## 今回進捗
Topic 11「空転した車輪をどう立て直す？」の練習PDFを完成した。A4縦3ページ、全12問・全問五肢択一、完全解説 `12 / 12` を収録。200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`、文字切れ・重なり・ページ外はみ出し0件。固定R4下 機械 問14への接続 `1 / 1`、練習12問の問題数・正答、固定EXAM_ALIGNMENT・固定範囲・解説本文・解説PDFは変更していない。固定範囲外論点、未確認実車値、実車固有アルゴリズムの推測追加はいずれも0件。

## 次工程
Topic 11の解説画像PowerPointを作成する。固定EXAM_ALIGNMENT、固定範囲、解説本文・解説PDF、練習12問の問題数・正答、練習PDFは変更しない。
