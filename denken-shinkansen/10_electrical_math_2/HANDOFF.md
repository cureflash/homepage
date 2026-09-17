# HANDOFF - 電験二種「電気数学」

更新日: 2026-09-17

## 現在地

Topic 01〜13は `completed`。

完成数: `13 / 20`

current_status: `topic_14_practice_source_complete`

active_topic: `14 フーリエ変換・FFT`

次工程: Topic 14の練習PDFを作成し、表示QA・文字抽出QAを実施する。

## 上位仕様

毎runで以下を正本として確認する。

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `denken-shinkansen/10_electrical_math_2/SPEC.md`
- 本 `HANDOFF.md`
- `STATUS.md`

仕様外論点を件数合わせで追加しない。二種相当の公式過去問対応を先に固定し、完成後は教材だけで独立再解答してPASSしたテーマだけを `completed` とする。

## Topic 07 完了記録

テーマ: `一階常微分方程式`

source:
`topics/07_first_order_ode/07_first_order_ode.md`

最終QA:
`topics/07_first_order_ode/07_first_order_ode_final_qa.md`

完成後独立再解答:
`topics/07_first_order_ode/07_first_order_ode_exam_reanswer.md`

固定EXAM_ALIGNMENTは一次5問・22小問。完成後独立再解答 `22 / 22 PASS`。全品質ゲートPASSで `completed`。

## Topic 08 完了記録

テーマ: `二階常微分方程式`

source:
`topics/08_second_order_ode/08_second_order_ode.md`

解説PDF:
`topics/08_second_order_ode/08_second_order_ode_explanation.pdf`

練習source:
`topics/08_second_order_ode/08_second_order_ode_practice.md`

練習PDF:
`topics/08_second_order_ode/08_second_order_ode_practice.pdf`

PowerPoint:
`topics/08_second_order_ode/08_second_order_ode_images.pptx`

PowerPoint QA:
`topics/08_second_order_ode/08_second_order_ode_powerpoint_qa.md`

完成後独立再解答:
`topics/08_second_order_ode/08_second_order_ode_exam_reanswer.md`

最終QA:
`topics/08_second_order_ode/08_second_order_ode_final_qa.md`

### Topic 08 固定範囲

- 二階線形微分方程式
- 特性方程式
- 実根
- 重根
- 複素共役根
- 過減衰
- 臨界減衰
- 不足減衰
- 固有角周波数
- 減衰比
- RLC回路
- 機械系
- 二次遅れの時間領域表現

Topic 09のラプラス変換、Topic 10の伝達関数・極・零点は先取りしていない。

### Topic 08 EXAM_ALIGNMENT

固定一次5問・15小問。

- R8 一次 理論 問1 (4)〜(5)
- R8 一次 理論 問6 (3)〜(4)
- R3 一次 理論 問5 (1)〜(4)
- H28 一次 理論 問3 (1)〜(5)
- H24 一次 理論 問3 (1)〜(2)

制作前独立再解答・公式解答照合: `15 / 15 PASS`

二次「機械・制御」の二次系候補は確認済みだが、確認できた問題はラプラス変換または伝達関数を前提とするため非採用。Topic 09〜10を先取りする件数合わせは0件。

### Topic 08 成果物QA

- 解説本文＋3段階例題: PASS
- 解説PDF: A4縦5ページ、200 dpi `5 / 5 PASS`、文字抽出QA PASS
- 練習問題: 12問（基礎3／標準6／複合3）、全問五肢択一、独立計算・正答一意性 `12 / 12 PASS`
- 練習PDF: A4縦5ページ、200 dpi `5 / 5 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・5枚、表示QA `5 / 5 PASS`、overflow 0件、ZIP整合性PASS
- 完成後独立再解答: `15 / 15 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 08 最終QA

初回最終QAは、主sourceの進捗記録2箇所だけが旧状態だったため `NEEDS_REVISION`。

その後、`08_second_order_ode.md` の以下だけを実成果物へ同期した。

- 冒頭 `## 状態`
- 末尾 `## 次工程`

教材本文、固定EXAM_ALIGNMENT、数式、3段階例題、問題、PDF、PowerPoint、完成後独立再解答は変更していない。

再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定EXAM_ALIGNMENT 一次5問・15小問: PASS
- 完成後独立再解答 `15 / 15 PASS`: PASS
- 表示QA: PASS
- source進捗整合: PASS
- Topic 09〜10先取り: 0件
- 固定範囲外追加: 0件
- 二次記述の件数合わせ: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## Topic 09 完了記録

テーマ: `ラプラス変換`

source:
`topics/09_laplace_transform/09_laplace_transform.md`

解説PDF:
`topics/09_laplace_transform/09_laplace_transform_explanation.pdf`

練習source:
`topics/09_laplace_transform/09_laplace_transform_practice.md`

練習PDF:
`topics/09_laplace_transform/09_laplace_transform_practice.pdf`

PowerPoint:
`topics/09_laplace_transform/09_laplace_transform_images.pptx`

完成後独立再解答:
`topics/09_laplace_transform/09_laplace_transform_exam_reanswer.md`

最終QA:
`topics/09_laplace_transform/09_laplace_transform_final_qa.md`

### Topic 09 固定範囲

- ラプラス変換の定義
- 線形性
- 微分の変換
- 積分の変換
- 初期値
- 代表的な変換対
- 部分分数分解
- 逆ラプラス変換
- 一階・二階微分方程式を時間領域で解いた後にラプラス変換で解き直し、意味を比較する

Topic 10の伝達関数・極・零点、安定判別、周波数応答は先取りしない。

### Topic 09 EXAM_ALIGNMENT

固定二次5問・6対象設問。

- R6 二次 機械・制御 問4 (4)
- H29 二次 機械・制御 問4 (1)〜(2)
- H25 二次 機械・制御 問4 (1)
- H24 二次 機械・制御 問4 (1)
- H18 二次 機械・制御 問4 (1)

制作前独立再解答・公式標準解答照合: `6 / 6 PASS`。

選定境界:
- R7 問4は伝達関数・定常偏差・畳み込み等が中心でTopic 10以降へ跨るため非採用。
- R6 問4は(4)だけを対象とし、前小問で得る並列結合後の有理式を既知としてラプラス変換・部分分数分解・逆変換だけを扱う。
- H29は微分・積分の変換と初期値を直接要求する(1)〜(2)だけを採用。
- H25/H24/H18は与えられたラプラス領域の式から時間応答を復元する設問だけを採用。
- 件数合わせのTopic 10論点追加は0件。

H18 問4 (1)は公式標準解答どおり初期値 `y0` を任意のまま残し、`y(t)=y0+(1/(2J))(1-cos 2t)` として固定した。初期値を勝手に0としない。

### Topic 09 解説本文＋3段階例題

主sourceへ完成済み。

本文では以下を収録した。
- 定義と線形性
- 代表的な変換対
- 微分の変換と初期値
- 積分の変換
- RLC回路式の変換
- 部分分数分解（単純一次因子・重複因子）
- 逆ラプラス変換
- Topic 07の一階方程式をラプラス変換で解き直す比較
- Topic 08の二階方程式をラプラス変換で解き直す比較
- 非零初期値を保持する解法
- 単位ステップと単位インパルスの区別
- 二種二次向け解法アルゴリズム

3段階例題:
- 基礎: 変換対と線形性
- 本試験標準: 初期値0の直列RLC回路
- 複合・ひっかけ: 非零初期値を残した微分方程式の逆変換

固定5問・6対象設問への本文マッピングは `6 / 6`。Topic 10先取り、固定範囲外追加、未確認実車値依存はいずれも0件。

### Topic 09 解説PDF

`topics/09_laplace_transform/09_laplace_transform_explanation.pdf`

QA:
- A4縦5ページ
- 200 dpi全ページ表示QA `5 / 5 PASS`
- 文字抽出QA `PASS`
- 固定二次5問・6対象設問の反映 `6 / 6`
- 3段階例題反映: PASS
- Topic 10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 09 練習問題source

`topics/09_laplace_transform/09_laplace_transform_practice.md`

内容:
- 全12問
- 一次型8問／二次記述型4問
- 固定二次5問・6対象設問へ全件接続
- 微分・積分の変換、初期値、代表変換対、部分分数分解、逆変換を反復
- 一階・二階微分方程式のラプラス変換による解き直しを収録
- 単位ステップと単位インパルスの区別を収録

QA:
- 独立計算・正答一意性 `12 / 12 PASS`
- 教材外知識補完: 0件
- Topic 10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 09 練習PDF

`topics/09_laplace_transform/09_laplace_transform_practice.pdf`

QA:
- A4縦4ページ
- 全12問（一次型8問／二次記述型4問）＋完全解説を反映
- 200 dpi全ページ表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 固定二次5問・6対象設問への接続を維持
- 独立計算・正答一意性 `12 / 12 PASS` を維持
- 教材外知識補完: 0件
- Topic 10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 09 解説画像PowerPoint

`topics/09_laplace_transform/09_laplace_transform_images.pptx`

QA:
- 16:9・5枚
- 固定二次5問・6対象設問を全件可視化
- 定義・代表変換対・微分/積分の変換・初期値・RLC変換・部分分数分解・逆変換を収録
- 全スライド表示QA `5 / 5 PASS`
- overflow: 0件
- PPTX ZIP/XML整合性・再レンダリング: `PASS`
- Topic 10内容の先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 09 完成後独立再解答

`topics/09_laplace_transform/09_laplace_transform_exam_reanswer.md`

結果:
- 固定二次5問・6対象設問: `6 / 6 PASS`
- R6 問4 (4): `11e^{-t}-16e^{-2t}+5e^{-3t}`
- H29 問4 (1)〜(2): `2 / 2 PASS`
- H25 問4 (1): `(1/2)sin 2t`
- H24 問4 (1): `t-1+e^{-t}`
- H18 問4 (1): `y0+(1/(2J))(1-cos 2t)`
- 教材外知識補完: 0件
- Topic 10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 09 最終QA

`topics/09_laplace_transform/09_laplace_transform_final_qa.md`

初回判定は `NEEDS_REVISION / IN_PROGRESS`。技術内容はPASSで、FAILは主sourceの進捗記録2箇所だけだった。

その後、主source `09_laplace_transform.md` の以下を実成果物へ同期した。

- 冒頭 `## 状態`
- 末尾 `## 次工程`

技術本文・固定EXAM_ALIGNMENT・数式・3段階例題・練習問題・PDF/PPTX・完成後独立再解答は変更していない。

再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定二次5問・6対象設問: PASS
- 完成後独立再解答 `6 / 6 PASS`: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- source進捗整合: PASS
- 教材外知識補完: 0件
- Topic 10先取り: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## Topic 10 完了記録

テーマ: `伝達関数・極・零点`

source:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros.md`

解説PDF:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_explanation.pdf`

練習source:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_practice.md`

練習PDF:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_practice.pdf`

PowerPoint:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_images.pptx`

PowerPoint QA:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_powerpoint_qa.md`

完成後独立再解答:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_exam_reanswer.md`

最終QA:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_final_qa.md`

### Topic 10 固定範囲

- 伝達関数
- 極
- 零点
- 一次遅れ
- 二次遅れ
- ステップ応答
- インパルス応答
- 安定性との関係
- 簡略新幹線速度モデル `M dv/dt + Dv = F` から `V(s)/F(s)=1/(Ms+D)` を導く

Topic 12の固有値・状態空間、Topic 15の対数・dB・周波数応答・ボード線図、ラウス・フルビッツ法の一般手順、定常偏差・畳み込みの独立論点化は行わない。

### Topic 10 EXAM_ALIGNMENT

固定二次5問・11対象設問。

- R7 二次 機械・制御 問4 (1),(4)
- R6 二次 機械・制御 問4 (1),(3)
- R4 二次 機械・制御 問4 (1),(3)
- R3 二次 機械・制御 問4 (1)〜(4)
- R2 二次 機械・制御 問4 (2)

R5 問4は周波数応答・ゲイン特性中心でTopic 15を先取りするため非採用。

制作前独立再解答・公式標準解答照合: `11 / 11 PASS`。

教材外知識補完、固定範囲外追加、未確認実車値依存はいずれも0件。

### Topic 10 解説本文＋3段階例題

主sourceへ完成済み。

本文では以下を収録した。
- 零初期条件での伝達関数 `G(s)=Y(s)/U(s)`
- 直列・並列・単位負帰還
- 極・零点・特性方程式
- 一次遅れと時定数
- 二次遅れ、固有角周波数、減衰比
- 単位ステップ応答・単位インパルス応答
- 極の実部と減衰・発散・振動性の関係
- R7/R6/R4/R3/R2固定設問に必要な式変形
- 簡略新幹線速度モデル `V(s)/F(s)=1/(Ms+D)`
- 二種二次向け解法アルゴリズム

3段階例題:
- 基礎: 簡略新幹線速度モデルを一次遅れとして読む
- 本試験標準: 単位負帰還から伝達関数・極零点・インパルス応答を求める
- 複合・ひっかけ: 二次系の振動条件とインパルス応答

固定二次5問・11対象設問への本文マッピング: `11 / 11`。

Topic 12/15先取り、ラウス・フルビッツ法の一般手順追加、定常偏差・畳み込みの独立論点化、固定範囲外追加、未確認実車値依存はいずれも0件。

### Topic 10 解説PDF

`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_explanation.pdf`

QA:
- A4縦5ページ
- 200 dpi全ページ表示QA `5 / 5 PASS`
- 文字抽出QA `PASS`
- 固定二次5問・11対象設問の反映 `11 / 11`
- 3段階例題反映: PASS
- Topic 12/15先取り: 0件
- ラウス・フルビッツ法一般手順追加: 0件
- 定常偏差・畳み込みの独立論点化: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 10 練習問題source

`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_practice.md`

内容:
- 全12問
- 一次型8問／二次記述型4問
- 難易度: 基礎3／標準6／複合3
- 固定二次5問・11対象設問へ `11 / 11` 接続
- 伝達関数、極・零点、直列・並列・単位負帰還、一次遅れ、二次遅れ、ステップ応答、インパルス応答、極と安定性の関係を反復
- 簡略新幹線速度モデルは教育用係数と明記

QA:
- 独立計算・正答一意性 `12 / 12 PASS`
- 教材外知識補完: 0件
- Topic 12/15先取り: 0件
- ラウス・フルビッツ法一般手順追加: 0件
- 定常偏差・畳み込みの独立論点化: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 10 練習PDF

`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_practice.pdf`

QA:
- A4縦4ページ
- 全12問（一次型8問／二次記述型4問）＋完全解説を反映
- 200 dpi全ページ表示QA `4 / 4 PASS`
- 文字抽出QA `PASS`
- 独立計算・正答一意性 `12 / 12 PASS` を維持
- 固定二次5問・11対象設問への接続 `11 / 11 PASS`
- 教材外知識補完: 0件
- Topic 12/15先取り: 0件
- ラウス・フルビッツ法一般手順追加: 0件
- 定常偏差・畳み込みの独立論点化: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 10 解説画像PowerPoint

`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_images.pptx`

PowerPoint QA:
`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_powerpoint_qa.md`

QA:
- 16:9・5枚
- 固定二次5問・11対象設問を全件可視化
- 全5スライド表示QA `5 / 5 PASS`
- クリッピング・重なり・文字化け: 0件
- overflow: 0件
- PPTX ZIP/XML整合性: PASS
- Topic 12/15先取り: 0件
- ラウス・フルビッツ法一般手順追加: 0件
- 定常偏差・畳み込みの独立論点化: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 10 完成後独立再解答

`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_exam_reanswer.md`

結果:
- 固定二次5問・11対象設問: `11 / 11 PASS`
- R7 問4 (1),(4): `2 / 2 PASS`
- R6 問4 (1),(3): `2 / 2 PASS`
- R4 問4 (1),(3): `2 / 2 PASS`
- R3 問4 (1)〜(4): `4 / 4 PASS`
- R2 問4 (2): `1 / 1 PASS`
- 教材外知識補完: 0件
- Topic 12/15先取り: 0件
- ラウス・フルビッツ法一般手順の使用: 0件
- 定常偏差・畳み込み積分の使用: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

### Topic 10 最終QA

`topics/10_transfer_function_poles_zeros/10_transfer_function_poles_zeros_final_qa.md`

初回判定は `NEEDS_REVISION / IN_PROGRESS`。技術内容・必須成果物・固定EXAM_ALIGNMENT・完成後独立再解答・表示QA・SPEC境界はPASSで、未完了理由はsource進捗記録3箇所だけだった。

その後、以下3箇所だけを実成果物へ同期した。

- 主source冒頭 `## 状態`
- 主source末尾 `## 次工程`
- 練習source末尾 `## 次工程`

技術本文・固定EXAM_ALIGNMENT・数式・3段階例題・練習問題・正答・PDF/PPTX・完成後独立再解答は変更していない。

再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定二次5問・11対象設問: PASS
- 完成後独立再解答 `11 / 11 PASS`: PASS
- 練習問題独立計算・正答一意性 `12 / 12 PASS`: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- source進捗整合: PASS
- Topic 12/15先取り: 0件
- ラウス・フルビッツ法一般手順追加: 0件
- 定常偏差・畳み込みの独立論点化: 0件
- 固定範囲外追加: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## Topic 11 完了記録

テーマ: `行列・線形連立方程式`

source:
`topics/11_matrix_linear_systems/11_matrix_linear_systems.md`

### Topic 11 固定範囲

- 行列
- ベクトル
- 行列積
- 逆行列
- 連立一次方程式
- 係数行列
- アドミタンス行列の考え方
- 多数の回路方程式・系統方程式をまとめて扱う方法

Topic 12の固有値・固有ベクトル、状態空間、電力潮流の詳細アルゴリズム、Newton-Raphson法、非線形反復計算は先取りしない。

### Topic 11 EXAM_ALIGNMENT

固定一次5問・12対象設問。

- R8 一次 理論 問3 (1)〜(2)
- R6 一次 理論 問3 (1)〜(2)
- R4 一次 理論 問3 (1),(3)
- R1 一次 理論 問2 (3)〜(5)
- R1 一次 理論 問6 (3)〜(5)

制作前独立再解答・公式解答照合: `12 / 12 PASS`。

二次試験は、今回の固定範囲内で「行列・線形連立方程式そのもの」を独立の採点対象として固定できる問題を採用しなかった。電力潮流詳細やTopic 12論点を件数合わせで追加していない。

### Topic 11 解説本文＋3段階例題

主sourceへ完成済み。

本文では以下を収録した。
- 行列・列ベクトル・行列積と `A x=b` の対応
- KVLから係数行列を作る手順
- 共有抵抗の非対角成分 `-r` の理由
- 閉路電流と枝電流の符号関係
- KCLによる節点方程式
- `I=YV` とアドミタンス行列の考え方
- 2×2逆行列と加減法・代入法の接続
- 複素係数 `R+jωL`、`1/R+jωC` を含む行列方程式
- 本試験向け解法手順と頻出ミス

3段階例題:
- 基礎: 2元連立一次方程式を2×2逆行列で解く
- 本試験標準: 共有抵抗を含む2閉路
- 複合・ひっかけ: 複素アドミタンス行列

固定一次5問・12対象設問への本文マッピング: `12 / 12`。

固定境界:
- Topic 12固有値・固有ベクトル: 追加0件
- 状態空間: 追加0件
- 電力潮流の詳細アルゴリズム: 追加0件
- Newton-Raphson法・非線形反復計算: 追加0件
- 行列式・余因子展開の独立論点化: 0件
- 二次試験の件数合わせ採用: 0件
- 未確認実車値依存: 0件

### Topic 11 解説PDF

`topics/11_matrix_linear_systems/11_matrix_linear_systems_explanation.pdf`

QA:
- A4縦5ページ
- 200 dpi全ページ表示QA `5 / 5 PASS`
- 文字抽出QA `PASS`
- 固定一次5問・12対象設問の反映 `12 / 12`
- 3段階例題反映: PASS
- Topic 12固有値・固有ベクトル先取り: 0件
- 状態空間追加: 0件
- 電力潮流詳細アルゴリズム追加: 0件
- Newton-Raphson法・非線形反復計算追加: 0件
- 行列式・余因子展開の独立論点化: 0件
- 未確認実車値依存: 0件

### Topic 11 練習問題source

`topics/11_matrix_linear_systems/11_matrix_linear_systems_practice.md`

内容:
- 全12問
- 一次型8問／二次記述型4問
- 難易度: 基礎3／標準6／複合3
- 固定一次5問・12対象設問へ `12 / 12` 接続
- 行列・行列積・2×2逆行列・KVL/KCL・共有枝の符号・節点方程式・`I=YV`・複素係数行列を反復
- 二次記述型は数学演習としての記述練習であり、二次公式過去問を件数合わせで追加したものではない

QA:
- 独立計算・正答一意性 `12 / 12 PASS`
- 一次型正答番号 `1, 2, 2, 1, 4, 1, 3, 1`
- 教材外知識補完: 0件
- Topic 12固有値・固有ベクトル先取り: 0件
- 状態空間追加: 0件
- 電力潮流詳細アルゴリズム追加: 0件
- Newton-Raphson法・非線形反復計算追加: 0件
- 行列式・余因子展開の独立論点化: 0件
- 未確認実車値依存: 0件

### Topic 11 練習PDF

`topics/11_matrix_linear_systems/11_matrix_linear_systems_practice.pdf`

QA:
- A4縦3ページ
- 全12問（一次型8問／二次記述型4問）＋完全解説を反映
- 200 dpi全ページ表示QA `3 / 3 PASS`
- 文字抽出QA `PASS`
- 固定一次5問・12対象設問への接続 `12 / 12 PASS`
- 独立計算・正答一意性 `12 / 12 PASS` を維持
- 教材外知識補完: 0件
- Topic 12固有値・固有ベクトル先取り: 0件
- 状態空間追加: 0件
- 電力潮流詳細アルゴリズム追加: 0件
- Newton-Raphson法・非線形反復計算追加: 0件
- 行列式・余因子展開の独立論点化: 0件
- 二次公式過去問の件数合わせ追加: 0件
- 未確認実車値依存: 0件

### Topic 11 解説画像PowerPoint

`topics/11_matrix_linear_systems/11_matrix_linear_systems_images.pptx`

PowerPoint QA:
`topics/11_matrix_linear_systems/11_matrix_linear_systems_powerpoint_qa.md`

QA:
- 16:9・5枚
- 固定一次5問・12対象設問を `12 / 12` 可視化
- KVL→`A x=b`、共有枝の符号、KCL→`I=YV`、2×2逆行列、複素係数、解法フローを収録
- 全スライド表示QA `5 / 5 PASS`
- クリッピング・重なり・文字化け: 0件
- overflow: 0件
- PPTX ZIP/XML整合性: `PASS`
- `slides_test.py`: `PASS`
- Topic 12固有値・固有ベクトル先取り: 0件
- 状態空間追加: 0件
- 電力潮流詳細・非線形反復追加: 0件
- 行列式・余因子展開の独立論点化: 0件
- 二次公式過去問の件数合わせ追加: 0件
- 未確認実車値依存: 0件

### Topic 11 完成後独立再解答

`topics/11_matrix_linear_systems/11_matrix_linear_systems_exam_reanswer.md`

結果:
- 固定一次5問・12対象設問: `12 / 12 PASS`
- R8 問3 (1),(2): `ヨ, ニ` → `2 / 2 PASS`
- R6 問3 (1),(2): `ホ, ニ` → `2 / 2 PASS`
- R4 問3 (1),(3): `ハ, ホ` → `2 / 2 PASS`
- R1 問2 (3)〜(5): `リ, ロ, イ` → `3 / 3 PASS`
- R1 問6 (3)〜(5): `ロ, ハ, イ` → `3 / 3 PASS`
- 教材外知識補完: 0件
- Topic 12固有値・固有ベクトル先取り: 0件
- 状態空間の使用: 0件
- 電力潮流詳細アルゴリズムの使用: 0件
- Newton-Raphson法・非線形反復計算の使用: 0件
- 行列式・余因子展開の独立論点化: 0件
- 二次公式過去問の件数合わせ: 0件
- 未確認実車値依存: 0件

### Topic 11 最終QA

`topics/11_matrix_linear_systems/11_matrix_linear_systems_final_qa.md`

初回判定は `NEEDS_REVISION / IN_PROGRESS`。技術内容・必須成果物・固定EXAM_ALIGNMENT・完成後独立再解答・表示QA・SPEC境界はPASSで、未完了理由はsource進捗記録3箇所だけだった。

その後、以下3箇所だけを実成果物へ同期した。

- 主source冒頭 `## 状態`
- 主source末尾 `## 次工程`
- 練習source末尾 `## 次工程`

技術本文・固定EXAM_ALIGNMENT・数式・3段階例題・練習問題・正答・PDF/PPTX・完成後独立再解答は変更していない。

再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定一次5問・12対象設問: PASS
- 完成後独立再解答 `12 / 12 PASS`: PASS
- 練習問題独立計算・正答一意性 `12 / 12 PASS`: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- source進捗整合: PASS
- Topic 12固有値・固有ベクトル先取り: 0件
- 状態空間追加: 0件
- 電力潮流詳細アルゴリズム追加: 0件
- Newton-Raphson法・非線形反復計算追加: 0件
- 行列式・余因子展開の独立論点化: 0件
- 二次公式過去問の件数合わせ: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## Topic 12 完了記録

テーマ: `固有値の基礎`

source:
`topics/12_eigenvalues_basics/12_eigenvalues_basics.md`

解説PDF:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_explanation.pdf`

練習source:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_practice.md`

練習PDF:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_practice.pdf`

PowerPoint:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_images.pptx`

PowerPoint QA:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_powerpoint_qa.md`

完成後独立再解答:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_exam_reanswer.md`

最終QA:
`topics/12_eigenvalues_basics/12_eigenvalues_basics_final_qa.md`

### Topic 12 固定範囲

- 固有値
- 固有ベクトル
- 特性方程式
- 線形系の安定性との関係

可制御性・可観測性、状態フィードバック設計一般、オブザーバ、正準形・対角化・Jordan標準形、Lyapunov安定論、数値固有値計算法、Topic 15周波数応答・ボード線図、電力潮流・非線形反復計算へ拡張しない。

### Topic 12 EXAM_ALIGNMENT

固定H28二次「機械・制御」問4 (1)の1問・1対象設問。

- 制作前独立再解答・公式標準解答照合: `1 / 1 PASS`
- 完成後独立再解答: `1 / 1 PASS`
- 再導出: `f=(12,6)`
- 古典制御問題による件数合わせ: 0件
- 第一種現代制御問題による件数合わせ: 0件

### Topic 12 成果物QA

- 解説本文＋3段階例題: PASS
- 解説PDF: A4縦5ページ、200 dpi表示 `5 / 5 PASS`、文字抽出PASS
- 練習問題: 全12問（一次型8／二次記述型4）、独立計算・正答一意性 `12 / 12 PASS`
- 練習PDF: A4縦3ページ、200 dpi表示 `3 / 3 PASS`、文字抽出PASS
- PowerPoint: 16:9・5枚、表示 `5 / 5 PASS`、overflow 0件、ZIP/XML整合性PASS
- source進捗記録と実成果物の整合: PASS
- 固定範囲外追加: 0件
- 第一種過去問による件数水増し: 0件
- Topic 15周波数応答・ボード線図先取り: 0件
- 未確認実車値依存: 0件

### Topic 12 最終QA

初回判定は `NEEDS_REVISION / IN_PROGRESS`。技術ゲートは全件PASSで、未完了理由はsource進捗記録3箇所だけだった。

その後、以下3箇所だけを実成果物へ同期した。

- `12_eigenvalues_basics.md` 冒頭 `## 状態`
- `12_eigenvalues_basics.md` 末尾 `## 次工程`
- `12_eigenvalues_basics_practice.md` 末尾 `## 次工程`

再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定H28二次「機械・制御」問4 (1): PASS
- 完成後独立再解答 `1 / 1 PASS`: PASS
- 練習問題独立計算・正答一意性 `12 / 12 PASS`: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- source進捗整合: PASS
- 固定範囲外追加: 0件
- 第一種過去問による件数水増し: 0件
- Topic 15周波数応答・ボード線図先取り: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## Topic 13 完了記録

テーマ: `フーリエ級数`

source:
`topics/13_fourier_series/13_fourier_series.md`

current_status: `topic_13_completed`

### Topic 13 固定範囲

- 周期関数
- フーリエ係数
- 奇関数・偶関数
- 基本波
- 高調波
- 実効値
- VVVFインバータのPWM波形を基本波と高調波の和として理解するための数学

Topic 14のフーリエ変換・FFT、Topic 15の対数・dB・周波数応答・ボード線図、PWM制御方式・キャリア設計・スイッチング損失の一般論へ拡張しない。

### Topic 13 EXAM_ALIGNMENT

固定第二種公式過去問3問・5対象設問。

- H28 二次 機械・制御 問3 (3)〜(4)
- H24 一次 機械 問3 (4)〜(5)
- H22 一次 機械 問3 (3)

制作前独立再解答・公式標準解答照合: `5 / 5 PASS`。

再導出:
- H28 問3 (3): `v_RO` に3n次高調波、`v_RS` では打消し → PASS
- H28 問3 (4): `E0=sqrt(2/3)Ed` → PASS
- H24 問3 (4): `φ=π/6` → `ヲ` → PASS
- H24 問3 (5): `2倍未満` → `ル` → PASS
- H22 問3 (3): `sqrt(3)Ed k/(2sqrt(2))` → `ト` → PASS

第二種公式過去問を直近年度から遡って確認し、H20/H19の周辺問題も候補確認したが、フーリエ級数による周期波形分解・基本波・高調波・実効値を直接要求しないため件数合わせで固定しない。第一種過去問も品質ゲート件数へ含めない。

### Topic 13 解説本文＋3段階例題

主sourceへ完成済み。

本文では以下を収録した。
- 周期 `2π` のフーリエ級数と係数定義
- 偶関数・奇関数・半波対称による係数消失
- 方形波の奇数次高調波
- 三相線間差での3n次高調波打消し
- 非正弦周期波形の実効値
- `2cos(nφ/2)` による同次数成分の位相合成
- PWM基本波最大値→相実効値→線間実効値
- 本試験型解法手順と頻出ミス
- VVVF波形を基本波＋高調波として読む数学的接続

3段階例題:
- 基礎: 方形波のフーリエ係数
- 本試験標準: 線間波形の実効値＋3n次打消し
- 複合・ひっかけ: `φ=π/6` で基本波・5次・7次の合成振幅比較

固定3問・5対象設問への本文マッピング: `5 / 5 PASS`。

### Topic 13 成果物

- 解説PDF: `topics/13_fourier_series/13_fourier_series_explanation.pdf`
- 練習source: `topics/13_fourier_series/13_fourier_series_practice.md`
- 練習PDF: `topics/13_fourier_series/13_fourier_series_practice.pdf`
- PowerPoint: `topics/13_fourier_series/13_fourier_series_images.pptx`
- PowerPoint QA: `topics/13_fourier_series/13_fourier_series_powerpoint_qa.md`
- 完成後独立再解答: `topics/13_fourier_series/13_fourier_series_exam_reanswer.md` → `5 / 5 PASS`
- 最終QA: `topics/13_fourier_series/13_fourier_series_final_qa.md` → `PASS / completed`

PowerPoint QA:
- 16:9・5枚
- 固定3問・5対象設問への可視化接続: `5 / 5 PASS`
- 全5スライド再レンダリング: `5 / 5 PASS`
- クリッピング・重なり・文字化け: 0件
- overflow: 0件
- `slides_test.py`: `PASS`
- PPTX ZIP/XML整合性: `PASS`
- SHA-256: `b898aa5766027fc80fa64a7db8135fa2149fb73fe6cc016df2aaf09ccbeeb226`

境界:
- H20/H19周辺問題による件数合わせ: 0件
- 第一種過去問による件数水増し: 0件
- Topic 14フーリエ変換・FFT先取り: 0件
- Topic 15対数・dB・周波数応答・ボード線図先取り: 0件
- PWM制御方式・キャリア設計・スイッチング損失の一般論追加: 0件
- 未確認実車値依存: 0件

### Topic 13 最終QA

初回判定は `NEEDS_REVISION / IN_PROGRESS`。技術内容・必須成果物・固定EXAM_ALIGNMENT・完成後独立再解答・表示QA・SPEC境界はPASSで、未完了理由は進捗記録5箇所だけだった。

その後、5箇所を実成果物へ同期し、再判定で以下を確認した。

- 必須成果物実在: PASS
- 固定第二種公式3問・5対象設問: PASS
- 完成後独立再解答 `5 / 5 PASS`: PASS
- 練習問題独立計算・論理QA `12 / 12 PASS`: PASS
- 一次型正答一意性 `8 / 8 PASS`: PASS
- 解説PDF・練習PDF・PowerPoint表示QA: PASS
- source進捗整合: PASS
- H20/H19周辺問題による件数合わせ: 0件
- 第一種過去問による件数水増し: 0件
- Topic 14フーリエ変換・FFT先取り: 0件
- Topic 15対数・dB・周波数応答・ボード線図先取り: 0件
- PWM制御方式・キャリア設計・スイッチング損失一般論追加: 0件
- 未確認実車値依存: 0件

総合判定: `PASS / completed`。

## Topic 14 進捗

テーマ: `フーリエ変換・FFT`

source:
`topics/14_fourier_transform_fft/14_fourier_transform_fft.md`

current_status: `topic_14_practice_source_complete`

### Topic 14 固定範囲

- フーリエ変換の概念
- 周波数領域
- 離散フーリエ変換の概念
- FFT
- サンプリングとの関係
- 計算プログラムでPWM波形等をFFTし、基本波・高調波を可視化する

Topic 15の対数・dB・ボード線図・ゲイン余裕・位相余裕、ADC量子化・変換回路方式、フィルタ設計一般へ拡張しない。

### Topic 14 EXAM_ALIGNMENT

現行の電気技術者試験センター資料で本Topic固定範囲へ直接接続し、問題本文・公式解答まで独立確認できたものはR3一次「機械」問8 (1)の1問・1答案要素。

制作前独立再解答・公式解答照合: `1 / 1 PASS`。

再導出:

```text
f_s > 2 f_max
```

空欄係数 `2` で公式解答と一致。

調査境界:
- H18一次「機械」問6は複数の電験解説資料で標本化・サンプリング定理等への対応を確認したが、2026-09-17時点の試験センター現行アーカイブから問題本文・公式解答を直接再確認できないため正式件数に含めない。
- H12一次「機械」問8は年度別索引で「ディジタル信号処理」と確認できるが、問題本文・公式解答を確定できないため正式件数に含めない。
- 二次「機械・制御」の年度別索引でフーリエ変換・FFT・サンプリング・信号処理を直接主題とする問題を確認できず、件数合わせで採用しない。
- 第一種・第三種過去問による第二種件数水増し: 0件。
- Topic 15先取り: 0件。
- ADC量子化・回路方式の仕様外追加: 0件。
- 未確認実車値依存: 0件。

### Topic 14 解説本文＋3段階例題

主sourceへ完成済み。

本文では以下を収録した。
- 時間領域と周波数領域、連続フーリエ変換の概念
- `f_s=1/T_s` とサンプリング定理 `f_s>2f_max`
- ナイキスト周波数とエイリアシング
- DFT定義と `Δf=f_s/N`, `f_k=kΔf`
- FFTはDFTを効率よく計算する方法であること
- FFTスペクトルから基本波・高調波の位置を読む手順
- 教育用PWM等を後工程の計算プログラムでFFTする接続
- 本試験型解法手順と頻出ミス

3段階例題:
- 基礎: 最高周波数3.2 kHzに対するサンプリング条件 `f_s>6.4 kHz`
- 本試験標準: `f_s=12.8 kHz`, `N=1024` から `Δf=12.5 Hz`, 50 Hz→`k=4`, 250 Hz→`k=20`
- 複合・ひっかけ: `f_s=8 kHz` で7 kHz成分が1 kHzへ折り返すエイリアシング

固定R3一次「機械」問8 (1)の1答案要素への本文マッピング: `1 / 1 PASS`。3段階例題の独立再計算: `3 / 3 PASS`。

### Topic 14 解説PDF

`topics/14_fourier_transform_fft/14_fourier_transform_fft_explanation.pdf`

QA:
- A4縦5ページ
- 200 dpi全ページ表示QA `5 / 5 PASS`
- 文字抽出QA `PASS`
- 固定R3一次「機械」問8 (1)の1答案要素を `1 / 1` 反映
- 3段階例題 `3 / 3` 反映
- Topic 15先取り: 0件
- ADC量子化・変換回路方式追加: 0件
- フィルタ設計一般追加: 0件
- FFT実装詳細の試験必須化: 0件
- 第一種・第三種過去問による件数水増し: 0件
- 未確認実車値依存: 0件

### Topic 14 練習問題source

`topics/14_fourier_transform_fft/14_fourier_transform_fft_practice.md`

内容:
- 全12問
- 一次型8問／記述型4問
- 難易度: 基礎3／標準6／複合3
- R3一次「機械」問8 (1)の固定1答案要素へ問2・問4・問9で接続
- サンプリング周期・周波数、サンプリング定理、ナイキスト周波数、エイリアシング、DFT定義、周波数刻み、FFTとDFTの関係、教育用PWM相当波形の基本波・高調波位置を反復
- 記述型は数学・信号処理の途中式確認用で、第二種二次の固定過去問対応を件数合わせで追加していない

QA:
- 固定1答案要素への接続 `1 / 1 PASS`
- 独立計算・論理QA `12 / 12 PASS`
- 一次型正答一意性 `8 / 8 PASS`
- Topic 15先取り: 0件
- ADC量子化・変換回路方式追加: 0件
- フィルタ設計一般追加: 0件
- FFT実装詳細の試験必須化: 0件
- 第一種・第三種過去問による件数水増し: 0件
- 未確認実車値依存: 0件

## 次に行うこと

Topic 14 `フーリエ変換・FFT` の練習PDFを作成し、表示QA・文字抽出QA・全12問と完全解説の反映確認を行う。