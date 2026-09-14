# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-14

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く` は最終QAまでPASSし、`completed`。

完成数: `5 / 22`

active topic: `06 誘導電動機の最大トルクはどこで出る？`

current status: `topic_06_final_qa_needs_revision`

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
- 最終QA記録: `06_induction_motor_maximum_torque_final_qa.md`

計算プログラム・4比較グラフはPython構文・数値assert・SVG XML parse・ローカル表示QAをPASS済み。未確認300系実車値は使用していない。

完成後独立再解答は固定6問・20小問すべて `20 / 20 PASS`。教材外知識による補完、固定範囲外論点の追加、未確認300系実車値の使用はいずれも0件。

## Topic 06 今回完了した工程

最終QAを実施した。

PASS:
- 必須成果物の実在
- 一次2問＋二次記述4問、計6問・20小問の固定EXAM_ALIGNMENT
- 完成後独立再解答 `20 / 20 PASS`
- 計算プログラム・SPEC指定4比較グラフQA
- 仕様境界
- 未確認実車値の真値化なし

FAIL:
- source Markdown冒頭の進捗記録が旧状態のまま残存
- 現在も `解説PDF・練習PDF・PowerPoint・計算プログラム／比較グラフ・完成後独立再解答は未着手` と記載されている

このため最終判定は `NEEDS_REVISION`。Topic 06はまだ `completed` にしない。

## 次に行うこと

source Markdownの進捗記録だけを現在地へ同期する。教材本文、固定EXAM_ALIGNMENT、過去問選定、数式、成果物は変更しない。同期後に最終QAを再実施する。