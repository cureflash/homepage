# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-11

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は20/38。01〜20がPASS。active topicは21 `N700S③ バッテリー自走`。

## 今回進捗
21の確定済みEXAM_ALIGNMENTから、解説本文・練習問題15問・解説PDF・練習PDF・PowerPointを生成した。計算・論理QA、PDF/PPTXレンダリングVisual QAはPASS。公式過去問5件の独立再解答は未実施のため、21はPASS化せず `QA_PENDING` として止めている。

## 21 生成成果物
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion.md`
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion_explanation.pdf` — 3ページ
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion_practice.pdf` — 15問、2ページ
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion_images.pptx` — 6スライド

練習は14問の五肢択一＋1問の記述計算。Ah/Wh、`C=It`、`P=VI`、`E=Pt`、理想化した`E=VC`、直並列、効率、SOC、リチウムイオン・鉛・NAS、浮動充電、電力貯蔵、N700S実例を扱う。

## 21 EXAM_ALIGNMENT
対象: 第三種電気主任技術者 / 機械・電力。

公式過去問:
1. H30 機械 問12 — リチウムイオン二次電池の構成、放電時のLiイオン移動、セル電圧。
2. R3 機械 問12 — 鉛蓄電池の構成、充放電、電解液、過充電。
3. R4上 機械 問12 — ナトリウム硫黄電池、セル起電力、直並列によるモジュール化。
4. H26 電力 問5 — 二次電池の種類・用途・浮動充電方式等。
5. R4下 電力 問11 — 電力需給調整、揚水・蓄電池・運転予備力。

## N700S実例の境界
Kenji Sato, Hirokazu Kato, Takafumi Fukushima, “Outstanding Technical Features of Traction System in N700S Shinkansen New Generation Standardized High Speed Train,” IEEJ Journal of Industry Applications, Vol.10 No.4, 2021, DOI:10.1541/ieejjia.20012560 を一次技術根拠とする。

確認済みは、自走用ユニットが主にリチウムイオン電池・接触器・制御装置で構成、通常時は補助電源から充電、自走時DC 750 V電池を通常DC 3000 Vの主変換装置DCリンクへ接続、16両で8ユニット、試作車で約30 km/hまで。1ユニットAh、総kWh、実電流、実時間・距離、セル数・具体的直並列数は未確認なので真値化しない。

また、H30機械問12で扱う「正極リチウム含有金属酸化物・負極黒鉛・有機非水電解液」は電験の代表的リチウムイオンセル知識として扱い、N700S実車セルの電極材料だとは記載しない。

## QA済み
- 練習15問の数値・正答ロジック再計算: PASS
- 五肢択一14/15: MASTER要件を満たす
- H26対応として浮動充電方式を解説・練習へ収録: PASS
- R3対応として鉛蓄電池の放電時硫酸濃度低下・過充電時の酸素/水素発生を収録: PASS
- R4下対応として揚水・蓄電池・運転予備力の区別を収録: PASS
- 実車未公開値の真値化: 0件
- 解説PDF 3ページ / 練習PDF 2ページ / PPTX 6スライドをレンダリング確認: PASS

## 未実施・完了条件
EXAM_ALIGNMENT_SPECが要求する公式過去問5件の独立再解答が未実施。保存済み公式正答を先に見ず、問題文だけから教材内容を使って5件すべて再解答する必要がある。これを通過するまでcatalogへ登録せず、20/38を維持する。

## 次の正確な開始点
H30機械問12、R3機械問12、R4上機械問12、H26電力問5、R4下電力問11を完全ブラインドで独立再解答する。5/5 PASSならsourceへ結果を追記し、`qualifications/denken-shinkansen/catalog.json`へtopic 21を登録、STATUS/HANDOFFを21/38へ更新する。
