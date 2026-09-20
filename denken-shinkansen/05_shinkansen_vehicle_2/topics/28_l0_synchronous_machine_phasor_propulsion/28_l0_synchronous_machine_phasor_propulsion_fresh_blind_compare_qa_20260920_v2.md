# Topic 28 fresh clean-blind 公式照合 QA v2 — 2026-09-20

判定: `PASS / 27_OF_27_PASS`

対象candidate:
- `28_l0_synchronous_machine_phasor_propulsion_fresh_blind_candidates_20260920_v2.md`
- 固定commit: `4694d60f3399e55ddb54e9c3d18792249d7d5e5c`
- candidate固定後に公式解答・過去のcompare QAを参照した。
- candidateは公式照合後に編集しない。

## reconcile

前回fresh blindは `22 / 27 PASS` で、FAILはR4一次問1(4)とH29二次問1(5)の4数値要素だった。remediation V2では教材側だけに以下を追加済み。

1. R4固有条件での界磁増加 → 無効横流 → 電機子反作用 → 調整前より高い共通端子電圧、の因果。
2. H29で必要な短絡比の定義・成立条件・`X_s[p.u.]=1/K_SCR` の導出と、問1(5)への接続。

今回のv2 candidateはこのremediation V2教材だけから再解答し、前回candidate / compare QAは固定後まで内容を開いていない。

## 公式照合

| 固定問題 | 答案要素 | PASS | FAIL | 判定 |
|---|---:|---:|---:|---|
| R4一次「機械」問1 | 5 | 5 | 0 | PASS |
| R7二次「機械・制御」問1 | 6 | 6 | 0 | PASS |
| R5二次「機械・制御」問1 | 6 | 6 | 0 | PASS |
| H29二次「機械・制御」問1 `(1),(2),(5)` | 6 | 6 | 0 | PASS |
| H27二次「機械・制御」問1 | 4 | 4 | 0 | PASS |
| 合計 | 27 | 27 | 0 | PASS |

一次: `5 / 5 PASS`

二次: `22 / 22 PASS`

合計: `27 / 27 PASS`

## R4 一次「機械」問1

公式選択肢とcandidateの語句を照合。

- `(1) 位相` — PASS
- `(2) 増加` — PASS
- `(3) 無効` — PASS
- `(4) 高い` — PASS
- `(5) 同期化` — PASS

前回FAILだった `(4)` は、remediation V2の過去問固有注記から自力で `高い` を選択できた。

## R7 二次「機械・制御」問1

公式標準解答とcandidateを照合。

- `(1)` `(a)V, (b)θ, (c)δ, (d)I, (e)jX_sI, (f)E` — PASS
- `(2)` `E=sqrt(V^2+(X_sI)^2-2VX_sI sinθ)` — PASS
- `(3)` `E=1.61 p.u.` — PASS
- `(4)` `X_sI=sqrt(E^2+V^2-2EV cosδ)` — PASS
- `(5a)` `I=|E-1|/X_s` — PASS
- `(5b)` `E=1.0 p.u.` — PASS

## R5 二次「機械・制御」問1

公式標準解答とcandidateを照合。

- `(1)` `(a)E, (b)jX_sI, (c)δ, (d)θ, (e)I` — PASS
- `(2)` 発電機フェーザ式、`E_n=2.53 p.u.` — PASS
- `(3)` `P=(VE/X_s)sinδ [p.u.]` — PASS
- `(4a)` `sinδ_n=0.569` — PASS
- `(4b)` `P_m=VE/X_s`, `P_mn=21.1 MW` — PASS
- `(5)` 界磁80%で `P'_m=16.9 MW`、`sinδ'=0.712`、定態安定度低下 — PASS

## H29 二次「機械・制御」問1 (1),(2),(5)

公式標準解答とcandidateを照合。

- `(1)` `φ` を力率角として電圧変動率式を導出 — PASS
- `(2)` `cosφ` 低下で `φ`,`sinφ`,`ε` が増加 — PASS
- `(5)` `X_s=1/0.6=1.6667 p.u.` — PASS
- `(5)` `I=0.534 p.u.` — PASS
- `(5)` `E=1.60 p.u.` — PASS
- `(5)` `P=0.481 p.u.`, `ε=60.3 %` — PASS

前回未確定だった4数値要素は、remediation V2に追加した `K_SCR → X_s` の中間知識から外部補完なしで導出できた。

## H27 二次「機械・制御」問1

公式標準解答とcandidateを照合。

- `(1a)` `P_1/P_0=0.707` — PASS
- `(1b)` `P_2/P_0=0.500` — PASS
- `(2a)` `V_3/V_0=0.816` — PASS
- `(2b)` `R/X_s=0.577` — PASS

## 品質ゲート判定

- 固定5問を変更していない: PASS
- 一次・二次を含む: PASS
- 保存済み正答をcandidate固定前に参照していない: PASS
- 教材だけで必要公式・中間知識を選択できた: PASS
- 途中式・成立条件・符号規約を説明できた: PASS
- 公式標準解答との照合: `27 / 27 PASS`
- 未確認L0系実車値の真値化: 0件
- Topic 29先取り: 0件

判定: `PASS / CLEAN_BLIND_GATE_COMPLETE`

## Topic 21境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差という既存診断を維持する。一般式 `P=Tω`, `ω=2πN/60` は変更しない。

## 次工程

Topic 28の成果物・source QA・PDF QA・practice QA・PowerPoint QA・本clean blind gateをまとめた最終QAを行う。全ゲートPASSの場合のみTopic 28を `completed` とする。
