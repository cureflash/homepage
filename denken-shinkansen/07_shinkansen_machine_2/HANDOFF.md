# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

Topic 02 `0系の直流主電動機はどんな特性だった？` も最終QAまでPASSし、`completed`。

完成数: `2 / 22`

active topic: `03 0系を210km/hまで加速させる`

current status: `topic_03_exam_alignment_complete`

## Topic 03 今回完了した工程

制作前EXAM_ALIGNMENTを次へ作成した。

`topics/03_0series_acceleration/03_0series_acceleration.md`

系列SPECの固定範囲:
- 電圧制御
- タップ制御
- 弱め界磁
- 定トルク領域
- 定出力領域
- 歯車比
- 車輪径
- モーター回転速度
- 列車速度
- 走行抵抗の基本
- 加速度

公式過去問は一次4問＋二次記述1問、計5問を選定した。

- H28 一次 機械 問1: (1)〜(3) と `J dω/dt=T-T_L`
- H28 一次 機械 問5: (1)
- H26 一次 機械 問5: (1)、(2)
- H25 一次 機械 問3: (1) と `T_M=J dω/dt+T_L`
- H24 二次 機械・制御 問1: (4)

制作前の公式解答照合はゲート対象8小問すべてPASS。

- H28問1: トルク / 誘導起電力 / 慣性モーメント
- H28問5: 直巻
- H26問5: 始動時のトルク / 直巻
- H25問3: 回転角速度、`P=Tω`
- H24二次問1(4): `133 V`

参考教材は e-sysnet と電験王2 の複数系統を確認済み。

混合過去問のうち、チョッパ制御、回生制動、誘導電動機、V/f制御、ベクトル制御、等価RC回路による厳密な始動過渡は本テーマのゲート対象外とした。これらを件数合わせで追加しない。

0系の歯車比、車輪径、主電動機定格、タップ段数・電圧等は一次資料未確認のため、現時点では実値を追加していない。

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

Topic 03の解説本文＋3段階例題を作成する。

EXAM_ALIGNMENTで固定した要求を全件収録する。`主電動機 → 歯車 → 車輪 → 列車速度 → 駆動力・走行抵抗 → 加速度` を一続きの解法として説明し、電圧制御・タップ制御・弱め界磁・定トルク・定出力を式へ接続する。

実車接続に使う0系の歯車比・車輪径・主電動機・タップ制御の値や構成は、一次資料で確認できたものだけを採用する。未確認値を推測して真値化しない。