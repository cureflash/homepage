# STATUS - 新幹線車両・電験二種

更新日: 2026-09-21

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `37 / 39`
- current_status: `topic_38_explanation_pdf_remediated`
- last_completed_topic: `37 ATC③ 速度制御系`
- active_topic: `38 COMTRAC 列車追跡・進路制御・高信頼化`
- next_start: 最新main、上位2仕様書、系列`SPEC.md`、本`STATUS.md`、`HANDOFF.md`、remediated EXAM_ALIGNMENT・解説source・練習source・再生成済み解説PDF/QAをreconcileし、練習PDFを再生成＋PDF QAする。その後、PowerPoint、fresh clean blind v2へ進む。remediation前の派生成果物は流用しない。

Topic 01〜37は `PASS / completed`。完成数は `37 / 39`。

## Topic 37 ATC③ 速度制御系

判定: `PASS / completed`

- 制作前EXAM_ALIGNMENT＋QA: `PASS`
- 解説source/PDF、練習source/PDF、PowerPoint＋render/content QA: `PASS`
- 固定5問・25答案要素: 一次 `5 / 5`、二次 `20 / 20`、合計 `25 / 25 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`
- clean blind v2: `25 / 25 PASS`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- exact blocker: `0件`

## Topic 38 COMTRAC 列車追跡・進路制御・高信頼化

状態: `EXPLANATION_PDF_REMEDIATED / practice_pdf_regeneration_pending`

### clean blind v1診断

- 公式標準解答一致: `25 / 25 PASS`
- 教材だけで導出: `23 / 25 FAIL`
- FAIL 1: R8一次「機械」問8(5) — ステッピングモータの角位置センサなし簡易位置決め・脱調条件不足
- FAIL 2: H23一次「機械」問8(3) — ノイマン形コンピュータ不足
- mapping不整合: H29問8、H23問8
- v1 candidate修正: `0件`

### remediation進捗

EXAM_ALIGNMENT＋QA: `PASS / REMEDIATED`

- 固定5問変更: `0件`
- H29実空欄へ修正: `(1)逐次的 (2)結合 (3)ドライバ (4)大きくなる (5)ブラックボックス`
- H23実空欄へ修正: `(1)組合せ回路 (2)フリップフロップ (3)ノイマン形コンピュータ (4)ASIC (5)Quine–McCluskey法`
- 一次: `5問 / 25答案要素`、`25 / 25 PASS`
- 二次: `0問`、直接対応なし・件数合わせ `0件`
- SPEC固定9項目: `9 / 9 PASS`

解説source＋source QA: `PASS / REMEDIATED`

- R8(5) センサレス/オープンループ簡易位置決め・脱調: `PASS`
- H23(3) 記憶プログラム方式・原則逐次命令実行: `PASS`
- H29(4) 単体→結合→システム試験で対象プログラム量・範囲が大きくなる: `PASS`
- 固定25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

練習source＋source QA: `PASS / REMEDIATED`

- 一次試験型: `12問 / 12問五肢択一`
- 一次正答一意性: `12 / 12 PASS`
- 二次試験型: `0題`、直接対応なし・件数合わせ `0件`
- R8(5) 角位置センサなしオープンループ簡易位置決め・脱調条件: `PASS`
- H23(3) ノイマン形コンピュータの記憶プログラム方式・原則逐次命令実行: `PASS`
- H29(4) 単体→結合→システム試験で対象プログラム量・範囲が大きくなる: `PASS`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- H29/H23実空欄mapping: `10 / 10 PASS`
- 固定5問・25答案要素: `25 / 25 PASS`
- SPEC固定9項目: `9 / 9 PASS`
- 計算再検算: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

解説PDF＋PDF QA: `PASS / REMEDIATED`

- remediated sourceから再生成: `PASS`
- A4縦: `4頁`
- PDFium / Poppler render: `4 / 4 PASS`
- visual inspection: `4 / 4 PASS`
- clean blind v1 remediation必須3点: `3 / 3 PASS`
- 固定5問・25答案要素: `25 / 25 connected`
- SPEC固定9項目: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`
- 未確認COMTRAC実装・数値の真値化: `0件`
- Topic 39先取り: `0件`
- exact blocker: `0件`

### 既存派生成果物の扱い

解説PDFはremediated sourceへ再同期済み。clean blind v1以前の練習PDF、PowerPointはremediation前の内容を含むためTopic 38完成判定には使用しない。以下を順に再同期する。

1. practice PDF / PDF QA
2. PowerPoint / PowerPoint QA
3. fresh clean blind v2

固定9項目、COMTRAC実装境界、二次0問、Topic 39非先取りは維持する。

## Topic 21 固定注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として診断済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
