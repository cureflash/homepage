# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。次のactive topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 36を完成後blind独立再解答完了状態から1段階進め、最終QAを実施した。固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、各QA記録、完成後blind独立再解答を横断確認し、必須成果物の実在、試験対応、範囲境界、進捗記録の整合を確認した。

判定: `PASS / COMPLETED`。

- 最終QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_final_qa.md`
- 固定公式過去問: `5問・8答案要素`、制作前から追加・差替えなし
- 制作前blind独立解答: `8 / 8 PASS`
- 解説本文マッピング: `8 / 8答案要素 PASS`
- 練習問題接続: `8 / 8答案要素 PASS`
- PowerPoint可視化: `8 / 8答案要素 PASS`
- 完成後blind独立再解答: `8 / 8答案要素 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識補完: `0件`
- 未確認COSMOS内部仕様依存: `0件`
- 完成数: `36 / 38`

## Topic 36 完成成果物
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
- 最終QA: `topics/36_cosmos_integrated_management/36_cosmos_integrated_management_final_qa.md`

## Topic 36 最終QA要約
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: A4縦4ページ、180 dpi `4 / 4 PASS`、文字抽出 `PASS`
- 練習source: 15問（基礎4 / 標準8 / 複合3）、五肢択一 `15 / 15`、完全解説 `15 / 15`、独立再解答 `15 / 15 PASS`
- 練習PDF: A4縦5ページ、180 dpi `5 / 5 PASS`、文字抽出 `PASS`
- PowerPoint: 16:9・4枚、180 dpi `4 / 4 PASS`、overflow `0件`、ZIP整合性 `PASS`
- 必須4成果物（source / 解説PDF / 練習PDF / PowerPoint）: `4 / 4 EXIST`
- 固定範囲外追加: `0件`
- Topic 37先取り: `0件`
- Topic 38先取り: `0件`
- 「設備管理」をCOSMOS正式独立サブシステム名として断定: `0件`

## 現在の状態
- `current_status`: `topic_36_completed`
- 完成数: `36 / 38`
- 01〜36: PASS / COMPLETED
- last completed: 36 `COSMOS① 新幹線全体を統合管理する`
- active topic: 37 `COSMOS② 新幹線の電力設備を遠隔監視する`

## Topic 37 系列SPEC固定範囲
主題: 変電所・き電設備などの監視と制御。

扱う内容:
- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## 次の正確な開始点
Topic 37の制作前EXAM_ALIGNMENT。MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPECを再確認したうえで、系列SPEC固定範囲に直接対応する電験三種公式過去問を直近年度から調査し、原則5問以上を固定する。公式問題・公式解答を最優先し、参考教材は最低2系統を確認する。固定後は、公式解答・第三者解説の正答表示を先に見ず、公式問題だけで制作前blind独立解答を実施する。本文制作へはまだ進まない。