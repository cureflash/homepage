# Topic 28 fresh clean-blind 公式照合 QA — 2026-09-20

判定: `NEEDS_REVISION / 22_OF_27_PASS`

対象candidate:
- `28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920.md`
- 固定commit: `d60e9613320037d877bcc6e8616a6855d5ffbabd`
- candidateは公式照合後に編集しない。

## 公式照合

| 固定問題 | 答案要素 | PASS | FAIL | 判定 |
|---|---:|---:|---:|---|
| R4一次「機械」問1 | 5 | 4 | 1 | NEEDS_REVISION |
| R7二次「機械・制御」問1 | 6 | 6 | 0 | PASS |
| R5二次「機械・制御」問1 | 6 | 6 | 0 | PASS |
| H29二次「機械・制御」問1 `(1),(2),(5)` | 6 | 2 | 4 | NEEDS_REVISION |
| H27二次「機械・制御」問1 | 4 | 4 | 0 | PASS |
| 合計 | 27 | 22 | 5 | NEEDS_REVISION |

一次: `4 / 5 PASS`

二次: `18 / 22 PASS`

合計: `22 / 27 PASS`

## FAIL 1 — R4一次「機械」問1 (4)

公式標準解答は `(4) 高い`。fresh candidateは `(4) 同じ` とした。

この設問の条件は、仕様・特性が等しい2台の同期発電機を並列運転し、原動機入力を等しく一定にしたままSG1の界磁電流を増加するもの。公式は、循環無効電流の電機子反作用によって両機の端子電圧が調整前より `高い` 共通電圧で平衡するとしている。

現行教材は、界磁変更で無効電力分担・無効横流が変わることまでは説明しているが、このR4固有条件で共通端子電圧が調整前より高くなることを明示していない。一般的な「並列中は同一母線電圧」という説明だけでは `(4)` を一意に選べない。

exact pedagogical gap: `R4 問1の特定条件における「界磁増加後、共通端子電圧は調整前より高い」の因果説明が教材にない`。

## FAIL 2 — H29二次「機械・制御」問1 (5) の4数値要素

fresh candidateは、問題文の短絡比 `K_SCR=0.6` を同期リアクタンスへ変換する橋渡しが教材にないため、外部知識で補わず4要素を未確定とした。

公式標準解答では同問(4)で

`X_s[p.u.] = 1 / K_SCR`

を示しており、(5)では `X_s=1/0.6=1.6667 p.u.` を用いる。公式値は:

- `I = 0.534 p.u.`
- `E = 1.60 p.u.`
- `P = 0.481 p.u.`
- `ε = 60.3 %`

現行教材には電圧変動率・フェーザ式はあるが、`K_SCR → X_s[p.u.]` の定義・成立条件・導出がない。固定対象はH29 `(1),(2),(5)` だが、(5)を自力で解くためには(3),(4)相当の中間知識が必要であり、MASTER/EXAM_ALIGNMENTの「中間知識を欠落させない」条件に抵触する。

exact pedagogical gap: `H29 問1(5)の入口となる K_SCR=1/X_s[p.u.] とその成立条件が教材にない`。

## 公式参照

- R4一次「機械」公式解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R7二次「機械・制御」公式解答: https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf
- R5二次「機械・制御」公式解答: https://www.shiken.or.jp/chief/upload/20231112_ch_second_a01.pdf
- H29二次「機械・制御」公式解答: https://www.shiken.or.jp/chief/upload/20171119_ch_second_a01.pdf
- H27二次「機械・制御」公式解答: https://www.shiken.or.jp/chief/upload/20151122_ch_second_a01.pdf

## 境界

- 固定5問・27答案要素は変更しない。
- candidateは変更しない。
- Topic 21 H26二次 問1(4)の `48.1 / 48.0 N·m` は既存の過去問固有丸め差診断を維持し、一般式 `P=Tω`, `ω=2πN/60` は変更しない。
- 未確認L0系実車値を真値化しない。
- Topic 29を先取りしない。

## 次工程

教材側だけを最小remediationする。

1. R4固有条件の界磁増加・無効横流・電機子反作用・共通端子電圧上昇の因果を追加。
2. 短絡比の定義、線形・飽和無視の条件、p.u.で `X_s=1/K_SCR` となる導出を追加。
3. 解説PDFへ同期し、再QAする。
4. その後、今回のcandidate/公式比較を事前に見ていないfresh workerで再度clean blindを行う。
