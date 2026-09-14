# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は29/38。01〜29がPASS。active topicは30 `ATC① 新幹線は列車をどう検知する？`。

## 今回進捗
Topic 30の最終QAを実施し、`NEEDS_REVISION / IN_PROGRESS` と判定した。必須成果物、固定5問の完成後独立再解答 `5 / 5 PASS`、PDF/PPTX表示QA、固定範囲境界はすべてPASS。未完了理由は主source `30_atc_train_detection.md` 冒頭に `練習・PowerPoint・完成後独立再解答は未着手` という旧進捗が1箇所残っているため。教材内容・過去問対応・成果物自体の修正は不要。

更新:
- `topics/30_atc_train_detection/30_atc_train_detection_final_qa.md` — 最終QA `NEEDS_REVISION` を記録
- `STATUS.md` — `topic_30_final_qa_needs_revision` へ更新
- `HANDOFF.md` — 次開始点を主source進捗同期へ更新

## Topic 30 固定EXAM_ALIGNMENT
1. R8上 理論 問7 — 並列抵抗の電圧・電流から未知抵抗式を導出 — `4` — PASS
2. R7上 理論 問6 — 分圧・並列追加後の電圧から抵抗を復元し、端子間短絡電流を求める — `2` — PASS
3. R7上 理論 問7 — スイッチ開閉による電流変化から未知抵抗を求める — `1` — PASS
4. R5下 理論 問7 — 切換スイッチ3状態の電流から未知抵抗を求める — `5` — PASS
5. H27 理論 問6 — スイッチ開閉前後で全電流が同じ条件から未知抵抗を求める — `2` — PASS

制作前独立解答: `5 / 5 PASS`。
完成後独立再解答: `5 / 5 PASS`。
公式解答との不一致0件。教材外知識補完0件。

## 最終QA内訳
- 必須成果物存在: PASS
- 固定5問の完成後独立再解答: `5 / 5 PASS`
- 解説PDF: A4縦4ページ、180 dpi全ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦4ページ、180 dpi全ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、ZIP整合性PASS
- 固定範囲外追加: `0件`
- 未確認実車値追加: `0件`
- 進捗記録整合: FAIL
  - 主source冒頭の状態欄だけが旧進捗
- 総合判定: `NEEDS_REVISION / IN_PROGRESS`

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
- `current_status`: `topic_30_final_qa_needs_revision`
- 完成数: 29/38
- 01〜29: PASS
- active topic: 30 `ATC① 新幹線は列車をどう検知する？`

## 次の正確な開始点
`topics/30_atc_train_detection/30_atc_train_detection.md` 冒頭の「状態」だけを、練習source/PDF・PowerPoint・完成後独立再解答まで完了している実態へ同期する。教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、PDF、練習問題、PowerPoint、固定範囲は変更しない。同期後に最終QAを再判定する。
