# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `23 / 39`
- current_status: `topic_24_blind_candidates_fixed`
- last_completed_topic: `23 N700S SiC主変換装置`
- active_topic: `24 N700S 主電動機設計の比較`
- next_start: Topic 24 clean blind固定候補を変更せず、公式解答・標準解答と固定5問・17答案要素を照合する

## 完了済み

Topic 01〜23は最終QAまで `PASS / completed`。完成数は `23 / 39`。

## Topic 24 現在地

- 制作前EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- 解説画像PowerPoint: `PASS / POWERPOINT_CANONICAL_REPAIR_COMPLETE`
- 完成後clean blind固定過去問再解答: `CANDIDATES_FIXED / OFFICIAL_NOT_CHECKED`
- Topic 24全体: `未完了`

## Topic 24 clean blind独立再解答候補

- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 solved`
- 一次答案要素: `11 / 11 candidate fixed`
- 二次答案要素: `6 / 6 candidate fixed`
- 合計答案要素: `17 / 17 candidate fixed`
- 候補固定後の後編集: `禁止`
- 公式解答・標準解答参照: `0件`
- 既存Topic 10/12・他worker保存済み正答候補参照: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_blind_reanswer_candidates_clean.md`

## Topic 24 解説画像PowerPoint

- GitHub main正本: 16:9 / `6 slides` / `264,329 bytes`
- GitHub blob SHA: `6ae38920238198426df92ecf6bd99e74ca7214cf`
- 修復コミット: `22f4bed3aa88ea00e99274c7b59d08198ef1a84b`
- ZIP integrity (`unzip -t`): `PASS`
- python-pptx open: `PASS`
- geometry overflow: `0`
- LibreOffice PDF変換: `PASS / 6 pages`
- 固定過去問: 第二種一次3問＋二次2問 = `5 / 5 covered`
- 一次答案要素: `11 / 11 covered`
- 二次答案要素: `6 / 6 covered`
- 合計答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S実車値の真値化: `0件`

旧GitHub正本のZIP integrity / artifact identity blockerは解消。

成果物:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx`
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_powerpoint_qa.md`

## Topic 24 固定EXAM_ALIGNMENT

1. R7 一次「機械」問2 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問2 `(3)〜(5)` — 3答案要素
3. R2 一次「機械」問3 `(1),(4),(5)` — 3答案要素
4. R3 二次「機械・制御」問1 `(3),(4)` — 2答案要素
5. R7 二次「機械・制御」問2 `(1),(3)` — 4答案要素

集計: 一次 `3問 / 11答案要素`、二次 `2問 / 6答案要素`、合計 `5問 / 17答案要素`。固定EXAM_ALIGNMENTは変更しない。

## Topic 24 実車接続・境界

- N700S向け主電動機6極化: 富士電機技報 2020 vol.93 no.2 p.95（5）で確認済み
- 約20%軽量化: SiC素子搭載、主電動機6極化、主変圧器冷却方式見直しを合わせた駆動システム全体の値。主電動機単体・6極化単独の値とは扱わない
- 未確認N700S実運転周波数・実回転速度・実トルク・寸法・質量の真値化: `0件`
- 電気角 `θ_e=(P/2)θ_m`: SPEC必須一般関係として扱い、固定第二種過去問の直接答案要素とは主張しない

## Topic 23 最終品質ゲート

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 合計答案要素: `23 / 23 PASS`
- 修正後clean blind: `23 / 23 PASS`
- 最終QA: `PASS / COMPLETED`

## Topic 21 H26二次 問1(4)

`48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。Topic 21は `PASS / completed` のまま。

## 次工程

Topic 24 clean blind固定候補を変更せず、公式解答・標準解答と固定5問・17答案要素を照合する。完成数は `23 / 39` のまま。
