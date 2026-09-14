# Topic 06 最終QA記録

対象: `06 誘導電動機の最大トルクはどこで出る？`

実施日: 2026-09-14

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

前回 `NEEDS_REVISION` の唯一の理由だった source Markdown の旧進捗記録は同期済み。今回の再QAでは、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、計算・比較グラフQA、source進捗整合、仕様境界をすべてPASSした。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`5351d4ef0c3b9443d5dc5c23487f926716dd8f60`)
- 解説PDF: PASS (`a4bb4ad732ef4d8075a4ca8528f70bf3f712acd5`)
- 練習PDF: PASS (`24d7edafd633fdc2a0e1ba09ba264979f5287461`)
- 解説画像PowerPoint: PASS (`6415ceb10f3950e1a3f8c78d92342f76d932c194`)
- 計算プログラム: PASS (`999dfc8fa5890bf725a92e3744729bb0df53236e`)
- 計算QA: PASS (`8ac56a45c695d47067081875a1d3ef1a54362034`)
- 速度―トルク特性 SVG: PASS
- 二次抵抗比較 SVG: PASS (`a2d8ef9e37db5619f85998cc03e57f4611f7c732`)
- 電圧比較 SVG: PASS
- 周波数比較 SVG: PASS (`952e07e401039c26743304b6f687a46967669012`)
- 完成後独立再解答記録: PASS (`5bfea17cd2d37df23c68fe7d59fe06a57d790130`)

## EXAM_ALIGNMENT

固定対象は一次2問＋二次記述4問、計6問・20小問。

- R07 一次 機械 問2: (1)〜(5)
- H25 一次 機械 問1: (1)
- R07 二次 機械・制御 問2: (1),(3)
- R03 二次 機械・制御 問1: (1)〜(6)
- R02 二次 機械・制御 問1: (1)〜(4)
- H23 二次 機械・制御 問1: (1),(2)

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。混合問題はTopic 06固定範囲へ直接対応する小問だけをゲート対象としている。

## 完成後独立再解答

`06_induction_motor_maximum_torque_independent_reanswer.md` の結果を再確認した。

- 一次試験: 6 / 6 PASS
- 二次試験: 14 / 14 PASS
- 合計: 20 / 20 PASS
- 教材外知識による補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

完成教材内の同期速度・すべり・二次周波数、トルク式、最大トルク条件、比例推移、電圧・周波数変更だけで公式解答・標準解答へ到達している。

## 計算・比較グラフQA

`06_induction_motor_maximum_torque_calculation_qa.md` を再確認した。

- Python計算条件・数値QA: PASS
- SPEC指定4比較グラフ: PASS
- SVG XML parse: PASS
- SVGローカルレンダリング: PASS
- 周波数変更比較で `X=2πfL` を反映: PASS
- 未確認300系実車値の使用: 0件

## source進捗整合

前回FAILだった旧記録は解消済み。

現在のsource Markdownは、解説PDF、練習PDF、PowerPoint、計算プログラム／4比較グラフ、完成後独立再解答、最終QAまで完了した状態へ同期し、次工程をTopic 07の制作前EXAM_ALIGNMENTとしている。

## 仕様境界

追加していない範囲:

- H25一次問1(2)〜(5)の二重かご形誘導電動機の構造詳細
- R07二次問2(2)の損失計算
- R02二次問1(5)〜(7)の回転磁界相互の相対速度詳細
- H23二次問1(3),(4)の逆相制動・プラッギング
- R08一次問2の等価回路定数測定
- Topic 07以降のPWMコンバータ・力率制御・インバータ・高調波
- 未確認300系実車値

## 最終判定

- 必須成果物: PASS
- 一次2問＋二次記述4問の過去問対応: PASS
- ゲート対象20小問の教材反映: PASS
- 完成後独立再解答: `20 / 20 PASS`
- 計算・指定比較グラフQA: PASS
- source Markdown進捗記録の整合: PASS
- 仕様外論点の追加なし: PASS
- 未確認実車値の真値化なし: PASS

判定: `PASS / completed`。

次は Topic 07「300系のPWMコンバータは何をしている？」の制作前EXAM_ALIGNMENT。