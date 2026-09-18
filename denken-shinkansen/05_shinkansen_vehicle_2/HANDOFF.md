# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜17は最終QAまで `PASS / completed`。完成数は `17 / 39`。

現在地は `topic_18_progress_alignment_sync_complete`。active topic は Topic 18 `E2系 50Hz・60Hzと磁束`。技術成果物・clean blind公式照合はPASS済み。前回最終QAで検出された主source状態欄の不整合を現行状態へ同期した。最終QA再実施前のためcompleted化していない。

## Topic 18 完成後clean blind公式照合

成果物:
- 候補答案固定: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_official_check.md`

判定: `PASS / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

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

成果物:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_images.pptx`
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`

品質:
- 16:9 / 4 slides
- LibreOffice PDF変換: `PASS / 4ページ`
- python-pptx open / PPTX ZIP整合性: `PASS / PASS`
- 1600×900表示QA: `4 / 4 PASS`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- PDF文字抽出: `PASS`
- 固定5問・15答案要素への可視化・接続: `15 / 15 PASS`
- R2二次 問1の回転磁界相対速度: `7 / 7 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 数値・論理QA: `7 / 7 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 解説／練習の問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- clean blind公式照合: `PASS / 15 / 15`

## Topic 18 練習PDF

成果物:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_practice.pdf`
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_practice_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`

品質:
- A4縦5ページ
- pdfium 180 dpi: `5 / 5 PASS`
- pdftoppm 180 dpi: `5 / 5 PASS`
- 文字抽出: `PASS`
- 欠落文字・黒四角・クリップ・重なり: `0件`
- 一次試験型: `8 / 8`、全問五肢択一
- 二次試験型: `4 / 4`
- 完全解説: `12 / 12`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問・15答案要素の実効接続: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 問題・正答・数式変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- clean blind公式照合: `PASS / 15 / 15`

## Topic 18 練習source

source:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_practice_source.md`

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

構成:
- 一次試験型: `8問`、全問五肢択一
- 二次試験型: `4問`、途中式・前提・単位・理由を含む記述式
- 合計: `12問`

品質:
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素の実効接続: `一次7＋二次8 / 15 / 15 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化の式系・条件との整合: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- clean blind公式照合: `PASS / 15 / 15`

## Topic 18 解説PDF

成果物:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_explanation.pdf`
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_explanation_pdf_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

品質:
- A4縦6ページ
- 180 dpi描画: `6 / 6 PASS`
- pdfium / pdftoppm: `6 / 6 PASS / 6 / 6 PASS`
- 文字抽出: `PASS`
- 欠落文字・黒四角・クリップ・重なり: `0件`
- 主要式抽出: `6 / 6 PASS`
- 数値独立再計算: `8 / 8 PASS`
- 固定5問・15答案要素のPDFマッピング: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- 二次試験用回転磁界相対速度: `7 / 7 covered`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- clean blind公式照合: `PASS / 15 / 15`

## Topic 18 解説source

source:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_explanation_source.md`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

固定範囲の実装:
- `E=4.44fNΦ_m` の導出と周波数変更比
- `B_m=Φ_m/A` と周波数―磁束密度
- V/f一定と磁束維持
- `N_s=120f/P`、極対数表記時の `ω_s=2πf/p`
- `s=(N_s-N)/N_s`、`f_2=sf`
- 固定子磁界・回転子・回転子磁界の相対速度7要素
- 電源周波数とインバータ出力周波数の区別
- 機器定格を電圧・周波数・巻数・磁束／磁束密度の組で判断
- 3段階例題 `3 / 3`
- SPEC指定3可視化の再生成条件 `3 / 3`

品質:
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次3問＋二次2問 / 5問`
- 固定答案要素: `一次7＋二次8 / 15`
- 固定要求知識の本文マッピング: `15 / 15 covered`
- 例題数値再計算: `3 / 3 PASS`
- SPEC指定7項目: `7 / 7 covered`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`
- clean blind公式照合: `PASS / 15 / 15`

## Topic 18 制作前EXAM_ALIGNMENT

source:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux.md`

判定: `PASS / exam_alignment_complete`

固定公式過去問:
- R7 二次 機械・制御 問2 `(1)の滑り算出`: 1要素
- R2 二次 機械・制御 問1 `(1)〜(7)`: 7要素
- R2 一次 機械 問3 `(1)(4)(5)`: 3要素
- R2 一次 機械 問5 `(3)(4)(5)`: 3要素
- H25 一次 機械 問2 `(5)`: 1要素
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`

教材本文・練習へ接続済み:
- `E = 4.44 f N Φ_m`
- 同一V・Nで `Φ_m ∝ 1/f`
- `B_m = Φ_m/A` と周波数―磁束密度
- V/f一定と磁束維持
- `N_s = 120f/P`
- `s = (N_s-N)/N_s`
- `f_2 = sf`
- 電源周波数50/60 Hzとインバータ出力周波数の区別
- 機器定格を電圧・周波数・巻数・磁束／磁束密度の組で判断
- SPEC指定3可視化を同じモデルから生成

仕様追加: `0件`
未確認E2系実車値の真値化: `0件`

## Topic 17 完了記録

最終QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_final_qa.md`

判定: `PASS / completed`

固定EXAM_ALIGNMENT:
- 一次: `17答案要素`
- 二次: `6答案要素`
- 合計: `5問・23答案要素`

完成後clean blind:
- 一次: `17 / 17 PASS`
- 二次: `6 / 6 PASS`
- 合計: `23 / 23 PASS`
- 候補答案変更: `0件`
- 教材外知識での補完: `0件`
- 固定問題差替え: `0件`

成果物:
- 解説source: `PASS`
- 解説PDF: `PASS / 4 pages / 180 dpi 4 / 4`
- 練習source: `PASS / 一次8＋二次4`
- 練習PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- PowerPoint: `PASS / 4 slides / 1600×900 4 / 4`

履歴:
- 再監査: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md`
- clean blind候補: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md`

## Topic 18 固定SPEC境界

主題:
- 異なる電源周波数が変圧器・主変換装置・誘導機へ与える条件を解析する。

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

この範囲を勝手に追加・変更しない。

## 進捗記録同期

前回最終QA `18_e2series_50hz_60hz_flux_final_qa.md` が検出した唯一の不整合である主source `18_e2series_50hz_60hz_flux.md` の状態欄を、固定5問・15答案要素、clean blind `15 / 15 PASS`、全必須成果物完成の現行状態へ同期した。

- 技術本文変更: `0件`
- 問題・正答・数式変更: `0件`
- PDF/PPTX本体変更: `0件`
- 固定過去問変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`

判定: `PASS / PROGRESS_ALIGNMENT_SYNC_COMPLETE`。

## 次工程

Topic 18の最終QAを再実施する。固定5問・15答案要素、clean blind `15 / 15 PASS`、SPEC指定7項目・3可視化、必須成果物・各QA・進捗記録の整合を確認し、合格した場合のみcompleted化する。既存PDF/PPTX、問題、正答、数式、固定過去問は変更しない。