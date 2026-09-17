# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜14は `PASS / completed`。完成数は `14 / 21`。

current_status: `topic_15_final_qa_needs_revision`

active_topic: `15 遮断器を入れた瞬間、電流はどう変化する？`

Topic 15は初回最終QAまで実施済み。固定一次5問・25答案要素の完成後独立再解答 `25 / 25 PASS`、二次採用0問・数合わせ0件、必須成果物、表示QA、練習QA、SPEC境界はいずれもPASS。blockerは主source・練習sourceに残る旧進捗記録4箇所のみで、判定は `NEEDS_REVISION / IN_PROGRESS`。次工程はその4箇所を実成果物状態へ同期する。

## Topic 15 成果物

- source: `topics/15_breaker_transient/15_breaker_transient.md`
- 解説PDF: `topics/15_breaker_transient/15_breaker_transient_explanation.pdf`
- 解説PDF QA: `topics/15_breaker_transient/15_breaker_transient_explanation_pdf_qa.md`
- 練習source: `topics/15_breaker_transient/15_breaker_transient_practice.md`
- 練習PDF: `topics/15_breaker_transient/15_breaker_transient_practice.pdf`
- 練習PDF QA: `topics/15_breaker_transient/15_breaker_transient_practice_pdf_qa.md`
- PowerPoint: `topics/15_breaker_transient/15_breaker_transient_images.pptx`
- PowerPoint QA: `topics/15_breaker_transient/15_breaker_transient_powerpoint_qa.md`
- 完成後独立再解答: `topics/15_breaker_transient/15_breaker_transient_reanswer.md`
- 初回最終QA: `topics/15_breaker_transient/15_breaker_transient_final_qa.md`
- completion: `in_progress`
- stage: `FINAL_QA_NEEDS_REVISION`

## Topic 15 固定範囲

系列SPECどおり次だけを扱う。

- RL回路
- RC回路
- RLC回路
- 初期条件
- 過渡項
- 定常項
- 時定数
- 微分方程式
- 必要に応じてラプラス変換

`L di/dt + Ri = V` 等から時間応答を求める。必要に応じて電流・電圧の過渡応答グラフを作成する。変電設備の開閉は導入例に限定し、遮断器アーク、過渡回復電圧、保護協調、電力系統過渡安定度、自動制御、パワーエレクトロニクス等を品質ゲートへ追加しない。

## Topic 15 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R8 一次 理論 問6: RC・RLのスイッチング、RLC自由応答、蓄積エネルギー
- R7 一次 理論 問6: 複数コンデンサ、電荷保存、RC微分方程式、定常値
- R6 一次 理論 問4: RC回路、初期値・定常値、等価抵抗、時定数
- R5 一次 理論 問5: RL自然応答、微分方程式、時定数、誘導起電力
- R4 一次 理論 問4: 複数枝を持つRL回路、スイッチ前後の回路式、時定数

一次・二次合わせ関連候補9件を確認済み。R7/R6二次の制御系時間応答、R6二次のチョッパ、R5二次の電力系統過渡安定度は別体系を必要とするため非採用。

- 公式問題・公式標準解答照合: `25 / 25`
- 制作前独立再解答: `25 / 25 PASS`
- 完成後独立再解答: `25 / 25 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 仕様外論点追加: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 15 解説本文QA

- EXAM_ALIGNMENT必須説明17項目: `17 / 17 covered`
- 固定一次5問・25答案要素への教材内接続: `25 / 25`
- 3段階例題: `3 / 3`
- 基礎例題: RL直流投入、`tau=L/R`
- 本試験標準例題: RC等価抵抗・最終値、`tau=R_eq C`
- 複合・ひっかけ例題: RLC自由応答・二階微分方程式・蓄積エネルギー
- 複数コンデンサの電荷保存とエネルギー差も本文で収録
- 例題数値再計算: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 遮断器アーク・過渡回復電圧・保護協調等の仕様外追加: `0件`
- 未確認実設備値・実測波形追加: `0件`
- Topic 16以降の先取り: `0件`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 15 解説PDF QA

記録: `topics/15_breaker_transient/15_breaker_transient_explanation_pdf_qa.md`

- A4縦2ページ
- 200 dpi全ページ表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 固定一次5問・25答案要素への教材内接続: `25 / 25`
- 3段階例題: `3 / 3`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 遮断器アーク・過渡回復電圧・保護協調等の仕様外追加: `0件`
- 未確認実設備値・実測波形追加: `0件`
- Topic 16以降の先取り: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 15 練習問題・PDF QA

記録: `topics/15_breaker_transient/15_breaker_transient_practice_pdf_qa.md`

- 12問・全問五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- PDF A4縦6ページ
- 200 dpi全ページ表示QA: `6 / 6 PASS`
- 文字抽出QA: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 遮断器アーク・過渡回復電圧・保護協調の追加: `0件`
- 自動制御・パワーエレクトロニクス・電力系統過渡安定度の追加: `0件`
- Topic 16以降の先取り: `0件`
- 未確認実設備値・実測過渡波形追加: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 15 PowerPoint QA

記録: `topics/15_breaker_transient/15_breaker_transient_powerpoint_qa.md`

- 16:9・5枚
- 200 dpi全スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `5ページ / PASS`
- PDF文字抽出QA: `PASS`
- 系列SPEC指定可視化（RL・RC・RLC過渡応答波形）: `PASS`
- `t=0- / t=0+ / t→∞`、`i_L`・`v_C` 連続条件、時定数、電荷保存、RLC二階微分方程式、蓄積エネルギーを可視化: `PASS`
- 固定一次5問・25答案要素の可視化: `25 / 25`
- 最終スライドに公式過去問出典: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 遮断器アーク・過渡回復電圧・保護協調等の追加: `0件`
- 自動制御・パワーエレクトロニクス・電力系統過渡安定度の追加: `0件`
- Topic 16以降の先取り: `0件`
- 未確認実設備値・実測過渡波形追加: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## Topic 15 完成後独立再解答

記録: `topics/15_breaker_transient/15_breaker_transient_reanswer.md`

- R8 一次 理論 問6: `5 / 5 PASS`
- R7 一次 理論 問6: `5 / 5 PASS`
- R6 一次 理論 問4: `5 / 5 PASS`
- R5 一次 理論 問5: `5 / 5 PASS`
- R4 一次 理論 問4: `5 / 5 PASS`
- 一次合計: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 教材内の初期条件・最終値・時定数・微分方程式・電荷保存・RLC自由応答・蓄積エネルギーだけで再構成: `PASS`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 16以降の先取り: `0件`
- 未確認実設備値・実測過渡波形追加: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## Topic 15 初回最終QA

記録: `topics/15_breaker_transient/15_breaker_transient_final_qa.md`

- 必須成果物: `PASS`
- 固定一次5問・25答案要素の完成後独立再解答: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 二次採用判断: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC境界: `PASS`
- PDF/PPTX表示QA・練習QA: `PASS`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答の不整合: `0件`
- 進捗記録blocker: `4箇所`
  - 主source冒頭状態
  - 主source末尾「次工程」
  - 練習source冒頭状態
  - 練習source末尾「次工程」

判定: `NEEDS_REVISION / IN_PROGRESS`

## Topic 14 成果物

- source: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics.md`
- 解説PDF: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_explanation.pdf`
- 解説PDF QA: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_explanation_pdf_qa.md`
- 練習source: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_practice.md`
- 練習PDF: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_practice.pdf`
- 練習PDF QA: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_practice_pdf_qa.md`
- PowerPoint: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_images.pptx`
- PowerPoint QA: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_powerpoint_qa.md`
- 完成後独立再解答: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_reanswer.md`
- 最終QA: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_final_qa.md`
- completion: `completed`
- stage: `COMPLETED`

## Topic 14 固定範囲

系列SPECどおり次だけを扱う。

- 非正弦波
- フーリエ級数
- 基本波
- 高調波
- 実効値
- 波形ひずみ
- 高調波成分

可視化はPWM波形、基本波との比較、FFT・周波数スペクトル、高調波次数別振幅まで。主回路デバイス選定、誘導機制御、系統用高調波フィルタ設計、Topic 15過渡現象、未確認実車PWM方式・スイッチング周波数・高調波実測値を追加しない。

## Topic 14 固定EXAM_ALIGNMENT

品質ゲート対象は一次2問・3答案要素＋二次1問・2答案要素、合計 `3問・5答案要素`。

- H24 一次 機械 問3 (4)(5): 位相差による第5・第7高調波低減、基本波成分
- H22 一次 機械 問3 (3): PWMインバータ出力の基本波実効値
- H28 二次 機械・制御 問3 (3)(4): 3n次高調波、線間電圧での打消し、非正弦波実効値

一次・二次合わせ関連候補8件を確認済み。H30/H25二次「電力・管理」は設備固有体系、H24二次は高調波無視条件、R4二次は整流器・直流電圧・電動機等への依存が大きいため非採用。

- 制作前独立再解答: `5 / 5 PASS`
- 完成後独立再解答: `5 / 5 PASS`
- 二次採用: `1問・2答案要素`
- 二次数合わせ: `0件`

## Topic 14 解説PDF QA

記録: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_explanation_pdf_qa.md`

- A4縦2ページ
- 200 dpi全ページ表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 固定3問・5答案要素への接続: `5 / 5`
- 3段階例題: `3 / 3`
- SPEC固定範囲外追加: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 14 練習問題・PDF QA

記録: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_practice_pdf_qa.md`

- 12問・全問五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定3問・5答案要素への接続: `5 / 5`
- PDF A4縦5ページ
- 200 dpi全ページ表示QA: `5 / 5 PASS`
- 文字抽出QA: `PASS`
- 二次採用: `1問・2答案要素`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 15過渡現象の先取り: `0件`
- 未確認実車PWM方式・スイッチング周波数・高調波実測値追加: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 14 PowerPoint QA

記録: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_powerpoint_qa.md`

- 16:9・5枚
- 200 dpi全スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換・文字抽出QA: `PASS`
- 系列SPEC指定可視化: `4 / 4 PASS`
- 固定3問・5答案要素の可視化: `5 / 5`
- 二次採用: `1問・2答案要素`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 15過渡現象の先取り: `0件`
- 未確認実車PWM方式・スイッチング周波数・高調波実測値追加: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## Topic 14 完成後独立再解答

記録: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_reanswer.md`

- H24 一次 機械 問3 (4)(5): `2 / 2 PASS`
- H22 一次 機械 問3 (3): `1 / 1 PASS`
- H28 二次 機械・制御 問3 (3)(4): `2 / 2 PASS`
- 一次合計: `3 / 3 PASS`
- 二次合計: `2 / 2 PASS`
- 総合: `5 / 5 PASS`
- 公式標準解答一致: `5 / 5`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 二次数合わせ: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## Topic 14 最終QA

記録: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_final_qa.md`

- 必須成果物: `PASS`
- 固定3問・5答案要素の完成後独立再解答: `5 / 5 PASS`
- PDF/PPTX表示QA・練習QA: `PASS`
- 二次採用判断・SPEC境界: `PASS`
- 初回blocker 3件の解消: `3 / 3 PASS`
- 進捗記録整合: `PASS`

判定: `PASS / FINAL_QA_COMPLETE`

## Topic 14 進捗記録同期

初回最終QAで指摘された3箇所を実成果物へ同期し、最終QA PASS後にcompleted状態まで同期した。

- 主source: `COMPLETED / completed`
- 練習source: `COMPLETED / completed`
- STATUS / HANDOFF: Topic 14 completed、完成数 `14 / 21`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの変更: `0件`
- 固定一次2問・3答案要素＋二次1問・2答案要素の独立再解答: `5 / 5 PASS` を維持
- 二次採用: `1問・2答案要素`、二次数合わせ: `0件` を維持

判定: `PASS / completed`

## 次に行うこと

Topic 15の主source・練習sourceに残る旧進捗記録4箇所を、PowerPoint・完成後独立再解答・初回最終QAまで完了した実状態へ同期する。技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更しない。