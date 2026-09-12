# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

完成数: `1 / 22`

active topic: `02 0系の直流主電動機はどんな特性だった？`

current status: `topic_02_exam_reanswer_complete`

## Topic 02 現在の成果物

source Markdown:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md`

解説PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_explanation.pdf`

練習PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_practice.pdf`

解説画像PowerPoint:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_images.pptx`

制作前EXAM_ALIGNMENT:
- R6 一次 機械 問2
- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H24 二次 機械・制御 問1

一次4問＋二次記述1問、計5問。ゲート対象10小問の制作前独立検証は10 / 10で公式解答と整合済み。

完成後独立再解答も実施済み。ゲート対象10小問を完成教材の式・説明だけで再解答し、10 / 10で公式標準解答と一致、教材外知識の補完0件だった。

H24二次 問1の対象(1)〜(4)は次で一致:
- 電機子抵抗 `0.500 Ω`
- 定格時逆起電力 `188 V`
- 最大速度 `1480 min^-1`
- 50%トルク・1000 min^-1時端子電圧 `133 V`

H24(3)は問題図の直流入力200 VとIGBT電圧降下2 Vから最大正電圧198 VをKVLで求めており、本テーマ外のデューティ比・回生制御は使っていない。

本テーマへ追加しない範囲:
- チョッパ制御
- 誘導電動機
- VVVF
- 過渡制御

0系主電動機の形式・定格値・実測特性は一次資料未確認のため追加していない。PowerPoint内の数値例・特性曲線は電験学習用の仮定値・模式図であり、0系実車値として扱っていない。

## 次に行うこと

Topic 02の最終QAを行う。

確認項目:
- 必須4成果物がGitHub正本に存在する
- source Markdown、解説PDF、練習PDF、PowerPointの論点・式・数値に矛盾がない
- EXAM_ALIGNMENTと完成後独立再解答の記録が整合する
- 計算値・単位・丸めが正しい
- 既実施のPDF/PPTX表示・構造確認結果を再確認する
- 本テーマ外の仕様を追加していない

全条件PASSの場合のみ Topic 02を `completed` にし、完成数を `2 / 22` へ進める。現時点では最終QA未実施のため `completed` にしない。
