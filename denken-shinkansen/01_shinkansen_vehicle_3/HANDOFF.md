# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-11

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は21/38。01〜21がPASS。次のactive topicは22 `L0系① リニア同期モータ`。

## 今回進捗
21 `N700S③ バッテリー自走` の生成済み4成果物を現行mainへ引き継げる形で復元し、最終EXAM_ALIGNMENTゲートを完了した。

成果物:
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion.md`
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion_explanation.pdf`
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion_practice.pdf`
- `topics/21_n700s_battery_self_propulsion/21_n700s_battery_self_propulsion_images.pptx`

生成済みPDF/PPTXは既存の計算・論理QAおよびVisual QA済みblobを無変更で再利用した。解説PDF3ページ、練習PDF2ページ・15問、PowerPoint6スライド。練習は14問が五肢択一、1問が記述計算。

## 21 独立過去問再解答
保存済み公式正答を先に見ずに教材本文だけで解答を確定し、その後に一般財団法人 電気技術者試験センター公式解答と照合した。

1. H30 機械 問12 — 1 / 公式1 / PASS
2. R3 機械 問12 — 4 / 公式4 / PASS
3. R4上 機械 問12 — 4 / 公式4 / PASS
4. H26 電力 問5 — 5 / 公式5 / PASS
5. R4下 電力 問11 — 5 / 公式5 / PASS

5/5一致。必要知識は教材内のリチウムイオン二次電池、鉛蓄電池、NAS電池、浮動充電、直並列、電力貯蔵・需給調整の各節でカバーされている。

## N700S根拠再確認
Kenji Sato, Hirokazu Kato, Takafumi Fukushima, “Outstanding Technical Features of Traction System in N700S Shinkansen New Generation Standardized High Speed Train,” IEEJ Journal of Industry Applications, Vol.10 No.4, 2021, DOI:10.1541/ieejjia.20012560 を再照合した。

確認済み:
- 自走用ユニットは主にリチウムイオン電池・接触器・制御装置で構成。
- 通常時は補助電源装置から充電。
- 自走時はDC 750 Vの電池を、通常DC 3000 Vの主変換装置DCリンクへ接続。
- 16両編成に8ユニット。
- 試作車試験は約30 km/hまで。

未公開のAh、総kWh、実自走電流、実継続時間・距離、セル数、具体的直並列数は真値化していない。

## QA判定
21: `PASS`。完成数21/38。

## 次の正確な開始点
22 `L0系① リニア同期モータ` の制作前EXAM_ALIGNMENTから開始する。最初に電気技術者試験センター公式過去問を調査し、同期機・同期速度・極数・周波数・移動磁界について必要な知識・式・設問型を確定する。過去問対応範囲が確定する前に本文・練習問題を生成しない。
