# 14 300系⑤ 走行抵抗と必要けん引力 — 最終QA

更新日: 2026-09-17

## 判定

`NEEDS_REVISION / IN_PROGRESS`

技術内容、固定EXAM_ALIGNMENT、完成後blind再解答、必須成果物、PDF/PPTX QA、練習問題QA、SPEC境界はPASS。進捗記録4箇所が旧工程のまま残っているため、`completed` にはしない。

## 1. 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 対応過去問を教材だけで自力解答できることを完了条件とする。
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 14: 走行抵抗、加速抵抗、勾配抵抗、けん引力、車輪周力、速度、必要出力、加速度。指定4可視化は速度―走行抵抗、速度―必要けん引力、速度―必要出力、加速曲線。

## 2. 固定EXAM_ALIGNMENT

固定過去問は一次2問＋二次3問、計5問・9答案要素を維持。

- R7 二次 機械・制御 問2 (1),(3)
- R1 二次 機械・制御 問1 (4)
- H26 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (1)
- H25 一次 機械 問3 (1),(2)

固定EXAM_ALIGNMENT変更: `0件`

## 3. 完成後blind再解答

`14_300series_running_resistance_tractive_force_blind_reanswer.md` と `14_300series_running_resistance_tractive_force_blind_reanswer_qa.md` を再確認。

- 固定5問: `5 / 5 PASS`
- 固定9答案要素: `9 / 9 PASS`
- R7二次 問2 (1),(3): `4 / 4 PASS`
- R1二次 問1 (4): `1 / 1 PASS`
- H26二次 問1 (4): `1 / 1 PASS`
- H26一次 問5 (1): `1 / 1 PASS`
- H25一次 問3 (1),(2): `2 / 2 PASS`
- 教材外知識補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

H26二次 問1 (4) は、公式標準解答の掲載式・表示中間値から `48.0 N·m` となる一方で最終印字値のみ `48.1 N·m` となる内部不整合を既存QAで確認済み。新しい許容差・例外規定は追加していない。

blind再解答品質ゲート: `PASS`

## 4. 必須成果物

GitHub正本で次を確認した。

- 主source: `14_300series_running_resistance_tractive_force.md` — 存在
- 解説PDF: `14_300series_running_resistance_tractive_force_explanation.pdf` — 存在
- 練習source: `14_300series_running_resistance_tractive_force_practice_source.md` — 存在
- 練習PDF: `14_300series_running_resistance_tractive_force_practice.pdf` — 存在
- 解説画像PowerPoint: `14_300series_running_resistance_tractive_force_images.pptx` — 存在
- blind再解答前ゲート: `14_300series_running_resistance_tractive_force_blind_reanswer_gate.md` — 存在
- blind答案: `14_300series_running_resistance_tractive_force_blind_reanswer.md` — 存在
- blind再解答QA: `14_300series_running_resistance_tractive_force_blind_reanswer_qa.md` — 存在

必須成果物: `PASS`

## 5. 成果物QA

### 解説PDF
- A4縦3ページ
- 180 dpi表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- 文字欠落・黒四角・重なり・クリップ: `0件`
- 3段階例題: `3 / 3 PASS`
- 固定9答案要素接続: `9 / 9 PASS`
- SPEC指定8項目: `8 / 8 PASS`
- SPEC指定4可視化: `4 / 4 PASS`

### 練習PDF
- A4縦2ページ
- 一次8問＋二次4問、全12問・完全解説
- 180 dpi表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 数値・論理QA: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・理由: `4 / 4 PASS`
- 固定9答案要素接続: `9 / 9 PASS`

### PowerPoint
- 16:9・4スライド
- SPEC指定4可視化: `4 / 4 PASS`
- Visual QA: `4 / 4 PASS`
- overflow / clipping / broken glyph: `0件`
- PPTX ZIP整合性: `PASS`
- 固定9答案要素接続: `9 / 9 PASS`

成果物QA: `PASS`

## 6. SPEC境界

- Topic 13の回生・制動・エネルギー返送再展開: `0件`
- Topic 12のPWM/VVVF/V/f・滑り制御詳細の再展開: `0件`
- 粘着限界追加: `0件`
- 曲線抵抗追加: `0件`
- トンネル抵抗追加: `0件`
- 台車・歯車設計追加: `0件`
- 列車運行計画追加: `0件`
- 根拠のない走行抵抗経験式・係数追加: `0件`
- 未確認300系実車値追加: `0件`
- 教材用仮定値と300系実車値の混同: `0件`

SPEC境界: `PASS`

## 7. 進捗記録整合

次の4箇所が現在地 `topic_14_blind_reanswer_passed` / 最終QAと同期していない。

1. 主source冒頭 `## 状態`: 「次は新しいrunで完成後blind再解答」となっている。
2. 主source末尾 `## 次工程`: 「完成後blind再解答」となっている。
3. 練習source末尾 `## 次工程`: 「練習PDFを制作」となっている。
4. 練習PDF QA末尾 `## 現在地`: `topic_14_practice_pdf_complete`、次工程「解説画像PowerPoint」となっている。

技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTX、blind再解答結果を変更する必要はない。進捗記録だけを同期すれば再判定可能。

進捗記録整合: `FAIL / 4件`

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次2問＋二次3問・9答案要素: `PASS`
- 完成後blind再解答: `9 / 9 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `FAIL / 4件`

したがって現時点の最終判定は `NEEDS_REVISION / IN_PROGRESS`。完成数は `13 / 39` のまま。

次工程は上記4箇所の進捗記録だけを同期する。固定EXAM_ALIGNMENT、技術本文、問題・正答、PDF/PPTX、blind再解答結果は変更しない。同期後にTopic 14最終QAを再判定する。
