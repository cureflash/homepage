# STATUS - 新幹線車両・電験三種

更新日: 2026-09-18

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: `36 / 38`
- current_status: `topic_36_completed`
- last_completed_topic: `36 COSMOS① 新幹線全体を統合管理する`
- active_topic: `37 COSMOS② 新幹線の電力設備を遠隔監視する`
- next_start: Topic 37の制作前EXAM_ALIGNMENT。系列SPEC固定範囲「SCADA、変電所、センサ、遠隔計測、A/D変換、デジタル情報、遠隔制御」について、公式過去問を直近年度から調査し、原則5問以上を固定して制作前blind独立解答へ進む

## 新品質ゲート進捗
- [x] 01〜36 — PASS / COMPLETED
- [ ] 37〜38 — 未着手

## Topic 36 最終QA
判定: `PASS / COMPLETED`。

- 最終QA記録: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_final_qa.md`
- source: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management.md`
- 解説PDF: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_explanation.pdf`
- 練習source: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_practice.md`
- 練習PDF: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_practice.pdf`
- PowerPoint: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_images.pptx`
- 完成後blind独立再解答: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_independent_reanswer.md`

### 固定EXAM_ALIGNMENT
品質ゲート対象は制作前に固定した公式過去問 `5問・8答案要素`。追加・差替えなし。

- R6上 機械 問18(a)(b): 基数表現、符号付き2進数、2の補数、オフセットバイナリ、D-A変換
- R4上 機械 問13: 有線/無線、アナログ/ディジタル、光ファイバ、電波、パリティチェック
- R4上 機械 問14: A-D/D-A変換、インタフェース
- R4下 機械 問18(a)(b): 配列、最大値、平均値、反復、並べ替え、一時変数
- H27 機械 問18(a)(b): コンピュータ構成、CPU、入力/出力/記憶、LAN、RAM/ROM系メモリ

- 制作前blind独立解答: `8 / 8 PASS`
- 解説本文マッピング: `8 / 8答案要素 PASS`
- 練習問題接続: `8 / 8答案要素 PASS`
- PowerPoint可視化: `8 / 8答案要素 PASS`
- 完成後blind独立再解答: `8 / 8答案要素 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識補完: `0件`

### 成果物QA
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 本文: §1〜§16
- 3段階例題: `3 / 3`
- 例題独立再計算: `3 / 3 PASS`
- 解説PDF: A4縦4ページ、180 dpi `4 / 4 PASS`、文字抽出 `PASS`
- 練習source: 全15問（基礎4 / 標準8 / 複合3）、五肢択一 `15 / 15`、完全解説 `15 / 15`
- 練習source独立再解答: `15 / 15 PASS`
- 正答位置: A/B/C/D/E各3問
- 練習PDF: A4縦5ページ、180 dpi `5 / 5 PASS`、文字抽出 `PASS`
- PowerPoint: 16:9・4枚、180 dpi `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`
- 必須4成果物（source / 解説PDF / 練習PDF / PowerPoint）: `4 / 4 EXIST`

### 固定範囲境界
Topic 36は系列SPEC固定範囲「運行管理、車両管理、設備管理、保守管理、情報伝送、ネットワーク、データ処理」内で完結。

- 未確認COSMOS内部ネットワーク/DB/サーバ/通信仕様追加: `0件`
- Topic 37のSCADA・遠隔計測・遠隔制御の体系的先取り: `0件`
- Topic 38の冗長化・バックアップ・障害切替の体系的先取り: `0件`
- 「設備管理」をCOSMOS正式独立サブシステム名として断定: `0件`

## Topic 37 固定範囲
系列SPECどおり、次だけを制作前調査対象とする。

- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

Topic 38の冗長化・バックアップ・フェイルセーフ・障害検知・切替・システム信頼性は先取りしない。

## 完成数
`36 / 38`。次の未完了テーマは Topic 37 `COSMOS② 新幹線の電力設備を遠隔監視する`。