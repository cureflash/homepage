# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地
Topic 01〜09は最終QAまで `PASS / completed`。

完成数: `9 / 22`

active topic: `10 新幹線はモーターを発電機にして止まる`

current status: `topic_09_completed`

## Topic 09 固定EXAM_ALIGNMENT
固定過去問:
- R02 一次 機械 問3: (1)〜(5)
- H26 一次 機械 問5: (3)〜(5)
- H25 一次 機械 問3: (3),(4)
- R04 二次 機械・制御 問3: (6)
- R02 二次 機械・制御 問1: (1)〜(7)

一次3問＋二次記述2問、計5問。ゲート対象18小問。制作前独立検証 `18 / 18 PASS`、完成後独立再解答 `18 / 18 PASS`。

固定範囲:
- V/f制御
- 磁束
- 定トルク領域
- 弱め磁束領域
- 定出力領域
- 速度制御
- ベクトル制御の概念
- d軸・q軸の概念

境界:
- ベクトル制御は概念説明中心。厳密な座標変換は必須にしない。
- Topic 10の回生・四象限運転は持ち込まない。
- 厳密なPark/Clarke変換、電流制御器設計、センサレス推定器設計は追加しない。
- 未確認300系実車制御値を真値として追加しない。

## Topic 09 完了済み工程
- 制作前EXAM_ALIGNMENT: `18 / 18 PASS`
- 解説本文＋3段階例題: 完成
- 固定18小問の本文マッピング: `18 / 18`
- 解説PDF: `09_induction_motor_control_explanation.pdf`
- 解説PDF QA: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習問題source: `09_induction_motor_control_practice.md`
- 一次試験型10問＋二次試験型5問、全15問に完全解説
- 練習問題QA: `15 / 15 PASS`、一次正答一意性 `10 / 10 PASS`
- 固定5問・18小問の練習問題マッピング: `18 / 18 PASS`
- 練習PDF: `09_induction_motor_control_practice.pdf`
- 練習PDF QA: A4縦6ページ、200 dpi表示 `6 / 6 PASS`、文字抽出PASS、主要計算値再検算PASS
- 解説画像PowerPoint: `09_induction_motor_control_images.pptx`
- PowerPoint QA: 16:9・4枚、200 dpi表示 `4 / 4 PASS`、overflow 0件、ZIP整合性PASS
- 完成後独立再解答: `18 / 18 PASS`
- 教材外知識補完: 0件
- 固定範囲外追加: 0件
- 未確認300系実車制御値追加: 0件
- 練習source旧進捗記録の同期: 完了
- 最終QA再判定: `PASS / completed`
- 最終QA記録: `topics/09_induction_motor_control/09_induction_motor_control_final_qa.md`

## 完成後独立再解答結果
- R02 一次 機械 問3 (1)〜(5): `(ワ, ハ, ル, ロ, ト)`、`5 / 5 PASS`
- H26 一次 機械 問5 (3)〜(5): `(カ, ヲ, ニ)`、`3 / 3 PASS`
- H25 一次 機械 問3 (3),(4): `(ニ, ル)`、`2 / 2 PASS`
- R04 二次 機械・制御 問3 (6): 50 Hz→25 Hzで信号波振幅 `0.9→0.45`、周期2倍、`1 / 1 PASS`
- R02 二次 機械・制御 問1 (1)〜(7): `1800, 1710, 90 min^-1, 3 Hz, 90, 1800, 0 min^-1`、`7 / 7 PASS`

## Topic 09 成果物
解説source:
- `topics/09_induction_motor_control/09_induction_motor_control.md`

解説PDF:
- `topics/09_induction_motor_control/09_induction_motor_control_explanation.pdf`

練習問題source:
- `topics/09_induction_motor_control/09_induction_motor_control_practice.md`

練習PDF:
- `topics/09_induction_motor_control/09_induction_motor_control_practice.pdf`

解説画像PowerPoint:
- `topics/09_induction_motor_control/09_induction_motor_control_images.pptx`

最終QA:
- `topics/09_induction_motor_control/09_induction_motor_control_final_qa.md`

## Topic 09 最終QA結果
判定: `PASS / completed`

PASS:
- 必須成果物5件の存在
- 固定一次3問＋二次2問・18小問のEXAM_ALIGNMENT
- 完成後独立再解答 `18 / 18 PASS`
- 教材外知識補完 0件
- 解説PDF表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF表示QA `6 / 6 PASS`、文字抽出QA・主要計算再検算 PASS
- PowerPoint表示QA `4 / 4 PASS`、overflow 0件、ZIP整合性 PASS
- 前回唯一の進捗記録不整合解消
- Topic 10以降・厳密Park/Clarke変換・制御器設計・センサレス推定器設計・未確認300系実車値の混入なし

## 次に行うこと
Topic 10「新幹線はモーターを発電機にして止まる」の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`に従い、まず公式二種一次・二次過去問を調査し、固定範囲へ直接対応する問題だけを選定する。