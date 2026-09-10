# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-11

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は20/38。01〜20がPASS。active topicは21 `N700S③ バッテリー自走`。

## 今回進捗
21の制作前EXAM_ALIGNMENTを引き継ぎ、source Markdownの本文・例題・練習問題・解答解説まで制作した。

追加内容:
- 二次電池とSOC
- リチウムイオン、鉛、NAS電池の電験三種向け構成知識
- `C=It` とAh
- `P=VI`、`E=Pt`、WhとAh
- 直列・並列
- 効率と運転時間
- N700Sバッテリ自走ユニットと主変換装置DCリンクの関係
- 3段階例題
- 練習15問（基礎3、標準9、応用3。五肢択一12問）
- 全問解答・途中式・検算

練習15問は独立再計算・再判定し15/15 PASS。

## 公式過去問 独立再解答
公式解答を開く前に問題文・選択肢のみで独立解答した。
1. H30 機械 問12 → `(1)`
2. R3 機械 問12 → `(4)`
3. R4上 機械 問12 → `(4)`
4. H26 電力 問5 → `(5)`
5. R4下 電力 問11 → `(5)`

その後に電気技術者試験センター公式解答を照合し、5/5一致。教材本文だけで必要な判断根拠を説明できることを確認した。

## 根拠資料再確認
- 電気技術者試験センター公式過去問題・公式解答
- JR東海「車両のご案内 N700S」
- Kenji Sato, Hirokazu Kato, Takafumi Fukushima, IEEJ Journal of Industry Applications Vol.10 No.4, 2021, DOI:10.1541/ieejjia.20012560
- e-sysnet「電気化学(電池)と電気加工」
- 電験王 H30機械問12、R3機械問12、R4上機械問12、H26電力問5

N700Sの公開根拠としてDC 750 V、通常DCリンク3000 V、量産16両編成8バッテリ自走ユニット、試作車試験約30 km/h等を再確認した。

## 実値境界
公開資料で確認していない以下は真値化しない。
- 1ユニット当たりAh
- 編成総kWh
- 実自走時電流
- 実自走可能時間・距離
- セル数・実直並列数

教材中のこれらに関係する数値は一般問題または「教材用仮定値」と明示する。

## QA判定
21 source: `SOURCE_CONTENT_PASS`。
21 overall: `BINARY_PENDING`。
解説PDF・練習PDF・PowerPointとVisual QAが未完了のため、完成数は20/38のまま。

## 次の正確な開始点
`topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion.md` を正本として、解説PDF・練習PDF・PowerPointを生成する。内容一致、文字切れ、数式、図、出典表示をVisual QAする。3バイナリとsource Markdownの4成果物が揃った場合のみcatalog登録し、topic 21をPASSへ進める。
