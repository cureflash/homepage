# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は29/38。01〜29がPASS。active topicは30 `ATC① 新幹線は列車をどう検知する？`。

## 今回進捗
Topic 30の解説PDFを完成した。完成済みsourceの§1〜§15＋3段階例題をA4縦4ページへ整形し、固定EXAM_ALIGNMENT 5問の解法経路を維持した。180 dpiで全4ページ表示QA PASS、文字抽出QA PASS。信号周波数・符号化・速度照査・論理制御等への拡張、未確認実車値追加はいずれも0件。

更新:
- `topics/30_atc_train_detection/30_atc_train_detection.md` — 解説PDF完成状態へ進捗同期
- `topics/30_atc_train_detection/30_atc_train_detection_explanation.pdf` — A4縦4ページ、180 dpi表示QA・文字抽出QA PASS
- `STATUS.md` — `topic_30_explanation_pdf_complete` へ更新
- `HANDOFF.md` — 次開始点をTopic 30練習問題source/PDFへ更新

## Topic 30 固定EXAM_ALIGNMENT
1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。公式解答との不一致0件。

## 解説本文・PDF完成内容
- §1〜§5: 電験で問う内容、軌道回路、オームの法則、直列・並列、開放・短絡
- §6〜§10: 分圧、並列枝電流、車軸短絡、リレー、スイッチ開閉問題の状態別等価回路
- §11〜§15: 共通解法アルゴリズム、頻出ミス、新幹線接続、固定5問対応表、公式まとめ
- 例題1: 並列枝の未知抵抗
- 例題2: 分圧→並列枝追加→端子短絡
- 例題3: 車軸短絡を模した教材用仮定回路。仮定値であることを明記し、実車値扱いしていない
- PDF: A4縦4ページ、180 dpi全ページ表示QA `4 / 4 PASS`、文字抽出QA PASS

固定5問の要求事項は本文・PDFへ `5 / 5` 接続済み。

## 新幹線側根拠
- JRTT 信号: `https://www.jrtt.go.jp/construction/technology/signal.html`
  - 左右レールを車輪・車軸で電気的に短絡して列車検知する原理を確認
- 鉄道総研 擬似軌道回路: `https://www.rtri.or.jp/rd/division/rd47/rd4710/rd47100201.html`
  - レールへ電気を流して列車を検知する軌道回路がATC等に用いられることを確認
- 参照日: 2026-09-15

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
- `current_status`: `topic_30_explanation_pdf_complete`
- 完成数: 29/38
- 01〜29: PASS
- active topic: 30 `ATC① 新幹線は列車をどう検知する？`

## 次の正確な開始点
Topic 30の練習問題source/PDFを作成する。三種仕様に従い原則12問以上、少なくとも半数を五肢択一とし、全問に完全解説を付ける。固定5過去問の要求事項を全件カバーし、後続Topic 31・32の論点へ広げず、未確認実車値を追加しない。
