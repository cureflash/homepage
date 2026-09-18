# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `19 / 39`
- current_status: `topic_20_exam_alignment_complete`
- last_completed_topic: `19 ミニ新幹線 複電圧主回路`
- active_topic: `20 N700系 フィードバック制御`
- next_start: Topic 20解説source。固定5問・19答案要素を逆算し、SPEC指定10項目・3可視化を教材内へ接続する

## 完了済み

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

## Topic 20 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

source:
- `topics/20_n700_feedback_control/20_n700_feedback_control.md`

品質:
- 固定過去問: `一次1問＋二次4問 / 5問`
- 固定答案要素: `一次1＋二次18 / 19`
- 二次記述問題: `4問`
- SPEC指定10項目 / 3可視化: `10 / 10`, `3 / 3 mapped`
- 参考教材: `2系統以上 / e-sysnet含む`
- 公式解答・標準解答の個別正答保存: `0件`
- SPEC外追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`

固定対象:
- H25 一次 機械 問6 `(1)`: 1要素
- R7 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- R6 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R4 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R3 二次 機械・制御 問4 `(1)〜(5)`: 5要素

## Topic 19 最終QA

判定: `PASS / completed`

最終QA記録:
- `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_final_qa.md`

品質:
- 固定過去問: `一次4問＋二次1問 / 5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9`
- 完成後clean blind: `9 / 9 PASS`
- 必須成果物: `PASS`
- 解説PDF: `2 pages / pdfium・pdftoppm 2 / 2 PASS`
- 練習PDF: `5 pages / pdfium・pdftoppm 5 / 5 PASS`
- 練習問題: `一次8問＋二次4問 / 12 / 12再計算 PASS / 一次8 / 8正答一意`
- PowerPoint: `4 slides / 1600×900 4 / 4 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 最終QA工程で問題・正答・数式・PDF/PPTX本体の変更: `0件`

## Topic 19 clean blind公式照合

判定: `PASS / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

成果物:
- 候補答案: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_official_check.md`

品質:
- 固定過去問: `一次4問＋二次1問 / 5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9`
- 一次: `7 / 7 PASS`
- 二次: `2 / 2 PASS`
- 合計: `9 / 9 PASS`
- 固定5問: `5 / 5 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え / 固定EXAM_ALIGNMENT変更 / SPEC外追加: `0件`
- 未確認ミニ新幹線実車仕様の真値化: `0件`

## Topic 19 clean blind候補答案固定

判定前状態: `CANDIDATES_LOCKED / OFFICIAL_ANSWER_NOT_YET_CHECKED`

成果物:
- 候補答案: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_candidates_clean.md`

品質:
- 固定過去問: `一次4問＋二次1問 / 5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9 / 9 候補固定済み`
- 候補固定前の公式解答・標準解答参照: `0件`
- 候補固定前の個別過去問解説正答参照: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え / 固定EXAM_ALIGNMENT変更 / SPEC外追加: `0件`
- 未確認ミニ新幹線実車仕様の真値化: `0件`
- 公式解答・標準解答照合: `9 / 9 PASS / 完了`

## Topic 19 解説画像PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

成果物:
- PowerPoint: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md`

品質:
- 16:9 / 4 slides
- python-pptx open / PPTX ZIP: `PASS`
- LibreOffice PDF / pdftoppm 1600×900: `4 / 4 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 数式・数値QA: `PASS`
- 固定EXAM_ALIGNMENT変更 / 問題・正答・数式変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind: `9 / 9 PASS / 公式照合完了`

## Topic 19 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

成果物:
- 練習source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`
- 練習PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- 練習PDF QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`

品質:
- A4縦: `5 pages`
- pdfium / pdftoppm 180 dpi: `5 / 5 PASS`
- qpdf構造・文字抽出・外周クリップ安全域: `PASS`
- 一次8問＋二次4問・完全解説: `12 / 12`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

## Topic 19 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

成果物:
- 主source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`
- 練習source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`

品質:
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 記述式`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素の練習問題接続: `9 / 9 covered`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化の式系・条件: `3 / 3 aligned`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

## Topic 19 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

成果物:
- 主source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`
- 解説source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation_source.md`
- 解説PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation.pdf`
- 解説PDF QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation_pdf_qa.md`

品質:
- A4縦: `2 pages`
- pdfium 180 dpi: `2 / 2 PASS`
- pdftoppm 180 dpi: `2 / 2 PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 数式・数値QA: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素のPDF接続: `9 / 9 covered`
- 3段階例題: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

## Topic 19 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

成果物:
- 主source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`
- 解説source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation_source.md`

品質:
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定要求知識の本文マッピング: `9 / 9 covered`
- 3段階例題: `3 / 3`
- 例題数値再計算: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化の再生成条件: `3 / 3 fixed`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

## Topic 19 制作前EXAM_ALIGNMENT

判定: `PASS / exam_alignment_complete`

source:
- `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`

### 固定EXAM_ALIGNMENT

- R5 一次 機械 問3 `(2)`: 1要素
- R5 一次 機械 問4 `(4)(5)`: 2要素
- R5 一次 電力 問6 `(3)`: 1要素
- H25 一次 電力 問2 `(1)(2)(3)`: 3要素
- R5 二次 機械・制御 問2 `(1)(2)`: 2要素
- 一次: `7答案要素`
- 二次: `2答案要素`
- 合計: `5問・9答案要素`

直近年度側から公式問題を確認し、R7一次「機械」問3の短絡試験・換算インピーダンス等は固定SPEC外へ広がるため採用していない。R5/H25からTopic 19へ直接接続する答案要素だけを固定した。

### 固定SPEC境界

扱う内容:
- 複電圧
- 主変圧器
- 巻数比
- タップ
- 一次電流
- 絶縁
- 主変換装置
- 補助電源
- 電源切替

指定計算・グラフ:
- 電源電圧―一次電流
- タップ条件―二次電圧
- 同一出力時の電源条件比較

品質:
- 固定問題の個別正答記号・最終数値保存: `0件 / 制作前時点`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`

## Topic 18 最終QA

前回最終QAの唯一のblockerだった主source状態欄の不整合を、`STATUS.md` / `HANDOFF.md` とともに現行状態へ同期した後、最終QAを再実施した。

判定: `PASS / completed`

最終QA記録:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_final_qa.md`

### 固定EXAM_ALIGNMENT

- R7 二次 機械・制御 問2 `(1)の滑り算出`: 1要素
- R2 二次 機械・制御 問1 `(1)〜(7)`: 7要素
- R2 一次 機械 問3 `(1)(4)(5)`: 3要素
- R2 一次 機械 問5 `(3)(4)(5)`: 3要素
- H25 一次 機械 問2 `(5)`: 1要素
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`

### 完成後clean blind

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

### 成果物

- 解説source: `PASS`
- 解説PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- 練習source: `PASS / 一次8問＋二次4問`
- 練習PDF: `PASS / 5 pages / pdfium・pdftoppm 180 dpi 5 / 5`
- 解説画像PowerPoint: `PASS / 4 slides / 同一生成source 1600×900 4 / 4`
- 固定15答案要素接続: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`

PDF/PPTX本体・問題・正答・数式・固定過去問は最終QA再実施工程で変更していない。

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
- 練習source: `PASS / 一次8問＋二次4問`
- 練習PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- 解説画像PowerPoint: `PASS / 4 slides / 1600×900 4 / 4`

## 次工程

Topic 20「N700系 フィードバック制御」の解説source。固定5問・19答案要素を逆算し、SPEC指定10項目・3可視化を教材内へ接続する。