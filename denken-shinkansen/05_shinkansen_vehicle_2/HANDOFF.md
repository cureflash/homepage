# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜14は最終QAまで `PASS / completed`。完成数は `14 / 39`。

Topic 15 `500系 高速域の出力・熱解析` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習問題source、練習PDF、解説画像PowerPoint、完成後独立再解答前ゲートまで完了。固定一次4問＋二次1問、計5問・16答案要素は変更していない。PowerPointは16:9・4枚、1601×900表示QA `4 / 4 PASS`、固定16答案要素の可視化・接続 `16 / 16 PASS`、SPEC指定4可視化 `4 / 4 PASS`。SPEC指定9項目・共通仮定式系を維持し、未確認500系実車値の真値化・SPEC外追加は0件。

独立再解答前ゲート `PASS / BLIND_REANSWER_READY` の条件を維持して公式問題文だけを開き、固定5問・16答案要素を完成教材から独立再解答した。公式解答・標準解答を開く前に候補答案を `15_500series_high_speed_output_thermal_blind_reanswer_candidates.md` へ固定し、その後公式解答・標準解答と照合した。固定5問 `5 / 5 PASS`、一次 `10 / 10 PASS`、二次 `6 / 6 PASS`、合計 `16 / 16 PASS`。教材外知識による補完0件、公式解答・標準解答との不一致0件。

次工程はTopic 15の最終QA。必須成果物、各QA、SPEC境界、進捗記録整合を再確認して `completed` 可否を判定する。

## Topic 15 固定EXAM_ALIGNMENT
source: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal.md`

固定過去問:
- R8 一次 機械 問1 (1),(2)
- R7 二次 機械・制御 問2 (1)〜(3)
- R5 一次 機械 問1 (1),(3),(5)
- H26 一次 機械 問5 (3)〜(5)
- H25 一次 機械 問3 (1),(2)

品質ゲート:
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・16答案要素`
- 制作前計算・論理検証: `16 / 16 PASS`
- 二次記述・計算問題: `1問`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 問1 (1),(2)を固定`
- SPEC指定9項目: `9 / 9 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 15 SPEC固定範囲
扱う内容:
- `P = ωT`
- 高速域トルク
- 定出力領域
- 電流制限
- 電圧制限
- 損失
- 発熱
- 冷却
- 温度上昇

SPEC指定可視化:
- 回転速度―トルク
- 回転速度―出力
- 出力―損失
- 簡略熱モデル

範囲境界:
- Topic 12 の VVVF・V/f・すべり制御は定出力領域・電圧制限・電流制限との接続に必要な範囲だけ参照する
- Topic 16 の多レベル変換器・PWM・素子電圧・高調波へ進まない
- 詳細な熱流体解析、冷却風量設計、絶縁寿命モデル、軸受・歯車・車体空力設計を追加しない
- 未確認500系実車値を真値化しない
- 簡略熱モデルを第二種公式過去問で直接問われた論点とは扱わない

## Topic 15 解説source
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal.md`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 3段階例題: `3 / 3 PASS`
- 固定5問・16答案要素の本文接続: `16 / 16 PASS`
- 例題数値再計算: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の共通式系・計算条件: `4 / 4 PASS`
- 教材用仮定モデル: `N_b=3000 min^-1`, `T_b=1200 N·m`, `P_b≈377 kW`
- 損失モデル: `P_loss=15+25(P_out/P_b)^2 [kW]`
- 簡略熱モデル: `R_th=0.80 K/kW`, `C_th=6000 kJ/K`、いずれも500系実車値ではない
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## Topic 15 解説PDF
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_explanation.pdf`
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_explanation_pdf_qa.md`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`
- A4縦4ページ
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 固定5問・16答案要素接続: `16 / 16 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- PDF SHA-256: `58c06ad4b257d854e8e3ee15035e73f864f493e0bfd7df361c72498c07fb2984`
- Git blob SHA: `be8cdfaa65b377ca85130ca90ac6b8f5d5e23ef7`

## Topic 15 練習問題source
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_practice_source.md`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`
- 一次試験型: `8問`、全問五肢択一
- 二次試験型: `4問`、途中式・前提・単位・理由を記載
- 合計: `12問`
- 固定5過去問・16答案要素接続: `16 / 16 PASS`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 完全解説: `12 / 12`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## Topic 15 練習PDF
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_practice.pdf`
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_practice_qa.md`
- 判定: `PASS / PRACTICE_PDF_COMPLETE`
- A4縦4ページ
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5問・16答案要素接続: `16 / 16 PASS`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- PDF SHA-256: `124c1341180148d102e85cadb64d2e68d1ed082621465d227034f5efa5a58814`
- Git blob SHA: `b8c82a672043c1c52941c9cfdf612a6475144ea8`

## Topic 15 解説画像PowerPoint
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_images.pptx`
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_powerpoint_qa.md`
- 判定: `PASS / POWERPOINT_COMPLETE`
- 16:9・4枚
- 1601×900表示QA: `4 / 4 PASS`
- overflow・文字欠落・重なり・切れ: `0件`
- PPTX ZIP整合性: `PASS`
- 固定5過去問・16答案要素の可視化・接続: `16 / 16 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化: `4 / 4 PASS`
- 共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- SHA-256: `c5fc5495c63266366941f8b9a280737aa38382eea6b3999c8ee81902c9c67d72`
- Git blob SHA: `34c4cf717dea445e87517ba960a486d2e18f8776`

## Topic 15 完成後独立再解答前ゲート
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_blind_reanswer_gate.md`
- 判定: `PASS / BLIND_REANSWER_READY`
- 必須先読み対象: `MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC / STATUS / HANDOFF / main source / 練習source / 各QA / 成果物一覧`
- 固定公式過去問の公式正答番号・標準解答本文保存: `0件`
- 固定公式過去問の完成済み個別答案・個別数値解・導出結果保存: `0件`
- main sourceの公式問題・公式解答URL: `URLのみ / 正答内容保存なし`
- 練習sourceの正答・解説: `教材自身の練習問題 / 固定公式過去問の保存済み正答ではない`
- 固定EXAM_ALIGNMENT・教材本文・PDF/PPTX・共通仮定式系変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## Topic 15 完成後独立再解答 候補答案固定
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_blind_reanswer_candidates.md`
- 判定: `CANDIDATES_FIXED`
- 公式解答・標準解答の先読み: `0件`
- 一次候補答案: `10 / 10 fixed`
- 二次候補答案: `6 / 6 fixed`
- 合計: `16 / 16 fixed`
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材本文・PDF/PPTX変更: `0件`
- SPEC指定9項目・4可視化・共通仮定式系変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## Topic 15 完成後独立再解答
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_blind_reanswer_qa.md`
- 判定: `PASS / BLIND_REANSWER_COMPLETE`
- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `16 / 16 PASS`
- 教材内根拠のみで解答: `PASS`
- 教材外知識による補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC指定9項目・4可視化・共通仮定式系変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## 過去Topic
Topic 01〜14は最終QAまで `PASS / completed`。個別の固定EXAM_ALIGNMENT、成果物、blind再解答、最終QA、既知の個別注意事項は各Topic配下のsource・QAを正本とする。

## 次に行うこと
Topic 15の最終QAを実施し、必須成果物、PDF/PPTX QA、練習問題QA、SPEC境界、進捗記録整合を再確認して `completed` 可否を判定する。
