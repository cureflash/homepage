# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-14

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く` は最終QAまでPASSし、`completed`。

完成数: `5 / 22`

active topic: `06 誘導電動機の最大トルクはどこで出る？`

current status: `topic_06_calculation_graphs_complete`

## Topic 05 完了記録

source Markdown:
`topics/05_300series_induction_motor_equivalent_circuit/05_300series_induction_motor_equivalent_circuit.md`

固定過去問:
- R07 一次 機械 問2: (1)
- H30 一次 機械 問1: (1)〜(5)
- R07 二次 機械・制御 問2: (1)
- R04 二次 機械・制御 問2: (1)〜(5)
- H28 二次 機械・制御 問1: (1)〜(5)

一次2問＋二次記述3問、計5問。ゲート対象17小問。完成後独立再解答は `17 / 17 PASS`。

必須成果物:
- source Markdown: 実在確認PASS
- 解説PDF: A4縦4ページ、表示QA・文字抽出QA PASS
- 練習PDF: A4縦5ページ、一次試験型10問＋二次記述5問、表示QA・文字抽出QA PASS
- 解説画像PowerPoint: 16:9・4スライド、表示QA・overflow・ZIP整合性 PASS
- 完成後独立再解答記録: `17 / 17 PASS`
- 最終QA記録: `PASS / completed`

前回最終QAで唯一FAILだったsource Markdownの旧進捗記録は同期済み。再QAで整合を確認し、Topic 05を完了とした。

Topic 05では次を追加していない。
- R08一次問2の抵抗測定・無負荷試験・拘束試験による等価回路定数測定法
- Topic 06の最大トルク条件、停動トルク、比例推移、二次抵抗変更時の特性
- R04二次問2(6)の入力力率
- T形等価回路のテブナン変換・始動トルク
- 未確認300系実車の回路定数・電流・損失等

## Topic 06 固定範囲

SPECの第6章に従い、次を扱う。

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

計算プログラム・グラフはSPECで明示された上記比較に必要な範囲とする。Topic 07以降のPWMコンバータ、力率制御、インバータ、高調波等は追加しない。

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

周波数変更比較では、同期速度だけでなく `X=2πfL` によりリアクタンスも変わるため、計算プログラムでは電圧・抵抗・インダクタンスの固定条件を明記し、暗黙にリアクタンス一定とはしない。

## Topic 06 今回完了した工程

計算プログラムとSPEC指定4比較グラフを完成し、GitHub正本へ反映した。

成果物:
- `topics/06_induction_motor_maximum_torque/06_induction_motor_maximum_torque_calc.py`
- `topics/06_induction_motor_maximum_torque/06_speed_torque.svg`
- `topics/06_induction_motor_maximum_torque/06_rotor_resistance_comparison.svg`
- `topics/06_induction_motor_maximum_torque/06_voltage_comparison.svg`
- `topics/06_induction_motor_maximum_torque/06_frequency_comparison.svg`
- `topics/06_induction_motor_maximum_torque/06_induction_motor_maximum_torque_calculation_qa.md`

確認内容:
- 教材本文§9.2・§9.3と同じ教材用仮定値を使用
- 50 Hz基準: `n_s=1500 min^-1`, `X=0.80 Ω`, `s_m=0.12127`, `T_m=372.79 N·m`
- 二次抵抗 `0.10→0.20 Ω`: `s_m` は2倍、最大トルク値は不変
- 電圧 `200→160 V`: 最大トルク比 `0.640` で `V^2` 則と一致
- 周波数 `50→60 Hz`: 電圧・抵抗・漏れインダクタンス固定、`X=0.80→0.96 Ω`、`n_s=1500→1800 min^-1`
- 60 Hz: `s_m=0.10198`, `T_m=269.61 N·m`
- Python構文・内蔵数値assert: PASS
- 4 SVG XML parse: PASS
- 4 SVG ローカルレンダリング: PASS
- 未確認300系実車値は使用していない
- 固定EXAM_ALIGNMENT 6問・20小問と制作前独立検証 `20 / 20 PASS` は変更していない
- 二重かご形詳細、損失計算、回転磁界相互詳細、逆相制動、Topic 07以降の論点は追加していない

## 次に行うこと

Topic 06の固定6問・20小問を、完成教材だけを使って独立再解答する。公式問題・公式解答と照合し、教材外知識で補完しない。