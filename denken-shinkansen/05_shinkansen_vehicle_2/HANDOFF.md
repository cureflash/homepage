# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜24は最終QAまで `PASS / completed`。完成数は `24 / 39`。

現在地は `topic_25_explanation_source_complete`。active topicは Topic 25 `N700S バッテリー自走のエネルギー設計`。

## 今回のreconcile

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 25既存EXAM_ALIGNMENT、直近の同系列commitを確認した。Topic 25にはEXAM_ALIGNMENT以外の成果物がなく、他workerとの重複はないため、指定されていた次工程の解説sourceだけを1段階進めた。

固定5問・28答案要素は変更せず、一次20答案要素・二次8答案要素、SPEC必須10項目、指定3計算／可視化をすべてsourceへ接続した。

## Topic 25 解説source

成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design_explanation_source.md`

判定:
- `PASS / EXPLANATION_SOURCE_COMPLETE`
- 一次説明責務: `20 / 20 covered`
- 二次説明責務: `8 / 8 covered`
- 合計説明責務: `28 / 28 covered`
- SPEC必須10項目: `10 / 10 covered`
- SPEC指定3計算・可視化: `3 / 3 defined`
- 3段階例題: `3 / 3`
- 完成後clean blind: `PENDING`

H23二次「機械・制御」問3について、充電時の降圧チョッパ、放電時の昇圧チョッパ、Cレート、内部抵抗を含む端子電圧、充放電時間、`I^2R` 損失と充電効率理由を教材内で再現できる形にした。

N700S実車接続は東芝インフラシステムズの一次メーカー資料で、N700S確認試験車へのSCiB採用とJR東海とのバッテリー自走システム共同開発までを確認した。電池電圧、Ah、Wh、セル数、直並列数、Cレート、実放電電流、各効率は確認できないため実値化していない。設計計算の数値はすべて教材用仮定値と明記した。

速度条件―必要電力はSPECの指定可視化として、速度と必要機械出力を「与件の仮定入力」として比較するだけに限定した。未指定の走行抵抗モデルは追加していない。

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
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認N700S電池値の真値化: `0件`
- SPEC外追加: `0件`
- 完成後clean blind: `PENDING`

制作前成果物:
- `topics/25_n700s_battery_self_propulsion_energy_design/25_n700s_battery_self_propulsion_energy_design.md`

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

Topic 24では富士電機技報 2020 vol.93 no.2 p.95（5）でN700S向け主電動機の6極化を一次メーカー資料として確認済み。同資料の「駆動システム全体で約20%軽量化」はSiC素子搭載、主電動機6極化、主変圧器冷却方式見直しを合わせた結果として扱い、主電動機単体・6極化単独の20%軽量化とは扱わない。

Topic 25では東芝インフラシステムズ2018-03-10公表資料でN700S確認試験車へのSCiB採用とバッテリー自走システム共同開発までを一次メーカー資料で確認した。未確認の電池数値は真値化しない。

## Topic 21 H26二次 問1(4)

`48.1 / 48.0 N·m` 差は公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次の安全な工程

Topic 25の固定EXAM_ALIGNMENTと完成済み解説sourceを変更せず、解説PDFを生成する。PDF表示、数式・単位、指定3可視化、固定28答案要素coverageをQAする。完成数は `24 / 39`。
