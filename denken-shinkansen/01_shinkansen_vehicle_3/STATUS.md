# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 7 / 38
- current_status: topic_06_repass
- next_topic: `08 100系 直流電動機方式の完成` の制作前EXAM_ALIGNMENTから開始する。07は既に新品質基準PASS済みのため飛ばさないで確認した上で08をactive topicにする。

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — 新版成果物再生成・再QA PASS
- [x] 03 0系① 主変圧器 — 新版成果物再生成・再QA PASS
- [x] 04 0系② シリコン整流器 — 新版成果物再生成・再QA PASS
- [x] 05 0系③ 速度制御 — 新版成果物再生成・再QA PASS
- [x] 06 0系④ 発電ブレーキ — 新版成果物再生成・再QA PASS
- [x] 07 200系 サイリスタ制御 — PASS
- [ ] 08 100系 直流電動機方式の完成 — 次の未完了テーマ

## 06 0系④ 発電ブレーキ — 再PASS

### EXAM_ALIGNMENT
公式過去問5問を対象にした。
- R7上 機械 問16 — 他励直流機のチョッパ力行・回生。`T=1/f`、降圧`Vout=D Vin`、回生側昇圧関係。
- H26 機械 問16 — チョッパ制御直流電動機の力行・回生、ON時間・回生電圧。
- H29 機械 問2 — 永久磁石直流機の電動/回生、`E`・`Ia`・トルク方向。
- H27 機械 問2 — 分巻直流機の電動機/発電機運転と回生条件。
- R4上 機械 問1 — 始動抵抗、静止レオナード、逆転、回生制動。

参照した電験解説資料: e-sysnet「直流電動機の始動と速度制御」、電験三種まとめましたのH26問16・H27問2・H29問2・R4上問1等。参照日2026-08-29。正答の正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。

### 新幹線実例
日本車輌製造の0系資料から、発電ブレーキ常用と低速域で摩擦ブレーキへ受け渡す構成を一次資料事実として使用した。公開されていない制動抵抗値、実運転電流、詳細内部回路値は実値化していない。

### 成果物
- `topics/06_0series_dynamic_brake/06_0series_dynamic_brake.md`
- `topics/06_0series_dynamic_brake/06_0series_dynamic_brake_explanation.pdf` — 3ページ
- `topics/06_0series_dynamic_brake/06_0series_dynamic_brake_practice.pdf` — 15問、2ページ（基礎4 / 標準8 / 応用3、五肢択一14問）
- `topics/06_0series_dynamic_brake/06_0series_dynamic_brake_images.pptx` — 4スライド

### QA
- 解説PDF・練習PDFを最終レンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをPDF変換後レンダリングし、可読性・クリップ・重なりなし。
- 練習15/15を独立再計算・再判定。代表値: `20.0 kW`, `200 kJ`, `30.0 MJ`, `50.0 kN`, `3.0 kN·m`, `1.50 ms`, `160 V`, `5.25 MW`。

### 独立過去問QA
生成時の保存済み正答を先に見ず、教材だけで再解答した。
- R7上 機械 問16 → 1.50 ms / 160 V、`(a)2,(b)4` PASS
- H26 機械 問16 → 1.50 ms / 160 V、H26選択肢で`(a)4,(b)2` PASS
- H29 機械 問2 → `(2)` PASS
- H27 機械 問2 → `(2)` PASS
- R4上 機械 問1 → 電機子／電圧／電機子／回生、`(4)` PASS

5/5で公式解答と一致し、教材外知識を補わずに公式・判定手順を選べたため06をPASSへ戻す。

## Web公開
06は再PASSしたため `article_rebuild` を解除し、解説PDF・練習PDF・PowerPointへのリンクをWebカタログへ復帰する。source / webArticleは維持する。

## 次
MASTERの制作順を先頭から再確認すると01〜07が新品質基準PASS。次は08 `100系 直流電動機方式の完成` の制作前EXAM_ALIGNMENT。