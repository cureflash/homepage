# 19 ミニ新幹線 複電圧主回路 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / completed`

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、当該系列 `SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 19の必須成果物・各QA・完成後clean blind記録、直近同系列worker成果をreconcileした。

直近同系列workerは、clean blind候補固定 → 公式照合 → 主source / HANDOFF同期まで完了済みであり、本工程では重複再解答を行っていない。技術成果物、問題、正答、数式、固定EXAM_ALIGNMENTは変更していない。

## 1. 上位仕様確認

- `MASTER_SPEC.md`: 教材だけで対応過去問を自力解答できることを完了条件とする。
- `EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 19: 複電圧、主変圧器、巻数比、タップ、一次電流、絶縁、主変換装置、補助電源、電源切替。指定3可視化は電源電圧―一次電流、タップ条件―二次電圧、同一出力時の電源条件比較。

上位仕様確認: `PASS`。

## 2. 固定EXAM_ALIGNMENT

固定5問・9答案要素を変更していない。

- R5 一次 機械 問3 `(2)`: 1要素
- R5 一次 機械 問4 `(4)(5)`: 2要素
- R5 一次 電力 問6 `(3)`: 1要素
- H25 一次 電力 問2 `(1)(2)(3)`: 3要素
- R5 二次 機械・制御 問2 `(1)(2)`: 2要素
- 一次: `7答案要素`
- 二次: `2答案要素`
- 合計: `5問・9答案要素`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`。

## 3. 完成後clean blind

候補答案を先に固定した後、公式解答・標準解答を照合した現行記録を確認した。

- R5一次 機械 問3 `(2)`: `1 / 1 PASS`
- R5一次 機械 問4 `(4)(5)`: `2 / 2 PASS`
- R5一次 電力 問6 `(3)`: `1 / 1 PASS`
- H25一次 電力 問2 `(1)(2)(3)`: `3 / 3 PASS`
- R5二次 機械・制御 問2 `(1)(2)`: `2 / 2 PASS`
- 一次: `7 / 7 PASS`
- 二次: `2 / 2 PASS`
- 合計: `9 / 9 PASS`
- 固定5問: `5 / 5 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`

完成後clean blind品質ゲート: `PASS`。

## 4. 必須成果物

GitHub正本で実在を確認した。

- 主source: `19_mini_shinkansen_dual_voltage_main_circuit.md`
- 解説source: `19_mini_shinkansen_dual_voltage_main_circuit_explanation_source.md`
- 解説PDF: `19_mini_shinkansen_dual_voltage_main_circuit_explanation.pdf`
- 解説PDF QA: `19_mini_shinkansen_dual_voltage_main_circuit_explanation_pdf_qa.md`
- 練習source: `19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`
- 練習PDF: `19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- 練習PDF QA: `19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`
- 解説画像PowerPoint: `19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- PowerPoint QA: `19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md`
- clean blind候補答案: `19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_candidates_clean.md`
- 公式照合記録: `19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_official_check.md`

必須成果物: `PASS`。

## 5. 成果物QA

### 解説PDF
- A4縦2ページ
- pdfium / pdftoppm 180 dpi: `2 / 2 PASS / 2 / 2 PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 数式・数値QA: `PASS`
- 固定9答案要素接続: `9 / 9 PASS`
- 3段階例題: `3 / 3 PASS`

### 練習PDF
- A4縦5ページ
- pdfium / pdftoppm 180 dpi: `5 / 5 PASS / 5 / 5 PASS`
- qpdf構造・文字抽出・外周クリップ安全域: `PASS`
- 一次8問＋二次4問、完全解説: `12 / 12`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定9答案要素接続: `9 / 9 PASS`

### PowerPoint
- 16:9・4スライド
- python-pptx open / ZIP整合性: `PASS / PASS`
- LibreOffice PDF変換 / 1600×900表示: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- 固定9答案要素接続: `9 / 9 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

成果物QA: `PASS`。

## 6. SPEC境界

- 複電圧、主変圧器、巻数比、タップ、一次電流、絶縁、主変換装置、補助電源、電源切替: `9 / 9 covered`
- 電源電圧―一次電流、タップ条件―二次電圧、同一出力時の電源条件比較: `3 / 3 covered`
- H25一次「電力」問2は一般的なタップ切換原理としてのみ使用: `PASS`
- H25論点をミニ新幹線実車採用方式として扱う記述: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`

SPEC境界: `PASS`。

## 7. worker成果・進捗整合

直近同系列成果を重複せず引き継いだ。

- clean blind候補固定 commit `81a9510e50bf17130c1223fcb9cf2c00dace80b4`
- clean blind公式照合 commit `88063075bb3e7014a6d2f79dba1c4ec03514ccfe` 以降の記録・同期を確認
- 主source / STATUS / HANDOFF は最終QA前状態 `topic_19_clean_blind_official_check_complete`、次工程 `Topic 19最終QA` で一致
- 個別QAに残る「次工程」「clean blind未実施」の記載は、そのQA実施時点の履歴であり、後続のclean blind公式照合記録と矛盾する技術blockerではない
- 最終QA工程で教材本文・問題・正答・数式・PDF/PPTX本体・固定過去問・固定EXAM_ALIGNMENTの変更: `0件`

進捗記録整合: `PASS`。

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次4問＋二次1問・9答案要素: `PASS`
- 完成後clean blind: `9 / 9 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 仕様外追加: `0件`

したがって最終判定は `PASS / completed`。完成数は `19 / 39`。

次工程はTopic 20「N700系 フィードバック制御」の制作前EXAM_ALIGNMENT。