# STATUS - 新幹線車両・電験三種

更新日: 2026-08-29

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 6 / 38
- legacy_artifacts_present: 3 / 38
- current_status: rebuilding_topic_07
- next_topic: `07 200系 サイリスタ制御` の制作前EXAM_ALIGNMENTを作成し、公式過去問を原則5問以上分析する

## 新品質ゲート進捗
- [x] 01 プラレール① 電気編 — PASS
- [x] 02 プラレール② 機械編 — PASS
- [x] 03 0系① 主変圧器 — PASS
- [x] 04 0系② シリコン整流器 — PASS
- [x] 05 0系③ 速度制御 — PASS
- [x] 06 0系④ 発電ブレーキ — PASS
- [ ] 07 200系 サイリスタ制御 — 未着手

## 06 0系④ 発電ブレーキ — PASS
- [x] EXAM_ALIGNMENT: R7上機械問16、H26機械問16、H29機械問2、H27機械問2、R4上機械問1
- [x] e-sysnet、電験三種まとめました、TAC・オーム社公開情報を比較
- [x] 直流機の電動/発電運転、発電制動/回生制動/逆転制動、`E`/`V`、`I^2R`、`Pt`、`1/2mv^2`、`P=Fv`、`P=Tω`、チョッパ回生を収録
- [x] 日本車輌製造の一次資料で0系の発電ブレーキ常用・低速域摩擦ブレーキ切替を確認
- [x] 解説PDF: 2ページ
- [x] 練習PDF: 14問（基礎4 / 標準7 / 応用3、五肢択一12 / 記述2）
- [x] PowerPoint: 2スライド
- [x] visual QA PASS
- [x] 練習14問独立再計算 14/14 PASS
- [x] 公式過去問独立再解答 5/5 PASS
- [x] Webカタログ公開

### 06 独立過去問QA
- R7上 機械 問16: (2),(4) PASS
- H26 機械 問16: (4),(2) PASS
- H29 機械 問2: (2) PASS
- H27 機械 問2: (2) PASS
- R4上 機械 問1: (4) PASS

## 05 0系③ 速度制御 — PASS
- [x] 公式過去問5問独立再解答 5/5 PASS
- [x] Webカタログ公開

## 次
`07 200系 サイリスタ制御` について、まず電気技術者試験センター公式過去問からサイリスタ、位相制御、制御角、整流平均電圧、直流主電動機、半導体電力制御に対応する問題を原則5問以上選定し、source MarkdownにEXAM_ALIGNMENTを作る。
