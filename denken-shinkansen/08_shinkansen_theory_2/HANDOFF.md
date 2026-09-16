# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜10は `PASS / completed`。完成数は `10 / 21`。

current_status: `topic_11_powerpoint_complete`

active_topic: `11 ATCはなぜ特定の周波数を見分けられる？`

Topic 11は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source＋練習PDF、解説画像PowerPointまで完了。次工程は完成後独立再解答。

## Topic 11 成果物

- source: `topics/11_atc_frequency_filter/11_atc_frequency_filter.md`
- 解説PDF: `topics/11_atc_frequency_filter/11_atc_frequency_filter_explanation.pdf`
- 練習source: `topics/11_atc_frequency_filter/11_atc_frequency_filter_practice.md`
- 練習PDF: `topics/11_atc_frequency_filter/11_atc_frequency_filter_practice.pdf`
- PowerPoint: `topics/11_atc_frequency_filter/11_atc_frequency_filter_images.pptx`
- PowerPoint QA: `topics/11_atc_frequency_filter/11_atc_frequency_filter_powerpoint_qa.md`
- stage: `POWERPOINT_COMPLETE`
- completion: `IN_PROGRESS`

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

公式問題・公式解答25小問は照合済み。完成後ブラインド独立再解答を妨げないため、個別正答番号は主sourceへ保存していない。

## Topic 11 二次試験の扱い

2026-09-16時点でR8二次は未実施。R7〜R5二次「電力・管理」「機械・制御」を確認した。

- R7: 固定範囲だけで完結する直接対応問題なし
- R6: 固定範囲だけで完結する直接対応問題なし
- R5 機械・制御 問3「電力用能動フィルタ」: パワーエレクトロニクス・高調波補償・制御が主で、固定範囲だけでは完答できないため非採用
- R5 機械・制御 問4「ゲイン特性曲線からの伝達関数」: 自動制御の伝達関数体系が主で、固定範囲外の追加が必要になるため非採用

二次採用 `0問`、二次数合わせ `0件`。

## Topic 11 解説source収録内容

固定5問・25小問から逆算し、次を本文へ収録済み。

- `ω=2πf`、`ZR=R`、`ZL=jωL`、`ZC=1/(jωC)`
- 周波数応答 `H(jω)=Vout/Vin` の大きさと位相
- RCローパス `1/(1+jωRC)`
- RCハイパス `jωRC/(1+jωRC)`
- 遮断周波数 `fc=1/(2πRC)`、`1/sqrt(2)`、`-3.01 dB`
- ゲイン `20log10|H|`
- 直列RLC＋R出力の教育用バンドパスと `f0=1/(2πsqrt(LC))`
- 低周波／高周波／共振付近からフィルタ特性を判定する手順
- 交流ブリッジの複素平衡式、実部・虚部分離、未知周波数導出
- 周波数依存項を相殺するRC補償 `R1C1=R2C2`
- 可変周波数回路の零条件
- ATCとの接続は「特定周波数を通す／抑える」という概念まで

3段階例題:

1. 基礎: RCローパスの遮断周波数・振幅比・位相
2. 本試験標準: 直列RLC抵抗出力のバンドパス
3. 複合・ひっかけ: Wien形教育用交流ブリッジの平衡周波数＋実部条件

## Topic 11 解説source QA

- 固定一次5問・25小問への本文マッピング: `25 / 25`
- 3段階例題: `3 / 3`
- 二次採用: `0問` のまま
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認ATC実設備値追加: `0件`
- Topic 12以降の先取り: `0件`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 11 解説PDF QA

- PDF: `topics/11_atc_frequency_filter/11_atc_frequency_filter_explanation.pdf`
- A4縦2ページ
- 200 dpi全ページ表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 固定一次5問・25小問への接続: `25 / 25`
- 3段階例題: `3 / 3`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認ATC実設備値追加: `0件`
- Topic 12以降の先取り: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 11 練習問題source＋PDF QA

- 練習source: `topics/11_atc_frequency_filter/11_atc_frequency_filter_practice.md`
- 練習PDF: `topics/11_atc_frequency_filter/11_atc_frequency_filter_practice.pdf`
- 全12問・全問五肢択一: 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 独立計算・正答一意性QA: `12 / 12 PASS`
- 固定一次5問・25小問への接続: `25 / 25`
- PDF: A4縦3ページ
- 200 dpi全ページ表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認ATC実設備値追加: `0件`
- Topic 12以降の先取り: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 11 PowerPoint QA

- PowerPoint: `topics/11_atc_frequency_filter/11_atc_frequency_filter_images.pptx`
- 16:9・5枚
- 全スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- 固定一次5問・25小問の5出題系統を可視化
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認ATC実設備値・実回路追加: `0件`
- Topic 12以降の先取り: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## 参考資料

参照日: 2026-09-16

公式正本:
- 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」 https://www.shiken.or.jp/chief/second/qa/

説明粒度・解法確認:
- e-sysnet「RLC並列共振回路」 https://e-sysnet.com/parallel-resonant-circuit/
- 電験王2 H28理論問8 https://denken-ou.com/c2/rironh28-8/
- 電験王2 H27理論問2 https://denken-ou.com/c2/rironh27-2/
- 電験王2 H25理論問3 https://denken-ou.com/c2/rironh25-3/
- 電験王2 H24理論問7 https://denken-ou.com/c2/rironh24-7/
- 電験王2 H22理論問4 https://denken-ou.com/c2/rironh22-4/

## 直前完了Topic

Topic 10「北陸新幹線で50Hzと60Hzが変わると何が起きる？」は `PASS / completed`。

- 固定一次5問・20小問
- 完成後独立再解答 `20 / 20 PASS`
- 二次採用0問・二次数合わせ0件
- 解説source/PDF、練習source/PDF、PowerPoint、表示QA、最終QAまで完了
- 固定範囲外追加0件、未確認実設備値追加0件

## 品質ゲート現在値

- Topic 01〜10: `PASS / completed`
- 完成数: `10 / 21`
- Topic 11 制作前EXAM_ALIGNMENT: `PASS / completed`
- Topic 11 解説source: `PASS / completed`
- Topic 11 解説PDF: `PASS / completed`
- Topic 11 練習source: `PASS / completed`
- Topic 11 練習PDF: `PASS / completed`
- Topic 11 PowerPoint: `PASS / completed`
- Topic 11 固定一次: `5問 / 25小問`
- Topic 11 二次採用: `0問`
- Topic 11 二次数合わせ: `0件`
- Topic 11 固定範囲外追加: `0件`
- Topic 11 未確認ATC実設備値追加: `0件`

## 次に行うこと

Topic 11の完成後独立再解答を、保存済み正答を先読みせず完成教材だけで実施する。