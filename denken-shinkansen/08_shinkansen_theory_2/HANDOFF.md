# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜14は `PASS / completed`。完成数は `14 / 21`。

current_status: `topic_14_completed`

active_topic: `15 遮断器を入れた瞬間、電流はどう変化する？`

Topic 14は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF、解説画像PowerPoint＋表示QA、完成後独立再解答、最終QA再実施、completed状態同期まで完了。固定一次2問・3答案要素＋二次1問・2答案要素は完成教材だけで `5 / 5 PASS`、公式標準解答と全件一致。初回最終QAで唯一FAILだった主source冒頭・主source末尾・練習source冒頭の旧進捗記録3件は全件解消し、再実施した最終QAは `PASS / FINAL_QA_COMPLETE`。技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXは変更していない。次工程はTopic 15の制作前EXAM_ALIGNMENT。

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

Topic 15「遮断器を入れた瞬間、電流はどう変化する？」の制作前EXAM_ALIGNMENT。