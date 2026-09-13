# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

Topic 02 `0系の直流主電動機はどんな特性だった？` も最終QAまでPASSし、`completed`。

完成数: `2 / 22`

active topic: `03 0系を210km/hまで加速させる`

current status: `topic_03_images_pptx_complete`

## Topic 03 今回完了した工程

解説画像PowerPointを作成した。

source Markdown:
`topics/03_0series_acceleration/03_0series_acceleration.md`

解説PDF:
`topics/03_0series_acceleration/03_0series_acceleration_explanation.pdf`

練習PDF:
`topics/03_0series_acceleration/03_0series_acceleration_practice.pdf`

解説画像PowerPoint:
`topics/03_0series_acceleration/03_0series_acceleration_images.pptx`

PowerPointは16:9・全5スライド。端子電圧・逆起電力・トルク、タップ制御、弱め界磁、定トルク/定出力、主電動機回転数から歯車・車輪・列車速度への変換、走行抵抗を引いた加速度、二次記述の解法骨格、0系の確認済み実車値と出典を図解した。外部画像は転載せずPowerPoint内で作図し、実車値を使う箇所に一次資料を明記した。全5スライドの表示QAと `slides_test.py` はPASS。

## 過去問品質ゲート

制作前EXAM_ALIGNMENTは維持。

- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H25 一次 機械 問3
- H24 二次 機械・制御 問1(4)

一次4問＋二次記述1問、ゲート対象8小問の制作前公式照合は `8 / 8 PASS`。

PowerPointでも、一次側の直流機速度式、`P=Tω`、`J dω/dt=T_M-T_L`、歯車比、列車速度、駆動力、走行抵抗、加速度を維持した。二次側はH24問1(4)と同じ「速度比→逆起電力、トルク比→電流、端子電圧」の骨格を示し、弱め界磁時は `E∝φn`、`T∝φI_a` へ戻す注意を明示した。

完成後の「教材だけを使う独立再解答」は未実施。次工程で、保存済み正答を見ず、教材外知識を補わず、固定EXAM_ALIGNMENTのゲート対象8小問を再解答する。

チョッパ制御、回生制動、誘導電動機V/f・ベクトル制御、等価RC回路による厳密な始動過渡は本テーマへ追加していない。

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

車輪径・主電動機回転速度は一次資料未確認のため、PowerPointでも実車値として使っていない。1台当たり185 kW、167 km/h時の理想駆動力約31.9 kNは一次資料値からの計算値として区別した。

## 次に行うこと

Topic 03の公式過去問を教材だけで独立再解答する。

固定EXAM_ALIGNMENTの一次4問＋二次記述1問・ゲート対象8小問を保存済み正答を見ずに再解答し、教材外知識を補わず `8 / 8 PASS` を確認する。その後に最終QAを行い、両方PASSした時点で初めてTopic 03を `completed` とする。
