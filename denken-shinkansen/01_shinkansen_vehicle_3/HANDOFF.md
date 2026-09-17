# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `35 / 38`。01〜35がPASS。active topicは36 `COSMOS① 新幹線全体を統合管理する`。

## 今回進捗
Topic 36をPowerPoint完了状態から1段階進め、完成後blind独立再解答を実施した。公式解答・第三者解説の正答表示を開く前に、公式問題PDFと完成教材だけで固定5問・8答案要素の全答案と根拠を確定し、その後で公式解答表へ照合した結果 `8 / 8 PASS`。教材外知識補完、固定範囲外知識補完、未確認COSMOS内部仕様依存はいずれも0件。

- 完成後blind独立再解答: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_independent_reanswer.md`
- 判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`
- 固定公式過去問: `5問・8答案要素`
- R6上 機械 問18(a)(b): `2 / 2 PASS`
- R4上 機械 問13・問14: `2 / 2 PASS`
- R4下 機械 問18(a)(b): `2 / 2 PASS`
- H27 機械 問18(a)(b): `2 / 2 PASS`
- 集計: `8 / 8答案要素 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識補完: `0件`
- Topic 37のSCADA・遠隔計測・遠隔制御の体系的先取り依存: `0件`
- Topic 38の冗長化・バックアップ・障害切替の体系的先取り依存: `0件`
- 未確認COSMOS内部仕様依存: `0件`
- 「設備管理」をCOSMOS正式独立サブシステム名として断定: `0件`
- 完成数: `35 / 38` 維持

## Topic 36 固定EXAM_ALIGNMENT
品質ゲート対象は公式過去問 `5問・8答案要素`。固定後の追加・差替えなし。

- R6上 機械 問18(a)(b): 基数表現、符号付き2進数、2の補数、オフセットバイナリ、D-A変換
- R4上 機械 問13: 有線/無線、アナログ/ディジタル、光ファイバ、電波、パリティチェック
- R4上 機械 問14: A-D/D-A変換、インタフェース
- R4下 機械 問18(a)(b): 配列、最大値、平均値、反復、並べ替え、一時変数
- H27 機械 問18(a)(b): コンピュータ構成、CPU、入力/出力/記憶、LAN、RAM/ROM系メモリ

制作前blind独立解答: `8 / 8 PASS`。
完成後blind独立再解答: `8 / 8 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認COSMOS内部仕様依存: `0件`。

## Topic 36 固定範囲
扱う: 運行管理、車両管理、設備管理、保守管理、情報伝送、ネットワーク、データ処理。

新幹線側はJR東日本公開資料で確認できるCOSMOSの7サブシステムと、計画・当日実施・実績を一元管理する公開事実までを根拠とする。系列SPECの「設備管理」は教材上の整理語であり、COSMOSの正式独立サブシステム名とは断定しない。

追加しない:
- COSMOS内部の具体的ネットワーク構成、通信プロトコル、帯域、更新周期、データベース構造、サーバ構成、冗長切替方式
- 公開資料で確認できないサブシステム間のデータ形式・制御ロジック
- Topic 37のSCADA・遠隔計測・遠隔制御の体系的説明
- Topic 38の冗長化・バックアップ・障害切替の体系的説明

## Topic 36 成果物
- source: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management.md`
- 解説source QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_explanation_source_qa.md`
- 解説PDF: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_explanation.pdf`
- 解説PDF QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_explanation_pdf_qa.md`
- 練習source: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_practice.md`
- 練習source QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_practice_source_qa.md`
- 練習PDF: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_practice.pdf`
- 練習PDF QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_practice_pdf_qa.md`
- PowerPoint: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_images.pptx`
- PowerPoint QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_images_qa.md`
- 完成後blind独立再解答: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_independent_reanswer.md`

## Topic 36 既完成QA
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: A4縦4ページ、180 dpi `4 / 4 PASS`、文字抽出 `PASS`
- 練習source: 15問（基礎4 / 標準8 / 複合3）、全問五肢択一＋完全解説、独立再解答 `15 / 15 PASS`
- 練習PDF: A4縦5ページ、180 dpi `5 / 5 PASS`、文字抽出 `PASS`
- 固定EXAM_ALIGNMENT本文・練習・PowerPoint接続: `8 / 8答案要素 PASS`
- PowerPoint: 16:9・4枚、180 dpi `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`
- 完成後blind独立再解答: `8 / 8答案要素 PASS`

## 現在の状態
- `current_status`: `topic_36_independent_reanswer_complete`
- 完成数: `35 / 38`
- 01〜35: PASS / COMPLETED
- last completed: 35 `COMTRAC③ ダイヤが乱れたらどうする？`
- active topic: 36 `COSMOS① 新幹線全体を統合管理する`

## 次の正確な開始点
Topic 36の最終QA。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、各QA記録、完成後blind独立再解答を横断確認する。source Markdownの状態・独立再解答結果・次工程を現在の実成果物へ同期し、固定5問・8答案要素の試験対応品質ゲート、固定範囲境界、実在成果物の整合がすべてPASSした場合のみTopic 36を `completed` へ上げる。Topic 37へはまだ進まない。