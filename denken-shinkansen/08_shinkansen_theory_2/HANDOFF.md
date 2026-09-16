# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜13は `PASS / completed`。完成数は `13 / 21`。

current_status: `topic_14_explanation_pdf_complete`

active_topic: `14 インバータのギザギザ波形を分解する`

Topic 14は解説本文＋3段階例題、解説PDF＋表示QAまで完了。固定一次2問・3答案要素＋二次1問・2答案要素を `5 / 5` 接続し、3段階例題 `3 / 3`。解説PDFはA4縦2ページ、200 dpi全ページ表示QA `2 / 2 PASS`、文字抽出PASS。二次採用1問・2答案要素、二次数合わせ0件。次工程は練習問題source＋練習PDF。

## Topic 14 成果物

- source: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics.md`
- 解説PDF: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_explanation.pdf`
- 解説PDF QA: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_explanation_pdf_qa.md`
- completion: `in_progress`
- stage: `EXPLANATION_PDF_COMPLETE`

## Topic 14 固定範囲

系列SPECどおり次だけを扱う。

- 非正弦波
- フーリエ級数
- 基本波
- 高調波
- 実効値
- 波形ひずみ
- 高調波成分

系列SPECが許可する可視化:

- PWM波形
- 基本波との比較
- FFT・周波数スペクトル
- 高調波次数別振幅

計算プログラムを使用する場合、代表成分は手計算等で独立検証する。主回路デバイス選定、誘導機制御、系統用高調波フィルタ設計等が主題の設問は固定品質ゲートへ採用しない。Topic 15の過渡現象は先取りしない。

## Topic 14 固定EXAM_ALIGNMENT

品質ゲート対象は一次2問・3答案要素＋二次1問・2答案要素、合計 `3問・5答案要素`。

- H24 一次 機械 問3 (4)(5): 位相差による第5・第7高調波低減、基本波成分
- H22 一次 機械 問3 (3): PWMインバータ出力の基本波実効値
- H28 二次 機械・制御 問3 (3)(4): 3n次高調波、線間電圧での打消し、非正弦波実効値

一次・二次合わせ関連候補8件を確認した。H30/H25二次「電力・管理」は系統インピーダンス、変圧器、直列リアクトル、コンデンサ等の設備固有体系を要するため非採用。H24二次「機械・制御」は高調波を無視する条件、R4二次「機械・制御」は整流器・直流電圧・電動機等の前段計算への依存が大きいため非採用。

制作前独立再解答: `5 / 5 PASS`

二次採用: `1問・2答案要素`

二次数合わせ: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 14 解説本文QA

- 固定3問・5答案要素の本文・例題接続: `5 / 5`
- 3段階例題: `3 / 3`
- フーリエ級数一般形・係数・対称性: `PASS`
- 方形波の基本波・高調波振幅: `PASS`
- 同一次数成分の位相差・合成・打消し: `PASS`
- 3n次高調波の線間電圧での打消し: `PASS`
- 非正弦波実効値の定義積分・二乗和: `PASS`
- PWM基本波最大値→相実効値→線間実効値: `PASS`
- FFT・周波数スペクトルの読み方: `PASS`
- 計算プログラム・FFT結果ファイル生成: `0件`
- 二次採用方針変更: `0件`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 15過渡現象の先取り: `0件`
- 未確認実車PWM方式・スイッチング周波数・高調波実測値追加: `0件`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 14 解説PDF QA

記録: `topics/14_inverter_fourier_harmonics/14_inverter_fourier_harmonics_explanation_pdf_qa.md`

- A4縦2ページ
- 200 dpi全ページ表示QA: `2 / 2 PASS`
- 文字抽出QA: `PASS`
- 固定一次2問・3答案要素＋二次1問・2答案要素への接続: `5 / 5`
- 3段階例題: `3 / 3`
- クリッピング・文字重なり・文字化け・判読不能・ページ欠落: `0件`
- 二次採用: `1問・2答案要素`、二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 15過渡現象の先取り: `0件`
- 未確認実車PWM方式・スイッチング周波数・高調波実測値追加: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 13 成果物

- source: `topics/13_complex_power/13_complex_power.md`
- 解説PDF: `topics/13_complex_power/13_complex_power_explanation.pdf`
- 解説PDF QA: `topics/13_complex_power/13_complex_power_explanation_pdf_qa.md`
- 練習source: `topics/13_complex_power/13_complex_power_practice.md`
- 練習PDF: `topics/13_complex_power/13_complex_power_practice.pdf`
- 練習PDF QA: `topics/13_complex_power/13_complex_power_practice_pdf_qa.md`
- PowerPoint: `topics/13_complex_power/13_complex_power_images.pptx`
- PowerPoint QA: `topics/13_complex_power/13_complex_power_powerpoint_qa.md`
- 完成後独立再解答: `topics/13_complex_power/13_complex_power_reanswer.md`
- 最終QA: `topics/13_complex_power/13_complex_power_final_qa.md`
- completion: `completed`

## Topic 13 固定範囲

系列SPECどおり次だけを扱う。

- 複素電力
- 有効電力
- 無効電力
- 皮相電力
- 力率
- `S = VI*`
- 電力三角形
- 電力円線図の概念

新幹線側は大容量交流負荷の例としてのみ使用する。

境界:

- 送電線の単位法・百分率インピーダンス・潮流計算を追加しない
- 送電線の電圧降下設計・電圧安定限界の導出へ広げない
- 調相設備・変圧器・同期機等の設備固有設計へ広げない
- 電力円線図は概念までとし、送電系統の詳細設計計算を追加しない
- Topic 14の高調波・非正弦波解析、Topic 15の過渡現象を先取りしない
- 未確認の新幹線主回路・変電設備の内部仕様や実設備値を推測しない

## Topic 13 固定EXAM_ALIGNMENT

品質ゲート対象は一次3問・15小問＋二次1問・4答案要素、合計 `4問・19答案要素`。

- R7 一次 理論 問3 (1)〜(5): 位相、`P=EIcosφ`、コンデンサによる電力条件変化
- H22 一次 理論 問2 (1)〜(5): RC回路の実効値・位相・消費有効電力
- H21 一次 理論 問3 (1)〜(5): 複素アドミタンス、フェーザ、平均電力
- R2 二次 電力・管理 問6 (1)〜(3): P/Q/S、総合力率、P-Qベクトル、力率改善

関連候補は一次・二次合わせ8件を確認した。H30二次「電力・管理」問3、H25二次「電力・管理」問4は電力円線図に直接関連するが、送電線モデル・単位法・電圧安定度等を要するため非採用。R7二次「電力・管理」問3も％インピーダンス・単位法・短絡容量を要するため非採用。R8二次は2026-09-17時点で未実施。

二次採用 `1問・4答案要素`、二次数合わせ `0件`。

## Topic 13 品質ゲート結果

### 制作前・本文

- MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC: `PASS`
- 制作前独立再解答: `19 / 19 PASS`
- 固定4問・19答案要素の本文・例題接続: `19 / 19`
- 3段階例題: `3 / 3`
- SPEC固定範囲外追加: `0件`
- Topic 14以降の先取り: `0件`
- 未確認新幹線実設備値追加: `0件`

### 解説PDF

- A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 固定4問・19答案要素への接続: `19 / 19`

### 練習問題・PDF

- 12問・全問五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 独立再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定4問・19答案要素への接続: `19 / 19`
- PDF A4縦5ページ、200 dpi表示QA `5 / 5 PASS`
- 文字抽出QA: `PASS`

### PowerPoint

- 16:9 / 5枚
- 全スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- 固定4問・19答案要素の可視化: `19 / 19`

### 完成後独立再解答

- 一次3問・15小問: `15 / 15 PASS`
- 二次R2「電力・管理」問6・4答案要素: `4 / 4 PASS`
- 合計: `19 / 19 PASS`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 二次数合わせ: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## Topic 13 初回最終QA

記録: `topics/13_complex_power/13_complex_power_final_qa.md`

- 必須成果物実在: `PASS`
- 固定一次3問・15小問＋二次1問・4答案要素の完成後独立再解答: `19 / 19 PASS`
- 二次採用1問・4答案要素、二次数合わせ0件: `PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- SPEC固定範囲境界: `PASS`
- 進捗記録整合: `FAIL`

初回最終QA時点で残っていた旧進捗記録:

1. 主source冒頭が `EXPLANATION_PDF_COMPLETE`、次工程「練習問題source＋練習PDF」のまま。
2. 主source末尾が練習問題・PowerPoint・完成後独立再解答を未完了扱いし、現在地も `EXPLANATION_PDF_COMPLETE`、次工程「練習問題source＋練習PDF」のまま。
3. 練習source冒頭が `PRACTICE_PDF_COMPLETE`、次工程「解説画像PowerPoint＋表示QA」のまま。

技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの修正は不要。

判定: `NEEDS_REVISION / IN_PROGRESS`

## Topic 13 進捗記録同期

初回最終QAで指摘された3箇所だけを実成果物へ同期した。

- 主source冒頭: `SOURCE_PROGRESS_SYNCED / IN_PROGRESS`、次工程「最終QA再実施」
- 主source末尾: 練習問題source＋PDF、PowerPoint＋表示QA、完成後独立再解答を完了扱いへ同期
- 練習source冒頭: `SOURCE_PROGRESS_SYNCED / IN_PROGRESS`、次工程「最終QA再実施」
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの変更: `0件`
- 固定一次3問・15小問＋二次1問・4答案要素の独立再解答: `19 / 19 PASS` を維持
- 二次採用 `1問・4答案要素`、二次数合わせ `0件` を維持

判定: `PASS / SOURCE_PROGRESS_SYNCED`

## Topic 13 最終QA再実施

記録: `topics/13_complex_power/13_complex_power_final_qa.md`

- 必須成果物実在: `PASS`
- 固定一次3問・15小問＋二次1問・4答案要素の完成後独立再解答: `19 / 19 PASS`
- 二次採用1問・4答案要素、二次数合わせ0件: `PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- SPEC固定範囲境界: `PASS`
- 初回blocker 3件の解消: `PASS`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの変更: `0件`

判定: `PASS / FINAL_QA_COMPLETE`

## Topic 13 completed状態同期

最終QA PASS後、主source・練習source・STATUS・HANDOFFを完了状態へ同期した。

- 主source: `COMPLETED / completed`
- 練習source: `COMPLETED / completed`
- STATUS・HANDOFF: 完成数 `13 / 21`、次Topicを14へ同期
- 固定一次3問・15小問＋二次1問・4答案要素の完成後独立再解答: `19 / 19 PASS`
- 二次採用: `1問・4答案要素`、二次数合わせ: `0件`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX変更: `0件`
- SPEC固定範囲外追加: `0件`

最終判定: `PASS / completed`

## 直前完了Topic

Topic 13「新幹線の交流電力を複素数で扱う」は `PASS / completed`。

- 固定一次3問・15小問＋二次1問・4答案要素
- 完成後独立再解答 `19 / 19 PASS`
- 二次採用1問・4答案要素、二次数合わせ0件
- 解説source/PDF、練習source/PDF、PowerPoint、表示QA、最終QAまで完了
- 固定範囲外追加0件、未確認新幹線主回路・変電設備値追加0件

## 次に行うこと

Topic 14「インバータのギザギザ波形を分解する」の練習問題source＋練習PDF。固定3問・5答案要素と系列SPECの固定範囲だけに接続し、設備・制御固有論点やTopic 15過渡現象を追加しない。