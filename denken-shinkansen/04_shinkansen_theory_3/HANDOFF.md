# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` は、制作前EXAM_ALIGNMENT確定、解説本文、解説PDF、練習PDF、解説画像PowerPointまで完了した。

source:
`topics/01_train_power_basics/01_train_power_basics.md`

解説PDF:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

練習PDF:
`topics/01_train_power_basics/01_train_power_basics_practice.pdf`

PowerPoint:
`topics/01_train_power_basics/01_train_power_basics_images.pptx`

現在は0/14テーマ完了。Topic 01はまだPASSではない。

確定済みの独立再解答ゲート対象は平成29年度理論問14の1問。上位仕様の5問未満例外を適用しており、Topic 05以降の回路網、後続Topicの静電気・電磁気・測定知識が必要な問題はゲート対象へ混在させない。

## 完成したPowerPoint

16:9・4枚。既存source Markdownで確定済みの範囲だけを使用した。

主な内容:
- 電圧・電流・抵抗・電力・電力量の関係
- `V=RI`, `P=VI`, `P=I²R`, `P=V²/R`, `W=Pt`
- SI接頭語 `M / k / m`、指数表記、単位統一、有効数字
- 標準解法手順
- SPEC許可の教材用仮定 `10 MW / 25 kV = 400 A`
- 平成29年度理論問14で要求される技能と頻出ミス

実車消費電力の真値とは扱わず、未確認の実車値も追加していない。全4枚をレンダリング確認し、文字欠け・重なり・クリッピング・ページ外はみ出しなし。overflow検査PASS。

## 次に行うこと

1. 完成教材だけを使い、平成29年度理論問14を保存済み正答を先に見ず独立再解答する。
2. 教材だけで根拠まで説明できることを確認する。
3. 最終QA PASS後にのみTopic 01をcompletedへ変更する。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する。
- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする。
- 実車の消費電力を推測で真値化しない。
- Topic 01ではSPECで明示された仮定 `10 MW / 25 kV` を教材例に使用できる。
- 出力と入力電力、電力と電力量を混同しない。
- Topic 05のキルヒホッフ・重ね合わせ・テブナン等をTopic 01へ先取りしない。
- 後続Topicの電磁気・静電気・測定知識が必要な問題を、Topic 01単独の完成ゲートへ採用しない。
- Topic 01の確定ゲート集合は平成29年度理論問14の1問。勝手に追加・差し替えしない。