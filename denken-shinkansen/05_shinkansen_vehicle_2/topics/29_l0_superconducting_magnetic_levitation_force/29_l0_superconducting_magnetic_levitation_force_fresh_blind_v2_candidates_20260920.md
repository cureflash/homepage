# Topic 29 clean blind v2 candidate lock

更新日: 2026-09-20

判定: `CANDIDATE_LOCKED / OFFICIAL_ANSWERS_NOT_OPENED`

## reconcile / blind条件

開始時点の最新mainは `ac52c1814daac94c5966c17b0ba34f80500171e4`。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、最新`STATUS.md` / `HANDOFF.md`、remediation済み教材側資料、直近workerの3artifact再同期成果をreconcileした。

candidate固定前に以下のanswer-bearing資料は開いていない。

- active theme alignment本体 / exam alignment QA
- 公式標準解答PDF
- v1 compare QA
- H23 answer-bearing remediation note

参照した教材側正本:

- 解説source blob `ac618a6ac5d0131ba68bfe55f0af58b38de37737`
- 練習source blob `604fcd377c8db66799c4b8938d7a815305405f8d`
- 解説PDF blob `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
- 練習PDF blob `bebec9f9a6ed60178ca567e54060b37958ea2a27`
- PowerPoint blob `85394e303e8ff9bff19193a76b09d1db17406ec9`

公式「問題」PDFのみを読み、公式「解答」PDFは未閲覧の状態で以下を固定する。このファイルは固定後に変更しない。

## R8 一次「理論」問2 — 5答案要素

1. 等価円電流
   - 円環上の線電荷は周速度 `rω` で動くので `I_eq=λrω`。
   - candidate: `(ル)`
2. 微小電流要素がPにつくる磁束密度の大きさ
   - `R=sqrt(a^2+r^2)`、`dl` と `QP` は直交。
   - `dB=μ_0 I_eq dl/(4πR^2)=μ_0 rλω dl/[4π(a^2+r^2)]`。
   - candidate: `(リ)`
3. 方向
   - ビオ・サバールの向きは `dl` と `QP` の両方に垂直。
   - candidate: `(ヨ)`
4. N巻小コイルの総鎖交磁束
   - 円電流軸上磁界 `B=μ_0 I_eq r^2/[2(a^2+r^2)^(3/2)]` より
   - `Ψ=NSB=μ_0NSr^3λω/[2(a^2+r^2)^(3/2)]`。
   - candidate: `(カ)`
5. `ω=ω(t)` の誘導起電力
   - `e=-dΨ/dt=-μ_0NSr^3λ/[2(a^2+r^2)^(3/2)] dω/dt`。
   - candidate: `(ハ)`

R8 candidate sequence: `ル / リ / ヨ / カ / ハ`

## R7 一次「理論」問2 — 5答案要素

1. エネルギー正定条件
   - 全角度で `|M|<=sqrt(L_1L_2)`、`|M|max=M_0`。
   - `L_1L_2>=M_0^2`。
   - candidate: `(ヲ)`
2. 磁気エネルギー
   - `W=1/2 L_1I_1^2+1/2 L_2I_2^2+M_0I_1I_2 cosθ`。
   - candidate: `(ワ)`
3. 電磁トルク
   - `T=(∂W'/∂θ)_I=-M_0I_1I_2 sinθ`。
   - candidate: `(チ)`
4. コイル1の鎖交磁束
   - `Ψ_1=L_1I_1+M_0I_2 cosωt`。
   - candidate: `(イ)`
5. コイル1の誘導起電力
   - `e_1=-dΨ_1/dt=ωM_0I_2 sinωt`。
   - candidate: `(ヨ)`

R7 candidate sequence: `ヲ / ワ / チ / イ / ヨ`

## R4 一次「理論」問2 — 5答案要素

1. トロイダル磁束密度
   - `B(r)=μ_0μ_rI/(2πr)`。
   - candidate: `(ヌ)`
2. 厳密磁束
   - `Φ=c∫_a^(a+b)B(r)dr=μ_0μ_rIc/(2π) ln[(a+b)/a]`。
   - candidate: `(ト)`
3. 平均磁路長による磁気抵抗
   - 平均半径 `a+b/2`、磁路長 `π(2a+b)`、断面積 `bc`。
   - `R_m=π(2a+b)/(μ_0μ_rbc)`。
   - candidate: `(カ)`
4. 平均磁路近似の磁束
   - `Φ=I/R_m=μ_0μ_rIbc/[π(2a+b)]`。
   - candidate: `(リ)`
5. `a=0.02 m, b=0.01 m, c=0.01 m, μ_r=5000, I=1000 A`
   - 厳密値 `≈4.05 mWb`、平均磁路近似 `≈4.00 mWb`。
   - candidate: `(ヲ) 4 mWb`

R4 candidate sequence: `ヌ / ト / カ / リ / ヲ`

## R2 一次「理論」問2 — 5答案要素

1. 初期鎖交磁束
   - `Ψ_0=L(0)I`。
   - candidate: `(イ)`
2. 初期磁気エネルギー
   - `W_0=1/2 L(0)I^2`。
   - candidate: `(ヨ)`
3. 理想短絡のままLが `L(x)` へ変化したときの電流
   - 端子電圧0なので `dΨ/dt=0`、`Ψ=L(0)I` を保存。
   - `i=L(0)I/L(x)`。
   - candidate: `(ワ)`
4. 変位後の磁気エネルギー
   - `W=1/2 L(x)i^2=1/2 [L(0)^2/L(x)]I^2`。
   - candidate: `(ロ)`
5. 外力の仕事
   - 理想短絡・損失なしでは外力仕事は磁気エネルギー増分としてコイルに蓄えられる。
   - candidate: `(ヌ)`

R2 candidate sequence: `イ / ヨ / ワ / ロ / ヌ`

## H23 二次「機械・制御」問1 — 4答案要素

与条件: `V_L=200 V`, `f=50 Hz`, 4極、`r_1=0.1 Ω`, `x_1=0.3 Ω`, `r'_2=0.15 Ω`, `x'_2=0.4 Ω`、励磁電流・鉄損無視。

共通:

- `V_1=200/sqrt(3)=115.47 V`
- `N_s=120f/p=1500 min^-1`
- `ω_s=2πN_s/60=157.08 rad/s`
- `I'_2(s)=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `T(s)=3I'^2_2(s)(r'_2/s)/ω_s`

1. `s=0.05` の電磁トルク
   - `I'_2≈36.33 A`
   - `T≈75.64 N・m`
   - candidate: `75.6 N・m`
2. 最大トルクすべり
   - `s_max=0.15/sqrt(0.1^2+(0.3+0.4)^2)=0.21213...`
   - candidate: `0.212`
3. 同期速度から逆相制動し、停止までで制動トルク最大となる回転速度
   - 逆相制動では `s_p=2-s`。同期速度直後から停止まで `s_p: 2 -> 1`。
   - 無拘束最大点 `s_max≈0.212` は実通過区間 `1<=s_p<=2` の外。
   - 区間内では停止側へ近づくほどトルク大きさが増えるため、最大は停止直前。
   - candidate: `0 min^-1`（停止直前側）
4. 二相入替え直後の制動トルク
   - 入替え直後 `s_p=2`。
   - `I'_2(2)≈160.03 A`
   - `|T(2)|≈36.684 N・m`
   - candidate: `36.7 N・m`（回転方向と反対の制動トルク）

## candidate固定

- 一次: `20答案要素`
- 二次: `4答案要素`
- 合計: `24答案要素`
- candidate固定後の変更: `禁止`
- 次工程: このcommitをcandidate lockとして固定後、初めて公式標準解答を開き `24 / 24` を照合する。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。