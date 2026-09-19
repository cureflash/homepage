# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `23 / 39`
- current_status: `topic_24_exam_alignment_complete`
- last_completed_topic: `23 N700S SiC主変換装置`
- active_topic: `24 N700S 主電動機設計の比較`
- next_start: Topic 24の固定5問・17答案要素を基準に解説sourceを作成する

## 完了済み

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

## Topic 24 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 固定過去問: 第二種一次3問＋二次2問 = `5問`
- 一次答案要素: `11`
- 二次答案要素: `6`
- 合計答案要素: `17`
- 既存検証再利用: Topic 10・12の4問・13答案要素
- 新規検証: R7二次「機械・制御」問2 `(1),(3)` = `4 / 4 PASS`
- 新規問題の公式標準解答照合: `4 / 4一致`
- 電気角: 固定第二種過去問の答案要素としては主張せず、SPEC必須一般関係 `θ_e=(P/2)θ_m` として収録責務を固定
- N700S小型軽量化: 第二種過去問固有論点としては主張せず、確認済み一次資料だけで実車接続する
- 未確認N700S主電動機値の真値化: `0件`
- 重複再調査・再解答: `0件`
- 新たなexact blocker: `0件`

固定問題:

1. R7 一次「機械」問2 `(1)〜(5)` — Topic 10検証済み
2. R4 一次「機械」問2 `(3)〜(5)` — Topic 12検証済み
3. R2 一次「機械」問3 `(1),(4),(5)` — Topic 12検証済み
4. R3 二次「機械・制御」問1 `(3),(4)` — Topic 10検証済み
5. R7 二次「機械・制御」問2 `(1),(3)` — 今回新規検証済み

Topic 24 source:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison.md`

Topic 24完成後は、既存検証を流用したまま完了扱いにはせず、Topic 24教材だけで固定 `5問・17答案要素` をclean blind独立再解答する。

## Topic 23 最終品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 一次答案要素: `17 / 17 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_RECOVERY_COMPLETE`
- 最終QA: `PASS / COMPLETED`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 24「N700S 主電動機設計の比較」の解説sourceを作成する。固定5問・17答案要素から逆算し、同期速度、すべり、回転速度、トルク、電気角、SPEC指定3可視化を欠落なく説明する。N700S固有値・小型軽量化は一次資料で確認できた範囲だけを実値として扱う。確定不能事項があれば推測せずexact blockerを記録する。
