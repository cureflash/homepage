# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜09は最終QAまでPASSし、`completed`。

Topic 09 `北陸新幹線は50Hzと60Hzをどう走る？` は、固定6過去問の完成後独立再解答 `6 / 6 PASS`、必須成果物・表示QA・SPEC境界・進捗記録整合を全件PASSし、最終QA再実施で `PASS / completed` とした。

- 完成数: `9 / 14`
- last completed: `09 北陸新幹線は50Hzと60Hzをどう走る？`
- active topic: `10 新幹線が使う電力は「W」だけではない`
- current status: `topic_09_completed`
- next start: Topic 10の制作前EXAM_ALIGNMENTを開始する

## 今回進捗

Topic 09の最終QAを再実施した。

- 前回唯一FAILだった練習source進捗記録は同期済み
- 固定6過去問の完成後独立再解答: `6 / 6 PASS`
- 教材外知識補完: `0問`
- Topic 10以降の力率・三相・半導体等への依存: `0問`
- 未確認新幹線実車値・周波数切替方式への依存: `0問`
- 解説PDF QA: PASS
- 練習PDF QA: PASS
- PowerPoint QA: PASS
- SPEC境界: PASS
- source進捗記録整合性: PASS
- 最終QA: `PASS / completed`

教材本文・固定EXAM_ALIGNMENT・練習15問・正答・解説・PDF・PowerPointの技術内容は変更せず、主source・練習sourceへ完了進捗だけを同期した。

## Topic 09 品質ゲート

- 固定公式過去問: `6問`
- 制作前独立検証: `6 / 6 PASS`
- 必須先読み正本に残る制作前の正答番号: `0件`
- 必須先読み正本に残る制作前の個別解答過程: `0件`
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識による正答補完: `0問`
- Topic 10以降の力率・三相・半導体等による件数合わせ・依存: `0問`
- 未確認新幹線実車値・周波数切替方式の追加・依存: `0件`
- 最終QA: `PASS / completed`

公式過去問は電気技術者試験センターを正本とし、e-sysnet・電験王・電験三種まとめましたは説明粒度・解法順の比較にのみ使用した。

## Topic 09 SPEC固定範囲

扱う内容:
- 抵抗R
- インダクタンスL
- 静電容量C
- 誘導リアクタンス
- 容量リアクタンス
- インピーダンス
- 位相差
- R-L回路
- R-C回路
- R-L-C回路
- 直列共振
- 並列共振の基本

固定公式:

```text
XL = 2πfL
XC = 1 / (2πfC)
Z = R + jX
f0 = 1 / (2π√LC)
```

## Topic 09 固定過去問

1. 令和8年度上期 理論 問8
   - RC回路、容量リアクタンス、合成インピーダンス、抵抗損失
2. 令和7年度下期 理論 問8
   - 周波数変化、L/Cリアクタンス、並列LCの打消し、合成インピーダンス
3. 令和6年度下期 理論 問9
   - RC直列回路、50Hz→60Hzでの容量リアクタンスと電流変化
4. 令和6年度上期 理論 問8
   - LC直列共振、L/C合成、共振周波数比較
5. 令和5年度下期 理論 問8
   - RLC直列共振、共振時電流、コイル端子電圧、共振周波数
6. 令和5年度上期 理論 問8
   - RLC直列共振、共振前後の容量性/誘導性、位相関係

制作前独立検証: `6 / 6 PASS`
完成後独立再解答: `6 / 6 PASS`

## 教材で必須となる説明

- `ZR=R`、`ZL=jXL`、`ZC=-jXC`の意味
- `XL=2πfL`と`XC=1/(2πfC)`の周波数依存
- 50Hz→60Hzでの`XL`・`XC`比較
- `Z=R+jX`、インピーダンスの大きさ、位相差
- RL・RC・RLC直列回路の解法
- 並列枝電流のフェーザ合成と理想LCの打消し
- 直列共振条件`XL=XC`、`f0=1/(2π√LC)`、共振時`Z=R`
- 共振前後の容量性/誘導性と電流の進み遅れ
- 並列共振は系列SPEC指定の基本範囲に限定
- 周波数変化問題の再利用可能な解法手順
- R8上問8の`P=I²R`は既習の抵抗損失としてのみ使用

## 境界

- Topic 10の有効・無効・皮相電力、力率、力率改善をTopic 09へ追加しない
- Topic 11の三相交流、Y・Δ、線間/相電圧をTopic 09へ追加しない
- Topic 12以降の半導体、整流、PWM、高調波をTopic 09へ追加しない
- 過渡現象・ラプラス変換等へ拡張しない
- 新幹線の周波数切替設備、切替地点、車上回路等を未確認のまま推測しない

## Topic 09 成果物

- source: `topics/09_hokuriku_frequency_rlc/09_hokuriku_frequency_rlc.md`
  - EXAM_ALIGNMENT: 完成
  - 制作前独立検証: `6 / 6 PASS`
  - 解説本文＋3段階例題: 完成
  - 固定過去問→本文マッピング: `6 / 6`
  - status: `COMPLETED`
- 解説PDF: 完成（A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`）
- 練習source: 完成（`COMPLETED`）
- 練習PDF: 完成（A4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA `PASS`）
- 解説画像PowerPoint: 完成（16:9・4枚、表示QA `4 / 4 PASS`、固定6過去問要求 `6 / 6`）
- 完成後独立再解答: `6 / 6 PASS`
- 独立再解答記録: `topics/09_hokuriku_frequency_rlc/09_hokuriku_frequency_rlc_exam_recheck.md`
- 最終QA: `PASS / completed`
- 最終QA記録: `topics/09_hokuriku_frequency_rlc/09_hokuriku_frequency_rlc_final_qa.md`

## 次に行うこと

Topic 10 `新幹線が使う電力は「W」だけではない` の制作前EXAM_ALIGNMENTを開始する。`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列SPECのTopic 10固定範囲だけを使い、直近年度から公式理論過去問を調査する。後続Topic 11以降の三相・半導体等で件数を水増ししない。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
