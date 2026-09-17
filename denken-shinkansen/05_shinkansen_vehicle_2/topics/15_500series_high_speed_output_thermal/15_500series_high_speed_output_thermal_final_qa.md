# 15 500系 高速域の出力・熱解析 — 最終QA

更新日: 2026-09-18

## 判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容、固定EXAM_ALIGNMENT、完成後blind再解答、必須成果物、PDF/PPTX QA、練習問題QA、SPEC境界はすべてPASSした。一方、現在工程を示す進捗記録4箇所が旧工程のまま残っているため、上位仕様の「GitHub正本と実在成果物による完了判定」に照らしてTopic 15をまだ `completed` とはしない。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 対応過去問を教材だけで自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 15: `P=ωT`、高速域トルク、定出力領域、電流制限、電圧制限、損失、発熱、冷却、温度上昇。指定4可視化は回転速度―トルク、回転速度―出力、出力―損失、簡略熱モデル。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次4問＋二次1問、計5問・16答案要素を維持。

- R8 一次 機械 問1 (1),(2)
- R7 二次 機械・制御 問2 (1)〜(3)
- R5 一次 機械 問1 (1),(3),(5)
- H26 一次 機械 問5 (3)〜(5)
- H25 一次 機械 問3 (1),(2)

- 一次答案要素: `10`
- 二次答案要素: `6`
- 合計: `16`
- 二次記述・計算問題: `1問`
- 制作前計算・論理検証: `16 / 16 PASS`
- 参考教材2系統以上: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`

## 3. 完成後blind再解答

`15_500series_high_speed_output_thermal_blind_reanswer_candidates.md` と `15_500series_high_speed_output_thermal_blind_reanswer_qa.md` を再確認した。

- 固定5問: `5 / 5 PASS`
- 一次答案要素: `10 / 10 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `16 / 16 PASS`
- 教材内根拠のみで解答: `PASS`
- 教材外知識による補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

blind再解答品質ゲート: `PASS`

## 4. 必須成果物

GitHub正本で次を確認した。

- 主source: `15_500series_high_speed_output_thermal.md` — 存在
- 解説PDF: `15_500series_high_speed_output_thermal_explanation.pdf` — 存在
- 解説PDF QA: `15_500series_high_speed_output_thermal_explanation_pdf_qa.md` — 存在
- 練習source: `15_500series_high_speed_output_thermal_practice_source.md` — 存在
- 練習PDF: `15_500series_high_speed_output_thermal_practice.pdf` — 存在
- 練習PDF QA: `15_500series_high_speed_output_thermal_practice_qa.md` — 存在
- 解説画像PowerPoint: `15_500series_high_speed_output_thermal_images.pptx` — 存在
- PowerPoint QA: `15_500series_high_speed_output_thermal_powerpoint_qa.md` — 存在
- blind再解答前ゲート: `15_500series_high_speed_output_thermal_blind_reanswer_gate.md` — 存在
- blind候補答案: `15_500series_high_speed_output_thermal_blind_reanswer_candidates.md` — 存在
- blind再解答QA: `15_500series_high_speed_output_thermal_blind_reanswer_qa.md` — 存在

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦4ページ
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 3段階例題: `3 / 3 PASS`
- 固定16答案要素接続: `16 / 16 PASS`
- SPEC指定9項目: `9 / 9 PASS`
- SPEC指定4可視化: `4 / 4 PASS`

### 練習PDF
- A4縦4ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定16答案要素接続: `16 / 16 PASS`

### PowerPoint
- 16:9・4スライド
- SPEC指定4可視化: `4 / 4 PASS`
- Visual QA: `4 / 4 PASS`
- overflow / clipping / broken glyph: `0件`
- PPTX ZIP整合性: `PASS`
- 固定16答案要素接続: `16 / 16 PASS`

成果物QA: `PASS`

## 6. SPEC境界

- Topic 12のVVVF・V/f・すべり制御: 定出力領域・電圧制限・電流制限との接続に必要な範囲だけ参照 — `PASS`
- Topic 16の多レベル変換器・PWM・素子電圧・高調波追加: `0件`
- 詳細熱流体解析追加: `0件`
- 冷却風量設計追加: `0件`
- 絶縁寿命モデル追加: `0件`
- 軸受・歯車・車体空力設計追加: `0件`
- 未確認500系実車値追加: `0件`
- 教材用仮定値と500系実車値の混同: `0件`
- 簡略熱モデルを第二種公式過去問の直接出題論点として扱った箇所: `0件`

SPEC境界: `PASS`

## 7. 進捗記録整合

現在工程を示す4箇所をGitHub正本で確認した。

1. 主source冒頭 `## 状態`: `PASS / EXPLANATION_SOURCE_COMPLETE`、次工程が解説PDFのまま — `FAIL`
2. 主source末尾 `## 次工程`: 解説PDF作成のまま — `FAIL`
3. 練習source末尾 `## 次工程`: 練習PDF作成のまま — `FAIL`
4. 練習PDF QA末尾 `## 現在地`: 次工程が解説画像PowerPoint作成のまま — `FAIL`

進捗記録整合: `0 / 4 PASS`、要同期 `4件`。

解説PDF QA、PowerPoint QA、blind再解答QAの末尾に残る「次工程」は各成果物作成時点の履歴として扱い、現在工程を示す正本4箇所には含めない。

技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、blind再解答結果の変更: `0件`

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次4問＋二次1問・16答案要素: `PASS`
- 完成後blind再解答: `16 / 16 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `FAIL / 4件要同期`

したがってTopic 15は `NEEDS_REVISION / IN_PROGRESS` とする。完成数は `14 / 39` のまま。

次工程は進捗記録4箇所だけを現工程へ同期し、技術内容・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・blind再解答結果を変更せず、Topic 15最終QAを再判定する。
