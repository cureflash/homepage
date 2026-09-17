# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `35 / 38`
- current_status: `topic_36_independent_reanswer_complete`
- last_completed_topic: `35 COMTRAC③ ダイヤが乱れたらどうする？`
- active_topic: `36 COSMOS① 新幹線全体を統合管理する`
- next_start: Topic 36の最終QA。完成成果物・固定EXAM_ALIGNMENT・完成後blind独立再解答の整合を確認し、source Markdownの進捗記録を同期したうえでPASSならcompletedへ上げる

## 新品質ゲート進捗
- [x] 01〜35 — PASS / COMPLETED
- [ ] 36 — INDEPENDENT_REANSWER_COMPLETE / IN_PROGRESS
- [ ] 37〜38 — 未着手

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
系列SPECどおり次だけを扱う。

- 運行管理
- 車両管理
- 設備管理
- 保守管理
- 情報伝送
- ネットワーク
- データ処理

JR東日本公開資料で確認できるCOSMOSの7サブシステムと「計画・当日実施・実績を一元管理する」公開事実までを新幹線側の根拠とする。系列SPECの「設備管理」は教材上の整理語であり、COSMOSの正式独立サブシステム名とは断定しない。

追加しない:
- COSMOS内部の具体的ネットワーク構成、通信プロトコル、帯域、更新周期、データベース構造、サーバ構成、冗長切替方式
- 公開資料で確認できないサブシステム間のデータ形式・制御ロジック
- Topic 37のSCADA・遠隔計測・遠隔制御の体系的説明
- Topic 38の冗長化・バックアップ・障害切替の体系的説明
- 固定過去問の件数水増しを目的とする範囲外論点

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
- 本文: §1〜§16
- 3段階例題: `3 / 3`
- 例題独立再計算: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT本文マッピング: `8 / 8答案要素 PASS`
- 解説PDF: A4縦4ページ、180 dpi `4 / 4 PASS`、文字抽出 `PASS`
- 練習source: 全15問（基礎4 / 標準8 / 複合3）、全問五肢択一＋完全解説
- 練習source独立再解答: `15 / 15 PASS`
- 正答位置: A/B/C/D/E各3問
- 練習PDF: A4縦5ページ、180 dpi `5 / 5 PASS`、文字抽出 `PASS`
- 固定EXAM_ALIGNMENT練習接続: `8 / 8答案要素 PASS`

## Topic 36 PowerPoint QA
判定: `PASS / POWERPOINT_COMPLETE`。

- PowerPoint: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_images.pptx`
- QA記録: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_images_qa.md`
- 画面比率: `16:9`
- スライド数: `4`
- 固定EXAM_ALIGNMENT可視化: `8 / 8答案要素 PASS`
- 180 dpi全スライド表示QA: `4 / 4 PASS`
- 文字切れ・重なり・黒塗り・欠落: `0件`
- shape geometry overflow: `0件 / PASS`
- PPTX ZIP整合性: `PASS`
- PDF変換: `4ページ / PASS`
- 外部引用画像: `0件`
- 固定範囲外追加: `0件`
- Topic 37先取り: `0件`
- Topic 38先取り: `0件`
- 未確認COSMOS内部仕様追加: `0件`
- 「設備管理」をCOSMOS正式独立サブシステム名として断定: `0件`

## Topic 36 完成後blind独立再解答
判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`。

- 固定公式過去問: `5問・8答案要素`
- 全答案確定後に公式解答表へ照合: `実施済み`
- 結果: `8 / 8答案要素 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識補完: `0件`
- 未確認COSMOS内部仕様依存: `0件`
- Topic 37/38先取り依存: `0件`
- 記録: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_independent_reanswer.md`

## 完成数
`35 / 38` を維持。Topic 36は完成後blind独立再解答までPASSしたが、最終QAとsource Markdownの最終進捗同期が未完了のため completed へ上げない。