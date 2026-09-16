# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: `11 / 16`
- current_status: `topic_12_explanation_source_complete`
- last_completed_topic: `11 空転した車輪をどう立て直す？`
- active_topic: `12 新幹線のコンピュータは何をしている？`
- next_start: Topic 12の解説PDFを作成する

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
- [x] 11 空転した車輪をどう立て直す？ — 品質ゲートPASS / completed
- [ ] 12 新幹線のコンピュータは何をしている？ — 解説本文＋3段階例題完成 / IN_PROGRESS
- [ ] 13〜16 — 未完了

## Topic 12 制作品質状態
- 固定範囲: 2進数 / 16進数 / ビット / バイト / 論理回路 / AND / OR / NOT / NAND / NOR / XOR / 論理式 / 真理値表 / A/D変換 / D/A変換 / センサ / 情報伝送
- 基本構成: `センサ → 電気信号 → A/D変換 → デジタルデータ → 演算・論理判断 → 制御指令 → 機器`
- 固定EXAM_ALIGNMENT: R8上 機械 問14 / R8上 機械 問18(a)(b) / R7上 機械 問14 / R5下 機械 問14 / R1 機械 問14 / H28 機械 問18(a)(b)
- 品質ゲート対象: `6問・8答案要素`
- 制作前独立検証・公式解答照合: `8 / 8 PASS`
- 固定過去問要求事項の本文マッピング: `8 / 8 PASS`
- 3段階例題: `3 / 3 PASS`
- 解説source QA: `PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 件数合わせの仕様外追加: `0件`
- 非選定: R7下 機械 問14（フローチャート） / R6上 機械 問18（符号付き8bit・補数表現を含む） / R4上 機械 問14（インタフェースを含む）
- R6下 機械 問14: R7上 問14と同一問題のため二重加算せず
- カルノー図: 参考教材では確認したが系列SPEC固定範囲外のため追加しない
- 車種固有通信規格・伝送速度・CPU構成・通信周期等の推測: `0件`
- source: `topics/12_information_processing/12_information_processing.md`
- 解説本文: 完成
- 解説PDF: 未作成
- 練習問題source/PDF: 未作成
- 解説画像PowerPoint: 未作成
- 完成後blind独立再解答: 未実施

## Topic 11 最終品質状態
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
- 解説画像PowerPoint: 完成（16:9・4枚）
- PowerPoint表示QA: `4 / 4 PASS`
- PowerPointスライド外はみ出し: `0件`
- PowerPoint文字欠落・重なり・判読不能: `0件`
- PowerPoint ZIP整合性: `PASS`
- PowerPoint固定過去問接続: `1 / 1`
- 完成後独立再解答: `(4)` / 公式解答 `(4)` / `1 / 1 PASS`
- 独立再解答記録: `topics/11_readhesion_control/11_readhesion_control_independent_reanswer.md`
- 教材外・固定範囲外知識による補完: `0件`
- 件数合わせの固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 実車固有アルゴリズムの推測: `0件`
- R4上 機械 問14: A-D/D-A変換等が固定範囲外のため非選定
- R6上 機械 問13: シーケンス制御・インタロック・タイムチャートが固定範囲外のため非選定
- 前回最終QA: `NEEDS_REVISION`
- 前回最終QA技術内容: `PASS`
- 前回最終QA必須成果物: `PASS`
- 前回最終QA表示QA: `PASS`
- 前回最終QA固定範囲境界: `PASS`
- 前回最終QA進捗記録整合: `FAIL`（旧進捗3箇所）
- 旧進捗3箇所: 同期済み
- 最終QA再判定: `PASS`
- 最終QA技術内容: `PASS`
- 最終QA必須成果物: `PASS`
- 最終QA表示QA: `PASS`
- 最終QA進捗記録整合: `PASS`
- 最終QA固定範囲境界: `PASS`
- source: `topics/11_readhesion_control/11_readhesion_control.md`
- explanation PDF: `topics/11_readhesion_control/11_readhesion_control_explanation.pdf`
- explanation PDF QA: `topics/11_readhesion_control/11_readhesion_control_explanation_pdf_qa.md`
- practice source: `topics/11_readhesion_control/11_readhesion_control_practice.md`
- practice PDF: `topics/11_readhesion_control/11_readhesion_control_practice.pdf`
- practice PDF QA: `topics/11_readhesion_control/11_readhesion_control_practice_pdf_qa.md`
- PowerPoint: `topics/11_readhesion_control/11_readhesion_control_images.pptx`
- PowerPoint QA: `topics/11_readhesion_control/11_readhesion_control_powerpoint_qa.md`

## 今回進捗
Topic 12「新幹線のコンピュータは何をしている？」の解説本文＋3段階例題を完成した。固定6問・8答案要素を本文へ `8 / 8` マッピングし、基数変換、2進数和差・逆算、基本ゲート・真理値表、論理式簡単化、組合せ回路の区間別出力追跡、A/D・D/A、センサ、情報伝送を系列SPEC固定範囲だけで説明した。

例題は基礎・本試験標準・複合の `3 / 3 PASS`。フローチャート、記憶装置、符号付き2進数・補数表現、インタフェース規格、カルノー図、車種固有通信仕様等の追加・推測は0件。

## 次工程
Topic 12の解説本文＋3段階例題をA4縦の解説PDFへ反映し、表示QA・文字抽出QA・固定EXAM_ALIGNMENT `8 / 8` の反映を確認する。