# Topic 16 完成後独立再解答 ブラインドゲート

更新日: 2026-09-18

## 判定

`BLIND_REANSWER_READY / IN_PROGRESS`

固定EXAM_ALIGNMENT、教材成果物、問題・正答は変更しない。

## この記録の目的

完成後独立再解答では、保存済みの制作前正答・公式正答を先に見ず、完成教材だけで固定4問・8答案要素を解く必要がある。

主sourceには制作前独立再解答の個別数値解・導出が保存されているため、独立再解答を行うrunではその区間を先読み対象から除外する。制作前の `*_exam_reanswer.md` と `*_exam_reanswer_lock.md` も、完成後独立答案を固定するまでは参照しない。

このゲート整備では固定EXAM_ALIGNMENT、教材本文、練習問題、PDF、PowerPoint、問題・正答を変更しない。完成後独立再解答そのものは次工程とする。

## 固定品質ゲート対象

- R6 一次「法規」問4 (1)〜(2)
- R4 二次「電力・管理」問1のピーク／オフピーク出力2値
- H23 二次「電力・管理」問6 (1)a、(1)b、(2)
- H22 二次「電力・管理」問3 (4)

固定対象は4問・8答案要素のまま。追加・差替えをしない。

## 次runの必須手順

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、本ブラインドゲートを読む。
2. 完成後独立答案を固定する前は、主source、制作前`*_exam_reanswer.md`、制作前`*_exam_reanswer_lock.md`を取得しない。
3. 完成教材として、解説PDF・練習PDF・PowerPointおよび保存済み正答を含まないQA記録だけを参照する。
4. 公式問題は問題文だけを取得し、公式解答・保存済み正答を先に見ない。
5. 固定4問・8答案要素を完成教材だけで独立再解答し、各答案の途中式・根拠を先に記録する。
6. 独立答案を固定した後に公式解答と照合する。
7. 教材外知識で補完した答案要素が1件でもあればFAILとし、固定範囲内の不足だけを最小補強する。
8. `8 / 8 PASS`でもTopic 16はまだcompletedにせず、次工程を最終QAとする。

## ブラインド中に参照してよい完成教材

- `16_numerical_differentiation_integration_explanation.pdf`
- `16_numerical_differentiation_integration_practice.pdf`
- `16_numerical_differentiation_integration_images.pptx`
- `16_numerical_differentiation_integration_explanation_qa.md`
- `16_numerical_differentiation_integration_practice_qa.md`
- `16_numerical_differentiation_integration_powerpoint_qa.md`

主sourceと制作前再解答2ファイルは、完成後独立答案を固定するまで参照不可とする。

## 仕様境界

- 差分、数値微分、台形則、Simpson則の基本、誤差、刻み幅、速度データから加速度、電力データから電力量の範囲に限定する。
- Topic 17の常微分方程式の数値解法を追加しない。
- Topic 18の非線形方程式・反復計算を追加しない。
- Topic 19の最適化を追加しない。
- 高次の数値微分公式・高次Newton-Cotes公式を体系追加しない。
- スプライン補間・有限要素法等を追加しない。
- 第一種・第三種過去問で品質ゲート件数を水増ししない。
- 未確認の新幹線実車データを追加しない。

## ブラインド整合性記録

2026-09-18の実行では、完成後独立再解答を確定する前に主sourceが取得され、制作前独立再解答の個別数値解・公式照合済み結果を視認したため、この実行を完成後独立再解答として数えない。

- 固定4問・8答案要素の完成後答案はこの実行では記録しない。
- 公式解答照合結果を新規判定へ使用しない。
- 固定EXAM_ALIGNMENT・教材成果物・問題・正答は変更しない。
- Topic 16の完成数は `15 / 20` のままとする。
- 判定は `BLIND_REANSWER_READY / IN_PROGRESS` とし、次回は保存済み正答を含むファイルを取得せずに独立再解答を行う。
