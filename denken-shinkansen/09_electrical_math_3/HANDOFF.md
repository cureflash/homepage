# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-15

## 現在地

Topic 01〜07は `completed`。

Topic 07 `微分② 速度を微分すると加速度` は最終QA再判定まで完了。制作前独立解答 `5 / 5 PASS`、練習12問の独立計算QA `12 / 12 PASS`、完成後独立再解答 `5 / 5 PASS`。初回最終QAで唯一FAILだった主sourceの旧進捗2箇所は同期済みで、再判定では必須成果物・固定EXAM_ALIGNMENT・表示QA・仕様境界・進捗整合を確認し `PASS / completed` とした。

完成数: `7 / 12`

current_status: `topic_07_completed`

last_completed_topic: `07 微分② 速度を微分すると加速度`

active_topic: `08 積分 速度曲線の面積は距離`

next_start: `Topic 08 制作前EXAM_ALIGNMENT`

## Topic 07 完了記録

### 固定EXAM_ALIGNMENT

品質ゲート対象は次の5問で固定。

- R6上 理論 問7: 可変抵抗の消費電力を一変数関数として表し、極大条件を求める
- R5下 理論 問12: 一様電界中の電子について、一定加速度、速度、移動距離、運動エネルギーの時間依存性を判定する
- R3 理論 問7: 直列電池群と可変抵抗の回路で負荷電力最大条件から電流を求める
- R1 理論 問12: 一様電界中で静止から放出された点電荷の一定加速度運動から移動時間を求める
- H27 理論 問12: ブラウン管偏向板中の電子について、電界による加速度、通過時間、横方向速度、偏向量を求める

制作前独立解答は `(3),(5),(4),(1),(5)` で公式解答と `5 / 5 PASS`。完成後独立再解答も同じく `5 / 5 PASS`。教材外知識補完0件、固定EXAM_ALIGNMENT変更0件、仕様外論点追加0件、未確認新幹線実値追加0件。

### 制作範囲

扱った内容:
- 二階微分
- 速度 `v=dx/dt`
- 加速度 `a=dv/dt=d²x/dt²`
- 増加・減少
- 極大・極小の基本
- 連鎖律の基本
- `a=v dv/dx`
- 発車・加速・定速・惰行・制動の位置・速度・加速度グラフ対応

後続Topicへ残した内容:
- 積分による一般的な運動公式の導出: Topic 08
- 電荷・電流、磁束・誘導起電力、電力量等の微積分体系: Topic 09
- 指数関数、RC/RL過渡現象、一階微分方程式: Topic 10
- 一般的な特性曲線読解の体系化: Topic 11

過去問を完結させるために必要な `F=qE`、`F=ma`、直並列抵抗、`P=I²R` は既習の電気・物理前提として最小限接続し、Topic 07の主題へ追加していない。

### 成果物

- 主source: `topics/07_derivative_2/07_derivative_2.md`
- 解説PDF: `topics/07_derivative_2/07_derivative_2_explanation.pdf`
- 練習source: `topics/07_derivative_2/07_derivative_2_practice.md`
- 練習PDF: `topics/07_derivative_2/07_derivative_2_practice.pdf`
- 解説画像PowerPoint: `topics/07_derivative_2/07_derivative_2_images.pptx`
- 完成後独立再解答: `topics/07_derivative_2/07_derivative_2_exam_reanswer.md`
- 最終QA: `topics/07_derivative_2/07_derivative_2_final_qa.md`

表示QA:
- 解説PDF: A4縦3ページ、200 dpi `3 / 3 PASS`、文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi `4 / 4 PASS`、文字抽出QA PASS
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow・ZIP/XML整合性PASS

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

仕様外論点を件数合わせで追加しない。

## 次に行うこと

Topic 08の制作前EXAM_ALIGNMENTを作る。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` を正本とし、直近年度を優先してTopic 08の積分操作が解法に直接必要な公式過去問を調査する。三種は原則5問以上、直接該当が5問未満なら確認できた全件を固定対象とする。再出題重複やTopic 09以降の論点を件数合わせで追加しない。