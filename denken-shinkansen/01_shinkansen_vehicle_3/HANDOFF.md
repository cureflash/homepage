# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は30/38。01〜30がPASS。active topicは31 `ATC② 地上から車上へどう情報を送る？`。

## 今回進捗
Topic 30 `ATC① 新幹線は列車をどう検知する？` の最終QAを再判定し、`PASS / COMPLETED` とした。前回FAIL要因だった主source冒頭の旧進捗は実態へ同期済みで、必須成果物、固定5問の完成後独立再解答 `5 / 5 PASS`、表示QA、進捗記録整合、固定範囲境界をすべて再確認した。教材本文・固定EXAM_ALIGNMENT・数式・3段階例題・PDF/PPTX・固定範囲は変更していない。

更新:
- `topics/30_atc_train_detection/30_atc_train_detection_final_qa.md` — 最終判定を `PASS / COMPLETED` へ更新
- `STATUS.md` — 完成数30/38、Topic 30 completed、active topicを31へ更新
- `HANDOFF.md` — 次開始点をTopic 31制作前EXAM_ALIGNMENTへ更新

## Topic 30 固定EXAM_ALIGNMENT
1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。
完成後独立再解答: `5 / 5 PASS`。
公式解答との不一致0件。教材外知識補完0件。

## Topic 30 成果物・QA
- 解説source: 制作前EXAM_ALIGNMENT＋本文§1〜§15＋3段階例題。進捗記録整合PASS
- 解説PDF: A4縦4ページ、180 dpi全ページ表示QA・文字抽出QA PASS
- 練習source/PDF: 15問（基礎4／標準8／複合3）、全問五肢択一＋完全解説、独立QA `15 / 15 PASS`、PDF表示QA `4 / 4 PASS`
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、ZIP整合性PASS
- 完成後独立再解答: `5 / 5 PASS`
- 最終QA: `PASS / COMPLETED`
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`

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
- `current_status`: `topic_30_completed`
- 完成数: 30/38
- 01〜30: PASS
- active topic: 31 `ATC② 地上から車上へどう情報を送る？`

## 次の正確な開始点
Topic 31の制作前EXAM_ALIGNMENTを行う。系列SPECの固定範囲を確認し、公式過去問を直近年度優先で調査して必要論点へ対応する問題だけを固定する。件数合わせで固定範囲外へ広げず、固定した過去問を教材制作前に独立解答して公式解答と照合する。
