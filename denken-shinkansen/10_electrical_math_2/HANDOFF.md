# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-18

## 現在地

Topic 01〜18は最終QAまで `PASS / completed`。

完成数: `18 / 20`

current_status: `topic_19_final_qa_needs_revision`

active_topic: `19 最適化入門`

次工程: Topic 19の最終QA再判定。

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

## 解説本文＋3段階例題

主sourceへ解説本文と3段階例題を追加し、`PASS / EXPLANATION_BODY_COMPLETE`。

- 固定説明項目: `5 / 5 PASS`
- 3段階例題: `3 / 3 PASS`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 二分法: 符号反転条件、区間半減、区間幅・中点誤差上限、重根注意を実装
- Newton法: 接線から更新式を導出し、導関数ゼロ・初期値依存・許容誤差・残差検算を実装
- 本試験標準例題: 教育用 `P=(VsVr/X)sinδ` を1変数Newton法で解き、`δ≈0.52359877 rad`、残差 `1.1901338×10^-8` を確認
- 複合例題: `g(x)=x^3-x` で初期値 `0.2 -> 0`、`0.8 -> 1` の収束先差と `g'(1/sqrt(3))=0` を確認
- 直接二分法/Newton要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`
- Topic 19最適化、多変数Newton法、ヤコビ行列一般理論、追加求根法の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 解説PDF＋QA

成果物:
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_explanation.pdf`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_explanation_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`。

- A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字切れ・表/本文重なり・ページ外はみ出し・豆腐文字: `0件`
- `pdftotext` 文字抽出: `PASS`
- 3段階例題の独立数値再計算: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 第一種問題の件数加算: `0件`
- Topic 19最適化、多変数Newton法、ヤコビ行列一般理論、追加求根法の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 練習問題source

成果物:
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice.md`

判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

- 全12問: 一次型8問、記述型4問
- 難易度: 基礎3問、標準6問、複合3問
- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 直接二分法・Newton法要求の確認済み第二種過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`
- 仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 練習PDF＋QA

成果物:
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice.pdf`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`。

- A4縦5ページ
- 200 dpi表示QA: `5 / 5 PASS`
- 文字切れ・表/本文重なり・ページ外はみ出し・壊れた日本語グリフ: `0件`
- 文字抽出QA: `PASS`
- 問1〜問12、解答・完全解説の収録: `PASS`
- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 直接二分法・Newton法要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`
- 仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 解説画像PowerPoint＋QA

成果物:
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_images.pptx`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`。

- 16:9・5枚
- SPEC固定範囲: `5 / 5 covered`
- 接続確認した第二種二次「電力・管理」5問との対応: `5 / 5 PASS`
- 二分法・Newton法そのものを直接要求する確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 数値整合QA: `PASS`
- 全5スライド再レンダリング: `5 / 5 PASS`
- 文字切れ・重なり・文字化け: `0件`
- overflow: `0件`
- `slides_test.py`: `PASS`
- PPTX ZIP/XML整合性: `PASS`
- Topic 19最適化、多変数Newton-Raphson潮流、ヤコビ行列一般理論、追加求根法の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 完成後独立検証

記録:
`topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_post_completion_validation.md`

再現用:
`topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_post_completion_validation.py`

直接二分法/Newton要求の第二種過去問が0問のため、接続確認5問を品質ゲートへ格上げせず、完成教材の固定範囲だけを使って保存済み例題・制作前検証と異なる新規数値条件を独立検証した。

- Case A: `f(x)=cos x-x`, `[0,1]`, 区間半幅許容誤差 `1e-6`
  - 19反復
  - 近似根 `0.7390851974487305`
  - 最終区間半幅 `9.5367431640625e-7`
  - 残差 `-1.0750207668497325e-7`
- Case B: `g(x)=x^3-7x+6`
  - `x0=0.5` → 5反復で根 `1`
  - `x0=2.5` → 5反復で根 `2.0000000000000906`
  - `x=±sqrt(7/3)` で `g'(x)=0` を確認
- Case C: 教育用 `P=K sinδ`, `K=3.0`, `P=1.7`, `δ0=0.4 rad`
  - 4反復
  - `δ=0.6024546333849905 rad`
  - 残差 `0`
  - `0<δ<π/2` を満たす

判定: `PASS / POST_COMPLETION_VALIDATION_COMPLETE`。

固定EXAM_ALIGNMENT変更0件。接続確認5問の件数水増し0件。第一種問題の件数加算0件。Topic 19最適化、多変数Newton法、ヤコビ行列一般理論、追加求根法の仕様外追加0件。未確認実車値依存0件。

## 初回最終QA

記録:
`topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_final_qa.md`

判定: `NEEDS_REVISION / topic_18_final_qa_needs_revision / IN_PROGRESS`。

技術内容、固定EXAM_ALIGNMENT、完成後独立検証、練習問題QA、PDF/PowerPoint表示QA、SPEC境界はすべてPASS。進捗記録6ファイルのうち、HANDOFFのみ現在状態と整合し、Topic 18配下の5ファイルが古い次工程・状態のままのため、進捗記録整合は `1 / 6 PASS` とした。

未同期5ファイル:
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration.md`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_explanation_qa.md`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice.md`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice_qa.md`
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_powerpoint_qa.md`

技術内容変更: `0件`。

## 進捗記録同期

初回最終QAで指摘された5ファイルを実成果物状態へ同期した。

- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration.md`: 同期済み
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_explanation_qa.md`: 同期済み
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice.md`: 同期済み
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_practice_qa.md`: 同期済み
- `topics/18_nonlinear_equations_iteration/18_nonlinear_equations_iteration_powerpoint_qa.md`: 同期済み

固定EXAM_ALIGNMENT、技術本文、練習問題、正答、PDF、PowerPoint、完成後独立検証の技術内容は変更していない。直接二分法/Newton要求0問、接続確認5問の件数水増し0件、仕様外追加0件を維持した。

## 最終QA再判定

進捗記録6ファイルを再確認し、整合 `6 / 6 PASS`。必須成果物、固定EXAM_ALIGNMENT、完成後独立検証、練習問題QA、PDF/PowerPoint表示QA、SPEC境界もすべてPASSを維持した。

判定: `PASS / completed`。

## 制作品質ゲート

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
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋QA
- [x] 練習問題source
- [x] 練習PDF＋QA
- [x] 解説画像PowerPoint＋QA
- [x] 完成後独立検証
- [x] 最終QA実施 → `NEEDS_REVISION`（進捗記録整合 `1 / 6 PASS`）
- [x] 進捗記録5ファイルの同期
- [x] 最終QA再判定 → `PASS`
- [x] `completed`

# Topic 19 最適化入門

## 固定範囲

`SPEC.md` に従い、以下のみ扱う。

- 目的関数
- 制約条件
- 一変数最適化
- 多変数最適化の概念
- ラグランジュ未定乗数法の入口
- 所要時間を維持しながら消費エネルギーを抑える加速・惰行・制動パターンへの概念的接続

追加しない内容:

- Topic 04で完了済みの一変数極値一般の再制作
- 最適制御理論への深入り
- 一般的な数値最適化アルゴリズム
- 第一種・第三種問題による第二種品質ゲート件数の水増し
- 未確認の新幹線実車値

## EXAM_ALIGNMENT

主source:
`topics/19_optimization_intro/19_optimization_intro.md`

現行公式アーカイブで直接確認可能な第二種公式過去問を直近年度から調査し、目的関数・制約・配分・損失低減へ接続する5問を確認した。

- R7 二次 電力・管理 問6
- R4 二次 電力・管理 問1
- R1 二次 電力・管理 問4
- H25 二次 電力・管理 問6
- H23 二次 電力・管理 問6

確認した5問はいずれも最適化そのものやラグランジュ未定乗数法を解法として直接要求しない。

- 直接最適化・ラグランジュ未定乗数法要求の固定過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`

H17二次「電力・管理」問6は複数の二次資料で増分燃料費と出力配分の歴史的直接候補として確認したが、試験センター公式問題本文・公式標準解答を直接再確認できないため、固定件数・数値条件・正答・品質ゲートへ採用しない。

教材で必要な説明は主sourceへ6項目を固定済み。Topic 04の既知事項を再制作せず、目的関数と制約条件、多変数最適化の概念、`L=f+λg` によるラグランジュ未定乗数法の入口、制約・境界・単位の検算までに限定する。

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`。

## 制作前独立検証

成果物:
- `topics/19_optimization_intro/19_optimization_intro_preproduction_validation.md`
- `topics/19_optimization_intro/19_optimization_intro_preproduction_validation.py`

判定: `PASS / PREPRODUCTION_VALIDATION_COMPLETE`。

- Case A: `f(x)=(x-3)^2+1`, `0<=x<=2`。停留点 `x=3` は制約外、境界比較から `x=2`, `f=2`。
- Case B: `F=x^2+2y^2+4x+2y`, `x+y=12`。ラグランジュ法で `x=23/3`, `y=13/3`, `F=407/3`。
- Case Bは `y=12-x` による一変数消去でも同じ解を得て独立照合 `PASS`。
- 最適点で `partial F/partial x = partial F/partial y = 58/3` を確認。
- Case C: 新幹線への概念接続用の無次元モデル `E=u^2+3v^2`, `u+v=10`。`u=7.5`, `v=2.5`, `E=75`。
- 直接最適化・ラグランジュ法要求の確認済み第二種過去問: `0問` のまま。
- 接続確認5問の固定品質ゲート件数への水増し: `0件`。
- H17問6の固定件数追加: `0件`。
- Topic 04の一変数極値一般の再制作: `0件`。
- KKT条件・一般数値最適化・最適制御理論の仕様外追加: `0件`。
- 未確認実車値依存: `0件`。

## 解説本文＋3段階例題

主sourceへ解説本文と3段階例題を追加し、`PASS / EXPLANATION_BODY_COMPLETE`。

- 教材で必要な説明6項目: `6 / 6 PASS`
- 3段階例題: `3 / 3 PASS`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 例題1: 一変数制約・境界 `x=3`, `J=2` → `PASS`
- 例題2: 二出力配分 `P1=8 MW`, `P2=4 MW`, `C=96`、一変数消去でも一致 → `PASS`
- 例題3: 等式制約のみの候補 `P1=20/3 MW`, `P2=10/3 MW` は範囲外、境界解 `P1=8 MW`, `P2=2 MW`, `C=72` → `PASS`
- 目的関数・等式制約・上下限制約・実行可能点・一変数消去・`L=f+λg`・境界比較・単位検算を固定範囲内で実装
- 新幹線接続は所要時間制約と消費エネルギー目的の概念整理までに限定
- 直接最適化・ラグランジュ法要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- H17問6の固定件数追加: `0件`
- Topic 04の一変数極値一般の再制作: `0件`
- KKT条件・一般数値最適化・最適制御理論の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 解説PDF＋QA

成果物:
- `topics/19_optimization_intro/19_optimization_intro_explanation.pdf`
- `topics/19_optimization_intro/19_optimization_intro_explanation_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`。

- A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字切れ・表/本文重なり・ページ外はみ出し・日本語の欠落/豆腐文字: `0件`
- `pdftotext` 文字抽出: `PASS`
- 教材で必要な説明6項目: `6 / 6 PASS`
- 3段階例題の独立数値再計算: `3 / 3 PASS`
- 接続確認した第二種公式過去問: `5 / 5`
- 直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- H17問6の固定件数追加: `0件`
- Topic 04の一変数極値一般の再制作: `0件`
- KKT条件・一般数値最適化・最適制御理論の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 練習問題source

成果物:
- `topics/19_optimization_intro/19_optimization_intro_practice.md`

判定: `PASS / PRACTICE_SOURCE_COMPLETE`。

- 全12問: 一次型8問、記述型4問
- 難易度: 基礎3問、標準6問、複合3問
- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 接続確認した第二種公式過去問: `5問`
- 直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- H17二次「電力・管理」問6の固定件数追加: `0件`
- Topic 04の一変数極値一般の再制作: `0件`
- KKT条件・一般数値最適化・最適制御理論の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 練習PDF＋QA

成果物:
- `topics/19_optimization_intro/19_optimization_intro_practice.pdf`
- `topics/19_optimization_intro/19_optimization_intro_practice_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`。

- A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字切れ・表/本文重なり・ページ外はみ出し・日本語の欠落/豆腐文字: `0件`
- `pdftotext -layout` 文字抽出: `PASS`
- 問1〜問12、解答・完全解説の収録: `PASS`
- 独立計算・論理QA: `12 / 12 PASS`
- 一次型正答一意性: `8 / 8 PASS`
- 接続確認した第二種公式過去問: `5問`
- 直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- H17二次「電力・管理」問6の固定件数追加: `0件`
- Topic 04の一変数極値一般の再制作: `0件`
- KKT条件・一般数値最適化・最適制御理論の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 解説画像PowerPoint＋QA

成果物:
- `topics/19_optimization_intro/19_optimization_intro_images.pptx`
- `topics/19_optimization_intro/19_optimization_intro_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`。

- 16:9・5枚
- SPEC固定範囲: `5 / 5 covered`
- 接続確認した第二種二次「電力・管理」5問との対応: `5 / 5 PASS`
- 直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問: `0問`
- 接続確認5問の固定品質ゲート件数への水増し: `0件`
- 数値整合QA: `PASS`
- 全5スライド再レンダリング: `5 / 5 PASS`
- 文字切れ・重なり・文字化け: `0件`
- overflow: `0件`
- `slides_test.py`: `PASS`
- PPTX ZIP/XML整合性: `PASS`
- Topic 04の一変数極値一般の再制作: `0件`
- KKT条件・一般数値最適化・最適制御理論の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 完成後独立検証

記録:
`topics/19_optimization_intro/19_optimization_intro_post_completion_validation.md`

再現用:
`topics/19_optimization_intro/19_optimization_intro_post_completion_validation.py`

直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問が0問のため、接続確認5問を品質ゲートへ格上げせず、完成教材の固定範囲だけを使って保存済み例題・制作前検証と異なる新規数値条件を独立検証した。

- Case A: `J(x)=(x-5)^2+2`, `0<=x<=4` → `x=4`, `J_min=3`
- Case B: `C=P1^2+3P2^2`, `P1+P2=16` → `P1=12`, `P2=4`, `C=192`
- Case C: 教育用無次元モデル `E=2u^2+v^2`, `u+v=15`, `0<=u<=4`, `11<=v<=15` → 等式制約のみの候補 `(5,10)` は制約外、境界解 `(4,11)`, `E=153`

判定: `PASS / POST_COMPLETION_VALIDATION_COMPLETE`。新規3ケース `3 / 3 PASS`。

固定EXAM_ALIGNMENT変更0件。接続確認5問の件数水増し0件。H17問6の固定件数追加0件。Topic 04の再制作0件。KKT条件・一般数値最適化・最適制御理論の仕様外追加0件。未確認実車値依存0件。

## 初回最終QA

記録:
`topics/19_optimization_intro/19_optimization_intro_final_qa.md`

判定: `NEEDS_REVISION / topic_19_final_qa_needs_revision / IN_PROGRESS`。

技術内容、固定EXAM_ALIGNMENT、完成後独立検証、練習問題QA、PDF/PowerPoint表示QA、SPEC境界はすべてPASS。進捗記録6ファイルのうち、HANDOFFのみ現在状態と整合し、Topic 19配下の5ファイルが古い次工程・状態のままのため、進捗記録整合は `1 / 6 PASS` とした。

未同期5ファイル:
- `topics/19_optimization_intro/19_optimization_intro.md`
- `topics/19_optimization_intro/19_optimization_intro_explanation_qa.md`
- `topics/19_optimization_intro/19_optimization_intro_practice.md`
- `topics/19_optimization_intro/19_optimization_intro_practice_qa.md`
- `topics/19_optimization_intro/19_optimization_intro_powerpoint_qa.md`

技術内容変更: `0件`。

## 進捗記録同期

初回最終QAで指摘された5ファイルを実成果物状態へ同期した。

- `topics/19_optimization_intro/19_optimization_intro.md`: 同期済み
- `topics/19_optimization_intro/19_optimization_intro_explanation_qa.md`: 同期済み
- `topics/19_optimization_intro/19_optimization_intro_practice.md`: 同期済み
- `topics/19_optimization_intro/19_optimization_intro_practice_qa.md`: 同期済み
- `topics/19_optimization_intro/19_optimization_intro_powerpoint_qa.md`: 同期済み

固定EXAM_ALIGNMENT、技術本文、練習問題、正答、PDF、PowerPoint、完成後独立検証の技術内容は変更していない。直接最適化・ラグランジュ未定乗数法要求0問、接続確認5問の件数水増し0件、H17問6固定件数追加0件、仕様外追加0件を維持した。

## 制作品質ゲート

- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 最新main・STATUS・HANDOFF・Topic 04境界確認
- [x] 第二種公式過去問を直近年度から調査
- [x] 接続確認5問を整理
- [x] 直接最適化・ラグランジュ未定乗数法要求の確認済み第二種過去問0問を記録
- [x] 接続5問を固定品質ゲート件数へ水増ししないことを確定
- [x] H17二次「電力・管理」問6は公式一次資料未確認のため正式件数へ含めない
- [x] 電験学習資料を2系統以上確認
- [x] sourceへ制作前EXAM_ALIGNMENT・必要説明・境界を固定
- [x] 制作前独立検証
- [x] 解説本文＋3段階例題
- [x] 解説PDF＋QA
- [x] 練習問題source
- [x] 練習PDF＋QA
- [x] 解説画像PowerPoint＋QA
- [x] 完成後独立検証
- [x] 最終QA実施 → `NEEDS_REVISION`（進捗記録整合 `1 / 6 PASS`）
- [x] 進捗記録5ファイルの同期
- [ ] 最終QA再判定
- [ ] `completed`

## 次工程

Topic 19の最終QAを再判定する。固定EXAM_ALIGNMENT、技術本文、練習問題、正答、PDF、PowerPoint、完成後独立検証の技術内容は変更しない。