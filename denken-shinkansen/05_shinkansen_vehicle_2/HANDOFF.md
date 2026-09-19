# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜24は最終QAまで `PASS / completed`。完成数は `24 / 39`。

現在地は `topic_25_exam_alignment_complete`。active topicは Topic 25 `N700S バッテリー自走のエネルギー設計`。

## 今回のreconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、`STATUS.md` / `HANDOFF.md` を確認した。Topic 24は完了済みのため、最初の未完了テーマTopic 25へ移行した。

Topic 25では本文作成前に公式第二種過去問を直近年度側から確認し、一次4問＋二次1問を固定した。N700S固有値を推測せず、固定SPECの10項目・指定3計算／グラフだけを教材責務とした。

## Topic 25 制作前EXAM_ALIGNMENT

固定公式過去問:
1. R8 一次「機械」問5 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問6 `(1)〜(5)` — 5答案要素
3. R2 一次「機械」問4 `(1)〜(5)` — 5答案要素
4. R1 一次「機械」問4 `(1)〜(5)` — 5答案要素
5. H23 二次「機械・制御」問3 `(1)〜(4)` — 8答案要素

集計:
- 一次: `4問 / 20答案要素`
- 二次: `1問 / 8答案要素`
- 合計: `5問 / 28答案要素`
- 二次記述・計算問題: `1問`
- SPEC必須10項目: `10 / 10 fixed`
- SPEC指定3計算・グラフ: `3 / 3 fixed`
- 未確認N700S電池値の真値化: `0件`
- SPEC外追加: `0件`
- 完成後clean blind: `PENDING`

H23二次 問3は、可逆チョッパによる二次電池の充放電、Cレート、内部抵抗、端子電圧、充放電時間、エネルギー効率を途中式付きで要求するため、二次記述ゲートとして固定した。

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design.md`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`。

## Topic 25 固定境界

扱うのは系列SPECの次だけ:
- 電池電圧、Ah、Wh、直列・並列、Cレート、放電電流、電池効率、インバータ効率、モーター効率、必要容量
- 走行時間―必要電力量、速度条件―必要電力、効率―必要電池容量

インバータ効率・モーター効率は固定過去問5問の直接答案要素とは主張せず、SPEC必須のエネルギー収支として扱う。N700Sの電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率は、一次資料・メーカー資料で確認できない値を真値化しない。

## Topic 24 最終品質ゲート

固定EXAM_ALIGNMENT:
1. R7 一次「機械」問2 `(1)〜(5)` — 5答案要素
2. R4 一次「機械」問2 `(3)〜(5)` — 3答案要素
3. R2 一次「機械」問3 `(1),(4),(5)` — 3答案要素
4. R3 二次「機械・制御」問1 `(3),(4)` — 2答案要素
5. R7 二次「機械・制御」問2 `(1),(3)` — 4答案要素

公式照合結果:
- 固定5問: `5 / 5 PASS`
- 一次答案要素: `11 / 11 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `17 / 17 PASS`
- 固定候補の公式照合後編集: `0件`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

判定: `PASS / CLEAN_BLIND_COMPLETE`。Topic 24全体は `PASS / COMPLETED`。

## Topic 24 既存成果

- 制作前EXAM_ALIGNMENT: `PASS / EXAM_ALIGNMENT_COMPLETE`
- 解説source: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_COMPLETE`
- 練習source: `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- 解説画像PowerPoint: `PASS / POWERPOINT_CANONICAL_REPAIR_COMPLETE`
- 完成後clean blind: `PASS / CLEAN_BLIND_COMPLETE`
- 最終判定: `PASS / COMPLETED`

PowerPoint正本:
- `topics/24_n700s_main_motor_design_comparison/24_n700s_main_motor_design_comparison_images.pptx`
- Git blob SHA: `6ae38920238198426df92ecf6bd99e74ca7214cf`
- `264,329 bytes`
- 16:9 / `6 slides`
- ZIP integrity / python-pptx / LibreOffice: `PASS`
- 固定17答案要素: `17 / 17 covered`
- SPEC必須8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

## N700S実車接続・境界

富士電機技報 2020 vol.93 no.2 p.95（5）でN700S向け主電動機の6極化を一次メーカー資料として確認済み。同資料の「駆動システム全体で約20%軽量化」はSiC素子搭載、主電動機6極化、主変圧器冷却方式見直しを合わせた結果として扱い、主電動機単体・6極化単独の20%軽量化とは扱わない。

N700S主電動機の実運転周波数、実回転速度、実トルク、寸法、質量は確認不能のため真値化しない。電気角は `θ_e=(P/2)θ_m` をSPEC必須の一般関係として扱い、固定第二種過去問の直接答案要素とは主張しない。

## Topic 21 H26二次 問1(4)

`48.1 / 48.0 N·m` 差は公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 25の固定EXAM_ALIGNMENTを変更せず、解説sourceを作成する。固定5問・28答案要素、SPEC必須10項目、指定3計算・グラフをすべて接続する。完成数は `24 / 39`。
