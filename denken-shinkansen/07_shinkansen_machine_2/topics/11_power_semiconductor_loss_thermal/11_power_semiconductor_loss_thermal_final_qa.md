# Topic 11 最終QA記録

対象: `11 GTO→IGBT→SiCの損失を計算する`

再判定日: 2026-09-16

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

前回 `NEEDS_REVISION` の原因だった進捗記録2件は同期済み。技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、練習問題QA、PDF/PPTX表示QA、固定範囲境界、進捗記録整合を再確認し、全品質ゲートPASSと判定する。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`9199b41b1766a321f8b491c34aed21d7908d9e07`)
- 解説PDF: PASS (`56aa9a83622b749935a24d4664727fe6e0cce208`)
- 練習source: PASS (`21fdb16862514c3d6761e6f3e712d58eb74b941d`)
- 練習PDF: PASS (`b0e571eb9e18b7944e7cf4cd3c305ec536a87b0e`)
- 解説画像PowerPoint: PASS (`4ac2a83ea8eaa732508dd798552d5179a0899c8b`)
- PowerPoint QA記録: PASS (`3ecdd20d01c9e17764b07056db860279028a1646`)

## EXAM_ALIGNMENT

固定対象は一次4問＋二次記述1問、計5問・15答案要素。

- R07 一次 機械 問4: (3),(5)
- R06 一次 機械 問2: (4)
- R02 一次 機械 問2: (3)〜(5)
- R04 一次 機械 問4: (1)〜(5)
- H22 二次 機械・制御 問3: (1),(2)

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。固定範囲外の小問を件数合わせで追加していない。

## 完成後独立再解答

- 固定5問・15答案要素: `15 / 15 PASS`
- R07 一次 機械 問4: `2 / 2 PASS`
- R06 一次 機械 問2: `1 / 1 PASS`
- R02 一次 機械 問2: `3 / 3 PASS`
- R04 一次 機械 問4: `5 / 5 PASS`
- H22 二次 機械・制御 問3: `4 / 4 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- 未確認実車値追加: `0件`

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問、計15問
- 独立計算・論理QA: `15 / 15 PASS`
- 一次問題の正答一意性: `10 / 10 PASS`
- 固定5問・15答案要素への接続: `15 / 15 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF: A4縦7ページ、200 dpi表示QA `7 / 7 PASS`、文字抽出QA PASS、主要数値再計算PASS
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow 0件、ZIP整合性PASS

## 前回FAILの再確認

前回FAILだった進捗記録2件は解消済み。

1. `11_power_semiconductor_loss_thermal_practice.md` 末尾 `## 次工程`
   - 練習PDF・PowerPoint・完成後独立再解答完了後の現在地へ同期済み。
   - 現在は「次は最終QAを再実施する」と記録されている。
2. PowerPoint SHA-256記録
   - 現行PowerPoint Git blob SHA: `4ac2a83ea8eaa732508dd798552d5179a0899c8b`
   - PowerPoint QA記録 SHA-256: `a0440ffe6243ee6920a4e9102ead6d4a551fbdc4d2e2f937735d7ab20454d37e`
   - STATUS/HANDOFFも同じSHA-256へ同期済み。

教材本文・固定過去問・練習問題・PDF/PPTXそのものは変更していない。

## 仕様境界

追加していない範囲:

- Topic 12の極数・同期速度・出力密度
- Topic 13〜14の同期機・フェーザ・電力角特性
- Topic 16の蓄電池・DCリンク給電
- Topic 17以降の制御論点
- 未確認の実車半導体定格・損失・温度・冷却性能
- 非公式転載だけで確認した古いGTO問題

判定: `PASS`。

## 最終判定

- 必須成果物: PASS
- 一次4問＋二次記述1問・15答案要素の過去問対応: PASS
- 完成後独立再解答: `15 / 15 PASS`
- 練習・PDF/PPTX QA: PASS
- 固定範囲境界: PASS
- 進捗記録整合: PASS

判定: `PASS / completed`。

完成数を `11 / 22` とし、次はTopic 12 `N700Sの6極モーターを設計側から見る` の制作前EXAM_ALIGNMENTへ進む。