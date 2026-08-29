# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 6 / 38
- current_status: topic_05_repass
- next_topic: `06 0系④ 発電ブレーキ` の新版本文・EXAM_ALIGNMENTを再確認し、解説PDF・練習PDF・PowerPointを再生成してvisual QA、練習問題独立再計算、公式過去問独立再解答まで行う

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — 新版成果物再生成・再QA PASS
- [x] 03 0系① 主変圧器 — 新版成果物再生成・再QA PASS
- [x] 04 0系② シリコン整流器 — 新版成果物再生成・再QA PASS
- [x] 05 0系③ 速度制御 — 新版成果物再生成・再QA PASS
- [ ] 06 0系④ 発電ブレーキ — REOPENED / Web記事全面再構築済み、PDF・練習・PPTX再生成待ち
- [x] 07 200系 サイリスタ制御 — PASS
- [ ] 08 100系 直流電動機方式の完成 — 06再PASS後に着手

## 05 0系③ 速度制御 — 再PASS

### EXAM_ALIGNMENT
公式過去問5問を対象にした。
- R6上 機械 問2 — 他励直流電動機の電圧変更後速度。`E=V-IaRa`、磁束一定で`n∝E`。
- R4上 機械 問1 — 始動抵抗、静止レオナードによる電圧制御、逆転、回生制動。
- R1 機械 問1 — 永久磁石界磁・定トルク。`T∝φIa`から`Ia`一定、`n∝E`。
- H28 機械 問1 — 分巻電動機の端子電圧変更後速度。端子電圧比ではなく逆起電力比を使う。
- H25 機械 問1 — 分巻・直巻特性。未飽和直巻では`φ∝Ia`、したがって`T∝Ia²`。

参照した解説資料: e-sysnet「直流電動機の始動と速度制御」「直流電動機の種類と特性」、電験三種まとめましたの上記過去問解説。参照日2026-08-29。正答の正本は電気技術者試験センター公式過去問題・公式解答。

### 新幹線実例
日本車輌製造の0系主要諸元から、主変圧器1650 kVA、主シリコン整流部1627 kW、低圧タップ切換、タップ制御25段を実値として使用した。公開されていない内部抵抗・運転電流等は実値として追加していない。

### 成果物
- `topics/05_0series_speed_control/05_0series_speed_control.md`
- `topics/05_0series_speed_control/05_0series_speed_control_explanation.pdf` — 3ページ
- `topics/05_0series_speed_control/05_0series_speed_control_practice.pdf` — 15問（基礎4 / 標準8 / 応用3、五肢択一13問）
- `topics/05_0series_speed_control/05_0series_speed_control_images.pptx` — 4スライド

### QA
- 解説PDF 3ページと練習PDF 3ページを160dpiでレンダリングし、文字化け・クリップ・重なりなし。
- PowerPoint 4スライドをPDF変換・140dpiレンダリングし、可読性・クリップ・重なりなし。
- 練習15/15を独立再計算・再判定。代表計算: `E1=100V,E2=70V,n2=840min^-1`、`E1=90V,E2=105V,n2=1750min^-1`、抵抗制御例`E=90V, I²Rs=1260W`。

### 独立過去問QA
生成時の保存済み正答を先に見ず、教材だけで再解答した。
- R6上 機械 問2 → 840 min^-1、(2) PASS
- R4上 機械 問1 → 電機子／電圧／電機子／回生、(4) PASS
- R1 機械 問1 → 800 min^-1、(4) PASS
- H28 機械 問1 → 1750 min^-1、(4) PASS
- H25 機械 問1 → 誤り(3)、PASS

5/5で公式解答と一致。教材内の速度式、始動、三速度制御法、逆転、回生、直巻特性だけで根拠を説明できたため05をPASSへ戻す。

## Web公開
05は再PASSしたため `article_rebuild` を解除し、解説PDF・練習PDF・PowerPointへのリンクをWebカタログへ復帰する。

## 次
06を最優先で再PASSする。その後08へ進む。
