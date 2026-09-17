# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-18

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は `36 / 38`。01〜36がPASS。active topicは37 `COSMOS② 新幹線の電力設備を遠隔監視する`。

## 今回進捗
Topic 37を1段階進め、完成済み練習sourceだけを正本として練習PDFを作成した。全15問・全選択肢・全正答・完全解説を反映し、固定5問・6答案要素との練習接続を維持した。A4縦3ページを180 dpiで全ページ表示確認し、文字抽出、問題/解答整合、範囲境界をQAした。

判定: `PASS / PRACTICE_PDF_COMPLETE`。

- 練習PDF: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice.pdf`
- 練習PDF QA: `topics/37_cosmos_power_remote_monitoring/37_cosmos_power_remote_monitoring_practice_pdf_qa.md`
- A4縦: PASS
- ページ数: `3`
- 表示QA: `3 / 3 PASS (180 dpi)`
- 文字切れ・重なり・黒塗り・欠落: `0件`
- PDF文字抽出: PASS
- Q1〜Q15: `15 / 15`
- 正答表記: `15 / 15`
- 正答位置: A=3 / B=3 / C=3 / D=3 / E=3
- 固定EXAM_ALIGNMENT: `5問・6答案要素 / 6 / 6 PASS`
- sourceとの問題・正答・解説不一致: `0件`
- 固定問題差替え: `0件`
- 固定範囲外追加: `0件`
- Topic 38先取り: `0件`
- COSMOS-SCADA未確認内部仕様追加: `0件`
- 完成数: `36 / 38`

## Topic 37 練習PDF内容
1. Q1〜Q4: 基礎4問
2. Q5〜Q12: 本試験標準8問
3. Q13〜Q15: 複合3問
4. 全15問五肢択一・完全解説
5. 固定EXAM_ALIGNMENT 5問・6答案要素の練習接続表
6. 系列SPEC固定範囲とTopic 38境界の明示

## 固定EXAM_ALIGNMENT練習接続
1. R6上 法規 問7 — Q8, Q9, Q14, Q15
2. R3 機械 問14 — Q4, Q11, Q13
3. R1 理論 問18(a) — Q5, Q13
4. R1 理論 問18(b) — Q6, Q13
5. H26 機械 問13 — Q2, Q7, Q14, Q15
6. H23 法規 問6 — Q9, Q15

結果: `6 / 6答案要素 PASS`。

## Topic 37 系列SPEC固定範囲
扱う内容:
- SCADA
- 変電所
- センサ
- 遠隔計測
- A/D変換
- デジタル情報
- 遠隔制御

境界:
- COSMOS-SCADA内部のデータ形式、通信プロトコル、ネットワーク構成、更新周期、サーバ構成、データベース構造は推測しない。
- 転送遮断装置の方式をCOSMOS-SCADAの実装方式とは断定しない。
- Topic 38の冗長化・バックアップ・フェイルセーフ・論理回路・障害検知・切替・システム信頼性は先取りしない。

## 次の正確な開始点
Topic 37の解説画像PowerPoint作成。完成済み `37_cosmos_power_remote_monitoring.md` と固定EXAM_ALIGNMENTだけを正本として可視化し、16:9表示、overflow、PPTX ZIP整合性、固定EXAM_ALIGNMENT反映、範囲境界をQAする。完成後blind独立再解答へはまだ進まない。
