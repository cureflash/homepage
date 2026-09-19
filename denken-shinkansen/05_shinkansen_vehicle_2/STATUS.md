# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `23 / 39`
- current_status: `topic_24_explanation_source_complete`
- last_completed_topic: `23 N700S SiC主変換装置`
- active_topic: `24 N700S 主電動機設計の比較`
- next_start: Topic 24解説sourceから解説PDFを生成し、表示・数式・可視化・固定17答案要素coverageをQAする

## 完了済み

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

## Topic 24 解説source

- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 固定過去問: 第二種一次3問＋二次2問 = `5問`
- 一次説明責務: `11 / 11 covered`
- 二次説明責務: `6 / 6 covered`
- 合計説明責務: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定可視化: `3 / 3 defined`
- 3段階例題: `3 / 3`
- N700S実車接続: 富士電機一次資料で主電動機6極化を確認
- 軽量化境界: SiC主変換装置＋主電動機6極化＋主変圧器冷却方式見直しを合わせ、駆動システム全体で約20%軽量化。主電動機単独・6極化単独の20%とは扱わない
- 未確認N700S実運転周波数・回転速度・トルク・寸法・質量の真値化: `0件`
- Topic 10/12の独立主題再展開: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison.md`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_explanation_source.md`

source段階のcoverage確認であり、完成後clean blind `17 / 17` はまだ実施しない。

## Topic 24 制作前EXAM_ALIGNMENT

- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 固定過去問: 第二種一次3問＋二次2問 = `5問`
- 一次答案要素: `11`
- 二次答案要素: `6`
- 合計答案要素: `17`
- 既存検証再利用: Topic 10・12の4問・13答案要素
- 新規検証: R7二次「機械・制御」問2 `(1),(3)` = `4 / 4 PASS`
- 新規問題の公式標準解答照合: `4 / 4一致`
- 電気角: 固定第二種過去問答案要素とは主張せず、SPEC必須一般関係 `θ_e=(P/2)θ_m` として収録
- 重複再調査・再解答: `0件`

固定問題:

1. R7 一次「機械」問2 `(1)〜(5)` — Topic 10検証済み
2. R4 一次「機械」問2 `(3)〜(5)` — Topic 12検証済み
3. R2 一次「機械」問3 `(1),(4),(5)` — Topic 12検証済み
4. R3 二次「機械・制御」問1 `(3),(4)` — Topic 10検証済み
5. R7 二次「機械・制御」問2 `(1),(3)` — 新規検証済み

Topic 24完成後はTopic 24教材だけで固定 `5問・17答案要素` をclean blind独立再解答する。

## Topic 23 最終品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 解説PDF: `PASS / EXPLANATION_PDF_RESYNC_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_RESYNC_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_RECOVERY_COMPLETE`
- 最終QA: `PASS / COMPLETED`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 24解説sourceから解説PDFを生成する。固定5問・17答案要素、同期速度・すべり・回転速度・トルク・電気角、SPEC指定3可視化、N700Sの6極化と軽量化の事実境界を維持する。PDF生成後に表示・数式・可視化・coverageをQAし、未確認実車値は追加しない。
