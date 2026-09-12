# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` は最終QAまでPASSし、`completed`。

完成数: `1 / 14`

active topic: `02 なぜ新幹線は25,000Vなのか`

## Topic 01 完成証跡

source Markdown:
`topics/01_train_power_basics/01_train_power_basics.md`

解説PDF:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

練習PDF:
`topics/01_train_power_basics/01_train_power_basics_practice.pdf`

解説画像PowerPoint:
`topics/01_train_power_basics/01_train_power_basics_images.pptx`

最終QA:
`topics/01_train_power_basics/01_train_power_basics_final_qa.md`

## Topic 01 最終QA結果

- 必須成果物4種: 実在確認PASS
- 三種公式過去問EXAM_ALIGNMENT: PASS（5問未満例外を適正適用）
- 練習PDF: 15問、基礎4・本試験標準8・複合応用3、全問五肢択一で仕様適合PASS
- 完成後独立再解答: 平成29年度理論問14 1 / 1 PASS
- 教材外知識補完: 0件
- 既実施レンダリングQAと現行blob: 一致確認PASS
- 実車値 / 仮定値の区別: PASS

現行blob SHA:

- source: `d7dfba38f846e5b5fc521e284a6ab88920a20ffa`
- 解説PDF: `6c55d4fe3568f8dfcc89e6145b9527bfc3613039`
- 練習PDF: `9f879195ea9966e243f9b3ab05d7f7d9f09836a1`
- PowerPoint: `cfaef5924b33e8b03dd2400cbcb98356c3e4f497`

## 次に行うこと

Topic 02 `なぜ新幹線は25,000Vなのか` の制作前EXAM_ALIGNMENTから開始する。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`に従い、本文作成より先に次を行う。

- 電気技術者試験センター公式過去問を直近年度優先で調査する
- 関連公式過去問を原則5問以上選定する
- 各問の要求知識、使用式、設問型、典型ミスを分解する
- 参考教材を複数系統確認する
- source MarkdownへEXAM_ALIGNMENTと教材で必要な説明を記録する

この制作前品質ゲートを終えるまで、Topic 02の解説本文には進まない。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する。
- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする。
- 実車の消費電力を推測で真値化しない。
- Topic 01で採用した教材用仮定 `10 MW / 25 kV` を実車値として扱わない。
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない。
