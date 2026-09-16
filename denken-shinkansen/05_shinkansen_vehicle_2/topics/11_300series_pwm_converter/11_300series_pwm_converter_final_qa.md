# 11 300系② PWMコンバータ — 最終QA

更新日: 2026-09-16

## 判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容、固定EXAM_ALIGNMENT、一次・二次の独立再解答、必須成果物、表示・構造QA、練習問題QA、SPEC境界はすべてPASS。未完了理由は進捗記録3箇所のみで、主source冒頭・主source末尾・練習source末尾が旧工程のまま残っている。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 教材だけで対応過去問を自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 11: PWMコンバータ、直流中間回路、基本波、高調波、力率制御、直流電圧制御、スイッチング、変換損失。指定4可視化はPWM波形、基本波・高調波、変調条件―基本波電圧、入力電流波形。
- Topic 12のVVVF・V/f・同期速度・すべり・定トルク／定出力領域、Topic 13の回生・四象限運転・回生エネルギーは追加しない。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次2問＋二次3問、計5問・27答案要素を維持。

- R5 二次 機械・制御 問3 (1)〜(5)
- R4 一次 機械 問4 (1)〜(5)
- R1 二次 機械・制御 問3 (1)〜(3)
- H24 二次 機械・制御 問3 (1)〜(4)
- H22 一次 機械 問3 (1)〜(5)

固定EXAM_ALIGNMENT変更: `0件`

## 3. 完成後独立再解答

`11_300series_pwm_converter_independent_reanswer.md` を確認。

- 一次: `10 / 10 PASS`
- 二次: `17 / 17 PASS`
- 合計: `27 / 27 PASS`
- 教材外知識補完: `0件`
- 正答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

独立再解答品質ゲート: `PASS`

## 4. 必須成果物

- 主source: `11_300series_pwm_converter.md` — 存在
- 解説PDF: `11_300series_pwm_converter_explanation.pdf` — 存在
- 練習source: `11_300series_pwm_converter_practice_source.md` — 存在
- 練習PDF: `11_300series_pwm_converter_practice.pdf` — 存在
- 解説画像PowerPoint: `11_300series_pwm_converter_images.pptx` — 存在
- 完成後独立再解答記録: `11_300series_pwm_converter_independent_reanswer.md` — 存在

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦5ページ
- 180 dpi Visual QA: `5 / 5 PASS`
- overlap / clipping / broken glyph: `0件`
- 文字抽出QA: `PASS`
- 3段階例題: `3 / 3`
- SPEC指定4可視化: `4 / 4`

### 練習PDF
- A4縦3ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi Visual QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 計算・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`

### PowerPoint
- 16:9・4スライド
- SPEC指定4可視化: `4 / 4 PASS`
- Visual QA: `4 / 4 PASS`
- overflow: `0件 / PASS`
- ZIP/XML整合性: `PASS`

成果物QA: `PASS`

## 6. SPEC境界

- 固定範囲外追加: `0件`
- Topic 12〜13先取り: `0件`
- 未確認300系実車値追加: `0件`
- 教材用仮定値・正規化値と300系実車値の混同: `0件`

SPEC境界: `PASS`

## 7. 進捗記録整合

`STATUS.md` と `HANDOFF.md` は本QAで更新対象。

主source `11_300series_pwm_converter.md` に旧進捗が2箇所残っている。

1. 冒頭状態欄:
   - 「解説本文＋3段階例題まで完成。解説PDF・練習・PowerPoint・完成後独立再解答・最終QAは未実施。」
2. 末尾の解説source品質確認:
   - 状態が `topic_11_explanation_source_complete`
   - 次工程が解説PDF作成

練習source `11_300series_pwm_converter_practice_source.md` 末尾にも旧進捗が1箇所残っている。

3. 独立QA末尾:
   - 状態が `topic_11_practice_source_complete`
   - 次工程が練習PDF作成

いずれも現行成果物・独立再解答の実態と不一致であるため、進捗記録整合を `FAIL` とする。教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・PDF/PPTXを変更する必要はない。

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次2問＋二次3問・27答案要素: `PASS`
- 完成後独立再解答: `27 / 27 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `FAIL`（主source2箇所＋練習source1箇所）

したがって最終判定は `NEEDS_REVISION / IN_PROGRESS`。完成数は `10 / 39` のまま。

次工程は主source2箇所・練習source1箇所の旧進捗記録だけを実成果物へ同期する。技術内容・固定EXAM_ALIGNMENT・数式・例題・問題・PDF/PPTXには触れない。同期後に最終QAを再判定する。
