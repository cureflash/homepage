# Topic 06 最終QA記録

対象: `06 誘導電動機の最大トルクはどこで出る？`

実施日: 2026-09-14

## 判定

`NEEDS_REVISION`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で確認し、新しい仕様は追加していない。

教材内容・固定EXAM_ALIGNMENT・成果物実在・計算QA・完成後独立再解答はPASSしている。ただし source Markdown 冒頭の進捗記録が現在地と不整合で、`解説PDF・練習PDF・PowerPoint・計算プログラム／比較グラフ・完成後独立再解答は未着手` と残っている。GitHub正本ではそれら成果物がすべて実在するため、進捗記録を同期するまで `completed` にはしない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

- source Markdown: PASS (`c09e738f03c749b1408b8c3840036a9b3fa6b0eb`)
- 解説PDF: PASS (`a4bb4ad732ef4d8075a4ca8528f70bf3f712acd5`)
- 練習PDF: PASS (`24d7edafd633fdc2a0e1ba09ba264979f5287461`)
- 解説画像PowerPoint: PASS (`6415ceb10f3950e1a3f8c78d92342f76d932c194`)
- 計算プログラム: PASS (`999dfc8fa5890bf725a92e3744729bb0df53236e`)
- 計算QA: PASS (`8ac56a45c695d47067081875a1d3ef1a54362034`)
- 速度―トルク特性 SVG: PASS (`ea242967bcde70a519aee0bb0dcc37a4c0348162`)
- 二次抵抗比較 SVG: PASS (`a2d8ef9e37db5619f85998cc03e57f4611f7c732`)
- 電圧比較 SVG: PASS
- 周波数比較 SVG: PASS (`952e07e401039c26743304b6f687a46967669012`)
- 完成後独立再解答記録: PASS (`5bfea17cd2d37df23c68fe7d59fe06a57d790130`)

## EXAM_ALIGNMENT確認

固定対象は一次2問＋二次記述4問の計6問、ゲート対象20小問。

- R07 一次 機械 問2: (1)〜(5)
- H25 一次 機械 問1: (1)
- R07 二次 機械・制御 問2: (1),(3)
- R03 二次 機械・制御 問1: (1)〜(6)
- R02 二次 機械・制御 問1: (1)〜(4)
- H23 二次 機械・制御 問1: (1),(2)

二種の一次・二次を合わせて5問以上、かつ二次記述問題を含める品質ゲートを満たす。混合問題はTopic 06固定範囲へ直接対応する小問だけをゲート対象としている。

## 完成後独立再解答

`06_induction_motor_maximum_torque_independent_reanswer.md` を確認した。

- 一次試験: 6 / 6 PASS
- 二次試験: 14 / 14 PASS
- 合計: 20 / 20 PASS
- 教材外知識による補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

完成教材内の同期速度・すべり・二次周波数、トルク式、最大トルク条件、比例推移、電圧・周波数変更の式と解法だけで公式解答・標準解答へ到達している。

## 計算・グラフQA

`06_induction_motor_maximum_torque_calculation_qa.md` を確認した。

- Python計算条件・数値QA: PASS
- SPEC指定4比較グラフ: PASS
- SVG XML parse: PASS
- SVGローカルレンダリング: PASS
- 周波数変更比較で `X=2πfL` を反映: PASS
- 未確認300系実車値の使用: 0件

## 仕様境界確認

本テーマへ追加していない範囲:

- H25一次問1(2)〜(5)の二重かご形誘導電動機の構造詳細
- R07二次問2(2)の損失計算
- R02二次問1(5)〜(7)の回転磁界相互の相対速度詳細
- H23二次問1(3),(4)の逆相制動・プラッギング
- R08一次問2の等価回路定数測定
- Topic 07以降のPWMコンバータ・力率制御・インバータ・高調波
- 未確認300系実車値

## 不整合

source Markdown 冒頭の状態欄が旧進捗のまま残っている。

旧記録:
`解説PDF・練習PDF・PowerPoint・計算プログラム／比較グラフ・完成後独立再解答は未着手。`

実際にはGitHub正本に全成果物が存在し、完成後独立再解答も `20 / 20 PASS` 済みである。

## 最終判定

- 必須成果物: PASS
- 一次2問＋二次記述4問の過去問対応: PASS
- ゲート対象20小問の教材反映: PASS
- 完成後独立再解答: 20 / 20 PASS
- 計算・指定比較グラフQA: PASS
- 仕様外論点の追加なし: PASS
- 未確認実車値の真値化なし: PASS
- source Markdown進捗記録の整合: FAIL

判定: `NEEDS_REVISION`。

次は source Markdown の進捗記録だけを現在地へ同期し、その後に最終QAを再実施する。