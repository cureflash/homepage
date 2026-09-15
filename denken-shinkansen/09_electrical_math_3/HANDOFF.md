# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-16

## 現在地

Topic 01〜07は `completed`。

Topic 08 `積分 速度曲線の面積は距離` は、制作前EXAM_ALIGNMENT、固定5問の制作前独立計算・公式解答照合、解説本文＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、初回完成後独立再解答、不足前提3群の最小補強source/PDF、補強後の再独立解答、最終QAまで実施。

補強後の完成教材だけによる固定5問・9答案要素の再独立解答は `5 / 5問・9 / 9答案要素 PASS`。技術内容、固定EXAM_ALIGNMENT、必須成果物、練習QA、既存表示QA記録、仕様境界はPASS。

最終QAは `NEEDS_REVISION / IN_PROGRESS`。唯一の未完了理由は進捗記録2箇所で、主source冒頭が「解説本文＋3段階例題まで完了／次は解説PDF」、練習source末尾が「次は練習PDF作成」の旧記録のまま。実際には後続成果物まで完成しているため、この2箇所だけを実成果物へ同期してから最終QAを再判定する。

完成数: `7 / 12`

current_status: `topic_08_final_qa_needs_revision`

last_completed_topic: `07 微分② 速度を微分すると加速度`

active_topic: `08 積分 速度曲線の面積は距離`

next_start: `主source・練習sourceの旧進捗記録2箇所を実成果物へ同期`

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

制作前独立計算・公式解答照合は `5 / 5問・9 / 9答案要素 PASS`。固定EXAM_ALIGNMENT変更0件、Topic 09〜11先取り0件、未確認新幹線実値追加0件。

### 除外方針

- H27 理論 問14: 波形平均は扱うが、積分操作が正答の必須経路ではない。
- H26 理論 問10: 正弦波平均の検証に積分は使えるが、正答経路に必須ではない。
- H28 理論 問14: 二重積分形A-D変換器の知識問題で積分計算を要求しない。
- H28 理論 問3: 磁界・Biot-Savartの専門論点が支配的で固定範囲外。
- R5下 機械 問18(b): 制御系の積分要素であり、伝達関数・制御理論が主題。

## Topic 08 成果物・QA

### 解説本文＋3段階例題

主source: `topics/08_integral_distance/08_integral_distance.md`

固定5問から逆算し、不定積分・定積分・符号付き面積、多項式・正弦・余弦の基本積分、必要範囲の置換、波形平均・区分積分、面積・蓄積量の釣合い、`x=∫v(t)dt`、`t=∫dx/v(x)`、`a=v dv/dx` から一定加速度式への導出、3段階例題を収録。新幹線の数値例は仮定と明記。

### 解説PDF

`topics/08_integral_distance/08_integral_distance_explanation.pdf`

- A4縦4ページ
- 200 dpi表示QA `4 / 4 PASS`
- 文字抽出QA PASS
- クリッピング、重なり、文字化け0件

### 練習source / PDF

- `topics/08_integral_distance/08_integral_distance_practice.md`
- `topics/08_integral_distance/08_integral_distance_practice.pdf`

全12問・全問五肢択一、基礎3／標準7／複合2。独立計算・正答一意性QA `12 / 12 PASS`。PDFはA4縦5ページ、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS。

### 解説画像PowerPoint

`topics/08_integral_distance/08_integral_distance_images.pptx`

16:9・5枚。全5枚表示QA PASS、overflow 0件、グラフと式の整合確認PASS、PPTX ZIP整合性PASS。

### 初回完成後独立再解答

`topics/08_integral_distance/08_integral_distance_exam_reanswer.md`

初回判定は `2 / 5問・5 / 9答案要素 PASS / NEEDS_REVISION`。

不足3群:
- R8上 機械 問16: 相電圧→線間電圧・線間波形
- R3 機械 問16(a): リアクトル電圧符号・磁気エネルギー・導通終了
- H28 機械 問16(a): サイリスタ導通対・無点弧時波形

教材外知識を補ってPASS扱いした件数0件。

### 独立再解答FAIL補強

- source: `topics/08_integral_distance/08_integral_distance_revision_supplement.md`
- PDF: `topics/08_integral_distance/08_integral_distance_revision_supplement.pdf`

不足3群だけを固定範囲内で最小補強。PDFはA4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA PASS。三相回路・整流回路・リアクトル・サイリスタの体系説明追加0件。

### 補強後の再独立解答

2026-09-16実施。補強PDFを含む完成教材だけから固定5問・9答案要素を再導出し、その後に公式解答と照合した。

- R8上 機械 問16: `(a)(2), (b)(2)` / PASS
- R3 機械 問16: `(a)(1), (b)(3)` / PASS
- R1 理論 問18: `(a)(1), (b)(4)` / PASS
- H28 機械 問16: `(a)(5), (b)(2)` / PASS
- H24 機械 問10: `(5)` / PASS

判定: `5 / 5問・9 / 9答案要素 PASS`。

- 公式解答との不一致: 0件
- 教材外知識補完: 0件
- 固定EXAM_ALIGNMENT変更: 0件
- Topic 09〜11先取り: 0件
- 専門分野の体系説明追加: 0件
- 未確認新幹線実値追加: 0件

### 最終QA

`topics/08_integral_distance/08_integral_distance_final_qa.md`

判定は `NEEDS_REVISION / IN_PROGRESS`。

PASS項目:
- 必須成果物の実在
- 固定EXAM_ALIGNMENT 5問・9答案要素
- 制作前独立検証 `5 / 5問・9 / 9答案要素 PASS`
- 補強後独立再解答 `5 / 5問・9 / 9答案要素 PASS`
- 練習独立計算QA `12 / 12 PASS`
- PDF/PPTXの既存表示QA記録
- 固定範囲・後続Topic境界

FAIL項目はsource進捗整合のみ。

- 主source `08_integral_distance.md` 冒頭 `## 状態`: 「解説本文＋3段階例題まで完了」「次工程は解説PDF」の旧記録
- 練習source `08_integral_distance_practice.md` 末尾: 「次工程は練習PDF作成」の旧記録

技術本文・数式・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・補強成果物・独立再解答は変更せず、この2箇所だけを現在地へ同期する。

## 次に行うこと

主source冒頭と練習source末尾の旧進捗記録2箇所だけを、実在成果物・補強後独立再解答・最終QA実施済みの現在地へ同期する。その後にTopic 08最終QAを再判定する。
