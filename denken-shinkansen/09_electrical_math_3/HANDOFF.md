# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-16

## 現在地

Topic 01〜07は `completed`。

Topic 08 `積分 速度曲線の面積は距離` は制作前EXAM_ALIGNMENT、固定5問の制作前独立計算・公式解答照合、解説本文＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、完成後独立再解答まで実施。制作前は `5 / 5問・9 / 9答案要素 PASS`、練習12問の独立計算QAは `12 / 12 PASS`、練習PDF表示QAは `5 / 5 PASS`、PowerPointは全5枚表示QA PASS・overflow 0件・PPTX ZIP整合性PASS。

完成後独立再解答は `2 / 5問・5 / 9答案要素 PASS / NEEDS_REVISION`。積分操作自体ではなく、固定過去問を積分式へ接続する電気的前提3群が学習用教材に不足していた。教材外知識で補ってPASS扱いしていない。固定EXAM_ALIGNMENT変更、後続Topic先取り、未確認新幹線実値追加はいずれも0件。

完成数: `7 / 12`

current_status: `topic_08_independent_reanswer_needs_revision`

last_completed_topic: `07 微分② 速度を微分すると加速度`

active_topic: `08 積分 速度曲線の面積は距離`

next_start: `Topic 08 独立再解答FAILの不足前提3群を固定範囲内で最小補強`

## Topic 07 完了記録

### 固定EXAM_ALIGNMENT

品質ゲート対象は次の5問で固定。

- R6上 理論 問7: 可変抵抗の消費電力を一変数関数として表し、極大条件を求める
- R5下 理論 問12: 一様電界中の電子について、一定加速度、速度、移動距離、運動エネルギーの時間依存性を判定する
- R3 理論 問7: 直列電池群と可変抵抗の回路で負荷電力最大条件から電流を求める
- R1 理論 問12: 一様電界中で静止から放出された点電荷の一定加速度運動から移動時間を求める
- H27 理論 問12: ブラウン管偏向板中の電子について、電界による加速度、通過時間、横方向速度、偏向量を求める

制作前独立解答 `5 / 5 PASS`、練習12問の独立計算QA `12 / 12 PASS`、完成後独立再解答 `5 / 5 PASS`。教材外知識補完0件、固定EXAM_ALIGNMENT変更0件、仕様外論点追加0件、未確認新幹線実値追加0件。

### 成果物

- 主source: `topics/07_derivative_2/07_derivative_2.md`
- 解説PDF: `topics/07_derivative_2/07_derivative_2_explanation.pdf`
- 練習source: `topics/07_derivative_2/07_derivative_2_practice.md`
- 練習PDF: `topics/07_derivative_2/07_derivative_2_practice.pdf`
- 解説画像PowerPoint: `topics/07_derivative_2/07_derivative_2_images.pptx`
- 完成後独立再解答: `topics/07_derivative_2/07_derivative_2_exam_reanswer.md`
- 最終QA: `topics/07_derivative_2/07_derivative_2_final_qa.md`

## Topic 08 固定仕様範囲

系列 `SPEC.md` のTopic 08は「積分 速度曲線の面積は距離」。

主題:
- 速度を積分して走行距離を求め、積分を蓄積量として理解する
- 中心式: `x=∫v(t)dt`

扱う内容:
- 不定積分
- 定積分
- 原始関数
- 面積
- 多項式・三角関数の基本積分
- 必要範囲の置換積分

新幹線接続:
- 速度―時間グラフの面積から走行距離を求める
- `t=∫dx/v(x)` から運転曲線と所要時間を結ぶ
- 一定加速度条件で `v²-v0²=2ax` を微積分から導出する

後続Topicへ残す:
- 電荷・電流、磁束・誘導起電力、電力量、仕事の微積分体系: Topic 09
- 指数関数、RC/RL過渡現象、一階微分方程式: Topic 10
- 一般的な特性曲線読解の体系化: Topic 11

仕様外論点を件数合わせで追加しない。

## Topic 08 制作前EXAM_ALIGNMENT

### 固定5問

- R8上 機械 問16: 三相ダイオード全波整流回路。導通区間の正弦波を定積分し、波形面積を平均出力電圧へ変換する。
- R3 機械 問16: 単相半波整流回路。`Vd=(1/2π)∫v(θ)dθ` として導通区間の正弦波を積分する。
- R1 理論 問18: 二重積分形A-D変換器。入力側と基準電圧側の符号付き面積・蓄積量の釣合いを使う。
- H28 機械 問16: 単相サイリスタ全波整流回路。波形面積と制御遅れ角から平均出力電圧を求める。
- H24 機械 問10: 単相サイリスタ全波整流回路。`Vd=(1/π)∫_α^π √2Va sinθ dθ` を計算して制御遅れ角との関係を判定する。

### 制作前独立計算・公式解答照合

2026-09-15実施。公式問題の条件・波形・選択肢から再導出し、その後に電気技術者試験センターの公式解答PDFと照合した。

- R8上 機械 問16: 独立 `(a)(2), (b)(2)` / 公式 `(a)(2), (b)(2)` / PASS
- R3 機械 問16: 独立 `(a)(1), (b)(3)` / 公式 `(a)(1), (b)(3)` / PASS
- R1 理論 問18: 独立 `(a)(1), (b)(4)` / 公式 `(a)(1), (b)(4)` / PASS
- H28 機械 問16: 独立 `(a)(5), (b)(2)` / 公式 `(a)(5), (b)(2)` / PASS
- H24 機械 問10: 独立 `(5)` / 公式 `(5)` / PASS

判定: `5 / 5問・9 / 9答案要素 PASS`。

固定EXAM_ALIGNMENT変更0件、Topic 09〜11先取り0件、未確認新幹線実値追加0件。整流回路・A-D変換器そのものの装置解説は既習事項のままとし、Topic 08へ仕様追加していない。

詳細計算は `topics/08_integral_distance/08_integral_distance.md` に記録済み。

### 除外方針

- H27 理論 問14: 波形平均は扱うが、積分操作が正答の必須経路ではない。
- H26 理論 問10: 正弦波平均の検証に積分は使えるが、正答経路に必須ではない。
- H28 理論 問14: 二重積分形A-D変換器の知識問題で積分計算を要求しない。
- H28 理論 問3: 磁界・Biot-Savartの専門論点が支配的で固定範囲外。
- R5下 機械 問18(b): 制御系の積分要素であり、伝達関数・制御理論が主題。

### 解説本文＋3段階例題

主sourceへ固定EXAM_ALIGNMENTから逆算した解説本文を追加済み。

収録内容:
- 不定積分・原始関数・積分定数
- 定積分と符号付き面積
- 多項式・正弦・余弦の基本積分
- `θ=ωt+φ` の必要範囲の置換
- 波形平均と区分積分
- 二重積分形A-D変換器を面積・蓄積量の釣合いとして読む方法
- `x=∫v(t)dt`
- `t=∫dx/v(x)`
- `a=v dv/dx` から `v²-v0²=2a(x-x0)` の導出
- 基礎／本試験標準／複合の3段階例題
- 固定5問から教材節への対応表

新幹線の数値例は積分説明用の仮定と明記し、未確認実車値は使用していない。

### 解説PDF

成果物: `topics/08_integral_distance/08_integral_distance_explanation.pdf`

- A4縦4ページ
- 主sourceの固定範囲、3段階例題、固定5過去問への教材内対応を収録
- 200 dpi全ページ表示QA: `4 / 4 PASS`
- 文字抽出QA: PASS
- クリッピング、重なり、文字化け: 0件
- 固定EXAM_ALIGNMENT変更: 0件
- Topic 09〜11先取り、未確認新幹線実値追加: 0件

### 練習問題source

成果物: `topics/08_integral_distance/08_integral_distance_practice.md`

- 全12問・全問五肢択一
- 難易度: 基礎3 / 標準7 / 複合2
- 固定5過去問の数学要求へ全件接続
- 正弦波定積分、符号付き面積、波形平均、区分積分、面積・蓄積量の釣合いを収録
- 系列SPEC固定の `x=∫vdt`、`t=∫dx/v(x)`、一定加速度式の積分導出も範囲内で収録
- 独立計算・正答一意性QA: `12 / 12 PASS`
- 固定EXAM_ALIGNMENT変更: 0件
- Topic 09〜11先取り、未確認新幹線実値追加: 0件

### 練習PDF

成果物: `topics/08_integral_distance/08_integral_distance_practice.pdf`

- A4縦5ページ
- 練習sourceの全12問・全問五肢択一と全問の完全解説を収録
- 固定5過去問への対応表、Topic 08固定範囲との対応を収録
- 200 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: PASS
- 主要計算再検算: `12 / 12 PASS`
- クリッピング、重なり、文字化け: 0件
- 固定EXAM_ALIGNMENT変更: 0件
- Topic 09〜11先取り、未確認新幹線実値追加: 0件

### 解説画像PowerPoint

成果物: `topics/08_integral_distance/08_integral_distance_images.pptx`

- 16:9・5枚
- 定積分と符号付き面積、波形平均、区分積分、面積・蓄積量の釣合いを固定5過去問へ接続
- `x=∫v(t)dt`、`t=∫dx/v(x)`、`a=v dv/dx` から一定加速度式への導出を系列SPEC固定範囲内で可視化
- 全5枚表示QA: PASS
- overflow: 0件
- グラフと式の整合確認: PASS
- PPTX ZIP整合性: PASS
- 固定EXAM_ALIGNMENT変更: 0件
- Topic 09〜11先取り、未確認新幹線実値追加: 0件

### 完成後独立再解答

成果物: `topics/08_integral_distance/08_integral_distance_exam_reanswer.md`

判定: `2 / 5問・5 / 9答案要素 PASS / NEEDS_REVISION`。

PASS:
- R1 理論 問18: (a)(1), (b)(4)
- H24 機械 問10: (5)
- R3 機械 問16(b): (3)
- H28 機械 問16(b): (2)

FAIL理由は数学計算ではなく、公式問題文から積分式へ入るための前提不足。

- R8上 機械 問16: 相電圧→線間電圧 `VLL=√3Vph` と、相電圧から線間電圧の区間波形を作る接続が学習用教材にない。
- R3 機械 問16(a): `vL=Ldi/dt` の符号、`WL=(1/2)Li²`、電流0まで導通が続くという接続が学習用教材にない。
- H28 機械 問16(a): 半周期ごとのサイリスタ導通対と、無点弧時に該当半周期の出力が消えるという波形選択の接続が学習用教材にない。

固定EXAM_ALIGNMENT変更0件。教材外知識を補ってPASS扱いした件数0件。Topic 09〜11先取り0件。未確認新幹線実値追加0件。

### source

- `topics/08_integral_distance/08_integral_distance.md`
- `topics/08_integral_distance/08_integral_distance_explanation.pdf`
- `topics/08_integral_distance/08_integral_distance_practice.md`
- `topics/08_integral_distance/08_integral_distance_practice.pdf`
- `topics/08_integral_distance/08_integral_distance_images.pptx`
- `topics/08_integral_distance/08_integral_distance_exam_reanswer.md`

参考教材は電験王、電験三種まとめました、電気主任技術者のナレッジノート等を複数系統確認。e-sysnetは検索対象に含めたが、固定5問へ直接対応するページを確認できなかったため無関係なページは引用していない。

## 次に行うこと

完成後独立再解答で不足した3群の前提だけを、固定EXAM_ALIGNMENTとTopic 08の数学範囲を変えず学習用sourceへ最小補強する。

対象は `(1)` R8上の相電圧→線間電圧・区間波形への接続、`(2)` R3のリアクトル電圧符号・磁気エネルギー・導通終了への接続、`(3)` H28のサイリスタ導通対・無点弧時波形への接続だけとする。整流回路・三相回路・リアクトルを新規テーマとして体系化しない。

Topic 09の電荷・磁束・電力量・仕事の微積分体系、Topic 10の指数関数・微分方程式、Topic 11の一般特性曲線体系は先取りしない。
