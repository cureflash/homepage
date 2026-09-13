# STATUS - 新幹線車両・電験二種

更新日: 2026-09-13

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 3 / 39
- current_status: `topic_04_exam_alignment_complete`
- last_completed_topic: `03 0系③ 直流主電動機の電圧方程式とトルク`
- active_topic: `04 0系④ タップ制御と加速特性`
- next_start: Topic 04の確定済みEXAM_ALIGNMENTだけを使って解説本文と3段階例題を作成する。0系固有のタップ方式・数値を使う場合は一次資料を先に確認する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [ ] 04 0系④ タップ制御と加速特性 — EXAM_ALIGNMENT完了、教材制作未完了

## Topic 04 制作前EXAM_ALIGNMENT
source:
- `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`

系列SPECの固定範囲:
- タップ切替
- 主回路電圧
- 電機子電流
- 起動電流
- 加速
- けん引力
- 速度上昇
- 電流制限
- 動作点移動
- タップ条件―主回路電圧
- タップ条件―速度トルク特性
- 速度―けん引力
- 時間―速度の簡略加速計算

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

二種の一次・二次合計「原則5問以上」は維持するが、固定範囲へ直接接続できる公式問題として確認できたのは上記4問。件数合わせのために回生、チョッパ、VVVF、誘導機、き電等を追加しない。一次・二次双方を含み、確認できた固定範囲対応問題を全件対象とする。

教材必須説明として確定:
- 停止時 `E=0` と起動電流
- `V_a=E+I_aR_a`、`E=k_eΦω`、`T=k_tΦI_a`
- `J dω/dt=T-T_L` による始動・加速
- 直巻電動機の未飽和域 `Φ∝I_a` と高始動トルク
- タップ上昇による主回路電圧・速度トルク特性・動作点の移動
- 速度上昇→逆起電力増加→電流低下→次段への移行という電流制限の一般原理
- 電動機トルクから車輪周けん引力への換算
- `m_eq dv/dt=F_t-F_r` による簡略加速
- SPEC指定4グラフ

境界:
- 発電ブレーキ・回生はTopic 05以降
- サイリスタ位相制御はTopic 08
- 誘導電動機・PWM・VVVF・四象限運転はTopic 10以降
- チョッパ制御は本テーマへ追加しない
- 未確認の0系タップ段数・電圧・主電動機定格・歯車比・車輪径・編成質量等は実値化しない

Topic 04は `completed` ではない。完成数は `3 / 39` のまま。

## 完了済みテーマ
### Topic 03
- 最終QA: `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_final_qa.md`
- 完成後独立再解答: `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_exam_reanswer.md`
- 判定: PASS、5/5、教材外知識補完0件

### Topic 02
- 最終QA: `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`
- 完成後独立再解答: `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_exam_reanswer.md`
- 判定: PASS、5/5、教材外知識補完0件

### Topic 01
- 最終QAまでPASS
- 完成後独立再解答: 6/6 PASS、教材外知識補完0件

詳細な制作履歴・式・出典・QA記録は各topicのsource、exam_reanswer、final_qaを正本とする。