# STATUS - 新幹線・電験三種「機械」

更新日: 2026-09-16

## 状態
- active_series: `03_shinkansen_machine_3`
- exam_aligned_completed_topics: `10 / 16`
- current_status: `topic_10_completed`
- last_completed_topic: `10 新幹線の速度はどう自動制御される？`
- active_topic: `11 空転した車輪をどう立て直す？`
- next_start: Topic 11の制作前EXAM_ALIGNMENTを実施する

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
- [ ] 11 空転した車輪をどう立て直す？ — 未完了
- [ ] 12〜16 — 未完了

## Topic 10 最終品質状態
- 固定EXAM_ALIGNMENT: R8上 機械 問13 / R7下 機械 問13 / R5下 機械 問18(a) / R5上 機械 問13 / R4上 機械 問15(a)
- 制作前独立検証: `5 / 5 PASS`
- 固定5件の本文マッピング: `5 / 5 全件`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習問題source: 12問・全問五肢択一、独立計算・論理QA `12 / 12 PASS`、正答一意性QA `12 / 12 PASS`
- 練習PDF: A4縦6ページ、200 dpi表示QA `6 / 6 PASS`、文字抽出QA `PASS`
- 解説画像PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`
- 完成後blind独立再解答: `(4),(3),(5),(1),(2)` / `5 / 5 PASS`
- 教材外・固定範囲外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`
- source進捗整合: `PASS`
- Webカタログ登録: `PASS`
- 最終QA: `PASS / completed`

## 今回進捗
Topic 10の最終QAを再実施した。前回唯一のblockerだった練習source末尾の旧進捗記録が同期済みであることを確認し、必須成果物、固定5件、完成後blind独立再解答、PDF/PPTX QA、source進捗整合、系列SPEC境界を全件PASSと再判定した。教材本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更していない。`qualifications/denken-shinkansen/catalog.json` にTopic 10を登録した。

## 次工程
Topic 11「空転した車輪をどう立て直す？」の制作前EXAM_ALIGNMENTを実施する。