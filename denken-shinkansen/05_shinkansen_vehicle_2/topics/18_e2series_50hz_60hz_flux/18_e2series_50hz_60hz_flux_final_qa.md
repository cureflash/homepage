# 18 E2系 50Hz・60Hzと磁束 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / completed`

最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、当該系列 `SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 18の必須成果物・各QA・完成後clean blind記録、直近同系列worker成果をreconcileした。

前回最終QAの唯一のblockerだった進捗記録不整合は、主source・`STATUS.md`・`HANDOFF.md` の同期により解消した。技術成果物、問題、正答、数式、PDF/PPTX本体、固定EXAM_ALIGNMENTは前回最終QA後に変更していない。

## 1. 上位仕様確認

- `MASTER_SPEC.md`: 教材だけで対応過去問を自力解答できることを完了条件とする。
- `EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 18: V/f、磁束、変圧器誘起電圧、鉄心磁束密度、同期速度、インバータ出力周波数、機器定格。指定3可視化は周波数―磁束密度、V/f特性、周波数―同期速度。

上位仕様確認: `PASS`。

## 2. 固定EXAM_ALIGNMENT

固定5問・15答案要素を変更していない。

- R7 二次 機械・制御 問2 `(1)の滑り算出`: 1要素
- R2 二次 機械・制御 問1 `(1)〜(7)`: 7要素
- R2 一次 機械 問3 `(1)(4)(5)`: 3要素
- R2 一次 機械 問5 `(3)(4)(5)`: 3要素
- H25 一次 機械 問2 `(5)`: 1要素
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`。

## 3. 完成後clean blind

候補答案固定後に公式解答・標準解答を照合した現行記録を確認した。

- R7二次 問2: `1 / 1 PASS`
- R2二次 問1: `7 / 7 PASS`
- R2一次 問3: `3 / 3 PASS`
- R2一次 問5: `3 / 3 PASS`
- H25一次 問2: `1 / 1 PASS`
- 一次: `7 / 7 PASS`
- 二次: `8 / 8 PASS`
- 合計: `15 / 15 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`

完成後clean blind品質ゲート: `PASS`。

## 4. 必須成果物

GitHub正本で実在を確認した。

- 主source: `18_e2series_50hz_60hz_flux.md`
- 解説source: `18_e2series_50hz_60hz_flux_explanation_source.md`
- 解説PDF: `18_e2series_50hz_60hz_flux_explanation.pdf`
- 解説PDF QA: `18_e2series_50hz_60hz_flux_explanation_pdf_qa.md`
- 練習source: `18_e2series_50hz_60hz_flux_practice_source.md`
- 練習PDF: `18_e2series_50hz_60hz_flux_practice.pdf`
- 練習PDF QA: `18_e2series_50hz_60hz_flux_practice_qa.md`
- 解説画像PowerPoint: `18_e2series_50hz_60hz_flux_images.pptx`
- PowerPoint QA: `18_e2series_50hz_60hz_flux_powerpoint_qa.md`
- clean blind候補答案: `18_e2series_50hz_60hz_flux_blind_reanswer_candidates_clean.md`
- 公式照合記録: `18_e2series_50hz_60hz_flux_blind_reanswer_official_check.md`

必須成果物: `PASS`。

## 5. 成果物QA

### 解説PDF
- A4縦6ページ
- 180 dpi表示: `6 / 6 PASS`
- pdfium / pdftoppm: `6 / 6 PASS / 6 / 6 PASS`
- 文字抽出: `PASS`
- 数値独立再計算: `8 / 8 PASS`
- 固定15答案要素マッピング: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`

### 練習PDF
- A4縦5ページ
- pdfium / pdftoppm 180 dpi: `5 / 5 PASS / 5 / 5 PASS`
- 一次8問＋二次4問、完全解説: `12 / 12`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定15答案要素接続: `15 / 15 PASS`

### PowerPoint
- 16:9・4スライド
- python-pptx open / ZIP整合性: `PASS / PASS`
- 同一生成sourceのLibreOffice PDF変換: `PASS / 4ページ`
- 同一生成sourceの1600×900表示: `4 / 4 PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- 固定15答案要素接続: `15 / 15 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 現行PPTXとPowerPoint QAは再生成commit `61fb4a1a378178cc477469184ce06b9f8893adb8` で同時更新済み。以後、前回最終QAまでPPTX本体の変更なし。

成果物QA: `PASS`。

## 6. SPEC境界

- V/f、磁束、変圧器誘起電圧、鉄心磁束密度、同期速度、インバータ出力周波数、機器定格: `7 / 7 covered`
- 周波数―磁束密度、V/f特性、周波数―同期速度: `3 / 3 covered`
- 変圧器損失・誘導機トルク／銅損・詳細ベクトル制御の追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`

SPEC境界: `PASS`。

## 7. 前回blocker解消確認

前回 `NEEDS_REVISION / PROGRESS_ALIGNMENT_SYNC_REQUIRED` の原因だった進捗記録を再確認した。

1. `18_e2series_50hz_60hz_flux.md`
   - `topic_18_progress_alignment_sync_complete`
   - 練習PDF・PowerPoint・clean blind `15 / 15 PASS` を現行状態へ同期済み。
   - 次工程を最終QA再実施へ同期済み。
2. `STATUS.md`
   - `topic_18_progress_alignment_sync_complete`
   - 完成数は最終QA前の `17 / 39` を維持し、次工程を最終QA再実施へ同期済み。
3. `HANDOFF.md`
   - `topic_18_progress_alignment_sync_complete`
   - 主source同期済み、次工程を最終QA再実施へ同期済み。

前回最終QA後の変更は上記進捗記録と最終QA記録だけであり、教材本文・問題・正答・数式・PDF/PPTX本体・固定過去問の変更は `0件`。

進捗記録整合: `PASS`。

## 8. 最終判定

- 技術内容: `PASS`
- 固定一次3問＋二次2問・15答案要素: `PASS`
- 完成後clean blind: `15 / 15 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `PASS`
- SPEC外追加: `0件`

したがって最終判定は `PASS / completed`。完成数は `18 / 39`。

次工程はTopic 19「ミニ新幹線 複電圧主回路」の制作前EXAM_ALIGNMENT。