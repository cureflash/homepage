# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 4 / 39
- current_status: `topic_05_exam_alignment_complete`
- last_completed_topic: `04 0系④ タップ制御と加速特性`
- active_topic: `05 0系⑤ 発電ブレーキのエネルギー解析`
- next_start: Topic 05の解説本文＋3段階例題。確定済みEXAM_ALIGNMENTの固定範囲だけで、発電機運転→発電電圧→制動電流→制動トルク/電力→抵抗発熱→運動エネルギー→速度低下を説明する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [ ] 05 0系⑤ 発電ブレーキのエネルギー解析 — EXAM_ALIGNMENT完了、本文未着手

## Topic 05 現在地
- source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`
- 制作前EXAM_ALIGNMENT: 完了
- 公式過去問は一次・二次双方を確認
- 固定範囲へ直接または必須計算基礎として接続するゲート対象:
  - R5 一次 機械 問2 — 固定範囲 `(2)(3)` と車上抵抗消費の記述
  - H24 二次 機械・制御 問1 — 固定範囲の前提計算 `(1)(2)`。可逆チョッパ固有の `(3)〜(6)` は除外
- 制作前公式解答照合:
  - R5一次問2: `(2)=ホ`（制動）, `(3)=チ`（電気エネルギー）
  - H24二次問1: `R_a=0.500 Ω`, `E=187.5 V ≒ 188 V`
- 二種の一次・二次合計「原則5問以上」は維持するが、固定範囲を守って公式公開問題からゲート化できたのは上記2問。件数合わせで回生、誘導機制動、可逆チョッパ、VVVF等を追加していない

## Topic 05 固定範囲
- 発電機運転
- 発電電圧
- 制動電流
- 制動抵抗
- 制動電力
- 制動トルク
- 運動エネルギー
- 発熱量
- 速度低下

指定計算・グラフ:
- 速度―制動力
- 速度―制動電力
- 時間―速度
- 制動抵抗の発熱量

追加しない:
- 回生・四象限運転
- 可逆チョッパのスイッチング・通流率・昇圧動作
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF（Topic 10以降）
- 未確認の0系固有数値

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

## 完了済みテーマ
- Topic 01: 最終QA PASS
- Topic 02: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 03: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 04: 最終QA PASS、完成後独立再解答 11/11 PASS
