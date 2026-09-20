# Topic 29 H23 remediation source integration QA

更新日: 2026-09-20

判定: `PASS / SOURCE_INTEGRATION_COMPLETE / ARTIFACT_RESYNC_REQUIRED`

## 対象

- `29_l0_superconducting_magnetic_levitation_force_explanation_source.md`
- `29_l0_superconducting_magnetic_levitation_force_practice_source.md`
- blind-safe teaching patch: `29_l0_superconducting_magnetic_levitation_force_h23_teaching_patch_20260920.md`

## reconcile

- clean blind v1: `21 / 24 PASS`
- 不足原因: H23二次で固定子側 `r_1`,`x_1` を残すL形等価回路への橋渡し不足
- fixed EXAM_ALIGNMENT: 5問・24答案要素を変更していない
- v1 candidate: 変更0件
- answer-bearing remediation noteは教材sourceへ転記していない

## source-level checks

### 解説source

以下をblind-safeに統合した。

- `V_1=V_L/sqrt(3)`
- `I'_2=V_1/sqrt((r_1+r'_2/s)^2+(x_1+x'_2)^2)`
- `ω_s=2πf/(p/2)`
- `T=3I'^2_2(r'_2/s)/ω_s`
- `s_max=r'_2/sqrt(r_1^2+(x_1+x'_2)^2)`
- 逆相制動 `s_p=2-s`
- 実通過区間 `1<=s_p<=2` との照合
- 簡略条件 `s_m=r'_2/x'_2` を使える条件の明示

H23固定4答案要素の接続先を §12.2 / §12.3 / §13.4 に再マッピングした。

### 練習source

二次問12を、固定子側を無視した旧簡略モデルからL形等価回路問題へ置換した。

教材用条件:
- 三相4極、`f=50 Hz`
- `V_L=400 V`
- `r_1=0.20 Ω`
- `x_1=0.40 Ω`
- `r'_2=0.30 Ω`
- `x'_2=0.60 Ω`
- `N=1200 min^-1`

独立再計算:
- `N_s=1500 min^-1`
- `s=0.20`
- `V_1=230.94 V`
- `I'_2=117.09 A`
- `ω_s=157.08 rad/s`
- `T=392.77 N·m`
- `s_max=0.294`
- 逆相制動開始直後 `s_p=1.80`
- `s_max` は `1<=s_p<=2` の区間外
- 区間代表値: `T(1)=244.46 N·m`, `T(1.8)=149.65 N·m`, `T(2)=136.11 N·m`
- よって逆相制動の当該区間では `s_p=1` 側が最大

数値・論理: `PASS`

## 品質ゲート

- 固定5問・24答案要素: `24 / 24 connected`
- SPEC必須8項目: `8 / 8 maintained`
- 指定3可視化: `3 / 3 maintained`
- Topic 30先取り: `0件`
- 未確認L0系実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- H23公式正答値の教材sourceへの埋込み: `0件`

## 未完了

解説PDF・練習PDF・PowerPointは旧sourceから生成されたままである。したがってTopic 29はまだ `completed` にしない。

次工程:
1. 解説PDF再生成＋QA
2. 練習PDF再生成＋QA
3. PowerPoint再生成＋QA
4. artifact同期後、answer-bearing資料を見ていないfresh workerでclean blind v2 candidateを固定
