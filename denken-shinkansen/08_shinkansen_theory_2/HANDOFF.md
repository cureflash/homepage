# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜15は `PASS / completed`。完成数は `15 / 21`。

current_status: `topic_16_practice_pdf_complete`

active_topic: `16 300系の半導体はなぜ電流を一方向へ流せる？`

Topic 16は練習問題source＋練習PDFまで完了。固定一次5問・25答案要素を練習問題へ `25 / 25` 接続。練習問題は12問・全問五肢択一、基礎3 / 本試験標準6 / 複合・ひっかけ3、数値再計算・論理QA `12 / 12 PASS`、正答一意性 `12 / 12 PASS`。練習PDFはA4縦3ページ、200 dpi全ページ表示QA `3 / 3 PASS`、文字抽出QA `PASS`。二次採用0問・数合わせ0件、降伏機構の詳細、パワーエレクトロニクス回路、Topic 17、未確認300系主変換装置仕様の追加0件。次工程は解説画像PowerPoint＋表示QA。

## Topic 16 成果物

- source: `topics/16_semiconductor_diode/16_semiconductor_diode.md`
- 解説PDF: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation.pdf`
- 解説PDF QA: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation_pdf_qa.md`
- 練習source: `topics/16_semiconductor_diode/16_semiconductor_diode_practice.md`
- 練習PDF: `topics/16_semiconductor_diode/16_semiconductor_diode_practice.pdf`
- 練習PDF QA: `topics/16_semiconductor_diode/16_semiconductor_diode_practice_pdf_qa.md`
- completion: `in_progress`
- stage: `PRACTICE_PDF_COMPLETE`

## Topic 16 固定範囲

系列SPECどおり次だけを扱う。

- 導体・半導体
- 真性半導体
- n形半導体
- p形半導体
- 電子
- 正孔
- キャリア
- pn接合
- 空乏層
- 順方向バイアス
- 逆方向バイアス
- ダイオード特性

300系主変換装置は導入に限定する。整流器・チョッパ・インバータ等のパワーエレクトロニクス回路そのものは機械編へ譲る。Topic 17のトランジスタ、FET、MOSFET、IGBT、GTO、SiC、増幅、動作点、負荷線、スイッチング、電力損失は先取りしない。

## Topic 16 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R8 一次 理論 問7: pn接合、空乏層、ガウスの法則、電界・電位、順方向電流
- H30 一次 理論 問4: 真性キャリア濃度、`pn=n_i^2`、n形半導体、多数・少数キャリア
- H26 一次 理論 問7: p形・n形、正孔、空乏層、順方向/逆方向バイアス、整流作用
- H24 一次 理論 問4: pn接合、空乏層電荷、電界、電位差、逆方向側の特性
- H22 一次 理論 問7: pn接合、空乏層、電界・電位、電位障壁、順方向バイアス、指数特性

一次・二次合わせ関連候補12件を確認済み。R6一次問7、H28一次問4は移動度等が主題、R4一次問6は降伏機構の詳細、R5一次問7はMOSFETでTopic 17のため非採用。R7二次機械・制御問3、R6二次機械・制御問3はダイオードを含むがパワーエレクトロニクス回路そのものが主題なので非採用。R5二次に固定範囲だけで完答する直接対応問題は確認できなかった。R8二次は2026-09-17時点で未実施。

- 公式問題・公式標準解答照合: `25 / 25`
- 制作前独立導出: `25 / 25 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 16 解説本文QA

- EXAM_ALIGNMENT必須説明17項目: `17 / 17 covered`
- 固定一次5問・25答案要素への教材内接続: `25 / 25`
- 3段階例題: `3 / 3`
- 基礎例題: n形半導体の多数・少数キャリア、`pn=n_i^2`
- 本試験標準例題: pn接合の空乏層電荷、最大電界、電位障壁
- 複合・ひっかけ例題: 順方向バイアス、指数的I-V特性、電子移動方向と慣用電流方向
- 例題数値再計算: `PASS`
- 真性/n形/p形・多数/少数キャリア: `PASS`
- pn接合・空乏層・電荷中性・電界・電位: `PASS`
- 順方向/逆方向・指数的I-V特性: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 降伏機構の詳細追加: `0件`
- パワーエレクトロニクス回路追加: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 16 解説PDF QA

記録: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation_pdf_qa.md`

- A4縦2ページ
- 200 dpi全ページ表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- SHA-256: `6c06933153460b2e6bbe9bc0811b285d0482cef30fd78e7dbbec6ab5ce71ed03`
- 固定一次5問・25答案要素への教材内接続: `25 / 25`
- EXAM_ALIGNMENT必須説明17項目: `17 / 17 covered`
- 3段階例題: `3 / 3`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- 降伏機構の詳細追加: `0件`
- パワーエレクトロニクス回路追加: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 16 練習問題・PDF QA

記録: `topics/16_semiconductor_diode/16_semiconductor_diode_practice_pdf_qa.md`

- 12問・全問五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- R8一次: 問3・問5・問6・問7・問12
- H30一次: 問1・問2・問10
- H26一次: 問3・問10・問12
- H24一次: 問4・問5・問9・問11・問12
- H22一次: 問3・問6・問7・問8・問12
- PDF A4縦3ページ
- 200 dpi全ページ表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- SHA-256: `ab5a0f73f641f06b10a4748c544abb288ab811d2e7481bbf70e91553d6740795`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 降伏機構の詳細追加: `0件`
- パワーエレクトロニクス回路追加: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

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
- 最終QA: `topics/15_breaker_transient/15_breaker_transient_final_qa.md`
- completion: `completed`
- stage: `COMPLETED`

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

## Topic 15 進捗記録同期

初回最終QAで指摘された4箇所だけを実成果物へ同期した。

- 主source冒頭: `SOURCE_PROGRESS_SYNCED / IN_PROGRESS`、PowerPoint・完成後独立再解答・初回最終QA・次工程を実状態へ同期
- 主source末尾: PowerPoint・完成後独立再解答・初回最終QAまで実状態へ同期し、次工程「最終QA再実施」へ更新
- 練習source冒頭: `SOURCE_PROGRESS_SYNCED / IN_PROGRESS`、次工程「最終QA再実施」
- 練習source末尾: 次工程「最終QA再実施」
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの変更: `0件`
- 固定一次5問・25答案要素の独立再解答: `25 / 25 PASS` を維持
- 二次採用: `0問`、二次数合わせ: `0件` を維持

判定: `PASS / SOURCE_PROGRESS_SYNCED`

## Topic 15 最終QA再実施

記録: `topics/15_breaker_transient/15_breaker_transient_final_qa.md`

- 必須成果物: `PASS`
- 固定一次5問・25答案要素の完成後独立再解答: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 二次採用判断: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC境界: `PASS`
- PDF/PPTX表示QA・練習QA: `PASS`
- 初回blocker4件の解消: `4 / 4 PASS`
- 進捗記録整合: `PASS`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの変更: `0件`

判定: `PASS / FINAL_QA_COMPLETE`

## Topic 15 completed状態同期

最終QA PASS後、進捗記録だけをcompleted状態へ同期した。

- 主source: `COMPLETED / completed`
- 練習source: `COMPLETED / completed`
- STATUS / HANDOFF: Topic 15 completed、完成数 `15 / 21`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの変更: `0件`
- 固定一次5問・25答案要素の独立再解答: `25 / 25 PASS` を維持
- 二次採用: `0問`、二次数合わせ: `0件` を維持

判定: `PASS / completed`

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

Topic 16の解説画像PowerPoint＋表示QAを作成する。降伏機構の詳細、パワーエレクトロニクス回路、Topic 17、未確認の300系主変換装置仕様を追加しない。
