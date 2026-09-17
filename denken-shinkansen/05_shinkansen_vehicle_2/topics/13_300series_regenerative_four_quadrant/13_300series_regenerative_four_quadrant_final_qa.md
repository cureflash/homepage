# 13 300系④ 回生と四象限運転 — 最終QA

更新日: 2026-09-17

## 判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、必須成果物、PDF/PPTX QA、練習問題QA、SPEC境界はPASS。未完了理由は進捗記録4箇所が実成果物より古いことだけである。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 対応過去問を教材だけで自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 13: 四象限運転、トルク方向、回転方向、発電機運転、回生電力、直流中間回路、架線側電力フロー、エネルギー収支。指定3可視化は速度・トルク平面、力行・回生時の電力フロー、回生可能エネルギー。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次4問＋二次1問、計5問・15答案要素を維持。

- R6 一次 機械 問2 (1),(2)
- R5 一次 機械 問2 (1),(2),(3),(5)
- H28 一次 機械 問5 (3)〜(5)
- H27 一次 機械 問3 (1),(2)
- H24 二次 機械・制御 問3 (1),(2)a〜c

固定EXAM_ALIGNMENT変更: `0件`

## 3. 完成後独立再解答

`13_300series_regenerative_four_quadrant_independent_reanswer.md` を再確認。

- 一次: `11 / 11 PASS`
- 二次: `4 / 4 PASS`
- 合計: `15 / 15 PASS`
- 教材外知識補完: `0件`
- 公式解答・標準解答との不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

独立再解答品質ゲート: `PASS`

## 4. 必須成果物

- 主source: `13_300series_regenerative_four_quadrant.md` — 存在
- 解説PDF: `13_300series_regenerative_four_quadrant_explanation.pdf` — 存在
- 練習source: `13_300series_regenerative_four_quadrant_practice_source.md` — 存在
- 練習PDF: `13_300series_regenerative_four_quadrant_practice.pdf` — 存在
- 解説画像PowerPoint: `13_300series_regenerative_four_quadrant_images.pptx` — 存在
- 完成後独立再解答記録: `13_300series_regenerative_four_quadrant_independent_reanswer.md` — 存在

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦5ページ
- 180 dpi表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 3段階例題: `3 / 3 PASS`
- 固定15答案要素接続: `15 / 15 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

### 練習PDF
- A4縦2ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定15答案要素接続: `15 / 15 PASS`

### PowerPoint
- 16:9・4スライド
- SPEC指定3可視化: `3 / 3 PASS`
- H24二次型計算再検算: `PASS`
- Visual QA: `4 / 4 PASS`
- overflow / clipping / broken glyph: `0件`
- ZIP/XML整合性: `PASS`

成果物QA: `PASS`

## 6. SPEC境界

- Topic 14の走行抵抗・必要けん引力・加速度計算先取り: `0件`
- H27の回生失効・電力貯蔵・運行間隔追加: `0件`
- H24二次問3の無効電流・出力可能領域追加: `0件`
- Topic 11/12の高調波・力率制御・V/f制御等の再展開: `0件`
- SPEC外制御方式追加: `0件`
- 未確認300系実車値追加: `0件`
- 教材用仮定値と300系実車値の混同: `0件`

SPEC境界: `PASS`

## 7. 進捗記録整合

実成果物は完成後独立再解答まで到達しているが、次の4箇所が旧工程のまま残っている。

1. 主source冒頭状態欄: `次は練習PDFを作成する` のまま。
2. 主source末尾: `練習PDFを作成する` のまま。
3. 練習source末尾: `このsourceを正本として練習PDFを作成` のまま。
4. 練習PDF QA末尾: current_statusが `topic_13_practice_pdf_complete`、次工程がPowerPointのまま。

技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX成果物を変更する必要はない。上記4箇所だけを実成果物へ同期した後、最終QAを再判定する。

進捗記録整合: `FAIL`

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次4問＋二次1問・15答案要素: `PASS`
- 完成後独立再解答: `15 / 15 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `FAIL`

したがって最終判定は `NEEDS_REVISION / IN_PROGRESS`。完成数は `12 / 39` のままとする。

次工程は進捗記録4箇所だけを実成果物へ同期する。固定EXAM_ALIGNMENT、技術本文、問題・正答、PDF/PPTX、完成後独立再解答結果は変更しない。