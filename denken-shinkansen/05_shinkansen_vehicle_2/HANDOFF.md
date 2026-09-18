# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜18は最終QAまで `PASS / completed`。完成数は `18 / 39`。

現在地は `topic_19_clean_blind_candidates_fixed`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENT、解説source、解説PDF、練習source、練習PDF、解説画像PowerPointまで完了し、完成後clean blindの固定5問・9答案要素を公式解答参照前に候補固定した。次は公式解答・標準解答との照合。

## Topic 19 clean blind候補答案固定

成果物:
- 候補答案: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_candidates_clean.md`

判定前状態: `CANDIDATES_LOCKED / OFFICIAL_ANSWER_NOT_YET_CHECKED`

品質:
- 固定公式過去問: `一次4問＋二次1問 / 5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9 / 9 候補固定済み`
- R5一次機械問3 `(2)`: `（ヨ）定格電圧`
- R5一次機械問4 `(4)(5)`: `（ル）一定である`, `（ニ）通流率`
- R5一次電力問6 `(3)`: `（ヨ）絶縁協調`
- H25一次電力問2 `(1)(2)(3)`: `（チ）タップ選択器`, `（ニ）循環電流`, `（ハ）限流インピーダンス`
- R5二次機械・制御問2 `(1)(2)`: `100 V`, `120 A`
- 候補固定前の公式解答・標準解答参照: `0件`
- 候補固定前の個別過去問解説正答参照: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え / 固定EXAM_ALIGNMENT変更 / SPEC外追加: `0件`
- 未確認ミニ新幹線実車仕様の真値化: `0件`
- 公式解答・標準解答照合: `未実施 / 次工程`

## Topic 19 解説画像PowerPoint

成果物:
- PowerPoint: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_images.pptx`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_powerpoint_qa.md`

判定: `PASS / POWERPOINT_COMPLETE`

品質:
- 16:9 / 4 slides
- LibreOffice PDF / pdftoppm 1600×900: `4 / 4 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 数式・数値QA: `PASS`
- 固定EXAM_ALIGNMENT変更 / 問題・正答・数式変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind: `候補9 / 9固定済み / 公式照合未実施`

## Topic 19 練習PDF

成果物:
- 練習PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice.pdf`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_qa.md`

判定: `PASS / PRACTICE_PDF_COMPLETE`

品質:
- A4縦: `5 pages`
- pdfium / pdftoppm 180 dpi: `5 / 5 PASS`
- qpdf構造・文字抽出・外周クリップ安全域: `PASS`
- 一次8問＋二次4問・完全解説: `12 / 12`
- 一次正答一意性: `8 / 8 PASS`
- 固定5問・9答案要素接続: `9 / 9 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 完成後clean blind公式照合: `候補固定済み / 照合未実施`

## Topic 19 練習source

成果物:
- 練習source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_practice_source.md`

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

品質:
- 一次試験型: `8問 / 8問五肢択一`
- 二次試験型: `4問 / 記述式`
- 数値・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素の練習問題接続: `9 / 9 covered`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化の式系・条件: `3 / 3 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `候補固定済み / 照合未実施`

練習sourceで使用した数値はすべて一般教材用仮定値。解説sourceと同じ `Pout=6.84 MW`、`η=0.95`、`cosφ=0.90`、`10 kV→800 A`、`8 kV→1000 A`、タップ一般モデル、理想降圧モデル `Vo=DVd` を再利用し、実車値として扱っていない。

## Topic 19 解説PDF

成果物:
- 解説PDF: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation.pdf`
- QA: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation_pdf_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

品質:
- A4縦: `2 pages`
- pdfium 180 dpi: `2 / 2 PASS`
- pdftoppm 180 dpi: `2 / 2 PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 数式・数値QA: `PASS`
- 固定過去問: `一次4問＋二次1問 / 5問`
- 固定答案要素: `一次7＋二次2 / 9`
- 固定答案要素のPDF接続: `9 / 9 covered`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認ミニ新幹線実車値の真値化: `0件`
- H25負荷時タップ切換装置を実車採用方式として扱う記述: `0件`
- 完成後clean blind公式照合: `候補固定済み / 照合未実施`

## Topic 19 解説source

成果物:
- 主source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`
- 解説source: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_explanation_source.md`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

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
- 完成後clean blind公式照合: `候補固定済み / 照合未実施`

解説sourceで固定した教材用仮定値:
- 例題・可視化の数値はすべて教材用仮定値。
- `Pout=6.84 MW`、`η=0.95`、`cosφ=0.90` の比較モデルでは `10 kV→800 A`、`8 kV→1000 A` を再計算済み。
- タップ例は `V1=10 kV`、`N2=200 turn` の一般モデルで、実車値ではない。
- 主変換装置例は理想降圧モデル `Vo=DVd` の固定範囲だけ。

## Topic 19 制作前EXAM_ALIGNMENT

source:
- `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`

判定: `PASS / exam_alignment_complete`

固定公式過去問:
- R5 一次 機械 問3 `(2)`: 1要素
- R5 一次 機械 問4 `(4)(5)`: 2要素
- R5 一次 電力 問6 `(3)`: 1要素
- H25 一次 電力 問2 `(1)(2)(3)`: 3要素
- R5 二次 機械・制御 問2 `(1)(2)`: 2要素
- 一次: `7答案要素`
- 二次: `2答案要素`
- 合計: `5問・9答案要素`

固定SPEC境界:
- 複電圧
- 主変圧器
- 巻数比
- タップ
- 一次電流
- 絶縁
- 主変換装置
- 補助電源
- 電源切替
- 指定計算・グラフ: `電源電圧―一次電流`、`タップ条件―二次電圧`、`同一出力時の電源条件比較`

境界:
- R5一次機械問3は `(2)` の定格電圧・変圧比だけ。
- R5一次機械問4は `(4)(5)` の出力電圧条件・通流率だけ。
- R5一次電力問6は `(3)` の絶縁協調だけ。
- H25一次電力問2は一般的なタップ切換原理用で、ミニ新幹線が負荷時タップ切換装置を採用する根拠にはしない。
- R5二次機械・制御問2は `(1)(2)` の電圧・電流換算だけ。
- 未確認のミニ新幹線実車電圧、主変圧器巻数・タップ構成、絶縁定格、主変換装置・補助電源・電源切替方式は推測しない。
- SPEC外追加: `0件`

## Topic 18 完了記録

最終QA:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_final_qa.md`

判定: `PASS / completed`

固定EXAM_ALIGNMENT:
- R7 二次 機械・制御 問2 `(1)の滑り算出`: 1要素
- R2 二次 機械・制御 問1 `(1)〜(7)`: 7要素
- R2 一次 機械 問3 `(1)(4)(5)`: 3要素
- R2 一次 機械 問5 `(3)(4)(5)`: 3要素
- H25 一次 機械 問2 `(5)`: 1要素
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`

完成後clean blind:
- 一次: `7 / 7 PASS`
- 二次: `8 / 8 PASS`
- 合計: `15 / 15 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`

成果物:
- 解説source: `PASS`
- 解説PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- 練習source: `PASS / 一次8＋二次4`
- 練習PDF: `PASS / 5 pages / pdfium・pdftoppm 180 dpi 5 / 5`
- PowerPoint: `PASS / 4 slides / 同一生成source 1600×900 4 / 4`
- 固定15答案要素接続: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`

前回最終QAの唯一のblockerだった主source状態欄の不整合は解消済み。最終QA再実施工程では、技術本文・問題・正答・数式・PDF/PPTX本体・固定過去問・固定EXAM_ALIGNMENTを変更していない。

履歴:
- 主source: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux.md`
- clean blind候補: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_official_check.md`

## 次工程

Topic 19の固定済みclean blind候補9答案要素を、一般財団法人 電気技術者試験センターの公式解答・標準解答と照合する。候補答案は照合前の状態を保持し、差異があれば教材側の不足・誤りとして判定する。固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXの問題・正答・数式は変更しない。