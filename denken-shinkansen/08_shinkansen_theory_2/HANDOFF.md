# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜09は `completed`。Topic 09「新幹線の25kV交流をフェーザで表す」は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source＋練習PDF、解説画像PowerPoint、完成後独立再解答、最終QA再々実施まで完了し、`PASS / completed`。

完成数: `9 / 21`

current_status: `topic_09_completed`

active_topic: `10 北陸新幹線で50Hzと60Hzが変わると何が起きる？`

次工程: Topic 10制作前EXAM_ALIGNMENT。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`の固定範囲から開始し、一次・二次を確認してから本文制作へ進む。

## Topic 09 固定範囲

系列SPECどおり、次だけを扱う。

- 瞬時値
- 実効値
- 平均値
- 正弦波
- 位相差
- 複素数表示
- フェーザ
- 複素インピーダンス

境界:
- 共振・Q値・周波数特性 → Topic 10
- フィルタ・周波数応答 → Topic 11
- 三相回路 → Topic 12
- 複素電力・力率・無効電力 → Topic 13

新幹線25kV交流は理論を具体化する導入・応用に用いる。未確認の実設備値・回路定数は真値として追加しない。

## Topic 09 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・11小問。

- R7 問3(1)(2): `V̇L=jωL İ`、フェーザ位相、ベクトル三角形
- R5 問4(1): 複素インピーダンス合成、`İ=V̇/Ż`
- R3 問4(3)(4): `jωL`、`1/(jωC)`、合成インピーダンス、フェーザ電流
- H26 問3(1)(2): `V̇S-V̇R=jωL İ`、フェーザ差・大きさ
- H21 問3(1)〜(4): 複素アドミタンス／インピーダンス、フェーザ、実効値⇔最大値、瞬時値

公式解答照合: `11 / 11 PASS`

直近年度から固定範囲だけで選定し、R8の共振/Q値等はTopic 10、計測ブリッジはTopic 20側として非採用。R7/R5/R3も後続論点へ進む小問は採用していない。範囲を広げずH26・H21まで遡って5問を確保した。

## 二次試験の扱い

R7・R6・R5二次「電力・管理」「機械・制御」を確認したが、Topic 09固定範囲だけを直接問う記述問題は確認できなかった。同期機、誘導機、変圧器、系統、故障計算、整流器、制御等の固有知識が主となる問題は非採用。

二次採用0問、二次数合わせ0件。`08 理論・二種` は一次理論中心で、無理に二次形式を付けないというMASTER_SPECを維持した。

## Topic 09 完成済み成果物

解説source:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor.md`
- 固定11小問への本文マッピング `11 / 11`
- 品質ゲート表の個別公式正答値は除去済み
- 進捗記録は `completed` とTopic 10開始へ同期済み

解説PDF:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_explanation.pdf`
- A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- クリッピング・重なり・文字化け: 0件

練習問題:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_practice.md`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_practice.pdf`
- 一次試験型12問、全問五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 正答一意性・数値再計算: `12 / 12 PASS`
- 固定5問・11小問への練習接続: `11 / 11`
- PDF A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 進捗記録は `completed` とTopic 10開始へ同期済み

PowerPoint:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_images.pptx`
- 16:9・5スライド
- 200 dpi表示QA: `5 / 5 PASS`
- ZIP整合性: `PASS`
- クリッピング・重なり・文字化け: 0件

完成後独立再解答:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_reanswer.md`
- 完成教材だけで固定一次5問・11小問を再導出
- 公式解答との事後照合: `11 / 11 PASS`
- 教材外知識補完: 0件
- 固定範囲外論点追加: 0件
- 二次数合わせ: 0件
- 後続Topic論点・未確認実設備値追加: 0件

最終QA:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_final_qa.md`
- 過去問対応、独立再解答、二次非採用判断、必須成果物、表示QA、SPEC境界、進捗記録整合: 全件PASS
- 判定: `PASS / completed`

固定EXAM_ALIGNMENT変更0件、二次採用0問、二次数合わせ0件、固定範囲外追加0件、未確認実設備値追加0件。

## Topic 09 完成後独立再解答結果

独立答案:
- R7 問3(1)(2): `ヨ`, `ト`
- R5 問4(1): `ト`
- R3 問4(3)(4): `イ`, `リ`
- H26 問3(1)(2): `カ`, `ニ`
- H21 問3(1)〜(4): `チ`, `ル`, `ハ`, `ワ`

公式解答との照合は `11 / 11 PASS`。教材だけで使用式を選択し、途中式を再構築し、選択肢を一意に判定し、正答理由を説明できた。外部知識による補完は行っていない。

## 参考資料

参照日: 2026-09-15

公式正本:
- 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」 https://www.shiken.or.jp/chief/second/qa/
- R7 一次 理論 https://www.shiken.or.jp/chief/upload/20250831_ch_second_q01.pdf
- R5 一次 理論 https://www.shiken.or.jp/chief/upload/20230819_ch_second_q01.pdf
- R3 一次 理論 https://www.shiken.or.jp/chief/upload/20210821_ch_second_q01.pdf
- H26 一次 理論 https://www.shiken.or.jp/chief/upload/20140906_ch_second_q01.pdf
- H21 一次 理論 https://www.shiken.or.jp/chief/upload/20090905_ch_second_q01.pdf

説明粒度・解法確認:
- e-sysnet「単相交流の直列回路」 https://e-sysnet.com/ac-series/
- 電験王2 R7年度ページ https://denken-ou.com/c2/r7/
- 電験王2 R5理論問4 https://denken-ou.com/c2/rironr5-4/
- 電験王2 R3理論問4 https://denken-ou.com/c2/rironr3-4/
- 電験王2 H26理論問3 https://denken-ou.com/c2/rironh26-3/
- 電験王2 H21理論問3 https://denken-ou.com/c2/rironh21-3/

## 品質ゲート現在値

- 制作前EXAM_ALIGNMENT: `PASS`
- 固定一次: `5問 / 11小問`
- 公式解答照合: `11 / 11 PASS`
- 解説本文マッピング: `11 / 11`
- 解説PDF表示QA: `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- 練習接続: `11 / 11`
- 練習PDF表示QA: `4 / 4 PASS`
- 練習PDF文字抽出QA: `PASS`
- PowerPoint表示QA: `5 / 5 PASS`
- PowerPoint ZIP整合性: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 固定範囲外追加: `0件`
- 未確認実設備値追加: `0件`
- 完成後独立再解答: `11 / 11 PASS`
- 進捗記録整合: `PASS`
- 最終QA再々実施: `PASS / completed`

## 次に行うこと

Topic 10「北陸新幹線で50Hzと60Hzが変わると何が起きる？」の制作前EXAM_ALIGNMENTを実施する。
