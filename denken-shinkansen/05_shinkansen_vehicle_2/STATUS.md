# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `17 / 39`
- current_status: `topic_18_blind_reanswer_official_check_complete`
- last_completed_topic: `17 パワー半導体の損失比較`
- active_topic: `18 E2系 50Hz・60Hzと磁束`
- next_start: Topic 18の最終QA。必須成果物、各QA、完成後clean blind `15 / 15 PASS`、固定EXAM_ALIGNMENT、SPEC境界、進捗記録の整合を確認する。既存PDF/PPTXの問題・正答・数式は変更しない

## 完了済み

Topic 01〜17は最終QAまで `PASS / completed`。完成数は `17 / 39`。

## Topic 18 完成後clean blind公式照合

判定: `PASS / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

成果物:
- 候補答案固定: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_official_check.md`

品質:
- 候補固定commit: `9f35eca9899a02cc132d504ca95cba9f9e0c2b24`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 一次: `7 / 7 PASS`
- 二次: `8 / 8 PASS`
- 合計: `15 / 15 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`

## Topic 18 解説画像PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

成果物:
- PowerPoint: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_images.pptx`
- QA: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_powerpoint_qa.md`

品質:
- 画面比 / スライド数: `16:9 / 4 slides`
- LibreOffice PDF変換: `PASS / 4ページ`
- python-pptx open / ZIP整合性: `PASS / PASS`
- 1600×900表示QA: `4 / 4 PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- PDF文字抽出: `PASS`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素への可視化・接続: `一次7＋二次8 / 15 / 15 PASS`
- R2二次 問1の回転磁界相対速度: `7 / 7 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 数値・論理QA: `7 / 7 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 解説／練習の問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `PASS / 15 / 15`

## Topic 18 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

成果物:
- PDF: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_practice.pdf`
- QA: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_practice_qa.md`

品質:
- A4縦: `PASS`
- ページ数: `5`
- pdfium 180 dpi: `5 / 5 PASS`
- pdftoppm 180 dpi: `5 / 5 PASS`
- 文字抽出: `PASS`
- 欠落文字・黒四角・クリップ・重なり: `0件`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`
- 完全解説: `12 / 12`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素の実効接続: `一次7＋二次8 / 15 / 15 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `PASS / 15 / 15`

## Topic 18 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

source:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_practice_source.md`

品質:
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`、途中式・前提・単位・理由を収録
- 完全解説: `12 / 12`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素の実効接続: `一次7＋二次8 / 15 / 15 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `PASS / 15 / 15`

## Topic 18 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

成果物:
- PDF: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_explanation.pdf`
- QA: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_explanation_pdf_qa.md`

品質:
- A4縦: `PASS`
- ページ数: `6`
- 180 dpi描画: `6 / 6 PASS`
- pdfium / pdftoppm: `6 / 6 PASS / 6 / 6 PASS`
- 文字抽出: `PASS`
- 欠落文字・黒四角・クリップ・重なり: `0件`
- 主要式抽出: `6 / 6 PASS`
- 数値独立再計算: `8 / 8 PASS`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素: `一次7＋二次8 / 15`
- 固定要求知識のPDFマッピング: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 二次試験用回転磁界相対速度: `7 / 7 covered`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 完成後clean blind公式照合: `PASS / 15 / 15`

## Topic 18 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

source:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_explanation_source.md`

品質:
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素: `一次7＋二次8 / 15`
- 固定要求知識の本文マッピング: `15 / 15 covered`
- 3段階例題: `3 / 3`
- 例題数値再計算: `3 / 3 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 fixed`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- 完成後clean blind公式照合: `PASS / 15 / 15`

## Topic 18 制作前EXAM_ALIGNMENT

判定: `PASS / exam_alignment_complete`

source:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux.md`

### 固定EXAM_ALIGNMENT

- R7 二次 機械・制御 問2 `(1)の滑り算出`: 1要素
- R2 二次 機械・制御 問1 `(1)〜(7)`: 7要素
- R2 一次 機械 問3 `(1)(4)(5)`: 3要素
- R2 一次 機械 問5 `(3)(4)(5)`: 3要素
- H25 一次 機械 問2 `(5)`: 1要素
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`

直近年度から公式問題を確認し、R8一次の鉄損・効率中心問題、R7一次、R4一次のV/f前提だがトルク符号中心の問題は、Topic 18の固定SPEC外へ広がるため件数合わせで採用していない。

### 固定SPEC境界

扱う内容:
- V/f
- 磁束
- 変圧器誘起電圧
- 鉄心磁束密度
- 同期速度
- インバータ出力周波数
- 機器定格

指定計算・グラフ:
- 周波数―磁束密度
- V/f特性
- 周波数―同期速度

仕様追加: `0件`
未確認E2系実車値の真値化: `0件`

## Topic 17 最終QA

前回最終QAで検出した旧26答案要素前提の6記録を是正後の固定5問・23答案要素へ同期した後、最終QAを再実施した。

判定: `PASS / completed`

最終QA記録:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_final_qa.md`

### 固定EXAM_ALIGNMENT

- R7 一次 機械 問4 (1)〜(5): 5要素
- R4 一次 機械 問4 (1)〜(5): 5要素
- R2 一次 機械 問2 (1)〜(5): 5要素
- H24 一次 機械 問6 (2)(3): 2要素
- H24 二次 機械・制御 問1 (1)〜(6): 6要素
- 一次: `17答案要素`
- 二次: `6答案要素`
- 合計: `5問・23答案要素`

H24一次 問6は問題自体を固定5問の一つとして維持し、Topic 17に直接対応する `(2) 放熱設計`、`(3) 半導体接合部温度` のみゲート対象とする。照明固有の `(1)(4)(5)` は固定SPEC外として対象外。

### 完成後clean blind

- R7一次 問4: `5 / 5 PASS`
- R4一次 問4: `5 / 5 PASS`
- R2一次 問2: `5 / 5 PASS`
- H24一次 問6 (2)(3): `2 / 2 PASS`
- H24二次 問1: `6 / 6 PASS`
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 候補答案変更: `0件`
- 教材外知識での補完: `0件`
- 固定問題差替え: `0件`

### 成果物

- 解説source: `PASS`
- 解説PDF: `PASS / 4 pages / 180 dpi 4 / 4`
- 練習source: `PASS / 一次8問＋二次4問`
- 練習PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- 解説画像PowerPoint: `PASS / 4 slides / 1600×900 4 / 4`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

PDF/PPTX本体・問題・正答・数式・固定過去問は最終QA工程で変更していない。

## Topic 17 履歴

EXAM_ALIGNMENT再監査記録:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md`

clean blind候補答案:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md`

公式照合記録:
- `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md`

旧 `blind_reanswer_gate.md` と旧 `blind_reanswer_candidates.md` は再マッピング前の履歴として残す。

## 次工程

Topic 18の最終QAを行う。必須成果物、各QA、完成後clean blind `15 / 15 PASS`、固定EXAM_ALIGNMENT、SPEC境界、進捗記録の整合を確認する。既存PDF/PPTX、問題、正答、数式、固定過去問は変更しない。