# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 11 / 38
- current_status: `topic_11_pass`
- last_completed_topic: `11 300系③ 回生ブレーキ`
- next_topic: `12 500系 300km/hと大出力` の制作前EXAM_ALIGNMENTから開始する

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
- [ ] 12 500系 300km/hと大出力 — 次の未完了テーマ

## 11 EXAM_ALIGNMENT
公式過去問5件を対象とした。
1. R6上 機械 問3 — 誘導機の電動/発電運転、すべり符号、同期速度超過。
2. R6上 機械 問4 — V/f一定、6極66 Hz、すべり5%から回転速度。
3. R5下 機械 問15 — 滑り周波数とインバータ一次周波数制御。
4. H29 機械 問2 — 電動/回生での電流・トルク・起電力方向。
5. H26 機械 問16 — チョッパ力行/回生、ON時間・回生電圧。

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnet「三相誘導電動機の理論と等価回路」「三相誘導電動機の原理と構造」、電験三種まとめました、電験王。参照日2026-08-29。

## 新幹線一次資料
日本車輌製造「300系新幹線」で270 km/h用、交流電動機、コンバータ/インバータ制御を確認。石川栄（JR東海）「“のぞみ”に結実した誘導電動機駆動システム」電気学会論文誌D 114巻6号（1994）で「交流回生ブレーキ」「誘導電動機駆動」を確認。未確認の個別回生効率・直流リンク電圧・運転周波数等は実値化していない。

## 成果物
- `topics/11_300series_regenerative_brake/11_300series_regenerative_brake.md`
- `topics/11_300series_regenerative_brake/11_300series_regenerative_brake_explanation.pdf` — 2ページ
- `topics/11_300series_regenerative_brake/11_300series_regenerative_brake_practice.pdf` — 15問、2ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/11_300series_regenerative_brake/11_300series_regenerative_brake_images.pptx` — 4スライド

## QA
- 解説PDF・練習PDFを160 dpiで最終レンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをPDF変換後レンダリングし、クリップ・重なりなし。
- 練習15/15を独立再計算・再判定。代表値: `n_s=1800 min^-1`, `s=3%`, `s=-2%`, `n=1470 min^-1`, `n=1872 min^-1`, `f_2=1.8 Hz`, `ΔE=625 MJ`, `E_reg=500 MJ=138.9 kWh`。

## 公式過去問の独立再解答
- R6上 問3 → `(3)` PASS
- R6上 問4 → `n_s=1320`, `n=1254 min^-1` → `(3)` PASS
- R5下 問15 → `(a)2,(b)1` PASS
- H29 問2 → `(2)` PASS
- H26 問16 → `1.50 ms / 160 V` → `(a)4,(b)2` PASS

5/5で公式解答と一致し、教材内の式・判定手順だけで根拠を説明できた。

## QA判定
`11 300系③ 回生ブレーキ`: PASS。新品質基準の完了数へ計上し11/38。

## Web公開
11のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ追加する。

## 次
MASTER制作順を先頭から確認すると01〜11が新品質基準PASS。次は12 `500系 300km/hと大出力` の制作前EXAM_ALIGNMENT。
