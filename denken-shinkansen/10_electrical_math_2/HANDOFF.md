# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-18

## 現在地

Topic 01〜17は最終QAまで `PASS / completed`。

完成数: `17 / 20`

current_status: `topic_18_preproduction_validation_complete`

active_topic: `18 非線形方程式と反復計算`

次工程: Topic 18の解説本文＋3段階例題を作成する。

## 上位仕様

毎runで以下を正本として確認する。

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/10_electrical_math_2/SPEC.md`
- 本 `HANDOFF.md`
- `STATUS.md`
- active topic の既存成果物
- main の直近変更

仕様外論点を件数合わせで追加しない。二種相当の公式過去問対応を先に固定し、完成後は教材だけで独立検証して品質ゲートを通過したテーマだけを `completed` とする。

# Topic 17 常微分方程式の数値解法

## 固定範囲

`SPEC.md` に従い、以下のみ扱う。

- Euler法
- Runge-Kutta法の概念
- 刻み幅と誤差
- 初期値問題
- 簡略列車運動式 `m dv/dt = Ftraction(v) - Fresistance(v)` の時間発展

追加しない内容:

- Topic 18の二分法・Newton法等の非線形方程式反復
- Topic 19の最適化
- 陰的Euler法、多段法、適応刻み等の体系的展開
- 偏微分方程式、有限要素法
- 第一種・第三種問題による第二種品質ゲート件数の水増し
- 未確認の新幹線実車値

## EXAM_ALIGNMENT

主source:
`topics/17_ode_numerical_methods/17_ode_numerical_methods.md`

第二種公式過去問を直近年度から確認し、常微分方程式＋初期条件へ接続する一次「理論」5問を確認済み。

- R8 一次 理論 問6 (1)〜(2)
- R7 一次 理論 問6
- R6 一次 理論 問4
- R5 一次 理論 問5
- R4 一次 理論 問4

確認した5問はいずれもRC/RL過渡等の解析解を要求する隣接問題であり、Euler法・Runge-Kutta法そのものを直接要求する問題ではない。

- 直接Euler/RK要求の固定過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`

R8問6はTopic 17との接続確認では独立な一次応答である (1)〜(2) のみを見る。(3)以降のC-L結合を本Topicへ追加しない。

## 制作済み成果物

- 主source: `topics/17_ode_numerical_methods/17_ode_numerical_methods.md`
- 制作前独立数値検証: `topics/17_ode_numerical_methods/17_ode_numerical_methods_preproduction_validation.md`
- 再現用スクリプト: `topics/17_ode_numerical_methods/17_ode_numerical_methods_preproduction_validation.py`
- 解説PDF: `topics/17_ode_numerical_methods/17_ode_numerical_methods_explanation.pdf`
- 解説PDF QA: `topics/17_ode_numerical_methods/17_ode_numerical_methods_explanation_qa.md`
- 練習source: `topics/17_ode_numerical_methods/17_ode_numerical_methods_practice.md`
- 練習PDF: `topics/17_ode_numerical_methods/17_ode_numerical_methods_practice.pdf`
- 練習PDF QA: `topics/17_ode_numerical_methods/17_ode_numerical_methods_practice_qa.md`
- 解説画像PowerPoint: `topics/17_ode_numerical_methods/17_ode_numerical_methods_images.pptx`
- PowerPoint QA: `topics/17_ode_numerical_methods/17_ode_numerical_methods_powerpoint_qa.md`
- 完成後独立検証: `topics/17_ode_numerical_methods/17_ode_numerical_methods_post_completion_validation.md`
- 完成後独立検証スクリプト: `topics/17_ode_numerical_methods/17_ode_numerical_methods_post_completion_validation.py`
- 最終QA: `topics/17_ode_numerical_methods/17_ode_numerical_methods_final_qa.md`

既存成果物QA:

- 固定6説明項目: `6 / 6 PASS`
- 3段階例題: `3 / 3 PASS`
- 解説PDF: A4縦4ページ、表示QA `4 / 4 PASS`、文字抽出 `PASS`
- 練習問題: 全12問、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`
- 練習PDF: A4縦1ページ、表示QA `1 / 1 PASS`、文字抽出 `PASS`
- PowerPoint: 16:9・5枚、表示QA `5 / 5 PASS`、overflow `0件`、ZIP/XML整合性 `PASS`
- Runge-Kutta法: `SPEC.md` どおり概念に限定
- Topic 18以降の先取り: `0件`
- 未確認実車値依存: `0件`

## 完成後独立検証

記録:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_post_completion_validation.md`

再現用:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_post_completion_validation.py`

直接Euler/RK要求の第二種過去問が0問のため、接続確認5問を品質ゲートへ格上げせず、完成教材の固定範囲だけを使って保存済み例題と異なる新規数値条件を独立検証した。

- Case A: `dy/dt=-2y, y(0)=1`
  - `h=0.10`: `y(0.3)=0.512`
  - `h=0.05`: `y(0.3)=0.531441`
  - 解析解 `0.548811636...`
  - 絶対誤差 `0.0368116 -> 0.0173706`
- Case B: 教育用RL過渡 `V=50 V, R=5 Ω, L=1 H, i(0)=0`
  - `h=0.05 s`: `i(0.20)=6.8359375 A`
  - `h=0.025 s`: `i(0.20)=6.563910842 A`
  - 解析解 `6.321205588 A`
  - 絶対誤差 `0.514732 -> 0.242705 A`
- Case C: 教育用列車モデル
  - `t=10 s`: `v=5.000000 m/s, x=0.00 m`
  - `t=20 s`: `v=9.875000 m/s, x=50.00 m`
  - `t=30 s`: `v=14.628125 m/s, x=148.75 m`
  - 位置更新は同一刻みの始点速度を使用

判定: `PASS / POST_COMPLETION_VALIDATION_COMPLETE`。

固定EXAM_ALIGNMENT変更0件。非該当問題の件数水増し0件。Topic 18以降の先取り0件。未確認実車値依存0件。

## 初回最終QA

記録:
`topics/17_ode_numerical_methods/17_ode_numerical_methods_final_qa.md`

初回判定: `NEEDS_REVISION / IN_PROGRESS`。

技術品質ゲートはPASSしたが、実成果物より古い次工程記録が4ファイル残っていたため、GitHub正本の進捗記録整合でFAILとした。

## 進捗記録同期

初回最終QAで指摘された4ファイルの次工程記録を実成果物へ同期した。

- `17_ode_numerical_methods_explanation_qa.md`: 同期済み
- `17_ode_numerical_methods_practice.md`: 同期済み
- `17_ode_numerical_methods_practice_qa.md`: 同期済み
- `17_ode_numerical_methods_powerpoint_qa.md`: 同期済み

固定EXAM_ALIGNMENT、技術本文、練習問題、正答、PDF、PowerPoint、完成後独立検証の技術内容は変更していない。

## 最終QA再判定

進捗記録6ファイルを再確認し、整合 `6 / 6 PASS`。必須成果物、固定EXAM_ALIGNMENT、完成後独立検証、練習問題QA、PDF/PowerPoint表示QA、SPEC境界もすべてPASSを維持した。

判定: `PASS / completed`。

## 完了時品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 第二種公式過去問を直近年度から確認
- [x] 常微分方程式＋初期条件へ接続する第二種一次「理論」5問を確認
- [x] 直接Euler/RK要求問題0問を記録し、水増ししないことを確定
- [x] 電験学習資料を複数系統確認
- [x] 数値ODE基礎資料を複数確認
- [x] sourceへ制作前EXAM_ALIGNMENT・必要説明・境界を固定
- [x] 制作前独立数値検証
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋表示QA・文字抽出QA・数値整合QA
- [x] 練習問題source
- [x] 練習PDF＋表示QA・文字抽出QA・数値整合QA
- [x] 解説画像PowerPoint
- [x] PowerPoint表示QA
- [x] 完成後独立検証 `PASS`
- [x] 最終QA実施 → `NEEDS_REVISION`
- [x] 進捗記録4ファイルの同期
- [x] 最終QA再判定 → `PASS`
- [x] `completed`

# Topic 18 非線形方程式と反復計算

## 固定範囲

`SPEC.md` に従い、以下のみ扱う。

- 二分法
- Newton法
- 収束
- 初期値依存
- 許容誤差
- 電力潮流や非線形動作点への接続

追加しない内容:

- Topic 19の最適化
- 多変数Newton法による本格的な潮流計算アルゴリズムの体系的展開
- ヤコビ行列の一般理論・反復線形ソルバ等の数値解析一般
- 割線法、Regula Falsi法等の追加求根法
- 第一種・第三種問題による第二種品質ゲート件数の水増し
- 未確認の新幹線実車値

## EXAM_ALIGNMENT

主source:
`topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration.md`

第二種公式過去問を直近年度から確認し、非線形な電力・電圧関係や平衡点へ接続する二次「電力・管理」5問を確認した。

- R5 二次 電力・管理 問3
- R4 二次 電力・管理 問3
- R1 二次 電力・管理 問2
- H30 二次 電力・管理 問3
- H23 二次 電力・管理 問3

確認した5問は三角関数を含む送電電力式、平衡点、調相量等を扱うが、二分法・Newton法そのものを解法として要求しない。

- 直接二分法/Newton要求の固定過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`

R3第一種二次「電力・管理」問3はNewton-Raphson法による多母線電力潮流計算を直接扱うが、資格区分が第一種のため第二種品質ゲート件数には含めない。

H20一次「理論」の非線形抵抗問題は候補として確認したが、現行公式アーカイブで問題本文・公式解答を直接再確認できないため正式件数には含めない。

## 制作前独立数値検証

記録:
`topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_preproduction_validation.md`

再現用:
`topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_preproduction_validation.py`

固定範囲だけを使って検証し、`PASS / PREPRODUCTION_NUMERICAL_VALIDATION_COMPLETE`。

- 二分法 `f(x)=x^3-x-2`, `[1,2]`, 区間半幅許容誤差 `1e-6`: 20反復、近似根 `1.5213804244995117`
- Newton法 同式, `x0=1.5`, 残差許容誤差 `1e-10`: 3反復、近似根 `1.5213797068045751`
- 初期値依存 `g(x)=x^3-x`: `x0=0.2` は根0、`x0=0.8` は根1へ収束
- `x=1/sqrt(3)` で `g'(x)=0` となりNewton更新式を適用できないことを確認
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`
- Topic 19最適化、多変数Newton法、ヤコビ行列一般理論、追加求根法の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 制作前品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 第二種公式過去問を直近年度から調査
- [x] 二次「電力・管理」の接続問題5問を確認
- [x] 二分法・Newton法を直接要求する確認済み第二種過去問0問を記録
- [x] 直接該当しない5問を固定品質ゲート件数へ水増ししないことを確定
- [x] 第一種Newton-Raphson潮流問題を件数外として確認
- [x] 電験学習資料を複数系統確認
- [x] 数値求根の基礎資料を複数確認
- [x] sourceへ制作前EXAM_ALIGNMENT・必要説明・境界を固定
- [x] 制作前独立数値検証
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF＋QA
- [ ] 練習問題source
- [ ] 練習PDF＋QA
- [ ] 解説画像PowerPoint＋QA
- [ ] 完成後独立検証
- [ ] 最終QA
- [ ] `completed`

## 次工程

固定済みEXAM_ALIGNMENTと制作前独立数値検証を変更せず、Topic 18の解説本文＋3段階例題を作成する。