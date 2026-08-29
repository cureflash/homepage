# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 17 / 38
- current_status: `topic_18_exam_alignment_complete`
- last_completed_topic: `17 E5系 320km/h運転`
- active_topic: `18 E7・W7系 北陸新幹線の電源条件`
- next_start: topic 18の解説PDF本文制作から開始する

## 新品質ゲート進捗
- [x] 01〜17 — PASS
- [ ] 18 E7・W7系 北陸新幹線の電源条件 — EXAM_ALIGNMENT完了、教材本体未作成

## 18 制作前EXAM_ALIGNMENT
公式過去問5件を固定した。
1. R6上 機械 問4 — V/f一定、同期速度、すべり、実回転速度。
2. R5下 機械 問15 — すべり周波数、40Hzインバータ運転、周波数変更後の同期速度。
3. R5上 機械 問4 — 同期速度、すべり、軸出力、トルク。
4. H28 機械 問4 — 50Hz・6極、同期速度、同期ワット。
5. R3 機械 問10 — `P=Fv/η` 型の必要動力計算。

教材必須範囲は、50/60Hzの入力電源条件、主変換装置が生成する駆動周波数との区別、`Ns=120f/p`、すべり・二次周波数、V/f、`P=Tω`、30‰勾配を `P=Fv` へ変換する解法とした。

## 参照資料
- 一般財団法人 電気技術者試験センター公式過去問題・公式解答
- `https://e-sysnet.com/`
- `https://yaku-tik.com/denken/r5f-k04/`
- `https://yaku-tik.com/denken/h28-k04/`
- `https://yaku-tik.com/denken/r3-k10/`
- JR東日本 E7系公式ページ `https://www.jreast.co.jp/en/train/shinkan/e7.html`
- JR西日本 W7系/E7系共同開発資料 `https://www.westjr.co.jp/press/article/2015/05/page_7157.html`
参照日: 2026-08-30。

## 実車条件
JR東日本公式で北陸新幹線の30‰勾配、電源周波数変化、E7系の50/60Hz両対応システム、最高速度275km/hを確認。JR西日本公式でW7系とE7系が共同開発車両であることを確認した。

未確認の主変圧器巻数、実磁束密度、速度別実トルク、勾配区間の実主電動機入力、実走行抵抗、異周波切替シーケンスは真値化しない。

## 成果物
- source Markdown: `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power.md` — EXAM_ALIGNMENT作成済み
- 解説PDF: 未作成
- 練習PDF: 未作成
- 解説画像PowerPoint: 未作成

## 独立再解答
未実施。教材完成後に選定5件を保存済み正答を先に見ず独立再解答する。

## QA判定
18: `IN_PROGRESS`。制作前EXAM_ALIGNMENTはPASS。教材本体・練習・PowerPoint・完成後独立再解答が未完了のため完成数は17/38のまま。

## Web公開
18は未公開。品質ゲート完了前にcatalogへ登録しない。

## 次
18 `E7・W7系 北陸新幹線の電源条件` の解説PDF本文制作から開始する。
