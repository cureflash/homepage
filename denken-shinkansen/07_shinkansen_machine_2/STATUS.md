# STATUS - 新幹線・電験二種「機械・制御」

更新日: 2026-09-16

## 状態
- active_series: `07_shinkansen_machine_2`
- exam_aligned_completed_topics: `9 / 22`
- current_status: `topic_10_practice_pdf_complete`
- last_completed_topic: `09 誘導電動機を自由に操るには？`
- active_topic: `10 新幹線はモーターを発電機にして止まる`
- next_start: Topic 10 解説画像PowerPoint

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

## Topic 10 解説source
- [x] §1 試験論点
- [x] §2 誘導機の `s<0` 発電機運転
- [x] §3 力行／回生の電力フロー
- [x] §4 `P_m=Tω` と四象限運転
- [x] §5 `V_v=V_L+jXI`、`P=V_L I`、PWM変調率
- [x] §6 回生効率
- [x] 頻出ミス・過去問接続・公式まとめ
- [x] 基礎・本試験標準・複合の3段階例題
- [x] 固定5問・15答案要素を本文へマッピング
- [x] 固定範囲外論点・未確認実車値の追加 0件

## Topic 10 解説PDF
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_explanation.pdf`
- [x] A4縦4ページ
- [x] 200 dpi全ページ表示QA `4 / 4 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件`
- [x] 固定一次4問＋二次1問・15答案要素を維持
- [x] 基礎・本試験標準・複合の3段階例題 `3 / 3` 収録
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `4fbb34ed2d2f8d88be5b685ddeaba697ca1177cfa552777e065ddde66d14be77`

## Topic 10 練習問題source
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.md`
- [x] 一次試験型10問・全問五肢択一
- [x] 二次試験型5問・途中式／前提／単位／検算または論証付き
- [x] 独立計算・論理QA `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS`
- [x] 固定一次4問＋二次1問・15答案要素へ全件接続
- [x] 固定範囲外論点・未確認実車値の追加 `0件`

## Topic 10 練習PDF
- [x] `topics/10_regenerative_braking_four_quadrant/10_regenerative_braking_four_quadrant_practice.pdf`
- [x] A4縦6ページ
- [x] 一次10問＋二次5問・完全解説を収録
- [x] 200 dpi全6ページ表示QA `6 / 6 PASS`
- [x] 文字抽出QA PASS / Unicode置換文字 `0件` / `□`置換 `0件`
- [x] 数値・論理再検算 `15 / 15 PASS`
- [x] 一次正答一意性 `10 / 10 PASS` を維持
- [x] 固定一次4問＋二次1問・15答案要素と固定範囲を維持
- [x] 固定範囲外論点・未確認実車値の追加 `0件`
- [x] SHA-256 `b18a4dafb0123a73d6b87ccaf75bd887cf7dcee6e4d510e9b6310fa5ecabc33d`

## 今回進めた内容
Topic 10の練習PDFを完成し、一次10問＋二次5問の全15問と完全解説を収録した。200 dpi全6ページ表示QA `6 / 6 PASS`、文字抽出QA PASS、数値・論理再検算 `15 / 15 PASS`。固定5過去問・15答案要素を維持し、H27/H24の除外小問、Topic 11/16、未確認実車値の追加は0件。

## 判定
Topic 10は `topic_10_practice_pdf_complete / IN_PROGRESS`。完成数は `9 / 22` のまま。次は解説画像PowerPointを作成する。
