# Topic 35 clean blind candidate — ATC① 軌道回路の回路解析

固定日時: 2026-09-21 JST

## 実施条件

- 最新 `main`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、`STATUS.md` / `HANDOFF.md`、直近のTopic 35進捗コミットをreconcileした。
- required reconcileで進捗メタデータとPowerPoint QA要約は確認したが、Topic 35の固定EXAM_ALIGNMENT本文、解説source/PDF、練習source/PDF、PowerPoint本体、保存済みclean blind QA、公式標準解答はcandidate固定前に開いていない。
- 解答に使用した試験資料は電気技術者試験センター公開の公式問題のみ。
- candidate固定後にのみ公式標準解答および既存教材のcoverageと照合する。
- Topic 21 H26二次「機械・制御」問1(4)の一般式 `P=Tω`, `ω=2πN/60` は変更しない。

## 公式問題

1. R8一次「理論」問3
   - https://www.shiken.or.jp/chief/upload/20260830_ch_second_q01.pdf
2. R7一次「理論」問3
   - https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf
3. R7一次「理論」問4
   - https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf
4. R6一次「理論」問6
   - https://www.shiken.or.jp/chief/upload/20240818_ch_second_q01.pdf
5. R5一次「理論」問4
   - https://www.shiken.or.jp/chief/upload/20230819_ch_second_q01.pdf

## 独立再解答 candidate

### R8一次「理論」問3

- (1) `[[R1+R2+r, -r],[-r, R1+R2+r]] [Ia,Ib]^T = [E,0]^T`（ヨ）
- (2) `ER2/(R1+R2)`（ニ）
- (3) `相反`（リ）
- (4) `I1'`（ロ）
- (5) `E/(2R1)`（ホ）

根拠:
- S開放時は上下meshが共有抵抗 `r` を逆向きに流れるため、対角項は `R1+R2+r`、相互項は `-r`。
- 連立方程式から `Ia+Ib = E/(R1+R2)` となり、a-b開放電圧の大きさは `R2(Ia+Ib)=ER2/(R1+R2)`。
- 線形相反回路なので、電源をac枝からab枝へ移したときの対応枝電流が一致する。
- 図2は左右比が `R1:R1 = R2:R2` で平衡し、横枝電流は0。左側直列枝は `2R1` なので `I1'=E/(2R1)`。

### R7一次「理論」問3

- (1) `π/2 - φ`（ヨ）
- (2) `sin(π/2 - φ)`（ト）
- (3) `P3`（ハ）
- (4) `R = ωL`（ヌ）
- (5) `1 - ω^2LC`（リ）

根拠:
- `VL=jωLI` なので、`VL` と `E` の位相差は `π/2-φ`。
- 三角形面積は `1/2 E VL sin(π/2-φ)=1/2 E VL cosφ`。
- 直径 `E` の円上で下半面の高さが最大になる点は `P3`。
- 系列 `R+jωL` の有効電力最大条件は `R=ωL`。
- `R || 1/(jωC)` を整理すると、等価回路の共通除数は `1-ω^2LC`。

### R7一次「理論」問4

- (1) `(1-k)E`（ル）
- (2) `kE`（チ）
- (3) `k/(1-k)`（ヌ）
- (4) `変成器`（ヲ）
- (5) `周囲温度の影響を受けにくく，経年変化が少ない`（ヨ）

根拠:
- IVD下側巻数が `kn` なので下側電圧は `kE`、上側は `(1-k)E`。
- 平衡時 `IS=IX` より `ZX=(EX/ES)ZS = [k/(1-k)]ZS`。
- 誘導分圧器の巻数比を基準にする構成は変成器ブリッジで、比率標準の安定性が高い。

### R6一次「理論」問6

- (1) `Ix=I1, I2≠I3`（ヘ）
- (2) `マクスウェル`（ハ）
- (3) `Z2/[(A+1)Xd]`（ワ）
- (4) `R1R3/R2`（チ）
- (5) `C2R1R3`（ヲ）

根拠:
- 検出器零で `c` はgroundと等電位、`Ic=0` なので `Ix=I1` は保たれる。一方、a・bの浮遊容量漏れによりd側の電流均衡は崩れ `I2≠I3`。
- 図2はインダクタ校正用のMaxwell bridge。
- `Vb=-AVd`, `Vd=Xd Id`, `Vd-Vb=Z2 I2` より `(A+1)Xd Id=Z2 I2`。
- `A→∞` で漏れ補償後の平衡式は `Zx=Z1Z3/Z2`。`Z2=R2/(1+jωC2R2)` より `Rx=R1R3/R2`, `Lx=C2R1R3`。

### R5一次「理論」問4

- (1) `2`（ト）
- (2) `10-j10`（ヌ）
- (3) `5+j5`（ロ）
- (4) `-j`（イ）
- (5) `5`（ホ）

根拠:
- 元回路は `j5 + 5 - j5 = 5 Ω` なので `I=10/5=2 A`。
- 開放端子電圧は `V0=2(5-j5)=10-j10 V`。
- 電源短絡時は `Z0=j5 || (5-j5)=5+j5 Ω`。
- `ZL=5+j5 Ω` 接続時、`IL=(10-j10)/(10+j10)=-j A`。
- `PL=|IL|^2 Re(ZL)=1×5=5 W`。

## candidate固定時点の集計

- 固定公式過去問: `5問`
- 一次: `25答案要素`
- 二次: `0問`（固定EXAM_ALIGNMENTどおり、件数合わせなし）
- 合計: `25答案要素`
- 公式標準解答との照合: `未実施（candidate固定後に実施する）`
- candidate固定後修正: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`
