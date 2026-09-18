# 16 700系 多レベル変換器とPWM — 最終QA

更新日: 2026-09-18

## 判定

`PASS / completed`

技術内容、固定EXAM_ALIGNMENT、完成後blind再解答、必須成果物、PDF/PPTX QA、練習問題QA、SPEC境界、進捗記録整合を再確認し、全件PASSとした。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 対応過去問を教材だけで自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 16: 多レベル変換、PWM、素子電圧、出力電圧、高調波、`dv/dt`、スイッチング周波数、変換効率。指定3可視化は2レベル・多レベル出力波形比較、高調波比較、素子電圧比較。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次4問＋二次1問、計5問・26答案要素を維持。

- R7 一次 機械 問4 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- H29 一次 機械 問3 (1)〜(5)
- H24 一次 機械 問3 (1)〜(5)
- H24 二次 機械・制御 問3 (1)〜(4)

- 一次答案要素: `20`
- 二次答案要素: `6`
- 合計: `26`
- 二次記述・計算問題: `1問`
- 制作前計算・論理検証: `26 / 26 PASS`
- 参考教材2系統以上: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`

## 3. 完成後blind再解答

`16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md` と `16_700series_multilevel_converter_pwm_blind_reanswer_qa.md` を再確認した。

- 固定5問: `5 / 5 PASS`
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `6 / 6 PASS`
- 合計: `26 / 26 PASS`
- 教材内根拠のみで解答: `PASS`
- 教材外知識による補完: `0件`
- 公式解答・標準解答との内容不一致: `0件`
- H24二次 (2b) の `K≈0.950` と標準解答 `K≈0.949`: 同一式・同一厳密値の丸め差で `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`

blind再解答品質ゲート: `PASS`

## 4. 必須成果物

GitHub正本で次を確認した。

- 主source: `16_700series_multilevel_converter_pwm.md` — 存在
- 解説PDF: `16_700series_multilevel_converter_pwm_explanation.pdf` — 存在
- 解説PDF QA: `16_700series_multilevel_converter_pwm_explanation_pdf_qa.md` — 存在
- 練習source: `16_700series_multilevel_converter_pwm_practice_source.md` — 存在
- 練習PDF: `16_700series_multilevel_converter_pwm_practice.pdf` — 存在
- 練習PDF QA: `16_700series_multilevel_converter_pwm_practice_qa.md` — 存在
- 解説画像PowerPoint: `16_700series_multilevel_converter_pwm_images.pptx` — 存在
- PowerPoint QA: `16_700series_multilevel_converter_pwm_powerpoint_qa.md` — 存在
- blind再解答前ゲート: `16_700series_multilevel_converter_pwm_blind_reanswer_gate.md` — 存在
- blind候補答案: `16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md` — 存在
- blind再解答QA: `16_700series_multilevel_converter_pwm_blind_reanswer_qa.md` — 存在

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦4ページ
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- 3段階例題: `3 / 3 PASS`
- 固定26答案要素接続: `26 / 26 PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

### 練習PDF
- A4縦4ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi表示QA: `4 / 4 PASS`
- PDF open/preflight・文字抽出: `PASS`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定26答案要素接続: `26 / 26 PASS`

### PowerPoint
- 16:9・4スライド
- 1600×900表示QA: `4 / 4 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- overflow / clipping / broken glyph: `0件`
- PPTX ZIP整合性: `PASS`
- 固定26答案要素接続: `26 / 26 PASS`

成果物QA: `PASS`

## 6. SPEC境界

- Topic 11のPWMコンバータ: 前提確認に必要な範囲だけ参照 — `PASS`
- Topic 12のVVVF・V/f・誘導機速度制御追加: `0件`
- Topic 13の回生・四象限運転追加: `0件`
- Topic 17のパワー半導体詳細損失比較追加: `0件`
- `dv/dt`を固定公式過去問の直接出題論点として扱った箇所: `0件`
- 未確認700系実車回路・レベル数・電圧・素子定格・キャリア周波数・効率の真値化: `0件`
- 教材用仮定値と700系実車値の混同: `0件`

SPEC境界: `PASS`

## 7. 進捗記録整合

初回最終QAで唯一FAILだった4箇所を再確認した。

1. 主source冒頭 `## 状態`: `topic_16_progress_sync_complete`、次工程を最終QA再判定へ同期済み。
2. 主source末尾 `## 次工程`: Topic 16最終QA再判定へ同期済み。
3. 練習source末尾 `## 次工程`: `topic_16_progress_sync_complete`、Topic 16最終QA再判定へ同期済み。
4. 練習PDF QA末尾 `## 現在地`: `topic_16_progress_sync_complete`、Topic 16最終QA再判定へ同期済み。

旧工程表現は `4 / 4` 解消済み。技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・blind再解答結果の修正は不要だった。

進捗記録整合: `PASS`

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次4問＋二次1問・26答案要素: `PASS`
- 完成後blind再解答: `26 / 26 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`
- SPEC外追加: `0件`

したがって最終判定は `PASS / completed`。完成数は `16 / 39`。

次工程はTopic 17「パワー半導体の損失比較」の制作前EXAM_ALIGNMENT。
