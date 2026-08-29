# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 12 / 38
- current_status: `topic_12_pass`
- last_completed_topic: `12 500系 300km/hと大出力`
- next_topic: `13 700系 GTOからIGBTへ` の制作前EXAM_ALIGNMENTから開始する

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — PASS
- [x] 03 0系① 主変圧器 — PASS
- [x] 04 0系② シリコン整流器 — PASS
- [x] 05 0系③ 速度制御 — PASS
- [x] 06 0系④ 発電ブレーキ — PASS
- [x] 07 200系 サイリスタ制御 — PASS
- [x] 08 100系 直流電動機方式の完成 — PASS
- [x] 09 300系① 誘導電動機 — PASS
- [x] 10 300系② VVVF — PASS
- [x] 11 300系③ 回生ブレーキ — PASS
- [x] 12 500系 300km/hと大出力 — PASS
- [ ] 13 700系 GTOからIGBTへ — 次の未完了テーマ

## 12 EXAM_ALIGNMENT
公式過去問5件を対象とした。
1. R5下 機械 問11 — `P=Tω`、min^-1→rad/s、回転エネルギー。
2. H29 機械 問15 — 三相入力、力率、効率、誘導電動機。
3. R3 機械 問10 — `P=Fv`、機械効率。
4. H27 機械 問15 — 誘導機の滑り、比例推移、トルク。
5. H25 機械 問4 — 二次入力、二次銅損 `sP2`、機械出力 `(1-s)P2`。

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnet、電験三種まとめました、電験王。参照日2026-08-29。

## 新幹線実例
500系の300 km/h営業運転、全電動車編成、高出力誘導電動機を公開資料で確認。量産編成の `275 kW × 64 = 17.6 MW` は公開資料値として扱い、未確認の各速度点の実トルク・走行抵抗・実効率・温度上昇は真値化していない。

## 成果物
- `topics/12_500series_high_power/12_500series_high_power.md`
- `topics/12_500series_high_power/12_500series_high_power_explanation.pdf` — 2ページ
- `topics/12_500series_high_power/12_500series_high_power_practice.pdf` — 15問、2ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/12_500series_high_power/12_500series_high_power_images.pptx` — 4スライド

## QA
- 解説PDF・練習PDFを160 dpiで最終レンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをLibreOfficeでPDF化し、レイアウト破綻なし。
- 練習15/15を独立再計算・再判定。代表値: `657 N·m`, `188.5 kW`, `6.0 MW`, `16.46 kW`, `17.39 kW`, `530.5 N·m`, `4 kW`, `96 kW`, `17.6 MW`。

## 公式過去問の独立再解答
- R5下 問11 → 組合せ `(5)` PASS
- H29 問15(a) → `26.7 A` → `(3)` PASS
- R3 問10 → `5.44 kW` → `(4)` PASS
- H27 問15 → `(a)4`, `(b)2` PASS
- H25 問4 → 約`70.7%` → `(4)` PASS

5/5で公式解答と一致し、教材内の式・判定手順だけで根拠を説明できた。

## QA判定
`12 500系 300km/hと大出力`: PASS。新品質基準の完了数へ計上し12/38。

## Web公開
12のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ追加する。

## 次
MASTER制作順を先頭から確認すると01〜12が新品質基準PASS。次は13 `700系 GTOからIGBTへ` の制作前EXAM_ALIGNMENT。
