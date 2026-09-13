# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

Topic 02 `0系の直流主電動機はどんな特性だった？` も最終QAまでPASSし、`completed`。

完成数: `2 / 22`

active topic: `03 0系を210km/hまで加速させる`

current status: `topic_03_independent_reanswer_complete`

## Topic 03 今回完了した工程

完成済み教材だけを使う公式過去問の独立再解答を実施し、ゲート対象8小問を `8 / 8 PASS` とした。

source Markdown:
`topics/03_0series_acceleration/03_0series_acceleration.md`

解説PDF:
`topics/03_0series_acceleration/03_0series_acceleration_explanation.pdf`

練習PDF:
`topics/03_0series_acceleration/03_0series_acceleration_practice.pdf`

解説画像PowerPoint:
`topics/03_0series_acceleration/03_0series_acceleration_images.pptx`

## 過去問品質ゲート

固定EXAM_ALIGNMENT:
- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H25 一次 機械 問3
- H24 二次 機械・制御 問1(4)

一次4問＋二次記述1問、ゲート対象8小問。

独立再解答結果:
- H28 問1 (1): `T=K I_f i_a` → トルク（ト） / PASS
- H28 問1 (2): `E=K I_f ω_m` → 誘導起電力（リ） / PASS
- H28 問1 (3): `Jdω/dt=T-T_L` → 慣性モーメント（ヘ） / PASS
- H28 問5 (1): 大始動トルクを得る旧来の直流鉄道用は直巻電動機（チ） / PASS
- H26 問5 (1): 必要なのは始動時のトルク（ロ） / PASS
- H26 問5 (2): 使用されたのは直巻電動機（リ） / PASS
- H25 問3 (1): `P=Tω` → 回転角速度（ヨ） / PASS
- H24 二次 問1(4): `E_1=187.5 V`、`R_a=0.500 Ω`、`E_2=125 V`、`I_a2=10 A`、`V_2=132.5 V≒133 V` / PASS

公式解答・標準解答照合後も `8 / 8 PASS`。教材外のチョッパ、回生、誘導機V/f・ベクトル制御、等価RC始動過渡を補わず完答した。

## 0系一次資料の扱い

日本車輌製造の公開資料で確認済み:
- 2両1ユニット8主電動機
- 主回路4S×2P
- 連続定格出力1,480 kW / 2両
- 連続定格速度167 km/h
- 歯数比29:63=1:2.17
- 主変圧器低圧側タップ切換
- タップ切替器25段
- 最高速度210 km/h

車輪径・主電動機回転速度は一次資料未確認のため実車値として使っていない。1台当たり185 kW、167 km/h時の理想駆動力約31.9 kNは一次資料値からの計算値として区別している。

## 次に行うこと

Topic 03の最終QAを行う。

確認対象:
- source Markdown、解説PDF、練習PDF、PowerPointの内容整合
- 固定EXAM_ALIGNMENT全8小問の教材内カバーと独立再解答8/8 PASSの記録
- 公式・単位・途中式・成立条件
- 実車値、資料値からの計算値、教材上の仮定値の区別
- 仕様外論点の混入がないこと
- 各成果物の表示・可読性の既存QA記録

全項目PASSならTopic 03を `completed` とし、完成数を `3 / 22` へ進める。