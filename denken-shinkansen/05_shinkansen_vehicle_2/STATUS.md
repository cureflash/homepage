# STATUS - 新幹線車両・電験二種

更新日: 2026-09-14

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 4 / 39
- current_status: `topic_05_final_qa_needs_revision`
- last_completed_topic: `04 0系④ タップ制御と加速特性`
- active_topic: `05 0系⑤ 発電ブレーキのエネルギー解析`
- next_start: Topic 05の内容・数式・過去問選定を変更せず、source Markdownと練習sourceに残る旧進捗記録だけを現在地へ同期する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [ ] 05 0系⑤ 発電ブレーキのエネルギー解析 — 最終QA `NEEDS_REVISION`。成果物・過去問対応・独立再解答・表示QAはPASSだが、source内の旧進捗記録が実在成果物と不整合

## Topic 05 現在地
- source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`
- 解説PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation.pdf`
  - A4縦5ページ
  - SPEC指定4グラフ収録
  - 基礎・本試験標準・複合の3段階例題収録
  - 全5ページ180 dpi Visual QA PASS
- 解説PDF QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_explanation_qa.md`
- 練習問題source: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_source.md`
  - 一次8問（全問五肢択一）＋二次記述4問、計12問
  - 全問完全解説付き
  - 計算・論理QA `12 / 12 PASS`
  - R5一次・H24二次の固定範囲へ接続
- 練習PDF: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice.pdf`
  - A4縦3ページ
  - 一次8問（全問五肢択一）＋二次記述4問
  - 全問に正答・完全解説を収録
  - 全3ページ180 dpi Visual QA PASS
- 練習PDF QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_practice_qa.md`
- 解説画像PowerPoint: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images.pptx`
  - 16:9、5スライド
  - SPEC指定4グラフを可視化
  - R5一次・H24二次の固定範囲への解法接続を収録
  - 全5スライドVisual QA・overflow検査・ZIP整合性 PASS
- PowerPoint QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_images_qa.md`
- 完成後独立再解答: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_independent_reanswer.md`
  - 固定範囲5チェックポイント `5 / 5 PASS`
  - R5一次: `(2)=ホ`, `(3)=チ`, 車上抵抗消費の説明を再構築
  - H24二次: `R_a=0.500 Ω`, `E=187.5 V ≒ 188 V` を途中式付きで再導出
  - 教材外知識補完・範囲外論点・未確認0系実値の追加はいずれも0件
- 最終QA: `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy_final_qa.md`
  - 判定: `NEEDS_REVISION`
  - 成果物存在・EXAM_ALIGNMENT・独立再解答・範囲境界・表示QA: PASS
  - 不整合: source Markdownに「解説PDF等未実施」「独立再解答未実施」「次は解説PDF作成」が残存、練習sourceに「PDF自体は次工程」が残存
- 制作前EXAM_ALIGNMENT: 完了
- 次工程: source内の旧進捗記録だけを同期

## Topic 05 過去問対応
公式過去問は一次・二次双方を確認済み。固定範囲へ直接または必須計算基礎として接続するゲート対象:
- R5 一次 機械 問2 — 固定範囲 `(2)(3)` と車上抵抗消費の記述
  - 公式解答: `(2)=ホ`（制動）, `(3)=チ`（電気エネルギー）
- H24 二次 機械・制御 問1 — 固定範囲の前提計算 `(1)(2)`
  - 公式標準解答: `R_a=0.500 Ω`, `E=187.5 V ≒ 188 V`
  - 可逆チョッパ固有の `(3)〜(6)` は除外

二種の一次・二次合計「原則5問以上」は維持するが、固定範囲を守って公式公開問題からゲート化できたのは上記2問。件数合わせで回生、誘導機制動、可逆チョッパ、VVVF等を追加していない。

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

解説本文・PDF・練習問題source・練習PDF・PowerPointに実装済み:
- `E = k_e Φω`、界磁一定なら `E ∝ ω`
- `I_b = E/(R_a+R_b)`
- `T_b = k_t Φ I_b`
- `P_g = E I_b`, `P_R = I_b^2 R_b`, `P_Cu = I_b^2 R_a`, `Q_R = ∫P_R dt`
- `K = 1/2 m_eq v^2`, `m_eq dv/dt = -F_b`
- 一定磁束・固定抵抗の教材用簡略モデルによる指定4グラフ
- 二次記述答案の計算鎖とエネルギー収支検算

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
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
- 解説画像PowerPoint: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_images.pptx`
- 完成後独立再解答: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_independent_reanswer.md`
  - 固定範囲11小問 `11 / 11 PASS`
  - 教材外知識補完・範囲外論点・未確認0系実値の追加はいずれも0件

## 完了済みテーマ
- Topic 01: 最終QA PASS
- Topic 02: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 03: 最終QA PASS、完成後独立再解答 5/5 PASS
- Topic 04: 最終QA PASS、完成後独立再解答 11/11 PASS
