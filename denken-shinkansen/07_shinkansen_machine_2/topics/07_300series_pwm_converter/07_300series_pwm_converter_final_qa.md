# Topic 07 最終QA記録

対象: `07 300系のPWMコンバータは何をしている？`

実施日: 2026-09-15

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で確認し、新しい仕様は追加していない。

固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、SPEC指定4波形QA、仕様境界はPASSしている。一方、source Markdownの進捗記録が実在成果物と不整合のため、この時点では `completed` にしない。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`4c8b703527a7d56f3a63609531ed334d1b08d189`)
- 解説PDF: PASS (`e47219e6719a5e5d1f2d1338a5793bb393eb7a40`)
- 練習PDF: PASS (`b374f0c3351ad819b41880a01f8ee8a756821e72`)
- 解説画像PowerPoint: PASS (`34aeddf2249415f76b47bddc629fa21487ce56a1`)
- 波形生成プログラム: PASS (`e5f24340d170cd35d256f0b28e57284981812aaa`)
- SPEC指定4波形QA: PASS (`24615d18676b338fe4dd9fbe8f28840e63035ed8`)
- 交流電圧 SVG: PASS (`7c7fc713c79fd0586c6831ead3fac42ce60fe702`)
- 交流側電流 SVG: PASS (`1161c7489837c34d67630216c9c32c5b7d22b788`)
- DCリンク電圧 SVG: PASS (`87d90d9b1277cb5222be75cc7650e47dbb651264`)
- PWM電圧 SVG: PASS
- 完成後独立再解答記録: PASS (`b7f3988579173c6f38a8b55fd26d319704546d7a`)

## EXAM_ALIGNMENT

固定対象は一次2問＋二次記述3問、計5問・17小問。

- H22 一次 機械 問3: (1)〜(5)
- H27 一次 機械 問3: (1)〜(3)
- H24 二次 機械・制御 問3: (1)〜(4)
- R01 二次 機械・制御 問3: (1)〜(3)
- R05 二次 機械・制御 問3: (1),(2)

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。混合問題はTopic 07固定範囲へ直接対応する小問だけをゲート対象としている。

## 完成後独立再解答

`07_300series_pwm_converter_independent_reanswer.md` の結果を再確認した。

- H22一次機械問3: `5 / 5 PASS`
- H27一次機械問3: `3 / 3 PASS`
- H24二次機械・制御問3: `4 / 4 PASS`
- R01二次機械・制御問3: `3 / 3 PASS`
- R05二次機械・制御問3: `2 / 2 PASS`
- 合計: `17 / 17 PASS`
- 教材外知識による補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

完成教材内の正弦波PWM・変調率、PWM基本波電圧とDCリンク電圧、系統連系リアクトル、力率1、有効・無効電流、回生、高調波の説明だけで公式解答・標準解答へ到達している。

## SPEC指定4波形QA

`07_pwm_converter_waveforms_qa.md` を再確認した。

- 交流電圧: PASS
- PWM電圧: PASS
- 交流側電流: PASS
- DCリンク電圧: PASS
- 数値・論理QA: PASS
- SVG XML parse: `4 / 4 PASS`
- 表示QA: `4 / 4 PASS`
- 描画用仮定値と300系実車値の区別: PASS

## source進捗整合

FAIL。

source Markdownには、実在する完成後独立再解答記録と矛盾する旧進捗が残っている。

1. 冒頭「状態」に `完成後独立再解答と最終QAは未実施` とあるが、完成後独立再解答は実施済みで `17 / 17 PASS`。
2. 末尾「次工程」に `次は固定5問・17小問を完成教材だけで独立再解答し、結果を記録する` とあるが、この工程も完了済み。

教材本文、EXAM_ALIGNMENT、数式、例題、成果物自体の不合格ではなく、進捗記録だけの不整合である。

## 仕様境界

追加していない範囲:

- H22一次問3のMPPTアルゴリズム詳細
- H27一次問3(4),(5)の電力貯蔵装置種類・設置条件
- R01二次問3(4)〜(6)の昇圧コンバータ連続電流・リプル設計
- R05二次問3(3)〜(5)の能動フィルタ補償電流設計
- Topic 08以降のVVVFインバータ詳細、ベクトル制御、電流制御器設計
- 未確認の300系実車回路定数・スイッチング周波数・DCリンク電圧・リプル量

## 最終判定

- 必須成果物: PASS
- 一次2問＋二次記述3問の過去問対応: PASS
- ゲート対象17小問の教材反映: PASS
- 完成後独立再解答: `17 / 17 PASS`
- SPEC指定4波形QA: PASS
- 仕様外論点の追加なし: PASS
- 未確認実車値の真値化なし: PASS
- source Markdown進捗記録の整合: FAIL

判定: `NEEDS_REVISION / IN_PROGRESS`。

次はsource Markdownの旧進捗記録2箇所を、完成後独立再解答済み・最終QA `NEEDS_REVISION` の現在地へ同期する。教材本文、固定EXAM_ALIGNMENT、数式、例題、成果物は変更しない。
