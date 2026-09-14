# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は29/38。01〜29がPASS。active topicは30 `ATC① 新幹線は列車をどう検知する？`。

## 今回進捗
Topic 30の練習問題source＋練習PDFを完成した。15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説とし、固定EXAM_ALIGNMENT 5問の要求事項を全件反復できる構成にした。独立計算・論理QA `15 / 15 PASS`、正答位置A/B/C/D/E各3問、複数正答0件。練習PDFはA4縦4ページ、180 dpi全4ページ表示QA PASS、文字抽出QA PASS。Topic 31・32への範囲拡張、未確認実車値追加はいずれも0件。

更新:
- `topics/30_atc_train_detection/30_atc_train_detection_practice.md` — 15問＋完全解説＋固定5問対応表＋独立QA
- `topics/30_atc_train_detection/30_atc_train_detection_practice.pdf` — A4縦4ページ、180 dpi表示QA・文字抽出QA PASS
- `STATUS.md` — `topic_30_practice_pdf_complete` へ更新
- `HANDOFF.md` — 次開始点をTopic 30解説画像PowerPointへ更新

## Topic 30 固定EXAM_ALIGNMENT
1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。公式解答との不一致0件。

## 練習問題完成内容
- 基礎4問: オームの法則、直列、並列、短絡
- 標準8問: 並列枝電流、分圧＋並列追加＋短絡、スイッチ開閉、3状態切換、短絡後残存抵抗、平衡状態、軌道回路模型
- 複合3問: 低抵抗枝の逆算、通常/並列追加/短絡の連続状態、3状態から未知抵抗と短絡電流を復元
- 固定5問要求事項: `5 / 5` マッピング
- 独立計算・論理QA: `15 / 15 PASS`
- 正答位置: A/B/C/D/E各3問
- 複数正答: 0件
- PDF: A4縦4ページ、180 dpi `4 / 4 PASS`、文字抽出QA PASS

## Topic 30 固定範囲
扱う:
- レール
- 軌道回路
- 車軸短絡
- 電圧
- 電流
- 短絡
- リレー
- 列車検知

追加しない:
- ATC信号の周波数・符号化・情報伝送（Topic 31）
- 速度検出、速度照査、ブレーキ指令、AND/OR、フェイルセーフ（Topic 32）
- リレーシーケンス、保護リレー方式
- RC/RL/RLC過渡現象
- 軌道回路の詳細な信号周波数方式・変調方式・インピーダンスボンド等の方式各論
- 未確認の新幹線軌道回路電圧・電流・車軸短絡抵抗・リレー動作値

## 現在の状態
- `current_status`: `topic_30_practice_pdf_complete`
- 完成数: 29/38
- 01〜29: PASS
- active topic: 30 `ATC① 新幹線は列車をどう検知する？`

## 次の正確な開始点
Topic 30の解説画像PowerPointを作成する。固定5過去問の解法経路を、回路状態の読み替え、直列・並列、分圧、短絡、車軸短絡による受信側状態変化として可視化する。Topic 31・32の論点へ広げず、未確認実車値を追加しない。
