# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜11は `PASS / completed`。完成数は `11 / 21`。

current_status: `topic_11_completed`

active_topic: `12 三相交流を新幹線へ渡す`

Topic 11は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source＋練習PDF、解説画像PowerPoint、完成後独立再解答、最終QA、完了状態同期まで完了。最終判定は `PASS / completed`。

次工程はTopic 12「三相交流を新幹線へ渡す」の制作前EXAM_ALIGNMENT。本文・成果物制作より先に、公式過去問を一次・二次とも確認し、固定範囲と直接対応する問題だけを品質ゲート対象へ固定する。

## Topic 11 成果物

- source: `topics/11_atc_frequency_filter/11_atc_frequency_filter.md`
- 解説PDF: `topics/11_atc_frequency_filter/11_atc_frequency_filter_explanation.pdf`
- 練習source: `topics/11_atc_frequency_filter/11_atc_frequency_filter_practice.md`
- 練習PDF: `topics/11_atc_frequency_filter/11_atc_frequency_filter_practice.pdf`
- PowerPoint: `topics/11_atc_frequency_filter/11_atc_frequency_filter_images.pptx`
- PowerPoint QA: `topics/11_atc_frequency_filter/11_atc_frequency_filter_powerpoint_qa.md`
- 独立再解答: `topics/11_atc_frequency_filter/11_atc_frequency_filter_reanswer.md`
- 最終QA: `topics/11_atc_frequency_filter/11_atc_frequency_filter_final_qa.md`
- stage: `COMPLETED`
- completion: `completed`

## Topic 11 固定範囲

系列SPECどおり次だけを扱う。

- RLC共振
- 周波数応答
- ローパス
- ハイパス
- バンドパス
- 遮断周波数
- ゲイン
- 位相

ATC・軌道回路は入口に使うが、実車ATC回路を推測して再現しない。「特定周波数を選択する教育用回路」として扱う。

境界:

- 実車ATCの未確認回路・定数・信号周波数を真値化しない
- 電力用能動フィルタのインバータ・高調波補償制御を追加しない
- 自動制御のラプラス領域伝達関数・フィードバック設計を追加しない
- オペアンプ能動フィルタを追加しない
- Topic 12以降の三相回路・複素電力・高調波・過渡現象を先取りしない

## Topic 11 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・25小問。

- H28 問8(1)〜(5): 周波数測定、交流ブリッジ、`ω=2πf`
- H27 問2(1)〜(5): RC回路、振幅、位相、周波数依存
- H25 問3(1)〜(5): 可変周波数交流回路、特定周波数での零条件
- H24 問7(1)〜(5): 測定回路の周波数特性、周波数非依存補償
- H22 問4(1)〜(5): ヘイブリッジ、回路定数からの周波数特定

公式問題・公式解答25小問は照合済み。

## Topic 11 二次試験の扱い

2026-09-16時点でR8二次は未実施。R7〜R5二次「電力・管理」「機械・制御」を確認した。

- R7: 固定範囲だけで完結する直接対応問題なし
- R6: 固定範囲だけで完結する直接対応問題なし
- R5 機械・制御 問3「電力用能動フィルタ」: パワーエレクトロニクス・高調波補償・制御が主で、固定範囲だけでは完答できないため非採用
- R5 機械・制御 問4「ゲイン特性曲線からの伝達関数」: 自動制御の伝達関数体系が主で、固定範囲外の追加が必要になるため非採用

二次採用 `0問`、二次数合わせ `0件`。

## Topic 11 品質ゲート最終値

- 解説source: `PASS / completed`
- 解説PDF: A4縦2ページ、表示QA `2 / 2 PASS`、文字抽出QA `PASS`
- 練習source: 12問、正答一意性・独立計算 `12 / 12 PASS`
- 練習PDF: A4縦3ページ、表示QA `3 / 3 PASS`、文字抽出QA `PASS`
- PowerPoint: 16:9・5枚、表示QA `5 / 5 PASS`、overflow `0件`、ZIP整合性 `PASS`
- 固定一次5問・25小問の完成後独立再解答: `25 / 25 PASS`
- 教材外知識補完: `0件`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認ATC実設備値・実回路追加: `0件`
- Topic 12以降の先取り: `0件`
- 最終QA: `PASS / FINAL_QA_COMPLETE`
- 最終判定: `PASS / completed`

## Topic 12 固定範囲

系列SPECで定義されている範囲は次のとおり。

- 三相回路
- YΔ
- 三相電力

制作前EXAM_ALIGNMENTで公式過去問を確認する前に、これを超える論点を追加しない。

## 参考資料

参照日: 2026-09-16

公式正本:
- 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」 https://www.shiken.or.jp/chief/second/qa/

Topic 11説明粒度・解法確認:
- e-sysnet「RLC並列共振回路」 https://e-sysnet.com/parallel-resonant-circuit/
- 電験王2 H28理論問8 https://denken-ou.com/c2/rironh28-8/
- 電験王2 H27理論問2 https://denken-ou.com/c2/rironh27-2/
- 電験王2 H25理論問3 https://denken-ou.com/c2/rironh25-3/
- 電験王2 H24理論問7 https://denken-ou.com/c2/rironh24-7/
- 電験王2 H22理論問4 https://denken-ou.com/c2/rironh22-4/

## 直前完了Topic

Topic 11「ATCはなぜ特定の周波数を見分けられる？」は `PASS / completed`。

- 固定一次5問・25小問
- 完成後独立再解答 `25 / 25 PASS`
- 二次採用0問・二次数合わせ0件
- 解説source/PDF、練習source/PDF、PowerPoint、表示QA、最終QAまで完了
- 固定範囲外追加0件、未確認ATC実設備値追加0件

## 次に行うこと

Topic 12「三相交流を新幹線へ渡す」の制作前EXAM_ALIGNMENTを実施する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md` に従い、公式過去問を一次・二次とも確認し、固定範囲との直接対応性で採否を決める。