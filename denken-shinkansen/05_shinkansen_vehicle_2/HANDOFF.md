# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-14

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路`、Topic 02 `0系② 整流回路の波形解析`、Topic 03 `0系③ 直流主電動機の電圧方程式とトルク`、Topic 04 `0系④ タップ制御と加速特性` は最終QAまでPASS。完成数は `4 / 39`。

現在地は `topic_05_explanation_body_complete`。active topicはTopic 05 `0系⑤ 発電ブレーキのエネルギー解析`。

## Topic 05 EXAM_ALIGNMENT
source:
- `topics/05_0series_dynamic_brake_energy/05_0series_dynamic_brake_energy.md`

系列SPECの固定範囲:
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

制作前に電気技術者試験センターの二種一次・二次公式問題を確認した。固定範囲へ直接または固定範囲の必須計算基礎として接続し、後続範囲を混ぜずにゲート化する問題は次の2問。

- R5 一次 機械 問2
  - 固定範囲: `(2)(3)` と末尾の車上抵抗消費の記述
  - 公式解答: `(2)=ホ`（制動）, `(3)=チ`（電気エネルギー）
  - 運動エネルギー→電気エネルギーへの変換と、他列車が消費できない場合の車上抵抗消費を教材へ反映
  - `(1)`誘導電動機、`(4)`バッテリー、`(5)`回生ブレーキは除外
- H24 二次 機械・制御 問1
  - 固定範囲の前提計算: `(1)(2)`
  - 公式標準解答: `R_a=0.500 Ω`, `E=187.5 V ≒ 188 V`
  - 直流機の誘導起電力を発電機運転側へ接続し、制動電流・制動トルク・抵抗電力の計算基礎にする
  - `(3)〜(6)`の可逆チョッパ固有計算は除外

二種の一次・二次合計「原則5問以上」は維持するが、固定範囲を守って公式公開問題からゲート化できたのは2問。件数合わせのためにR6の誘導機回生、H28のチョッパ・回生、H23二次の誘導機制動、H24二次問1後半の可逆チョッパ等を追加しない。

## Topic 05 解説本文 実装済み

sourceへ以下を実装した。

- 発電制動のエネルギーフロー: `車両運動エネルギー → 主電動機の発電機運転 → 電気エネルギー → 制動抵抗のジュール熱`
- `E = k_e Φω`、界磁一定なら `E ∝ ω`
- 簡略抵抗回路 `I_b = E/(R_a+R_b)` と成立条件
- `T_b = k_t Φ I_b`
- `P_g = E I_b`, `P_R = I_b^2 R_b`, `P_Cu = I_b^2 R_a`, `Q_R = ∫P_R dt`
- 発電電力、抵抗発熱、電機子銅損の区別と電力収支
- `K = 1/2 m_eq v^2` と `m_eq dv/dt = -F_b` による速度低下
- 一定磁束・固定抵抗・固定伝達条件をまとめた `E=c_Ev` の簡略モデル
- 同モデルから `F_b∝v`、`P∝v^2`、`v(t)=v_0exp(-t/τ_b)`、累積抵抗発熱量を導出
- 二次記述答案の順序: 条件整理→発電電圧→制動電流→制動トルク/電力→発熱量→速度低下→収支検算

3段階例題も実装済み。

1. 基礎: 発電電圧→制動電流→制動トルク→発電電力→抵抗発熱→銅損
2. 本試験標準: H24二次固定範囲の `R_a=0.500 Ω`, `E=187.5 V≒188 V` を再現し、発電機運転側へ接続
3. 複合: 教材用仮定値だけで速度―制動力、指数的速度低下、制動抵抗発熱量を一つの計算鎖で確認

H24二次の固定範囲として明示した値を除き、0系の未確認実値は使っていない。

## Topic 05 SPEC指定4グラフ 作図条件確定
- 速度―制動力: `F_b(v)=(c_E^2/R_t)v`
- 速度―制動電力: `P_g(v)=(c_E^2/R_t)v^2`, `P_R(v)=(c_E^2R_b/R_t^2)v^2`
- 時間―速度: `v(t)=v_0exp(-t/τ_b)`
- 制動抵抗の発熱量: `Q_R(t)=P_R(0)(τ_b/2){1-exp(-2t/τ_b)}`

これらは一定磁束・固定抵抗等の教材用簡略モデル。実車特性として描く場合は確認済み一次資料値だけを使う。

## Topic 05 固定境界
追加しない:
- 回生電力を架線へ戻す回路・回生失効・四象限運転
- 可逆チョッパのスイッチング状態・通流率・昇圧動作
- 主回路全体の総合損失・効率（Topic 06）
- サイリスタ位相制御（Topic 08）
- 誘導電動機・PWM・VVVF（Topic 10以降）
- 未確認の0系固有数値

## 次の正確な開始点
Topic 05の解説PDFを作成する。

確定済みsource以外へ範囲を広げず、A4縦の解説プリントへ本文・3段階例題・SPEC指定4グラフを反映し、生成後に全ページ表示QAを行う。0系固有値が一次資料で未確認なら実値化しない。

## Topic 04 完了記録
- 最終QA: `PASS`
- final QA record: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_final_qa.md`
- source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration.md`
- 解説PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_explanation.pdf`
- 練習問題source: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice_source.md`
- 練習PDF: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_practice.pdf`
- 解説画像PowerPoint: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_images.pptx`
- 完成後独立再解答: `topics/04_0series_tap_control_acceleration/04_0series_tap_control_acceleration_independent_reanswer.md`

Topic 04完成後独立再解答は固定範囲11小問で `11 / 11 PASS`。教材外知識による補完、固定範囲外論点、未確認0系実値の追加はいずれも0件。
