# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜17は最終QAまで `PASS / completed`。完成数は `17 / 39`。

現在地は `topic_18_practice_pdf_complete`。active topic は Topic 18 `E2系 50Hz・60Hzと磁束`。

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
- clean blind公式照合: `未実施 / PowerPoint完成後`

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
- clean blind公式照合: `未実施 / PowerPoint完成後`

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

直近年度から公式問題を確認したうえで、固定SPECへ直接接続しないR8一次の鉄損・効率中心問題、R7一次、R4一次のトルク符号中心問題は件数合わせで採用していない。

教材本文・練習へ必ず接続する事項:
- `E = 4.44 f N Φ_m`
- 同一V・Nで `Φ_m ∝ 1/f`
- `B_m = Φ_m/A` と周波数―磁束密度
- V/f一定と磁束維持
- `N_s = 120f/P`
- `s = (N_s-N)/N_s`
- `f_2 = sf`
- 電源周波数50/60 Hzとインバータ出力周波数の区別
- 機器定格を電圧・周波数・巻数・磁束／磁束密度の組で判断すること
- SPEC指定3可視化を同じモデルから生成すること

仕様追加: `0件`
未確認E2系実車値の真値化: `0件`

## Topic 17 完了記録

最終QA: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_final_qa.md`

判定: `PASS / completed`

固定EXAM_ALIGNMENT:
- R7 一次 機械 問4 (1)〜(5): 5要素
- R4 一次 機械 問4 (1)〜(5): 5要素
- R2 一次 機械 問2 (1)〜(5): 5要素
- H24 一次 機械 問6 (2)(3): 2要素
- H24 二次 機械・制御 問1 (1)〜(6): 6要素
- 一次: `17答案要素`
- 二次: `6答案要素`
- 合計: `5問・23答案要素`

H24一次 問6は問題自体を固定5問の一つとして維持するが、Topic 17に直接対応する `(2) 放熱設計`、`(3) 半導体接合部温度` のみゲート対象。照明固有の `(1)(4)(5)` は固定SPEC外として対象外。

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
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

前回最終QAで検出した旧26答案要素前提の6記録は、是正後 `5問・23答案要素` とclean blind `23 / 23 PASS` へ同期済み。PDF/PPTX本体・問題・正答・数式・固定過去問は変更していない。

履歴:
- 再監査: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_exam_alignment_remap_audit.md`
- clean blind候補: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/17_power_semiconductor_loss_comparison/17_power_semiconductor_loss_comparison_blind_reanswer_official_check.md`
- 旧 `blind_reanswer_gate.md` と旧 `blind_reanswer_candidates.md` は再マッピング前の履歴として保存

## Topic 18 固定SPEC境界

`SPEC.md` Topic 18 の固定範囲は次のとおり。

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

## 次工程

Topic 18の解説画像PowerPointを作る。固定5問・15答案要素、SPEC指定7項目・3可視化、解説／練習の問題・正答・数式を変更しない。PowerPoint完成後に表示QA・文字QA・数値QAを行い、その後clean blind公式照合へ進む。