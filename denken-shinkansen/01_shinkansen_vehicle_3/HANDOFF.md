# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-16

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は33/38。01〜33がPASS。active topicは34 `COMTRAC② 進路をどう自動制御する？`。

## 今回進捗
Topic 34 `COMTRAC② 進路をどう自動制御する？` の練習source＋練習PDFを完成した。

- source: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.md`
- PDF: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.pdf`
- 全15問（基礎4／標準8／複合3）
- 全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5過去問・6答案要素を `6 / 6` 練習マッピング
- 独立論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦5ページ
- 180 dpi全5ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- Topic 35範囲追加: `0件`
- ExOR/NOR/NAND等の固定範囲外ゲート追加: `0件`
- カルノー図等の高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

教材本文・固定EXAM_ALIGNMENT・制作前独立解答結果は変更していない。

## Topic 34 固定EXAM_ALIGNMENT
- R7上 機械 問14 — AND・OR・NOT、論理回路、出力波形
- R6下 機械 問18(a)(b) — AND・OR・NOT、真理値表、多段論理回路、条件判定
- R5下 機械 問14 — 真理値表から論理式
- R2 機械 問14 — 真理値表から論理式
- H27 機械 問14 — 4入力真理値表から論理式

制作前独立解答: `5 / 5問・6 / 6答案要素 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 35範囲追加: `0件`。
未確認COMTRAC内部仕様追加: `0件`。

完成後blind独立再解答を守るため、個別正答番号・完成済み最終導出式は必須先読みsourceへ保存していない。固定5問は以後変更しない。

## Topic 34 解説source
- 本文: §1〜§15
- 固定5問・6答案要素: `6 / 6` 本文マッピング済み
- AND: `Y=A·B`
- OR: `Y=A+B`
- NOT: 入力反転
- 真理値表: 2入力基本表、`n`入力の行数 `2^n`
- 多段回路: 中間信号を置き入力側から順に評価
- 波形問題: 全変化時刻で区間を切り、各区間の0/1から出力を再構成
- 真理値表→論理式: 候補式を各行へ代入して照合
- 条件判定: 必要条件=AND、代替条件=OR、禁止条件=NOT
- インターロック: 両立してはならない動作を条件で拘束する一般原則
- COMTRAC/PRCの実論理式・判定順序・実インターロック条件とは断定しない

## Topic 34 解説PDF
- `topics/34_comtrac_route_control/34_comtrac_route_control_explanation.pdf`
- A4縦4ページ
- 本文§1〜§15、3段階例題、固定5問・6答案要素の対応を収録
- 180 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- 固定EXAM_ALIGNMENT: `6 / 6` 反映
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## Topic 34 練習source / PDF
- source: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.md`
- PDF: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.pdf`
- 全15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定5問・6答案要素: `6 / 6` 練習マッピング
- 独立論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- A4縦5ページ、180 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## Topic 34 系列SPEC固定範囲
- 進路制御
- 条件判定
- AND
- OR
- NOT
- 真理値表
- インターロック
- 論理回路

主題は「駅の進路と列車運行を安全に制御する」。新幹線側はJR東海・JR東海情報システムの公開資料で確認できるCOMTRAC/PRCの「進路制御」という役割までを根拠とし、具体的論理式・判定順序・インターロック条件・更新周期・通信仕様等は実装事実として断定しない。

追加しない:
- Topic 35の遅延、列車順序変更、番線変更、運転整理、冗長化
- ExOR、NOR、NANDを独立した新規ゲート知識として扱うこと
- カルノー図、ブール代数の高度な簡単化
- COMTRAC内部の具体的優先順位、進路選択アルゴリズム、実際のインターロック条件表、更新周期、伝送速度、通信プロトコル、データ形式
- ATCの速度照査・ブレーキ制御の再説明

## Topic 33 完了記録
Topic 33 `COMTRAC① 東海道新幹線全体をどう監視する？` は `PASS / COMPLETED`。
- 固定公式過去問: 5問
- 制作前独立解答: `5 / 5 PASS`
- 完成後blind独立再解答: `5 / 5 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による正答補完: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 必須成果物・練習QA・表示QA・進捗記録整合・固定範囲境界: PASS
- 最終QA記録: `topics/33_comtrac_train_tracking/33_comtrac_train_tracking_final_qa.md`

## 現在の状態
- `current_status`: `topic_34_practice_pdf_complete`
- 完成数: 33/38
- 01〜33: PASS
- last completed: 33 `COMTRAC① 東海道新幹線全体をどう監視する？`
- active topic: 34 `COMTRAC② 進路をどう自動制御する？`

## 次の正確な開始点
Topic 34の解説画像PowerPointを作成する。固定5問・6答案要素を可視化し、16:9、表示QA・overflow・PPTX整合性を確認する。完成後blind独立再解答へ先行しない。