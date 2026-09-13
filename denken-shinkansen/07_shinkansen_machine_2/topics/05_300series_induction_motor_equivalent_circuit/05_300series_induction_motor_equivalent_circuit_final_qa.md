# Topic 05 最終QA記録

対象: `05 300系の誘導電動機を等価回路で解く`

実施日: 2026-09-14

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

前回唯一のFAILだったsource Markdown進捗記録は同期済みで、旧記録 `PDF・練習PDF・PowerPoint・完成後独立再解答は未実施` はGitHub正本から消えている。教材内容・過去問対応・成果物・表示QA・仕様境界を再確認し、全品質ゲートをPASSとする。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

- source Markdown: PASS (`8399b476cabdab54cca0b18463400d8dc3ee70fd`)
- 解説PDF: PASS (`78a676bfd35455bf83a58ae7e0bd508fa6cbd06e`)
- 練習PDF: PASS (`4d1a90eda8116debb6719d020c8d3c788e843251`)
- 解説画像PowerPoint: PASS (`be6f27a9f0acb0d13f3226330c8e45ca3976fe25`)
- 完成後独立再解答記録: PASS (`1ea341df19520b9fb03c2786ee503e37f8734f78`)

## EXAM_ALIGNMENT確認

固定対象は一次2問＋二次記述3問の計5問、ゲート対象17小問。

- R07 一次 機械 問2: (1)
- H30 一次 機械 問1: (1)〜(5)
- R07 二次 機械・制御 問2: (1)
- R04 二次 機械・制御 問2: (1)〜(5)
- H28 二次 機械・制御 問1: (1)〜(5)

二種の一次・二次を合わせて5問以上、かつ二次記述問題を含める品質ゲートを満たす。混合問題はTopic 05固定範囲へ直接対応する小問だけをゲート対象としている。

## 完成後独立再解答

`05_300series_induction_motor_equivalent_circuit_independent_reanswer.md` を再確認した。

- 一次試験: 6 / 6 PASS
- 二次試験: 11 / 11 PASS
- 合計: 17 / 17 PASS
- 教材外知識による補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

完成教材内の相電圧換算、同期速度・滑り、L形等価回路、複素電流、電力フロー、トルク、効率の式と解法だけで公式解答・標準解答へ到達している。

## 成果物・表示QA

既存の制作QA記録を再確認した。

- 解説PDF: A4縦4ページ、全ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦5ページ、一次型10問＋二次記述5問、全ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・4スライド、表示QA・overflow・ZIP整合性 PASS

## 仕様境界確認

本テーマへ追加していない範囲:

- R08一次問2の抵抗測定・無負荷試験・拘束試験による等価回路定数測定法
- Topic 06の最大トルク条件、停動トルク、比例推移、二次抵抗変更時の特性
- R04二次問2(6)の入力力率
- T形等価回路のテブナン変換・始動トルク
- 未確認300系実車の回路定数・電流・損失等

## 最終判定

- 必須成果物: PASS
- 一次2問＋二次記述3問の過去問対応: PASS
- ゲート対象17小問の教材反映: PASS
- 完成後独立再解答: 17 / 17 PASS
- 既実施表示QA: PASS
- source Markdown進捗記録の整合: PASS
- 仕様外論点の追加なし: PASS
- 未確認実車値の真値化なし: PASS

判定: `PASS / completed`。

次はTopic 06「誘導電動機の最大トルクはどこで出る？」の制作前EXAM_ALIGNMENT。