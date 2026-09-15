# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜09は `completed`。Topic 10「北陸新幹線で50Hzと60Hzが変わると何が起きる？」は制作前EXAM_ALIGNMENTまで完了した。

完成数: `9 / 21`

current_status: `topic_10_exam_alignment_complete`

active_topic: `10 北陸新幹線で50Hzと60Hzが変わると何が起きる？`

次工程: 固定一次5問・20小問から逆算し、Topic 10の解説本文＋3段階例題を作成する。固定範囲外、未確認実設備値、二次数合わせは追加しない。

## Topic 10 固定範囲

系列SPECどおり、次だけを扱う。

- 誘導リアクタンス
- 容量リアクタンス
- 複素インピーダンス
- 直列共振
- 並列共振
- 共振周波数
- Q値
- 周波数特性
- 位相特性

中心式:
- `ω=2πf`
- `XL=ωL`
- `XC=1/(ωC)`
- 直列RLC: `Z=R+j(XL-XC)`
- 共振: `ω0=1/√(LC)`、`f0=1/(2π√(LC))`
- 直列共振Q値: `Q=ω0L/R=1/(ω0CR)`

境界:
- フィルタ・遮断周波数・ゲイン設計 → Topic 11
- 三相回路 → Topic 12
- 複素電力・力率・無効電力 → Topic 13
- 過渡現象 → Topic 15
- 高調波系統計算、変圧器・進相コンデンサ設備設計、百分率リアクタンス → Topic 10へ追加しない

50Hz/60Hz比較は、同一の教育用RLCモデルで周波数だけを変え、`XL`、`XC`、`Z`、電流、位相がどう変わるかを示す。未確認の新幹線実設備定数は真値として置かない。

## Topic 10 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・20小問。

- R8 問5(1)〜(5): RLC直列共振、共振電流、Q値、L端子電圧、電圧拡大条件
- R3 問4(1)(2): LC並列部の共振条件、共振角周波数
- H30 問6(1)〜(5): R-L枝＋C並列回路の合成アドミタンス、位相条件、`|Y|`最小、共振時位相
- H28 問6(1)〜(5): RC/rL枝、`XL`・`XC`、周波数依存、位相特性
- H24 問2(1)(2)(5): RLC合成インピーダンス、電圧・電流同相条件、回路定数関係

公式問題・公式解答の対象20小問は照合済み。完成後は保存済み正答を先に見ず、完成教材だけで20小問を独立再解答する。

## Topic 10 二次試験の扱い

R8二次試験は2026-11-15実施予定で、2026-09-16時点では未実施。最新完了年度のR7〜R5二次「電力・管理」「機械・制御」を確認し、Topic 10固定範囲だけで完結する問題は品質ゲートへ採用しない。

H30二次「電力・管理」問5には高調波電流、直列リアクトル、進相コンデンサを含む回路の周波数依存・共振条件が現れるが、完答には高調波等価回路、変圧器・電力設備、百分率リアクタンス等が必要。本TopicのRLC理論だけへ切り出すと二次問題としての解法経路を欠くため非採用。

二次採用0問、二次数合わせ0件。

## Topic 10 現在の成果物

制作前source:
- `topics/10_hokuriku_frequency_rlc/10_hokuriku_frequency_rlc.md`
- 制作前EXAM_ALIGNMENTを収録
- 固定一次5問・20小問
- 公式問題・公式解答照合済み
- 二次採用0問・二次数合わせ0件
- Topic 11以降の論点追加0件
- 未確認実設備値追加0件

未制作:
- 解説本文＋3段階例題
- 解説PDF＋表示QA
- 練習問題source＋練習PDF
- 解説画像PowerPoint
- 完成後独立再解答
- 最終QA

## Topic 10 参考資料

参照日: 2026-09-16

公式正本:
- 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」 https://www.shiken.or.jp/chief/second/qa/
- R8一次「理論」問5
- R3一次「理論」問4
- H30一次「理論」問6
- H28一次「理論」問6
- H24一次「理論」問2
- H30二次「電力・管理」問5（非採用判断用）

説明粒度・解法確認:
- e-sysnet「RLC並列共振回路」 https://e-sysnet.com/parallel-resonant-circuit/
- e-sysnet「単相交流の直列回路」 https://e-sysnet.com/ac-series/
- 電験王2 R3理論問4 https://denken-ou.com/c2/rironr3-4/
- 電験王2 H30理論問6 https://denken-ou.com/c2/rironh30-6/
- 電験王2 H28理論問6 https://denken-ou.com/c2/rironh28-6/
- 電験王2 H24理論問2 https://denken-ou.com/c2/rironh24-2/

## Topic 09 完了記録

Topic 09「新幹線の25kV交流をフェーザで表す」は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source＋練習PDF、解説画像PowerPoint、完成後独立再解答、最終QA再々実施まで完了し、`PASS / completed`。

固定範囲:
- 瞬時値
- 実効値
- 平均値
- 正弦波
- 位相差
- 複素数表示
- フェーザ
- 複素インピーダンス

固定EXAM_ALIGNMENT:
- R7 問3(1)(2): `V̇L=jωL İ`、フェーザ位相、ベクトル三角形
- R5 問4(1): 複素インピーダンス合成、`İ=V̇/Ż`
- R3 問4(3)(4): `jωL`、`1/(jωC)`、合成インピーダンス、フェーザ電流
- H26 問3(1)(2): `V̇S-V̇R=jωL İ`、フェーザ差・大きさ
- H21 問3(1)〜(4): 複素アドミタンス／インピーダンス、フェーザ、実効値⇔最大値、瞬時値

完成後独立再解答 `11 / 11 PASS`。教材外知識補完0件、二次採用0問、二次数合わせ0件、固定範囲外追加0件、未確認実設備値追加0件。

成果物:
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor.md`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_explanation.pdf`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_practice.md`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_practice.pdf`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_images.pptx`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_reanswer.md`
- `topics/09_25kv_ac_phasor/09_25kv_ac_phasor_final_qa.md`

## 品質ゲート現在値

- Topic 01〜09: `PASS / completed`
- 完成数: `9 / 21`
- Topic 10 制作前EXAM_ALIGNMENT: `PASS`
- Topic 10 固定一次: `5問 / 20小問`
- Topic 10 公式問題・公式解答照合: `20小問確認済み`
- Topic 10 二次採用: `0問`
- Topic 10 二次数合わせ: `0件`
- Topic 10 固定範囲外追加: `0件`
- Topic 10 未確認実設備値追加: `0件`
- Topic 10 完成後独立再解答: `未実施（教材完成後）`

## 次に行うこと

Topic 10の固定5問・20小問と必須説明から逆算して、解説本文＋3段階例題を作成する。
