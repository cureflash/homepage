# STATUS - 新幹線車両・電験二種

更新日: 2026-09-18

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `14 / 39`
- current_status: `topic_15_practice_source_complete`
- last_completed_topic: `14 300系⑤ 走行抵抗と必要けん引力`
- active_topic: `15 500系 高速域の出力・熱解析`
- next_start: Topic 15の練習PDFを作成する。固定EXAM_ALIGNMENT、SPEC固定範囲、解説source/PDFと練習sourceの共通仮定式系を変更せず、一次8問・二次4問・完全解説12問・固定16答案要素を欠落させない

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
- [ ] 15 500系 高速域の出力・熱解析 — IN_PROGRESS / PRACTICE_SOURCE_PASS

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

## Topic 14 固定EXAM_ALIGNMENT
- source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`
- 固定過去問: 一次2問＋二次3問、計5問
- 固定答案要素: 一次3＋二次6、計9
- R7 二次 機械・制御 問2 (1),(3)
- R1 二次 機械・制御 問1 (4)
- H26 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (1)
- H25 一次 機械 問3 (1),(2)
- 制作前計算・論理検証: 一次 `3 / 3 PASS`、二次 `6 / 6 PASS`、合計 `9 / 9 PASS`
- 二次記述問題: `3問`
- 制作前の公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 固定対象なし`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## Topic 14 解説source
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`
- 解説本文: `完成`
- 3段階例題: `3 / 3 PASS`
- 固定5過去問・9答案要素の本文マッピング: `9 / 9 PASS`
- 例題数値再計算: `PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化への計算条件: `4 / 4 PASS`
- 4可視化の共通仮定式系: `PASS`
- 未確認300系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 14 解説PDF
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation.pdf`
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation_pdf_qa.md`
- A4縦3ページ
- 180 dpi表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化: `4 / 4 PASS`
- 4可視化共通仮定式系: `PASS`
- PDF SHA-256: `32d691584b5d898b80389f20810ba2e3a22d9825d7b58502e9af9dd355c4a180`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認300系実車値の真値化: `0件`
- 判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 14 練習問題source
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_source.md`
- 一次試験型: `8問`、全問五肢択一
- 二次試験型: `4問`、途中式・前提・単位・理由を記載
- 合計: `12問`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 数値・論理再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 4可視化共通仮定式系の変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認300系実車値の真値化: `0件`
- 判定: `PASS / PRACTICE_SOURCE_COMPLETE`

## Topic 14 練習PDF
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice.pdf`
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_qa.md`
- A4縦2ページ
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 180 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 数値・論理整合: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定4可視化の式系・条件との整合: `4 / 4 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認300系実車値の真値化: `0件`
- PDF SHA-256: `c6294a3297daf587a8c60969d588a78d28ece396a46a3c646131e6edb6e690c7`
- 判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 14 解説画像PowerPoint
- path: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_images.pptx`
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_powerpoint_qa.md`
- 16:9・4枚
- SPEC指定4可視化: `4 / 4 PASS`
- 1600×900表示QA: `4 / 4 PASS`
- 文字・数式・図の欠落、重なり、切れ: `0件`
- overflow: `0件`
- PDF文字抽出QA: `PASS`
- PPTX ZIP整合性: `PASS`
- 固定5過去問・9答案要素接続: `9 / 9 PASS`
- 4可視化共通仮定式系: `PASS`
- 前進オイラー法: `Δt=1 s`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認300系実車値の真値化: `0件`
- PPTX SHA-256: `ccacae7c24460cdc95e34ff86a821df0798e6694cbab626d07dc43ea387f00e4`
- Git blob SHA: `e7193da320ce93219cd65044fbb8d7badf43ceb9`
- 判定: `PASS / POWERPOINT_COMPLETE`

## Topic 14 独立再解答前ゲート
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer_gate.md`
- 判定: `PASS / BLIND_REANSWER_READY`
- main source の制作前検証欄から固定公式過去問の個別数値解・正答記号・完成済み答案を除去済み
- `保存済み正答を見ずに` 行うブラインド条件: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存教材本文・成果物変更: `0件`
- SPEC外追加: `0件`

## Topic 14 完成後blind再解答
- blind答案: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer.md`
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer_qa.md`
- 公式解答を開く前のblind答案固定: `PASS`
- 固定5問再解答: `5 / 5 PASS`
- 固定9答案要素: `9 / 9 PASS`
- R7二次 問2 (1),(3): `4 / 4 PASS`
- R1二次 問1 (4): `1 / 1 PASS`
- H26二次 問1 (4): `1 / 1 PASS`
- H26一次 問5 (1): `1 / 1 PASS`
- H25一次 機械 問3 (1),(2): `2 / 2 PASS`
- H26二次 問1 (4) blind再計算: `I2'=22.430886... A`, `TL=48.046775... N·m` → `48.0 N·m`
- 公式標準解答は掲載式・表示中間値と最終印字値 `48.1 N·m` が内部不整合。公式掲載値 `I2'=22.430 A` の再代入でも `48.04298... N·m` → `48.0 N·m`
- 電験王2の独立解説も `48.047 -> 48.0 N·m`。新しい許容差は設けず、公式問題条件と公式掲載式の算術再現により個別不整合を確定
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存教材本文・成果物変更: `0件`
- SPEC外追加: `0件`
- 判定: `PASS / BLIND_REANSWER_COMPLETE`

## Topic 14 最終QA
- QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_final_qa.md`
- 技術内容: `PASS`
- 固定5問・9答案要素: `PASS`
- 完成後blind再解答: `9 / 9 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `4 / 4 PASS`
- 判定: `PASS / completed`
- 完成数変更: `13 / 39 → 14 / 39`

## Topic 14 進捗記録同期
- 主source冒頭 `## 状態`: `PASS`
- 主source末尾 `## 次工程`: `PASS`
- 練習source末尾 `## 次工程`: `PASS`
- 練習PDF QA末尾 `## 現在地`: `PASS`
- 進捗記録整合: `4 / 4 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 技術本文・問題/正答・PDF/PPTX・blind再解答結果変更: `0件`
- 判定: `PASS / PROGRESS_SYNC_COMPLETE`
- 完成数変更: `なし / 13 / 39`

## Topic 14 固定範囲
扱う内容:
- 走行抵抗
- 加速抵抗
- 勾配抵抗
- けん引力
- 車輪周力
- 速度
- 必要出力
- 加速度

SPEC指定可視化:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 加速曲線

範囲境界:
- Topic 13の回生・制動・エネルギー返送は再展開しない
- Topic 12のPWM/VVVF/V/f制御等は `P=Tω` 接続に必要な範囲以上へ戻らない
- 粘着限界、曲線抵抗、トンネル抵抗、台車・歯車設計、列車運行計画は追加しない
- 走行抵抗の内訳・経験式・係数は根拠のある範囲を超えて追加しない
- 未確認の300系質量・走行抵抗係数・伝達効率を実車値として追加しない

## 次工程
Topic 15「500系 高速域の出力・熱解析」の練習PDFを作成する。固定EXAM_ALIGNMENT、SPEC固定範囲、解説source/PDFと練習sourceの共通仮定式系を変更せず、一次8問・二次4問・完全解説12問・固定16答案要素を欠落させない。
