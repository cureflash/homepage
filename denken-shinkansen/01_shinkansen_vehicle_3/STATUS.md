# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 3 / 38
- legacy_artifacts_present: 3 / 38
- current_status: rebuilding_topic_04_exam_alignment_complete
- next_topic: `04 0系② シリコン整流器` のEXAM_ALIGNMENTを基に解説PDF・練習PDF・PowerPointを作成し、visual QA、練習問題独立再計算、公式過去問独立再解答まで行う

## 新品質基準
2026-08-29から `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md` を最優先仕様とする。成果物が存在するだけでは完了とせず、公式過去問マッピング、複数解説資料比較、本試験標準教材、独立過去問再解答までPASSしたテーマのみ完了数へ計上する。

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — PASS
- [x] 03 0系① 主変圧器 — PASS
- [ ] 04 0系② シリコン整流器 — EXAM_ALIGNMENT完了、教材成果物・独立QA未完了

## 04 0系② シリコン整流器 — IN PROGRESS
- [x] source Markdown新規作成
- [x] EXAM_ALIGNMENTを本文作成前に実施
- [x] 公式過去問5問を選定・分析: R3機械問16、H26機械問10、H25機械問9、H24機械問10、R1機械問10
- [x] e-sysnetと電験三種まとめましたの整流・パワエレ解説を比較
- [x] 必須範囲を確定: pn接合/導通判定、半波/全波、R-L負荷、環流ダイオード、コンデンサ平滑、平均値/実効値、ブリッジ導通、サイリスタ整流への接続
- [ ] 解説PDF
- [ ] 練習PDF（12問以上）
- [ ] 解説画像PowerPoint
- [ ] visual QA
- [ ] 練習問題独立再計算
- [ ] 公式過去問独立再解答

現時点の判定は `NEEDS_REVISION / IN_PROGRESS`。成果物と独立QAが未完了のため完了数は3/38のまま。

## 03 0系① 主変圧器 — PASS
公式過去問7問（R6上機械問8・9、R5下機械問8・9、R3機械問15、H30機械問15、H27機械問8）を教材だけで独立再解答し7/7 PASS。解説PDF3ページ、練習14問、PowerPoint2スライドを新品質基準で完成済み。

## 次
`topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier.md` の試験分析を正本として、解説PDFを「試験論点→用語/単位→導通条件→半波/全波平均値→R-L負荷→環流→平滑→解法手順→3段階例題→0系接続→頻出ミス→過去問パターン→まとめ」の順で作る。練習は14問程度、基礎4・標準7・複合3を目安に、半数以上を五肢択一とする。その後PowerPoint、visual QA、全問独立再計算、選定5過去問の独立再解答を実施する。

## 系列遷移
`01` の38テーマが新品質基準で完了したら、MASTER順に `02_shinkansen_power_3` へ自動遷移する。
