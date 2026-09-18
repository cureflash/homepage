# STATUS - 新幹線車両・電験二種

更新日: 2026-09-19

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `18 / 39`
- current_status: `topic_19_explanation_pdf_complete`
- last_completed_topic: `18 E2系 50Hz・60Hzと磁束`
- active_topic: `19 ミニ新幹線 複電圧主回路`
- next_start: Topic 19の練習source。固定5問・9答案要素とSPEC指定9項目・3可視化を変更せず、一次・二次の練習問題へ接続する

## 完了済み

Topic 01〜18は最終QAまで `PASS / completed`。完成数は `18 / 39`。

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
- 完成後clean blind公式照合: `未実施 / 成果物完成後に実施`

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
- 完成後clean blind公式照合: `未実施 / 成果物完成後に実施`

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
- 固定問題の個別正答記号・最終数値保存: `0件`
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

Topic 19「ミニ新幹線 複電圧主回路」の練習sourceを作る。固定5問・9答案要素、SPEC指定9項目・3可視化を変更せず、一次・二次の解法を教材だけで再現できる問題・解答・解説へ接続する。未確認の実車電圧・巻数・タップ構成・絶縁定格・切替方式は真値化しない。