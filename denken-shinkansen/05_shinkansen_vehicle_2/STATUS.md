# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `14 / 39`
- current_status: `topic_15_final_qa_needs_progress_sync`
- last_completed_topic: `14 300系⑤ 走行抵抗と必要けん引力`
- active_topic: `15 500系 高速域の出力・熱解析`
- next_start: Topic 15の進捗記録4箇所だけを現工程へ同期し、技術内容・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・blind再解答結果を変更せず、最終QAを再判定する

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [x] 03 0系③ 直流主電動機の電圧方程式とトルク — PASS
- [x] 04 0系④ タップ制御と加速特性 — PASS
- [x] 05 0系⑤ 発電ブレーキのエネルギー解析 — PASS
- [x] 06 0系⑥ 主回路全体の電力・損失・効率 — PASS
- [x] 07 直流主回路の高出力化 — PASS
- [x] 08 位相制御と平均直流電圧 — PASS
- [x] 09 直流機方式の損失・熱設計 — PASS
- [x] 10 300系① 誘導電動機等価回路 — PASS
- [x] 11 300系② PWMコンバータ — PASS
- [x] 12 300系③ VVVFインバータと誘導機制御 — PASS
- [x] 13 300系④ 回生と四象限運転 — PASS
- [x] 14 300系⑤ 走行抵抗と必要けん引力 — PASS
- [ ] 15 500系 高速域の出力・熱解析 — IN_PROGRESS / FINAL_QA_NEEDS_PROGRESS_SYNC

詳細な過去TopicのQAは各 `topics/` 配下のsource・QAを正本とする。

## Topic 15 固定EXAM_ALIGNMENT
- source: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal.md`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次10＋二次6、計16
- R8 一次 機械 問1 (1),(2)
- R7 二次 機械・制御 問2 (1)〜(3)
- R5 一次 機械 問1 (1),(3),(5)
- H26 一次 機械 問5 (3)〜(5)
- H25 一次 機械 問3 (1),(2)
- 制作前計算・論理検証: 一次 `10 / 10 PASS`、二次 `6 / 6 PASS`、合計 `16 / 16 PASS`
- 二次記述・計算問題: `1問`
- 制作前の公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 問1 (1),(2)を固定`
- SPEC指定9項目: `9 / 9 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 15 解説source
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal.md`
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・16答案要素の本文マッピング: `16 / 16 PASS`
- 例題数値再計算: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の共通式系・計算条件: `4 / 4 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問の正答記号・個別最終解の新規保存: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 15 解説PDF
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_explanation.pdf`
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_explanation_pdf_qa.md`
- A4縦4ページ
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・16答案要素接続: `16 / 16 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- 4可視化共通仮定式系: `PASS`
- PDF SHA-256: `58c06ad4b257d854e8e3ee15035e73f864f493e0bfd7df361c72498c07fb2984`
- Git blob SHA: `be8cdfaa65b377ca85130ca90ac6b8f5d5e23ef7`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 15 練習問題source
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_practice_source.md`
- 一次試験型: `8問`、全問五肢択一
- 二次試験型: `4問`、途中式・前提・単位・理由を記載
- 合計: `12問`
- 固定5過去問・16答案要素接続: `16 / 16 PASS`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 解説source/PDFの共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## Topic 15 練習PDF
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_practice.pdf`
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_practice_qa.md`
- A4縦4ページ
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・16答案要素接続: `16 / 16 PASS`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 解説source/PDF・練習sourceの共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- PDF SHA-256: `124c1341180148d102e85cadb64d2e68d1ed082621465d227034f5efa5a58814`
- Git blob SHA: `b8c82a672043c1c52941c9cfdf612a6475144ea8`
- 判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 15 解説画像PowerPoint
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_images.pptx`
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_powerpoint_qa.md`
- 16:9・4枚
- 1601×900表示QA: `4 / 4 PASS`
- overflow・文字欠落・重なり・切れ: `0件`
- PPTX ZIP整合性: `PASS`
- 固定5過去問・16答案要素の可視化・接続: `16 / 16 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化: `4 / 4 PASS`
- 解説source/PDF・練習source/PDFの共通仮定式系変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- SHA-256: `c5fc5495c63266366941f8b9a280737aa38382eea6b3999c8ee81902c9c67d72`
- Git blob SHA: `34c4cf717dea445e87517ba960a486d2e18f8776`
- 判定: `PASS / POWERPOINT_COMPLETE`

## Topic 15 完成後独立再解答前ゲート
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_blind_reanswer_gate.md`
- 固定5過去問・16答案要素: `変更なし`
- 必須先読み対象の公式正答番号・標準解答本文保存: `0件`
- 必須先読み対象の完成済み個別答案・個別数値解・導出結果保存: `0件`
- main sourceの公式問題・公式解答URL: `URLのみ / 正答内容保存なし`
- 練習sourceの正答・解説: `教材自身の練習問題 / 固定公式過去問の保存済み正答ではない`
- SPEC指定9項目・4可視化・共通仮定式系変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / BLIND_REANSWER_READY`

## Topic 15 完成後独立再解答 候補答案固定
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_blind_reanswer_candidates.md`
- 公式解答・標準解答の先読み: `0件`
- 一次候補答案: `10 / 10 fixed`
- 二次候補答案: `6 / 6 fixed`
- 合計: `16 / 16 fixed`
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材本文・PDF/PPTX変更: `0件`
- SPEC指定9項目・4可視化・共通仮定式系変更: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 公式照合: `固定後に実施`
- 判定: `CANDIDATES_FIXED`

## Topic 15 完成後独立再解答
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_blind_reanswer_qa.md`
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
- 判定: `PASS / BLIND_REANSWER_COMPLETE`

## Topic 15 最終QA
- QA: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal_final_qa.md`
- 技術内容: `PASS`
- 固定5問・16答案要素: `PASS`
- 完成後blind再解答: `16 / 16 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `FAIL / 4件要同期`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・blind再解答結果の変更: `0件`
- 判定: `NEEDS_REVISION / IN_PROGRESS`

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

## 過去Topic
Topic 01〜14は最終QAまで `PASS / completed`。個別の固定EXAM_ALIGNMENT、成果物、blind再解答、最終QA、既知の個別注意事項は各Topic配下のsource・QAを正本とする。

## 次工程
Topic 15の進捗記録4箇所だけを `topic_15_final_qa_needs_progress_sync` に同期し、技術内容・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・blind再解答結果を変更せず、最終QAを再判定する。
