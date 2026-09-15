# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `9 / 22`
- current_status: `topic_10_exam_alignment_complete`
- last_completed_topic: `09 誘導電動機を自由に操るには？`
- active_topic: `10 新幹線はモーターを発電機にして止まる`
- next_start: Topic 10 解説本文＋3段階例題

## 完了テーマ
- [x] Topic 01 最終QA PASS
- [x] Topic 02 最終QA PASS
- [x] Topic 03 最終QA PASS
- [x] Topic 04 最終QA PASS
- [x] Topic 05 最終QA PASS
- [x] Topic 06 最終QA PASS
- [x] Topic 07 最終QA PASS
- [x] Topic 08 最終QA PASS
- [x] Topic 09 最終QA PASS

## Topic 10 制作前EXAM_ALIGNMENT
- [x] `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列`SPEC.md`確認
- [x] 一次4問＋二次記述1問、計5問を固定
- [x] 固定範囲へ直接対応する15答案要素を品質ゲート対象化
- [x] 制作前独立検証 `15 / 15 PASS`
- [x] 固定範囲外論点による件数合わせ 0件
- [x] H27の回生失効・電力貯蔵・運行間隔は除外
- [x] H24二次問3の無効電流・出力可能領域は除外
- [x] Topic 11半導体損失・熱、Topic 16蓄電池論点の追加 0件
- [x] 未確認実車回生効率の真値化 0件

### 固定過去問
- R06 一次 機械 問2: (1),(2)
- R05 一次 機械 問2: (1),(2),(3),(5)
- H28 一次 機械 問5: (3)〜(5)
- H27 一次 機械 問3: (1),(2)
- H24 二次 機械・制御 問3: (1),(2)a〜c

### 制作前独立検証
- R06 一次 機械 問2: `2 / 2 PASS`
- R05 一次 機械 問2: `4 / 4 PASS`
- H28 一次 機械 問5: `3 / 3 PASS`
- H27 一次 機械 問3: `2 / 2 PASS`
- H24 二次 機械・制御 問3: `4 / 4 PASS`
- 合計: `15 / 15 PASS`

## 今回進めた内容
Topic 10「新幹線はモーターを発電機にして止まる」の制作前EXAM_ALIGNMENTを完成した。

一次4問＋二次1問を固定し、誘導機の `s<0` 発電機運転、回生時のエネルギー変換、架線への電力返送、DCリンクからPWM変換器を介した交流電源への有効電力出力を15答案要素へ分解した。固定範囲外小問は採用せず、制作前独立検証は `15 / 15 PASS`。

## 判定
Topic 10は `topic_10_exam_alignment_complete / IN_PROGRESS`。完成数は `9 / 22` のまま。次は固定EXAM_ALIGNMENTを変更せず、解説本文＋基礎・標準・複合の3段階例題を作成する。