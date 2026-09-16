# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は34/38。01〜34がPASS。次のactive topicは35 `COMTRAC③ ダイヤが乱れたらどうする？`。

## 今回進捗
Topic 34の最終QAを再実施し、`PASS / COMPLETED` とした。

- 固定5問・6答案要素の完成後blind独立再解答: `5 / 5問・6 / 6答案要素 PASS`
- 必須成果物: PASS
- 練習問題QA: `15 / 15 PASS`
- 解説PDF / 練習PDF / PowerPoint表示QA: PASS
- 進捗記録整合: PASS
- 固定範囲境界: PASS
- Topic 35範囲追加: `0件`
- 固定範囲外ゲート・高度な論理簡単化追加: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果は変更なし

最終QA記録: `topics/34_comtrac_route_control/34_comtrac_route_control_final_qa.md` — `PASS / COMPLETED`。

## Topic 34 固定EXAM_ALIGNMENT
- R7上 機械 問14 — AND・OR・NOT、論理回路、出力波形
- R6下 機械 問18(a)(b) — AND・OR・NOT、真理値表、多段論理回路、条件判定
- R5下 機械 問14 — 真理値表から論理式
- R2 機械 問14 — 真理値表から論理式
- H27 機械 問14 — 4入力真理値表から論理式

制作前独立解答: `5 / 5問・6 / 6答案要素 PASS`。
完成後blind独立再解答: `5 / 5問・6 / 6答案要素 PASS`。
公式解答との不一致: `0件`。
固定範囲外知識による正答補完: `0件`。
Topic 35範囲追加: `0件`。
未確認COMTRAC内部仕様追加: `0件`。

## Topic 34 成果物
- source: `topics/34_comtrac_route_control/34_comtrac_route_control.md` — §1〜§15＋3段階例題、固定6答案要素 `6 / 6` 本文マッピング
- 解説PDF: `topics/34_comtrac_route_control/34_comtrac_route_control_explanation.pdf` — A4縦4ページ、180 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習source: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.md` — 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、独立論理QA `15 / 15 PASS`
- 練習PDF: `topics/34_comtrac_route_control/34_comtrac_route_control_practice.pdf` — A4縦5ページ、180 dpi表示 `5 / 5 PASS`、文字抽出PASS
- PowerPoint: `topics/34_comtrac_route_control/34_comtrac_route_control_images.pptx` — 16:9・4枚、固定6答案要素 `6 / 6` 可視化、表示 `4 / 4 PASS`、overflow・ZIP整合性PASS
- 完成後blind独立再解答: `topics/34_comtrac_route_control/34_comtrac_route_control_independent_reanswer.md` — `5 / 5問・6 / 6答案要素 PASS`
- 最終QA: `topics/34_comtrac_route_control/34_comtrac_route_control_final_qa.md` — `PASS / COMPLETED`

## Topic 34 系列SPEC固定範囲
扱う: 進路制御、条件判定、AND、OR、NOT、真理値表、インターロック、論理回路。

新幹線側はJR東海・JR東海情報システムの公開資料で確認できるCOMTRAC/PRCの「進路制御」という役割までを根拠とし、具体的論理式・判定順序・実インターロック条件・更新周期・通信仕様等は実装事実として断定しない。

追加しない:
- Topic 35の遅延、列車順序変更、番線変更、運転整理、冗長化
- ExOR、NOR、NANDを独立した新規ゲート知識として扱うこと
- カルノー図、ブール代数の高度な簡単化
- COMTRAC内部の具体的優先順位、進路選択アルゴリズム、実際のインターロック条件表、更新周期、伝送速度、通信プロトコル、データ形式
- ATCの速度照査・ブレーキ制御の再説明

## 現在の状態
- `current_status`: `topic_34_completed`
- 完成数: 34/38
- 01〜34: PASS
- last completed: 34 `COMTRAC② 進路をどう自動制御する？`
- active topic: 35 `COMTRAC③ ダイヤが乱れたらどうする？`

## 次の正確な開始点
Topic 35の制作前EXAM_ALIGNMENT。系列SPEC固定範囲は「遅延、列車順序、番線変更、運転整理、情報処理、条件分岐、冗長化」。公式過去問を直近年度から調査し、三種原則5問以上（該当が5問未満なら確認できた全件）を固定して、制作前独立解答を通過するまで本文制作へ進まない。
