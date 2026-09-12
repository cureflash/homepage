# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` は、制作前EXAM_ALIGNMENT確定、解説本文、解説PDF、練習PDF、解説画像PowerPoint、完成後の独立再解答まで完了した。

source:
`topics/01_train_power_basics/01_train_power_basics.md`

解説PDF:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

練習PDF:
`topics/01_train_power_basics/01_train_power_basics_practice.pdf`

PowerPoint:
`topics/01_train_power_basics/01_train_power_basics_images.pptx`

現在は0/14テーマ完了。Topic 01は最終QA未実施のため、まだcompletedではない。

確定済みの独立再解答ゲート対象は平成29年度理論問14の1問。上位仕様の5問未満例外を適用しており、Topic 05以降の回路網、後続Topicの静電気・電磁気・測定知識が必要な問題はゲート対象へ混在させない。

## 独立再解答結果

完成教材だけで平成29年度理論問14を再解答した。

- (1): 加算では最も粗い桁位置へ丸めるため `2.71 V` は誤り
- (2): 除算では有効数字2桁へ合わせるため `0.558 Ω` は誤り
- (3): `m=10^-3` より `5.5×10^-3 C` となり、`10^-6 C` は誤り
- (4): `10 mA=0.010 A` なので数値は0.11だが、右辺単位 `m` は誤り
- よって独立解答は `(5)`

解答後に電気技術者試験センター公式解答と照合し、公式正答 `(5)` と一致した。

(5)の静電容量の単位関係はTopic 04の範囲なのでTopic 01へ追加していない。(1)〜(4)をTopic 01教材だけで排除して一意に選択でき、教材外知識の補完は使っていない。

## 次に行うこと

1. Topic 01の最終QAを行う。
2. `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` のPASS条件を全項目確認する。
3. QA PASSの場合のみTopic 01をcompletedへ変更し、完成数を1/14へ更新する。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する。
- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする。
- 実車の消費電力を推測で真値化しない。
- Topic 01ではSPECで明示された仮定 `10 MW / 25 kV` を教材例に使用できる。
- 出力と入力電力、電力と電力量を混同しない。
- Topic 05のキルヒホッフ・重ね合わせ・テブナン等をTopic 01へ先取りしない。
- 後続Topicの電磁気・静電気・測定知識が必要な問題を、Topic 01単独の完成ゲートへ採用しない。
- Topic 01の確定ゲート集合は平成29年度理論問14の1問。勝手に追加・差し替えしない。