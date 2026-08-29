# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-29

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。

新品質基準の完成数は8/38。PASSは01〜08。次の未完了テーマは09。

## 今回完了
`08 100系 直流電動機方式の完成` を、並行workerが先行作成した制作前EXAM_ALIGNMENTをreconcileしたうえで本文・成果物・完成後QAまで進め、新品質ゲートをPASSした。

## EXAM_ALIGNMENT
対象: 第三種電気主任技術者 / 機械（直流機の構造、整流、電機子反作用、定格、損失、効率、保守）。

公式過去問:
1. R6上 機械 問1 — 電機子 / 電気的中性軸 / 火花 / 補極
2. R5上 機械 問1 — 界磁 / 電機子 / 交番磁束 / 積層鉄心 / 重ね巻
3. R4下 機械 問1 — 他励/自励分類と電機子反作用対策
4. H29 機械 問1 — 始動時E=0、Ra、逆起電力、銅損、効率
5. H28 機械 問2 — 電機子 / 電気的中性軸 / 火花 / 補極

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。

参照した電験解説資料:
- e-sysnet「直流機の原理と構造」
- e-sysnet「直流機の電機子反作用」
- e-sysnet「直流電動機の種類と特性」
- e-sysnet「直流機の定格」
- 電験三種まとめました: R6上問1、R5上問1、R4下問1、H29問1、H28問2

参照日: 2026-08-29。外部本文・図・例題は複製していない。

## 新幹線一次資料
日立評論1986年3月号、日本車輌製造「新幹線車両の変遷」、鉄道総研「車両ニュースレター（主電動機の変遷）」を使用した。

日立資料の`1,840 kW × 6 / 編成`から`11.04 MW`を計算値として導出。日立比較表の230 km/hと日本車輌の営業最高速度220 km/hは資料の表記目的を区別した。公開確認できない100系固有のブラシ寿命・交換周期等は真値化していない。

## 成果物
- `topics/08_100series_dc_motor_completion/08_100series_dc_motor_completion.md`
- `topics/08_100series_dc_motor_completion/08_100series_dc_motor_completion_explanation.pdf`
- `topics/08_100series_dc_motor_completion/08_100series_dc_motor_completion_practice.pdf` — 15問、五肢択一13問
- `topics/08_100series_dc_motor_completion/08_100series_dc_motor_completion_images.pptx` — 4スライド

解説は、試験論点→構造→三式→電力フロー→損失/発熱→定格/冷却→整流→電機子反作用→解法→3段階例題→100系実例→保守/世代比較→頻出ミス→過去問→まとめで構成。

## Visual QA
解説PDF・練習PDFを最終レンダリング、PowerPointをPDF変換して4スライドをレンダリングし、文字化け・クリップ・重なりなしを確認した。

## 練習問題独立QA
15/15 PASS。代表値: `190 V`, `0.50 kW`, `95.0%`, `3.0 Ω`, `9.0 V`, `75.0%`, `137.5 kW`, `91.7%`, `11.04 MW`。

## 公式過去問 独立再解答
生成時の保存済み正答を先に見ず、教材だけで再構成した。
- R6上問1 → `(5)` PASS
- R5上問1 → `(1)` PASS
- R4下問1 → `(3)` PASS
- H29問1 → `Ra=3 Ω, E=9 V, η=75%` → `(4)` PASS
- H28問2 → `(3)` PASS

5/5で公式解答と一致。

## QA判定
08: `PASS`。完成数8/38。

## Web公開
08のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ追加する。

## 次の正確な開始点
MASTER制作順を01から確認し、01〜08が新品質基準PASSであることを確認する。09 `300系① 誘導電動機` をactive topicとし、本文作成前に公式過去問5問以上を優先調査してEXAM_ALIGNMENTを作成する。
