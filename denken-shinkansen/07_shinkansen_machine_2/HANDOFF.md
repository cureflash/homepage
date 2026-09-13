# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

Topic 02 `0系の直流主電動機はどんな特性だった？` も最終QAまでPASSし、`completed`。

完成数: `2 / 22`

active topic: `03 0系を210km/hまで加速させる`

current status: `topic_03_explanation_source_complete`

## Topic 03 今回完了した工程

解説本文＋3段階例題を次へ追加した。

`topics/03_0series_acceleration/03_0series_acceleration.md`

本文では次を一続きにした。

- `V=E+I_aR_a`
- `E=kφω`
- `T=kφI_a`
- 電圧制御
- 0系の低圧タップ切換
- 弱め界磁
- 定トルク領域・定出力領域
- `P=Tω`
- 歯車比 `i=n_m/n_w`
- `v=0.06πDn_m/i`
- `F=T_w/r`
- `a=(F-F_r)/m`
- `Jdω/dt=T_M-T_L`

3段階例題は次の役割で作成済み。

1. 基礎: 端子電圧変更から逆起電力・回転速度を求める
2. 標準: 歯車・車輪を介して列車速度・駆動力・加速度まで求める
3. 二次相当: 弱め界磁・定出力条件からトルク比・電流・必要端子電圧を求める

## 0系一次資料確認

日本車輌製造「0系新幹線の主要諸元」:
https://www.n-sharyo.co.jp/museum/tec0/tec0-spec.html

確認済み:
- 2両1ユニット8主電動機
- 主回路4S×2P
- 連続定格出力1,480 kW / 2両
- 連続定格速度167 km/h
- 歯数比29:63=1:2.17
- 主変圧器低圧側タップ切換による力行制御
- タップ切替器25段
- 最高速度210 km/h

`1,480/8=185 kW/台` は資料値からの計算値として明示した。

車輪径・主電動機回転速度は、このrunで一次資料確認できていないため0系実値としては使っていない。標準例題で必要な未確認値は「教材上の仮定値」と明記した。

## 過去問品質ゲート

制作前EXAM_ALIGNMENTは維持。

- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H25 一次 機械 問3
- H24 二次 機械・制御 問1(4)

一次4問＋二次記述1問、ゲート対象8小問の制作前公式照合は `8 / 8 PASS`。

本文はこれらの要求事項を全件収録した。完成後の「教材だけを使う独立再解答」は、PDF・練習PDF・PowerPoint完成後に実施する。

チョッパ制御、回生制動、誘導電動機V/f・ベクトル制御、等価RC回路による厳密な始動過渡は本テーマへ追加していない。

## Topic 02 完成成果物

source Markdown:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md`

解説PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_explanation.pdf`

練習PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_practice.pdf`

解説画像PowerPoint:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_images.pptx`

最終QA記録:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_final_qa.md`

## 次に行うこと

Topic 03の解説PDFを作成する。

正本は `topics/03_0series_acceleration/03_0series_acceleration.md`。本文・3段階例題・EXAM_ALIGNMENTを削らず反映し、実車値はsource内で一次資料確認済みとしたものだけを使用する。PDF作成後も完成数は増やさず、練習PDF・PowerPoint・教材のみ独立再解答・最終QAまで通過した時点で初めてTopic 03をcompletedとする。