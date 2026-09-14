# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-14

## 現在地

Topic 01 `0系の主変圧器を等価回路で解剖する`、Topic 02 `0系の直流主電動機はどんな特性だった？`、Topic 03 `0系を210km/hまで加速させる`、Topic 04 `200系のサイリスタ制御を計算する`、Topic 05 `300系の誘導電動機を等価回路で解く`、Topic 06 `誘導電動機の最大トルクはどこで出る？` は最終QAまでPASSし、`completed`。

完成数: `6 / 22`

active topic: `07 300系のPWMコンバータは何をしている？`

current status: `topic_06_completed`

## Topic 06 最終結果

固定EXAM_ALIGNMENT:
- R07 一次 機械 問2: (1)〜(5)
- H25 一次 機械 問1: (1)
- R07 二次 機械・制御 問2: (1),(3)
- R03 二次 機械・制御 問1: (1)〜(6)
- R02 二次 機械・制御 問1: (1)〜(4)
- H23 二次 機械・制御 問1: (1),(2)

一次2問＋二次記述4問、計6問・20小問。制作前独立検証 `20 / 20 PASS`、完成後独立再解答 `20 / 20 PASS`。

必須成果物、計算プログラム、SPEC指定4比較グラフ、計算QA、source進捗整合、仕様境界を再確認し、最終QAは `PASS / completed`。

固定範囲外として、二重かご形誘導電動機の構造詳細、逆相制動・プラッギング、等価回路定数測定、Topic 07以降のPWMコンバータ等をTopic 06へ追加していない。未確認300系実車値も使用していない。

Topic 06 source:
`topics/06_induction_motor_maximum_torque/06_induction_motor_maximum_torque.md`

最終QA記録:
`topics/06_induction_motor_maximum_torque/06_induction_motor_maximum_torque_final_qa.md`

## Topic 07 固定範囲

`SPEC.md` 第7章に従い、制作前EXAM_ALIGNMENTでは次を対象にする。

- PWMコンバータ
- スイッチング
- DCリンク電圧
- 交流側電流
- 力率制御
- 回生
- 高調波
- リアクトル
- 交流電圧
- PWM電圧
- 交流側電流波形
- DCリンク電圧波形

過去問から逆算して必要説明を確定するまで、上記以外の論点を勝手に追加しない。

## 次に行うこと

Topic 07「300系のPWMコンバータは何をしている？」の制作前EXAM_ALIGNMENTを行う。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` を正本とし、二種一次・二次を合わせて原則5問以上、二次対象論点で確認できる場合は記述式を最低1問含める。公式問題・公式解答を正本として固定範囲へ直接対応する小問だけを品質ゲート対象にする。