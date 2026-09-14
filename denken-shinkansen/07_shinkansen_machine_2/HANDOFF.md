# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-14

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く` は最終QAまでPASSし、`completed`。

完成数: `5 / 22`

active topic: `06 誘導電動機の最大トルクはどこで出る？`

current status: `topic_06_independent_reanswer_complete`

## Topic 06 固定範囲

SPECの第6章に従い、次だけを扱う。

- トルク式
- すべり
- 最大トルク条件
- 比例推移
- 二次抵抗
- 電圧変化
- 周波数変化
- 速度―トルク特性
- 二次抵抗変更時の比較
- 電圧変更時の比較
- 周波数変更時の比較

Topic 07以降のPWMコンバータ、力率制御、インバータ、高調波等は追加しない。

## Topic 06 固定EXAM_ALIGNMENT

source Markdown:
`topics/06_induction_motor_maximum_torque/06_induction_motor_maximum_torque.md`

固定過去問:
- R07 一次 機械 問2: (1)〜(5)
- H25 一次 機械 問1: (1)
- R07 二次 機械・制御 問2: (1),(3)
- R03 二次 機械・制御 問1: (1)〜(6)
- R02 二次 機械・制御 問1: (1)〜(4)
- H23 二次 機械・制御 問1: (1),(2)

一次2問＋二次記述4問、計6問。ゲート対象20小問。制作前独立検証は `20 / 20 PASS`。

固定範囲外として除外済み:
- H25一次問1(2)〜(5): 二重かご形誘導電動機の構造詳細
- R07二次問2(2): 損失計算
- R02二次問1(5)〜(7): 回転磁界相互の相対速度詳細
- H23二次問1(3),(4): 逆相制動・プラッギング
- R08一次問2: 抵抗測定・無負荷試験・拘束試験による等価回路定数測定
- Topic 07以降のPWMコンバータ・力率制御・インバータ・高調波等

参考教材は e-sysnet「三相誘導電動機の理論と等価回路」と電験王2の該当過去問解説を確認。数式・正答は公式問題・公式解答を正本として照合済み。

周波数変更比較では、同期速度だけでなく `X=2πfL` によりリアクタンスも変わるため、電圧・抵抗・インダクタンスの固定条件を明記し、暗黙にリアクタンス一定とはしない。

## Topic 06 完成済み成果物

- source Markdown: `topics/06_induction_motor_maximum_torque/06_induction_motor_maximum_torque.md`
- 解説PDF: `06_induction_motor_maximum_torque_explanation.pdf`
- 練習PDF: `06_induction_motor_maximum_torque_practice.pdf`
- 解説画像PowerPoint: `06_induction_motor_maximum_torque_images.pptx`
- 計算プログラム: `06_induction_motor_maximum_torque_calc.py`
- 速度―トルク特性: `06_speed_torque.svg`
- 二次抵抗変更比較: `06_rotor_resistance_comparison.svg`
- 電圧変更比較: `06_voltage_comparison.svg`
- 周波数変更比較: `06_frequency_comparison.svg`
- 計算QA: `06_induction_motor_maximum_torque_calculation_qa.md`
- 完成後独立再解答: `06_induction_motor_maximum_torque_independent_reanswer.md`

計算プログラム・4比較グラフはPython構文・数値assert・SVG XML parse・ローカル表示QAをPASS済み。未確認300系実車値は使用していない。

## Topic 06 今回完了した工程

固定6問・20小問を完成教材だけで独立再解答し、公式解答・標準解答と照合した。

- R07一次 機械 問2: 5 / 5 PASS
- H25一次 機械 問1(1): 1 / 1 PASS
- R07二次 機械・制御 問2(1),(3): 2 / 2 PASS
- R03二次 機械・制御 問1(1)〜(6): 6 / 6 PASS
- R02二次 機械・制御 問1(1)〜(4): 4 / 4 PASS
- H23二次 機械・制御 問1(1),(2): 2 / 2 PASS

合計: `20 / 20 PASS`

教材外知識による補完: 0件

固定範囲外論点の追加: 0件

未確認300系実車値の使用: 0件

## 次に行うこと

Topic 06の最終QAを実施する。必須成果物、EXAM_ALIGNMENT、完成後独立再解答 `20 / 20 PASS`、表示QA、source進捗記録、固定範囲境界を確認し、すべてPASSの場合のみ `completed` とする。