# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-14

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する` は最終QAまでPASSし、`completed`。

完成数: `4 / 22`

active topic: `05 300系の誘導電動機を等価回路で解く`

current status: `topic_05_independent_reanswer_complete`

## Topic 05 固定範囲

SPECに従い、次だけを扱う。

- 一次抵抗・一次漏れリアクタンス
- 励磁枝
- 二次抵抗・二次漏れリアクタンス
- `r2'/s`
- 一次入力
- 二次入力
- 二次銅損
- 機械出力
- 軸出力
- トルク
- 効率
- 一相分等価回路から電流、出力、損失、トルクを順に求める計算

滑り・同期速度は `r2'/s` と出力・トルク計算に必要な前提としてのみ扱う。

## Topic 05 EXAM_ALIGNMENT

source Markdown:
`topics/05_300series_induction_motor_equivalent_circuit/05_300series_induction_motor_equivalent_circuit.md`

固定過去問:
- R07 一次 機械 問2: (1)
- H30 一次 機械 問1: (1)〜(5)
- R07 二次 機械・制御 問2: (1)
- R04 二次 機械・制御 問2: (1)〜(5)
- H28 二次 機械・制御 問1: (1)〜(5)

一次2問＋二次記述3問、計5問。ゲート対象17小問。制作前の公式解答照合付き要求事項独立検証は `17 / 17 PASS`。

参考教材は e-sysnet「三相誘導電動機の理論と等価回路」と電験王2の各対応過去問解説を確認済み。

## 完了した解説source

過去問逆算の教材必須説明12項目を本文へ `12 / 12` マッピング済み。

本文は次を収録した。

- 星形結線の線間電圧→相電圧換算
- 一相分L形等価回路と各定数の意味
- 同期速度・滑り・`r2'/s`
- 励磁電流、二次電流一次換算値、一次電流の複素計算
- 一次入力→二次入力→二次銅損→機械出力→軸出力の電力フロー
- 電磁トルクと軸トルクの区別
- 励磁損・一次銅損・二次銅損・効率
- 二種一次の選択式解法
- 二種二次の記述計算手順と単位換算
- 3段階例題（基礎／本試験標準／複合・ひっかけ）

例題の数値はすべて教材上の仮定値として明記し、未確認300系実車値は使用していない。

## 完了した解説PDF

`topics/05_300series_induction_motor_equivalent_circuit/05_300series_induction_motor_equivalent_circuit_explanation.pdf`

- A4縦4ページ
- sourceの固定EXAM_ALIGNMENT 5問・17小問と本文内容を維持
- 必須説明12項目と3段階例題を収録
- 全4ページ表示QA: PASS
- 文字抽出QA: PASS
- 仕様外論点・未確認300系実車値の追加: 0件

## 完了した練習PDF

`topics/05_300series_induction_motor_equivalent_circuit/05_300series_induction_motor_equivalent_circuit_practice.pdf`

- A4縦5ページ
- 15問（一次試験型10問＋二次試験型5問）
- 一次試験型10問は全問五肢択一
- 二次試験型5問は途中式・前提・単位を含む記述式
- 全問に解答・完全解説を収録
- 固定EXAM_ALIGNMENT 5問・17小問で必要な操作へ接続
- 全5ページ表示QA: PASS
- 文字抽出QA: PASS
- 仕様外論点・未確認300系実車値の追加: 0件

## 完了した解説画像PowerPoint

`topics/05_300series_induction_motor_equivalent_circuit/05_300series_induction_motor_equivalent_circuit_images.pptx`

- 16:9・4スライド
- 星形結線の相電圧換算、一相分L形等価回路、複素電流の計算順を図解
- `r2'/s` の分解と、一次入力→二次入力→機械出力→軸出力の電力フローを図解
- 電磁トルクと軸トルク、同期速度・滑り・角速度の使い分けを図解
- 二種一次・二次の解法手順と固定EXAM_ALIGNMENT 5問・17小問を収録
- 全4スライド表示QA: PASS
- overflow検査: PASS
- ZIP整合性検査: PASS
- 仕様外論点・未確認300系実車値の追加: 0件

## 完了した独立再解答

記録:
`topics/05_300series_induction_motor_equivalent_circuit/05_300series_induction_motor_equivalent_circuit_independent_reanswer.md`

固定5問・17小問を、完成教材に収録した式・解法手順だけで再導出し、公式解答・標準解答と照合した。

- R07 一次 機械 問2(1): PASS
- H30 一次 機械 問1(1)〜(5): `5 / 5 PASS`
- R07 二次 機械・制御 問2(1): PASS
- R04 二次 機械・制御 問2(1)〜(5): `5 / 5 PASS`
- H28 二次 機械・制御 問1(1)〜(5): `5 / 5 PASS`
- 合計: `17 / 17 PASS`
- 教材外知識による補完: 0件
- 固定範囲外追加: 0件

## 境界

次は追加しない。

- R08一次問2の抵抗測定・無負荷試験・拘束試験による等価回路定数測定法
- Topic 06の最大トルク条件、停動トルク、比例推移、二次抵抗変更時の特性
- R04二次問2(6)の入力力率
- T形等価回路のテブナン変換・始動トルク
- 未確認300系実車の回路定数・電流・損失等

## 次に行うこと

Topic 05の最終QAを実施する。固定EXAM_ALIGNMENT 5問・17小問、必須成果物の実在、表示QA、独立再解答 `17 / 17 PASS`、仕様境界、進捗記録の整合を確認し、全件PASSの場合だけ `completed` とする。
