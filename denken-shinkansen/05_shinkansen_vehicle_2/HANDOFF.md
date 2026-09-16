# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-16

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜09は最終QAまで `PASS / completed`。完成数は `9 / 39`。

現在地は `topic_10_source_progress_synced`。Topic 10 `300系① 誘導電動機等価回路` は技術内容、固定EXAM_ALIGNMENT、必須成果物、完成後独立再解答、PDF/PPTX/練習QA、SPEC境界までPASS。前回最終QAの唯一のFAILだった主source冒頭の「最終QAは未実施」は今回の最終QA結果へ同期済みで、最終QA再判定待ち。

次工程はTopic 10の最終QA再判定。技術内容・固定EXAM_ALIGNMENT・数式・例題・練習問題・PDF/PPTXには触れない。進捗記録整合がPASSならTopic 10を `completed` へ進める。

## Topic 01〜06
- Topic 01〜06: 最終QA `PASS / completed`
- 各テーマで必須成果物、対応過去問、完成後独立再解答、表示QA、固定範囲境界を確認済み

## Topic 07 直流主回路の高出力化
- 最終QA: `PASS / completed`
- 固定過去問: 一次4問＋二次1問、15対象項目
- H28 一次 機械 問5 (1)
- H26 一次 機械 問5 (1)(2)
- H22 一次 機械 問1 全小問
- H21 一次 機械 問2 全小問
- H24 二次 機械・制御 問1 (1)(2)
- 補強後完成教材のみ再独立再解答: 一次 `13 / 13 PASS`、二次 `2 / 2 PASS`、合計 `15 / 15 PASS`
- 教材外知識補完・固定範囲外追加・未確認実車値追加: `0件`

確認済み実車値:
- 0系 MT200B: 185 kW / 415 V / 490 A / 2,200 rpm / 自己通風
- 100系 MT202: 230 kW / 625 V / 405 A / 2,900 rpm / 他力通風
- 200系 MT201: 230 kW / 475 V / 530 A / 2,150 rpm / 強制風冷14 m3/min

## Topic 08 位相制御と平均直流電圧
- 最終QA: `PASS / completed`
- 固定過去問: 一次3問＋二次2問、20対象項目
- R8 一次 機械 問4 全小問
- R5 一次 機械 問4 (1)〜(3)
- R1 一次 機械 問3 全小問
- H30 二次 機械・制御 問3 (1)〜(4)
- H25 二次 機械・制御 問3 (1)〜(3)
- 完成教材のみ独立再解答: 一次 `13 / 13 PASS`、二次 `7 / 7 PASS`、合計 `20 / 20 PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 固定範囲外追加・未確認実車値追加: `0件`

## Topic 09 直流機方式の損失・熱設計
- 最終QA: `PASS / completed`
- 固定過去問: 一次4問＋二次1問、14対象項目
- R8 一次 機械 問1 (1)(2)
- R6 一次 機械 問2 (3)
- R5 一次 機械 問1 (1)(2)(3)(5)
- H23 一次 機械 問2 (2)〜(5)
- H22 二次 機械・制御 問2 (1)〜(3)
- 完成教材のみ独立再解答: 一次 `11 / 11 PASS`、二次 `3 / 3 PASS`、合計 `14 / 14 PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 練習問題: `12 / 12 PASS`
- 教材外知識補完・固定範囲外追加・未確認実車値追加: `0件`

## Topic 10 制作前EXAM_ALIGNMENT
source: `topics/10_300series_induction_motor_equivalent_circuit/10_300series_induction_motor_equivalent_circuit.md`

- 固定過去問: 一次3問＋二次2問、計5問
- 固定答案要素: 一次11＋二次11、計22
- R8 一次 機械 問2 (1)〜(5)
- R7 一次 機械 問2 (1)〜(5)
- H25 一次 機械 問1 (1)
- R3 二次 機械・制御 問1 (1)〜(6)
- H28 二次 機械・制御 問1 (1)〜(5)
- 制作前独立検証: 一次 `11 / 11 PASS`、二次 `11 / 11 PASS`、合計 `22 / 22 PASS`
- 二次記述問題: `2問`
- 後続Topicの件数合わせ採用: `0件`
- 未確認300系実車値追加: `0件`

## Topic 10 解説source
- 解説本文＋3段階例題: `completed`
- 固定5過去問・22答案要素: 本文へ `22 / 22` マッピング
- 等価回路定数試験、滑り、`r2'/s`、二次入力・二次銅損・機械出力、トルク、最大トルク、比例推移、効率を固定範囲内で整理
- 3段階例題: `3 / 3`
- SPEC指定4グラフへつながる計算条件: `4 / 4`
- 教材用仮定値と300系実車値の区別: 明記
- Topic 11〜13先取り・固定範囲外追加・未確認300系実車値追加: `0件`
- 前回最終QAで指摘された主source冒頭の旧進捗1箇所: `同期済み`

## Topic 10 解説PDF
- `10_300series_induction_motor_equivalent_circuit_explanation.pdf`: `completed`
- A4縦5ページ
- 180 dpi Visual QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 3段階例題: `3 / 3`
- SPEC指定4グラフ: `4 / 4`
- 固定一次3問＋二次2問・22答案要素: 維持
- 固定範囲外追加・Topic 11〜13先取り・未確認300系実車値追加: `0件`

## Topic 10 練習source / 練習PDF
- `10_300series_induction_motor_equivalent_circuit_practice_source.md`: `completed`
- 一次試験型: 8問、すべて五肢択一
- 二次試験型: 4問、途中式・前提・単位・検算を含む記述式
- 合計12問、全問完全解説付き
- 固定一次3問＋二次2問・22答案要素: `22 / 22` 接続
- 独立計算・論理・正答一意性QA: `12 / 12 PASS`
- 練習PDF: A4縦3ページ、Visual QA `3 / 3 PASS`、文字抽出QA `PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・検算: `4 / 4 PASS`
- 固定範囲外追加・Topic 11〜13先取り・未確認300系実車値追加: `0件`

## Topic 10 解説画像PowerPoint
- `10_300series_induction_motor_equivalent_circuit_images.pptx`: `completed`
- 16:9・4スライド
- SPEC指定4可視化: `4 / 4 PASS`
  - トルク―すべり
  - 出力―すべり
  - 効率―負荷率
  - 二次抵抗変更時の特性
- Visual QA: `4 / 4 PASS`
- overflow: `0件 / PASS`
- PowerPoint ZIP整合性: `PASS`
- 固定一次3問＋二次2問・22答案要素: 維持
- 固定範囲外追加・Topic 11〜13先取り・未確認300系実車値追加: `0件`

## Topic 10 完成後独立再解答
- `10_300series_induction_motor_equivalent_circuit_independent_reanswer.md`: `completed`
- R8一次 機械 問2: `5 / 5 PASS`
- R7一次 機械 問2: `5 / 5 PASS`
- H25一次 機械 問1(1): `1 / 1 PASS`
- 一次合計: `11 / 11 PASS`
- R3二次 機械・制御 問1: `6 / 6 PASS`
- H28二次 機械・制御 問1: `5 / 5 PASS`
- 二次合計: `11 / 11 PASS`
- 総合: `22 / 22 PASS`
- 教材外知識補完・固定EXAM_ALIGNMENT変更・固定範囲外追加・Topic 11〜13先取り・未確認300系実車値追加: `0件`
- 独立再解答判定: `PASS`

## Topic 10 最終QA
- `10_300series_induction_motor_equivalent_circuit_final_qa.md`: `NEEDS_REVISION / IN_PROGRESS`
- 固定EXAM_ALIGNMENT: 一次3問＋二次2問、計5問・22答案要素を維持
- 完成後独立再解答: 一次 `11 / 11 PASS`、二次 `11 / 11 PASS`、合計 `22 / 22 PASS`
- 必須成果物: `PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- 練習問題の計算・論理・正答一意性: `12 / 12 PASS`
- 教材外知識補完: `0件`
- 固定範囲外追加: `0件`
- Topic 11〜13先取り: `0件`
- 未確認300系実車値追加: `0件`
- 前回最終QAの唯一のFAILだった主source冒頭の「最終QAは未実施」: `同期済み`
- 進捗記録整合: `再判定待ち`
- 最終判定: `NEEDS_REVISION / IN_PROGRESS`

## 次の正確な開始点
Topic 10 `300系① 誘導電動機等価回路` の最終QA再判定。

1. 主source冒頭の旧進捗1箇所が同期済みであることを確認する。
2. 技術内容・固定EXAM_ALIGNMENT・数式・例題・練習問題・PDF/PPTXは変更しない。
3. 進捗記録整合がPASSならTopic 10を `completed` へ進める。
