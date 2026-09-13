# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-14

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く` は最終QAまでPASSし、`completed`。

完成数: `5 / 22`

active topic: `06 誘導電動機の最大トルクはどこで出る？`

current status: `topic_05_completed`

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

## 次に行うこと

Topic 06の制作前EXAM_ALIGNMENTを実施する。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`に従い、公式過去問を直近年度優先で一次・二次合わせ原則5問以上調査する。二次試験で直接対応する記述問題が確認できる場合は最低1問含め、混合問題ではTopic 06固定範囲へ直接対応する小問だけを品質ゲート対象とする。参考教材を複数系統確認し、source Markdownへ固定EXAM_ALIGNMENTと制作前独立検証を記録する。