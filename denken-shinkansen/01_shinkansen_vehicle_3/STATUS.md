# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 13 / 38
- current_status: `topic_13_pass`
- last_completed_topic: `13 700系 GTOからIGBTへ`
- next_topic: `14 E2系 50Hz・60Hz対応` の制作前EXAM_ALIGNMENTから開始する

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
- [x] 13 700系 GTOからIGBTへ — PASS
- [ ] 14 E2系 50Hz・60Hz対応 — 次の未完了テーマ

## 13 EXAM_ALIGNMENT
公式過去問5件を対象とした。
1. H20 機械 問9 — IGBT/GTO/MOSFET比較、自己消弧、ゲート駆動。
2. H27 機械 問9 — サイリスタ、交流電力調整、IGBT、PWM。
3. H29 機械 問10 — ダイオード・サイリスタ・MOSFET・IGBTの定常動作。
4. R5上 機械 問10 — IGBTとパワーMOSFET、テイル電流、逆方向電流。
5. R6上 機械 問16 — IGBT単相ブリッジ、誘導性負荷、逆並列ダイオード、`τ=L/R`。

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照教材はe-sysnet、電験三種まとめました、電験王。参照日2026-08-29。

## 新幹線実例
300系で大容量GTOサイリスタPWMコンバータによる誘導電動機駆動が実用化された資料と、700系で大容量IGBT主回路システムが実用化された電気学会資料を確認。未確認の700系素子定格、実スイッチング周波数、個別損失、冷却容量は真値化していない。

## 成果物
- `topics/13_700series_igbt/13_700series_igbt.md`
- `topics/13_700series_igbt/13_700series_igbt_explanation.pdf` — 2ページ
- `topics/13_700series_igbt/13_700series_igbt_practice.pdf` — 15問、3ページ（基礎4 / 標準8 / 応用3、五肢択一15問）
- `topics/13_700series_igbt/13_700series_igbt_images.pptx` — 4スライド

## QA
- 解説PDFを最終レンダリングし、文字化け・クリップ・重なりなし。
- 練習PDFを160 dpiで最終レンダリングし、選択肢の折返し・解答解説を含め文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをPDF変換後レンダリングし、レイアウト破綻なし。
- 練習15/15を独立再計算・再判定。代表値: `240 V`, `400 W`, `120 W`, `520 W`, `99.48%`, `2 ms`, `1.15 kW`, `99.54%`。

## 公式過去問の独立再解答
- H20 機械 問9 → `(3)` PASS
- H27 機械 問9 → `(1)` PASS
- H29 機械 問10 → `(2)` PASS
- R5上 機械 問10 → `(1)` PASS
- R6上 機械 問16 → `(a)(5)`, `(b)(2)` PASS

5/5で公式解答と一致し、教材内の判定規則・回路電流継続・時定数だけで根拠を説明できた。

## QA判定
`13 700系 GTOからIGBTへ`: PASS。新品質基準の完了数へ計上し13/38。

## Web公開
13のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ追加する。

## 次
MASTER制作順を先頭から確認すると01〜13が新品質基準PASS。次は14 `E2系 50Hz・60Hz対応` の制作前EXAM_ALIGNMENT。
