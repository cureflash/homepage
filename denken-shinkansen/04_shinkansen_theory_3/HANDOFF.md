# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-16

## 現在地

Topic 01〜08は最終QAまでPASSし、`completed`。

Topic 09 `北陸新幹線は50Hzと60Hzをどう走る？` は、解説本文・解説PDF・練習source/PDF・解説画像PowerPoint・固定6過去問の完成後独立再解答まで完了。最終QAは技術内容・成果物・過去問対応・SPEC境界をPASSしたが、練習sourceの進捗記録が実成果物より古いため `NEEDS_REVISION` だった。その進捗記録同期まで完了した。

- 完成数: `8 / 14`
- last completed: `08 新幹線の交流25kVとは何なのか`
- active topic: `09 北陸新幹線は50Hzと60Hzをどう走る？`
- current status: `topic_09_practice_source_progress_synced`
- next start: Topic 09の最終QAを再実施する

## 今回進捗

Topic 09練習sourceの旧進捗記録だけを実成果物へ同期した。

- `09_hokuriku_frequency_rlc_practice.md` の `stage`: `PRACTICE_PDF_COMPLETE` → `INDEPENDENT_REANSWER_COMPLETE`
- 旧「次はPowerPoint作成」を削除
- PowerPoint・完成後独立再解答が既に完了している状態へ同期
- 教材本文・固定EXAM_ALIGNMENT・練習15問・正答・解説・PDF・PowerPointの技術内容は変更なし
- 固定6過去問の完成後独立再解答 `6 / 6 PASS`、教材外補完0問、SPEC境界を維持

最終QA再実施は次段階とし、現時点では `completed` にしない。

## Topic 09 品質ゲート

- 固定公式過去問: `6問`
- 制作前独立検証: `6 / 6 PASS`
- 必須先読み正本に残る制作前の正答番号: `0件`
- 必須先読み正本に残る制作前の個別解答過程: `0件`
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識による正答補完: `0問`
- Topic 10以降の力率・三相・半導体等による件数合わせ・依存: `0問`
- 未確認新幹線実車値・周波数切替方式の追加・依存: `0件`
- 最終QA: `NEEDS_REVISION`（前回判定。原因だった練習source進捗記録は同期済み、再判定待ち）

公式過去問は電気技術者試験センターを正本とし、e-sysnet・電験王・電験三種まとめましたは説明粒度・解法順の比較にのみ使用する。

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

- Topic 10の有効・無効・皮相電力、力率、力率改善を追加しない
- Topic 11の三相交流、Y・Δ、線間/相電圧を追加しない
- Topic 12以降の半導体、整流、PWM、高調波を追加しない
- 過渡現象・ラプラス変換等へ拡張しない
- 新幹線の周波数切替設備、切替地点、車上回路等を未確認のまま推測しない

## Topic 09 成果物

- source: `topics/09_hokuriku_frequency_rlc/09_hokuriku_frequency_rlc.md`
  - EXAM_ALIGNMENT: 完成
  - 制作前独立検証: `6 / 6 PASS`
  - 解説本文＋3段階例題: 完成
  - 固定過去問→本文マッピング: `6 / 6`
  - status: `INDEPENDENT_REANSWER_COMPLETE`
- 解説PDF: 完成（A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`）
- 練習source: 内容完成、進捗記録同期済み（`INDEPENDENT_REANSWER_COMPLETE`）
- 練習PDF: 完成（A4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA `PASS`）
- 解説画像PowerPoint: 完成（16:9・4枚、表示QA `4 / 4 PASS`、固定6過去問要求 `6 / 6`）
- 完成後独立再解答: `6 / 6 PASS`
- 独立再解答記録: `topics/09_hokuriku_frequency_rlc/09_hokuriku_frequency_rlc_exam_recheck.md`
- 最終QA: `NEEDS_REVISION`（前回判定、再判定待ち）
- 最終QA記録: `topics/09_hokuriku_frequency_rlc/09_hokuriku_frequency_rlc_final_qa.md`

## 次に行うこと

固定EXAM_ALIGNMENT・教材本文・問題・PDF・PowerPointを変更せず、Topic 09の最終QAを再実施する。前回FAIL理由だった練習source進捗記録は同期済み。最終QAがPASSするまで `completed` としない。

## 固定ルール

- `MASTER_SPEC.md` と `EXAM_ALIGNMENT_SPEC.md` を系列SPECより優先する
- 新幹線紹介ではなく、本試験問題を教材だけで解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
