# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 3 / 39
- current_status: `topic_04_practice_pdf_complete`
- last_completed_topic: `03 0系③ 直流主電動機の電圧方程式とトルク`
- active_topic: `04 0系④ タップ制御と加速特性`
- next_start: Topic 04の固定済みsource・EXAM_ALIGNMENTだけを使って解説画像PowerPointを作成し、全スライド表示QA・overflow検査を行う

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [ ] 04 0系④ タップ制御と加速特性 — EXAM_ALIGNMENT、解説本文、3段階例題、指定4グラフ、解説PDF、練習問題source、練習PDFまで完了。解説画像PowerPoint以降は未完了

## Topic 04 成果物
- source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`
- 解説PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_explanation.pdf`
  - A4縦4ページ、Visual QA PASS
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
  - 一次8問（全問五肢択一）＋二次4問（記述式）、計12問、全問完全解説付き
  - 計算独立再確認 `12 / 12 PASS`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
  - A4縦7ページ
  - 練習問題sourceだけから生成し、問題・数値・正答・解法・固定範囲を変更していない
  - 全7ページ180 dpi表示QA PASS（欠け・重なり・黒四角・ページ外はみ出しなし）
  - 問1〜問12、一次8問＋二次4問、完全解説を収録
  - 未確認0系実値・範囲外論点の追加なし

## 過去問対応
選定した公式過去問:
- H28 一次 機械 問1 — 直流電動機の始動、電圧方程式、回転運動方程式、慣性、始動電流過渡
- H28 一次 機械 問5 — 固定範囲部分: 鉄道用直巻電動機と大始動トルク
- H26 一次 機械 問5 — 固定範囲部分: 直流電気車の始動トルクと直巻電動機
- H24 二次 機械・制御 問1 — 固定範囲部分(1)(2)(4): 電機子抵抗、誘導起電力、速度・トルク条件から必要端子電圧を逆算

制作前の公式解答照合:
- H28 一次 機械 問1: (1)ト、(2)リ、(3)ヘ、(4)ロ、(5)ニ — 一致
- H28 一次 機械 問5: 固定範囲(1)=チ（直巻） — 一致
- H26 一次 機械 問5: 固定範囲(1)=ロ（始動時のトルク）、(2)=リ（直巻） — 一致
- H24 二次 機械・制御 問1: `R_a=0.500 Ω`、`E=188 V`、`V=133 V` — 公式標準解答一致

二種の一次・二次合計「原則5問以上」は維持するが、Topic 04の固定範囲へ直接接続できる公式問題として確認できたのは上記4問。件数合わせのために回生、チョッパ、VVVF、誘導機、き電等を追加しない。一次・二次双方を含み、確認できた固定範囲対応問題を全件対象とする。

## 固定境界
本テーマへ追加しない:
- 発電ブレーキ・回生エネルギー解析（Topic 05）
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF・四象限運転（Topic 10以降）
- チョッパ制御
- 未確認の0系固有数値

Topic 04は `completed` ではない。完成数は `3 / 39` のまま。

## 完了済みテーマ
- Topic 01: 最終QA PASS
- Topic 02: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 03: 最終QA PASS、完成後独立再解答 5/5 PASS
