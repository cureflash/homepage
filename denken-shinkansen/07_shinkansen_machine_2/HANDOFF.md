# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-13

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する` は最終QAまでPASSし、`completed`。

完成数: `1 / 22`

active topic: `02 0系の直流主電動機はどんな特性だった？`

current status: `topic_02_practice_pdf_complete`

## Topic 02 現在の成果物

source Markdown:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics.md`

解説PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_explanation.pdf`

練習PDF:
`topics/02_0series_dc_motor_characteristics/02_0series_dc_motor_characteristics_practice.pdf`

制作前EXAM_ALIGNMENT:
- R6 一次 機械 問2
- H28 一次 機械 問1
- H28 一次 機械 問5
- H26 一次 機械 問5
- H24 二次 機械・制御 問1

一次4問＋二次記述1問、計5問。ゲート対象10小問の制作前独立検証は10 / 10で公式解答と整合済み。

今回、練習PDFまで完成した。A4縦5ページ、一次試験型8問（五肢択一）＋二次試験型4問（記述式）の計12問。全問に完全解説を付けた。

二次試験型では、H24二次問1 (1)〜(4)型の解法骨格である「損失→電機子抵抗→逆起電力→速度→部分負荷端子電圧」を独自問題で反復し、使用式、前提、途中式、単位、検算まで答案として残せる形にした。

全数値問題は教材用仮定値であり、0系実車値ではない。全5ページを200 dpiでレンダリングして表示QAし、文字切れ・欠損・ページ外はみ出しなし。数値解答も別計算で確認済み。

本テーマへ追加しない範囲:
- チョッパ制御
- 誘導電動機
- VVVF
- 過渡制御

0系主電動機の形式・定格値・実測特性は一次資料未確認のため追加していない。

## 次に行うこと

Topic 02の解説画像PowerPointを作成する。

速度―トルク、速度―出力、電流―速度の3特性を式と対応付ける。一次4問＋二次1問の固定EXAM_ALIGNMENTを超えて、チョッパ、誘導機、VVVF、過渡制御を追加しない。

PowerPoint完成後も `completed` にはしない。完成後独立再解答、最終QAが残る。
