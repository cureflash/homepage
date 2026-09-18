# Topic 18 最終QA記録

対象: `18 非線形方程式と反復計算`

実施日: 2026-09-18

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` と最新mainを再確認した。技術内容、固定EXAM_ALIGNMENT、完成後独立検証、PDF/PowerPoint表示QA、仕様境界はPASSしたが、進捗記録5ファイルが実成果物より古いため `completed` にはしない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | 判定 |
|---|---|
| source Markdown | PASS |
| 制作前独立数値検証 | PASS |
| 制作前検証スクリプト | PASS |
| 解説PDF | PASS |
| 解説PDF QA | PASS |
| 練習問題source | PASS |
| 練習PDF | PASS |
| 練習PDF QA | PASS |
| 解説画像PowerPoint | PASS |
| PowerPoint QA | PASS |
| 完成後独立検証 | PASS |
| 完成後検証スクリプト | PASS |
| 最終QA記録 | PASS |

## EXAM_ALIGNMENT確認

第二種公式過去問を直近年度から確認した結果、二分法・Newton法そのものを直接要求する確認済み第二種問題は `0問`。

接続確認した第二種二次「電力・管理」は次の5問である。

- R5 二次「電力・管理」問3
- R4 二次「電力・管理」問3
- R1 二次「電力・管理」問2
- H30 二次「電力・管理」問3
- H23 二次「電力・管理」問3

これらは送電電力・電圧・位相角・平衡点等の非線形関係への接続確認のみで、反復法の固定品質ゲート件数へ格上げしていない。

- 直接二分法/Newton要求の固定過去問: `0問`
- 接続確認した第二種公式過去問: `5問`
- 非該当5問の固定品質ゲート件数への水増し: `0件`
- 第一種Newton-Raphson潮流問題の件数加算: `0件`

判定: `PASS`。

## 完成後独立検証の再確認

完成教材の固定範囲だけで、保存済み例題・制作前検証と異なる新規3ケースを独立検証済み。最終QAでも数値を再計算した。

- Case A `f(x)=cos x-x` の二分法: `PASS`
  - 19反復
  - 近似根 `0.7390851974487305`
  - 最終区間半幅 `9.5367431640625e-7`
  - 残差 `-1.0750207668497325e-7`
- Case B `g(x)=x^3-7x+6` のNewton法: `PASS`
  - `x0=0.5` → 5反復で根 `1`
  - `x0=2.5` → 5反復で根 `2.0000000000000906`
  - `x=±sqrt(7/3)` で `g'(x)=0`
- Case C 教育用 `P=3 sinδ=1.7`: `PASS`
  - `δ0=0.4 rad` から4反復
  - `δ=0.6024546333849905 rad`
  - 残差 `0`
  - `arcsin(1.7/3)` と一致

新規3ケース: `3 / 3 PASS`。

教材外知識補完: `0件`。
固定EXAM_ALIGNMENT変更: `0件`。

## 練習・表示QA

既存QA記録を再照合した。

- 固定説明項目: `5 / 5 PASS`
- 3段階例題: `3 / 3 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出 `PASS`、数値整合 `PASS`
- 練習問題: 全12問（一次型8問・記述型4問）、独立計算・論理QA `12 / 12 PASS`、一次型正答一意性 `8 / 8 PASS`
- 練習PDF: A4縦5ページ、200 dpi表示 `5 / 5 PASS`、文字抽出 `PASS`、問1〜問12＋完全解説収録 `PASS`
- PowerPoint: 16:9・5枚、固定範囲 `5 / 5`、接続確認 `5 / 5 PASS`、再レンダリング `5 / 5 PASS`、overflow `0件`、`slides_test.py` `PASS`、ZIP/XML整合性 `PASS`

判定: `PASS`。

## SPEC境界確認

固定範囲:

- 二分法
- Newton法
- 収束
- 初期値依存
- 許容誤差
- 電力潮流や非線形動作点への接続

境界確認:

- Topic 19最適化の先取り: `0件`
- 多変数Newton-Raphson潮流の体系的追加: `0件`
- ヤコビ行列一般理論の追加: `0件`
- 割線法・Regula Falsi法等の追加求根法: `0件`
- 第一種・第三種過去問による件数水増し: `0件`
- 未確認実車値依存: `0件`

判定: `PASS`。

## 進捗記録整合QA

進捗記録6ファイルをGitHub正本で確認した。

1. `18_nonlinear_equations_iteration.md`: FAIL
   - 状態が `topic_18_practice_source_complete / IN_PROGRESS` のまま。
   - 末尾の制作品質ゲートが練習PDF・PowerPoint・完成後独立検証を未完了としている。
   - 次工程が練習PDF作成のまま。
2. `18_nonlinear_equations_iteration_explanation_qa.md`: FAIL
   - 次工程が練習問題source作成のまま。
3. `18_nonlinear_equations_iteration_practice.md`: FAIL
   - 次工程が練習PDF作成のまま。
4. `18_nonlinear_equations_iteration_practice_qa.md`: FAIL
   - 次工程がPowerPoint作成のまま。
5. `18_nonlinear_equations_iteration_powerpoint_qa.md`: FAIL
   - 次工程が完成後独立検証のまま。
6. `../../HANDOFF.md`: PASS
   - `current_status`: `topic_18_post_completion_validation_complete`
   - 次工程: Topic 18最終QA

進捗記録整合: `1 / 6 PASS`。

`STATUS.md` と完成後独立検証記録は現在の実成果物状態へ同期済み。

技術本文、固定EXAM_ALIGNMENT、問題、正答、PDF、PowerPoint、完成後独立検証の技術内容変更: `0件`。

## 最終判定

- 必須成果物実在: PASS
- 第二種公式過去問調査: PASS
- 直接二分法/Newton要求0問の記録と水増し0件: PASS
- 完成後独立検証 `3 / 3`: PASS
- 練習問題独立計算・論理QA `12 / 12`: PASS
- 一次型正答一意性 `8 / 8`: PASS
- 教材外知識補完0件: PASS
- 固定範囲外追加0件: PASS
- 未確認実車値依存0件: PASS
- 表示QA: PASS
- 進捗記録と実成果物の整合: `1 / 6 PASS` → FAIL

総合判定: `NEEDS_REVISION / topic_18_final_qa_needs_revision / IN_PROGRESS`。

次工程は上記5ファイルだけを実成果物状態へ同期する。技術本文・問題・正答・固定EXAM_ALIGNMENT・PDF/PowerPoint・完成後独立検証結果は変更しない。同期後に最終QAを再実施する。
