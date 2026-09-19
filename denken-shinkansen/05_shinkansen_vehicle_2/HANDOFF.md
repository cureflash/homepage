# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜19は最終QAまで `PASS / completed`。完成数は `19 / 39`。

現在地は `topic_20_explanation_pdf_complete`。last completed は Topic 19 `ミニ新幹線 複電圧主回路`。active topic は Topic 20 `N700系 フィードバック制御`。制作前EXAM_ALIGNMENTの固定5問・19答案要素を変更せず、SPEC指定10項目・3可視化を解説PDFまで接続・QAした。次は練習source。

## Topic 20 解説PDF

成果物:
- PDF: `topics/20_n700_feedback_control/20_n700_feedback_control_explanation.pdf`
- QA: `topics/20_n700_feedback_control/20_n700_feedback_control_explanation_pdf_qa.md`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

品質:
- A4縦: `3 pages`
- PDFium / pdftoppm 180 dpi: `3 / 3 PASS` / `3 / 3 PASS`
- 文字抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素のPDF接続: `一次1＋二次18 / 19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題・数式・数値再照合: `3 / 3 PASS`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 固定問題差替え / 固定EXAM_ALIGNMENT変更 / SPEC外追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`

worker reconcile:
- Topic 20解説source完成状態と他workerの直近mainを確認し、解説source作成やTopic 19 clean blindを重複実施していない。
- 解説PDF追加 commit `64a65053c90318327c799ea53e298e27b3318279`、PDF QA commit `d396bdd25bee7a1c6eec996446b1de52e25a6fc2`、主source進捗同期 commit `8a205570d4ad820dabafe16d34ee170bc61cc85a`、STATUS同期 commit `e43d6ba8a08b73353ec5e2a5e9a45c648b2cf864` を反映済み。
- 本工程途中に入った別系列commit `950d2337841764a0b9396b87a0b45b5c28836717` を確認し、本系列成果を包含していることを確認して継続した。

## Topic 20 解説source

成果物:
- 主source: `topics/20_n700_feedback_control/20_n700_feedback_control.md`
- 解説source: `topics/20_n700_feedback_control/20_n700_feedback_control_explanation_source.md`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

品質:
- 固定公式過去問: `一次1問＋二次4問 / 5問 / 変更なし`
- 固定答案要素: `一次1＋二次18 / 19`
- 固定要求知識の本文マッピング: `19 / 19 covered`
- SPEC指定10項目: `10 / 10 covered`
- SPEC指定3可視化: `3 / 3 fixed`
- 3段階例題: `3 / 3`
- 例題数値・式の独立再計算: `3 / 3 PASS`
- 可視化数値: `PASS / 式から再計算済み`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 固定問題差替え / 固定EXAM_ALIGNMENT変更 / SPEC外追加: `0件`
- 未確認N700系実車制御値の真値化: `0件`

固定した教材用一般モデル:
- 一次遅れ `K/(Ts+1)` とステップ・インパルス応答。
- 単位負帰還 `G/(1+G)`、偏差 `1/(1+G)`。
- 二次遅れの極と減衰条件。
- 三次特性方程式のRouth安定条件。
- ステップ、ランプ、インパルス、指数入力のラプラス変換。
- 一般教材用仮定値によるステップ応答、ゲイン変更、時定数変更の3可視化。

worker reconcile:
- Topic 19完了コミット群を確認し、再解答・最終QAを重複実施していない。
- Topic 20制作前EXAM_ALIGNMENTの commit `7e3b45b4428b19d677ed426f99af95863c9b5a64`、STATUS更新 `052a3b091c38df55692eb8feb7ee32dd6c60da7b`、HANDOFF同期 `92fa56e607cd2f7ee32dd6c60da7b` を引き継いだ。
- 本工程開始時のmain HEADは `d50e7e92b32e4e04d3b34e62ad66510ab7c8db89` で、Topic 20ディレクトリには制作前sourceのみ存在することを確認してから解説sourceを新規作成した。

## Topic 20 制作前EXAM_ALIGNMENT

source:
- `topics/20_n700_feedback_control/20_n700_feedback_control.md`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

固定公式過去問:
- H25 一次 機械 問6 `(1)`: 1要素
- R7 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- R6 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R4 二次 機械・制御 問4 `(1)〜(4)`: 4要素
- R3 二次 機械・制御 問4 `(1)〜(5)`: 5要素
- 一次: `1答案要素`
- 二次: `18答案要素`
- 合計: `5問・19答案要素`

固定SPEC境界:
- 伝達関数
- ブロック線図
- 開ループ
- 閉ループ
- 一次遅れ
- 二次遅れ
- 時定数
- 定常偏差
- 過渡応答
- 安定性
- 指定可視化: `ステップ応答`、`ゲイン変更時の応答`、`時定数変更時の応答`

境界:
- H25一次問6は `(1)` の安定・不安定判定だけ。PIDパラメータ設計・代表根近似は固定ゲートへ含めない。
- R6二次問4 `(5)` の高周波位相、R4二次問4 `(5)` の正弦波定常応答は固定ゲートへ含めず、周波数応答を新規主題へ広げない。
- 状態空間法、根軌跡、現代制御、2自由度制御を追加しない。
- 未確認N700系実車制御値の真値化: `0件`
- 公式解答・標準解答の個別正答保存: `0件 / 制作前時点`
- SPEC外追加: `0件`

## Topic 19 最終QA

最終QA:
- `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_final_qa.md`

判定: `PASS / completed`

品質:
- 固定公式過去問: `一次4問＋二次1問 / 5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9`
- 完成後clean blind: `9 / 9 PASS`
- 候補答案変更 / 教材外知識補完 / 固定問題差替え: `0件`
- 解説PDF: `2 pages / pdfium・pdftoppm 2 / 2 PASS`
- 練習PDF: `5 pages / pdfium・pdftoppm 5 / 5 PASS`
- 練習問題: `一次8問＋二次4問 / 12 / 12再計算 PASS / 一次8 / 8正答一意`
- PowerPoint: `4 slides / 1600×900 4 / 4 PASS`
- SPEC指定9項目 / 3可視化: `9 / 9`, `3 / 3 PASS`
- 固定EXAM_ALIGNMENT変更 / SPEC外追加 / 未確認実車値の真値化: `0件`
- 最終QA工程で教材本文・問題・正答・数式・PDF/PPTX本体の変更: `0件`

worker reconcile:
- clean blind候補固定 commit `81a9510e50bf17130c1223fcb9cf2c00dace80b4` を引き継いだ。
- 公式照合 commit `88063075bb3e7014a6d2f79dba1c4ec03514ccfe` 以降の記録・同期を確認し、再解答を重複実施していない。

## Topic 19 clean blind公式照合

成果物:
- 候補答案: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit_blind_reanswer_official_check.md`

判定: `PASS / BLIND_REANSWER_OFFICIAL_CHECK_COMPLETE`

品質:
- 固定公式過去問: `一次4問＋二次1問 / 5問 / 変更なし`
- 固定答案要素: `一次7＋二次2 / 9`
- R5一次機械問3 `(2)`: 候補 `（ヨ）定格電圧` / 公式 `ヨ` — PASS
- R5一次機械問4 `(4)(5)`: 候補 `（ル）一定である`, `（ニ）通流率` / 公式 `ル`, `ニ` — PASS
- R5一次電力問6 `(3)`: 候補 `（ヨ）絶縁協調` / 公式 `ヨ` — PASS
- H25一次電力問2 `(1)(2)(3)`: 候補 `（チ）タップ選択器`, `（ニ）循環電流`, `（ハ）限流インピーダンス` / 公式 `チ`, `ニ`, `ハ` — PASS
- R5二次機械・制御問2 `(1)(2)`: 候補 `100 V`, `120 A` / 公式標準解答 `100 V`, `120 A` — PASS
- 一次: `7 / 7 PASS`
- 二次: `2 / 2 PASS`
- 合計: `9 / 9 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え / 固定EXAM_ALIGNMENT変更 / SPEC外追加: `0件`
- 未確認ミニ新幹線実車仕様の真値化: `0件`

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
- 公式解答・標準解答照合: `9 / 9 PASS / 完了`

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
- 完成後clean blind: `9 / 9 PASS / 公式照合完了`

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
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

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
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

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
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

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
- 完成後clean blind公式照合: `9 / 9 PASS / 完了`

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

Topic 20「N700系 フィードバック制御」の練習source。固定5問・19答案要素とSPEC境界を変更せず、一次試験型と二次記述式を含む練習問題へ接続し、数値・論理を独立再計算する。