# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

Topic 02 `0系の直流主電動機はどんな特性だった？` も最終QAまでPASSし、`completed`。

Topic 03 `0系を210km/hまで加速させる` も最終QAまでPASSし、`completed`。

完成数: `3 / 22`

active topic: `04 200系のサイリスタ制御を計算する`

current status: `topic_03_completed`

## Topic 03 完了内容

source Markdown:
`topics/03_0series_acceleration/03_0series_acceleration.md`

解説PDF:
`topics/03_0series_acceleration/03_0series_acceleration_explanation.pdf`

練習PDF:
`topics/03_0series_acceleration/03_0series_acceleration_practice.pdf`

解説画像PowerPoint:
`topics/03_0series_acceleration/03_0series_acceleration_images.pptx`

最終QA記録:
`topics/03_0series_acceleration/03_0series_acceleration_final_qa.md`

## Topic 03 過去問品質ゲート

固定EXAM_ALIGNMENT:
- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H25 一次 機械 問3
- H24 二次 機械・制御 問1(4)

一次4問＋二次記述1問、ゲート対象8小問。

独立再解答結果:
- H28 問1 (1): トルク（ト） / PASS
- H28 問1 (2): 誘導起電力（リ） / PASS
- H28 問1 (3): 慣性モーメント（ヘ） / PASS
- H28 問5 (1): 直巻電動機（チ） / PASS
- H26 問5 (1): 始動時のトルク（ロ） / PASS
- H26 問5 (2): 直巻電動機（リ） / PASS
- H25 問3 (1): 回転角速度（ヨ） / PASS
- H24 二次 問1(4): `132.5 V ≒ 133 V` / PASS

公式解答・標準解答照合後も `8 / 8 PASS`。教材外のチョッパ、回生、誘導機V/f・ベクトル制御、等価RC始動過渡を補わず完答した。

## Topic 03 最終QA

- 必須4成果物の実在と現行blob確認: PASS
- 解説PDF・練習PDF・PowerPointの現行blobが制作時の表示QA対象と同一: PASS
- 代表計算の独立再計算: PASS
- 実車値 / 一次資料からの計算値 / 教材上の仮定値の区別: PASS
- 未確認の車輪径・主電動機回転速度・各タップ電圧を実車値化していない: PASS
- 仕様外論点の追加なし: PASS
- 完成後独立再解答: 8 / 8 PASS

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

Topic 04 `200系のサイリスタ制御を計算する` の制作前EXAM_ALIGNMENTを行う。

SPEC固定範囲:
- サイリスタ
- 制御角
- 位相制御整流
- 平均直流電圧
- 電流
- 力率
- 高調波の基本
- 直流主電動機との接続
- 制御角―平均直流電圧
- 制御角―主電動機電流
- 制御角―トルク

電験二種公式過去問を一次・二次合わせて原則5問以上調査し、二次記述対象が確認できる場合は少なくとも1問含める。固定範囲外は追加しない。