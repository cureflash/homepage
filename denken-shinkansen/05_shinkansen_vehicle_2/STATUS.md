# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 4 / 39
- current_status: `topic_04_completed`
- last_completed_topic: `04 0系④ タップ制御と加速特性`
- active_topic: `05 0系⑤ 発電ブレーキのエネルギー解析`
- next_start: Topic 05の制作前EXAM_ALIGNMENT。二種一次・二次の公式過去問を直近年度から調査し、Topic 05固定範囲へ直接接続する問題だけを選定して要求事項を確定する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [ ] 05 0系⑤ 発電ブレーキのエネルギー解析 — 未着手

## Topic 04 最終結果
- 最終QA: `PASS`
- final QA record: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_final_qa.md`
- source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`
- 解説PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_explanation.pdf`
  - A4縦4ページ、全4ページVisual QA PASS
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
  - 一次8問（全問五肢択一）＋二次4問（記述式）、計12問、全問完全解説付き
  - 計算独立再確認 `12 / 12 PASS`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
  - A4縦7ページ、全7ページ180 dpi Visual QA PASS
- 解説画像PowerPoint: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_images.pptx`
  - 16:9・4スライド
  - SPEC指定4グラフ収録
  - 全4スライドVisual QA PASS、overflow検査 PASS
- 完成後独立再解答: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_independent_reanswer.md`
  - 公式過去問4問、固定範囲11小問・空欄
  - `11 / 11 PASS`
  - 教材外知識による補完 `0件`
  - 固定範囲外論点の追加 `0件`
  - 未確認0系実値の追加 `0件`

## Topic 04 過去問対応
選定した公式過去問:
- H28 一次 機械 問1 — 直流電動機の始動、電圧方程式、回転運動方程式、慣性、始動電流過渡
- H28 一次 機械 問5 — 固定範囲部分: 鉄道用直巻電動機と大始動トルク
- H26 一次 機械 問5 — 固定範囲部分: 直流電気車の始動トルクと直巻電動機
- H24 二次 機械・制御 問1 — 固定範囲部分(1)(2)(4): 電機子抵抗、誘導起電力、速度・トルク条件から必要端子電圧を逆算

完成後独立再解答:
- H28 一次 機械 問1: `(ト, リ, ヘ, ロ, ニ)` — 5/5 PASS
- H28 一次 機械 問5: 固定範囲 `(1)=チ` — 1/1 PASS
- H26 一次 機械 問5: 固定範囲 `(1)=ロ, (2)=リ` — 2/2 PASS
- H24 二次 機械・制御 問1: `R_a=0.500 Ω`, `E=188 V`, `V=133 V` — 3/3 PASS
- 合計: `11 / 11 PASS`

二種の一次・二次合計「原則5問以上」は維持するが、Topic 04固定範囲へ直接接続できる公式問題として確認できたのは4問。件数合わせのために回生、チョッパ、VVVF、誘導機、き電等を追加していない。一次・二次双方を含み、確認できた固定範囲対応問題を全件対象とした。

## Topic 04 固定境界確認
追加していない:
- 発電ブレーキ・回生エネルギー解析（Topic 05）
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF・四象限運転（Topic 10以降）
- チョッパ制御
- 未確認の0系固有数値

## 完了済みテーマ
- Topic 01: 最終QA PASS
- Topic 02: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 03: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 04: 最終QA PASS、完成後独立再解答 11/11 PASS
