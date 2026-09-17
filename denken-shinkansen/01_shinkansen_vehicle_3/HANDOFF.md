# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は34/38。01〜34がPASS。active topicは35 `COMTRAC③ ダイヤが乱れたらどうする？`。

## 今回進捗
Topic 35の前回最終QAで唯一FAILだった進捗記録3箇所を実成果物へ同期した。`topic_35_progress_records_synced / IN_PROGRESS`。

- main source冒頭 `## 状態` を、解説PDF・練習source/PDF・PowerPoint・完成後blind独立再解答完了状態へ同期
- main source `次工程` を「解説PDF作成」から「最終QA再実施」へ同期
- 解説PDF QA `次工程` を「練習source」から「最終QA再実施」へ同期
- 固定EXAM_ALIGNMENT 5問: 変更なし
- 完成後blind独立再解答: `5 / 5問 PASS` のまま
- 技術本文・問題/正答・PDF/PPTX: 変更なし
- 完成数は `34 / 38` 維持
- 次工程: Topic 35の最終QA再実施

## Topic 35 固定EXAM_ALIGNMENT
- R7下 機械 問14 — フローチャート、変数更新、条件分岐、反復
- R5上 機械 問14 — フローチャート、変数更新、条件分岐、反復
- R4下 機械 問13 — 伝送路、雑音、多重化、変調波、標本化、圧縮
- R4下 理論 問14 — 標本化、量子化、符号化、ディジタル伝送、A-D変換
- H26 機械 問13 — シーケンス制御、工程・手順、条件による動作、PLC

制作前独立解答: `5 / 5問 PASS`。
完成後blind独立再解答: `5 / 5問 PASS`。
公式解答との不一致: `0件`。
教材外知識補完: `0件`。
固定範囲外知識による正答補完: `0件`。
未確認COMTRAC内部仕様依存: `0件`。

## Topic 35 解説source
- 本文: §1〜§15
- 3段階例題: 基礎「代入と条件分岐」／標準「変数更新と反復」／複合「標本化・量子化・条件判断」
- 固定EXAM_ALIGNMENT: `5 / 5問` 本文マッピング済み
- フローチャート: 処理→更新→判定→分岐の順で追跡
- 変数更新: 更新前/更新後を表で分離し、反復ごとに値を保持
- シーケンス制御: 定めた手順・条件に従う制御。フィードバック制御との区別を明示
- PLC: 入力を読み、記憶プログラムに従い論理・順序処理して出力する一般説明まで
- 情報伝送: 伝送路、雑音、多重化、搬送波、変調波、圧縮
- A-D変換: 標本化→量子化→符号化、`f_s>=2f_max`、`T_s=1/f_s`、`L=2^n`
- COMTRAC接続: 運転管理・運転計画変更・遅延波及防止・第2総合指令所の公開事実まで
- 具体的列車優先順位・番線変更判定式・運転整理ルール・内部切替方式は追加していない
- 機能分散を冗長化と同義にしていない
- Topic 36以降先取り: `0件`
- 未確認COMTRAC内部仕様追加: `0件`

## Topic 35 解説PDF
- `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_explanation.pdf`
- A4縦5ページ
- 本文§1〜§15＋3段階例題を収録
- 固定EXAM_ALIGNMENT: `5 / 5問` 反映
- 180 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`
- QA記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_explanation_pdf_qa.md`

## Topic 35 練習source
- `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_practice.md`
- 全15問（基礎4／標準8／複合3）
- 全問五肢択一＋完全解説
- 正答位置: A/B/C/D/E各3問
- 固定EXAM_ALIGNMENT: `5 / 5` 練習マッピング
- 独立数値・論理再計算: `15 / 15 PASS`
- 複数正答: `0件`
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`

## Topic 35 練習PDF
- `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_practice.pdf`
- A4縦5ページ
- 全15問（基礎4／標準8／複合3）＋完全解説
- 正答位置: A/B/C/D/E各3問
- 180 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- 独立数値・論理再計算: `15 / 15 PASS`
- 固定EXAM_ALIGNMENT: `5 / 5` 接続
- 複数正答: `0件`
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`
- QA記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_practice_pdf_qa.md`

## Topic 35 PowerPoint QA
- `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_images.pptx`
- 画面比率: `16:9`
- スライド数: `3`
- 固定EXAM_ALIGNMENT: `5 / 5問` 可視化
- 180 dpi全スライド表示QA: `3 / 3 PASS`
- overflow検査: `0件 / PASS`
- PPTX ZIP整合性: PASS
- 外部引用画像: `0件`
- 固定範囲外追加: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様追加: `0件`
- 機能分散と冗長化の混同: `0件`
- QA記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_images_qa.md`

## Topic 35 完成後blind独立再解答
- 記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_independent_reanswer.md`
- 判定: `5 / 5問 PASS`
- 公式解答との不一致: `0件`
- 教材外知識補完: `0件`
- 固定範囲外知識による補完: `0件`
- Topic 36以降先取り: `0件`
- Topic 34論理回路の再体系化: `0件`
- 未確認COMTRAC内部仕様依存: `0件`
- 機能分散と冗長化の混同: `0件`

## Topic 35 最終QA
- 記録: `topics/35_comtrac_disruption_management/35_comtrac_disruption_management_final_qa.md`
- 判定: `NEEDS_REVISION / IN_PROGRESS`
- 技術内容・固定EXAM_ALIGNMENT・完成後blind独立再解答・練習QA・PDF/PPTX表示QA・固定範囲境界: PASS
- 進捗記録整合: FAIL（旧工程3箇所のみ）
- 完成数: `34 / 38` 維持

## Topic 35 進捗記録同期
- 判定: `topic_35_progress_records_synced / IN_PROGRESS`
- 旧工程3箇所を実成果物へ同期済み
- 技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果: 変更なし
- 完成数: `34 / 38` 維持
- 次工程: Topic 35の最終QA再実施

## Topic 35 系列SPEC固定範囲
扱う: 遅延、列車順序、番線変更、運転整理、情報処理、条件分岐、冗長化。

新幹線側はJR東海・JR東海情報システムの公開資料で確認できるCOMTRACの運転管理、運転計画変更、遅延波及防止、第2総合指令所までを根拠とする。具体的な列車優先順位、番線変更判定式、運転整理ルール、自動化範囲、内部切替方式は断定しない。2018年JR東海資料の「複数計算機への機能分散」は故障影響範囲を小さくする構成変更として扱い、冗長化と同義にしない。

追加しない:
- COMTRAC内部の具体的な列車優先順位、進路選択アルゴリズム、番線変更判定式、運転整理ルール、データ構造、更新周期、通信プロトコル
- 公開資料で確認できない自動化範囲や指令員との役割分担
- 機能分散を冗長化と同義とすること
- Topic 36以降の固定範囲の先取り
- Topic 34の論理回路を再度体系化して範囲を拡張すること

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
- `current_status`: `topic_35_progress_records_synced`
- 完成数: 34/38
- 01〜34: PASS
- last completed: 34 `COMTRAC② 進路をどう自動制御する？`
- active topic: 35 `COMTRAC③ ダイヤが乱れたらどうする？`

## 次の正確な開始点
Topic 35の最終QAを再実施する。前回唯一FAILだった進捗記録整合を再確認し、技術本文・固定EXAM_ALIGNMENT・問題/正答・PDF/PPTX・blind独立再解答結果は変更しない。
