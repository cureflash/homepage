# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路`、Topic 02 `0系② 整流回路の波形解析`、Topic 03 `0系③ 直流主電動機の電圧方程式とトルク` は最終QAまでPASS。完成数は `3 / 39`。

現在地は `topic_04_explanation_body_complete`。Topic 04 `0系④ タップ制御と加速特性` は制作前EXAM_ALIGNMENTに続き、解説本文、3段階例題、SPEC指定4グラフの作図条件までsourceへ実装済み。

## Topic 04 source
- `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`

## 過去問対応
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

## Topic 04 解説本文で確定した内容
- 停止時 `ω=0 → E=0 → I_a=V_a/R_a`
- `V_a=E+I_aR_a`
- `E=k_eΦω`
- `T=k_tΦI_a`
- `J dω/dt=T-T_L`
- 一定界磁・無負荷・電機子インダクタンス無視の簡略始動過渡
  - `τ=JR_a/(K_EK_T)`
  - `ω(t)=(V_a/K_E){1-exp(-t/τ)}`
  - `i_a(t)=(V_a/R_a)exp(-t/τ)`
- 直巻未飽和域 `Φ∝I_a`、`T∝I_a²` と飽和時の境界
- 速度上昇→逆起電力増加→電流低下→次電圧段への移行という電流制限の一般原理
- 一定磁束局所近似の速度―トルク式
  - `ω=V_a/K_E-{R_a/(K_EK_T)}T`
- 所要速度・トルクから必要端子電圧を逆算する二次答案手順
- 電動機トルクから車輪周けん引力への換算
  - `G=ω_m/ω_w`
  - `F_t=Nη_gGT_m/r_w`
- 車両速度
  - `v=2πr_wn_m/(60G)`
- 簡略加速
  - `m_eq dv/dt=F_t-F_r`
  - `v_{k+1}=v_k+a_kΔt`

## 3段階例題
- 基礎: 電圧段切替と電流変化
- 本試験標準: 一定界磁モデルの始動電流指数減衰
- 複合: 必要電圧→電動機トルク→車輪周力→加速度→所要時間

すべて教材用仮定値と明示し、0系実値として扱っていない。

## SPEC指定4グラフ
source内で式・作図条件まで確定済み:
- タップ条件―主回路電圧
- タップ条件―速度トルク特性
- 速度―けん引力
- 時間―速度の簡略加速計算

実車特性として描く場合は一次資料値のみを使う。資料値がない場合は模式図または仮定条件による計算例と明示する。

## 固定境界
本テーマへ追加しない:
- 発電ブレーキ・回生エネルギー解析（Topic 05）
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF・四象限運転（Topic 10以降）
- チョッパ制御
- 未確認の0系固有数値

0系のタップ段数、各段電圧、主電動機定格、歯車比、車輪径、編成質量等は一次資料で確認できるまで実値として置かない。

## 次の正確な開始点
Topic 04の確定済みsourceだけを使って解説PDFを作成し、全ページ表示QAを行う。

PDFではsourceにない新規仕様・新規論点を追加しない。SPEC指定4グラフを掲載する場合は、sourceで確定した「模式図」または「仮定条件による計算例」の区別を保持する。

## 完了済みテーマ参照
- Topic 03 final QA: `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_final_qa.md`
- Topic 03 reanswer: `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_exam_reanswer.md`
- Topic 02 final QA: `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`
- Topic 02 reanswer: `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_exam_reanswer.md`

Topic 04はまだ `completed` ではない。完成数は `3 / 39`。