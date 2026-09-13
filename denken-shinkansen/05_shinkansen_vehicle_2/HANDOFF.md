# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路`、Topic 02 `0系② 整流回路の波形解析`、Topic 03 `0系③ 直流主電動機の電圧方程式とトルク` は最終QAまでPASS。完成数は `3 / 39`。

現在地は `topic_04_exam_alignment_complete`。Topic 04 `0系④ タップ制御と加速特性` の制作前EXAM_ALIGNMENTまで完了した。

## Topic 04 制作前EXAM_ALIGNMENT
source:
- `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`

選定公式過去問:
- H28 一次 機械 問1 — 直流電動機の始動、電圧方程式、回転運動方程式、慣性、始動電流過渡
- H28 一次 機械 問5 — 固定範囲(1): 鉄道用直巻電動機と大始動トルク
- H26 一次 機械 問5 — 固定範囲(1)(2): 直流電気車の始動トルクと直巻電動機
- H24 二次 機械・制御 問1 — 固定範囲(1)(2)(4): 電機子抵抗、誘導起電力、速度・トルク条件から必要端子電圧を逆算

制作前照合:
- H28一次問1: (1)ト、(2)リ、(3)ヘ、(4)ロ、(5)ニ — 公式解答一致
- H28一次問5: (1)=チ（直巻） — 公式解答一致
- H26一次問5: (1)=ロ（始動時のトルク）、(2)=リ（直巻） — 公式解答一致
- H24二次問1: `R_a=0.500 Ω`、`E=188 V`、`V=133 V` — 公式標準解答一致

二種の原則5問以上について、固定範囲へ直接接続できる公式問題として確認できたのは4問。件数合わせのために回生、チョッパ、VVVF、誘導機、き電を混入させない。一次・二次双方は確保している。

## Topic 04 固定範囲
- タップ切替
- 主回路電圧
- 電機子電流
- 起動電流
- 加速
- けん引力
- 速度上昇
- 電流制限
- 動作点移動

指定計算・グラフ:
- タップ条件―主回路電圧
- タップ条件―速度トルク特性
- 速度―けん引力
- 時間―速度の簡略加速計算

## 教材で必須にする説明
- 停止時 `E=0` と起動電流
- `V_a=E+I_aR_a`
- `E=k_eΦω`
- `T=k_tΦI_a`
- `J dω/dt=T-T_L`
- 直巻電動機の未飽和域 `Φ∝I_a` と大始動トルク
- タップ上昇による主回路電圧・速度トルク特性・動作点の移動
- 速度上昇→逆起電力増加→電流低下→次段への移行という電流制限の一般原理
- 電動機トルクから車輪周けん引力への換算
- `m_eq dv/dt=F_t-F_r` による簡略加速
- SPEC指定4グラフ

## 境界
本テーマへ追加しない:
- 発電ブレーキ・回生エネルギー解析（Topic 05）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF・四象限運転（Topic 10以降）
- チョッパ制御
- 未確認の0系固有数値

0系のタップ段数、各段電圧、主電動機定格、歯車比、車輪径、編成質量等は一次資料で確認できるまで実値として置かない。

## 次の正確な開始点
Topic 04の確定済みEXAM_ALIGNMENTだけを使い、解説本文と3段階例題を作成する。

0系固有のタップ方式・数値を本文へ入れる場合は、JR・鉄道総研・メーカー・学会等の一次資料を先に確認する。後続Topicの論点は追加しない。

## 完了済みテーマ参照
- Topic 03 final QA: `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_final_qa.md`
- Topic 03 reanswer: `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_exam_reanswer.md`
- Topic 02 final QA: `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`
- Topic 02 reanswer: `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_exam_reanswer.md`

Topic 04はまだ `completed` ではない。完成数は `3 / 39`。