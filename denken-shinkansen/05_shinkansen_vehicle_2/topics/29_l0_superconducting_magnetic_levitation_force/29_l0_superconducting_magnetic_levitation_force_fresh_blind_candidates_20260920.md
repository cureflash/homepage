# Topic 29 fresh clean blind candidates — 2026-09-20

判定: `CANDIDATE_LOCKED / OFFICIAL_ANSWERS_NOT_YET_CHECKED`

対象: `29 L0系③ 超電導磁気浮上の電磁力`

このファイルは完成後clean blindの候補固定点である。作成時点では公式解答PDF、保存済み正答、固定EXAM_ALIGNMENT本文の正答欄を参照していない。参照したのは、公式の問題PDFとTopic 29教材本文・練習sourceのみ。candidate固定後は内容を変更しない。

## 参照した問題PDF（問題のみ）

- R8 二種一次「理論」: https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf
- R7 二種一次「理論」: https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf
- R4 二種一次「理論」: https://www.shiken.or.jp/chief/upload/20220820_ch_second_q01.pdf
- R2 二種一次「理論」: https://www.shiken.or.jp/chief/upload/20200912_ch_second_q01.pdf
- H23 二種二次「機械・制御」: https://www.shiken.or.jp/chief/upload/20111127_ch_second_q02.pdf

## 教材-only候補

### R8 一次「理論」問2

1. `(1) = ル` — 回転線電荷の等価円電流 `I_eq=λωr`
2. `(2) = リ` — `dB=μ0 λ r ω dl/[4π(a^2+r^2)]`
3. `(3) = ヨ` — `dl` と `QP` の両方に垂直
4. `(4) = カ` — `Ψ=μ0 N S r^3 λ ω/[2(a^2+r^2)^(3/2)]`
5. `(5) = ハ` — `e=-μ0 N S r^3 λ/[2(a^2+r^2)^(3/2)] dω/dt`

### R7 一次「理論」問2

1. `(1) = ヲ` — `L1 L2 >= M0^2`
2. `(2) = ワ` — `W=1/2 L1 I1^2 + 1/2 L2 I2^2 + M0 I1 I2 cosθ`
3. `(3) = チ` — `T=-M0 I1 I2 sinθ`
4. `(4) = イ` — `Ψ1=L1 I1 + M0 I2 cos(ωt)`
5. `(5) = ヨ` — `e1=ω M0 I2 sin(ωt)`

### R4 一次「理論」問2

1. `(1) = ヌ` — `B(r)=μ0 μr I/(2πr)`
2. `(2) = ト` — `Φ_ampere=μ0 μr I c/(2π) ln((a+b)/a)`
3. `(3) = カ` — `Rm=π(2a+b)/(μ0 μr b c)`
4. `(4) = リ` — `Φ_mc=μ0 μr I b c/[π(2a+b)]`
5. `(5) = ヲ` — 約 `4 mWb`

### R2 一次「理論」問2

1. `(1) = イ` — `Ψ=L(0)I`
2. `(2) = ヨ` — `W0=1/2 L(0)I^2`
3. `(3) = ワ` — `i=L(0)I/L(x)`
4. `(4) = ロ` — `W(x)=L(0)^2 I^2/[2L(x)]`
5. `(5) = ヌ` — 理想短絡・損失なしなので外力仕事は増加した磁気エネルギーとしてコイルに蓄えられる

### H23 二次「機械・制御」問1

公式問題は、`V=200 V`, `f=50 Hz`, 4極、L形等価回路 `r1=0.1 Ω`, `x1=0.3 Ω`, `r2'=0.15 Ω`, `x2'=0.4 Ω` を与える。

1. `(1) = UNRESOLVED_FROM_MATERIAL`
   - Topic 29教材は `I2=sE2/sqrt(r2^2+(sx2)^2)` と `T=P2/ωs` の簡略二次回路は扱うが、一次側 `r1`,`x1` を含むL形等価回路で、線間電圧200 Vからトルクへ進む一般式・相電圧処理を示していない。
   - 外部知識で補わず停止する。
2. `(2) = 0.375`（教材-only candidate）
   - 教材記載の基本形 `s_m=r2/x2` をそのまま適用すると `0.15/0.4=0.375`。
   - ただし、一次側 `r1`,`x1` を含む本問へこの基本形を適用してよい条件は教材にないため、確信候補ではない。
3. `(3) = 0 min^-1`（教材-only candidate）
   - 逆相制動では `s_p=2-s`。同期速度から停止まで `s_p=2→1`。
   - 教材の簡略トルク式では最大点 `s_m=0.375` はこの区間外なので、制動トルクの大きさは停止点側で最大となる候補を固定する。
4. `(4) = UNRESOLVED_FROM_MATERIAL`
   - 逆相制動直後は `s_p=2` までは教材から決まるが、一次側 `r1`,`x1` と線間電圧を含むL形等価回路から制動トルクを計算する式が教材にない。
   - 外部知識で補わず停止する。

## candidate lock集計

- 一次4問: `20 / 20` 候補固定
- 二次1問: `2 / 4` 数値候補固定、`2 / 4 UNRESOLVED_FROM_MATERIAL`
- 合計: `22 / 24` candidate fixed、`2 / 24` unresolved
- candidate固定後修正: `禁止`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- L0系未確認実車値の真値化: `0件`
- Topic 30先取り: `0件`

次工程: このcandidateを変更せず公式解答・標準解答と照合し、不一致または未解答は教材側不足として診断する。